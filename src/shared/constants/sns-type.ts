const SNS_TYPE = {
  TWITTER: {
    code: 1,
    name: "X(旧Twitter)",
  },
  INSTAGRAM: {
    code: 2,
    name: "Instagram",
  },
  FACEBOOK: {
    code: 3,
    name: "Facebook",
  },
  TIKTOK: {
    code: 4,
    name: "TikTok",
  },
  YOUTUBE: {
    code: 5,
    name: "YouTube",
  },
} as const

export type SnsType = (typeof SNS_TYPE)[keyof typeof SNS_TYPE];
export const SnsTypes = Object.values(SNS_TYPE)
export const SnsTypeCodes = SnsTypes.map((snsType) => snsType.code)
