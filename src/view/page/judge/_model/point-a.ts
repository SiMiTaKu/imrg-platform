export type PointAValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * @param beautifulPose       美しい姿勢
 * @param flexibility         柔軟性
 * @param naturalMovement     動きの技術（自然・幅）
 * @param bendingWeight       動きの技術（膝の踏込み）
 * @param jumpingHeight       跳躍の高さ
 * @param bodyControl         四肢の制御
 * @param heelRaise           かかとの引き上げ
 * @param weaknessAndStrength 張り, 活気, 間, アクセント
 * @param connectMovement     運動のつなぎの技術
 * @param apparatusControl    自然な手具操作
 * @param musicImage          音楽のイメージ
 */
export type PointA = {
  beautifulPose: PointAValue | undefined;
  flexibility: PointAValue | undefined;
  naturalMovement: PointAValue | undefined;
  bendingWeight: PointAValue | undefined;
  jumpingHeight: PointAValue | undefined;
  bodyControl: PointAValue | undefined;
  heelRaise: PointAValue | undefined;
  weaknessAndStrength: PointAValue | undefined;
  connectMovement: PointAValue | undefined;
  apparatusControl: PointAValue | undefined;
  musicImage: PointAValue | undefined;
};

export const PointA = {
  init(): PointA {
    return {
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
      musicImage: undefined,
    };
  },
};
