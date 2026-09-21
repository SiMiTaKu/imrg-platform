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
 * 実施のBの減点項目（手具の落下とミス）の入力値
 */
export type PointB = {
  droppedApparatus: {
    /** 1つの手具を落とした回数 */
    single: number
    /** 2つの手具（リング・クラブ）を同時に落とした回数 */
    double: number
  }
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
