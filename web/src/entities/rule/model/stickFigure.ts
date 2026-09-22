/**
 * 冊子の線画の代わりに出す、仮の棒人間。
 *
 * @remarks
 * 3.6.3 図解（52〜60ページ）は、枠の中に「番号・技の名前・線画・難度」が入っている。
 * 線画だけは文字にできず、画像も無いので、表の各行に何の絵も出せない状態だった。
 * そこで技の名前から姿勢を選び、棒人間を描いて添える。
 *
 * これはあくまで**仮の絵**で、いずれプロジェクトのキャラクターのイラストに差し替える。
 * 差し替えるときに描き方だけを入れ替えられるよう、
 *
 * - 姿勢の種類（`StickPose`）
 * - 姿勢ごとの関節の位置（`STICK_SKELETONS`）
 * - 技の名前から姿勢を選ぶ決まり（`POSE_RULES`・`poseOf`）
 *
 * の3つに分けてある。イラストができたら `STICK_SKELETONS` を使うのをやめ、
 * `StickPose` を鍵にして絵を引けばよく、`poseOf` の決まりはそのまま使える
 */

/**
 * 関節ひとつの位置。
 *
 * @remarks
 * SVG の viewBox は `0 0 100 100` にそろえてある。
 * x は左から右、y は上から下。床は y = 92 のあたりに置く
 */
export interface StickPoint {
  /** 左からの位置（0〜100） */
  readonly x: number
  /** 上からの位置（0〜100） */
  readonly y: number
}

/**
 * 棒人間ひとり分の骨組み。
 *
 * @remarks
 * 頭は円、胴・腕・脚は折れ線で描く。折れ線は「付け根→関節→先」の順に並べる。
 * 腕は「肩→肘→手」、脚は「腰→膝→足」で、それぞれ2本ずつ持つ
 */
export interface StickSkeleton {
  /** 頭の円の中心 */
  readonly head: StickPoint
  /** 頭の円の半径 */
  readonly headRadius: number
  /** 胴。首から腰へ。反り身のように曲がる姿勢では途中の点を足す */
  readonly spine: readonly StickPoint[]
  /** 腕2本。肩→肘→手 */
  readonly arms: readonly (readonly StickPoint[])[]
  /** 脚2本。腰→膝→足 */
  readonly legs: readonly (readonly StickPoint[])[]
  /** 体のどこかが床に触れているか。触れていれば足元に床の線を引く */
  readonly onGround: boolean
}

/**
 * 男子新体操の技に出てくる姿勢。
 *
 * @remarks
 * 冊子の図解に出てくる技を、描き分けられるところまでまとめた30種類。
 * 同じ姿勢で括れる技（宙返りのかかえ込みと屈身など）は1つにしてある
 */
