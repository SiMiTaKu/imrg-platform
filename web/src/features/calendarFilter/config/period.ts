import { m } from '$lib/paraglide/messages'
import type { EventPeriod } from '../model'

/** リスト表示で1ページに出す件数 */
export const PER_PAGE = 20

/** 時期の切り替えボタン1つ */
export interface PeriodOption {
  /** 時期 */
  key: EventPeriod
  /** 表示名の文言 */
  label: typeof m.calendar_period_upcoming
}

/** 時期の切り替えボタン。並び順どおりに出す */
export const PERIODS: readonly PeriodOption[] = [
  { key: 'upcoming', label: m.calendar_period_upcoming },
  { key: 'past', label: m.calendar_period_past },
  { key: 'all', label: m.calendar_period_all },
]
