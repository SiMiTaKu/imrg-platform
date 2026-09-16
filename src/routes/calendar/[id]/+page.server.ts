import { error } from "@sveltejs/kit"
import type { ViewValueLayout } from "$model/view-value-layout"
import { EVENTS } from "$views/page/calendar/_data/events"
import type { CalendarEvent } from "$views/page/calendar/_data/model"
import { formatDateRangeJa } from "$views/page/calendar/_lib/calendar"
import type { EntryGenerator, PageServerLoad } from "./$types"

type OutputData = {
  isMobile: boolean;
  layout: ViewValueLayout;
  event: CalendarEvent;
};

// イベントの数だけ詳細ページを書き出す
export const prerender = true

export const entries: EntryGenerator = () => EVENTS.map((event) => ({ id: event.id }))

export const load: PageServerLoad<OutputData> = async ({ locals, params }) => {
  const event = EVENTS.find((item) => item.id === params.id)
  if (!event) error(404, "Not found")

  const title = `${event.titleJa} | 大会・イベントカレンダー | 男子新体操国際化プロジェクト`
  const venue = event.venueJa ? `、会場は${event.venueJa}` : ""
  const description = `${event.titleJa}（${event.titleEn}）の日程は${formatDateRangeJa(event)}${venue}です。男子新体操の大会・発表会・講習会をまとめたカレンダーより。`

  return {
    isMobile: locals.isMobile,
    event,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: `/calendar/${event.id}`,
      ogp: {
        title,
        description,
        type: "article",
      },
    },
  }
}
