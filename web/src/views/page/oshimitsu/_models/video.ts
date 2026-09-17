import type { PlayerResource, TeamResource } from './'

/** 動画タイプを表すEnum */
export const ContentType = {
  INDIVIDUAL: {
    slug: 'individual',
    label: '個人',
  },
  GROUP: {
    slug: 'group',
    label: '団体',
  },
} as const

/**
 * 動画タイプ（個人・団体）のどれか1つ
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType]

/**
 * slug から動画タイプを探す
 * @param slug - 動画タイプの slug（"individual" / "group"）
 * @returns 見つかった動画タイプ。無ければ undefined
 */
export const findContentType = (slug: string) => {
  return Object.values(ContentType).find((contentType) => contentType.slug === slug)
}

export const Apparatus = {
  STICK: {
    slug: 'stick',
    label: 'スティック',
  },
  RING: {
    slug: 'ring',
    label: 'リング',
  },
  ROPE: {
    slug: 'rope',
    label: 'ロープ',
  },
  CLUB: {
    slug: 'club',
    label: 'クラブ',
  },
}

/**
 * 手具（スティック・リング・ロープ・クラブ）のどれか1つ
 */
export type Apparatus = (typeof Apparatus)[keyof typeof Apparatus]

/**
 * slug から手具を探す
 * @param slug - 手具の slug（"stick" / "ring" / "rope" / "club"）
 * @returns 見つかった手具。無ければ undefined
 */
export const findApparatus = (slug: string): Apparatus | undefined => {
  return Object.values(Apparatus).find((apparatus) => apparatus.slug === slug)
}

/** 動画のベースクラス */
interface BaseVideo {
  embedUrl: string
  filmedAt: Date
}

/**
 * 個人の動画。選手と手具を持つ
 */
export interface IndividualVideoResource extends BaseVideo {
  player: PlayerResource
  contentType: typeof ContentType.INDIVIDUAL
  apparatus: Apparatus
}

/**
 * 団体の動画。チームと出場選手を持つ
 */
export interface GroupVideoResource extends BaseVideo {
  team: TeamResource
  players: PlayerResource[]
  contentType: typeof ContentType.GROUP
}

/** 動画の型 */
export type VideoResource = IndividualVideoResource | GroupVideoResource
