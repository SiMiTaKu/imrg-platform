/**
 * 画面幅から PC 用・スマホ用のどちらのデザインを使うかを決める。500px より広ければ PC 用
 * @param screenWidth - スクリーンの幅 px
 * @returns 使うデザインを表すシンボル（designOfDesktop か designOfMobile）
 */
export function getResponsiveDesign(screenWidth: number): ResponsiveDesign {
  if (screenWidth > 500) return designOfDesktop
  else return designOfMobile
}

export const designOfDesktop = Symbol('desktop design')
export const designOfMobile = Symbol('mobile design')

/**
 * PC 用・スマホ用のどちらのデザインかを表す型
 */
export type ResponsiveDesign = typeof designOfDesktop | typeof designOfMobile
