import type { GuideKey } from './guideKey'

/**
 * 本文の1かたまり。
 *
 * @remarks
 * Markdown ではなくこの形で持つ理由は `docs/rules-guide.md` の 7-2 による。
 * 8言語の訳の追従を型で守るため、そして同じ本文からサイト・本・動画の台本を出すため。
 *
 * 絵と動画は**鍵だけ**を持つ。まだ無いものは画面に出さない
 */
export type GuideBlock =
  /** 小見出し */
  | { kind: 'heading'; text: string }
  /** ふつうの段落 */
  | { kind: 'paragraph'; text: string }
  /** 箇条書き */
  | { kind: 'list'; items: readonly string[] }
  /** 表。数えられるものは文章で並べず、これにする */
  | {
      kind: 'table'
      caption: string
      columns: readonly string[]
      rows: readonly (readonly string[])[]
    }
  /** 覚えておくと得をする一言。囲んで見せる */
  | { kind: 'note'; text: string }
  /** 絵。`figureKey` に絵が無い間は、このかたまりごと出さない */
  | { kind: 'figure'; figureKey: string; caption: string }
  /** YouTube の動画 */
  | { kind: 'video'; videoId: string; caption: string }
  /** ほかの解説のページへ送る */
  | { kind: 'link'; to: GuideKey; label: string }
  /**
   * カードを横に並べる。いくつかのものを見くらべるときに使う。
   *
   * @remarks
   * 表よりも親しみやすく見せたいところ（団体と個人の違いなど）で使う。
   * 行や列が多く、数字の見くらべが主になるものは表のままにする
   */
  | { kind: 'cards'; cards: readonly GuideCard[] }

/** カード1枚 */
export interface GuideCard {
  /** カードの名前（「団体」など） */
  title: string
  /** 名前の下に出すひとこと（「5人でそろえる」など） */
  tagline?: string
  /** 見くらべる項目。左に項目の名前、右に中身 */
  facts: readonly { label: string; value: string }[]
  /** カードの下に出す説明 */
  body?: string
  /** くわしいページへのリンク。本文の無いページなら出さない */
  link?: { to: GuideKey; label: string }
}

/**
 * 段落や表の中身を、文字だけ取り出す。
 *
 * @remarks
 * 文の長さと禁止語を見るテストが使う。本の原稿へ落とすときにも使える
 * @param block - 本文のかたまり
 * @returns そのかたまりが持っている文字。絵と動画は説明文だけ
 */
export const guideBlockTexts = (block: GuideBlock): string[] => {
  switch (block.kind) {
    case 'heading':
    case 'paragraph':
    case 'note':
      return [block.text]
    case 'list':
      return [...block.items]
    case 'table':
      return [block.caption, ...block.columns, ...block.rows.flat()]
    case 'figure':
    case 'video':
      return [block.caption]
    case 'link':
      return [block.label]
    case 'cards':
      return block.cards
        .flatMap((card) => [
          card.title,
          card.tagline ?? '',
          ...card.facts.flatMap((fact) => [fact.label, fact.value]),
          card.body ?? '',
          card.link?.label ?? '',
        ])
        .filter((text) => text !== '')
  }
}
