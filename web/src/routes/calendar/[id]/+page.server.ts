import { error } from '@sveltejs/kit'
import { EVENTS } from '@entities/calendarEvent'
import { calendarDetailMetaInput, findCalendarEvent } from '@pages/calendarDetail'
import { META_DATA } from '@shared/config/meta'
import { NotFoundError } from '@shared/errors'
import { getLocale } from '@shared/lib/i18n'
import type { SiteLocale } from '@shared/lib/i18n'
import type { EntryGenerator, PageServerLoad } from './$types'

// イベントの数だけ詳細ページを書き出す
export const prerender = true

export const entries: EntryGenerator = () => EVENTS.map((event) => ({ id: event.id }))

export const load: PageServerLoad = ({ params }) => {
  try {
    const event = findCalendarEvent(params.id)
    // 英語ページでは、英語の大会名・会場・日程でメタ情報を作る
    const locale = getLocale() as SiteLocale
    return {
      event,
      meta: META_DATA.calendarDetail(calendarDetailMetaInput(event, locale)),
    }
  } catch (caught) {
    if (caught instanceof NotFoundError) error(caught.status, caught.message)
    throw caught
  }
}
