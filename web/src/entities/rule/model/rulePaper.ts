/**
 * 審判が書き込む用紙（採点票・減点票）の、表のまわりにある欄。
 *
 * @remarks
 * 冊子の採点票は、表の上に大会名・種別・手具・選手名の欄があり、下に合計と署名の欄がある。
 * 表だけを出すと紙面と別物になるので、まわりの欄もここで持つ
 */

/** 手具の種類。冊子の採点票に絵で並んでいる4つ */
export const ApparatusKind = {
  /** スティック */
  STICK: 'stick',
  /** リング */
  RING: 'ring',
  /** ロープ */
  ROPE: 'rope',
  /** クラブ */
  CLUBS: 'clubs',
} as const

/** 手具の種類のどれか1つ */
export type ApparatusKind = (typeof ApparatusKind)[keyof typeof ApparatusKind]

/**
 * 採点票の、表のまわりにある欄。
 *
 * @remarks
 * 冊子の用紙をなぞる。どれも書き込む場所なので、中身は空のまま枠だけを出す
 */
export interface RulePaper {
  /**
   * 用紙の幅（px）。省くと1ページ大の 680px。
   *
   * @remarks
   * 冊子61ページの4枚のように、1ページに2枚ずつ並ぶはがき大の用紙は
   * 半分以下の幅にする。狭い画面でもほぼ横に送らずに収まり、
   * 紙に出すときは2枚を横に並べられる
   */
  readonly width?: number
  /** 右上に書く種別。冊子では「団体競技・個人競技」のように枠で囲んである */
  readonly categories?: readonly string[]
  /** 手具の欄。冊子では絵と名前が横に並ぶ */
  readonly apparatus?: readonly ApparatusKind[]
  /** 左上の印。難度なら `D`、実施なら `E` */
  readonly mark?: string
  /** 印の上に小さく添える言葉。「難度」「芸術と多様性」など */
  readonly markLabel?: string
  /** 大会名を書く欄の文言 */
  readonly event?: string
  /** 表の上に置く、書き込みの欄（選手名・団体名など） */
  readonly fields?: readonly string[]
  /** 表の下に置く、合計の欄（最終採点・減点合計など） */
  readonly totals?: readonly string[]
  /** いちばん下に置く、署名の欄 */
  readonly signatures?: readonly string[]
}
