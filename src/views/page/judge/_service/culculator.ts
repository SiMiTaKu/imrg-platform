import type { ExecutionDeduct } from '../_model/execution-deduct'

/**
 * 実施のAの減点項目の合計を返す
 * @param data - 実施の採点項目
 * @returns Aの項目の減点の合計
 */
export function getAmountOfPointA(data: ExecutionDeduct): number {
  const total = Object.values(data.pointA).reduce((sum, current) => {
    const value = current?.option?.value || 0
    return sum + value * 100 // 小数点の誤差をなくすため整数で計算
  }, 0)

  // 小数点の誤差をなくすため整数で計算してから元に戻している
  return total / 100
}

/**
 * Bの減点項目の合計を返す。減点のMaxを超えた場合はMaxの値を返す。
 * @param data - 実施の採点項目
 * @returns Bの減点の合計（手具の落下とミスの合計。上限は getMaxPointB の値）
 * @throws missが0未満のとき
 */
export function getAmountOfPointB(data: ExecutionDeduct): number {
  if (data.pointB.miss! < 0) throw new Error('missが0未満です。')
  const maxPointB = getMaxPointB(data)
  const droppedApparatus = getDeductionOfDroppedApparatus(data)
  const missPoint = data.pointB.miss ? data.pointB.miss : 0

  const result = droppedApparatus + missPoint
  if (result >= maxPointB) return maxPointB
  else return result
}

/**
 * Bの減点の上限を返す。10点からAの減点を引いた値
 * @param data - 実施の採点項目
 * @returns Bの減点の上限
 */
export function getMaxPointB(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data)

  return 10 - pointA
}

/**
 * 手具を落とした回数から減点を返す
 * @param data - 実施の採点項目
 * @returns 手具の落下による減点（1つの手具の落下は1回0.3、2つの手具を同時に落としたときは1回0.4）
 */
export function getDeductionOfDroppedApparatus(data: ExecutionDeduct): number {
  const deductionSingleApparatus = data.pointB.droppedApparatus.single
    ? data.pointB.droppedApparatus.single * 0.3
    : 0
  const deductionDoubleApparatus = data.pointB.droppedApparatus.double
    ? data.pointB.droppedApparatus.double * 0.4
    : 0
  return deductionSingleApparatus + deductionDoubleApparatus
}

/**
 * 実施の決定点を返す。10点からAとBの減点を引いた値
 * @param data - 実施の採点項目
 * @returns 実施の決定点
 */
export function getDecisionPoints(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data)
  const pointB = getAmountOfPointB(data)
  return 10 - (pointA + pointB)
}
