/**
 * 罫線と直線だけでできた寸法図（所属マークの形と大きさなど）。
 *
 * @remarks
 * 図形は本物の縦横の比で描き、寸法と角度は冊子に印刷されているまま書き込む
 */

/** 寸法図の図形の種類。描き方はこの種類で決まる */
export type RuleShapeKind = 'square' | 'rectangle' | 'triangle' | 'circle' | 'rhombus'

/** 寸法図の図形ひとつ */
export interface RuleShape {
  /** 図形の種類 */
  readonly kind: RuleShapeKind
  /** 冊子の本文に書かれている形と大きさ。「4.5cm×4.5cm の正方形」 */
  readonly label: string
  /** 図の下に引いてある寸法。円は直径の線に書き込む。無い図形もある */
  readonly bottomLabel?: string
  /** 図の左に引いてある寸法。縦の長さ、または左の辺の長さ */
  readonly sideLabel?: string
  /** 図の中に書き込んである角度。左下の角から順に書く */
  readonly angleLabels?: readonly string[]
}

/**
 * 画像の代わりに出す、罫線と直線だけでできた寸法図。
 *
 * @remarks
 * 所属マークの形と大きさのように、直線と寸法の引き出し線だけでできた図をここに置く。
 * 図形は本物の縦横の比で描き、寸法と角度は冊子に印刷されているまま書き込む。
 * 紙面と違い、実物大にはならない
 */
export interface RuleShapeFigure {
  /** 置き換える画像のパス（`/images/rules/....png`） */
  readonly imageSource: string
  /** 図の名前 */
  readonly caption: string
  /** 並べる図形 */
  readonly shapes: readonly RuleShape[]
  /** 図の下に置く補足 */
  readonly note?: string
  /** 元にした資料。冊子名・節番号・ページ番号まで書く */
  readonly source: string
}
