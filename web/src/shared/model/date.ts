import type { Month as MONTH, Weekday as WEEKDAY } from '../config/date'

/** 曜日のどれか1つ */
export type Weekday = (typeof WEEKDAY)[keyof typeof WEEKDAY]

/** 月のどれか1つ */
export type Month = (typeof MONTH)[keyof typeof MONTH]

/** 年・月・日。年月しか分からない日付は day が無い */
export interface DateParts {
  /** 年 */
  year: number
  /** 月（1〜12） */
  month: number
  /** 日 */
  day?: number
}

/** 月のカレンダーのマス1つ */
export interface DayCell {
  /** 日付 "YYYY-MM-DD" */
  dateKey: string
  /** 日 */
  day: number
  /** 曜日 */
  weekday: Weekday
  /** 表示中の月の日か */
  inMonth: boolean
}

/** 一覧の日付欄に出す値。年月しか分からないイベントは month だけ */
export interface DateBadge {
  /** 月（1〜12） */
  month: number
  /** 日 */
  day?: number
  /** 曜日 */
  weekday?: Weekday
}
