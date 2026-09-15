import type { CalendarEvent, EventCategory } from "../_data/model"

const WEEKDAYS_JA = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
]
const WEEKDAYS_EN = [
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

type DateParts = { year: number; month: number; day?: number };

export type EventFilter = {
  category: EventCategory | "all";
  /** null のときは終わったイベントも含める */
  today: string | null;
};

export type MonthGroup = { monthKey: string; events: CalendarEvent[] };

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

function weekdayOf(parts: DateParts): number {
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()
}

/** 閲覧者の端末の日付を "YYYY-MM-DD" にする */
export function toDateKey(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/** "2026-10-30" → "2026-10" */
export function toMonthKey(value: string): string {
  return value.slice(0, 7)
}

/** まだ終わっていないか。年月しか分からないイベントは、その月のあいだは終わっていない扱い */
export function isUpcoming(event: CalendarEvent, today: string): boolean {
  const end = event.endDate ?? event.startDate
  if (end.length === 7) return end >= toMonthKey(today)
  return end >= today
}

/** 種類と日付で絞り込み、開始日の順に並べる */
export function filterEvents(events: CalendarEvent[], filter: EventFilter): CalendarEvent[] {
  return [ ...events ]
    .sort((a, b) => compareText(a.startDate, b.startDate) || compareText(a.titleJa, b.titleJa))
    .filter((event) => filter.category === "all" || event.category === filter.category)
    .filter((event) => filter.today === null || isUpcoming(event, filter.today))
}

/** 開始日の順に並んだイベントを、開始月ごとにまとめる */
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
