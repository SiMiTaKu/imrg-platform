/**
 * 冊子の線画の代わりに出す、仮の棒人間。
 *
 * @remarks
 * 3.6.3 図解（52〜60ページ）と 3.8.9 難度表（図解）（71〜76ページ）は、
 * 枠の中に「番号・技の名前・線画・難度」が入っている。
 * 線画だけは文字にできず、画像も無いので、表の各行に何の絵も出せない状態だった。
 * そこで技の名前から姿勢を選び、棒人間を描いて添える。
 *
 * 関節の位置は**冊子の線画を1枠ずつ見て**写し取ってある。
 * 当たり障りのない形にせず、線画の特徴（体の傾き・腕の開き・脚の角度・反り具合・頭の向き）が
 * 出るところまで座標を寄せてある。宙返りや旋回のように動きのある技は、
 * 止まった形ではなく**動きの途中**を描き、どちらへ回っているかが分かるようにしてある。
 *
 * これはあくまで**仮の絵**で、いずれプロジェクトのキャラクターのイラストに差し替える。
 *
 * **2026-09-23: 冊子の線画とくらべて精度が低い。運営者が「後で対応する」と判断した。**
 * 描き直しは `docs/TODO.md` の 5-8 に記録してある。
 * 差し替えるときに描き方だけを入れ替えられるよう、
 *
 * - 姿勢の種類（`StickPose`）
 * - 姿勢ごとの関節の位置（`STICK_SKELETONS`）
 * - 技の名前から姿勢を選ぶ決まり（`POSE_RULES`・`poseOf`）
 * - 技の名前からコマの並びを選ぶ決まり（`STICK_SEQUENCES`・`SEQUENCE_RULES`・`sequenceOf`）
 *
 * の4つに分けてある。イラストができたら `STICK_SKELETONS` を使うのをやめ、
 * `StickPose` を鍵にして絵を引けばよく、`poseOf` と `sequenceOf` の決まりはそのまま使える。
 *
 * 冊子の図解は**コマ送り**になっている。技の動きを左から右へ数コマ並べ、
 * 踏み切りから着地までの流れが1枠で読めるように描いてある。
 * 前方宙返りのように動きのある技は5〜8コマ、
 * バランス・倒立・柔軟のように止めて見せる技は1〜2コマ。
 * ターンは同じ姿勢を回転の数だけ並べてある（360度で3コマ、1080度で5コマ）。
 * 同じように出せるよう、姿勢を1つ選ぶ `poseOf` とは別に、
 * コマの並びを返す `sequenceOf` を用意してある
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
 * 冊子の図解に出てくる技を、線画で描き分けられているところまで写した40種類。
 * 同じ線画で括れる技（宙返りのかかえ込みと屈身、閉脚倒立と開脚倒立など）は1つにしてある。
 *
 * 冊子の線画を見て、もとの30種では描き分けられなかったものを足してある。
 * 開脚跳び（前後開脚）と開脚屈身とび（左右開脚）、テンポ宙返り（伸身）と
 * かかえ込みの宙返り、前方・後方の倒立回転（転回）と側方倒立回転、
 * 開脚旋回（床に手をついて脚を振り回す）と片足軸ターン（立って回る）などがそれにあたる
 */
