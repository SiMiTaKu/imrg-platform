import { MONTHS, WEEKDAYS } from '@shared/config/date'
import type { SiteLocale } from '@shared/lib/i18n'
import type { DateBadge, DateParts, DayCell, Month, Weekday } from '@shared/model'

/** 1日のミリ秒 */
const DAY_MS = 24 * 60 * 60 * 1000

/**
 * "2026-10-30" / "2027-03" を年・月・日に分ける
 * @param value - 日付
 * @returns 年・月・日
 */
export const parseDate = (value: string): DateParts => {
  const [year, month, day] = value.split('-').map(Number)
  return day ? { year, month, day } : { year, month }
}

/**
 * 0（日曜）〜6（土曜）から曜日を返す
 * @param index - 曜日の番号
 * @returns 曜日
 */
export const weekdayOfIndex = (index: number): Weekday => WEEKDAYS[index]

/**
 * 1〜12 から月を返す
 * @param number - 月の数字
 * @returns 月
 */
export const monthOfNumber = (number: number): Month => MONTHS[number - 1]

/**
 * 日付の曜日を返す
 * @param parts - 年・月・日
 * @returns 曜日
 */
export const weekdayOf = (parts: DateParts): Weekday =>
  weekdayOfIndex(new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay())

/**
 * 数字を2桁にそろえる（9 → "09"）
 * @param value - 数字
 * @returns 2桁の文字列
 */
const pad = (value: number): string => String(value).padStart(2, '0')

/**
 * 曜日の表記を返す
 * @param weekday - 曜日
 * @param locale - 言語
 * @returns 日本語は「日」、中国語は「周日」、英語は "Sun" の形
 */
export const weekdayName = (weekday: Weekday, locale: SiteLocale): string => {
  if (locale === 'en') return weekday.en
  if (locale === 'zh') return weekday.zh
  return weekday.ja
}

/**
 * 月の短い英語の表記を返す（10 → "Oct"）
 * @param month - 月（1〜12）
 * @returns 英語の月の先頭3文字
 */
export const shortMonthEnglish = (month: number): string => monthOfNumber(month).en.slice(0, 3)

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
        weekday: weekdayOfIndex(weekday),
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
  return `${monthOfNumber(month).en} ${year}`
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
  return `${monthOfNumber(month).en} ${day}, ${year}`
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
 * 日時を「年」だけの表記にする
 * @param date - 日時
 * @param locale - 表示する言語
 * @returns 日本語なら「2024年」、英語なら "2024"
 *
 * @remarks
 * 日本で撮った日付などを扱うので、日本時間で年を取る（ビルドする環境の時刻帯に左右されないように）
 */
export const formatYear = (date: Date, locale: SiteLocale): string =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(date)
