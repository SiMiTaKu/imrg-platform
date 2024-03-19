import type { ExecutionDeduct } from "../_model/execution-deduct";
import type { PointAValue } from "../_model/point-a";

/**
 * @param data 実施の採点項目
 * @return Aの項目の減点の合計
 */
export function getAmountOfPointA(data: ExecutionDeduct): number {
  const beautifulPoseValue = data.pointA.beautifulPose
    ? getDeductionOfPointA(data.pointA.beautifulPose)
    : 0;
  const flexibilityValue = data.pointA.flexibility
    ? getDeductionOfPointA(data.pointA.flexibility)
    : 0;
  const naturalMovementValue = data.pointA.naturalMovement
    ? getDeductionOfPointA(data.pointA.naturalMovement)
    : 0;
  const bendingWeightValue = data.pointA.bendingWeight
    ? getDeductionOfPointA(data.pointA.bendingWeight)
    : 0;
  const jumpingHeightValue = data.pointA.jumpingHeight
    ? getDeductionOfPointA(data.pointA.jumpingHeight)
    : 0;
  const bodyControlValue = data.pointA.bodyControl
    ? getDeductionOfPointA(data.pointA.bodyControl)
    : 0;
  const heelRaiseValue = data.pointA.heelRaise
    ? getDeductionOfPointA(data.pointA.heelRaise)
    : 0;
  const weaknessAndStrengthValue = data.pointA.weaknessAndStrength
    ? getDeductionOfPointA(data.pointA.weaknessAndStrength)
    : 0;
  const connectMovementValue = data.pointA.connectMovement
    ? getDeductionOfPointA(data.pointA.connectMovement)
    : 0;
  const apparatusControlValue = data.pointA.apparatusControl
    ? getDeductionOfPointA(data.pointA.apparatusControl)
    : 0;
  const musicImageValue = data.pointA.musicImage
    ? getDeductionOfPointA(data.pointA.musicImage)
    : 0;

  /** @note 小数点の誤差をなくすため整数で計算してから元に戻している */
  return (
    (beautifulPoseValue * 100 +
      flexibilityValue * 100 +
      naturalMovementValue * 100 +
      bendingWeightValue * 100 +
      jumpingHeightValue * 100 +
      bodyControlValue * 100 +
      heelRaiseValue * 100 +
      weaknessAndStrengthValue * 100 +
      connectMovementValue * 100 +
      apparatusControlValue * 100 +
      musicImageValue * 100) /
    100
  );
}

const deductionOfPointA = new Map<number, number>([
  [1,
0.5],
  [2,
0.45],
  [3,
0.4],
  [4,
0.35],
  [5,
0.3],
  [6,
0.25],
  [7,
0.2],
  [8,
0.15],
  [9,
0.1],
  [10,
0.05],
]);

/**
 * @param value radioボタンで選択された値
 * @return 選択された評価から減点を返す
 */
export function getDeductionOfPointA(value: PointAValue): number {
  const result = deductionOfPointA.get(value);
  return result!;
}

/** @note Bの減点項目の合計を返す。減点のMaxを超えた場合はMaxの値を返す。 */
export function getAmountOfPointB(data: ExecutionDeduct): number {
  if (data.pointB.miss.value! < 0) throw new Error("missが0未満です。");
  const maxPointB = getMaxPointB(data);
  const droppedApparatus = getDeductionOfDroppedApparatus(data);
  const missPoint = data.pointB.miss.value ? data.pointB.miss.value : 0;

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
  const deductionSingleApparatus = data.pointB.droppedApparatus.singleApparatus
    .value
    ? data.pointB.droppedApparatus.singleApparatus.value * 0.3
    : 0;
  const deductionDoubleApparatus = data.pointB.droppedApparatus.doubleApparatus
    .value
    ? data.pointB.droppedApparatus.doubleApparatus.value * 0.5
    : 0;
  return deductionSingleApparatus + deductionDoubleApparatus;
}

export function getDecisionPoints(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data);
  const pointB = getAmountOfPointB(data);
  return 10 - (pointA + pointB);
}
