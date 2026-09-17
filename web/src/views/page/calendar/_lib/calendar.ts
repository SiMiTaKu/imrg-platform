import { CATEGORY_LABELS, CATEGORY_ORDER } from '../_data/category'
import type { CalendarEvent, EventCategory } from '../_data/model'

export const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土']
export const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** リスト表示で1ページに出す件数 */
export const PER_PAGE = 20

const DAY_MS = 24 * 60 * 60 * 1000

type DateParts = { year: number; month: number; day?: number }

/**
 * いつのイベントを出すか
 * - upcoming: まだ終わっていない
 * - past: 終わった（新しい順）
 * - all: すべて
 */
export type EventPeriod = 'upcoming' | 'past' | 'all'

/** イベント一覧の絞り込み条件 */
export type EventFilter = {
  /** 空のときはすべての種類 */
  categories: EventCategory[]
  /** いつのイベントを出すか */
  period: EventPeriod
  /** 今日の日付 "YYYY-MM-DD"。終わったかどうかの判定に使う */
  today: string
  /** 空白区切りのキーワード。空のときは絞り込まない */
  keyword: string
}

/** 開始月が同じイベントのかたまり。monthKey は "YYYY-MM" */
export type MonthGroup = { monthKey: string; events: CalendarEvent[] }

/** ページ分けした結果。page は範囲内に寄せた現在のページ番号（1始まり） */
export type PageSlice<T> = { items: T[]; page: number; totalPages: number }

/** 月のカレンダーのマス1つ。weekday は 0（日曜）〜6（土曜）、inMonth は表示中の月の日か */
export type DayCell = { dateKey: string; day: number; weekday: number; inMonth: boolean }

/** 一覧の日付欄に出す値。年月しか分からないイベントは month だけ */
export type DateBadge = { month: number; day?: number; weekdayJa?: string }

/** 表示の切り替え（カレンダー表示・リスト表示） */
export type CalendarView = 'calendar' | 'list'

/** 画面の状態。URL のクエリに保存して、詳細ページから戻っても同じ表示に戻れるようにする */
export type CalendarState = {
  view: CalendarView
  keyword: string
  categories: EventCategory[]
  period: EventPeriod
  page: number
  month: string
  day: string | null
}

/** "2026-10-30" / "2027-03" を年・月・日に分ける */
function parseDate(value: string): DateParts {
  const [year, month, day] = value.split('-').map(Number)
  return day ? { year, month, day } : { year, month }
}

/** 文字列の日付どうしを比べる。"2027-03" は "2027-03-01" より前に並ぶ */
function compareText(a: string, b: string): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

/** 開始日の順、同じ日なら日本語の大会名の順に並べるための比較 */
function compareEvents(a: CalendarEvent, b: CalendarEvent): number {
  return compareText(a.startDate, b.startDate) || compareText(a.titleJa, b.titleJa)
}

/** 日付の曜日を 0（日曜）〜6（土曜）で返す */
function weekdayOf(parts: DateParts): number {
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()
}

/** 数字を2桁にそろえる（9 → "09"） */
function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/**
 * 閲覧者の端末の日付を "YYYY-MM-DD" にする
 * @param date - 日付
 * @returns "YYYY-MM-DD" の文字列（端末のタイムゾーンでの日付）
 */
export function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/**
 * "2026-10-30" → "2026-10"
 * @param value - "YYYY-MM-DD" または "YYYY-MM" の日付
 * @returns 先頭7文字の "YYYY-MM"
 */
export function toMonthKey(value: string): string {
  return value.slice(0, 7)
}

/**
 * "2026-12" を delta か月ずらす
 * @param monthKey - 基準の月 "YYYY-MM"
 * @param delta - ずらす月数。負の数なら前の月へ
 * @returns ずらした月 "YYYY-MM"
 */
