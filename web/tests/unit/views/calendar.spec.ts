import { describe, expect, it } from 'vitest'
import type { CalendarEvent, EventCategory } from '$views/page/calendar/_data/model'
import {
  buildMonthGrid,
  defaultState,
  eventsInMonth,
  eventsOnDay,
  filterEvents,
  formatDateRangeEnglish,
  formatDateRangeJapanese,
  groupByMonth,
  isEveryCategory,
  isUpcoming,
  matchesKeyword,
  paginate,
  parseState,
  serializeState,
  shiftMonth,
  toDateKey,
  type CalendarState,
} from '$views/page/calendar/_lib/calendar'

/** テスト用のイベントを作る。指定しない項目は適当な値で埋める */
function makeEvent(overrides: Partial<CalendarEvent>): CalendarEvent {
  return {
    id: 'test',
    titleJapanese: 'テスト大会',
    titleEnglish: 'Test Championships',
    category: 'national',
    startDate: '2026-10-30',
    status: 'confirmed',
    sourceUrl: 'https://example.com',
    ...overrides,
  }
}

const titles = (events: CalendarEvent[]) => events.map((event) => event.titleJapanese)

describe('toDateKey', () => {
  describe('正常系', () => {
    it('月と日が1桁の場合、2桁にそろうこと', () => {
      // #region Given
      const date = new Date(2026, 8, 6)
      // #endregion

      // #region When
      const result = toDateKey(date)
      // #endregion

      // #region Then
      expect(result).toBe('2026-09-06')
      // #endregion
    })
  })
})