export const StickPose = {
  /** 直立。どれにも当てはまらないときの姿勢でもある */
  STAND: 'stand',
  /** 閉脚跳び。腕を上に伸ばし、両脚をそろえてまっすぐ跳ぶ */
  CLOSED_JUMP: 'closedJump',
  /** 開脚跳び。脚を前後に大きく開いて跳ぶ */
  SPLIT_JUMP: 'splitJump',
  /** 開脚屈身とび。脚を左右に開いて前へ上げ、上体を折る */
  STRADDLE_JUMP: 'straddleJump',
  /** 閉脚屈身とび。両脚をそろえて前へ上げ、上体を折る */
  PIKE_JUMP: 'pikeJump',
  /** 大ジャンプ。手足を大の字に開いて跳ぶ */
  BIG_JUMP: 'bigJump',
  /** 反りジャンプ。後に振り上げて反り身になる */
  ARCH_JUMP: 'archJump',
  /** 反りジャンプ（頭一足）。強く反って、後の足が頭に触れる */
  RING_JUMP: 'ringJump',
  /** かかえこみ跳び。腕を上に伸ばし、膝を胸に引きつける */
  TUCK_JUMP: 'tuckJump',
  /** 前後開脚交叉跳び。前後に開いて入れ替える */
  SCISSORS_JUMP: 'scissorsJump',
  /** ひねり跳び。腕を胸の前で組み、体を伸ばしたまま回る */
  TWIST_JUMP: 'twistJump',
  /** バタフライ。体を水平にして横に回る */
  BUTTERFLY: 'butterfly',
  /** 前屈。床に座って上体を脚の上へ折り伏せる */
  FORWARD_BEND: 'forwardBend',
  /** 開脚座。床に座って脚を一直線に開く */
  SPLIT_SIT: 'splitSit',
  /** 仰臥位。あおむけに寝て脚を開く */
  SUPINE: 'supine',
  /** 脚前挙支持。床に手をついて腰を浮かせ、脚を前へ水平に上げる */
  L_SUPPORT: 'lSupport',
  /** 膝立ち。はねおきで立ち上がった姿勢 */
  KNEEL: 'kneel',
  /** 首はねおき・頭はねおき。あおむけから腰を跳ね上げる途中 */
  NECK_KIP: 'neckKip',
  /** 倒立。両手で支える */
  HANDSTAND: 'handstand',
  /** 鹿倒立。倒立のまま片脚を伸ばし、もう片脚の膝を折る */
  DEER_HANDSTAND: 'deerHandstand',
  /** 片手倒立。片手で支え、もう片方は横へ伸ばす */
  ONE_HAND_HANDSTAND: 'oneHandHandstand',
  /** 十字倒立。倒立のまま脚を左右いっぱいに開く */
  CROSS_HANDSTAND: 'crossHandstand',
  /** 水平バランス。正面水平立ち。上体と後の脚を水平にする */
  HORIZONTAL_BALANCE: 'horizontalBalance',
  /** 横バランス。側面水平立ち。脚を横に上げ、上体を反対へ傾ける */
  SIDE_BALANCE: 'sideBalance',
  /** 背面バランス。背面水平立ち。胸を上に向けて上体を水平にする */
  BACK_BALANCE: 'backBalance',
  /** 開脚片足平均立ち。上げた脚を手で保持する */
  SPLIT_BALANCE: 'splitBalance',
  /** ブリッヂ。手と足で床を押して反る */
  BRIDGE: 'bridge',
  /** 正面支持臥。うつぶせで腕を立て、体を一直線に支える */
  FRONT_SUPPORT: 'frontSupport',
  /** 片足軸ターン。つま先立ちで、腕を胸の前に組んで回る */
  PIVOT: 'pivot',
  /** 開脚旋回。床に手をついて、開いた脚を床すれすれに振り回す */
  FLAIR: 'flair',
  /** ローリング。肩で支えて脚を上げ、体を伸ばして転がる */
  ROLLING: 'rolling',
  /** 前転。もぐり回転以外の前まわりはここに入れる */
  FORWARD_ROLL: 'forwardRoll',
  /** 後転 */
  BACKWARD_ROLL: 'backwardRoll',
  /** 側方倒立回転。ロンダードともぐり回転もここに入れる */
  CARTWHEEL: 'cartwheel',
  /** 前方倒立回転。前転とびなど、手をついて前へ転回する */
  FRONT_HANDSPRING: 'frontHandspring',
  /** 後方倒立回転。後転とびなど、手をついて後へ転回する */
  BACK_HANDSPRING: 'backHandspring',
  /** 前方宙返り */
  FRONT_SALTO: 'frontSalto',
  /** 後方宙返り */
  BACK_SALTO: 'backSalto',
  /** 伸身宙返り。テンポ宙返りのように、体を反らせたまま後へ回る */
  LAYOUT_SALTO: 'layoutSalto',
  /** 側方宙返り。アラビア宙返りもここに入れる */
  SIDE_SALTO: 'sideSalto',

  /*
    ここから下は、コマ送りのつなぎに使う姿勢。
    冊子の図解は、技そのものの形だけでなく、その前後の助走・踏み切り・着地まで描いてある。
    `poseOf` はこれらを選ばない。`sequenceOf` がコマの並びを組むときだけ使う
  */

  /** 助走の構え。前（右）へ踏み出し、腕を後ろへ引いた走りの途中 */
  RUN_UP: 'runUp',
  /** 踏み切り。膝を折って沈み、腕を後ろへ振る */
  TAKEOFF: 'takeoff',
  /** 着地。膝を軽く曲げて受け、腕を左右へ開く */
  LANDING: 'landing',
  /** 踏み込み。前（右）へ大きく踏み出し、両手を床へ伸ばす。転回の入り */
  LUNGE: 'lunge',
  /** 立って後へ反る。腕を上げたまま上体を後（左）へ倒す。後転とびの入り */
  ARCH_STAND: 'archStand',
  /** しゃがみ。膝を深く折って腕を前へ出す。前転・後転の入りと終わり */
  CROUCH: 'crouch',
  /** 立位前屈。腰を高く上げ、上体を折って手を床につく。力倒立の途中 */
  PIKE_STAND: 'pikeStand',
  /** 宙返りの開き。回り切って体を開き、足を下ろしていく途中 */
  SALTO_OPEN: 'saltoOpen',
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
 *
 * 宙返り・転回・旋回・ローリングは、線画と同じく**動きの途中**を描いてある。
 * 進む向きはどれも右にそろえ、
 *
 * - 前へ回る技は頭が前（右）下、腰が後（左）上
 * - 後へ回る技は頭が後（左）下、腰が前（右）上
 *
 * と置いて、止めた絵のままでも回る向きが読めるようにしてある。
 * 絵をイラストに差し替えるときは、この表を使うのをやめるだけでよい
 */
export const STICK_SKELETONS: Readonly<Record<StickPose, StickSkeleton>> = {
  // 直立。肩を張って正面を向き、腕は体側にやや前へ垂らす
  [StickPose.STAND]: {
    head: at(50, 16),
    headRadius: 7,
    spine: [at(50, 23), at(50, 56)],
    arms: [
      [at(50, 28), at(43, 40), at(40, 53)],
      [at(50, 28), at(57, 40), at(60, 53)],
    ],
    legs: [
      [at(50, 56), at(47, 74), at(46, 91)],
      [at(50, 56), at(53, 74), at(54, 91)],
    ],
    onGround: true,
  },
  // 閉脚とび（71ページ 1〜4）。腕をまっすぐ上に伸ばし、体を一本の線にして真上へ跳ぶ
  [StickPose.CLOSED_JUMP]: {
    head: at(50, 20),
    headRadius: 6.5,
    spine: [at(50, 27), at(50, 54)],
    arms: [
      [at(50, 31), at(42, 22), at(39, 9)],
      [at(50, 31), at(58, 22), at(61, 9)],
    ],
    legs: [
      [at(50, 54), at(49, 70), at(48, 86)],
      [at(50, 54), at(51, 70), at(52, 86)],
    ],
    onGround: false,
  },
  // 開脚跳び（71ページ 5〜10）。脚を前後に大きく開き、腕は左右に水平へ開く
  [StickPose.SPLIT_JUMP]: {
    head: at(50, 22),
    headRadius: 7,
    spine: [at(50, 29), at(50, 52)],
    arms: [
      [at(50, 34), at(36, 30), at(22, 27)],
      [at(50, 34), at(64, 30), at(78, 27)],
    ],
    legs: [
      [at(50, 52), at(34, 58), at(18, 64)],
      [at(50, 52), at(66, 46), at(82, 40)],
    ],
    onGround: false,
  },
  // 開脚屈身とび（52ページ 5）。脚を左右にV字へ上げ、上体を折って手を足先へ伸ばす
  [StickPose.STRADDLE_JUMP]: {
    head: at(50, 41),
    headRadius: 7,
    spine: [at(50, 48), at(50, 61)],
    arms: [
      [at(50, 51), at(44, 63), at(40, 75)],
      [at(50, 51), at(56, 63), at(60, 75)],
    ],
    legs: [
      [at(50, 61), at(33, 50), at(16, 40)],
      [at(50, 61), at(67, 50), at(84, 40)],
    ],
    onGround: false,
  },
  // 閉脚屈身とび（52ページ 7 右）。両脚をそろえて前へ水平に上げ、上体を折って手を足先へ
  [StickPose.PIKE_JUMP]: {
    head: at(38, 24),
    headRadius: 7,
    spine: [at(44, 30), at(54, 54)],
    arms: [
      [at(46, 34), at(60, 40), at(74, 45)],
      [at(46, 34), at(60, 44), at(74, 49)],
    ],
    legs: [
      [at(54, 54), at(68, 46), at(82, 39)],
      [at(54, 54), at(69, 50), at(84, 44)],
    ],
    onGround: false,
  },
  // 大ジャンプ（71ページ 12）。腕を水平近くまで、脚を左右いっぱいに開いた大の字
  [StickPose.BIG_JUMP]: {
    head: at(50, 20),
    headRadius: 7,
    spine: [at(50, 27), at(50, 50)],
    arms: [
      [at(50, 31), at(34, 24), at(18, 18)],
      [at(50, 31), at(66, 24), at(82, 18)],
    ],
    legs: [
      [at(50, 50), at(34, 62), at(16, 74)],
      [at(50, 50), at(66, 62), at(84, 74)],
    ],
    onGround: false,
  },
  // 反りジャンプ（71ページ 13）。胴を逆C字に反らせ、後の脚を高く振り上げて腕を前へ出す
  [StickPose.ARCH_JUMP]: {
    head: at(58, 24),
    headRadius: 7,
    spine: [at(54, 31), at(48, 41), at(44, 52)],
    arms: [
      [at(52, 34), at(39, 30), at(26, 28)],
      [at(52, 34), at(48, 25), at(42, 15)],
    ],
    legs: [
      [at(44, 52), at(33, 63), at(22, 72)],
      [at(44, 52), at(58, 49), at(72, 42)],
    ],
    onGround: false,
  },
  // 反りジャンプ 頭一足（71ページ 14）。さらに強く反り、後の脚の膝を折って足を頭へ寄せる
  [StickPose.RING_JUMP]: {
    head: at(62, 32),
    headRadius: 7,
    spine: [at(57, 37), at(50, 46), at(46, 56)],
    arms: [
      [at(54, 39), at(41, 35), at(28, 31)],
      [at(54, 39), at(48, 29), at(42, 19)],
    ],
    legs: [
      [at(46, 56), at(34, 66), at(22, 74)],
      [at(46, 56), at(66, 52), at(68, 33)],
    ],
    onGround: false,
  },
  // かかえこみとび（52ページ 6）。腕を上に伸ばしたまま、膝を胸の高さまで引きつける
  [StickPose.TUCK_JUMP]: {
    head: at(50, 22),
    headRadius: 7,
    spine: [at(50, 29), at(50, 48)],
    arms: [
      [at(50, 33), at(44, 22), at(40, 11)],
      [at(50, 33), at(56, 22), at(60, 11)],
    ],
    legs: [
      [at(50, 48), at(42, 42), at(46, 57)],
      [at(50, 48), at(58, 42), at(54, 57)],
    ],
    onGround: false,
  },
  // 前後開脚交叉とび（52ページ 4）。前の脚を高く、後の脚を低く開き、腕も前後に振り分ける
  [StickPose.SCISSORS_JUMP]: {
    head: at(50, 22),
    headRadius: 7,
    spine: [at(50, 29), at(50, 50)],
    arms: [
      [at(50, 33), at(36, 28), at(22, 24)],
      [at(50, 33), at(64, 38), at(78, 44)],
    ],
    legs: [
      [at(50, 50), at(36, 58), at(22, 68)],
      [at(50, 50), at(65, 44), at(80, 38)],
    ],
    onGround: false,
  },
  // とびあがってひねり（71ページ 2〜4）。腕を胸の前で組み、体を細い一本の線にして回る
  [StickPose.TWIST_JUMP]: {
    head: at(50, 20),
    headRadius: 6.5,
    spine: [at(50, 27), at(50, 54)],
    arms: [
      [at(50, 31), at(40, 36), at(56, 40)],
      [at(50, 31), at(60, 36), at(44, 40)],
    ],
    legs: [
      [at(50, 54), at(49, 70), at(48, 86)],
      [at(50, 54), at(51, 70), at(52, 86)],
    ],
    onGround: false,
  },
  // バタフライ（71ページ 15）。体を水平に倒し、腕も脚も大きく開いたまま横へ回る
  [StickPose.BUTTERFLY]: {
    head: at(16, 54),
    headRadius: 7,
    spine: [at(24, 52), at(62, 46)],
    arms: [
      [at(28, 51), at(30, 38), at(32, 25)],
      [at(28, 51), at(26, 64), at(24, 77)],
    ],
    legs: [
      [at(62, 46), at(76, 36), at(90, 27)],
      [at(62, 46), at(74, 58), at(86, 70)],
    ],
    onGround: false,
  },
  // 体前屈（72ページ 1・2）。長座から上体を脚の上へ完全に折り伏せ、手を足先まで送る
  [StickPose.FORWARD_BEND]: {
    head: at(30, 71),
    headRadius: 6.5,
    spine: [at(38, 75), at(58, 84)],
    arms: [
      [at(41, 76), at(58, 81), at(75, 86)],
      [at(41, 76), at(58, 85), at(76, 90)],
    ],
    legs: [
      [at(58, 84), at(70, 87), at(84, 89)],
      [at(58, 84), at(70, 89), at(84, 91)],
    ],
    onGround: true,
  },
  // 左右開脚180度座位（72ページ 7）。脚を床の上で一直線に開き、上体を立てて腕を左右へ
  [StickPose.SPLIT_SIT]: {
    head: at(50, 30),
    headRadius: 7,
    spine: [at(50, 37), at(50, 80)],
    arms: [
      [at(50, 44), at(34, 48), at(18, 52)],
      [at(50, 44), at(66, 48), at(82, 52)],
    ],
    legs: [
      [at(50, 80), at(31, 84), at(12, 88)],
      [at(50, 80), at(69, 84), at(88, 88)],
    ],
    onGround: true,
  },
  // 仰臥位（72ページ 6・8）。あおむけに寝て、体も脚もほとんど床と平らになる
  [StickPose.SUPINE]: {
    head: at(80, 80),
    headRadius: 6.5,
    spine: [at(73, 82), at(46, 86)],
    arms: [
      [at(69, 83), at(79, 87), at(89, 89)],
      [at(69, 83), at(77, 90), at(87, 91)],
    ],
    legs: [
      [at(46, 86), at(30, 84), at(13, 82)],
      [at(46, 86), at(30, 88), at(13, 89)],
    ],
    onGround: true,
  },
  // 脚前挙支持（74ページ 11 の1枚目）。手で床を押して腰を浮かせ、脚を前へ水平に上げる
  [StickPose.L_SUPPORT]: {
    head: at(30, 44),
    headRadius: 7,
    spine: [at(32, 51), at(36, 68)],
    arms: [
      [at(33, 54), at(30, 71), at(28, 88)],
      [at(33, 54), at(37, 71), at(35, 88)],
    ],
    legs: [
      [at(36, 68), at(58, 65), at(80, 63)],
      [at(36, 68), at(58, 70), at(80, 68)],
    ],
    onGround: true,
  },
  // 膝立ち（55ページ 1）。膝を床につけ、脛を後へ流して腕を上へ伸ばす
  [StickPose.KNEEL]: {
    head: at(54, 27),
    headRadius: 7,
    spine: [at(53, 34), at(51, 62)],
    arms: [
      [at(52, 39), at(44, 31), at(38, 22)],
      [at(52, 39), at(60, 31), at(66, 22)],
    ],
    legs: [
      [at(51, 62), at(47, 84), at(30, 88)],
      [at(51, 62), at(52, 86), at(35, 91)],
    ],
    onGround: true,
  },
  // 首はねおき・頭はねおき（55ページ 1）。頭と手で床を押し、腰を跳ね上げて脚を前へ振り出す
  [StickPose.NECK_KIP]: {
    head: at(20, 82),
    headRadius: 6.5,
    spine: [at(28, 80), at(48, 70)],
    arms: [
      [at(31, 78), at(29, 88), at(21, 92)],
      [at(31, 78), at(36, 88), at(28, 93)],
    ],
    legs: [
      [at(48, 70), at(64, 58), at(80, 47)],
      [at(48, 70), at(62, 64), at(76, 55)],
    ],
    onGround: true,
  },
  // 倒立（53ページ 1 左）。両手で支え、体も脚もまっすぐ上へ伸ばす
  [StickPose.HANDSTAND]: {
    head: at(50, 74),
    headRadius: 6,
    spine: [at(50, 66), at(50, 34)],
    arms: [
      [at(50, 66), at(46, 78), at(44, 90)],
      [at(50, 66), at(54, 78), at(56, 90)],
    ],
    legs: [
      [at(50, 34), at(48, 22), at(47, 9)],
      [at(50, 34), at(52, 22), at(53, 9)],
    ],
    onGround: true,
  },
  // 鹿倒立（74ページ 8）。片脚は斜め上へ伸ばし、もう片脚は膝を折って畳む
  [StickPose.DEER_HANDSTAND]: {
    head: at(46, 73),
    headRadius: 6,
    spine: [at(50, 66), at(50, 36)],
    arms: [
      [at(50, 66), at(46, 78), at(44, 90)],
      [at(50, 66), at(54, 78), at(56, 90)],
    ],
    legs: [
      [at(50, 36), at(38, 26), at(26, 17)],
      [at(50, 36), at(66, 32), at(70, 47)],
    ],
    onGround: true,
  },
  // 片手倒立（73ページ 4）。片手だけで支え、もう片方の腕は横へ伸ばし、脚はV字に開く
  [StickPose.ONE_HAND_HANDSTAND]: {
    head: at(45, 72),
    headRadius: 6,
    spine: [at(50, 65), at(50, 36)],
    arms: [
      [at(50, 65), at(50, 78), at(50, 91)],
      [at(50, 65), at(64, 70), at(78, 74)],
    ],
    legs: [
      [at(50, 36), at(38, 26), at(26, 17)],
      [at(50, 36), at(62, 26), at(74, 17)],
    ],
    onGround: true,
  },
  // 十字倒立（73ページ 3 左）。倒立のまま脚を左右いっぱいに開いて水平へ近づける
  [StickPose.CROSS_HANDSTAND]: {
    head: at(50, 72),
    headRadius: 6,
    spine: [at(50, 64), at(50, 42)],
    arms: [
      [at(50, 64), at(46, 78), at(44, 90)],
      [at(50, 64), at(54, 78), at(56, 90)],
    ],
    legs: [
      [at(50, 42), at(34, 34), at(18, 27)],
      [at(50, 42), at(66, 34), at(82, 27)],
    ],
    onGround: true,
  },
  // 正面水平立ち（73ページ 6）。軸脚は垂直、上体と後の脚を水平にそろえ、腕を前へ伸ばす
  [StickPose.HORIZONTAL_BALANCE]: {
    head: at(17, 40),
    headRadius: 7,
    spine: [at(24, 45), at(52, 50)],
    arms: [
      [at(29, 46), at(19, 51), at(9, 55)],
      [at(29, 46), at(20, 54), at(11, 60)],
    ],
    legs: [
      [at(52, 50), at(52, 70), at(52, 91)],
      [at(52, 50), at(70, 47), at(88, 44)],
    ],
    onGround: true,
  },
  // 横バランス（72ページ バランス系 1〜3）。脚を横へ高く上げ、上体を反対側へ倒す
  [StickPose.SIDE_BALANCE]: {
    head: at(57, 26),
    headRadius: 7,
    spine: [at(54, 33), at(50, 54)],
    arms: [
      [at(53, 37), at(66, 34), at(80, 32)],
      [at(53, 37), at(44, 30), at(34, 23)],
    ],
    legs: [
      [at(50, 54), at(51, 72), at(51, 91)],
      [at(50, 54), at(36, 42), at(22, 30)],
    ],
    onGround: true,
  },
  // 背面水平立ち（73ページ 11）。胸を上に向けて上体を水平にし、腕は背中側へ垂らす
  [StickPose.BACK_BALANCE]: {
    head: at(76, 48),
    headRadius: 7,
    spine: [at(68, 50), at(46, 54)],
    arms: [
      [at(64, 51), at(74, 60), at(84, 68)],
      [at(64, 51), at(72, 63), at(82, 71)],
    ],
    legs: [
      [at(46, 54), at(47, 72), at(48, 91)],
      [at(46, 54), at(30, 50), at(14, 46)],
    ],
    onGround: true,
  },
  // 足を保持した開脚片足平均立ち（53ページ 3）。上げた脚を頭の上まで引き上げ、両手で持つ
  [StickPose.SPLIT_BALANCE]: {
    head: at(44, 28),
    headRadius: 7,
    spine: [at(48, 35), at(52, 58)],
    arms: [
      [at(49, 39), at(56, 31), at(60, 22)],
      [at(49, 39), at(57, 34), at(61, 25)],
    ],
    legs: [
      [at(52, 58), at(52, 74), at(52, 91)],
      [at(52, 58), at(64, 42), at(61, 23)],
    ],
    onGround: true,
  },
  // ブリッヂ（54ページ 7）。手と足で床を押し、腰を頂点にした大きなアーチを作る
  [StickPose.BRIDGE]: {
    head: at(26, 70),
    headRadius: 7,
    spine: [at(34, 63), at(50, 54), at(66, 62)],
    arms: [
      [at(35, 63), at(28, 76), at(24, 90)],
      [at(35, 63), at(33, 77), at(29, 90)],
    ],
    legs: [
      [at(66, 62), at(74, 76), at(76, 90)],
      [at(66, 62), at(78, 76), at(80, 90)],
    ],
    onGround: true,
  },
  // 正面支持臥（56ページ 1 の終わり）。うつぶせで腕を立て、肩から足まで一直線に支える
  [StickPose.FRONT_SUPPORT]: {
    head: at(22, 60),
    headRadius: 6.5,
    spine: [at(29, 63), at(72, 78)],
    arms: [
      [at(32, 64), at(30, 76), at(28, 88)],
      [at(32, 64), at(36, 76), at(34, 88)],
    ],
    legs: [
      [at(72, 78), at(80, 83), at(89, 88)],
      [at(72, 78), at(80, 86), at(89, 91)],
    ],
    onGround: true,
  },
  // 片足軸ターン（74ページ 1〜3）。つま先立ちの軸脚に、曲げた脚の足を当て、腕を胸の前に組む
  [StickPose.PIVOT]: {
    head: at(50, 20),
    headRadius: 7,
    spine: [at(50, 27), at(50, 54)],
    arms: [
      [at(50, 32), at(40, 37), at(56, 41)],
      [at(50, 32), at(60, 37), at(44, 41)],
    ],
    legs: [
      [at(50, 54), at(50, 72), at(50, 90)],
      [at(50, 54), at(65, 64), at(52, 72)],
    ],
    onGround: true,
  },
  // 開脚旋回・トーマス旋回（76ページ 22〜24）。床に手をつき、開いた脚を床すれすれに振り回す
  [StickPose.FLAIR]: {
    head: at(26, 62),
    headRadius: 6.5,
    spine: [at(34, 65), at(54, 70)],
    arms: [
      [at(37, 66), at(33, 78), at(29, 89)],
      [at(37, 66), at(41, 78), at(39, 89)],
    ],
    legs: [
      [at(54, 70), at(67, 80), at(80, 88)],
      [at(54, 70), at(71, 62), at(88, 54)],
    ],
    onGround: true,
  },
  // 後方肩支持からローリング（75ページ 13）。肩と頭で床を受け、腰を高く上げて脚を前へ送る
  [StickPose.ROLLING]: {
    head: at(24, 84),
    headRadius: 6.5,
    spine: [at(32, 81), at(52, 64)],
    arms: [
      [at(35, 79), at(27, 85), at(19, 89)],
      [at(35, 79), at(31, 87), at(23, 92)],
    ],
    legs: [
      [at(52, 64), at(66, 52), at(80, 40)],
      [at(52, 64), at(64, 58), at(76, 49)],
    ],
    onGround: true,
  },
  // 前転（55ページ 3）。頭を入れて背中を丸め、腰が頭を越えて前（右）へ落ちていく途中
  [StickPose.FORWARD_ROLL]: {
    head: at(34, 74),
    headRadius: 6.5,
    spine: [at(42, 70), at(58, 58)],
    arms: [
      [at(44, 68), at(38, 79), at(34, 90)],
      [at(44, 68), at(48, 79), at(44, 90)],
    ],
    legs: [
      [at(58, 58), at(70, 66), at(66, 80)],
      [at(58, 58), at(74, 62), at(76, 76)],
    ],
    onGround: true,
  },
  // 後転（前転を左右に返したもの）。腰が頭を越えて後（左）へ送られていく途中
  [StickPose.BACKWARD_ROLL]: {
    head: at(66, 74),
    headRadius: 6.5,
    spine: [at(58, 70), at(42, 58)],
    arms: [
      [at(56, 68), at(62, 79), at(66, 90)],
      [at(56, 68), at(52, 79), at(56, 90)],
    ],
    legs: [
      [at(42, 58), at(30, 66), at(34, 80)],
      [at(42, 58), at(26, 62), at(24, 76)],
    ],
    onGround: true,
  },
  // 側方倒立回転（75ページ 18）。体をほぼ立てた倒立のまま、脚を左右いっぱいに開いて越す
  [StickPose.CARTWHEEL]: {
    head: at(40, 64),
    headRadius: 6,
    spine: [at(46, 58), at(54, 33)],
    arms: [
      [at(46, 58), at(40, 73), at(34, 88)],
      [at(46, 58), at(50, 73), at(52, 88)],
    ],
    legs: [
      [at(54, 33), at(40, 25), at(26, 17)],
      [at(54, 33), at(68, 26), at(82, 20)],
    ],
    onGround: true,
  },
  // 前方倒立回転（75ページ 15）。手を床に残し、体を反らせて右上へ抜け、前の脚を高く振り出す
  [StickPose.FRONT_HANDSPRING]: {
    head: at(27, 67),
    headRadius: 6,
    spine: [at(34, 61), at(52, 44)],
    arms: [
      [at(34, 61), at(30, 75), at(26, 89)],
      [at(34, 61), at(37, 75), at(35, 89)],
    ],
    legs: [
      [at(52, 44), at(66, 32), at(80, 21)],
      [at(52, 44), at(64, 50), at(78, 55)],
    ],
    onGround: true,
  },
  // 後方倒立回転（75ページ 16）。前方倒立回転を左右に返したもの。体が左上へ抜けていく
  [StickPose.BACK_HANDSPRING]: {
    head: at(73, 67),
    headRadius: 6,
    spine: [at(66, 61), at(48, 44)],
    arms: [
      [at(66, 61), at(70, 75), at(74, 89)],
      [at(66, 61), at(63, 75), at(65, 89)],
    ],
    legs: [
      [at(48, 44), at(34, 32), at(20, 21)],
      [at(48, 44), at(36, 50), at(22, 55)],
    ],
    onGround: true,
  },
  // 前方宙返り（76ページ 5）。体を丸め、頭が前（右）下、腰が後（左）上に来た回転の途中
  [StickPose.FRONT_SALTO]: {
    head: at(66, 62),
    headRadius: 7,
    spine: [at(59, 57), at(42, 45)],
    arms: [
      [at(56, 55), at(63, 64), at(57, 71)],
      [at(56, 55), at(59, 67), at(52, 73)],
    ],
    legs: [
      [at(42, 45), at(60, 63), at(48, 72)],
      [at(42, 45), at(55, 68), at(42, 74)],
    ],
    onGround: false,
  },
  // 後方宙返り（76ページ 7）。体を丸め、頭が後（左）下、腰が前（右）上に来た回転の途中
  [StickPose.BACK_SALTO]: {
    head: at(34, 62),
    headRadius: 7,
    spine: [at(41, 57), at(58, 45)],
    arms: [
      [at(44, 55), at(37, 64), at(43, 71)],
      [at(44, 55), at(41, 67), at(48, 73)],
    ],
    legs: [
      [at(58, 45), at(40, 63), at(52, 72)],
      [at(58, 45), at(45, 68), at(58, 74)],
    ],
    onGround: false,
  },
  // テンポ宙返り（76ページ 8）。丸めずに、体を弓なりに反らせたまま後（左）へ倒れていく
  [StickPose.LAYOUT_SALTO]: {
    head: at(24, 60),
    headRadius: 7,
    spine: [at(32, 56), at(52, 43), at(72, 40)],
    arms: [
      [at(35, 54), at(25, 46), at(15, 38)],
      [at(35, 54), at(27, 50), at(17, 43)],
    ],
    legs: [
      [at(72, 40), at(82, 32), at(92, 25)],
      [at(72, 40), at(84, 42), at(95, 39)],
    ],
    onGround: false,
  },
  // 側方宙返り・アラビア宙返り（76ページ 10・11）。体を横に倒し、脚を大きく開いたまま回る
  [StickPose.SIDE_SALTO]: {
    head: at(18, 48),
    headRadius: 7,
    spine: [at(26, 50), at(60, 58)],
    arms: [
      [at(29, 51), at(24, 38), at(20, 25)],
      [at(29, 51), at(26, 63), at(22, 75)],
    ],
    legs: [
      [at(60, 58), at(72, 42), at(84, 26)],
      [at(60, 58), at(74, 66), at(88, 76)],
    ],
    onGround: false,
  },

  /*
    ここから下はコマ送りのつなぎ。
    冊子の図解では、どの枠も進む向きを右にそろえて描いてある。
    助走・踏み切りは左寄りに、着地は真ん中に置いて、左から右へ読めるようにしてある
  */

  // 助走の構え（55ページ 2 の1コマ目）。前（右）へ大きく踏み出し、腕を後ろへ引く
  [StickPose.RUN_UP]: {
    head: at(42, 20),
    headRadius: 7,
    spine: [at(44, 27), at(50, 54)],
    arms: [
      [at(46, 32), at(34, 38), at(22, 42)],
      [at(46, 32), at(36, 43), at(24, 48)],
    ],
    legs: [
      [at(50, 54), at(64, 70), at(76, 90)],
      [at(50, 54), at(40, 72), at(30, 90)],
    ],
    onGround: true,
  },
  // 踏み切り（52ページ 6 の1コマ目）。膝を折って沈み、腕を後ろへ振って反動を作る
  [StickPose.TAKEOFF]: {
    head: at(48, 28),
    headRadius: 7,
    spine: [at(48, 35), at(50, 58)],
    arms: [
      [at(48, 39), at(38, 46), at(28, 50)],
      [at(48, 39), at(40, 51), at(30, 56)],
    ],
    legs: [
      [at(50, 58), at(62, 72), at(54, 90)],
      [at(50, 58), at(58, 75), at(50, 91)],
    ],
    onGround: true,
  },
  // 着地（52ページ 6 の最後）。膝を軽く曲げて受け止め、腕を左右へ開いて止まる
  [StickPose.LANDING]: {
    head: at(50, 22),
    headRadius: 7,
    spine: [at(50, 29), at(50, 54)],
    arms: [
      [at(50, 33), at(38, 30), at(26, 28)],
      [at(50, 33), at(62, 30), at(74, 28)],
    ],
    legs: [
      [at(50, 54), at(44, 72), at(46, 90)],
      [at(50, 54), at(56, 72), at(54, 90)],
    ],
    onGround: true,
  },
  // 踏み込み（75ページ 15 の2コマ目）。前（右）へ倒れ込みながら、両手を床へ伸ばす
  [StickPose.LUNGE]: {
    head: at(58, 40),
    headRadius: 6.5,
    spine: [at(52, 45), at(34, 58)],
    arms: [
      [at(50, 47), at(62, 66), at(70, 88)],
      [at(50, 47), at(66, 68), at(76, 88)],
    ],
    legs: [
      [at(34, 58), at(30, 74), at(26, 90)],
      [at(34, 58), at(20, 66), at(10, 74)],
    ],
    onGround: true,
  },
  // 後へ反る（75ページ 16 の2コマ目）。腕を上げたまま上体を後（左）へ倒し、後へ跳ぶ構え
  [StickPose.ARCH_STAND]: {
    head: at(38, 26),
    headRadius: 7,
    spine: [at(42, 32), at(52, 56)],
    arms: [
      [at(46, 35), at(36, 26), at(28, 16)],
      [at(46, 35), at(40, 24), at(33, 14)],
    ],
    legs: [
      [at(52, 56), at(52, 74), at(50, 90)],
      [at(52, 56), at(57, 74), at(55, 90)],
    ],
    onGround: true,
  },
  // しゃがみ（55ページ 3 の1コマ目）。膝を深く折って腰を落とし、腕を前へ出す
  [StickPose.CROUCH]: {
    head: at(48, 40),
    headRadius: 6.5,
    spine: [at(48, 47), at(48, 64)],
    arms: [
      [at(48, 50), at(58, 58), at(68, 64)],
      [at(48, 50), at(58, 62), at(68, 68)],
    ],
    legs: [
      [at(48, 64), at(62, 74), at(50, 90)],
      [at(48, 64), at(58, 78), at(46, 91)],
    ],
    onGround: true,
  },
  // 立位前屈（54ページ 8 の1コマ目）。腰を高く上げ、上体を折って手を床につく
  [StickPose.PIKE_STAND]: {
    head: at(30, 60),
    headRadius: 6.5,
    spine: [at(36, 56), at(56, 42)],
    arms: [
      [at(37, 57), at(33, 73), at(30, 88)],
      [at(37, 57), at(41, 73), at(38, 88)],
    ],
    legs: [
      [at(56, 42), at(60, 65), at(62, 90)],
      [at(56, 42), at(66, 65), at(68, 90)],
    ],
    onGround: true,
  },
  // 宙返りの開き（76ページ 5 の後半）。丸めた体を開き、足を下ろして着地へ向かう
  [StickPose.SALTO_OPEN]: {
    head: at(44, 26),
    headRadius: 7,
    spine: [at(48, 32), at(56, 54)],
    arms: [
      [at(50, 36), at(38, 42), at(26, 46)],
      [at(50, 36), at(42, 48), at(30, 54)],
    ],
    legs: [
      [at(56, 54), at(64, 70), at(66, 86)],
      [at(56, 54), at(70, 66), at(74, 82)],
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
 * 1. 床での支持・旋回 … 「開脚旋回倒立」は倒立ではなく旋回の線画で描かれている
 * 2. 終わりの姿勢で描くもの … 「後ろとび1回ひねり正面支持臥」「後方倒立回転から前後開脚座位」
 *    「後方倒立回転～倒立」など、冊子の線画が終わりの形を大きく描いているもの
 * 3. 倒立・倒立回転 … 側方 → 後方 → 前方 → 鹿・十字・片手 → ただの倒立
 * 4. 宙返り … 「後転とびから後方伸身宙返り」は最後の宙返りで描く。
 *    向きは、側方（アラビア）→ テンポ（伸身）→ 後方 → それ以外は前方、の順に見る
 * 5. バランス … 背面 → 足を保持するもの → 側面 → そのほか水平
 * 6. 回転・転回 … 「前転とび」「後転とび」は前転・後転ではなく転回（倒立回転）として描く。
 *    ロンダード・もぐり回転もここで側方倒立回転に当てる。
 *    「ロンダード」は連続技の例文にも出てくるので、宙返りより後に見る
 * 7. 跳躍 … 脚の開き方・反り・屈身・ひねりで描き分ける
 * 8. 床の姿勢 … 仰臥位・前屈・開脚座。「開脚座で体前屈」は前屈で描く
 */
const POSE_RULES: readonly PoseRule[] = [
  // 1 床での支持・旋回。倒立より先に見る
  { pose: StickPose.FLAIR, patterns: [['旋回']] },
  { pose: StickPose.L_SUPPORT, patterns: [['前挙支持']] },

  // 2 終わりの姿勢で描くもの
  { pose: StickPose.FRONT_SUPPORT, patterns: [['支持臥']] },
  { pose: StickPose.BRIDGE, patterns: [['ブリッヂ'], ['ブリッジ']] },
  { pose: StickPose.SPLIT_SIT, patterns: [['から', '開脚座位']] },
  {
    pose: StickPose.HORIZONTAL_BALANCE,
    patterns: [['から', '水平立ち']],
  },
  {
    pose: StickPose.HANDSTAND,
    patterns: [
      ['倒立回転', 'から倒立'],
      ['倒立回転', '～倒立'],
    ],
  },

  // 3 倒立の仲間。側方・後方・前方の倒立回転は、ただの倒立より先に見る
  { pose: StickPose.CARTWHEEL, patterns: [['側方倒立回転']] },
  { pose: StickPose.BACK_HANDSPRING, patterns: [['後方倒立回転']] },
  { pose: StickPose.FRONT_HANDSPRING, patterns: [['前方倒立回転']] },
  { pose: StickPose.DEER_HANDSTAND, patterns: [['鹿倒立']] },
  { pose: StickPose.CROSS_HANDSTAND, patterns: [['十字倒立']] },
  { pose: StickPose.ONE_HAND_HANDSTAND, patterns: [['片手倒立']] },
  { pose: StickPose.HANDSTAND, patterns: [['倒立']] },

  // 4 宙返りの仲間。向きと、丸めるか伸ばすかで描き分ける
  { pose: StickPose.SIDE_SALTO, patterns: [['側方', '宙返り'], ['アラビア']] },
  { pose: StickPose.LAYOUT_SALTO, patterns: [['テンポ宙返り']] },
  { pose: StickPose.BACK_SALTO, patterns: [['後方', '宙返り']] },
  { pose: StickPose.FRONT_SALTO, patterns: [['宙返り']] },

  // 5 バランスの仲間。足を手で持つものは、横・水平より先に見る
  { pose: StickPose.BACK_BALANCE, patterns: [['背面']] },
  {
    pose: StickPose.SPLIT_BALANCE,
    patterns: [['足を保持した'], ['足保持'], ['後ろバランス'], ['Cバランス'], ['頭と足が触れる']],
  },
  {
    pose: StickPose.SIDE_BALANCE,
    patterns: [['側面'], ['横バランス'], ['Bバランス']],
  },
  { pose: StickPose.HORIZONTAL_BALANCE, patterns: [['水平'], ['平均立ち'], ['バランス']] },

  // 6 回転・転回の仲間。「前転とび」「後転とび」は転回なので、前転・後転より先に見る
  { pose: StickPose.ROLLING, patterns: [['ローリング']] },
  { pose: StickPose.PIVOT, patterns: [['ターン']] },
  { pose: StickPose.NECK_KIP, patterns: [['はねおき'], ['はね起き']] },
  { pose: StickPose.KNEEL, patterns: [['膝立ち']] },
  { pose: StickPose.CARTWHEEL, patterns: [['ロンダード'], ['ロンダート'], ['もぐり']] },
  { pose: StickPose.FRONT_HANDSPRING, patterns: [['前転とび']] },
  { pose: StickPose.BACK_HANDSPRING, patterns: [['後転とび']] },
  { pose: StickPose.FORWARD_ROLL, patterns: [['前転']] },
  { pose: StickPose.BACKWARD_ROLL, patterns: [['後転']] },

  // 7 跳躍の仲間
  { pose: StickPose.BUTTERFLY, patterns: [['バタフライ']] },
  { pose: StickPose.BIG_JUMP, patterns: [['大の字'], ['大ジャンプ']] },
  { pose: StickPose.RING_JUMP, patterns: [['頭一足'], ['頭と足がつく']] },
  { pose: StickPose.ARCH_JUMP, patterns: [['反り']] },
  {
    pose: StickPose.TUCK_JUMP,
    patterns: [['かかえこみ'], ['かかえ込み'], ['抱え込み']],
  },
  { pose: StickPose.SCISSORS_JUMP, patterns: [['交叉']] },
  {
    pose: StickPose.PIKE_JUMP,
    patterns: [
      ['閉脚', '屈身'],
      ['閉脚', '屈伸'],
    ],
  },
  {
    pose: StickPose.STRADDLE_JUMP,
    patterns: [
      ['開脚', '屈身', 'とび'],
      ['開脚', '屈身', '跳び'],
    ],
  },
  {
    pose: StickPose.SPLIT_JUMP,
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

  // 8 床の姿勢
  { pose: StickPose.SUPINE, patterns: [['仰臥位']] },
  { pose: StickPose.FORWARD_BEND, patterns: [['前屈']] },
  { pose: StickPose.SPLIT_SIT, patterns: [['開脚座'], ['長座'], ['座位']] },
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

/**
 * 姿勢ごとの、コマ送りの並び。
 *
 * @remarks
 * 冊子の図解は技の動きを左から右へ数コマ並べてある。ここでは**技の型ごとに動きの流れ**を決め、
 * その型を代表する姿勢を鍵にして並びを引く。並びには必ず鍵の姿勢が入っていて、
 * それが技の山場（`poseOf` が返すコマ）になる。
 *
 * 冊子の枠を数えると、おおよそ次のとおりだった。
 *
 * - 跳躍 … 3〜6コマ。助走の構え → 踏み切り → 空中の形 → 着地
 * - 倒立回転（転回） … 4〜5コマ。直立 → 手をつく・反る → 倒立を通る → 抜ける → 着地
 * - 宙返り … 4〜6コマ。助走 → 踏み切り → 空中で丸める → 開く → 着地 → 直立
 * - 前転・後転・はねおき … 4〜5コマ。しゃがみを挟んで立つところまで
 * - ターン・旋回 … 同じ姿勢を回転の数だけ並べる
 * - バランス・倒立・柔軟 … 1コマ。止めて見せる技なので冊子も1〜2コマ
 *
 * つなぎの姿勢（`RUN_UP` など）そのものを技として選ぶことは無いが、
 * どの姿勢にも並びを持たせて、鍵が欠けないようにしてある
 */
export const STICK_SEQUENCES: Readonly<Record<StickPose, readonly StickPose[]>> = {
  /*
    止めて見せる技。冊子も1〜2コマなので、1コマだけ置く
  */
  [StickPose.STAND]: [StickPose.STAND],
  [StickPose.FORWARD_BEND]: [StickPose.FORWARD_BEND],
  [StickPose.SPLIT_SIT]: [StickPose.SPLIT_SIT],
  [StickPose.SUPINE]: [StickPose.SUPINE],
  [StickPose.L_SUPPORT]: [StickPose.L_SUPPORT],
  [StickPose.KNEEL]: [StickPose.KNEEL],
  [StickPose.HANDSTAND]: [StickPose.HANDSTAND],
  [StickPose.DEER_HANDSTAND]: [StickPose.DEER_HANDSTAND],
  [StickPose.ONE_HAND_HANDSTAND]: [StickPose.ONE_HAND_HANDSTAND],
  [StickPose.CROSS_HANDSTAND]: [StickPose.CROSS_HANDSTAND],
  [StickPose.HORIZONTAL_BALANCE]: [StickPose.HORIZONTAL_BALANCE],
  [StickPose.SIDE_BALANCE]: [StickPose.SIDE_BALANCE],
  [StickPose.BACK_BALANCE]: [StickPose.BACK_BALANCE],
  [StickPose.SPLIT_BALANCE]: [StickPose.SPLIT_BALANCE],
  [StickPose.BRIDGE]: [StickPose.BRIDGE],
  [StickPose.FRONT_SUPPORT]: [StickPose.FRONT_SUPPORT],

  /*
    跳躍。踏み切りで沈み、空中で形を作り、着地で受ける。
    助走から入る技（反り身・前後開脚）は、走りの構えを1コマ足す
  */
  // 閉脚とび（71ページ 1）。沈む → まっすぐ跳ぶ → 受ける → 立つ
  [StickPose.CLOSED_JUMP]: [
    StickPose.TAKEOFF,
    StickPose.CLOSED_JUMP,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // とびあがってひねり（52ページ 2）。伸び上がってから腕を組み、回りながら落ちてくる
  [StickPose.TWIST_JUMP]: [
    StickPose.TAKEOFF,
    StickPose.CLOSED_JUMP,
    StickPose.TWIST_JUMP,
    StickPose.TWIST_JUMP,
    StickPose.LANDING,
  ],
  // 開脚跳び（71ページ 6）。助走から踏み切り、脚を前後に開いて跳ぶ
  [StickPose.SPLIT_JUMP]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.SPLIT_JUMP,
    StickPose.LANDING,
  ],
  // 開脚屈身とび（52ページ 5）。その場で沈み、脚を左右へ上げて上体を折る
  [StickPose.STRADDLE_JUMP]: [
    StickPose.TAKEOFF,
    StickPose.STRADDLE_JUMP,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // 閉脚屈身とび（52ページ 7）。その場で沈み、両脚をそろえて前へ上げる
  [StickPose.PIKE_JUMP]: [
    StickPose.TAKEOFF,
    StickPose.PIKE_JUMP,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // 大ジャンプ（71ページ 12）。その場で沈み、手足を大の字に開いて跳ぶ
  [StickPose.BIG_JUMP]: [StickPose.TAKEOFF, StickPose.BIG_JUMP, StickPose.LANDING, StickPose.STAND],
  // 反りジャンプ（52ページ 8）。助走から片足で踏み切り、後の脚を振り上げて反る
  [StickPose.ARCH_JUMP]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.ARCH_JUMP,
    StickPose.LANDING,
  ],
  // 反りジャンプ 頭一足（52ページ 9）。反りジャンプと同じ流れで、さらに強く反る
  [StickPose.RING_JUMP]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.RING_JUMP,
    StickPose.LANDING,
  ],
  // かかえこみとび（52ページ 6）。沈む → 伸び上がる → 膝を胸へ引く → 立つ
  [StickPose.TUCK_JUMP]: [
    StickPose.TAKEOFF,
    StickPose.CLOSED_JUMP,
    StickPose.TUCK_JUMP,
    StickPose.LANDING,
  ],
  // 前後開脚交叉とび（52ページ 4）。助走から踏み切り、前後に開いて入れ替える
  [StickPose.SCISSORS_JUMP]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.SCISSORS_JUMP,
    StickPose.LANDING,
  ],
  // バタフライ（52ページ 11）。沈んでから体を水平に倒し、横へ回して着地する
  [StickPose.BUTTERFLY]: [
    StickPose.TAKEOFF,
    StickPose.BUTTERFLY,
    StickPose.BUTTERFLY,
    StickPose.LANDING,
  ],

  /*
    転回。手をついて体を越していく技なので、倒立を通るコマを必ず挟む
  */
  // 前方倒立回転（75ページ 15）。直立 → 踏み込んで手をつく → 倒立 → 抜ける → 着地
  [StickPose.FRONT_HANDSPRING]: [
    StickPose.STAND,
    StickPose.LUNGE,
    StickPose.HANDSTAND,
    StickPose.FRONT_HANDSPRING,
    StickPose.LANDING,
  ],
  // 後方倒立回転（75ページ 16）。直立 → 後へ反る → 倒立 → 抜ける → 着地
  [StickPose.BACK_HANDSPRING]: [
    StickPose.STAND,
    StickPose.ARCH_STAND,
    StickPose.HANDSTAND,
    StickPose.BACK_HANDSPRING,
    StickPose.LANDING,
  ],
  // 側方倒立回転（75ページ 18）。直立 → 踏み込む → 横向きの倒立で越す → 着地 → 立つ
  [StickPose.CARTWHEEL]: [
    StickPose.STAND,
    StickPose.LUNGE,
    StickPose.CARTWHEEL,
    StickPose.LANDING,
    StickPose.STAND,
  ],

  /*
    前転・後転。しゃがみを入りと終わりに置くと、どちらへ転がったかが読める
  */
  [StickPose.FORWARD_ROLL]: [
    StickPose.STAND,
    StickPose.CROUCH,
    StickPose.FORWARD_ROLL,
    StickPose.CROUCH,
    StickPose.STAND,
  ],
  [StickPose.BACKWARD_ROLL]: [
    StickPose.STAND,
    StickPose.CROUCH,
    StickPose.BACKWARD_ROLL,
    StickPose.CROUCH,
    StickPose.STAND,
  ],

  /*
    宙返り。冊子はどれも、踏み切りから着地までを弧を描くように並べてある
  */
  // 前方宙返り（76ページ 5）。助走 → 踏み切り → 丸める → 開く → 着地 → 立つ
  [StickPose.FRONT_SALTO]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.FRONT_SALTO,
    StickPose.SALTO_OPEN,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // 後方宙返り（76ページ 7）。立つ → 沈む → 後へ丸める → 開く → 着地 → 立つ
  [StickPose.BACK_SALTO]: [
    StickPose.STAND,
    StickPose.TAKEOFF,
    StickPose.BACK_SALTO,
    StickPose.SALTO_OPEN,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // テンポ宙返り（76ページ 8）。丸めずに反ったまま後へ回るので、開くコマを置かない
  [StickPose.LAYOUT_SALTO]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.LAYOUT_SALTO,
    StickPose.LANDING,
    StickPose.STAND,
  ],
  // 側方宙返り・アラビア宙返り（76ページ 10・11）。助走から横へ回して着地する
  [StickPose.SIDE_SALTO]: [
    StickPose.RUN_UP,
    StickPose.TAKEOFF,
    StickPose.SIDE_SALTO,
    StickPose.LANDING,
    StickPose.STAND,
  ],

  /*
    床から起きる技・回し続ける技
  */
  // 首はねおき・頭はねおき（55ページ 1）。あおむけ → 跳ね上げ → 受ける → 立つ
  [StickPose.NECK_KIP]: [StickPose.SUPINE, StickPose.NECK_KIP, StickPose.CROUCH, StickPose.STAND],
  // ローリング（75ページ 13）。肩で支えて脚を上げ、体を伸ばしたまま転がって伏せる
  [StickPose.ROLLING]: [
    StickPose.SUPINE,
    StickPose.ROLLING,
    StickPose.ROLLING,
    StickPose.FRONT_SUPPORT,
  ],
  // 開脚旋回（76ページ 23）。同じ形のまま脚を振り回すので、同じコマを並べる
  [StickPose.FLAIR]: [StickPose.FLAIR, StickPose.FLAIR, StickPose.FLAIR],
  // 片足軸ターン（74ページ 1）。冊子も同じ姿勢を回転の数だけ並べてある
  [StickPose.PIVOT]: [StickPose.PIVOT, StickPose.PIVOT, StickPose.PIVOT],

  /*
    つなぎの姿勢。技として選ばれることは無いが、鍵を欠かさないために1コマずつ持たせる
  */
  [StickPose.RUN_UP]: [StickPose.RUN_UP],
  [StickPose.TAKEOFF]: [StickPose.TAKEOFF],
  [StickPose.LANDING]: [StickPose.LANDING],
  [StickPose.LUNGE]: [StickPose.LUNGE],
  [StickPose.ARCH_STAND]: [StickPose.ARCH_STAND],
  [StickPose.CROUCH]: [StickPose.CROUCH],
  [StickPose.PIKE_STAND]: [StickPose.PIKE_STAND],
  [StickPose.SALTO_OPEN]: [StickPose.SALTO_OPEN],
}

/**
 * 技の名前から、コマの並びを直に決める決まり。
 *
 * @remarks
 * ほとんどの技は `poseOf` が選んだ姿勢から `STICK_SEQUENCES` を引けば足りる。
 * ただし「後転倒立」「伸腕屈身力倒立」のように、**終わりの姿勢は同じでも入り方が違う**技は、
 * 姿勢だけでは流れが決まらない。そういう技だけ、ここで並びをそのまま書く
 */
interface SequenceRule {
  /** 当てはまったときのコマの並び */
  readonly frames: readonly StickPose[]
  /** 語の組。1つの組の語が**すべて**技名に入っていれば当てはまる */
  readonly patterns: readonly (readonly string[])[]
}

/**
 * 技の名前からコマの並びを選ぶ決まり。**上から順に見て、最初に当てはまったものを使う**。
 *
 * @remarks
 * 冊子の枠をそのまま写してある。どれも終わりが倒立や支持臥で、
 * `poseOf` だけでは入り方（前へ跳ぶ・後へ転がる・反る・押し上げる）が分からないもの
 */
const SEQUENCE_RULES: readonly SequenceRule[] = [
  // 前とび倒立（53ページ 3）。沈む → 前へ跳んで手をつく → 倒立
  {
    frames: [StickPose.STAND, StickPose.TAKEOFF, StickPose.LUNGE, StickPose.HANDSTAND],
    patterns: [['前とび倒立'], ['前跳び倒立']],
  },
  // 後転倒立（54ページ 6）。しゃがむ → 後へ転がる → 押し上げて倒立
  {
    frames: [StickPose.STAND, StickPose.CROUCH, StickPose.BACKWARD_ROLL, StickPose.HANDSTAND],
    patterns: [['後転倒立']],
  },
  // 脚前挙支持から力倒立（54ページ 9）。支持 → 腰を上げる → 倒立
  {
    frames: [StickPose.L_SUPPORT, StickPose.PIKE_STAND, StickPose.HANDSTAND],
    patterns: [['前挙支持', '力倒立']],
  },
  // 伸腕屈身力倒立（54ページ 8）。立位前屈 → 腰を上げる → 倒立
  {
    frames: [StickPose.STAND, StickPose.PIKE_STAND, StickPose.HANDSTAND],
    patterns: [['力倒立']],
  },
  // 後方ブリッヂから倒立（54ページ 7）。立つ → 反る → ブリッヂ → 倒立
  {
    frames: [StickPose.STAND, StickPose.ARCH_STAND, StickPose.BRIDGE, StickPose.HANDSTAND],
    patterns: [
      ['ブリッヂ', '倒立'],
      ['ブリッジ', '倒立'],
    ],
  },
  // 後方倒立回転～倒立（74ページ 7）。反って手をつき、倒立で止める
  {
    frames: [StickPose.STAND, StickPose.ARCH_STAND, StickPose.BACK_HANDSPRING, StickPose.HANDSTAND],
    patterns: [
      ['倒立回転', 'から倒立'],
      ['倒立回転', '～倒立'],
    ],
  },
  // 後方倒立回転から正面水平立ち（75ページ 19）。転回して、そのままバランスへ移る
  {
    frames: [
      StickPose.STAND,
      StickPose.BACK_HANDSPRING,
      StickPose.HANDSTAND,
      StickPose.HORIZONTAL_BALANCE,
    ],
    patterns: [['倒立回転', '水平立ち']],
  },
  // 後方倒立回転から前後開脚座位（75ページ 20）。転回して、そのまま床へ下りる
  {
    frames: [StickPose.STAND, StickPose.BACK_HANDSPRING, StickPose.HANDSTAND, StickPose.SPLIT_SIT],
    patterns: [['倒立回転', '開脚座位']],
  },
  // 宙返り直接正面支持臥（56ページ 15）。前へ回って、そのまま伏せる
  {
    frames: [
      StickPose.TAKEOFF,
      StickPose.FRONT_SALTO,
      StickPose.SALTO_OPEN,
      StickPose.FRONT_SUPPORT,
    ],
    patterns: [['宙返り', '支持臥']],
  },
  // 後ろとび正面支持臥（56ページ 1）。反って後へ跳び、前へ落ちて伏せる
  {
    frames: [
      StickPose.STAND,
      StickPose.ARCH_STAND,
      StickPose.LAYOUT_SALTO,
      StickPose.FRONT_SUPPORT,
    ],
    patterns: [['支持臥']],
  },
]

/**
 * ターンを何コマで描くかを決める。
 *
 * @remarks
 * 冊子は片足軸ターンも倒立ターンも、**同じ姿勢を回転の数だけ並べて**回転量を表している
 * （74ページ 1〜6）。360度で3コマ、720度で4コマ、1080度以上で5コマ。
 * ターンの技でなければ 0 を返す
 *
 * @param techniqueName - 技の名前。冊子に印刷されているまま渡す
 * @returns 並べるコマの数。ターンの技でなければ 0
 */
const turnFrameCount = (techniqueName: string): number => {
  if (!techniqueName.includes('ターン')) return 0
  if (techniqueName.includes('1080')) return 5
  if (techniqueName.includes('720')) return 4
  return 3
}

/**
 * 同じ姿勢を並べたコマの並びを作る
 * @param pose - 並べる姿勢
 * @param count - 並べる数
 * @returns 同じ姿勢が count 個並んだコマの並び
 */
const repeatPose = (pose: StickPose, count: number): readonly StickPose[] =>
  Array.from({ length: count }, () => pose)

/**
 * 技の名前から、冊子と同じようにコマ送りで描くための姿勢の並びを選ぶ。
 *
 * @remarks
 * 上から順に、
 *
 * 1. 入り方まで名前に書いてある技は `SEQUENCE_RULES` で並びをそのまま決める
 * 2. ターンは、回転の数だけ同じ姿勢を並べる
 * 3. それ以外は `poseOf` で技の山場になる姿勢を選び、`STICK_SEQUENCES` から流れを引く
 *
 * と見る。返す並びには必ず `poseOf` の姿勢か、それに代わる山場の姿勢が入っている。
 * イラストに差し替えるときは、この並びの姿勢を鍵にして絵を引けばよい
 *
 * @param techniqueName - 技の名前。冊子に印刷されているまま渡す
 * @returns 左から右へ並べる姿勢。止めて見せる技は1つだけ
 */
export const sequenceOf = (techniqueName: string): readonly StickPose[] => {
  const ruled = SEQUENCE_RULES.find((rule) =>
    rule.patterns.some((pattern) => pattern.every((word) => techniqueName.includes(word))),
  )
  if (ruled) return ruled.frames

  const pose = poseOf(techniqueName)
  const turns = turnFrameCount(techniqueName)

  return turns > 0 ? repeatPose(pose, turns) : STICK_SEQUENCES[pose]
}
