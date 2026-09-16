/** 手具のEnum **/
const APPARATUS = {
  /** スティック */
  STICK: {
    code: 1,
    name: 'スティック',
    imageColor: 'blue',
  },
  /** リング */
  RING: {
    code: 2,
    name: 'リング',
    imageColor: 'red',
  },
  /** ロープ */
  ROPE: {
    code: 3,
    name: 'ロープ',
    imageColor: 'yellow',
  },
  /** クラブ　*/
  CLUB: {
    code: 4,
    name: 'クラブ',
    imageColor: 'green',
  },
} as const

export type Apparatus = (typeof APPARATUS)[keyof typeof APPARATUS]
export const Apparatuses = Object.values(APPARATUS)

export const Apparatus = {
  fromCode(code: number | string): Apparatus | undefined {
    const intCode = typeof code === 'string' ? parseInt(code) : code
    return Apparatuses.find((apparatus) => apparatus.code === intCode)
  },

  /**
   * 2つで一つの手具かを判別するメソッド
   * @param apparatus
   */
  isDoubleApparatus(apparatus: Apparatus | undefined): boolean {
    if (apparatus === APPARATUS.RING || apparatus === APPARATUS.CLUB) return true
    return false
  },
}
