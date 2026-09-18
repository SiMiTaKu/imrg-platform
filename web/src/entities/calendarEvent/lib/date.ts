import {
  WEEKDAYS_ENGLISH,
  WEEKDAYS_JAPANESE,
  formatMonthEnglish,
  formatMonthJapanese,
  parseDate,
  shortMonthEnglish,
  weekdayOf,
} from '@shared/lib/date'
import type { DateParts } from '@shared/lib/date'
import type { SiteLocale } from '@shared/lib/i18n'
import type { CalendarEvent } from '../model'

/**
 * 例: "2026年10月30日（金）〜11月1日（日）"。年月だけなら "2027年3月"
 * @param event - 表示するイベント
 * @returns 日本語の開催期間。終了年が開始年と同じなら終了側の年は省く
 */
export const formatDateRangeJapanese = (event: CalendarEvent): string => {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthJapanese(event.startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${WEEKDAYS_JAPANESE[weekdayOf(start)]}）`
  if (!event.endDate || event.endDate === event.startDate) return startText

  const end = parseDate(event.endDate)
  const endYear = end.year === start.year ? '' : `${end.year}年`
  if (end.day === undefined) return `${startText}〜${endYear}${end.month}月`
  return `${startText}〜${endYear}${end.month}月${end.day}日（${WEEKDAYS_JAPANESE[weekdayOf(end)]}）`
}

/**
 * "Fri, Oct 30" の形にする
 * @param parts - 年・月・日
 * @returns 曜日・月・日の英語の表記
 */
const dayTextEnglish = (parts: DateParts): string =>
  `${WEEKDAYS_ENGLISH[weekdayOf(parts)]}, ${shortMonthEnglish(parts.month)} ${parts.day}`

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
