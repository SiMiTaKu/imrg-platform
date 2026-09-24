/**
 * 罫線と文字だけでできた分類図（採点項目の系統図など）。
 *
 * @remarks
 * 画像ではなく入れ子の箇条書きとして持つ。
 * こうすると言葉で探せて、訳せて、狭い画面では縦に積み直せる
 */

/**
 * 分類図（採点項目の系統図など）の枝。
 *
 * @remarks
 * 罫線と文字だけでできた図は、画像ではなく入れ子の箇条書きとして持つ。
 * こうすると言葉で探せて、訳せて、狭い画面では縦に積み直せる
 */
export interface RuleTreeNode {
  /** 箱の中の文字 */
  readonly label: string
  /** 箱の中の2行目。配点など、規則に書いてあるときだけ */
  readonly note?: string
  /** そこから枝分かれする箱 */
  readonly children?: readonly RuleTreeNode[]
}

/** 画像の代わりに出す、文字で持ち直した分類図 */
export interface RuleTree {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /**
   * いちばん左の箱。1つの図に複数ある。
   *
   * @remarks
   * 2025年版の採点項目の図は「難度(D)」「芸術と多様性(A)」「実施(E)」のように
   * 根が複数あるため、1本ではなく並びで持つ
   */
  readonly roots: readonly RuleTreeNode[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}
