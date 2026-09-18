import type { IconColor } from './props'

/**
 * アイコンの色。
 *
 * @remarks
 * 値はこのデザインシステムの色（`tokens/colors.ts` の `AccentColor`・`ThemeColor`）とそろえる。
 * 文字と同じ色にしたいときは `gray` を使う
 */
const ICON_COLORS: Record<IconColor, string> = {
  primary: '#1986ff',
  secondary: '#0065a4',
  gray: '#333',
  error: '#d30000',
  white: '#fff',
  success: '#16a06b',
  warning: '#d98e04',
}

/**
 * 色の名前から実際の色を取る
 * @param color - 色の名前。省くと `primary`
 * @returns CSS で使う色
 */
export const getIconColor = (color: IconColor = 'primary') => ICON_COLORS[color]
