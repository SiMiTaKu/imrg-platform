export namespace VideoInformation {
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
}
