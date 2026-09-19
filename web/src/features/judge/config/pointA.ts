import type { PointAOption } from '../model/executionDeduct'

/** 実施の満点 */
export const MAX_EXECUTION_SCORE = 10

/**
 * 実施のAの減点項目の選択肢。先頭（減点が最も大きい）が初期値
 */
export const POINT_A_OPTIONS: readonly PointAOption[] = [
  { code: 1, value: 0.5 },
  { code: 2, value: 0.45 },
  { code: 3, value: 0.4 },
  { code: 4, value: 0.35 },
  { code: 5, value: 0.3 },
  { code: 6, value: 0.25 },
  { code: 7, value: 0.2 },
  { code: 8, value: 0.15 },
  { code: 9, value: 0.1 },
  { code: 10, value: 0.05 },
]

/** 1つの手具を落としたときの1回の減点 */
export const DEDUCTION_SINGLE_DROP = 0.3

/** 2つの手具を同時に落としたときの1回の減点 */
export const DEDUCTION_DOUBLE_DROP = 0.4
