import { describe, expect, it } from 'vitest'
import { EventSchedule } from '@entities/calendarEvent'
import type { EventCategorySlug } from '@entities/calendarEvent'
import {
  filterEvents,
  groupByMonth,
  isEveryCategory,
  matchesKeyword,
  paginate,
} from '@features/calendarFilter/lib/filter'
import { makeEvent, titles } from '../../entities/calendarEvent/fixtures'

describe('matchesKeyword', () => {
  const event = makeEvent({
    title: {
      japanese: '第79回全日本新体操選手権大会',
      english: '79th All Japan Rhythmic Gymnastics Championships',
    },
    venue: { name: { japanese: '高崎アリーナ（群馬県）', english: 'Takasaki Arena' } },
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
    it.each<[string, EventCategorySlug[], boolean]>([
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
      const categories: EventCategorySlug[] = []
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
    makeEvent({
      title: { japanese: 'C', english: 'C' },
      category: 'workshop',
      startDate: '2026-11-03',
    }),
    makeEvent({
      title: { japanese: 'A', english: 'A' },
      category: 'national',
      startDate: '2026-09-01',
    }),
    makeEvent({
      title: { japanese: 'B', english: 'B' },
      category: 'national',
      startDate: '2026-10-30',
    }),
    makeEvent({
      title: { japanese: 'Z', english: 'Z' },
      category: 'national',
      startDate: '2025-05-01',
    }),
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
        categories: ['workshop', 'international'] as EventCategorySlug[],
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
        makeEvent({ title: { japanese: 'A', english: 'A' }, startDate: '2026-10-01' }),
        makeEvent({ title: { japanese: 'B', english: 'B' }, startDate: '2026-10-30' }),
        makeEvent({
          title: { japanese: 'C', english: 'C' },
          schedule: EventSchedule.MONTH_ONLY,
          month: '2026-11',
        }),
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
