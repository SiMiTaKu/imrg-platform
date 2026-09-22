import { m } from '$lib/paraglide/messages'
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

/**
 * 1人分の設定。
 *
 * @remarks
 * 文言は関数で持つ。読み込んだ瞬間に評価すると、言語が決まる前の文言で固まってしまう
 */
export type CharacterProfile = {
  readonly id: Character
  /**
   * 表示する名前。表示中の言語で返す
   * @returns 名前
   */
  readonly name: () => string
  /**
   * 名前の読み。日本語はふりがな、ほかの言語は日本語の表記
   * @returns 読み
   */
  readonly reading: () => string
  /**
   * 得意分野。ひと言で
   * @returns 得意分野
   */
  readonly specialty: () => string
  /** 身長（cm）。5人の描き分けに使う */
  readonly heightCentimeter: number
  /** この人を表す色 */
  readonly color: AccentColor
  readonly hair: HairStyle
  /** 既定の姿勢 */
  readonly pose: Pose
  /**
   * どんな役回りか
   * @returns 役回り
   */
  readonly role: () => string
}

/**
 * 5人の設定。
 *
 * @remarks
 * 絵はまだ描き上がっていないため、`CharacterFigure` が身長・髪・色・姿勢から形を組み立てる。
 * 絵ができたら、この設定はそのままに `CharacterFigure` の中身だけを差し替える
 */
export const CHARACTERS: Readonly<Record<Character, CharacterProfile>> = {
  [Character.SORA]: {
    id: Character.SORA,
    name: m.character_sora_name,
    reading: m.character_sora_reading,
    specialty: m.character_sora_specialty,
    heightCentimeter: 165,
    color: AccentColor.RED,
    hair: HairStyle.SPIKY,
    pose: Pose.LEAP,
    role: m.character_sora_role,
  },
  [Character.KAZUTO]: {
    id: Character.KAZUTO,
    name: m.character_kazuto_name,
    reading: m.character_kazuto_reading,
    specialty: m.character_kazuto_specialty,
    heightCentimeter: 180,
    color: AccentColor.AMBER,
    hair: HairStyle.BUZZ,
    pose: Pose.STAND,
    role: m.character_kazuto_role,
  },
  [Character.AYATO]: {
    id: Character.AYATO,
    name: m.character_ayato_name,
    reading: m.character_ayato_reading,
    specialty: m.character_ayato_specialty,
    heightCentimeter: 172,
    color: AccentColor.PINK,
    hair: HairStyle.WAVE,
    pose: Pose.HOLD,
    role: m.character_ayato_role,
  },
  [Character.OSAMU]: {
    id: Character.OSAMU,
    name: m.character_osamu_name,
    reading: m.character_osamu_reading,
    specialty: m.character_osamu_specialty,
    heightCentimeter: 168,
    color: AccentColor.GREEN,
    hair: HairStyle.NEAT,
    pose: Pose.POINT,
    role: m.character_osamu_role,
  },
  [Character.YAWANA]: {
    id: Character.YAWANA,
    name: m.character_yawana_name,
    reading: m.character_yawana_reading,
    specialty: m.character_yawana_specialty,
    heightCentimeter: 175,
    color: AccentColor.BLUE,
    hair: HairStyle.TIED,
    pose: Pose.SPLIT,
    role: m.character_yawana_role,
  },
}

/**
 * 5人を並び順のまま取り出したもの。
 *
 * @remarks
 * 一覧として並べる場所（トップページの紹介など）で使う。
 * 1人だけ要るときは `CHARACTERS[Character.SORA]` のように id で引く
 */
export const CHARACTER_LIST: readonly CharacterProfile[] = Object.values(CHARACTERS)