export const StickPose = {
  /** 直立。どれにも当てはまらないときの姿勢でもある */
  STAND: 'stand',
  /** 閉脚跳び。両脚をそろえて跳ぶ */
  CLOSED_JUMP: 'closedJump',
  /** 開脚跳び。左右に開いて跳ぶ */
  STRADDLE_JUMP: 'straddleJump',
  /** 大ジャンプ。手足を大の字に開いて跳ぶ */
  BIG_JUMP: 'bigJump',
  /** 反りジャンプ。後に振り上げて反り身になる */
  ARCH_JUMP: 'archJump',
  /** かかえこみ跳び。膝を胸に引きつける */
  TUCK_JUMP: 'tuckJump',
  /** 前後開脚交叉跳び。前後に開いて入れ替える */
  SCISSORS_JUMP: 'scissorsJump',
  /** ひねり跳び。跳び上がって体をひねる */
  TWIST_JUMP: 'twistJump',
  /** バタフライ。体を水平にして横に回る */
  BUTTERFLY: 'butterfly',
  /** 前屈。立ったまま、または座って上体を折る */
  FORWARD_BEND: 'forwardBend',
  /** 開脚座。床に座って脚を開く */
  SPLIT_SIT: 'splitSit',
  /** 仰臥位。あおむけに寝て脚を開く */
  SUPINE: 'supine',
  /** 膝立ち。はねおきで立ち上がった姿勢 */
  KNEEL: 'kneel',
  /** 倒立。両手で支える */
  HANDSTAND: 'handstand',
  /** 片手倒立。片手で支え、もう片方は伸ばす */
  ONE_HAND_HANDSTAND: 'oneHandHandstand',
  /** 十字倒立。倒立のまま脚を左右に開く */
  CROSS_HANDSTAND: 'crossHandstand',
  /** 水平バランス。正面水平立ち。上体と後の脚を水平にする */
  HORIZONTAL_BALANCE: 'horizontalBalance',
  /** 横バランス。側面水平立ち。脚を横に上げる */
  SIDE_BALANCE: 'sideBalance',
  /** 後ろバランス。背面水平立ち。上体を後に倒す */
  BACK_BALANCE: 'backBalance',
  /** 開脚片足平均立ち。上げた脚を手で保持する */
  SPLIT_BALANCE: 'splitBalance',
  /** ブリッヂ。手と足で床を押して反る */
  BRIDGE: 'bridge',
  /** 正面支持臥。うつぶせで体を一直線に支える */
  FRONT_SUPPORT: 'frontSupport',
  /** 旋回・ターン。片足で立って回る */
  PIVOT: 'pivot',
  /** ローリング。体を丸めて床を転がる */
  ROLLING: 'rolling',
  /** 前転。もぐり回転もここに入れる */
  FORWARD_ROLL: 'forwardRoll',
  /** 後転 */
  BACKWARD_ROLL: 'backwardRoll',
  /** 側方倒立回転。ロンダードもここに入れる */
  CARTWHEEL: 'cartwheel',
  /** 前方宙返り */
  FRONT_SALTO: 'frontSalto',
  /** 後方宙返り */
  BACK_SALTO: 'backSalto',
  /** 側方宙返り。アラビア宙返りもここに入れる */
  SIDE_SALTO: 'sideSalto',
} as const

/** 姿勢のどれか1つ */
export type StickPose = (typeof StickPose)[keyof typeof StickPose]

/**
 * 関節の位置を作る。骨組みの表を短く書くための道具
 * @param x - 左からの位置
 * @param y - 上からの位置
 * @returns 関節の位置
 */
const at = (x: number, y: number): StickPoint => ({ x, y })

/**
 * 姿勢ごとの骨組み。
 *
 * @remarks
 * どれも viewBox `0 0 100 100` の中に収まるように置いてある。
 * 床に立つ姿勢は足が y = 90 前後、跳んでいる姿勢は足を床から離してある。
 * 絵をイラストに差し替えるときは、この表を使うのをやめるだけでよい
 */
