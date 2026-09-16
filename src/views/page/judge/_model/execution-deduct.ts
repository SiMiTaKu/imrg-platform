import { PointA } from './point-a'
import { PointB } from './point-b'

/**
 * 実施の採点項目。Aの減点項目とBの減点項目をまとめたもの
 */
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
