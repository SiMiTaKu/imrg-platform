import type { ExecutionDeduct } from "../_model/execution-deduct";

/**
 * @param data 実施の採点項目
 * @return Aの項目の減点の合計
 */
export function getAmountOfPointA(data: ExecutionDeduct): number {
  const beautifulPoseValue = data.pointA.beautifulPose
    ? data.pointA.beautifulPose.option.value
    : 0;
  const flexibilityValue = data.pointA.flexibility
    ? data.pointA.flexibility.option.value
    : 0;
  const naturalMovementValue = data.pointA.naturalMovement
    ? data.pointA.naturalMovement.option.value
    : 0;
  const bendingWeightValue = data.pointA.bendingWeight
    ? data.pointA.bendingWeight.option.value
    : 0;
  const jumpingHeightValue = data.pointA.jumpingHeight
    ? data.pointA.jumpingHeight.option.value
    : 0;
  const bodyControlValue = data.pointA.bodyControl
    ? data.pointA.bodyControl.option.value
    : 0;
  const heelRaiseValue = data.pointA.heelRaise
    ? data.pointA.heelRaise.option.value
    : 0;
  const weaknessAndStrengthValue = data.pointA.weaknessAndStrength
    ? data.pointA.weaknessAndStrength.option.value
    : 0;
  const connectMovementValue = data.pointA.connectMovement
    ? data.pointA.connectMovement.option.value
    : 0;
  const apparatusControlValue = data.pointA.apparatusControl
    ? data.pointA.apparatusControl.option.value
    : 0;
  const musicImageValue = data.pointA.musicImage
    ? data.pointA.musicImage.option.value
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
