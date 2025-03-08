import type { PlayerResource, TeamResource } from "./"

/** 動画タイプを表すEnum */
export const ContentType = {
  INDIVIDUAL: {
    slug: "individual",
    label: "個人",
  },
  GROUP: {
    slug: "group",
    label: "団体",
  },
} as const

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const findContentType = (slug: string) => {
  return Object.values(ContentType).find(
    (contentType) => contentType.slug === slug
  )
}

export const Apparatus = {
  STICK: {
    slug: "stick",
    label: "スティック",
  },
  RING: {
    slug: "ring",
    label: "リング",
  },
  ROPE: {
    slug: "rope",
    label: "ロープ",
  },
  CLUB: {
    slug: "club",
    label: "クラブ",
  },
}

export type Apparatus = (typeof Apparatus)[keyof typeof Apparatus];

export const findApparatus = (slug: string): Apparatus | undefined => {
  return Object.values(Apparatus).find((apparatus) => apparatus.slug === slug)
}

/** 動画のベースクラス */
interface BaseVideo {
  src: string;
  filmedAt: Date;
}

export interface IndividualVideoResource extends BaseVideo {
  player: PlayerResource;
  contentType: typeof ContentType.INDIVIDUAL;
  apparatus: Apparatus;
}

export interface GroupVideoResource extends BaseVideo {
  team: TeamResource;
  players: PlayerResource[];
  contentType: typeof ContentType.GROUP;
}

/** 動画の型 */
export type VideoResource = IndividualVideoResource | GroupVideoResource;
