import { MAX_EXECUTION_SCORE, POINT_A_OPTIONS } from '../config/pointA'
import { POINT_B_DROP_KEYS, POINT_B_ITEMS } from '../config/pointB'
import type { ExecutionDeduct, PointBCountKey } from '../model/executionDeduct'

/**
 * 数える欠点の、1回あたりの減点を引く
 * @param key - 項目のキー
 * @returns 1回あたりの減点。項目が無ければ 0
 */
const valueOf = (key: PointBCountKey): number =>
  POINT_B_ITEMS.find((item) => item.key === key)?.value ?? 0

/**
 * 数える欠点を 0 回にした入力値を作る
 * @returns すべての項目が 0 回の入力値
 */
const createCounts = (): Record<PointBCountKey, number> =>
  Object.fromEntries(POINT_B_ITEMS.map((item) => [item.key, 0])) as Record<PointBCountKey, number>

/**
 * 採点を始めるときの採点項目を作る
 * @returns Aの各項目は先頭の選択肢、Bはすべて 0
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
      counts: createCounts(),
      miss: 0,
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
 * 数える欠点のうち、指定した項目の減点を返す
 * @param data - 実施の採点項目
 * @param keys - 数える項目のキー
 * @returns 指定した項目の減点の合計
 */
export const getDeductionOfCounts = (
  data: ExecutionDeduct,
  keys: readonly PointBCountKey[],
): number => {
  // 小数の誤差をなくすため、100 倍した整数で足してから元に戻す
  const total = keys.reduce(
    (sum, key) => sum + Math.round(valueOf(key) * 100) * (data.pointB.counts[key] ?? 0),
    0,
  )
  return total / 100
}

/**
 * 数える欠点すべての減点を返す
 * @param data - 実施の採点項目
 * @returns 回数や秒数で数えた欠点の減点の合計
 */
export const getAmountOfCountedFaults = (data: ExecutionDeduct): number =>
  getDeductionOfCounts(
    data,
    POINT_B_ITEMS.map((item) => item.key),
  )

/**
 * 手具を落とした回数から減点を返す
 * @param data - 実施の採点項目
 * @returns 手具の落下による減点（1つの手具の落下は1回0.3、2つの手具を同時に落としたときは1回0.4）
 */
export const getDeductionOfDroppedApparatus = (data: ExecutionDeduct): number =>
  getDeductionOfCounts(data, POINT_B_DROP_KEYS)

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
 * @returns Bの減点の合計（数える欠点とその他ミスの合計。上限は getMaxPointB の値）
 * @throws Error
 * その他ミスによる減点が 0 未満のとき
 */
export const getAmountOfPointB = (data: ExecutionDeduct): number => {
  if (data.pointB.miss < 0) throw new Error('その他ミスによる減点が 0 未満です。')
  const maxPointB = getMaxPointB(data)
  const result = getAmountOfCountedFaults(data) + data.pointB.miss
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
 * その他ミスによる減点の入力値を、採点に使える値に直す
 * @param value - 入力欄の値（`valueAsNumber`）
 * @returns 空欄など数値でないときと 0 未満のときは 0。それ以外はそのまま
 *
 * @remarks
 * 以前は入力欄を空にすると値が null になり、結果の表示で例外になっていた
 */
export const normalizeMiss = (value: number): number =>
  Number.isNaN(value) || value < 0 ? 0 : value
