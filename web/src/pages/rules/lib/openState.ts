import type { LocalizedRuleBook, LocalizedRuleChapter } from '@entities/rule'

/**
 * 規則集の開閉。見分ける名前ごとに、開いていれば true を持つ
 *
 * @remarks
 * 載っていないところは {@link DEFAULT_OPEN} に従う。押したところだけを覚える形にして、
 * 章・節・条のすべてを初めから並べなくて済むようにしている。
 */
export type RuleOpenState = Record<string, boolean>

/**
 * まだ押されていないところの開閉。
 *
 * @remarks
 * 章・節・条のどれも閉じた状態から始める。節を開いたときに本文まで出すと
 * 縦が長くなりすぎ、読みたい条に行き着くまで送り続けることになるため、
 * 条の見出しが並ぶところで一度止める。押す回数は増えるが、見渡しが効く。
 */
export const DEFAULT_OPEN = {
  /** 章 */
  chapter: false,
  /** 節（章の中の大項） */
  article: false,
  /** 条（節の中の条項） */
  section: false,
} as const

/**
 * 章の開閉を見分ける名前。要素の id にも使う
 * @param chapterIndex - 章の位置（0 始まり）
 * @returns 見分ける名前
 */
export const chapterKey = (chapterIndex: number): string => `rule-chapter-${chapterIndex}`

/**
 * 節の開閉を見分ける名前。要素の id にも使う
 * @param chapterIndex - 章の位置（0 始まり）
 * @param articleIndex - 節の位置（0 始まり）
 * @returns 見分ける名前
 */
export const articleKey = (chapterIndex: number, articleIndex: number): string =>
  `${chapterKey(chapterIndex)}-article-${articleIndex}`

/**
 * 条の開閉を見分ける名前。要素の id にも使う
 * @param chapterIndex - 章の位置（0 始まり）
 * @param articleIndex - 節の位置（0 始まり）
 * @param sectionIndex - 条の位置（0 始まり）
 * @returns 見分ける名前
 */
export const sectionKey = (
  chapterIndex: number,
  articleIndex: number,
  sectionIndex: number,
): string => `${articleKey(chapterIndex, articleIndex)}-section-${sectionIndex}`

/**
 * そこが開いているか
 * @param openState - 今の開閉
 * @param key - 開閉を見分ける名前
 * @param defaultOpen - まだ押されていないときの開閉
 * @returns 開いていれば true
 */
export const isOpenAt = (openState: RuleOpenState, key: string, defaultOpen: boolean): boolean =>
  openState[key] ?? defaultOpen

/**
 * 初めて開いたときの開閉
 * @returns 第1章だけを開いた開閉
 */
export const createInitialOpenState = (): RuleOpenState => ({ [chapterKey(0)]: true })

/**
 * 章ひとつの中（章・節・条）をまとめて開け閉めする
 * @param openState - 今の開閉
 * @param chapter - 開け閉めする章
 * @param chapterIndex - 章の位置（0 始まり）
 * @param open - 開くなら true
 * @returns 書き換えた開閉。ほかの章はそのまま残す
 */
export const withChapterOpen = (
  openState: RuleOpenState,
  chapter: LocalizedRuleChapter,
  chapterIndex: number,
  open: boolean,
): RuleOpenState => {
  const next: RuleOpenState = { ...openState, [chapterKey(chapterIndex)]: open }
  chapter.article.forEach((article, articleIndex) => {
    next[articleKey(chapterIndex, articleIndex)] = open
    article.section.forEach((_section, sectionIndex) => {
      next[sectionKey(chapterIndex, articleIndex, sectionIndex)] = open
    })
  })
  return next
}

/**
 * 規則集ぜんぶをまとめて開け閉めする
 * @param ruleBook - 表示している規則集
 * @param open - 開くなら true
 * @returns 書き換えた開閉
 */
export const withAllOpen = (ruleBook: LocalizedRuleBook, open: boolean): RuleOpenState =>
  ruleBook.chapter.reduce<RuleOpenState>(
    (openState, chapter, chapterIndex) => withChapterOpen(openState, chapter, chapterIndex, open),
    {},
  )

/**
 * 探している言葉を含むか
 * @param text - 調べる文字列
 * @param needle - 小文字にした、探している言葉
 * @returns 含んでいれば true
 */
const includesKeyword = (text: string, needle: string): boolean =>
  text.toLowerCase().includes(needle)

/**
 * 探している言葉に当てはまるところを、読める深さまで開いた開閉を作る
 * @param ruleBook - 表示している規則集
 * @param keyword - 探している言葉
 * @returns 当てはまるところを開いた開閉。言葉が空なら初めの開き方
 *
 * @remarks
 * 当てはまった条は、その章と節ごと開いて本文まで見せる。節や章の見出しだけが
 * 当てはまったときは、その見出しの中身（条の見出しが並ぶところ）までを開く。
 * 当てはまらなかったところは閉じたままにして、探し当てた場所だけが目に入るようにする。
 */
export const createOpenStateForKeyword = (
  ruleBook: LocalizedRuleBook,
  keyword: string,
): RuleOpenState => {
  const needle = keyword.trim().toLowerCase()
  if (needle === '') return createInitialOpenState()

  const matched: RuleOpenState = {}
  ruleBook.chapter.forEach((chapter, chapterIndex) => {
    if (includesKeyword(chapter.title, needle)) {
      matched[chapterKey(chapterIndex)] = true
    }
    chapter.article.forEach((article, articleIndex) => {
      if (includesKeyword(article.title, needle)) {
        matched[chapterKey(chapterIndex)] = true
        matched[articleKey(chapterIndex, articleIndex)] = true
      }
      article.section.forEach((section, sectionIndex) => {
        const sectionText = [
          section.title,
          section.content,
          ...section.block.flatMap((block) => [block.title, block.element]),
        ].join('\n')
        if (!includesKeyword(sectionText, needle)) return

        matched[chapterKey(chapterIndex)] = true
        matched[articleKey(chapterIndex, articleIndex)] = true
        matched[sectionKey(chapterIndex, articleIndex, sectionIndex)] = true
      })
    })
  })
  return matched
}

/**
 * 章が探している言葉を含むか。見出しと本文の両方を見る
 * @param chapter - 調べる章
 * @param keyword - 探している言葉
 * @returns 含んでいれば true。言葉が空なら常に true
 */
export const chapterMatchesKeyword = (chapter: LocalizedRuleChapter, keyword: string): boolean => {
  const needle = keyword.trim().toLowerCase()
  if (needle === '') return true

  const haystack = [
    chapter.title,
    ...chapter.article.flatMap((article) => [
      article.title,
      ...article.section.flatMap((section) => [
        section.title,
        section.content,
        ...section.block.flatMap((block) => [block.title, block.element]),
      ]),
    ]),
  ].join('\n')

  return includesKeyword(haystack, needle)
}
