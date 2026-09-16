import { PointA } from './point-a'
import { PointB } from './point-b'

export type ExecutionDeduct = {
  pointA: PointA
  pointB: PointB
}

export const ExecutionDeduct = {
  init(): ExecutionDeduct {
    return {
      pointA: PointA.init(),
      pointB: PointB.init(),
    }
  },
}
