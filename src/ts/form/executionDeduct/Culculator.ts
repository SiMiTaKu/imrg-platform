import type { ExecutionDeduct } from './model'

/**
 * @param data 実施の採点項目
 * @return Aの項目の減点の合計
 */
export function getAmountOfPointA (data: ExecutionDeduct): number {
  if (data.pointA.beautifulPose.value < 0) throw new Error('beautifulPoseが0未満です。')
  if (data.pointA.flexibility.value < 0) throw new Error('flexibilityが0未満です。')
  if (data.pointA.naturalMovement.value < 0) throw new Error('naturalMovementが0未満です。')
  if (data.pointA.bendingWeight.value < 0) throw new Error('bendingWeightが0未満です。')
  if (data.pointA.jumpingHeight.value < 0) throw new Error('jumpingHeightが0未満です。')
  if (data.pointA.bodyControl.value < 0) throw new Error('bodyControlが0未満です。')
  if (data.pointA.heelRaise.value < 0) throw new Error('heelRaiseが0未満です。')
  if (data.pointA.weaknessAndStrength.value < 0) throw new Error('weaknessAndStrengthが0未満です。')
  if (data.pointA.connectMovement.value < 0) throw new Error('connectMovementが0未満です。')
  if (data.pointA.apparatusControl.value < 0) throw new Error('apparatusControlが0未満です。')
  if (data.pointA.musicImage.value < 0) throw new Error('musicImageが0未満です。')

  const beautifulPoseValue = data.pointA.beautifulPose.value ? getDeductionOfPointA(data.pointA.beautifulPose.value) : 0
  const flexibilityValue = data.pointA.flexibility.value ? getDeductionOfPointA(data.pointA.flexibility.value) : 0
  const naturalMovementValue = data.pointA.naturalMovement.value ? getDeductionOfPointA(data.pointA.naturalMovement.value) : 0
  const bendingWeightValue = data.pointA.bendingWeight.value ? getDeductionOfPointA(data.pointA.bendingWeight.value) : 0
  const jumpingHeightValue = data.pointA.jumpingHeight.value ? getDeductionOfPointA(data.pointA.jumpingHeight.value) : 0
  const bodyControlValue = data.pointA.bodyControl.value ? getDeductionOfPointA(data.pointA.bodyControl.value) : 0
  const heelRaiseValue = data.pointA.heelRaise.value ? getDeductionOfPointA(data.pointA.heelRaise.value) : 0
  const weaknessAndStrengthValue = data.pointA.weaknessAndStrength.value ? getDeductionOfPointA(data.pointA.weaknessAndStrength.value) : 0
  const connectMovementValue = data.pointA.connectMovement.value ? getDeductionOfPointA(data.pointA.connectMovement.value) : 0
  const apparatusControlValue = data.pointA.apparatusControl.value ? getDeductionOfPointA(data.pointA.apparatusControl.value) : 0
  const musicImageValue = data.pointA.musicImage.value ? getDeductionOfPointA(data.pointA.musicImage.value) : 0

  /** @note 小数点の誤差をなくすため整数で計算してから元に戻している */
  return (
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
  ) / 100
}

/**
 * @param value radioボタンで選択された値
 * @return 選択された評価から減点を返す
 */
export function getDeductionOfPointA (value: number): number {
  switch (value) {
    case 1 : return 0.5
    case 2 : return 0.45
    case 3 : return 0.4
    case 4 : return 0.35
    case 5 : return 0.3
    case 6 : return 0.25
    case 7 : return 0.2
    case 8 : return 0.15
    case 9 : return 0.1
    case 10 : return 0.05
    default : return 0
  }
}

/** @note Bの減点項目の合計を返す。減点のMaxを超えた場合はMaxの値を返す。 */
export function getAmountOfPointB (data: ExecutionDeduct): number {
  if (data.pointB.miss.value < 0) throw new Error('missが0未満です。')
  const maxPointB = getMaxPointB(data)
  const droppedApparatus = getDeductionOfDroppedApparatus(data)
  const missPoint = data.pointB.miss.value ? data.pointB.miss.value : 0

  const result = droppedApparatus + missPoint
  if (result >= maxPointB) return maxPointB; else return result
}

export function getMaxPointB (data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data)
  return 10 - pointA
}

/** @note 手具を落とした回数から減点を返す */
export function getDeductionOfDroppedApparatus (data: ExecutionDeduct): number {
  const deductionSingleApparatus = data.pointB.droppedApparatus.singleApparatus.value ? data.pointB.droppedApparatus.singleApparatus.value * 0.3 : 0
  const deductionDoubleApparatus = data.pointB.droppedApparatus.doubleApparatus.value ? data.pointB.droppedApparatus.doubleApparatus.value * 0.5 : 0
  return deductionSingleApparatus + deductionDoubleApparatus
}

export function getDecisionPoints (data: ExecutionDeduct): number {
  const pointA = getAmountOfPointA(data)
  const pointB = getAmountOfPointB(data)
  return 10 - (pointA + pointB)
}
