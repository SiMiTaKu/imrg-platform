import { m } from '$lib/paraglide/messages'
import { parseDate } from '@shared/lib/date'
import { EventSchedule, type CalendarEvent } from '@entities/calendarEvent'

/** 1日のミリ秒 */
const DAY_MS = 24 * 60 * 60 * 1000

/**
 * 今日から開催日までの日数
 * @param dateKey - 開催日 "YYYY-MM-DD"
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 残り日数。今日なら 0、過ぎていれば負の数
 */
const daysUntil = (dateKey: string, today: string): number => {
  const target = parseDate(dateKey)
  const base = parseDate(today)
  if (target.day === undefined || base.day === undefined) return 0

  const targetTime = Date.UTC(target.year, target.month - 1, target.day)
  const baseTime = Date.UTC(base.year, base.month - 1, base.day)
  return Math.round((targetTime - baseTime) / DAY_MS)
}

/**
 * 開催までの近さを、表示中の言語の短い文言にする
 * @param event - イベント
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 「今日」「明日」「あと5日」など。日付が未定なら undefined、過ぎていれば「開催中」か undefined
 */
export const countdownText = (event: CalendarEvent, today: string): string | undefined => {
  if (event.schedule === EventSchedule.MONTH_ONLY) return undefined

  const left = daysUntil(event.startDate, today)
  if (left < 0) {
    // 始まっているが、終わっていない期間中の大会
    return (event.endDate ?? event.startDate) >= today ? m.calendar_countdown_ongoing() : undefined
  }
  if (left === 0) return m.calendar_countdown_today()
  if (left === 1) return m.calendar_countdown_tomorrow()
  return m.calendar_countdown_days_left({ days: left })
}
