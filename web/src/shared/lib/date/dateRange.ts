import type { SiteLocale } from '@shared/lib/i18n'
import type { DateParts } from '@shared/model'
import {
  formatMonthEnglish,
  formatMonthJapanese,
  formatMonthKorean,
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
 * 例: "2026년 10월 30일(금) ~ 11월 1일(일)"。年月だけなら "2027년 3월"
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @returns 韓国語の期間。終了年が開始年と同じなら終了側の年は省く
 */
export const formatDateRangeKorean = (startDate: string, endDate?: string): string => {
  const start = parseDate(startDate)
  if (start.day === undefined) return formatMonthKorean(startDate)

  const startText = `${start.year}년 ${start.month}월 ${start.day}일(${weekdayName(weekdayOf(start), 'ko')})`
  if (!endDate || endDate === startDate) return startText

  const end = parseDate(endDate)
  const endYear = end.year === start.year ? '' : `${end.year}년 `
  if (end.day === undefined) return `${startText} ~ ${endYear}${end.month}월`
  return `${startText} ~ ${endYear}${end.month}월 ${end.day}일(${weekdayName(weekdayOf(end), 'ko')})`
}

/**
 * 期間を言語に応じた表記にする
 * @param startDate - 開始日 "YYYY-MM-DD" または "YYYY-MM"
 * @param endDate - 終了日。無ければ開始日だけの表記にする
 * @param locale - 言語
 * @returns 日本語は `formatDateRangeJapanese`、韓国語は `formatDateRangeKorean`、それ以外は `formatDateRangeEnglish` の形
 */
export const formatDateRange = (
  startDate: string,
  endDate: string | undefined,
  locale: SiteLocale,
): string => {
  if (locale === 'ja') return formatDateRangeJapanese(startDate, endDate)
  if (locale === 'ko') return formatDateRangeKorean(startDate, endDate)
  return formatDateRangeEnglish(startDate, endDate)
}
