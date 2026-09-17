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

/** 種類ごとの色。カレンダーの印と一覧の左の線に使う。表示名は文言ファイル（`calendar_category_*`） */
export const CATEGORY_COLORS: Record<EventCategory, string> = {
  national: '#1986ff',
  regional: '#16a06b',
  prefectural: '#8a5cd6',
  performance: '#e0567f',
  workshop: '#d98e04',
  international: '#0e9aa7',
}
