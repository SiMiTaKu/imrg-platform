import {
  DEDUCTION_DOUBLE_DROP,
  DEDUCTION_SINGLE_DROP,
  MAX_EXECUTION_SCORE,
  POINT_A_OPTIONS,
} from '../config/pointA'
import type { ExecutionDeduct } from '../model/executionDeduct'

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
      droppedApparatus: { single: 0, double: 0 },
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
 * 手具を落とした回数から減点を返す
 * @param data - 実施の採点項目
 * @returns 手具の落下による減点（1つの手具の落下は1回0.3、2つの手具を同時に落としたときは1回0.4）
 */
export const getDeductionOfDroppedApparatus = (data: ExecutionDeduct): number => {
  const { single, double } = data.pointB.droppedApparatus
  return single * DEDUCTION_SINGLE_DROP + double * DEDUCTION_DOUBLE_DROP
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
 * @returns Bの減点の合計（手具の落下とミスの合計。上限は getMaxPointB の値）
 * @throws Error
 * その他ミスによる減点が 0 未満のとき
 */
export const getAmountOfPointB = (data: ExecutionDeduct): number => {
  if (data.pointB.miss < 0) throw new Error('その他ミスによる減点が 0 未満です。')
  const maxPointB = getMaxPointB(data)
  const result = getDeductionOfDroppedApparatus(data) + data.pointB.miss
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
