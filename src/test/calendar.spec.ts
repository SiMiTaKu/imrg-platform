import { describe, expect, test } from "@jest/globals"
import type { CalendarEvent } from "$views/page/calendar/_data/model"
import {
  filterEvents,
  formatDateRangeEn,
  formatDateRangeJa,
  groupByMonth,
  isUpcoming,
  toDateKey,
} from "$views/page/calendar/_lib/calendar"

/** テスト用のイベントを作る。指定しない項目は適当な値で埋める */
function makeEvent(overrides: Partial<CalendarEvent>): CalendarEvent {
  return {
    titleJa: "テスト大会",
    titleEn: "Test Championships",
    category: "national",
    startDate: "2026-10-30",
    status: "confirmed",
    sourceUrl: "https://example.com",
    ...overrides,
  }
}

describe("test toDateKey", () => {
  test("月と日を2桁にそろえる", () => {
    expect(toDateKey(new Date(2026, 8, 6))).toBe("2026-09-06")
  })
})

describe("test isUpcoming", () => {
  test.each([
    [ "終了日が今日より前：終わっている", { startDate: "2026-09-10", endDate: "2026-09-15" }, false ],
    [ "終了日が今日：終わっていない", { startDate: "2026-09-14", endDate: "2026-09-16" }, true ],
    [ "終了日がなく開始日が今日より前：終わっている", { startDate: "2026-09-15" }, false ],
    [ "年月だけで今月：終わっていない", { startDate: "2026-09" }, true ],
    [ "年月だけで先月：終わっている", { startDate: "2026-08" }, false ],
  ])("%s", (_, dates, expected) => {
    expect(isUpcoming(makeEvent(dates), "2026-09-16")).toBe(expected)
  })
})

describe("test filterEvents", () => {
  const events = [
    makeEvent({ titleJa: "C", category: "workshop", startDate: "2026-11-03" }), makeEvent({ titleJa: "A", category: "national", startDate: "2026-09-01" }), makeEvent({ titleJa: "B", category: "national", startDate: "2026-10-30" }),
  ]

  test("開始日の順に並べ、終わったイベントを除く", () => {
    const result = filterEvents(events, { category: "all", today: "2026-09-16" })
    expect(result.map((event) => event.titleJa)).toEqual([ "B", "C" ])
  })

  test("today が null なら終わったイベントも含める", () => {
    const result = filterEvents(events, { category: "all", today: null })
    expect(result.map((event) => event.titleJa)).toEqual([ "A", "B", "C" ])
  })

  test("種類で絞り込む", () => {
    const result = filterEvents(events, { category: "national", today: null })
    expect(result.map((event) => event.titleJa)).toEqual([ "A", "B" ])
  })
})

describe("test groupByMonth", () => {
  test("開始月ごとにまとめる", () => {
    const events = [
      makeEvent({ titleJa: "A", startDate: "2026-10-01" }), makeEvent({ titleJa: "B", startDate: "2026-10-30" }), makeEvent({ titleJa: "C", startDate: "2026-11" }),
    ]
    const result = groupByMonth(events)
    expect(result.map((group) => [ group.monthKey, group.events.length ])).toEqual([
      [ "2026-10", 2 ], [ "2026-11", 1 ],
    ])
  })
})

describe("test formatDateRange", () => {
  test.each([
    [
      "1日だけ",
      { startDate: "2026-10-30" },
      "2026年10月30日（金）",
      "Fri, Oct 30, 2026",
    ],
    [
      "月をまたぐ",
      { startDate: "2026-10-30", endDate: "2026-11-01" },
      "2026年10月30日（金）〜11月1日（日）",
      "Fri, Oct 30 – Sun, Nov 1, 2026",
    ],
    [
      "年をまたぐ",
      { startDate: "2026-12-30", endDate: "2027-01-01" },
      "2026年12月30日（水）〜2027年1月1日（金）",
      "Wed, Dec 30, 2026 – Fri, Jan 1, 2027",
    ],
    [
      "年月だけ",
      { startDate: "2027-03" },
      "2027年3月",
      "March 2027",
    ],
  ])("%s", (_, dates, expectedJa, expectedEn) => {
    const event = makeEvent(dates)
    expect(formatDateRangeJa(event)).toBe(expectedJa)
    expect(formatDateRangeEn(event)).toBe(expectedEn)
  })
})
