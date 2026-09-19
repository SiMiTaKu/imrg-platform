import { AccentColor, ThemeColor } from '../../tokens/colors'
import type { IconColor } from './props'

/**
 * アイコンの色。
 *
 * @remarks
 * 値はこのデザインシステムの色（`AccentColor`・`ThemeColor`）から選ぶ。
 * 文字と同じ色にしたいときは `gray` を使う
 */
const ICON_COLORS: Record<IconColor, string> = {
  primary: AccentColor.BLUE,
  secondary: ThemeColor.BLUE,
  gray: '#333',
  error: ThemeColor.RED,
  white: '#fff',
  success: AccentColor.GREEN,
  warning: AccentColor.AMBER,
}

/**
 * 色の名前から実際の色を取る
 * @param color - 色の名前。省くと `primary`
 * @returns CSS で使う色
 */
export const getIconColor = (color: IconColor = 'primary') => ICON_COLORS[color]
