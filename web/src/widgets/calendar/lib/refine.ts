import { eventSortKey, type CalendarEvent } from '@entities/calendarEvent'
import { CalendarRegion, regionOfEvent, type CalendarRegionKey } from './region'

/** 年・地域を絞り込まないときの値 */
export const ANY = 'any'

/** 絞り込まないことを表す値 */
export type Any = typeof ANY

/**
 * 年と地域の絞り込み。
 *
 * @remarks
 * 種類・キーワード・時期は `@features/calendarFilter` が持っている。
 * 312件の中から探すには年と地域の目印も要るので、このページの分として足している
 */
export interface CalendarRefine {
  /** 開催年 "2026"。`ANY` なら全部の年 */
  year: string | Any
  /** 会場の地域。`ANY` なら全部の地域 */
  region: CalendarRegionKey | Any
}

/**
 * 年も地域も絞り込んでいない状態
 * @returns 年・地域ともに「すべて」の条件
 */
export const defaultRefine = (): CalendarRefine => ({ year: ANY, region: ANY })

/**
 * 年か地域のどちらかを絞り込んでいるか
 * @param refine - 年と地域の絞り込み
 * @returns どちらかを選んでいれば true
 */
export const isRefined = (refine: CalendarRefine): boolean =>
  refine.year !== ANY || refine.region !== ANY

/**
 * イベントの開催年
 * @param event - イベント
 * @returns 開催年 "2026"
 */
export const eventYear = (event: CalendarEvent): string => eventSortKey(event).slice(0, 4)

/**
 * 年と地域で絞り込む
 * @param events - 絞り込む前のイベント（並び順はそのまま保つ）
 * @param refine - 年と地域の絞り込み
 * @returns 条件に合うイベント
 */
export const refineEvents = (
  events: readonly CalendarEvent[],
  refine: CalendarRefine,
): CalendarEvent[] =>
  events.filter(
    (event) =>
      (refine.year === ANY || eventYear(event) === refine.year) &&
      (refine.region === ANY || regionOfEvent(event) === refine.region),
  )

/** 絞り込みボタン1つ分の件数 */
export interface RefineCount<T extends string> {
  /** ボタンの値（年なら "2026"、地域なら地域の key） */
  value: T
  /** その値に当てはまる件数 */
  count: number
}

/**
 * 年ごとの件数。新しい年から並べる
 * @param events - 数えるイベント
 * @returns 年と件数の一覧（降順）
 */
export const countByYear = (events: readonly CalendarEvent[]): RefineCount<string>[] => {
  const counts = new Map<string, number>()
  for (const event of events) {
    const year = eventYear(event)
    counts.set(year, (counts.get(year) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.value.localeCompare(a.value))
}

/**
 * 地域ごとの件数
 * @param events - 数えるイベント
 * @returns 地域の key と件数を引ける表
 */
export const countByRegion = (
  events: readonly CalendarEvent[],
): Map<CalendarRegionKey | Any, number> => {
  const counts = new Map<CalendarRegionKey | Any, number>([[ANY, events.length]])
  for (const event of events) {
    const key = regionOfEvent(event)
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  return counts
}

/**
 * 年と地域の条件を、クエリ文字列に足す
 * @param query - `serializeState` が作ったクエリ文字列（"?view=list" など。空文字も可）
 * @param refine - 年と地域の絞り込み
 * @returns 先頭に "?" を付けたクエリ文字列。書く項目が無ければ空文字
 */
export const withRefineQuery = (query: string, refine: CalendarRefine): string => {
  const params = new URLSearchParams(query)
  if (refine.year !== ANY) params.set('year', refine.year)
  if (refine.region !== ANY) params.set('region', refine.region)

  const text = params.toString()
  return text ? `?${text}` : ''
}

/**
 * クエリ文字列から年と地域の条件を読む。おかしな値は「すべて」にする
 * @param search - クエリ文字列（"?year=2026&region=kanto" など）
 * @returns 読み取った年と地域の絞り込み
 */
export const parseRefine = (search: string): CalendarRefine => {
  const params = new URLSearchParams(search)
  const year = params.get('year') ?? ''
  const region = params.get('region') ?? ''
  const regions: readonly string[] = Object.values(CalendarRegion)

  return {
    year: /^\d{4}$/.test(year) ? year : ANY,
    region: regions.includes(region) ? (region as CalendarRegionKey) : ANY,
  }
}
