/**
 * PointAの評価項目
 * code: 評価項目のコード 1 ~ 10
 * label: 評価項目のラベル 1 ~ 10
 * value: 減点値 0.5 ~ 0.05
 */
const POINT_A_ENUM = {
  OPTION_1: { code: 1, label: "1", value: 0.5 },
  OPTION_2: { code: 2, label: "2", value: 0.45 },
  OPTION_3: { code: 3, label: "3", value: 0.4 },
  OPTION_4: { code: 4, label: "4", value: 0.35 },
  OPTION_5: { code: 5, label: "5", value: 0.3 },
  OPTION_6: { code: 6, label: "6", value: 0.25 },
  OPTION_7: { code: 7, label: "7", value: 0.2 },
  OPTION_8: { code: 8, label: "8", value: 0.15 },
  OPTION_9: { code: 9, label: "9", value: 0.1 },
  OPTION_10: { code: 10, label: "10", value: 0.05 },
} as const;

export type PointAEnum = (typeof POINT_A_ENUM)[keyof typeof POINT_A_ENUM];
export const PointAEnumArray = Object.values(POINT_A_ENUM);
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
  beautifulPose: PointAEnum;
  flexibility: PointAEnum;
  naturalMovement: PointAEnum;
  bendingWeight: PointAEnum;
  jumpingHeight: PointAEnum;
  bodyControl: PointAEnum;
  heelRaise: PointAEnum;
  weaknessAndStrength: PointAEnum;
  connectMovement: PointAEnum;
  apparatusControl: PointAEnum;
  musicImage: PointAEnum;
};
export const PointA = {
  init(): PointA {
    return {
      beautifulPose: POINT_A_ENUM.OPTION_1,
      flexibility: POINT_A_ENUM.OPTION_1,
      naturalMovement: POINT_A_ENUM.OPTION_1,
      bendingWeight: POINT_A_ENUM.OPTION_1,
      jumpingHeight: POINT_A_ENUM.OPTION_1,
      bodyControl: POINT_A_ENUM.OPTION_1,
      heelRaise: POINT_A_ENUM.OPTION_1,
      weaknessAndStrength: POINT_A_ENUM.OPTION_1,
      connectMovement: POINT_A_ENUM.OPTION_1,
      apparatusControl: POINT_A_ENUM.OPTION_1,
      musicImage: POINT_A_ENUM.OPTION_1,
    };
  },
};