export function shiftMonth(monthKey: string, delta: number): string {
  const { year, month } = parseDate(monthKey)
  const date = new Date(Date.UTC(year, month - 1 + delta, 1))
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}`
}

/**
 * まだ終わっていないか。年月しか分からないイベントは、その月のあいだは終わっていない扱い
 * @param event - 判定するイベント
 * @param today - 今日の日付 "YYYY-MM-DD"
 * @returns 終了日（無ければ開始日）が今日以降なら true
 */
export function isUpcoming(event: CalendarEvent, today: string): boolean {
  const end = event.endDate ?? event.startDate
  if (end.length === 7) return end >= toMonthKey(today)
  return end >= today
}

/**
 * 検索のために、全角半角と大文字小文字の違いをなくす
 * @param value - 変換する文字列
 * @returns NFKC で正規化して小文字にした文字列
 */
export function normalizeText(value: string): string {
  return value.normalize('NFKC').toLowerCase()
}

/**
 * キーワードを空白で区切り、すべてを含むか。大会名・会場（日英）と種類名から探す
 * @param event - 判定するイベント
 * @param keyword - 空白区切りのキーワード
 * @returns すべての語を含むか、キーワードが空なら true
 */
export function matchesKeyword(event: CalendarEvent, keyword: string): boolean {
  const terms = normalizeText(keyword).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return true

  const label = CATEGORY_LABELS[event.category]
  const haystack = normalizeText(
    `${event.titleJa} ${event.titleEn} ${event.venueJa ?? ''} ${event.venueEn ?? ''} ${label.ja} ${label.en}`,
  )
  return terms.every((term) => haystack.includes(term))
}

/**
 * 「すべて」と同じ状態か。何も選んでいないときと、全部選んだときは結果が同じになる
 * @param categories - 選んでいる種類
 * @returns 何も選んでいないか、すべての種類を選んでいれば true
 */
export function isEveryCategory(categories: EventCategory[]): boolean {
  return categories.length === 0 || CATEGORY_ORDER.every((key) => categories.includes(key))
}

/**
 * 種類・キーワード・時期で絞り込んで並べる。終わったイベントだけのときは新しい順
 * @param events - すべてのイベント
 * @param filter - 絞り込み条件
 * @returns 絞り込んで並べ替えたイベント
 */
export function filterEvents(events: CalendarEvent[], filter: EventFilter): CalendarEvent[] {
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
export function groupByMonth(events: CalendarEvent[]): MonthGroup[] {
  const groups: MonthGroup[] = []
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
export function paginate<T>(items: T[], page: number, perPage = PER_PAGE): PageSlice<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(Math.max(1, Math.floor(page) || 1), totalPages)
  const start = (current - 1) * perPage
  return { items: items.slice(start, start + perPage), page: current, totalPages }
}

/**
 * 月のカレンダーのマス目。日曜始まりの週ごとに、前後の月の日も含めて並べる
 * @param monthKey - 表示する月 "YYYY-MM"
 * @returns 週ごとに7マスずつ並べたマス目
 */
export function buildMonthGrid(monthKey: string): DayCell[][] {
  const { year, month } = parseDate(monthKey)
  const first = Date.UTC(year, month - 1, 1)
  const offset = new Date(first).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
  const weekCount = Math.ceil((offset + daysInMonth) / 7)

  return Array.from({ length: weekCount }, (_, week) =>
    Array.from({ length: 7 }, (__, weekday) => {
      const date = new Date(first + (week * 7 + weekday - offset) * DAY_MS)
      return {
        dateKey: `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`,
        day: date.getUTCDate(),
        weekday,
        inMonth: date.getUTCMonth() === month - 1,
      }
    }),
  )
}

/**
 * その日に開かれているイベント。年月しか分からないイベントは含めない
 * @param events - 対象のイベント
 * @param dateKey - 日付 "YYYY-MM-DD"
 * @returns その日が開始日から終了日のあいだに入るイベント
 */
export function eventsOnDay(events: CalendarEvent[], dateKey: string): CalendarEvent[] {
  return events.filter(
    (event) =>
      event.startDate.length === 10 &&
      event.startDate <= dateKey &&
      (event.endDate ?? event.startDate) >= dateKey,
  )
}

/**
 * その月に少しでもかかっているイベント。年月しか分からないイベントも含める
 * @param events - 対象のイベント
 * @param monthKey - 月 "YYYY-MM"
 * @returns 開始月から終了月のあいだにその月が入るイベント
 */
export function eventsInMonth(events: CalendarEvent[], monthKey: string): CalendarEvent[] {
  return events.filter(
    (event) =>
      toMonthKey(event.startDate) <= monthKey &&
      toMonthKey(event.endDate ?? event.startDate) >= monthKey,
  )
}

/**
 * 一覧の日付欄に出す月・日・曜日
 * @param value - 日付 "YYYY-MM-DD" または "YYYY-MM"
 * @returns 月・日・曜日（年月だけなら月のみ）
 */
export function toDateBadge(value: string): DateBadge {
  const parts = parseDate(value)
  if (parts.day === undefined) return { month: parts.month }
  return { month: parts.month, day: parts.day, weekdayJa: WEEKDAYS_JA[weekdayOf(parts)] }
}

/**
 * "2026-10" → "2026年10月"
 * @param monthKey - 月 "YYYY-MM"
 * @returns "2026年10月" の形の文字列
 */
export function formatMonthJa(monthKey: string): string {
  const { year, month } = parseDate(monthKey)
  return `${year}年${month}月`
}

/**
 * "2026-10" → "October 2026"
 * @param monthKey - 月 "YYYY-MM"
 * @returns "October 2026" の形の文字列
 */
export function formatMonthEn(monthKey: string): string {
  const { year, month } = parseDate(monthKey)
  return `${MONTHS_EN[month - 1]} ${year}`
}

/**
 * "2026-09-16" → "2026年9月16日"
 * @param value - 日付 "YYYY-MM-DD"
 * @returns "2026年9月16日" の形の文字列
 */
export function formatDayJa(value: string): string {
  const { year, month, day } = parseDate(value)
  return `${year}年${month}月${day}日`
}

/**
 * "2026-09-16" → "September 16, 2026"
 * @param value - 日付 "YYYY-MM-DD"
 * @returns "September 16, 2026" の形の文字列
 */
export function formatDayEn(value: string): string {
  const { year, month, day } = parseDate(value)
  return `${MONTHS_EN[month - 1]} ${day}, ${year}`
}

/**
 * 例: "2026年10月30日（金）〜11月1日（日）"。年月だけなら "2027年3月"
 * @param event - 表示するイベント
 * @returns 日本語の開催期間。終了年が開始年と同じなら終了側の年は省く
 */
export function formatDateRangeJa(event: CalendarEvent): string {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthJa(event.startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${WEEKDAYS_JA[weekdayOf(start)]}）`
  if (!event.endDate || event.endDate === event.startDate) return startText

  const end = parseDate(event.endDate)
  const endYear = end.year === start.year ? '' : `${end.year}年`
  if (end.day === undefined) return `${startText}〜${endYear}${end.month}月`
  return `${startText}〜${endYear}${end.month}月${end.day}日（${WEEKDAYS_JA[weekdayOf(end)]}）`
}