describe('shiftMonth', () => {
  describe('境界値', () => {
    it.each([
      ['12月から1か月進める場合、年をまたいで翌年1月になること', '2026-12', 1, '2027-01'],
      ['1月から1か月戻す場合、年をまたいで前年12月になること', '2026-01', -1, '2025-12'],
    ])('%s', (_, monthKey, delta, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = shiftMonth(monthKey, delta)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('isUpcoming', () => {
  const TODAY = '2026-09-16'

  describe('正常系', () => {
    it.each([
      [
        '終了日が今日より前の場合、終わっている扱い（false）になること',
        { startDate: '2026-09-10', endDate: '2026-09-15' },
        false,
      ],
      [
        '終了日がなく開始日が今日より前の場合、終わっている扱い（false）になること',
        { startDate: '2026-09-15' },
        false,
      ],
      [
        '年月だけで先月の場合、終わっている扱い（false）になること',
        { startDate: '2026-08' },
        false,
      ],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = isUpcoming(event, TODAY)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it.each([
      [
        '終了日が今日の場合、終わっていない扱い（true）になること',
        { startDate: '2026-09-14', endDate: '2026-09-16' },
        true,
      ],
      [
        '年月だけで今月の場合、終わっていない扱い（true）になること',
        { startDate: '2026-09' },
        true,
      ],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = isUpcoming(event, TODAY)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('matchesKeyword', () => {
  const event = makeEvent({
    titleJapanese: '第79回全日本新体操選手権大会',
    titleEnglish: '79th All Japan Rhythmic Gymnastics Championships',
    venueJapanese: '高崎アリーナ（群馬県）',
    venueEnglish: 'Takasaki Arena',
  })

  describe('正常系', () => {
    it.each([
      ['大会名の一部を指定した場合、当てはまること（true）', '全日本', true],
      ['空白で区切った語をすべて含む場合、当てはまること（true）', '全日本 高崎', true],
      ['空白で区切った語の一つでも含まない場合、外れること（false）', '全日本 青森', false],
      ['種類名を指定した場合、当てはまること（true）', '全国大会', true],
    ])('%s', (_, keyword, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = matchesKeyword(event, keyword)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      [
        '英語を大文字小文字が違う形で指定した場合、区別せず当てはまること（true）',
        'takasaki',
        true,
      ],
      ['全角の英数字で指定した場合、当てはまること（true）', 'ＡＬＬ　ＪＡＰＡＮ', true],
    ])('%s', (_, keyword, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = matchesKeyword(event, keyword)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('キーワードが空の場合、当てはまること（true）', () => {
      // #region Given
      const keyword = ''
      // #endregion

      // #region When
      const result = matchesKeyword(event, keyword)
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })
  })
})

describe('isEveryCategory', () => {
  describe('正常系', () => {
    it.each<[string, EventCategory[], boolean]>([
      [
        '種類を全部選んだ場合、true になること',
        ['national', 'regional', 'prefectural', 'performance', 'workshop', 'international'],
        true,
      ],
      ['種類を一部だけ選んだ場合、false になること', ['national', 'regional'], false],
    ])('%s', (_, categories, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = isEveryCategory(categories)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('種類を何も選んでいない場合、true になること', () => {
      // #region Given
      const categories: EventCategory[] = []
      // #endregion

      // #region When
      const result = isEveryCategory(categories)
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })
  })
})

describe('filterEvents', () => {
  const events = [
    makeEvent({ titleJapanese: 'C', category: 'workshop', startDate: '2026-11-03' }),
    makeEvent({ titleJapanese: 'A', category: 'national', startDate: '2026-09-01' }),
    makeEvent({ titleJapanese: 'B', category: 'national', startDate: '2026-10-30' }),
    makeEvent({ titleJapanese: 'Z', category: 'national', startDate: '2025-05-01' }),
  ]
  const base = { categories: [], keyword: '', today: '2026-09-16' }

  describe('正常系', () => {
    it.each([
      ['期間が「これから」の場合、終わっていないものが古い順に並ぶこと', 'upcoming', ['B', 'C']],
      ['期間が「終わった」の場合、終わったものが新しい順に並ぶこと', 'past', ['A', 'Z']],
      ['期間が「すべて」の場合、すべてが古い順に並ぶこと', 'all', ['Z', 'A', 'B', 'C']],
    ] as const)('%s', (_, period, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = filterEvents(events, { ...base, period })
      // #endregion

      // #region Then
      expect(titles(result)).toEqual(expected)
      // #endregion
    })

    it('種類を複数指定した場合、いずれかの種類に当てはまるものだけに絞り込まれること', () => {
      // #region Given
      const filter = {
        ...base,
        categories: ['workshop', 'international'] as EventCategory[],
        period: 'all' as const,
      }
      // #endregion

      // #region When
      const result = filterEvents(events, filter)
      // #endregion

      // #region Then
      expect(titles(result)).toEqual(['C'])
      // #endregion
    })
  })
})

describe('groupByMonth', () => {
  describe('正常系', () => {
    it('開始月が同じイベントが続く場合、そのかたまりごとにまとまること', () => {
      // #region Given
      const events = [
        makeEvent({ titleJapanese: 'A', startDate: '2026-10-01' }),
        makeEvent({ titleJapanese: 'B', startDate: '2026-10-30' }),
        makeEvent({ titleJapanese: 'C', startDate: '2026-11' }),
      ]
      // #endregion

      // #region When
      const result = groupByMonth(events)
      // #endregion

      // #region Then
      expect(result.map((group) => [group.monthKey, group.events.length])).toEqual([
        ['2026-10', 2],
        ['2026-11', 1],
      ])
      // #endregion
    })
  })
})

describe('paginate', () => {
  const items = Array.from({ length: 45 }, (_, index) => index)

  describe('正常系', () => {
    it.each([
      ['1ページ目を指定した場合、1ページ目の先頭から返ること', 1, 1, 0],
      ['最後のページを指定した場合、最後のページの先頭から返ること', 3, 3, 40],
    ])('%s', (_, page, expectedPage, expectedFirst) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = paginate(items, page, 20)
      // #endregion

      // #region Then
      expect(result.page).toBe(expectedPage)
      expect(result.totalPages).toBe(3)
      expect(result.items[0]).toBe(expectedFirst)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      ['範囲より大きいページを指定した場合、最後のページに寄せられること', 99, 3, 40],
      ['0以下のページを指定した場合、1ページ目に寄せられること', 0, 1, 0],
    ])('%s', (_, page, expectedPage, expectedFirst) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = paginate(items, page, 20)
      // #endregion

      // #region Then
      expect(result.page).toBe(expectedPage)
      expect(result.totalPages).toBe(3)
      expect(result.items[0]).toBe(expectedFirst)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('項目が空の場合、1ページとして扱われること', () => {
      // #region Given
      const emptyItems: number[] = []
      // #endregion

      // #region When
      const result = paginate(emptyItems, 1, 20)
      // #endregion

      // #region Then
      expect(result).toEqual({ items: [], page: 1, totalPages: 1 })
      // #endregion
    })
  })
})

describe('buildMonthGrid', () => {
  describe('正常系', () => {
    it('月を指定した場合、日曜始まりで前後の月の日を含めて週ごとに並ぶこと', () => {
      // #region Given
      const monthKey = '2026-09'
      // #endregion

      // #region When
      const weeks = buildMonthGrid(monthKey)
      // #endregion

      // #region Then
      expect(weeks).toHaveLength(5)
      expect(weeks[0][0]).toEqual({ dateKey: '2026-08-30', day: 30, weekday: 0, inMonth: false })
      expect(weeks[0][2]).toEqual({ dateKey: '2026-09-01', day: 1, weekday: 2, inMonth: true })
      expect(weeks[4][6]).toEqual({ dateKey: '2026-10-03', day: 3, weekday: 6, inMonth: false })
      // #endregion
    })
  })
})

/** eventsOnDay / eventsInMonth で共通に使うイベント */
const dayAndMonthEvents = [
  makeEvent({ titleJapanese: '期間', startDate: '2026-10-30', endDate: '2026-11-01' }),
  makeEvent({ titleJapanese: '1日', startDate: '2026-11-15' }),
  makeEvent({ titleJapanese: '年月だけ', startDate: '2026-11' }),
]

describe('eventsOnDay', () => {
  describe('正常系', () => {
    it('期間中の日を指定した場合、期間のイベントが入ること', () => {
      // #region Given
      const dateKey = '2026-10-31'
      // #endregion

      // #region When
      const result = eventsOnDay(dayAndMonthEvents, dateKey)
      // #endregion

      // #region Then
      expect(titles(result)).toEqual(['期間'])
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('年月だけのイベントがある月の日を指定した場合、年月だけのイベントは入らないこと', () => {
      // #region Given
      const dateKey = '2026-11-01'
      // #endregion

      // #region When
      const result = eventsOnDay(dayAndMonthEvents, dateKey)
      // #endregion

      // #region Then
      expect(titles(result)).toEqual(['期間'])
      // #endregion
    })
  })
})

describe('eventsInMonth', () => {
  describe('正常系', () => {
    it('月を指定した場合、その月にかかるイベントが年月だけのものも含めて入ること', () => {
      // #region Given
      const monthKey = '2026-11'
      // #endregion

      // #region When
      const result = eventsInMonth(dayAndMonthEvents, monthKey)
      // #endregion

      // #region Then
      expect(titles(result)).toEqual(['期間', '1日', '年月だけ'])
      // #endregion
    })
  })
})

describe('serializeState', () => {
  describe('正常系', () => {
    it('種類を複数選んだ場合、まとめて書き出され、読み戻すと同じ状態になること', () => {
      // #region Given
      const state: CalendarState = {
        ...defaultState('2026-09'),
        categories: ['national', 'regional'],
      }
      // #endregion

      // #region When
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region Then
      expect(query).toBe('?category=national%2Cregional')
      expect(parseState(query, '2026-09')).toEqual(state)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('初期値のままの場合、クエリが空になること', () => {
      // #region Given
      const state = defaultState('2026-09')
      // #endregion

      // #region When
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region Then
      expect(query).toBe('')
      // #endregion
    })
  })
})

describe('parseState', () => {
  describe('正常系', () => {
    it.each<[string, CalendarState]>([
      [
        '表示・キーワード・種類・期間・ページを書き出した場合、読み戻すと同じ状態になること',
        {
          ...defaultState('2026-09'),
          view: 'list',
          keyword: '全日本',
          categories: ['national'],
          period: 'past',
          page: 3,
        },
      ],
      [
        'カレンダーの月と日を書き出した場合、読み戻すと同じ状態になること',
        { ...defaultState('2026-09'), month: '2026-11', day: '2026-11-15' },
      ],
    ])('%s', (_, state) => {
      // #region Given
      const query = serializeState(state, '2026-09')
      // #endregion

      // #region When
      const result = parseState(query, '2026-09')
      // #endregion

      // #region Then
      expect(result).toEqual(state)
      // #endregion
    })
  })

  describe('異常系', () => {
    it('おかしな値が渡された場合、初期値になること', () => {
      // #region Given
      const query = '?view=grid&category=unknown&period=later&page=-2&month=2026-1&day=2026-12-01'
      // #endregion

      // #region When
      const result = parseState(query, '2026-09')
      // #endregion

      // #region Then
      expect(result).toEqual(defaultState('2026-09'))
      // #endregion
    })
  })
})

describe('formatDateRangeJapanese', () => {
  describe('正常系', () => {
    it.each([
      [
        '1日だけの場合、その日付と曜日になること',
        { startDate: '2026-10-30' },
        '2026年10月30日（金）',
      ],
      ['年月だけの場合、年と月だけになること', { startDate: '2027-03' }, '2027年3月'],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = formatDateRangeJapanese(event)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
  describe('境界値', () => {
    it.each([
      [
        '月をまたぐ場合、月をまたいだ期間の表記になること',
        { startDate: '2026-10-30', endDate: '2026-11-01' },
        '2026年10月30日（金）〜11月1日（日）',
      ],
      [
        '年をまたぐ場合、始まりと終わりの両方に年が付いた期間の表記になること',
        { startDate: '2026-12-30', endDate: '2027-01-01' },
        '2026年12月30日（水）〜2027年1月1日（金）',
      ],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = formatDateRangeJapanese(event)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('formatDateRangeEnglish', () => {
  describe('正常系', () => {
    it.each([
      ['1日だけの場合、その日付と曜日になること', { startDate: '2026-10-30' }, 'Fri, Oct 30, 2026'],
      ['年月だけの場合、年と月だけになること', { startDate: '2027-03' }, 'March 2027'],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = formatDateRangeEnglish(event)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
  describe('境界値', () => {
    it.each([
      [
        '月をまたぐ場合、月をまたいだ期間の表記になること',
        { startDate: '2026-10-30', endDate: '2026-11-01' },
        'Fri, Oct 30 – Sun, Nov 1, 2026',
      ],
      [
        '年をまたぐ場合、始まりと終わりの両方に年が付いた期間の表記になること',
        { startDate: '2026-12-30', endDate: '2027-01-01' },
        'Wed, Dec 30, 2026 – Fri, Jan 1, 2027',
      ],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const result = formatDateRangeEnglish(event)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
