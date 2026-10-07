import { EventSchedule, type CalendarEvent } from '@entities/calendarEvent'
import { COUNTRY_NAMES_ENGLISH, PREFECTURE_NAMES_ENGLISH } from '@shared/config/place'

/** この言葉で始まる会場名は、地図で探しても場所が決まらない（「オンライン（YouTube）」など） */
const UNMAPPABLE_VENUE_PREFIXES: readonly string[] = ['オンライン']

/**
 * "2026-10-30" → "20261031"。Google カレンダーの終日の予定は、終了日の翌日を指定する
 * @param dateKey - 日付 "YYYY-MM-DD"
 * @returns 翌日を "YYYYMMDD" にした文字列
 */
const nextDayCompact = (dateKey: string): string => {
  const [year, month, day] = dateKey.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day + 1)).toISOString().slice(0, 10).replaceAll('-', '')
}

/**
 * Google マップで探す文字列
 * @param event - 大会
 * @returns 会場の住所か名前。会場が無い・都道府県名や国名だけ・オンラインのときは undefined
 *
 * @remarks
 * 日本の会場は日本語の名前がいちばん正確に見つかるので、表示中の言語に関係なく日本語で探す。
 * 「高崎アリーナ（群馬県）」の括弧は、検索の邪魔にならないよう空白に変える。
 * 海外の会場は日本語の名前（カタカナ）では見つかりにくいので、英語の名前があればそちらで探す。
 * 都道府県名や国名だけの会場は、地図を開いても場所が分からないので出さない
 */
export const mapQueryOf = (event: CalendarEvent): string | undefined => {
  const venue = event.venue
  if (!venue) return undefined
  if (venue.address) return venue.address

  const ja = venue.name.ja.trim()
  if (ja in PREFECTURE_NAMES_ENGLISH || ja in COUNTRY_NAMES_ENGLISH) return undefined
  if (UNMAPPABLE_VENUE_PREFIXES.some((prefix) => ja.startsWith(prefix))) return undefined

  const overseas = Object.keys(COUNTRY_NAMES_ENGLISH).some((country) => ja.includes(country))
  if (overseas && venue.name.en) return venue.name.en
  return ja
    .replaceAll(/[（）()]/g, ' ')
    .replaceAll(/\s+/g, ' ')
    .trim()
}

/**
 * 会場を Google マップで開く URL
 * @param event - 大会
 * @returns 検索の URL。地図で探せる会場が無ければ undefined
 *
 * @remarks
 * 地図の埋め込み（Maps Embed API）は API キーと請求先の登録が要るので使わず、
 * キーの要らない検索の URL（Maps URLs）でリンクだけ出す
 */
export const googleMapsUrl = (event: CalendarEvent): string | undefined => {
  const query = mapQueryOf(event)
  if (!query) return undefined
  const params = new URLSearchParams({ api: '1', query })
  return `https://www.google.com/maps/search/?${params.toString()}`
}

/** Google カレンダーに入れる予定の中身 */
export interface CalendarEntryInput {
  /** 予定の名前（表示中の言語の大会名） */
  title: string
  /** 予定の場所に入れる会場名 */
  location?: string
  /** 予定の説明に入れる、この大会の詳細ページの URL */
  pageUrl: string
}

/**
 * 大会を Google カレンダーの予定に追加する URL
 * @param event - 大会
 * @param input - 予定の名前・場所・説明
 * @returns 予定の作成画面を開く URL。日付が決まっていないイベントは undefined
 *
 * @remarks
 * 開始時刻は元データに無いので、終日の予定にする。
 * 場所には、地図で探しやすい文字列（{@link mapQueryOf}）があればそれを、無ければ会場名を入れる
 */
export const googleCalendarUrl = (
  event: CalendarEvent,
  input: CalendarEntryInput,
): string | undefined => {
  if (event.schedule === EventSchedule.MONTH_ONLY) return undefined

  const start = event.startDate.replaceAll('-', '')
  const end = nextDayCompact(event.endDate ?? event.startDate)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: input.title,
    dates: `${start}/${end}`,
    details: input.pageUrl,
  })
  const location = mapQueryOf(event) ?? input.location
  if (location) params.set('location', location)
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
