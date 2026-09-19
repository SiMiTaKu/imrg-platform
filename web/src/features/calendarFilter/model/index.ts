import type { EventCategorySlug } from '@entities/calendarEvent'
import type { CalendarView as CALENDAR_VIEW, EventPeriod as EVENT_PERIOD } from '../config/period'

/** いつのイベントを出すかのどれか1つ */
export type EventPeriod = (typeof EVENT_PERIOD)[keyof typeof EVENT_PERIOD]

/** いつのイベントを出すかの key（`upcoming` / `past` / `all`） */
export type EventPeriodKey = EventPeriod['key']

/** イベント一覧の絞り込み条件 */
export interface EventFilter {
  /** 空のときはすべての種類 */
  categories: readonly EventCategorySlug[]
  /** いつのイベントを出すか */
  period: EventPeriodKey
  /** 今日の日付 "YYYY-MM-DD"。終わったかどうかの判定に使う */
  today: string
  /** 空白区切りのキーワード。空のときは絞り込まない */
  keyword: string
}

/** 表示の切り替えのどれか1つ */
export type CalendarView = (typeof CALENDAR_VIEW)[keyof typeof CALENDAR_VIEW]

/** 表示の切り替えの key（`calendar` / `list`） */
export type CalendarViewKey = CalendarView['key']

/** 画面の状態。URL のクエリの形で保存して、詳細ページから戻っても同じ表示に戻れるようにする */
export interface CalendarState {
  /** 表示の切り替え */
  view: CalendarViewKey
  /** キーワード */
  keyword: string
  /** 選んでいる種類 */
  categories: EventCategorySlug[]
  /** 時期（リスト表示のときだけ使う） */
  period: EventPeriodKey
  /** ページ番号（リスト表示のときだけ使う。1始まり） */
  page: number
  /** カレンダーに出す月 "YYYY-MM" */
  month: string
  /** カレンダーで選んだ日 "YYYY-MM-DD"。選んでいなければ null */
  day: string | null
}

/** 開始月が同じイベントのかたまり */
export interface MonthGroup<T> {
  /** 開始月 "YYYY-MM" */
  monthKey: string
  /** その月のイベント */
  events: T[]
}

/** ページ分けした結果 */
export interface PageSlice<T> {
  /** そのページの項目 */
  items: T[]
  /** 範囲内に寄せた現在のページ番号（1始まり） */
  page: number
  /** 総ページ数 */
  totalPages: number
}
