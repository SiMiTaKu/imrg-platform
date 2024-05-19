import { PointA } from "./point-a"
import { PointB } from "./point-b"
import { Apparatus } from "./apparatus"

export type ExecutionDeduct = {
  apparatus: Apparatus | undefined;
  pointA: PointA;
  pointB: PointB;
};

export const ExecutionDeduct = {
  init(): ExecutionDeduct {
    return {
      apparatus: undefined,
      pointA: PointA.init(),
      pointB: PointB.init(),
    }
  },
  toggleApparatus(executionDeduct: ExecutionDeduct, code: string): void {
    executionDeduct.apparatus = Apparatus.fromCode(code)
  },
}
