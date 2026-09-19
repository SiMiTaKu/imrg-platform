import type { SiteLocale } from '@shared/lib/i18n'
import type { DateParts } from '@shared/model'
import {
  formatMonthEnglish,
  formatMonthJapanese,
  parseDate,
  shortMonthEnglish,
  weekdayName,
  weekdayOf,
} from './date'

/**
 * 例: "2026年10月30日（金）〜11月1日（日）"。年月だけなら "2027年3月"
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @returns 日本語の期間。終了年が開始年と同じなら終了側の年は省く
 */
export const formatDateRangeJapanese = (startDate: string, endDate?: string): string => {
  const start = parseDate(startDate)
  if (start.day === undefined) return formatMonthJapanese(startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${weekdayName(weekdayOf(start), 'ja')}）`
  if (!endDate || endDate === startDate) return startText

  const end = parseDate(endDate)
  const endYear = end.year === start.year ? '' : `${end.year}年`
  if (end.day === undefined) return `${startText}〜${endYear}${end.month}月`
  return `${startText}〜${endYear}${end.month}月${end.day}日（${weekdayName(weekdayOf(end), 'ja')}）`
}

/**
 * 例: "2026年10月30日（周五）—11月1日（周日）"。年月だけなら "2027年3月"
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @returns 中国語の期間。終了年が開始年と同じなら終了側の年は省く
 *
 * @remarks
 * 年月日の並びは日本語と同じだが、曜日の表記（周五）と期間の区切り（—）が違う
 */
export const formatDateRangeChinese = (startDate: string, endDate?: string): string => {
  const start = parseDate(startDate)
  if (start.day === undefined) return formatMonthJapanese(startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${weekdayName(weekdayOf(start), 'zh')}）`
  if (!endDate || endDate === startDate) return startText

  const end = parseDate(endDate)
  const endYear = end.year === start.year ? '' : `${end.year}年`
  if (end.day === undefined) return `${startText}—${endYear}${end.month}月`
  return `${startText}—${endYear}${end.month}月${end.day}日（${weekdayName(weekdayOf(end), 'zh')}）`
}

/**
 * "Fri, Oct 30" の形にする
 * @param parts - 年・月・日
 * @returns 曜日・月・日の英語の表記
 */
const dayTextEnglish = (parts: DateParts): string =>
  `${weekdayName(weekdayOf(parts), 'en')}, ${shortMonthEnglish(parts.month)} ${parts.day}`

/**
 * 例: "Fri, Oct 30 – Sun, Nov 1, 2026"。年月だけなら "March 2027"
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @returns 英語の期間。終了年が開始年と同じなら開始側の年は省く
 */
export const formatDateRangeEnglish = (startDate: string, endDate?: string): string => {
  const start = parseDate(startDate)
  if (start.day === undefined) return formatMonthEnglish(startDate)

  if (!endDate || endDate === startDate) return `${dayTextEnglish(start)}, ${start.year}`

  const end = parseDate(endDate)
  if (end.day === undefined)
    return `${dayTextEnglish(start)}, ${start.year} – ${formatMonthEnglish(endDate)}`
  if (end.year === start.year)
    return `${dayTextEnglish(start)} – ${dayTextEnglish(end)}, ${end.year}`
  return `${dayTextEnglish(start)}, ${start.year} – ${dayTextEnglish(end)}, ${end.year}`
}

/**
 * 期間を言語に応じた表記にする
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @param locale - 言語
 * @returns 日本語は `formatDateRangeJapanese`、中国語は `formatDateRangeChinese`、英語は `formatDateRangeEnglish` の形
 */
export const formatDateRange = (
  startDate: string,
  endDate: string | undefined,
  locale: SiteLocale,
): string => {
  if (locale === 'en') return formatDateRangeEnglish(startDate, endDate)
  if (locale === 'zh') return formatDateRangeChinese(startDate, endDate)
  return formatDateRangeJapanese(startDate, endDate)
}