/**
 * 例: "Fri, Oct 30 – Sun, Nov 1, 2026"。年月だけなら "March 2027"
 * @param event - 表示するイベント
 * @returns 英語の開催期間。終了年が開始年と同じなら開始側の年は省く
 */
export function formatDateRangeEn(event: CalendarEvent): string {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthEn(event.startDate)

  /** "Fri, Oct 30" の形にする */
  const dayText = (parts: DateParts) =>
    `${WEEKDAYS_EN[weekdayOf(parts)]}, ${MONTHS_EN[parts.month - 1].slice(0, 3)} ${parts.day}`
  if (!event.endDate || event.endDate === event.startDate) return `${dayText(start)}, ${start.year}`

  const end = parseDate(event.endDate)
  if (end.day === undefined)
    return `${dayText(start)}, ${start.year} – ${formatMonthEn(event.endDate)}`
  if (end.year === start.year) return `${dayText(start)} – ${dayText(end)}, ${end.year}`
  return `${dayText(start)}, ${start.year} – ${dayText(end)}, ${end.year}`
}

/**
 * "https://www.example.com/a" → "example.com"。出典の表示に使う
 * @param url - 出典の URL
 * @returns 先頭の "www." を除いたホスト名。URL として読めなければ元の文字列
 */
export function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * 何も指定されていないときの画面の状態
 * @param month - カレンダーで最初に出す月 "YYYY-MM"（今日の月）
 * @returns カレンダー表示・これからのイベント・1ページ目の状態
 */
export function defaultState(month: string): CalendarState {
  return {
    view: 'calendar',
    keyword: '',
    categories: [],
    period: 'upcoming',
    page: 1,
    month,
    day: null,
  }
}

/**
 * URL のクエリから画面の状態を読む。おかしな値は初期値にする
 * @param search - URL のクエリ文字列（"?view=list" など）
 * @param month - 初期値に使う月 "YYYY-MM"（今日の月）
 * @returns 読み取った画面の状態
 */
export function parseState(search: string, month: string): CalendarState {
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
export function serializeState(state: CalendarState, month: string): string {
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
