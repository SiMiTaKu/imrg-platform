import type { ExecutionDeduct } from './model';

/**
 * @param data 実施の採点項目
 * @return Aの項目の減点の合計
 */
export function getAmountOfPointA(data: ExecutionDeduct): number {
  const beautifulPoseValue       = data.pointA.beautifulPose.value       ? data.pointA.beautifulPose.value       : 0;
  const flexibilityValue         = data.pointA.flexibility.value         ? data.pointA.flexibility.value         : 0;
  const naturalMovementValue     = data.pointA.naturalMovement.value     ? data.pointA.naturalMovement.value     : 0;
  const bendingWeightValue       = data.pointA.bendingWeight.value       ? data.pointA.bendingWeight.value       : 0;
  const jumpingHeightValue       = data.pointA.jumpingHeight.value       ? data.pointA.jumpingHeight.value       : 0;
  const bodyControlValue         = data.pointA.bodyControl.value         ? data.pointA.bodyControl.value         : 0;
  const heelRaiseValue           = data.pointA.heelRaise.value           ? data.pointA.heelRaise.value           : 0;
  const weaknessAndStrengthValue = data.pointA.weaknessAndStrength.value ? data.pointA.weaknessAndStrength.value : 0;
  const connectMovementValue     = data.pointA.connectMovement.value     ? data.pointA.connectMovement.value     : 0;
  const apparatusControlValue    = data.pointA.apparatusControl.value    ? data.pointA.apparatusControl.value    : 0;
  const musicImageValue          = data.pointA.musicImage.value          ? data.pointA.musicImage.value          : 0;

  /** @note 小数点の誤差をなくすため整数で計算してから元に戻している */
  const result = (
    (beautifulPoseValue * 100) +
    (flexibilityValue * 100) +
    (naturalMovementValue * 100) +
    (bendingWeightValue * 100) +
    (jumpingHeightValue * 100) +
    (bodyControlValue * 100) +
    (heelRaiseValue * 100) +
    (weaknessAndStrengthValue * 100) +
    (connectMovementValue * 100) +
    (apparatusControlValue * 100) +
    (musicImageValue * 100)
  ) / 100;
  return result;
}

export function getAmountOfPointB(data: ExecutionDeduct): number {
  const missPoint = data.pointB.miss.value ? data.pointB.miss.value : 0;
  return missPoint;
}

export function getMaxPointB(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data);
  const result = 10 - pointA;
  return result;
}

export function getDecisionPoints(data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data);
  const pointB = getAmountOfPointB(data);
  const result = 10 - (pointA + pointB);
  return result;
}