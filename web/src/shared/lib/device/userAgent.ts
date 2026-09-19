/**
 * スマホの User-Agent。
 *
 * @remarks
 * タブレット（iPad・Android のタブレット）は画面が広いので PC 用の見た目にする。
 * iPhone・iPod・Android のスマホ・Windows Phone だけをスマホ扱いにする
 */
const MOBILE_USER_AGENT = /iPhone|iPod|Android.*Mobile|Windows Phone/

/**
 * User-Agent からスマホかどうかを判定する
 * @param userAgent - User-Agent の文字列
 * @returns スマホなら true
 */
export const isMobileUserAgent = (userAgent: string): boolean => MOBILE_USER_AGENT.test(userAgent)
