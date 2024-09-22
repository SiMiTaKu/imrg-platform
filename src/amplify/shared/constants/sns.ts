export namespace Sns {
  const TYPE = {
    TWITTER: {
      slug: "twitter",
      name: "X(旧Twitter)",
    },
    INSTAGRAM: {
      slug: "instagram",
      name: "Instagram",
    },
    FACEBOOK: {
      slug: "facebook",
      name: "Facebook",
    },
    TIKTOK: {
      slug: "tiktok",
      name: "TikTok",
    },
    YOUTUBE: {
      slug: "youtube",
      name: "YouTube",
    },
  } as const

  export type Type = (typeof TYPE)[keyof typeof TYPE];
  export const Types = Object.values(TYPE)
}
