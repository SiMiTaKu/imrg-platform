/**
 * 規則集の表。
 *
 * @remarks
 * いまは表を画像で載せているが、画像だと言葉で探せず、訳せず、スマホで読みにくい。
 * 文字で持ち直した表をここに置き、画像の代わりに出す。
 * 画像の `src` を鍵にして引くので、文字にできたものから少しずつ置き換えられる
 */

/**
 * 表の組み方。スマホでの見せ方が変わる
 *
 * - `list` … 「区分・内容・減点」のように、左から右へ読む表。
 *   列の幅を割り振って、スマホでも横に送らずに収める
 * - `matrix` … 行の見出しと列の見出しが交わる表（手具の規格など）。
 *   幅が足りないときは入れ物の中だけで横に送り、行の見出しは左に貼り付けておく
 */
export type RuleTableLayout = 'list' | 'matrix'

/** 表のます目。横に続けて使うときだけ `colSpan` を書く */
export interface RuleTableCell {
  /** ます目の中身。改行を入れると、そのまま改行して出る */
  readonly text: string
  /** 横に何列ぶん使うか。既定は 1 */
  readonly colSpan?: number
}

/** ます目の書き方。ただの文字列でも、`colSpan` 付きでも書ける */
export type RuleTableCellSource = string | RuleTableCell

/** 表の行 */
export interface RuleTableRow {
  /**
   * この行から始まる区分の名前。
   * 書くと、行の上に区分の見出しを1行はさむ。長い欠点表を読みやすくするためのもの
   */
  readonly group?: string
  /** 行の見出し。無い表もある */
  readonly header?: string
  /** 列の数だけ並べる。空文字は空欄 */
  readonly cells: readonly RuleTableCellSource[]
}

/** 画像の代わりに出す、文字で持ち直した表 */
export interface RuleTable {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 表の名前 */
  readonly caption: string
  /** 表の組み方。既定は `list` */
  readonly layout?: RuleTableLayout
  /** 左上の見出し。行の見出しが何を表すかを書く。無い表もある */
  readonly cornerLabel?: string
  /** 列の見出し */
  readonly columns: readonly string[]
  /** 行。見出しと、列ごとの中身 */
  readonly rows: readonly RuleTableRow[]
  /** 表の下に置く補足 */
  readonly note?: string
  /**
   * 元にした資料。冊子名・節番号・ページ番号まで書く。
   * あとで規則が変わったとき、どこを見直せばよいか分かるようにするためのもの
   */
  readonly source: string
}

/**
 * ます目の書き方をそろえる。ただの文字列で書かれていたら `text` だけの形にする
 * @param cell - ます目。文字列か、`colSpan` 付きのもの
 * @returns `text` と `colSpan` を持つ形にそろえたます目
 */
export const normalizeRuleTableCell = (cell: RuleTableCellSource): Required<RuleTableCell> =>
  typeof cell === 'string'
    ? { text: cell, colSpan: 1 }
    : { text: cell.text, colSpan: cell.colSpan ?? 1 }

/**
 * 行の見出しの列が要るか。見出しの付いた行が1つでもあれば要る
 * @param table - 表
 * @returns 行の見出しの列を出すなら true
 */
export const hasRowHeader = (table: RuleTable): boolean =>
  table.cornerLabel !== undefined || table.rows.some((row) => row.header !== undefined)