export const STICK_SKELETONS: Readonly<Record<StickPose, StickSkeleton>> = {
  // 直立。肩を張って正面を向く
  [StickPose.STAND]: {
    head: at(50, 18),
    headRadius: 7,
    spine: [at(50, 25), at(50, 58)],
    arms: [
      [at(50, 30), at(43, 42), at(38, 54)],
      [at(50, 30), at(57, 42), at(62, 54)],
    ],
    legs: [
      [at(50, 58), at(45, 74), at(44, 90)],
      [at(50, 58), at(55, 74), at(56, 90)],
    ],
    onGround: true,
  },
  // 閉脚跳び。腕を上げ、両脚をそろえたまま浮く
  [StickPose.CLOSED_JUMP]: {
    head: at(50, 14),
    headRadius: 7,
    spine: [at(50, 21), at(50, 52)],
    arms: [
      [at(50, 26), at(42, 20), at(36, 12)],
      [at(50, 26), at(58, 20), at(64, 12)],
    ],
    legs: [
      [at(50, 52), at(47, 70), at(46, 86)],
      [at(50, 52), at(53, 70), at(54, 86)],
    ],
    onGround: false,
  },
  // 開脚跳び。腕を横に伸ばし、脚を左右に開く
  [StickPose.STRADDLE_JUMP]: {
    head: at(50, 14),
    headRadius: 7,
    spine: [at(50, 21), at(50, 50)],
    arms: [
      [at(50, 26), at(36, 26), at(22, 28)],
      [at(50, 26), at(64, 26), at(78, 28)],
    ],
    legs: [
      [at(50, 50), at(34, 60), at(18, 68)],
      [at(50, 50), at(66, 60), at(82, 68)],
    ],
    onGround: false,
  },
  // 大ジャンプ。手足を大の字に開く
  [StickPose.BIG_JUMP]: {
    head: at(50, 14),
    headRadius: 7,
    spine: [at(50, 21), at(50, 50)],
    arms: [
      [at(50, 26), at(38, 18), at(26, 10)],
      [at(50, 26), at(62, 18), at(74, 10)],
    ],
    legs: [
      [at(50, 50), at(38, 64), at(26, 78)],
      [at(50, 50), at(62, 64), at(74, 78)],
    ],
    onGround: false,
  },
  // 反りジャンプ。胴を反らせ、後の脚を高く振り上げる
  [StickPose.ARCH_JUMP]: {
    head: at(44, 16),
    headRadius: 7,
    spine: [at(47, 24), at(50, 36), at(54, 50)],
    arms: [
      [at(48, 28), at(38, 20), at(28, 16)],
      [at(48, 28), at(58, 18), at(66, 10)],
    ],
    legs: [
      [at(54, 50), at(40, 58), at(26, 54)],
      [at(54, 50), at(62, 66), at(70, 80)],
    ],
    onGround: false,
  },
  // かかえこみ跳び。膝を胸に引きつけ、両手でかかえる
  [StickPose.TUCK_JUMP]: {
    head: at(50, 16),
    headRadius: 7,
    spine: [at(50, 23), at(50, 46)],
    arms: [
      [at(50, 28), at(42, 42), at(44, 54)],
      [at(50, 28), at(58, 42), at(56, 54)],
    ],
    legs: [
      [at(50, 46), at(40, 54), at(46, 68)],
      [at(50, 46), at(60, 54), at(54, 68)],
    ],
    onGround: false,
  },
  // 前後開脚交叉跳び。前の脚を上げ、後の脚を下げる
  [StickPose.SCISSORS_JUMP]: {
    head: at(50, 14),
    headRadius: 7,
    spine: [at(50, 21), at(50, 50)],
    arms: [
      [at(50, 26), at(36, 30), at(24, 26)],
      [at(50, 26), at(64, 30), at(76, 26)],
    ],
    legs: [
      [at(50, 50), at(34, 52), at(20, 48)],
      [at(50, 50), at(64, 62), at(78, 74)],
    ],
    onGround: false,
  },
  // ひねり跳び。腕を胸の前でたたみ、体を細くして回る
  [StickPose.TWIST_JUMP]: {
    head: at(52, 14),
    headRadius: 7,
    spine: [at(51, 21), at(49, 52)],
    arms: [
      [at(51, 27), at(41, 33), at(52, 40)],
      [at(51, 27), at(61, 33), at(50, 43)],
    ],
    legs: [
      [at(49, 52), at(46, 70), at(48, 86)],
      [at(49, 52), at(54, 70), at(52, 86)],
    ],
    onGround: false,
  },
  // バタフライ。体を水平にして横向きに回る
  [StickPose.BUTTERFLY]: {
    head: at(22, 50),
    headRadius: 7,
    spine: [at(30, 50), at(68, 48)],
    arms: [
      [at(34, 50), at(34, 38), at(34, 26)],
      [at(34, 50), at(30, 62), at(28, 74)],
    ],
    legs: [
      [at(68, 48), at(80, 36), at(90, 26)],
      [at(68, 48), at(78, 60), at(88, 70)],
    ],
    onGround: false,
  },
  // 前屈。脚を伸ばしたまま上体を折り、手を足へ
  [StickPose.FORWARD_BEND]: {
    head: at(32, 56),
    headRadius: 7,
    spine: [at(40, 52), at(56, 46)],
    arms: [
      [at(41, 53), at(38, 68), at(36, 84)],
      [at(41, 53), at(43, 68), at(43, 86)],
    ],
    legs: [
      [at(56, 46), at(54, 68), at(54, 90)],
      [at(56, 46), at(61, 68), at(61, 90)],
    ],
    onGround: true,
  },
  // 開脚座。床に座り、上体を立てたまま脚を開く
  [StickPose.SPLIT_SIT]: {
    head: at(50, 32),
    headRadius: 7,
    spine: [at(50, 39), at(50, 66)],
    arms: [
      [at(50, 44), at(37, 50), at(24, 56)],
      [at(50, 44), at(63, 50), at(76, 56)],
    ],
    legs: [
      [at(50, 66), at(32, 78), at(14, 88)],
      [at(50, 66), at(68, 78), at(86, 88)],
    ],
    onGround: true,
  },
  // 仰臥位。あおむけに寝て、脚を開いて上げる
  [StickPose.SUPINE]: {
    head: at(18, 82),
    headRadius: 7,
    spine: [at(26, 82), at(56, 82)],
    arms: [
      [at(30, 82), at(22, 74), at(13, 70)],
      [at(30, 82), at(24, 88), at(14, 90)],
    ],
    legs: [
      [at(56, 82), at(72, 72), at(88, 62)],
      [at(56, 82), at(74, 86), at(92, 88)],
    ],
    onGround: true,
  },
  // 膝立ち。はねおきで起き上がった姿勢
  [StickPose.KNEEL]: {
    head: at(50, 26),
    headRadius: 7,
    spine: [at(50, 33), at(50, 60)],
    arms: [
      [at(50, 38), at(42, 50), at(36, 60)],
      [at(50, 38), at(58, 50), at(64, 60)],
    ],
    legs: [
      [at(50, 60), at(46, 84), at(34, 90)],
      [at(50, 60), at(56, 84), at(68, 90)],
    ],
    onGround: true,
  },
  // 倒立。両手で支え、脚をまっすぐ上へ
  [StickPose.HANDSTAND]: {
    head: at(50, 75),
    headRadius: 6,
    spine: [at(50, 64), at(50, 36)],
    arms: [
      [at(50, 64), at(44, 78), at(40, 90)],
      [at(50, 64), at(56, 78), at(60, 90)],
    ],
    legs: [
      [at(50, 36), at(47, 22), at(46, 10)],
      [at(50, 36), at(53, 22), at(54, 10)],
    ],
    onGround: true,
  },
  // 片手倒立。片手で支え、もう片方の腕は横へ伸ばす
  [StickPose.ONE_HAND_HANDSTAND]: {
    head: at(46, 74),
    headRadius: 6,
    spine: [at(50, 64), at(50, 36)],
    arms: [
      [at(50, 64), at(51, 77), at(52, 90)],
      [at(50, 64), at(64, 70), at(78, 76)],
    ],
    legs: [
      [at(50, 36), at(46, 22), at(42, 10)],
      [at(50, 36), at(56, 22), at(60, 10)],
    ],
    onGround: true,
  },
  // 十字倒立。倒立のまま脚を左右いっぱいに開く
  [StickPose.CROSS_HANDSTAND]: {
    head: at(50, 75),
    headRadius: 6,
    spine: [at(50, 64), at(50, 40)],
    arms: [
      [at(50, 64), at(44, 78), at(40, 90)],
      [at(50, 64), at(56, 78), at(60, 90)],
    ],
    legs: [
      [at(50, 40), at(36, 33), at(22, 26)],
      [at(50, 40), at(64, 33), at(78, 26)],
    ],
    onGround: true,
  },
  // 水平バランス。上体と後の脚を水平にそろえる
  [StickPose.HORIZONTAL_BALANCE]: {
    head: at(22, 46),
    headRadius: 7,
    spine: [at(30, 48), at(56, 50)],
    arms: [
      [at(34, 48), at(28, 38), at(22, 30)],
      [at(34, 48), at(30, 60), at(26, 72)],
    ],
    legs: [
      [at(56, 50), at(56, 70), at(56, 90)],
      [at(56, 50), at(72, 45), at(88, 40)],
    ],
    onGround: true,
  },
  // 横バランス。上体を傾け、脚を横に高く上げる
  [StickPose.SIDE_BALANCE]: {
    head: at(34, 20),
    headRadius: 7,
    spine: [at(38, 27), at(50, 54)],
    arms: [
      [at(39, 32), at(28, 30), at(18, 28)],
      [at(39, 32), at(50, 28), at(60, 22)],
    ],
    legs: [
      [at(50, 54), at(52, 72), at(52, 90)],
      [at(50, 54), at(66, 44), at(82, 34)],
    ],
    onGround: true,
  },
  // 後ろバランス。上体を後に倒し、前の脚を上げる
  [StickPose.BACK_BALANCE]: {
    head: at(62, 24),
    headRadius: 7,
    spine: [at(58, 31), at(48, 56)],
    arms: [
      [at(57, 35), at(68, 38), at(78, 42)],
      [at(57, 35), at(64, 26), at(72, 18)],
    ],
    legs: [
      [at(48, 56), at(48, 73), at(48, 90)],
      [at(48, 56), at(34, 50), at(20, 44)],
    ],
    onGround: true,
  },
  // 開脚片足平均立ち。上げた脚の足を手で保持する
  [StickPose.SPLIT_BALANCE]: {
    head: at(44, 18),
    headRadius: 7,
    spine: [at(46, 25), at(52, 52)],
    arms: [
      [at(46, 30), at(40, 24), at(36, 18)],
      [at(46, 30), at(58, 34), at(68, 38)],
    ],
    legs: [
      [at(52, 52), at(54, 71), at(54, 90)],
      [at(52, 52), at(44, 34), at(36, 18)],
    ],
    onGround: true,
  },
  // ブリッヂ。手と足で床を押して反る
  [StickPose.BRIDGE]: {
    head: at(28, 66),
    headRadius: 7,
    spine: [at(36, 60), at(50, 55), at(62, 58)],
    arms: [
      [at(37, 60), at(31, 74), at(25, 88)],
      [at(37, 60), at(35, 74), at(31, 88)],
    ],
    legs: [
      [at(62, 58), at(70, 72), at(72, 88)],
      [at(62, 58), at(74, 72), at(78, 88)],
    ],
    onGround: true,
  },
  // 正面支持臥。うつぶせで、体を一直線に支える
  [StickPose.FRONT_SUPPORT]: {
    head: at(20, 58),
    headRadius: 7,
    spine: [at(28, 60), at(64, 66)],
    arms: [
      [at(32, 61), at(30, 74), at(28, 87)],
      [at(32, 61), at(35, 74), at(33, 87)],
    ],
    legs: [
      [at(64, 66), at(76, 74), at(88, 83)],
      [at(64, 66), at(78, 78), at(90, 88)],
    ],
    onGround: true,
  },
  // 旋回・ターン。つま先立ちで回り、もう片方の膝は横へ
  [StickPose.PIVOT]: {
    head: at(50, 16),
    headRadius: 7,
    spine: [at(50, 23), at(50, 54)],
    arms: [
      [at(50, 28), at(44, 20), at(46, 10)],
      [at(50, 28), at(56, 20), at(54, 10)],
    ],
    legs: [
      [at(50, 54), at(50, 72), at(50, 90)],
      [at(50, 54), at(63, 63), at(51, 74)],
    ],
    onGround: true,
  },
  // ローリング。体を丸めて床を転がる
  [StickPose.ROLLING]: {
    head: at(36, 62),
    headRadius: 7,
    spine: [at(44, 64), at(62, 70)],
    arms: [
      [at(46, 64), at(43, 76), at(54, 84)],
      [at(46, 64), at(56, 66), at(66, 74)],
    ],
    legs: [
      [at(62, 70), at(70, 82), at(58, 88)],
      [at(62, 70), at(74, 78), at(64, 90)],
    ],
    onGround: true,
  },
  // 前転。背中を丸め、頭を先にして前へ回る
  [StickPose.FORWARD_ROLL]: {
    head: at(32, 72),
    headRadius: 7,
    spine: [at(41, 68), at(60, 56)],
    arms: [
      [at(44, 66), at(40, 78), at(36, 88)],
      [at(44, 66), at(49, 78), at(45, 88)],
    ],
    legs: [
      [at(60, 56), at(72, 64), at(70, 80)],
      [at(60, 56), at(76, 58), at(82, 72)],
    ],
    onGround: true,
  },
  // 後転。前転の向きを返したもの
  [StickPose.BACKWARD_ROLL]: {
    head: at(68, 72),
    headRadius: 7,
    spine: [at(59, 68), at(40, 56)],
    arms: [
      [at(56, 66), at(60, 78), at(64, 88)],
      [at(56, 66), at(51, 78), at(55, 88)],
    ],
    legs: [
      [at(40, 56), at(28, 64), at(30, 80)],
      [at(40, 56), at(24, 58), at(18, 72)],
    ],
    onGround: true,
  },
  // 側方倒立回転。斜めの倒立になり、脚を大きく開いて越す
  [StickPose.CARTWHEEL]: {
    head: at(39, 64),
    headRadius: 6,
    spine: [at(46, 58), at(54, 34)],
    arms: [
      [at(46, 58), at(40, 73), at(34, 88)],
      [at(46, 58), at(50, 73), at(54, 88)],
    ],
    legs: [
      [at(54, 34), at(42, 25), at(30, 16)],
      [at(54, 34), at(68, 27), at(82, 20)],
    ],
    onGround: true,
  },
  // 前方宙返り。空中で体を丸め、前へ回る
  [StickPose.FRONT_SALTO]: {
    head: at(34, 46),
    headRadius: 7,
    spine: [at(43, 45), at(58, 52)],
    arms: [
      [at(46, 46), at(43, 57), at(50, 64)],
      [at(46, 46), at(52, 53), at(55, 63)],
    ],
    legs: [
      [at(58, 52), at(61, 66), at(49, 69)],
      [at(58, 52), at(67, 62), at(56, 71)],
    ],
    onGround: false,
  },
  // 後方宙返り。空中で体を丸め、後へ回る
  [StickPose.BACK_SALTO]: {
    head: at(66, 46),
    headRadius: 7,
    spine: [at(57, 45), at(42, 52)],
    arms: [
      [at(54, 46), at(57, 57), at(50, 64)],
      [at(54, 46), at(48, 53), at(45, 63)],
    ],
    legs: [
      [at(42, 52), at(39, 66), at(51, 69)],
      [at(42, 52), at(33, 62), at(44, 71)],
    ],
    onGround: false,
  },
  // 側方宙返り。体を横に倒したまま、脚を開いて回る
  [StickPose.SIDE_SALTO]: {
    head: at(20, 44),
    headRadius: 7,
    spine: [at(28, 46), at(64, 54)],
    arms: [
      [at(31, 46), at(26, 35), at(22, 24)],
      [at(31, 46), at(28, 58), at(24, 68)],
    ],
    legs: [
      [at(64, 54), at(74, 42), at(84, 32)],
      [at(64, 54), at(78, 62), at(90, 70)],
    ],
    onGround: false,
  },
}

