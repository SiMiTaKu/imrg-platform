import { ThemeColor } from '@imrg-platform/design-system'
import type { JudgeThemeColorKey } from '../model/apparatus'

/**
 * 内訳のグラフの線の色（テーマの色ごと）。
 *
 * @remarks
 * 色の値はデザインシステム（`ThemeColor`）が持つ
 */
export const CHART_BORDER_COLORS = {
  gray: ThemeColor.GRAY,
  blue: ThemeColor.BLUE,
  red: ThemeColor.RED,
  yellow: ThemeColor.YELLOW,
  green: ThemeColor.GREEN,
} as const satisfies Record<JudgeThemeColorKey, string>
