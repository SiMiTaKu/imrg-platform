import { toMonthKey } from '@shared/lib/date'
import {
  CATEGORY_ORDER,
  categoryLabel,
  isUpcoming,
  type CalendarEvent,
  type EventCategory,
} from '@entities/calendarEvent'
import { PER_PAGE } from '../config/period'
import type { EventFilter, MonthGroup, PageSlice } from '../model'

/**
 * 文字列どうしを比べる。"2027-03" は "2027-03-01" より前に並ぶ
 * @param a - 比べる文字列
 * @param b - 比べる文字列
 * @returns a が前なら負、後なら正、同じなら 0
 */
const compareText = (a: string, b: string): number => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

/**
 * 開始日の順、同じ日なら日本語の大会名の順に並べるための比較
 * @param a - 比べるイベント
 * @param b - 比べるイベント
 * @returns a が前なら負、後なら正、同じなら 0
 *
 * @remarks
 * 英語ページでも日本語の大会名で並べる。言語で並びが変わると、ページ送りの位置が言語ごとにずれるため
 */
const compareEvents = (a: CalendarEvent, b: CalendarEvent): number =>
  compareText(a.startDate, b.startDate) || compareText(a.titleJapanese, b.titleJapanese)

/**
 * 検索のために、全角半角と大文字小文字の違いをなくす
 * @param value - 変換する文字列
 * @returns NFKC で正規化して小文字にした文字列
 */
export const normalizeText = (value: string): string => value.normalize('NFKC').toLowerCase()

/**
 * キーワードを空白で区切り、すべてを含むか。大会名・会場（日英）と種類名（日英）から探す
 * @param event - 判定するイベント
 * @param keyword - 空白区切りのキーワード
 * @returns すべての語を含むか、キーワードが空なら true
 *
 * @remarks
 * 表示中の言語によらず、日本語と英語の両方から探す（英語ページで日本語の会場名を入れても見つかる）
 */
export const matchesKeyword = (event: CalendarEvent, keyword: string): boolean => {
  const terms = normalizeText(keyword).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return true

  const haystack = normalizeText(
    [
      event.titleJapanese,
      event.titleEnglish,
      event.venueJapanese ?? '',
      event.venueEnglish ?? '',
      categoryLabel(event.category, 'ja'),
      categoryLabel(event.category, 'en'),
    ].join(' '),
  )
  return terms.every((term) => haystack.includes(term))
}

/**
 * 「すべて」と同じ状態か。何も選んでいないときと、全部選んだときは結果が同じになる
 * @param categories - 選んでいる種類
 * @returns 何も選んでいないか、すべての種類を選んでいれば true
 */
export const isEveryCategory = (categories: readonly EventCategory[]): boolean =>
  categories.length === 0 || CATEGORY_ORDER.every((key) => categories.includes(key))

/**
 * 種類・キーワード・時期で絞り込んで並べる。終わったイベントだけのときは新しい順
 * @param events - すべてのイベント
 * @param filter - 絞り込み条件
 * @returns 絞り込んで並べ替えたイベント
 */
export const filterEvents = (
  events: readonly CalendarEvent[],
  filter: EventFilter,
): CalendarEvent[] => {
  const sorted = events
    .filter((event) => filter.categories.length === 0 || filter.categories.includes(event.category))
    .filter((event) => matchesKeyword(event, filter.keyword))
    .filter(
      (event) =>
        filter.period === 'all' ||
        isUpcoming(event, filter.today) === (filter.period === 'upcoming'),
    )
    .sort(compareEvents)
  return filter.period === 'past' ? sorted.reverse() : sorted
}

/**
 * 並んだイベントを、開始月が続くかたまりごとにまとめる
 * @param events - 並べ替え済みのイベント
 * @returns 開始月ごとのかたまりの一覧（並び順はそのまま）
 */
export const groupByMonth = (events: CalendarEvent[]): MonthGroup<CalendarEvent>[] => {
  const groups: MonthGroup<CalendarEvent>[] = []
  for (const event of events) {
    const monthKey = toMonthKey(event.startDate)
    const last = groups[groups.length - 1]
    if (last?.monthKey === monthKey) last.events.push(event)
    else groups.push({ monthKey, events: [event] })
  }
  return groups
}

/**
 * 指定したページの分だけ取り出す。範囲外のページは端に寄せる
 * @param items - すべての項目
 * @param page - 表示したいページ番号（1始まり）
 * @param perPage - 1ページの件数。省略時は PER_PAGE
 * @returns そのページの項目・範囲内に寄せたページ番号・総ページ数
 */
export const paginate = <T>(items: T[], page: number, perPage = PER_PAGE): PageSlice<T> => {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(Math.max(1, Math.floor(page) || 1), totalPages)
  const start = (current - 1) * perPage
  return { items: items.slice(start, start + perPage), page: current, totalPages }
}
