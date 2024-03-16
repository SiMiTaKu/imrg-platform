export class ExecutionDeduct {
  pointA: PointA;
  pointB: PointB;

  constructor(pointA: PointA, pointB: PointB) {
    this.pointA = pointA;
    this.pointB = pointB;
  }
}

/**
 * @param beautifulPose
 * @param flexibility
 * @param naturalMovement
 * @param bendingWeight
 * @param jumpingHeight
 * @param bodyControl
 * @param heelRaise
 * @param weaknessAndStrength
 * @param connectMovement
 * @param apparatusControl
 * @param musicImage
 */
export interface PointA {
  beautifulPose: PointAItem;
  flexibility: PointAItem;
  naturalMovement: PointAItem;
  bendingWeight: PointAItem;
  jumpingHeight: PointAItem;
  bodyControl: PointAItem;
  heelRaise: PointAItem;
  weaknessAndStrength: PointAItem;
  connectMovement: PointAItem;
  apparatusControl: PointAItem;
  musicImage: PointAItem;
}

export interface PointAItem {
  title: string;
  value: number;
  annotation: string;
}

export interface PointB {
  droppedApparatus: {
    singleApparatus: { value: number }; // 1つの手具を落とした回数
    doubleApparatus: { value: number }; // 2つの手具(リング、クラブ）を同時に落とした回数
  };
  miss: {
    title: string;
    value: number;
    annotation: string;
  };
}
