import {
  EVENTS,
  EventSchedule,
  eventDateRange,
  localizeEvent,
  type CalendarEvent,
} from '@entities/calendarEvent'
import type { CalendarDetailMetaInput } from '@shared/config/meta'
import { NotFoundError } from '@shared/errors'
import type { SiteLocale } from '@shared/lib/i18n'

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
 * @returns 表示する言語の大会名・会場・日程。alternateTitle はもう一方の言語の大会名
 */
export const calendarDetailMetaInput = (
  event: CalendarEvent,
  locale: SiteLocale,
): CalendarDetailMetaInput => {
  const localized = localizeEvent(event, locale)
  return {
    id: event.id,
    title: localized.title,
    alternateTitle: locale === 'en' ? event.titleJapanese : event.titleEnglish,
    dateRange: eventDateRange(event, locale),
    venue: localized.venue,
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
