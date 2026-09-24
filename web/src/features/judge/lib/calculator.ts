import { MAX_EXECUTION_SCORE, POINT_A_OPTIONS } from '../config/pointA'
import {
  POINT_B_BEST_SCORE,
  POINT_B_DROP_VALUE,
  POINT_B_SCALE_ITEMS,
  POINT_B_SCALE_STEP,
} from '../config/pointB'
import type { ExecutionDeduct, PointBScaleCode, PointBScaleKey } from '../model/executionDeduct'

/**
 * 採点を始めるときの採点項目を作る
 * @returns Aの各項目は1点（まだ選んでいない状態）、Bはまだ答えていない状態
 */
export const createExecutionDeduct = (): ExecutionDeduct => {
  const [initialOption] = POINT_A_OPTIONS
  return {
    pointA: {
      beautifulPose: initialOption,
      flexibility: initialOption,
      naturalMovement: initialOption,
      bendingWeight: initialOption,
      jumpingHeight: initialOption,
      bodyControl: initialOption,
      heelRaise: initialOption,
      weaknessAndStrength: initialOption,
      connectMovement: initialOption,
      apparatusControl: initialOption,
      musicImage: initialOption,
    },
    pointB: {
      drops: 0,
      scales: {},
    },
  }
}

/**
 * 実施のAの減点項目の合計を返す
 * @param data - 実施の採点項目
 * @returns Aの項目の減点の合計
 */
export const getAmountOfPointA = (data: ExecutionDeduct): number => {
  // 小数の誤差をなくすため、100 倍した整数で足してから元に戻す
  const total = Object.values(data.pointA).reduce((sum, option) => sum + option.value * 100, 0)
  return total / 100
}

/**
 * 設問1つに付けた点から減点を返す。
 *
 * @remarks
 * 5点は減点なし。1点下がるごとに 0.3 増え、設問ごとの重みを掛ける
 *
 * @param code - 付けた点（1〜5）。まだ答えていなければ undefined
 * @param weight - 設問の重み
 * @returns その設問の減点
 */
export const getDeductionOfScale = (code: PointBScaleCode | undefined, weight: number): number => {
  if (code === undefined) return 0
  // 小数の誤差をなくすため、100 倍した整数で計算してから元に戻す
  return ((POINT_B_BEST_SCORE - code) * Math.round(POINT_B_SCALE_STEP * 100) * weight) / 100
}

/**
 * 設問1つの減点を返す
 * @param data - 実施の採点項目
 * @param key - 設問のキー
 * @returns その設問の減点。まだ答えていなければ 0
 */
export const getDeductionOfPointBItem = (data: ExecutionDeduct, key: PointBScaleKey): number => {
  const item = POINT_B_SCALE_ITEMS.find((candidate) => candidate.key === key)
  if (!item) return 0
  return getDeductionOfScale(data.pointB.scales[key], item.weight)
}

/**
 * 手具を落とした回数から減点を返す
 * @param data - 実施の採点項目
 * @returns 手具の落下による減点（1回につき 0.3）
 */
export const getDeductionOfDroppedApparatus = (data: ExecutionDeduct): number =>
  (data.pointB.drops * Math.round(POINT_B_DROP_VALUE * 100)) / 100

/**
 * 点で答える設問すべての減点を返す
 * @param data - 実施の採点項目
 * @returns 8つの設問の減点の合計
 */
export const getAmountOfScaleFaults = (data: ExecutionDeduct): number => {
  // 小数の誤差をなくすため、100 倍した整数で足してから元に戻す
  const total = POINT_B_SCALE_ITEMS.reduce(
    (sum, item) =>
      sum + Math.round(getDeductionOfScale(data.pointB.scales[item.key], item.weight) * 100),
    0,
  )
  return total / 100
}

/**
 * Bの減点の上限を返す。満点からAの減点を引いた値
 * @param data - 実施の採点項目
 * @returns Bの減点の上限
 */
export const getMaxPointB = (data: ExecutionDeduct): number =>
  MAX_EXECUTION_SCORE - getAmountOfPointA(data)

/**
 * Bの減点項目の合計を返す。減点の上限を超えた場合は上限の値を返す
 * @param data - 実施の採点項目
 * @returns Bの減点の合計（手具の落下とあてはまり具合の合計。上限は getMaxPointB の値）
 */
export const getAmountOfPointB = (data: ExecutionDeduct): number => {
  const maxPointB = getMaxPointB(data)
  // 小数の誤差をなくすため、100 倍した整数で足してから元に戻す
  const result =
    (Math.round(getDeductionOfDroppedApparatus(data) * 100) +
      Math.round(getAmountOfScaleFaults(data) * 100)) /
    100
  return result >= maxPointB ? maxPointB : result
}

/**
 * 実施の決定点を返す。満点からAとBの減点を引いた値
 * @param data - 実施の採点項目
 * @returns 実施の決定点
 */
export const getDecisionPoints = (data: ExecutionDeduct): number =>
  MAX_EXECUTION_SCORE - (getAmountOfPointA(data) + getAmountOfPointB(data))

/**
 * Bの設問すべてに答え終わったか
 * @param data - 実施の採点項目
 * @returns まだ答えていない設問が1つも無ければ true
 */
export const isPointBAnswered = (data: ExecutionDeduct): boolean =>
  POINT_B_SCALE_ITEMS.every((item) => data.pointB.scales[item.key] !== undefined)
