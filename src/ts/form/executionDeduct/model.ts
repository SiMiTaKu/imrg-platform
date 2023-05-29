export interface RadioDeduction {
  label: string,
  value: number,
};

export const deductionOptions: RadioDeduction[] = [
  { label: "1",  value: 0.5  },
  { label: "2",  value: 0.45 },
  { label: "3",  value: 0.4  },
  { label: "4",  value: 0.35 },
  { label: "5",  value: 0.3  },
  { label: "6",  value: 0.25 },
  { label: "7",  value: 0.2  },
  { label: "8",  value: 0.15 },
  { label: "9",  value: 0.1  },
  { label: "10", value: 0.05 },
];

export class ExecutionDeduct {
  pointA: PointA
  pointB: PointB

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
  beautifulPose:       PointAItem
  flexibility:         PointAItem
  naturalMovement:     PointAItem
  bendingWeight:       PointAItem
  jumpingHeight:       PointAItem
  bodyControl:         PointAItem
  heelRaise:           PointAItem
  weaknessAndStrength: PointAItem
  connectMovement:     PointAItem
  apparatusControl:    PointAItem
  musicImage:          PointAItem
}

export interface PointAItem {
  title:      string
  value:      number
  annotation: string
}

export interface PointB {
  miss: {
    title:      string
    value:      number
    annotation: string
  }
}