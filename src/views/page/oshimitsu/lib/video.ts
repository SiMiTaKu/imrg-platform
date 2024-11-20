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
