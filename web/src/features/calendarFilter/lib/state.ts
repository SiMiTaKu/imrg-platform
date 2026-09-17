import { CATEGORY_ORDER, toMonthKey, type EventCategory } from '@entities/calendarEvent'
import type { CalendarState } from '../model'

/**
 * 何も指定されていないときの画面の状態
 * @param month - カレンダーで最初に出す月 "YYYY-MM"（今日の月）
 * @returns カレンダー表示・これからのイベント・1ページ目の状態
 */
export const defaultState = (month: string): CalendarState => ({
  view: 'calendar',
  keyword: '',
  categories: [],
  period: 'upcoming',
  page: 1,
  month,
  day: null,
})

/**
 * URL のクエリから画面の状態を読む。おかしな値は初期値にする
 * @param search - URL のクエリ文字列（"?view=list" など）
 * @param month - 初期値に使う月 "YYYY-MM"（今日の月）
 * @returns 読み取った画面の状態
 *
 * @remarks
 * クエリは言語によらず同じ形（`/calendar/?view=list` と `/en/calendar/?view=list`）
 */
export const parseState = (search: string, month: string): CalendarState => {
  const params = new URLSearchParams(search)
  const defaults = defaultState(month)
  const categories = (params.get('category') ?? '')
    .split(',')
    .filter((value): value is EventCategory => CATEGORY_ORDER.includes(value as EventCategory))
  const period = params.get('period')
  const monthParam = params.get('month')
  const dayParam = params.get('day')
  const resolvedMonth = monthParam && /^\d{4}-\d{2}$/.test(monthParam) ? monthParam : defaults.month

  return {
    view: params.get('view') === 'list' ? 'list' : defaults.view,
    keyword: params.get('q') ?? '',
    categories: [...new Set(categories)],
    period: period === 'past' || period === 'all' ? period : defaults.period,
    page: Math.max(1, Number.parseInt(params.get('page') ?? '1', 10) || 1),
    month: resolvedMonth,
    day:
      dayParam && /^\d{4}-\d{2}-\d{2}$/.test(dayParam) && toMonthKey(dayParam) === resolvedMonth
        ? dayParam
        : null,
  }
}

/**
 * 画面の状態を URL のクエリにする。初期値のままの項目は書かない
 * @param state - 画面の状態
 * @param month - 初期値に使う月 "YYYY-MM"（今日の月）
 * @returns 先頭に "?" を付けたクエリ文字列。書く項目が無ければ空文字
 */
export const serializeState = (state: CalendarState, month: string): string => {
  const defaults = defaultState(month)
  const params = new URLSearchParams()
  if (state.view !== defaults.view) params.set('view', state.view)
  if (state.keyword) params.set('q', state.keyword)
  if (state.categories.length) params.set('category', state.categories.join(','))
  if (state.view === 'list' && state.period !== defaults.period) params.set('period', state.period)
  if (state.view === 'list' && state.page > 1) params.set('page', String(state.page))
  if (state.view === 'calendar' && state.month !== defaults.month) params.set('month', state.month)
  if (state.view === 'calendar' && state.day) params.set('day', state.day)

  const query = params.toString()
  return query ? `?${query}` : ''
}
