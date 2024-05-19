import type { ExecutionDeduct } from "../_model/execution-deduct";

/**
 * @param data 実施の採点項目
 * @return Aの項目の減点の合計
 */
export function getAmountOfPointA(data: ExecutionDeduct): number {
  const total = Object.values(data.pointA).reduce((sum, current) => {
    const value = current?.option?.value || 0;
    return sum + value * 100; // 小数点の誤差をなくすため整数で計算
  }, 0);

  /** @note 小数点の誤差をなくすため整数で計算してから元に戻している */
  return total / 100;
}

/** @note Bの減点項目の合計を返す。減点のMaxを超えた場合はMaxの値を返す。 */
export function getAmountOfPointB(data: ExecutionDeduct): number {
  if (data.pointB.miss! < 0) throw new Error("missが0未満です。");
  const maxPointB = getMaxPointB(data);
  const droppedApparatus = getDeductionOfDroppedApparatus(data);
  const missPoint = data.pointB.miss ? data.pointB.miss : 0;

  const result = droppedApparatus + missPoint;
  if (result >= maxPointB) return maxPointB;
  else return result;
}

export function getMaxPointB(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data);

  return 10 - pointA;
}

/** @note 手具を落とした回数から減点を返す */
export function getDeductionOfDroppedApparatus(data: ExecutionDeduct): number {
  const deductionSingleApparatus = data.pointB.droppedApparatus.single
    ? data.pointB.droppedApparatus.single * 0.3
    : 0;
  const deductionDoubleApparatus = data.pointB.droppedApparatus.double
    ? data.pointB.droppedApparatus.double * 0.5
    : 0;
  return deductionSingleApparatus + deductionDoubleApparatus;
}

export function getDecisionPoints(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data);
  const pointB = getAmountOfPointB(data);
  return 10 - (pointA + pointB);
}
