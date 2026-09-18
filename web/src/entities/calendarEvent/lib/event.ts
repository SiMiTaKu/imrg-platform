import { formatDateRange, formatMonth, toMonthKey } from '@shared/lib/date'
import { toEnglishPlaceName } from '@shared/lib/i18n'
import type { SiteLocale } from '@shared/lib/i18n'
import { EventSchedule } from '../config/schedule'
import type { CalendarEvent } from '../model'

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
      title: event.titleJapanese,
      alternateTitle: event.titleEnglish !== event.titleJapanese ? event.titleEnglish : undefined,
      venue: event.venueJapanese,
      streaming: event.streamingJapanese,
      note: event.noteJapanese,
    }
  }
  return {
    title: event.titleEnglish,
    alternateTitle: event.titleJapanese !== event.titleEnglish ? event.titleJapanese : undefined,
    venue: event.venueEnglish ?? (event.venueJapanese && toEnglishPlaceName(event.venueJapanese)),
    streaming: event.streamingEnglish ?? event.streamingJapanese,
    note: event.noteEnglish ?? event.noteJapanese,
  }
}

/**
 * 日付が決まっていれば開始日を返す
 * @param event - イベント
 * @returns 開始日 "YYYY-MM-DD"。日程が未定なら undefined
 */
export const eventStartDate = (event: CalendarEvent): string | undefined =>
  event.schedule === EventSchedule.MONTH_ONLY ? undefined : event.startDate

/**
 * イベントの開催月
 * @param event - イベント
 * @returns 開始月 "YYYY-MM"
 */
export const eventMonthKey = (event: CalendarEvent): string =>
  event.schedule === EventSchedule.MONTH_ONLY ? event.month : toMonthKey(event.startDate)

/**
 * イベントの終わる月
 * @param event - イベント
 * @returns 終了月 "YYYY-MM"。終了日が無ければ開始月
 */
const eventEndMonthKey = (event: CalendarEvent): string =>
  event.schedule === EventSchedule.MONTH_ONLY
    ? event.month
    : toMonthKey(event.endDate ?? event.startDate)

/**
 * 並べ替えに使う日付
 * @param event - イベント
 * @returns 日付が決まっていれば "YYYY-MM-DD"、未定なら "YYYY-MM"（同じ月の中では先に来る）
 */
export const eventSortKey = (event: CalendarEvent): string =>
  eventStartDate(event) ?? eventMonthKey(event)

/**
 * 開催期間を表示中の言語の表記にする
 * @param event - イベント
 * @param locale - 表示する言語
 * @returns 日付が決まっていれば期間、未定なら月の表記
 */
export const eventDateRange = (event: CalendarEvent, locale: SiteLocale): string =>
  event.schedule === EventSchedule.MONTH_ONLY
    ? formatMonth(event.month, locale)
    : formatDateRange(event.startDate, event.endDate, locale)

/**
 * 日程が変わるかもしれないか（「日程は予定」の印を出すか）
 * @param event - イベント
 * @returns 仮の日程か、日付が未定なら true
 */
export const isTentative = (event: CalendarEvent): boolean => event.schedule !== EventSchedule.FIXED

/**
 * まだ終わっていないか。日程が未定のイベントは、その月のあいだは終わっていない扱い
 * @param event - 判定するイベント
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 終了日（無ければ開始日）が今日以降なら true
 */
export const isUpcoming = (event: CalendarEvent, today: string): boolean => {
  if (event.schedule === EventSchedule.MONTH_ONLY) return event.month >= toMonthKey(today)
  return (event.endDate ?? event.startDate) >= today
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
      event.schedule !== EventSchedule.MONTH_ONLY &&
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
  events.filter((event) => eventMonthKey(event) <= monthKey && eventEndMonthKey(event) >= monthKey)

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
  const monthKeys = events.flatMap((event) => [eventMonthKey(event), eventEndMonthKey(event)])
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
