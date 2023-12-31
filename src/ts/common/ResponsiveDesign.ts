/**
 * @param screenWidth スクリーンの幅 px
 * @return ResponsiveDesign
 */
export function getResponsiveDesign(screenWidth: number): ResponsiveDesign {
  if (screenWidth >= 400) return designOfPC;
  else return designOfSP;
}

export const designOfPC = Symbol("pc design");
export const designOfSP = Symbol("sp design");

export type ResponsiveDesign = typeof designOfPC | typeof designOfSP;
