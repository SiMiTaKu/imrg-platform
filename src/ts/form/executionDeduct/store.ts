import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { ExecutionDeduct } from "./model";
import type { PointA, PointB } from "./model";

/** @TODO 動的でないデータもここに記載しているためフォームのデータのみにしたい。 */
/** @TODO ExecutionDeductが全てのデータを持つ必要はないから切り出したい。 */
export const executionDeduct: Writable<ExecutionDeduct> = writable(
  new ExecutionDeduct(
    {
      beautifulPose: {
        title: "美しい姿勢",
        value: undefined,
        annotation: "単純にどのくらい綺麗だと感じたか",
      },
      flexibility: {
        title: "柔軟性",
        value: undefined,
        annotation: "どのくらい身体の柔らかさを感じたか",
      },
      naturalMovement: {
        title: "動きの技術（自然・幅）",
        value: undefined,
        annotation: "どのくらい大きく、自然な動きで演技していたか",
      },
      bendingWeight: {
        title: "動きの技術（膝の踏み込み）",
        value: undefined,
        annotation: "どのくらい屈伸運動に強さを感じたか",
      },
      jumpingHeight: {
        title: "跳躍の高さ",
        value: undefined,
        annotation:
          "どのくらい高く跳躍していたか\n" + "タンブリングの高さではありません",
      },
      bodyControl: {
        title: "四肢の制御",
        value: undefined,
        annotation: "どのくらい身体を自在に操っていたか",
      },
      heelRaise: {
        title: "かかとの引き上げ",
        value: undefined,
        annotation: "どのくらい踵（かかと）を高い位置で演技できていたか",
      },
      weaknessAndStrength: {
        title: "張りや活気、間、アクセント",
        value: undefined,
        annotation: "どのくらい緩急や強弱を感じたか",
      },
      connectMovement: {
        title: "運動のつなぎの技術",
        value: undefined,
        annotation:
          "どのくらい動きと動きの間が途切れることなく演技できていたか",
      },
      apparatusControl: {
        title: "自然な手具操作",
        value: undefined,
        annotation: "どのくらい自然に手具を操作していたか",
      },
      musicImage: {
        title: "音楽のイメージ",
        value: undefined,
        annotation: "どのくらい音楽にあった演技をしていたか",
      },
    } as unknown as PointA,
    {
      droppedApparatus: {
        singleApparatus: { value: undefined },
        doubleApparatus: { value: undefined },
      },
      miss: { title: "その他ミスによる減点", value: undefined, annotation: "" },
    } as unknown as PointB
  )
);
