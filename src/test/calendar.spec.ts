import { describe, expect, test } from 'vitest'
import type { CalendarEvent } from '$views/page/calendar/_data/model'
import {
  buildMonthGrid,
  defaultState,
  eventsInMonth,
  eventsOnDay,
  filterEvents,
  formatDateRangeEn,
  formatDateRangeJa,
  groupByMonth,
  isEveryCategory,
  isUpcoming,
  matchesKeyword,
  pageNumbers,
  paginate,
  parseState,
  serializeState,
  shiftMonth,
  toDateKey,
} from '$views/page/calendar/_lib/calendar'

/** テスト用のイベントを作る。指定しない項目は適当な値で埋める */
function makeEvent(overrides: Partial<CalendarEvent>): CalendarEvent {
  return {
    id: 'test',
    titleJa: 'テスト大会',
    titleEn: 'Test Championships',
    category: 'national',
    startDate: '2026-10-30',
    status: 'confirmed',
    sourceUrl: 'https://example.com',
    ...overrides,
  }
}

const titles = (events: CalendarEvent[]) => events.map((event) => event.titleJa)

describe('test toDateKey', () => {
  test('月と日を2桁にそろえる', () => {
    expect(toDateKey(new Date(2026, 8, 6))).toBe('2026-09-06')
  })
})

describe('test shiftMonth', () => {
  test.each([
    ['年をまたいで進む', '2026-12', 1, '2027-01'],
    ['年をまたいで戻る', '2026-01', -1, '2025-12'],
  ])('%s', (_, monthKey, delta, expected) => {
    expect(shiftMonth(monthKey, delta)).toBe(expected)
  })
})

describe('test isUpcoming', () => {
  test.each([
    ['終了日が今日より前：終わっている', { startDate: '2026-09-10', endDate: '2026-09-15' }, false],
    ['終了日が今日：終わっていない', { startDate: '2026-09-14', endDate: '2026-09-16' }, true],
    ['終了日がなく開始日が今日より前：終わっている', { startDate: '2026-09-15' }, false],
    ['年月だけで今月：終わっていない', { startDate: '2026-09' }, true],
    ['年月だけで先月：終わっている', { startDate: '2026-08' }, false],
  ])('%s', (_, dates, expected) => {
    expect(isUpcoming(makeEvent(dates), '2026-09-16')).toBe(expected)
  })
})

describe('test matchesKeyword', () => {
  const event = makeEvent({
    titleJa: '第79回全日本新体操選手権大会',
    titleEn: '79th All Japan Rhythmic Gymnastics Championships',
    venueJa: '高崎アリーナ（群馬県）',
    venueEn: 'Takasaki Arena',
  })

  test.each([
    ['空のキーワードはすべてに当てはまる', '', true],
    ['大会名の一部', '全日本', true],
    ['空白で区切った語をすべて含む', '全日本 高崎', true],
    ['区切った語の一つでも含まなければ外れる', '全日本 青森', false],
    ['英語は大文字小文字を区別しない', 'takasaki', true],
    ['全角の英数字でも探せる', 'ＡＬＬ　ＪＡＰＡＮ', true],
    ['種類名でも探せる', '全国大会', true],
  ])('%s', (_, keyword, expected) => {
    expect(matchesKeyword(event, keyword)).toBe(expected)
  })
})

describe('test isEveryCategory', () => {
  test.each([
    ['何も選んでいない', [], true],
    [
      '全部選んだ',
      ['national', 'regional', 'prefectural', 'performance', 'workshop', 'international'],
      true,
    ],
    ['一部だけ選んだ', ['national', 'regional'], false],
  ])('%s', (_, categories, expected) => {
    expect(isEveryCategory(categories as never)).toBe(expected)
  })
})

describe('test filterEvents', () => {
  const events = [
    makeEvent({ titleJa: 'C', category: 'workshop', startDate: '2026-11-03' }),
    makeEvent({ titleJa: 'A', category: 'national', startDate: '2026-09-01' }),
    makeEvent({ titleJa: 'B', category: 'national', startDate: '2026-10-30' }),
    makeEvent({ titleJa: 'Z', category: 'national', startDate: '2025-05-01' }),
  ]
  const base = { categories: [], keyword: '', today: '2026-09-16' }

  test('これから：終わっていないものを古い順に並べる', () => {
    expect(titles(filterEvents(events, { ...base, period: 'upcoming' }))).toEqual(['B', 'C'])
  })

  test('終わった：終わったものを新しい順に並べる', () => {
    expect(titles(filterEvents(events, { ...base, period: 'past' }))).toEqual(['A', 'Z'])
  })

  test('すべて：古い順に並べる', () => {
    expect(titles(filterEvents(events, { ...base, period: 'all' }))).toEqual(['Z', 'A', 'B', 'C'])
  })

  test('種類で絞り込む（複数指定できる）', () => {
    const result = filterEvents(events, {
      ...base,
      categories: ['workshop', 'international'],
      period: 'all',
    })
    expect(titles(result)).toEqual(['C'])
  })
})

describe('test groupByMonth', () => {
  test('開始月が続くかたまりごとにまとめる', () => {
    const events = [
      makeEvent({ titleJa: 'A', startDate: '2026-10-01' }),
      makeEvent({ titleJa: 'B', startDate: '2026-10-30' }),
      makeEvent({ titleJa: 'C', startDate: '2026-11' }),
    ]
    const result = groupByMonth(events)
    expect(result.map((group) => [group.monthKey, group.events.length])).toEqual([
      ['2026-10', 2],
      ['2026-11', 1],
    ])
  })
})

