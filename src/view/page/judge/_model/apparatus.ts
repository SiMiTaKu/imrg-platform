/** 手具のEnum **/
const APPARATUS = {
  /** スティック */
  STICK: {
    code: 1,
    name: "スティック",
  },
  /** リング */
  RING: {
    code: 2,
    name: "リング",
  },
  /** ロープ */
  ROPE: {
    code: 3,
    name: "ロープ",
  },
  /** クラブ　*/
  CLUB: {
    code: 4,
    name: "クラブ",
  },
} as const

export type Apparatus = (typeof APPARATUS)[keyof typeof APPARATUS];
export const Apparatuses = Object.values(APPARATUS)
