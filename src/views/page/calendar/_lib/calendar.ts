import { CATEGORY_LABELS, CATEGORY_ORDER } from "../_data/category"
import type { CalendarEvent, EventCategory } from "../_data/model"

export const WEEKDAYS_JA = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
]
export const WEEKDAYS_EN = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]
const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/** リスト表示で1ページに出す件数 */
export const PER_PAGE = 20

const DAY_MS = 24 * 60 * 60 * 1000

type DateParts = { year: number; month: number; day?: number };

/**
 * いつのイベントを出すか
 * - upcoming: まだ終わっていない
 * - past: 終わった（新しい順）
 * - all: すべて
 */
export type EventPeriod = "upcoming" | "past" | "all";

export type EventFilter = {
  category: EventCategory | "all";
  period: EventPeriod;
  today: string;
  keyword: string;
};

export type MonthGroup = { monthKey: string; events: CalendarEvent[] };

export type PageSlice<T> = { items: T[]; page: number; totalPages: number };

export type DayCell = { dateKey: string; day: number; weekday: number; inMonth: boolean };

export type DateBadge = { month: number; day?: number; weekdayJa?: string };

export type CalendarView = "calendar" | "list";

/** 画面の状態。URL のクエリに保存して、詳細ページから戻っても同じ表示に戻れるようにする */
export type CalendarState = {
  view: CalendarView;
  keyword: string;
  category: EventCategory | "all";
  period: EventPeriod;
  page: number;
  month: string;
  day: string | null;
};

/** "2026-10-30" / "2027-03" を年・月・日に分ける */
function parseDate(value: string): DateParts {
  const [ year, month, day ] = value.split("-").map(Number)
  return day ? { year, month, day } : { year, month }
}

/** 文字列の日付どうしを比べる。"2027-03" は "2027-03-01" より前に並ぶ */
function compareText(a: string, b: string): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

function compareEvents(a: CalendarEvent, b: CalendarEvent): number {
  return compareText(a.startDate, b.startDate) || compareText(a.titleJa, b.titleJa)
}

function weekdayOf(parts: DateParts): number {
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()
}

function pad(value: number): string {
  return String(value).padStart(2, "0")
}

/** 閲覧者の端末の日付を "YYYY-MM-DD" にする */
export function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/** "2026-10-30" → "2026-10" */
export function toMonthKey(value: string): string {
  return value.slice(0, 7)
}

