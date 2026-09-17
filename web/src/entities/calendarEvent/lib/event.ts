import type { SiteLocale } from '@shared/lib/i18n'
import { VENUE_NAMES_EN } from '../config/venue'
import type { CalendarEvent } from '../model'
import { toMonthKey } from './date'

/** 表示する言語で選んだイベントの値 */
export interface LocalizedEvent {
  /** 大会名 */
  title: string
  /** もう一方の言語の大会名。表示中の言語と同じ名前なら undefined */
  alternateTitle?: string
  /** 会場 */
  venue?: string
  /** 配信 */
  streaming?: string
  /** 補足 */
  note?: string
}

/**
 * 表示する言語の大会名・会場などを選ぶ
 * @param event - イベント
 * @param locale - 表示する言語
 * @returns その言語の値。英語の値が無い項目は日本語の値にする
 *
 * @remarks
 * 元データ（`~/imrg/calendar-data/`）には英語の会場名が無いイベントがある。
 * 都道府県名だけの会場は英語に訳し、それ以外は、空欄にするより現地で探しやすいので日本語に戻す
 */
export const localizeEvent = (event: CalendarEvent, locale: SiteLocale): LocalizedEvent => {
  if (locale !== 'en') {
    return {
      title: event.titleJa,
      alternateTitle: event.titleEn !== event.titleJa ? event.titleEn : undefined,
      venue: event.venueJa,
      streaming: event.streamingJa,
      note: event.noteJa,
    }
  }
  return {
    title: event.titleEn,
    alternateTitle: event.titleJa !== event.titleEn ? event.titleJa : undefined,
    venue: event.venueEn ?? (event.venueJa && (VENUE_NAMES_EN[event.venueJa] ?? event.venueJa)),
    streaming: event.streamingEn ?? event.streamingJa,
    note: event.noteEn ?? event.noteJa,
  }
}

/**
 * まだ終わっていないか。年月しか分からないイベントは、その月のあいだは終わっていない扱い
 * @param event - 判定するイベント
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 終了日（無ければ開始日）が今日以降なら true
 */
export const isUpcoming = (event: CalendarEvent, today: string): boolean => {
  const end = event.endDate ?? event.startDate
  if (end.length === 7) return end >= toMonthKey(today)
  return end >= today
}

/**
 * その日に開かれているイベント。年月しか分からないイベントは含めない
 * @param events - 対象のイベント
 * @param dateKey - 日付 "YYYY-MM-DD"
 * @returns その日が開始日から終了日のあいだに入るイベント
 */
export const eventsOnDay = (events: CalendarEvent[], dateKey: string): CalendarEvent[] =>
  events.filter(
    (event) =>
      event.startDate.length === 10 &&
      event.startDate <= dateKey &&
      (event.endDate ?? event.startDate) >= dateKey,
  )

/**
 * その月に少しでもかかっているイベント。年月しか分からないイベントも含める
 * @param events - 対象のイベント
 * @param monthKey - 月 "YYYY-MM"
 * @returns 開始月から終了月のあいだにその月が入るイベント
 */
export const eventsInMonth = (events: CalendarEvent[], monthKey: string): CalendarEvent[] =>
  events.filter(
    (event) =>
      toMonthKey(event.startDate) <= monthKey &&
      toMonthKey(event.endDate ?? event.startDate) >= monthKey,
  )

/**
 * イベントの載っている最初の月と最後の月
 * @param events - すべてのイベント
 * @param updatedAt - 掲載内容を最後に確認した日。この月も範囲に含める
 * @returns 最初の月と最後の月 "YYYY-MM"
 */
export const monthRangeOf = (
  events: CalendarEvent[],
  updatedAt: string,
): { first: string; last: string } => {
  const monthKeys = events.flatMap((event) => [
    toMonthKey(event.startDate),
    toMonthKey(event.endDate ?? event.startDate),
  ])
  const base = toMonthKey(updatedAt)
  return {
    first: monthKeys.reduce((current, key) => (current < key ? current : key), base),
    last: monthKeys.reduce((current, key) => (current > key ? current : key), base),
  }
}

/**
 * "https://www.example.com/a" → "example.com"。出典の表示に使う
 * @param url - 出典の URL
 * @returns 先頭の "www." を除いたホスト名。URL として読めなければ元の文字列
 */
export const hostnameOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
