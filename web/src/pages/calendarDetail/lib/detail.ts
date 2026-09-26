import {
  EVENTS,
  EventSchedule,
  eventDateRange,
  eventSortKey,
  localizeEvent,
  type CalendarEvent,
} from '@entities/calendarEvent'
import { m } from '$lib/paraglide/messages'
import type { CalendarDetailMetaInput } from '@shared/config/meta'
import { NotFoundError } from '@shared/errors'
import { parseDate } from '@shared/lib/date'
import type { SiteLocale } from '@shared/lib/i18n'

/** 1日のミリ秒 */
const DAY_MS = 24 * 60 * 60 * 1000

/**
 * ID から大会を探す
 * @param id - 大会の ID（URL の `[id]`）
 * @returns 大会
 * @throws NotFoundError 見つからないとき
 */
export const findCalendarEvent = (id: string): CalendarEvent => {
  const event = EVENTS.find((item) => item.id === id)
  if (!event) throw new NotFoundError()
  return event
}

/**
 * 詳細ページのメタ情報を作るための値
 * @param event - 大会
 * @param locale - 表示する言語
 * @returns 表示する言語の大会名・会場・日程・説明
 */
export const calendarDetailMetaInput = (
  event: CalendarEvent,
  locale: SiteLocale,
): CalendarDetailMetaInput => {
  const localized = localizeEvent(event, locale)
  return {
    id: event.id,
    title: localized.title,
    dateRange: eventDateRange(event, locale),
    venue: localized.venue,
    note: localized.note,
  }
}

/**
 * 検索結果に日程と会場を出すための構造化データ（schema.org の SportsEvent）
 * @param event - 大会
 * @param locale - 表示する言語
 * @param baseUrl - サイトの URL（`https://imrg.work`）
 * @param path - 表示中の言語の詳細ページのパス（`/en/calendar/<id>/` など）
 * @returns JSON-LD の中身。名前と会場は表示する言語の値にし、alternateName にもう一方の言語の名前を入れる
 */
export const buildSportsEventJsonLd = (
  event: CalendarEvent,
  locale: SiteLocale,
  baseUrl: string,
  path: string,
): Record<string, unknown> => {
  const localized = localizeEvent(event, locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: localized.title,
    alternateName: localized.alternateTitle,
    // 日程が未定のイベントは、月（"2027-03"）を開始日と終了日に入れる
    startDate: event.schedule === EventSchedule.MONTH_ONLY ? event.month : event.startDate,
    endDate:
      event.schedule === EventSchedule.MONTH_ONLY
        ? event.month
        : (event.endDate ?? event.startDate),
    url: `${baseUrl}${path}`,
    sport: "Men's Rhythmic Gymnastics",
    location: localized.venue ? { '@type': 'Place', name: localized.venue } : undefined,
  }
}

/** 開催までの近さ1つ分 */
export interface EventCountdown {
  /** 画面に出す文言。表示中の言語で返す */
  readonly text: string
  /** もう終わった大会か。終わったものは青で目立たせない */
  readonly finished: boolean
}

/**
 * 開催までの近さを、表示中の言語の短い文言にする
 * @param event - 大会
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 「今日」「明日」「あと5日」「開催中」「終了」と、終わったかどうか。日付が未定なら undefined
 *
 * @remarks
 * 同じ考え方の関数がカレンダー一覧のページにもある。ページをまたいで共有せず、
 * それぞれのページの中で完結させている（一覧は「終了」を出さないなど、出し分けが違うため）。
 * 終わったかどうかは文言で見分けない。訳した文字と見比べると、言語を変えたとたんに外れるため
 */
export const eventCountdown = (event: CalendarEvent, today: string): EventCountdown | undefined => {
  if (event.schedule === EventSchedule.MONTH_ONLY) return undefined

  const start = parseDate(event.startDate)
  const base = parseDate(today)
  if (start.day === undefined || base.day === undefined) return undefined

  const left = Math.round(
    (Date.UTC(start.year, start.month - 1, start.day) -
      Date.UTC(base.year, base.month - 1, base.day)) /
      DAY_MS,
  )
  if (left > 1) return { text: m.calendar_countdown_days_left({ days: left }), finished: false }
  if (left === 1) return { text: m.calendar_countdown_tomorrow(), finished: false }
  if (left === 0) return { text: m.calendar_countdown_today(), finished: false }
  return (event.endDate ?? event.startDate) >= today
    ? { text: m.calendar_countdown_ongoing(), finished: false }
    : { text: m.calendar_countdown_finished(), finished: true }
}

/**
 * 同じころに開かれる大会を探す
 * @param event - 表示している大会
 * @param count - 返す件数
 * @returns 日付の並びで前後にある大会。自分自身は含めない
 *
 * @remarks
 * 「この日に見に行けるほかの大会」をたどれるようにするためのもの。
 * 並びは一覧と同じ（開始日の順、同じ日なら日本語の大会名の順）
 */
export const nearbyEvents = (event: CalendarEvent, count: number): CalendarEvent[] => {
  const sorted = [...EVENTS].sort(
    (a, b) =>
      eventSortKey(a).localeCompare(eventSortKey(b)) || a.title.ja.localeCompare(b.title.ja),
  )
  const position = sorted.findIndex((item) => item.id === event.id)
  if (position < 0) return []

  // 自分を真ん中に置いた窓を切り出し、端に寄ったときは窓ごとずらす
  const windowSize = count + 1
  const start = Math.min(
    Math.max(0, position - Math.floor(count / 2)),
    Math.max(0, sorted.length - windowSize),
  )
  return sorted.slice(start, start + windowSize).filter((item) => item.id !== event.id)
}
