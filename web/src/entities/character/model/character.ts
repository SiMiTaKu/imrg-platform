import { AccentColor } from '@imrg-platform/design-system'

/** 団体競技と同じ5人。得意分野で描き分ける */
export const Character = {
  SORA: 'sora',
  KAZUTO: 'kazuto',
  AYATO: 'ayato',
  OSAMU: 'osamu',
  YAWANA: 'yawana',
} as const

/** 5人のうちの誰か */
export type Character = (typeof Character)[keyof typeof Character]

/** 髪の形。見た目の描き分けに使う */
export const HairStyle = {
  /** short: 跳ねた短髪 */
  SPIKY: 'spiky',
  /** buzz: 刈り上げ */
  BUZZ: 'buzz',
  /** wave: 流した前髪 */
  WAVE: 'wave',
  /** neat: 整えた七三 */
  NEAT: 'neat',
  /** long: 結んだ長髪 */
  TIED: 'tied',
} as const

/** 髪の形のどれか1つ */
export type HairStyle = (typeof HairStyle)[keyof typeof HairStyle]

/** 見せ場の姿勢。キャラクターの得意分野に合わせる */
export const Pose = {
  /** 立つ */
  STAND: 'stand',
  /** 倒立 */
  HANDSTAND: 'handstand',
  /** 跳ぶ */
  LEAP: 'leap',
  /** 開脚して座る */
  SPLIT: 'split',
  /** 手具を掲げる */
  HOLD: 'hold',
  /** 指をさして示す */
  POINT: 'point',
} as const

/** 姿勢のどれか1つ */
export type Pose = (typeof Pose)[keyof typeof Pose]

/** 1人分の設定 */
export type CharacterProfile = {
  readonly id: Character
  /** 表示する名前 */
  readonly name: string
  /** ふりがな */
  readonly reading: string
  /** 得意分野。ひと言で */
  readonly specialty: string
  /** 身長（cm）。5人の描き分けに使う */
  readonly heightCentimeter: number
  /** この人を表す色 */
  readonly color: AccentColor
  readonly hair: HairStyle
  /** 既定の姿勢 */
  readonly pose: Pose
  /** どんな役回りか */
  readonly role: string
}

/**
 * 5人の設定。
 *
 * @remarks
 * 絵はまだ描き上がっていないため、`CharacterFigure` が身長・髪・色・姿勢から形を組み立てる。
 * 絵ができたら、この設定はそのままに `CharacterFigure` の中身だけを差し替える
 */
export const CHARACTERS: readonly CharacterProfile[] = [
  {
    id: Character.SORA,
    name: '高梨 翔宙',
    reading: 'たかなし そら',
    specialty: 'タンブリング',
    heightCentimeter: 165,
    color: AccentColor.BLUE,
    hair: HairStyle.SPIKY,
    pose: Pose.LEAP,
    role: '跳ぶこと、回ることの担当。小柄だが体幹が一番強い',
  },
  {
    id: Character.KAZUTO,
    name: '元木 一徒',
    reading: 'もとき かずと',
    specialty: '徒手・基本',
    heightCentimeter: 180,
    color: AccentColor.AMBER,
    hair: HairStyle.BUZZ,
    pose: Pose.STAND,
    role: '組の土台。基本の動きは誰よりも正確',
  },
  {
    id: Character.AYATO,
    name: '華魅 彩人',
    reading: 'はなみ あやと',
    specialty: '表現・構成',
    heightCentimeter: 172,
    color: AccentColor.PINK,
    hair: HairStyle.WAVE,
    pose: Pose.HOLD,
    role: '構成を作るアイデアマン。一つ一つの動きに花がある',
  },
  {
    id: Character.OSAMU,
    name: '則武 理',
    reading: 'のりたけ おさむ',
    specialty: 'ルール・採点',
    heightCentimeter: 168,
    color: AccentColor.TEAL,
    hair: HairStyle.NEAT,
    pose: Pose.POINT,
    role: '規則を熟知している。このサイトのルール解説の案内役',
  },
  {
    id: Character.YAWANA,
    name: '青柳 柔凪',
    reading: 'あおやぎ やわな',
    specialty: '柔軟',
    heightCentimeter: 175,
    color: AccentColor.GREEN,
    hair: HairStyle.TIED,
    pose: Pose.SPLIT,
    role: '体の柔らかさは群を抜く。ケアにも詳しい',
  },
]

/**
 * id から1人を引く
 * @param id - 探す人の id
 * @returns 見つかった1人。見つからないときは先頭の人
 */
export const findCharacter = (id: Character): CharacterProfile =>
  CHARACTERS.find((character) => character.id === id) ?? CHARACTERS[0]
