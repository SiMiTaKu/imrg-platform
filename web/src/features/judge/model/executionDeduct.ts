import type { ApparatusSlug } from '@shared/model'

/**
 * 実施のAの減点項目の選択肢1つ分
 */
export type PointAOption = {
  /**
   * 選択肢のコード。グラフの値にも使う。
   *
   * @remarks
   * 規則の5段階が 1〜5（1 が最も大きい減点）。
   * 段階と段階の間の 0.05 刻みは、その間の値（1.5・2.5 など）を持つ
   */
  code: number
  /** 減点（0.5〜0.05） */
  value: number
}

/**
 * 規則の5段階の減点1つ分。段階の言い回しを持つ
 */
export type PointALevel = PointAOption & {
  /** 段階の言い回し（表示中の言語）。例: 著しく欠けた */
  level: () => string
}

/**
 * 実施のAの減点項目のキー
 */
export type PointAKey =
  | 'beautifulPose'
  | 'flexibility'
  | 'naturalMovement'
  | 'bendingWeight'
  | 'jumpingHeight'
  | 'bodyControl'
  | 'heelRaise'
  | 'weaknessAndStrength'
  | 'connectMovement'
  | 'apparatusControl'
  | 'musicImage'

/**
 * 実施のAの減点項目ごとに選んだ選択肢
 */
export type PointA = Record<PointAKey, PointAOption>

/**
 * 実施のAの減点項目の表示内容
 */
export type PointAItem = {
  /** 項目のキー */
  key: PointAKey
  /** 項目名（表示中の言語） */
  title: () => string
  /** 項目の説明（表示中の言語） */
  annotation: () => string
}

/**
 * 実施のBの、回数や秒数で数える欠点のキー。
 *
 * @remarks
 * 規則の実施欠点表（『新体操規則2025年版』46〜47ページ）のうち、
 * 「欠点基準に準じる」ではなく回数・歩数・秒数で数える項目にあたる
 */
export type PointBCountKey =
  | 'apparatusStopped'
  | 'apparatusShape'
  | 'apparatusExtension'
  | 'droppedSingle'
  | 'droppedDouble'
  | 'catchPlaceChanged'
  | 'catchPlaceKept'
  | 'catchMove12'
  | 'catchMove34'
  | 'catchMove5'
  | 'ropeShape'
  | 'ropeFloor'
  | 'somersaultApparatus'
  | 'somersaultHeight'
  | 'somersaultSpeed'
  | 'somersaultAxis'
  | 'landingStep'
  | 'landingHand'
  | 'landingFall'
  | 'posture'
  | 'flexibility'
  | 'jump'
  | 'turn'
  | 'stagger'
  | 'pause'
  | 'musicRhythm'

/** 数える単位。減点の出し方の文言を選ぶのに使う */
export const PointBUnit = {
  /** その都度 */
  EACH: 'each',
  /** 1秒につき */
  SECOND: 'second',
  /** 1歩につき */
  STEP: 'step',
} as const

/** 数える単位のどれか1つ */
export type PointBUnit = (typeof PointBUnit)[keyof typeof PointBUnit]

/**
 * 実施のBの、回数や秒数で数える欠点1つ分の定義
 */
export type PointBItem = {
  /** 項目のキー */
  key: PointBCountKey
  /** 項目名（表示中の言語） */
  title: () => string
  /** 1回（1歩・1秒）あたりの減点 */
  value: number
  /** 数える単位 */
  unit: PointBUnit
  /** 2つで1組の手具のときだけ出す項目なら true */
  pairOnly?: boolean
  /** その手具のときだけ出す項目。指定が無ければどの手具でも出す */
  apparatusSlug?: ApparatusSlug
}

/**
 * 実施のBの欠点の区分1つ分
 */
export type PointBGroup = {
  /** 区分のキー */
  key: string
  /** 区分名（表示中の言語） */
  title: () => string
  /** 区分に属する項目 */
  items: readonly PointBItem[]
}

/**
 * 実施のBの減点項目の入力値
 */
export type PointB = {
  /** 回数や秒数で数える欠点を、数えた数 */
  counts: Record<PointBCountKey, number>
  /** その他ミスによる減点 */
  miss: number
}

/**
 * 実施の採点項目。Aの減点項目とBの減点項目をまとめたもの
 */
export type ExecutionDeduct = {
  pointA: PointA
  pointB: PointB
}
