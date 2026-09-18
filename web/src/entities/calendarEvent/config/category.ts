import { AccentColor } from '@imrg-platform/design-system'
import type { EventCategory } from '../model'

/** 絞り込みボタンを並べる順 */
export const CATEGORY_ORDER: readonly EventCategory[] = [
  'national',
  'regional',
  'prefectural',
  'performance',
  'workshop',
  'international',
]

/**
 * 種類ごとの色。カレンダーの印と一覧の左の線に使う。表示名は文言ファイル（`calendar_category_*`）
 *
 * @remarks
 * 色の値はデザインシステム（`AccentColor`）が持つ。ここでは「どの種類にどの色を当てるか」だけを決める
 */
export const CATEGORY_COLORS: Record<EventCategory, AccentColor> = {
  national: AccentColor.BLUE,
  regional: AccentColor.GREEN,
  prefectural: AccentColor.PURPLE,
  performance: AccentColor.PINK,
  workshop: AccentColor.AMBER,
  international: AccentColor.TEAL,
}
