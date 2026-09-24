/**
 * 実施のAの減点項目の選択肢1つ分
 */
export type PointAOption = {
  /**
   * 付けた点（1〜5）。グラフの値にも使う。
   *
   * @remarks
   * 5 がいちばん良く、減点なし。1 点下がるごとに減点が増える
   */
  code: number
  /** 減点 */
  value: number
}

/**
 * 実施のAの段階1つ分。
 *
 * @remarks
 * いまは `PointAOption` と同じ形だが、呼び分けのために名前を残してある
 */
export type PointALevel = PointAOption

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
 * 実施のBの設問のキー。
 *
 * @remarks
 * 規則の欠点表をそのまま並べると項目が26個になり、採点を試す人には多すぎた。
 * 「見ていて どう感じたか」を答えれば点が付く形にまとめ直してある。
 * 規則と1対1では対応しない
 */
export type PointBScaleKey =
  | 'apparatusSpin'
  | 'apparatusSkill'
  | 'throwCatch'
  | 'tumblingHeight'
  | 'landing'
  | 'legLine'
  | 'steadiness'
  | 'musicMatch'

/**
 * 実施のBで付ける点。
 *
 * @remarks
 * 5 がいちばん良く、減点なし。1 点下がるごとに減点が増える
 */
export type PointBScaleCode = 1 | 2 | 3 | 4 | 5

/** 実施のBの点の選択肢1つ分 */
export type PointBScaleOption = {
  /** 付けた点（1〜5）。5 がいちばん良い */
  code: PointBScaleCode
}

/** 実施のBの設問1つ分 */
export type PointBScaleItem = {
  /** 設問のキー */
  key: PointBScaleKey
  /** 設問の文（表示中の言語） */
  title: () => string
  /**
   * 減点の重み。
   *
   * @remarks
   * 投げのキャッチは演技中に何度もあるので3倍、着地は2倍にしている。
   * ほかは1倍
   */
  weight: number
}

/**
 * 実施のBの入力値
 */
export type PointB = {
  /** 手具を落とした回数 */
  drops: number
  /** 設問ごとに付けた点。まだ答えていない設問は持たない */
  scales: Partial<Record<PointBScaleKey, PointBScaleCode>>
}

/**
 * 実施の採点項目。Aの減点項目とBの減点項目をまとめたもの
 */
export type ExecutionDeduct = {
  pointA: PointA
  pointB: PointB
}
