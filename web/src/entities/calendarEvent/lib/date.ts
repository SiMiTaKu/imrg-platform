import type { SiteLocale } from '@shared/lib/i18n'
import type { CalendarEvent } from '../model'

/** 曜日の表記（日本語）。日曜始まり */
export const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土'] as const
/** 曜日の表記（英語）。日曜始まり */
export const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const
/** 月の表記（英語） */
const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

/** 1日のミリ秒 */
const DAY_MS = 24 * 60 * 60 * 1000

/** 年・月・日。年月しか分からない日付は day が無い */
interface DateParts {
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
  /** 0（日曜）〜6（土曜） */
  weekday: number
  /** 表示中の月の日か */
  inMonth: boolean
}

/** 一覧の日付欄に出す値。年月しか分からないイベントは month だけ */
export interface DateBadge {
  /** 月（1〜12） */
  month: number
  /** 日 */
  day?: number
  /** 曜日 0（日曜）〜6（土曜） */
  weekday?: number
}

/**
 * "2026-10-30" / "2027-03" を年・月・日に分ける
 * @param value - 日付
 * @returns 年・月・日
 */
const parseDate = (value: string): DateParts => {
  const [year, month, day] = value.split('-').map(Number)
  return day ? { year, month, day } : { year, month }
}

/**
 * 日付の曜日を返す
 * @param parts - 年・月・日
 * @returns 0（日曜）〜6（土曜）
 */
const weekdayOf = (parts: DateParts): number =>
  new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()

/**
 * 数字を2桁にそろえる（9 → "09"）
 * @param value - 数字
 * @returns 2桁の文字列
 */
const pad = (value: number): string => String(value).padStart(2, '0')

/**
 * 曜日の表記を返す
 * @param weekday - 0（日曜）〜6（土曜）
 * @param locale - 言語
 * @returns 日本語は「日」、英語は "Sun" の形
 */
export const weekdayName = (weekday: number, locale: SiteLocale): string =>
  locale === 'en' ? WEEKDAYS_EN[weekday] : WEEKDAYS_JA[weekday]

/**
 * 月の短い英語の表記を返す（10 → "Oct"）
 * @param month - 月（1〜12）
 * @returns 英語の月の先頭3文字
 */
export const shortMonthEnglish = (month: number): string => MONTHS_EN[month - 1].slice(0, 3)

/**
 * 閲覧者の端末の日付を "YYYY-MM-DD" にする
 * @param date - 日付
 * @returns "YYYY-MM-DD" の文字列（端末のタイムゾーンでの日付）
 */
export const toDateKey = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

/**
 * "2026-10-30" → "2026-10"
 * @param value - "YYYY-MM-DD" または "YYYY-MM" の日付
 * @returns 先頭7文字の "YYYY-MM"
 */
export const toMonthKey = (value: string): string => value.slice(0, 7)

/**
 * "2026-12" を delta か月ずらす
 * @param monthKey - 基準の月 "YYYY-MM"
 * @param delta - ずらす月数。負の数なら前の月へ
 * @returns ずらした月 "YYYY-MM"
 */
