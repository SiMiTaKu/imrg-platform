import type { Image } from '@shared/model'
import type { SiteLocale } from '@shared/lib/i18n'
import type { LocalizedRuleBook, LocalizedRuleLine, LocalizedRuleSection } from '../model/ruleBook'
import type {
  RuleContent,
  RuleEntry,
  RuleFigureRef,
  RuleItem,
  RuleNode,
  RuleStructure,
} from '../model/ruleSource'
import { isFresh } from './fingerprint'

/** 図を引くための、鍵と画像の対応。`api/tables` の `imageSource` に合わせる */
const figureSource = (figure: string): string => `/images/rules/${figure}.png`

/**
 * 図の置き場所の指定から、鍵だけを取り出す
 * @param reference - 図の置き場所の指定
 * @returns 図の鍵
 */
const figureKey = (reference: RuleFigureRef): string =>
  typeof reference === 'string' ? reference : reference.figure

/**
 * 本文の行に、その直後へ差し込む図を割り当てる。
 *
 * @remarks
 * 冊子では本文の途中に表が挟まっていることがある。`after` に書いた書き出しで
 * 手前の行を探し、その行に図を持たせる。見つからなかったものは末尾に回す
 *
 * @param lines - 本文の行
 * @param references - 図の置き場所の指定
 * @param alt - 図の代わりに読む文字
 * @returns 図を割り当てた行と、末尾に出す図
 */
const placeFigures = (
  lines: LocalizedRuleLine[],
  references: readonly RuleFigureRef[],
  alt: string,
): { lines: LocalizedRuleLine[]; trailing: Image[] } => {
  const placed = lines.map((line) => ({ ...line }))
  const trailing: Image[] = []

  for (const reference of references) {
    const image = { src: figureSource(figureKey(reference)), alt }
    const anchor =
      typeof reference === 'string'
        ? undefined
        : placed.find((line) => line.text.startsWith(reference.after))
    if (anchor) {
      anchor.image = [...(anchor.image ?? []), image]
    } else {
      trailing.push(image)
    }
  }

  return { lines: placed, trailing }
}

/**
 * 番号の付いた項目を、画面に出す1本の文にする
 * @param items - 項目
 * @param depth - 入れ子の深さ。中に入るほど字下げする
 * @returns 改行でつないだ文
 */
const renderItems = (items: readonly RuleItem[] = [], depth = 0): string => {
  const indent = '　'.repeat(depth)
  return items
    .map((item) => {
      const head = item.label ? `${indent}${item.label} ${item.text}` : `${indent}${item.text}`
      const children = renderItems(item.items, depth + 1)
      return children ? `${head}\n${children}` : head
    })
    .join('\n')
}

/**
 * 条文の本文を、画面に出す1本の文にする
 * @param entry - 条文
 * @returns 導入と項目を改行でつないだ文
 */
const renderBody = (entry: RuleEntry): string =>
  [entry.lead, renderItems(entry.items)].filter((part) => part).join('\n')

/**
 * 項目を、番号と本文に分けた行の並びにする
 * @param items - 項目
 * @param depth - 入れ子の深さ
 * @returns 行の並び
 */
const toLines = (items: readonly RuleItem[] = [], depth = 0): LocalizedRuleLine[] =>
  items.flatMap((item) => [
    { depth, label: item.label ?? '', text: item.text },
    ...toLines(item.items, depth + 1),
  ])

/**
 * 条文の本文を、番号と本文に分けた行の並びにする
 * @param entry - 条文
 * @returns 行の並び。導入の文は番号の無い行になる
 */
const bodyLines = (entry: RuleEntry): LocalizedRuleLine[] => [
  ...(entry.lead ? [{ depth: 0, label: '', text: entry.lead }] : []),
  ...toLines(entry.items),
]

/**
 * 表示する言語の条文を選ぶ。
 *
 * @remarks
 * 訳が日本語に追いついていないときは、その訳を使わない。
 * 古い訳をそのまま出すより、英語（無ければ日本語）に落とすほうが誤りが伝わらない
 *
 * @param key - 条文の鍵
 * @param locale - 表示する言語
 * @param content - 言語ごとの本文
 * @returns 出してよい条文
 */
const pickEntry = (
  key: string,
  locale: SiteLocale,
  content: Readonly<Record<SiteLocale, RuleContent>>,
): RuleEntry => {
  const japanese = content.ja[key]
  if (locale === 'ja') return japanese
  const translated = content[locale]?.[key]
  if (isFresh(japanese, translated)) return translated as RuleEntry
  const english = content.en?.[key]
  if (locale !== 'en' && isFresh(japanese, english)) return english as RuleEntry
  return japanese
}

/**
 * 骨格と本文から、表示する言語の規則集を組み立てる。
 *
 * @remarks
 * 骨格（どこに何があるか）と本文（何が書いてあるか）は別々に持っている。
 * 画面に渡すときだけ、この関数で1つにまとめる。
 *
 * 番号は骨格が持つ冊子どおりの表記（`3.5.7` など）をそのまま渡す。
 * 画面の側で数え直すと、冊子と対応しない通し番号になってしまう
 *
 * @param structure - 骨格
 * @param content - 言語ごとの本文
 * @param locale - 表示する言語
 * @param title - 規則集の題名
 * @returns 表示する言語に絞った規則集
 */
export const buildRuleBook = (
  structure: RuleStructure,
  content: Readonly<Record<SiteLocale, RuleContent>>,
  locale: SiteLocale,
  title: string,
): LocalizedRuleBook => {
  /**
   * 節点を、画面に出す条項にする
   * @param node - 節点
   * @returns 条項
   */
  const toSection = (node: RuleNode): LocalizedRuleSection => {
    const entry = pickEntry(node.key, locale, content)
    const placed = placeFigures(bodyLines(entry), node.figures ?? [], entry.title)
    return {
      number: node.number,
      page: node.page,
      title: entry.title,
      content: renderBody(entry),
      lines: placed.lines,
      image: placed.trailing,
      block: (node.children ?? []).map((child) => {
        const childEntry = pickEntry(child.key, locale, content)
        const childPlaced = placeFigures(
          bodyLines(childEntry),
          child.figures ?? [],
          childEntry.title,
        )
        return {
          number: child.number,
          title: childEntry.title,
          element: renderBody(childEntry),
          lines: childPlaced.lines,
          image: childPlaced.trailing,
        }
      }),
    }
  }

  return {
    title,
    chapter: structure.map((chapter) => ({
      number: chapter.number,
      title: pickEntry(chapter.key, locale, content).title,
      article: (chapter.children ?? []).map((article) => {
        const entry = pickEntry(article.key, locale, content)
        const articlePlaced = placeFigures(bodyLines(entry), article.figures ?? [], entry.title)
        return {
          number: article.number,
          title: entry.title,
          // 節そのものの本文と図。条を持たない節（2.1 新体操の特性）があるため
          lines: articlePlaced.lines,
          image: articlePlaced.trailing,
          section: (article.children ?? []).map(toSection),
        }
      }),
    })),
  }
}