/**
 * 技の名前から姿勢を選ぶための決まり。
 *
 * @remarks
 * 冊子の技名は「後ろとびひねり前方宙返り」のように、いくつもの言葉が続けて書いてある。
 * 1語だけで見ると取り違えるので、「この語がそろって入っていれば」という組で見る
 */
interface PoseRule {
  /** 当てはまったときの姿勢 */
  readonly pose: StickPose
  /** 語の組。1つの組の語が**すべて**技名に入っていれば当てはまる */
  readonly patterns: readonly (readonly string[])[]
}

/**
 * 技の名前から姿勢を選ぶ決まり。**上から順に見て、最初に当てはまったものを使う**。
 *
 * @remarks
 * 並び順そのものが決まりの一部になっている。
 *
 * 1. 倒立回転・倒立 … 「後転倒立」のように、ほかの語が付いていても倒立の姿勢で描く
 * 2. 宙返り … 「後転とびから後方伸身宙返り」は最後の宙返りで描く。
 *    向きは、側方（アラビア）→ 後方 → それ以外は前方、の順に見る
 * 3. 支持臥・ブリッヂ … 「後ろとび1回ひねり正面支持臥」は終わりの姿勢で描く
 * 4. バランス … 背面 → 側面 → 開脚（足を保持するもの）→ そのほか水平
 * 5. 回転 … 「前転とび」「後転とび」は跳躍ではなく回転として描く
 * 6. 跳躍 … 脚の開き方・反り・ひねりで描き分ける
 * 7. 床の姿勢 … 仰臥位・前屈・開脚座。「開脚座で体前屈」は前屈で描く
 */
