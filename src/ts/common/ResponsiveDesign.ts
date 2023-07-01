/**
 * @param screenWidth スクリーンの幅 px
 * @return ResponsiveDesign
 */
export function getResponsiveDesign(screenWidth: number): ResponsiveDesign {
  if(screenWidth >= 400) return designOfPC; else return designOfSP;
}

export const designOfPC = Symbol();
export const designOfSP = Symbol();

export type ResponsiveDesign = typeof designOfPC | typeof designOfSP;