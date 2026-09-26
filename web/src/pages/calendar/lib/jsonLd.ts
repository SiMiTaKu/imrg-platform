import { EventSchedule, eventStartDate, localizeEvent } from '@entities/calendarEvent'
import type { CalendarEvent } from '@entities/calendarEvent'
import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 一覧ページの構造化データ（schema.org の ItemList）を作る
 * @param events - 載せる大会。これから開かれるものを日付の順で渡す
 * @param locale - 表示する言語
 * @param baseUrl - サイトの URL（`https://imrg.work`）
 * @param detailPath - 大会の ID から詳細ページのパスを作る関数（言語の接頭辞つき）
 * @param name - 一覧の名前
 * @returns JSON-LD の中身
 *
 * @remarks
 * **画面に出しているのは「次にある大会」3件だけ**なので、検索エンジンからは
 * それ以外の大会が読めない。見た目を変えずに中身を伝えるために、ここで並べる。
 * 日付が月までしか決まっていない大会は、開始日を持たせられないので外す。
 */
export const buildEventListJsonLd = (
  events: readonly CalendarEvent[],
  locale: SiteLocale,
  baseUrl: string,
  detailPath: (id: string) => string,
  name: string,
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: events.length,
  itemListElement: events.map((event, index) => {
    const localized = localizeEvent(event, locale)
    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SportsEvent',
        name: localized.title,
        startDate: eventStartDate(event),
        endDate:
          event.schedule === EventSchedule.MONTH_ONLY
            ? undefined
            : (event.endDate ?? event.startDate),
        url: `${baseUrl}${detailPath(event.id)}`,
        sport: "Men's Rhythmic Gymnastics",
        location: localized.venue ? { '@type': 'Place', name: localized.venue } : undefined,
      },
    }
  }),
})