const POSE_RULES: readonly PoseRule[] = [
  // 1 倒立の仲間。「側方倒立回転」は倒立より先に見る
  { pose: StickPose.CARTWHEEL, patterns: [['倒立回転'], ['ロンダード']] },
  { pose: StickPose.CROSS_HANDSTAND, patterns: [['十字倒立']] },
  { pose: StickPose.ONE_HAND_HANDSTAND, patterns: [['片手倒立']] },
  { pose: StickPose.HANDSTAND, patterns: [['倒立']] },

  // 2 宙返りの仲間。向きの語で描き分ける
  { pose: StickPose.SIDE_SALTO, patterns: [['側方', '宙返り'], ['アラビア']] },
  { pose: StickPose.BACK_SALTO, patterns: [['後方', '宙返り'], ['テンポ宙返り']] },
  { pose: StickPose.FRONT_SALTO, patterns: [['宙返り']] },

  // 3 終わりの姿勢で描くもの
  { pose: StickPose.FRONT_SUPPORT, patterns: [['支持臥']] },
  { pose: StickPose.BRIDGE, patterns: [['ブリッヂ'], ['ブリッジ']] },

  // 4 バランスの仲間
  { pose: StickPose.BACK_BALANCE, patterns: [['背面'], ['後ろバランス']] },
  { pose: StickPose.SIDE_BALANCE, patterns: [['側面'], ['横バランス']] },
  {
    pose: StickPose.SPLIT_BALANCE,
    patterns: [
      ['開脚', '平均立ち'],
      ['開脚', 'バランス'],
    ],
  },
  { pose: StickPose.HORIZONTAL_BALANCE, patterns: [['水平'], ['平均立ち'], ['バランス']] },

  // 5 回転の仲間。「前転とび」「後転とび」は跳躍より先に見る
  { pose: StickPose.ROLLING, patterns: [['ローリング']] },
  { pose: StickPose.PIVOT, patterns: [['旋回'], ['ターン']] },
  { pose: StickPose.FORWARD_ROLL, patterns: [['前転'], ['もぐり']] },
  { pose: StickPose.BACKWARD_ROLL, patterns: [['後転']] },
  { pose: StickPose.KNEEL, patterns: [['はねおき'], ['膝立ち']] },

  // 6 跳躍の仲間
  { pose: StickPose.BUTTERFLY, patterns: [['バタフライ']] },
  { pose: StickPose.BIG_JUMP, patterns: [['大の字'], ['大ジャンプ']] },
  { pose: StickPose.ARCH_JUMP, patterns: [['反り']] },
  { pose: StickPose.TUCK_JUMP, patterns: [['かかえこみ'], ['かかえ込み']] },
  { pose: StickPose.SCISSORS_JUMP, patterns: [['交叉']] },
  {
    pose: StickPose.STRADDLE_JUMP,
    patterns: [
      ['開脚', 'とび'],
      ['開脚', '跳び'],
    ],
  },
  {
    pose: StickPose.CLOSED_JUMP,
    patterns: [['閉脚', 'とび'], ['閉脚', '跳び'], ['足打ち']],
  },
  {
    pose: StickPose.TWIST_JUMP,
    patterns: [
      ['ひねり', 'とび'],
      ['ひねり', '跳び'],
      ['ひねり', '跳躍'],
    ],
  },

  // 7 床の姿勢
  { pose: StickPose.SUPINE, patterns: [['仰臥位']] },
  { pose: StickPose.FORWARD_BEND, patterns: [['前屈']] },
  { pose: StickPose.SPLIT_SIT, patterns: [['開脚座'], ['長座']] },
]

/**
 * 技の名前から、添える棒人間の姿勢を選ぶ。
 *
 * @remarks
 * `POSE_RULES` を上から順に見て、最初に当てはまったものを返す。
 * どれにも当てはまらない技（図解に名前が途中までしか印刷されていないものなど）は、
 * 当てずっぽうで描かずに直立で出す
 *
 * @param techniqueName - 技の名前。冊子に印刷されているまま渡す
 * @returns 当てはまった姿勢。当てはまらなければ直立
 */
export const poseOf = (techniqueName: string): StickPose =>
  POSE_RULES.find((rule) =>
    rule.patterns.some((pattern) => pattern.every((word) => techniqueName.includes(word))),
  )?.pose ?? StickPose.STAND
