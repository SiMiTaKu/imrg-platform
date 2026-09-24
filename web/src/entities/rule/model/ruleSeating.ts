/**
 * 審判席の並びの図。
 *
 * @remarks
 * 行と列が交わる表ではない。前列9席・後列4席のように数がそろわず、
 * 列の見出しに当たるものも無いので、表とは別に持つ
 */

/** 座席図の席。箱ひとつぶん */
export interface RuleSeat {
  /** 箱の中の文字。「E4」「セクレタリー」 */
  readonly label: string
  /** 箱の中の2行目。個人徒手のように「E」と「4審」が2段に印刷されているとき */
  readonly note?: string
}

/** 座席図の1列。前列・後列がそれぞれ1つ */
export interface RuleSeatRow {
  /** 列の名前。冊子には書かれていないので、読む人に向けて付ける */
  readonly label: string
  /** 列に添えられた但し書き。「1段高くする」など、矢印で引いてあるもの */
  readonly note?: string
  /** 左から順に並べた席 */
  readonly seats: readonly RuleSeat[]
}

/**
 * 画像の代わりに出す、文字で持ち直した座席図。
 *
 * @remarks
 * 審判席の並びは、行と列が交わる表ではない。前列9席・後列4席のように数がそろわず、
 * 列の見出しに当たるものも無い。`RuleTable` に当てはめると空の見出しが並ぶので、
 * 箱を横に並べた図として別に持つ
 */
export interface RuleSeating {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /** 前から順に並べた列 */
  readonly rows: readonly RuleSeatRow[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}
