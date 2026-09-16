/**
 * PointAの評価項目
 * code: 評価項目のコード 1 ~ 10
 * label: 評価項目のラベル 1 ~ 10
 * value: 減点値 0.5 ~ 0.05
 */
const POINT_A_OPTION = {
  OPTION_1: { code: 1, label: '1', value: 0.5 },
  OPTION_2: { code: 2, label: '2', value: 0.45 },
  OPTION_3: { code: 3, label: '3', value: 0.4 },
  OPTION_4: { code: 4, label: '4', value: 0.35 },
  OPTION_5: { code: 5, label: '5', value: 0.3 },
  OPTION_6: { code: 6, label: '6', value: 0.25 },
  OPTION_7: { code: 7, label: '7', value: 0.2 },
  OPTION_8: { code: 8, label: '8', value: 0.15 },
  OPTION_9: { code: 9, label: '9', value: 0.1 },
  OPTION_10: { code: 10, label: '10', value: 0.05 },
} as const

/**
 * PointAの評価項目の選択肢1つ分（コード・ラベル・減点値）
 */
export type PointAOption = (typeof POINT_A_OPTION)[keyof typeof POINT_A_OPTION]
export const PointAOptions = Object.values(POINT_A_OPTION)

const POINT_A_INFO = {
  beautifulPose: {
    title: '美しい姿勢',
    annotation: '単純にどのくらい綺麗だと感じたか',
  },
  flexibility: {
    title: '柔軟性',
    annotation: 'どのくらい身体の柔らかさを感じたか',
  },
  naturalMovement: {
    title: '動きの技術（自然・幅）',
    annotation: 'どのくらい大きく、自然な動きで演技していたか',
  },
  bendingWeight: {
    title: '動きの技術（膝の踏込み）',
    annotation: 'どのくらい屈伸運動に強さを感じたか',
  },
  jumpingHeight: {
    title: '跳躍の高さ',
    annotation: 'どのくらい高く跳躍していたか（タンブリングの高さではありません）',
  },
  bodyControl: {
    title: '四肢の制御',
    annotation: 'どのくらい身体を自在に操っていたか',
  },
  heelRaise: {
    title: 'かかとの引き上げ',
    annotation: 'どのくらい踵（かかと）を高い位置で演技できていたか',
  },
  weaknessAndStrength: {
    title: '張り, 活気, 間, アクセント',
    annotation: 'どのくらい緩急や強弱を感じたか',
  },
  connectMovement: {
    title: '運動のつなぎの技術',
    annotation: 'どのくらい動きと動きの間が途切れることなく演技できていたか',
  },
  apparatusControl: {
    title: '自然な手具操作',
    annotation: 'どのくらい自然に手具を操作していたか',
  },
  musicImage: {
    title: '音楽のイメージ',
    annotation: 'どのくらい音楽にあった演技をしていたか',
  },
}

type PointAInfo = typeof POINT_A_INFO
/**
 * PointAの評価項目ごとの選択値と項目情報
 */
export type PointA = {
  /** 美しい姿勢 */
  beautifulPose: {
    option: PointAOption
    info: PointAInfo['beautifulPose']
  }
  /** 柔軟性 */
  flexibility: {
    option: PointAOption
    info: PointAInfo['flexibility']
  }
  /** 動きの技術（自然・幅） */
  naturalMovement: {
    option: PointAOption
    info: PointAInfo['naturalMovement']
  }
  /** 動きの技術（膝の踏込み） */
  bendingWeight: {
    option: PointAOption
    info: PointAInfo['bendingWeight']
  }
  /** 跳躍の高さ */
  jumpingHeight: {
    option: PointAOption
    info: PointAInfo['jumpingHeight']
  }
  /** 四肢の制御 */
  bodyControl: {
    option: PointAOption
    info: PointAInfo['bodyControl']
  }
  /** かかとの引き上げ */
  heelRaise: {
    option: PointAOption
    info: PointAInfo['heelRaise']
  }
  /** 張り, 活気, 間, アクセント */
  weaknessAndStrength: {
    option: PointAOption
    info: PointAInfo['weaknessAndStrength']
  }
  /** 運動のつなぎの技術 */
  connectMovement: {
    option: PointAOption
    info: PointAInfo['connectMovement']
  }
  /** 自然な手具操作 */
  apparatusControl: {
    option: PointAOption
    info: PointAInfo['apparatusControl']
  }
  /** 音楽のイメージ */
  musicImage: {
    option: PointAOption
    info: PointAInfo['musicImage']
  }
}

/**
 * PointAの評価項目のキー
 */
export type PointAKey = keyof PointA

export const PointA = {
  init(): PointA {
    return {
      beautifulPose: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.beautifulPose,
      },
      flexibility: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.flexibility,
      },
      naturalMovement: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.naturalMovement,
      },
      bendingWeight: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.bendingWeight,
      },
      jumpingHeight: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.jumpingHeight,
      },
      bodyControl: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.bodyControl,
      },
      heelRaise: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.heelRaise,
      },
      weaknessAndStrength: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.weaknessAndStrength,
      },
      connectMovement: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.connectMovement,
      },
      apparatusControl: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.apparatusControl,
      },
      musicImage: {
        option: POINT_A_OPTION.OPTION_1,
        info: POINT_A_INFO.musicImage,
      },
    }
  },
}
