import { error } from '@sveltejs/kit'
import { META_DATA } from '@shared/config/meta'
import { EVENTS } from '$views/page/calendar/_data/events'
import { formatDateRangeJapanese } from '$views/page/calendar/_lib/calendar'
import type { EntryGenerator, PageServerLoad } from './$types'

// イベントの数だけ詳細ページを書き出す
export const prerender = true

export const entries: EntryGenerator = () => EVENTS.map((event) => ({ id: event.id }))

export const load: PageServerLoad = ({ params }) => {
  const event = EVENTS.find((item) => item.id === params.id)
  if (!event) error(404, 'Not found')

  return {
    event,
    meta: META_DATA.calendarDetail({
      id: event.id,
      title: event.titleJapanese,
      alternateTitle: event.titleEnglish,
      dateRange: formatDateRangeJapanese(event),
      venue: event.venueJapanese,
    }),
  }
}
