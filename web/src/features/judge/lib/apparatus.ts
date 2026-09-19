import type { JudgeApparatus } from '../model/apparatus'

/**
 * 手具のコードから手具を探す
 * @param apparatuses - 手具の一覧
 * @param code - 手具のコード（選択肢の value の文字列でもよい）
 * @returns 該当する手具。無ければ undefined
 */
export const findApparatus = (
  apparatuses: readonly JudgeApparatus[],
  code: number | string,
): JudgeApparatus | undefined => {
  const intCode = typeof code === 'string' ? Number.parseInt(code, 10) : code
  return apparatuses.find((apparatus) => apparatus.code === intCode)
}
