/**
 * 規則集の表。
 *
 * @remarks
 * いまは表を画像で載せているが、画像だと言葉で探せず、訳せず、スマホで読みにくい。
 * 文字で持ち直した表をここに置き、画像の代わりに出す。
 * 画像の `src` を鍵にして引くので、文字にできたものから少しずつ置き換えられる
 */
export interface RuleTable {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 表の名前 */
  readonly caption: string
  /** 左上の見出し。行の見出しが何を表すかを書く。無い表もある */
  readonly cornerLabel?: string
  /** 列の見出し */
  readonly columns: readonly string[]
  /** 行。見出しと、列ごとの中身 */
  readonly rows: readonly {
    /** 行の見出し。無い表もある */
    readonly header?: string
    /** 列の数だけ並べる。空文字は空欄 */
    readonly cells: readonly string[]
  }[]
  /** 表の下に置く補足 */
  readonly note?: string
}
