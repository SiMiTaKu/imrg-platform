const SNS_TYPE = {
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

export type SnsType = (typeof SNS_TYPE)[keyof typeof SNS_TYPE];
export const SnsTypes = Object.values(SNS_TYPE)
