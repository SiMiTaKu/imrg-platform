/**
 * 描いてある絵の鍵。
 *
 * @remarks
 * 本文の絵のかたまりは、ここに鍵があるものだけ画面に出す。
 * まだ描いていない絵を「準備中」と出すと、読み手の信頼を落とすため。
 *
 * 絵を足したら、`ui/GuideFigure.svelte` とここの両方に足す
 */
export const DRAWN_FIGURE_KEYS: readonly string[] = ['formation-v-to-inverted-v']

/**
 * その絵を描いてあるか
 * @param figureKey - 絵の鍵
 * @returns 描いてあれば true
 */
export const hasGuideFigure = (figureKey: string): boolean => DRAWN_FIGURE_KEYS.includes(figureKey)
