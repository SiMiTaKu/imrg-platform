import type { ButtonVariant } from '@imrg-platform/design-system'
import { JudgeThemeColor } from '../config/themeColor'
import type { JudgeThemeColorKey } from '../model/apparatus'

/** 手具のイメージカラーごとの、ボタンの見た目 */
const VARIANTS = {
  [JudgeThemeColor.GRAY]: 'theme-gray',
  [JudgeThemeColor.BLUE]: 'theme-blue',
  [JudgeThemeColor.RED]: 'theme-red',
  [JudgeThemeColor.YELLOW]: 'theme-yellow',
  [JudgeThemeColor.GREEN]: 'theme-green',
} as const satisfies Record<JudgeThemeColorKey, ButtonVariant>

/**
 * 手具のイメージカラーから、ボタンの見た目を引く
 * @param color - 手具のイメージカラー
 * @returns ボタンの見た目
 */
export const themeButtonVariant = (color: JudgeThemeColorKey): ButtonVariant => VARIANTS[color]
