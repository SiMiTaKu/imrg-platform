import { m } from '$lib/paraglide/messages'

/** リスト表示で1ページに出す件数 */
export const PER_PAGE = 20

/**
 * いつのイベントを出すか。
 *
 * @remarks
 * 並びは切り替えボタンの並び。`key` は URL のクエリにも使う
 */
export const EventPeriod = {
  /** まだ終わっていない */
  UPCOMING: { key: 'upcoming', label: m.calendar_period_upcoming },
  /** 終わった（新しい順） */
  PAST: { key: 'past', label: m.calendar_period_past },
  /** すべて */
  ALL: { key: 'all', label: m.calendar_period_all },
} as const

/** 時期を切り替えボタンの並び順に並べたもの */
export const EVENT_PERIODS = Object.values(EventPeriod)

/**
 * 表示の切り替え（カレンダー表示・リスト表示）。
 *
 * @remarks
 * `key` は URL のクエリにも使う
 */
export const CalendarView = {
  /** 月のカレンダー */
  CALENDAR: { key: 'calendar' },
  /** 一覧 */
  LIST: { key: 'list' },
} as const