export const shiftMonth = (monthKey: string, delta: number): string => {
  const { year, month } = parseDate(monthKey)
  const date = new Date(Date.UTC(year, month - 1 + delta, 1))
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}`
}

/**
 * 月のカレンダーのマス目。日曜始まりの週ごとに、前後の月の日も含めて並べる
 * @param monthKey - 表示する月 "YYYY-MM"
 * @returns 週ごとに7マスずつ並べたマス目
 */
export const buildMonthGrid = (monthKey: string): DayCell[][] => {
  const { year, month } = parseDate(monthKey)
  const first = Date.UTC(year, month - 1, 1)
  const offset = new Date(first).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
  const weekCount = Math.ceil((offset + daysInMonth) / 7)

  return Array.from({ length: weekCount }, (_, week) =>
    Array.from({ length: 7 }, (__, weekday) => {
      const date = new Date(first + (week * 7 + weekday - offset) * DAY_MS)
      return {
        dateKey: `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`,
        day: date.getUTCDate(),
        weekday,
        inMonth: date.getUTCMonth() === month - 1,
      }
    }),
  )
}

/**
 * 一覧の日付欄に出す月・日・曜日
 * @param value - 日付 "YYYY-MM-DD" または "YYYY-MM"
 * @returns 月・日・曜日（年月だけなら月のみ）
 */
export const toDateBadge = (value: string): DateBadge => {
  const parts = parseDate(value)
  if (parts.day === undefined) return { month: parts.month }
  return { month: parts.month, day: parts.day, weekday: weekdayOf(parts) }
}

/**
 * "2026-10" → "2026年10月"
 * @param monthKey - 月 "YYYY-MM"
 * @returns "2026年10月" の形の文字列
 */
export const formatMonthJapanese = (monthKey: string): string => {
  const { year, month } = parseDate(monthKey)
  return `${year}年${month}月`
}

/**
 * "2026-10" → "October 2026"
 * @param monthKey - 月 "YYYY-MM"
 * @returns "October 2026" の形の文字列
 */
export const formatMonthEnglish = (monthKey: string): string => {
  const { year, month } = parseDate(monthKey)
  return `${MONTHS_EN[month - 1]} ${year}`
}

/**
 * 月を言語に応じた表記にする
 * @param monthKey - 月 "YYYY-MM"
 * @param locale - 言語
 * @returns 日本語は "2026年10月"、英語は "October 2026"
 */
export const formatMonth = (monthKey: string, locale: SiteLocale): string =>
  locale === 'en' ? formatMonthEnglish(monthKey) : formatMonthJapanese(monthKey)

/**
 * "2026-09-16" → "2026年9月16日"
 * @param value - 日付 "YYYY-MM-DD"
 * @returns "2026年9月16日" の形の文字列
 */
export const formatDayJapanese = (value: string): string => {
  const { year, month, day } = parseDate(value)
  return `${year}年${month}月${day}日`
}

/**
 * "2026-09-16" → "September 16, 2026"
 * @param value - 日付 "YYYY-MM-DD"
 * @returns "September 16, 2026" の形の文字列
 */
export const formatDayEnglish = (value: string): string => {
  const { year, month, day } = parseDate(value)
  return `${MONTHS_EN[month - 1]} ${day}, ${year}`
}

/**
 * 日付を言語に応じた表記にする
 * @param value - 日付 "YYYY-MM-DD"
 * @param locale - 言語
 * @returns 日本語は "2026年9月16日"、英語は "September 16, 2026"
 */
export const formatDay = (value: string, locale: SiteLocale): string =>
  locale === 'en' ? formatDayEnglish(value) : formatDayJapanese(value)

/**
 * 例: "2026年10月30日（金）〜11月1日（日）"。年月だけなら "2027年3月"
 * @param event - 表示するイベント
 * @returns 日本語の開催期間。終了年が開始年と同じなら終了側の年は省く
 */
export const formatDateRangeJapanese = (event: CalendarEvent): string => {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthJapanese(event.startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${WEEKDAYS_JA[weekdayOf(start)]}）`
  if (!event.endDate || event.endDate === event.startDate) return startText

  const end = parseDate(event.endDate)
  const endYear = end.year === start.year ? '' : `${end.year}年`
  if (end.day === undefined) return `${startText}〜${endYear}${end.month}月`
  return `${startText}〜${endYear}${end.month}月${end.day}日（${WEEKDAYS_JA[weekdayOf(end)]}）`
}

/**
 * "Fri, Oct 30" の形にする
 * @param parts - 年・月・日
 * @returns 曜日・月・日の英語の表記
 */
const dayTextEnglish = (parts: DateParts): string =>
  `${WEEKDAYS_EN[weekdayOf(parts)]}, ${shortMonthEnglish(parts.month)} ${parts.day}`

/**
 * 例: "Fri, Oct 30 – Sun, Nov 1, 2026"。年月だけなら "March 2027"
 * @param event - 表示するイベント
 * @returns 英語の開催期間。終了年が開始年と同じなら開始側の年は省く
 */
export const formatDateRangeEnglish = (event: CalendarEvent): string => {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthEnglish(event.startDate)

  if (!event.endDate || event.endDate === event.startDate)
    return `${dayTextEnglish(start)}, ${start.year}`

  const end = parseDate(event.endDate)
  if (end.day === undefined)
    return `${dayTextEnglish(start)}, ${start.year} – ${formatMonthEnglish(event.endDate)}`
  if (end.year === start.year)
    return `${dayTextEnglish(start)} – ${dayTextEnglish(end)}, ${end.year}`
  return `${dayTextEnglish(start)}, ${start.year} – ${dayTextEnglish(end)}, ${end.year}`
}

/**
 * 開催期間を言語に応じた表記にする
 * @param event - 表示するイベント
 * @param locale - 言語
 * @returns 日本語は `formatDateRangeJapanese`、英語は `formatDateRangeEnglish` の形
 */
export const formatDateRange = (event: CalendarEvent, locale: SiteLocale): string =>
  locale === 'en' ? formatDateRangeEnglish(event) : formatDateRangeJapanese(event)