/** "2026-12" を delta か月ずらす */
export function shiftMonth(monthKey: string, delta: number): string {
  const { year, month } = parseDate(monthKey)
  const date = new Date(Date.UTC(year, month - 1 + delta, 1))
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}`
}

/** まだ終わっていないか。年月しか分からないイベントは、その月のあいだは終わっていない扱い */
export function isUpcoming(event: CalendarEvent, today: string): boolean {
  const end = event.endDate ?? event.startDate
  if (end.length === 7) return end >= toMonthKey(today)
  return end >= today
}

/** 検索のために、全角半角と大文字小文字の違いをなくす */
export function normalizeText(value: string): string {
  return value.normalize("NFKC").toLowerCase()
}

/** キーワードを空白で区切り、すべてを含むか。大会名・会場（日英）と種類名から探す */
export function matchesKeyword(event: CalendarEvent, keyword: string): boolean {
  const terms = normalizeText(keyword).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return true

  const label = CATEGORY_LABELS[event.category]
  const haystack = normalizeText(
    `${event.titleJa} ${event.titleEn} ${event.venueJa ?? ""} ${event.venueEn ?? ""} ${label.ja} ${label.en}`
  )
  return terms.every((term) => haystack.includes(term))
}

/** 種類・キーワード・時期で絞り込んで並べる。終わったイベントだけのときは新しい順 */
export function filterEvents(events: CalendarEvent[], filter: EventFilter): CalendarEvent[] {
  const sorted = events
    .filter((event) => filter.category === "all" || event.category === filter.category)
    .filter((event) => matchesKeyword(event, filter.keyword))
    .filter((event) => filter.period === "all" || isUpcoming(event, filter.today) === (filter.period === "upcoming"))
    .sort(compareEvents)
  return filter.period === "past" ? sorted.reverse() : sorted
}

/** 並んだイベントを、開始月が続くかたまりごとにまとめる */
export function groupByMonth(events: CalendarEvent[]): MonthGroup[] {
  const groups: MonthGroup[] = []
  for (const event of events) {
    const monthKey = toMonthKey(event.startDate)
    const last = groups[groups.length - 1]
    if (last?.monthKey === monthKey) last.events.push(event)
    else groups.push({ monthKey, events: [ event ] })
  }
  return groups
}

/** 指定したページの分だけ取り出す。範囲外のページは端に寄せる */
export function paginate<T>(items: T[], page: number, perPage = PER_PAGE): PageSlice<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(Math.max(1, Math.floor(page) || 1), totalPages)
  const start = (current - 1) * perPage
  return { items: items.slice(start, start + perPage), page: current, totalPages }
}

/** ページ番号の並び。例: 5ページ目/全20ページ → [1, "…", 4, 5, 6, "…", 20] */
export function pageNumbers(current: number, total: number): (number | "…")[] {
  const candidates = [
    1,
    current - 1,
    current,
    current + 1,
    total,
  ]
  const pages = [ ...new Set(candidates.filter((page) => page >= 1 && page <= total)) ].sort((a, b) => a - b)

  const result: (number | "…")[] = []
  pages.forEach((page, index) => {
    const previous = pages[index - 1]
    // 1ページだけ飛ぶなら「…」にせず、その番号を出す
    if (previous !== undefined && page - previous === 2) result.push(previous + 1)
    else if (previous !== undefined && page - previous > 2) result.push("…")
    result.push(page)
  })
  return result
}

/** 月のカレンダーのマス目。日曜始まりの週ごとに、前後の月の日も含めて並べる */
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
    })
  )
}

/** その日に開かれているイベント。年月しか分からないイベントは含めない */
export function eventsOnDay(events: CalendarEvent[], dateKey: string): CalendarEvent[] {
  return events.filter(
    (event) => event.startDate.length === 10 && event.startDate <= dateKey && (event.endDate ?? event.startDate) >= dateKey
  )
}

/** その月に少しでもかかっているイベント。年月しか分からないイベントも含める */
export function eventsInMonth(events: CalendarEvent[], monthKey: string): CalendarEvent[] {
  return events.filter(
    (event) => toMonthKey(event.startDate) <= monthKey && toMonthKey(event.endDate ?? event.startDate) >= monthKey
  )
}

/** 一覧の日付欄に出す月・日・曜日 */
export function toDateBadge(value: string): DateBadge {
  const parts = parseDate(value)
  if (parts.day === undefined) return { month: parts.month }
  return { month: parts.month, day: parts.day, weekdayJa: WEEKDAYS_JA[weekdayOf(parts)] }
}

/** "2026-10" → "2026年10月" */
export function formatMonthJa(monthKey: string): string {
  const { year, month } = parseDate(monthKey)
  return `${year}年${month}月`
}

/** "2026-10" → "October 2026" */
export function formatMonthEn(monthKey: string): string {
  const { year, month } = parseDate(monthKey)
  return `${MONTHS_EN[month - 1]} ${year}`
}

/** "2026-09-16" → "2026年9月16日" */
export function formatDayJa(value: string): string {
  const { year, month, day } = parseDate(value)
  return `${year}年${month}月${day}日`
}

/** "2026-09-16" → "September 16, 2026" */
export function formatDayEn(value: string): string {
  const { year, month, day } = parseDate(value)
  return `${MONTHS_EN[month - 1]} ${day}, ${year}`
}

/** 例: "2026年10月30日（金）〜11月1日（日）"。年月だけなら "2027年3月" */
export function formatDateRangeJa(event: CalendarEvent): string {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthJa(event.startDate)

  const startText = `${start.year}年${start.month}月${start.day}日（${WEEKDAYS_JA[weekdayOf(start)]}）`
  if (!event.endDate || event.endDate === event.startDate) return startText

  const end = parseDate(event.endDate)
  const endYear = end.year === start.year ? "" : `${end.year}年`
  if (end.day === undefined) return `${startText}〜${endYear}${end.month}月`
  return `${startText}〜${endYear}${end.month}月${end.day}日（${WEEKDAYS_JA[weekdayOf(end)]}）`
}

/** 例: "Fri, Oct 30 – Sun, Nov 1, 2026"。年月だけなら "March 2027" */
export function formatDateRangeEn(event: CalendarEvent): string {
  const start = parseDate(event.startDate)
  if (start.day === undefined) return formatMonthEn(event.startDate)

  const dayText = (parts: DateParts) =>
    `${WEEKDAYS_EN[weekdayOf(parts)]}, ${MONTHS_EN[parts.month - 1].slice(0, 3)} ${parts.day}`
  if (!event.endDate || event.endDate === event.startDate) return `${dayText(start)}, ${start.year}`

  const end = parseDate(event.endDate)
  if (end.day === undefined) return `${dayText(start)}, ${start.year} – ${formatMonthEn(event.endDate)}`
  if (end.year === start.year) return `${dayText(start)} – ${dayText(end)}, ${end.year}`
  return `${dayText(start)}, ${start.year} – ${dayText(end)}, ${end.year}`
}

/** "https://www.example.com/a" → "example.com"。出典の表示に使う */
export function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

/** 何も指定されていないときの画面の状態 */
export function defaultState(month: string): CalendarState {
  return { view: "calendar", keyword: "", category: "all", period: "upcoming", page: 1, month, day: null }
}

/** URL のクエリから画面の状態を読む。おかしな値は初期値にする */
export function parseState(search: string, month: string): CalendarState {
  const params = new URLSearchParams(search)
  const defaults = defaultState(month)
  const category = params.get("category") as EventCategory | null
  const period = params.get("period")
  const monthParam = params.get("month")
  const dayParam = params.get("day")
  const resolvedMonth = monthParam && /^\d{4}-\d{2}$/.test(monthParam) ? monthParam : defaults.month

  return {
    view: params.get("view") === "list" ? "list" : defaults.view,
    keyword: params.get("q") ?? "",
    category: category && CATEGORY_ORDER.includes(category) ? category : "all",
    period: period === "past" || period === "all" ? period : defaults.period,
    page: Math.max(1, Number.parseInt(params.get("page") ?? "1", 10) || 1),
    month: resolvedMonth,
    day: dayParam && /^\d{4}-\d{2}-\d{2}$/.test(dayParam) && toMonthKey(dayParam) === resolvedMonth ? dayParam : null,
  }
}

/** 画面の状態を URL のクエリにする。初期値のままの項目は書かない */
export function serializeState(state: CalendarState, month: string): string {
  const defaults = defaultState(month)
  const params = new URLSearchParams()
  if (state.view !== defaults.view) params.set("view", state.view)
  if (state.keyword) params.set("q", state.keyword)
  if (state.category !== "all") params.set("category", state.category)
  if (state.view === "list" && state.period !== defaults.period) params.set("period", state.period)
  if (state.view === "list" && state.page > 1) params.set("page", String(state.page))
  if (state.view === "calendar" && state.month !== defaults.month) params.set("month", state.month)
  if (state.view === "calendar" && state.day) params.set("day", state.day)

  const query = params.toString()
  return query ? `?${query}` : ""
}
