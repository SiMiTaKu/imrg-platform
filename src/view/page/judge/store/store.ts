import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { ExecutionDeduct } from "../_service/model";
import type { PointB } from "../_service/model";

export const executionDeduct: Writable<ExecutionDeduct> = writable(
  new ExecutionDeduct(
    {
      beautifulPose: undefined,
      flexibility: undefined,
      naturalMovement: undefined,
      bendingWeight: undefined,
      jumpingHeight: undefined,
      bodyControl: undefined,
      heelRaise: undefined,
      weaknessAndStrength: undefined,
      connectMovement: undefined,
      apparatusControl: undefined,
      musicImage: undefined
    },
    {
      droppedApparatus: {
        singleApparatus: { value: undefined },
        doubleApparatus: { value: undefined },
      },
      miss: { title: "その他ミスによる減点", value: undefined, annotation: "" },
    } as unknown as PointB
  )
);