describe('test paginate', () => {
  const items = Array.from({ length: 45 }, (_, index) => index)

  test.each([
    ['1ページ目', 1, 1, 0],
    ['最後のページ', 3, 3, 40],
    ['範囲より大きいページは最後に寄せる', 99, 3, 40],
    ['0以下のページは1ページ目に寄せる', 0, 1, 0],
  ])('%s', (_, page, expectedPage, expectedFirst) => {
    const result = paginate(items, page, 20)
    expect(result.page).toBe(expectedPage)
    expect(result.totalPages).toBe(3)
    expect(result.items[0]).toBe(expectedFirst)
  })

  test('空のときも1ページとして扱う', () => {
    expect(paginate([], 1, 20)).toEqual({ items: [], page: 1, totalPages: 1 })
  })
})

describe('test pageNumbers', () => {
  test.each([
    ['ページが少なければすべて出す', 1, 3, [1, 2, 3]],
    ['離れたページは「…」でまとめる', 5, 20, [1, '…', 4, 5, 6, '…', 20]],
    ['1ページだけ飛ぶならその番号を出す', 4, 7, [1, 2, 3, 4, 5, 6, 7]],
    ['先頭にいるとき', 1, 10, [1, 2, '…', 10]],
  ])('%s', (_, current, total, expected) => {
    expect(pageNumbers(current, total)).toEqual(expected)
  })
})

describe('test buildMonthGrid', () => {
  test('日曜始まりで、前後の月の日を含めて週ごとに並べる', () => {
    const weeks = buildMonthGrid('2026-09')
    expect(weeks).toHaveLength(5)
    expect(weeks[0][0]).toEqual({ dateKey: '2026-08-30', day: 30, weekday: 0, inMonth: false })
    expect(weeks[0][2]).toEqual({ dateKey: '2026-09-01', day: 1, weekday: 2, inMonth: true })
    expect(weeks[4][6]).toEqual({ dateKey: '2026-10-03', day: 3, weekday: 6, inMonth: false })
  })
})

describe('test eventsOnDay / eventsInMonth', () => {
  const events = [
    makeEvent({ titleJa: '期間', startDate: '2026-10-30', endDate: '2026-11-01' }),
    makeEvent({ titleJa: '1日', startDate: '2026-11-15' }),
    makeEvent({ titleJa: '年月だけ', startDate: '2026-11' }),
  ]

  test('期間中の日には期間のイベントが入る', () => {
    expect(titles(eventsOnDay(events, '2026-10-31'))).toEqual(['期間'])
  })

  test('年月だけのイベントは日には入らない', () => {
    expect(titles(eventsOnDay(events, '2026-11-01'))).toEqual(['期間'])
  })

  test('月にかかるイベントは、年月だけのものも含める', () => {
    expect(titles(eventsInMonth(events, '2026-11'))).toEqual(['期間', '1日', '年月だけ'])
  })
})

describe('test parseState / serializeState', () => {
  test('初期値のままならクエリは空', () => {
    expect(serializeState(defaultState('2026-09'), '2026-09')).toBe('')
  })

  test('書き出した状態を読み戻すと同じになる', () => {
    const state = {
      ...defaultState('2026-09'),
      view: 'list' as const,
      keyword: '全日本',
      categories: ['national' as const],
      period: 'past' as const,
      page: 3,
    }
    const query = serializeState(state, '2026-09')
    expect(parseState(query, '2026-09')).toEqual(state)
  })

  test('種類は複数まとめて読み書きできる', () => {
    const state = {
      ...defaultState('2026-09'),
      categories: ['national' as const, 'regional' as const],
    }
    expect(serializeState(state, '2026-09')).toBe('?category=national%2Cregional')
    expect(parseState(serializeState(state, '2026-09'), '2026-09')).toEqual(state)
  })

  test('カレンダーの月と日を読み戻せる', () => {
    const state = { ...defaultState('2026-09'), month: '2026-11', day: '2026-11-15' }
    expect(parseState(serializeState(state, '2026-09'), '2026-09')).toEqual(state)
  })

  test('おかしな値は初期値にする', () => {
    const result = parseState(
      '?view=grid&category=unknown&period=later&page=-2&month=2026-1&day=2026-12-01',
      '2026-09',
    )
    expect(result).toEqual(defaultState('2026-09'))
  })
})

describe('test formatDateRange', () => {
  test.each([
    ['1日だけ', { startDate: '2026-10-30' }, '2026年10月30日（金）', 'Fri, Oct 30, 2026'],
    [
      '月をまたぐ',
      { startDate: '2026-10-30', endDate: '2026-11-01' },
      '2026年10月30日（金）〜11月1日（日）',
      'Fri, Oct 30 – Sun, Nov 1, 2026',
    ],
    [
      '年をまたぐ',
      { startDate: '2026-12-30', endDate: '2027-01-01' },
      '2026年12月30日（水）〜2027年1月1日（金）',
      'Wed, Dec 30, 2026 – Fri, Jan 1, 2027',
    ],
    ['年月だけ', { startDate: '2027-03' }, '2027年3月', 'March 2027'],
  ])('%s', (_, dates, expectedJa, expectedEn) => {
    const event = makeEvent(dates)
    expect(formatDateRangeJa(event)).toBe(expectedJa)
    expect(formatDateRangeEn(event)).toBe(expectedEn)
  })
})
