import type { ParamMatcher } from "@sveltejs/kit"

/** ページのカスタムマッチャ(intのみ) */
export const match: ParamMatcher = (param) => {
  return /^\d+$/.test(param)
}
