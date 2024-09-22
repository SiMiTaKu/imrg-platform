export namespace Image {
  const TYPE = {
    MAIN: "main",
    SUB: "sub",
  } as const

  export type Type = (typeof TYPE)[keyof typeof TYPE];
  export const Types = Object.values(TYPE)
}
