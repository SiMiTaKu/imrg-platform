/**
 * 画面幅から PC 用・スマホ用のどちらのデザインを使うかを決める。500px より広ければ PC 用
 * @param screenWidth - スクリーンの幅 px
 * @returns 使うデザインを表すシンボル（designOfPC か designOfSP）
 */
export function getResponsiveDesign(screenWidth: number): ResponsiveDesign {
  if (screenWidth > 500) return designOfPC
  else return designOfSP
}

export const designOfPC = Symbol('pc design')
export const designOfSP = Symbol('sp design')

/**
 * PC 用・スマホ用のどちらのデザインかを表す型
 */
export type ResponsiveDesign = typeof designOfPC | typeof designOfSP
