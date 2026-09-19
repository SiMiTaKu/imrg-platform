import { describe, expect, it } from 'vitest'
import { EventSchedule } from '@entities/calendarEvent'
import {
  eventsInMonth,
  eventsOnDay,
  hostnameOf,
  isUpcoming,
  localizeEvent,
  monthRangeOf,
} from '@entities/calendarEvent/lib/event'
import { makeEvent, titles } from './fixtures'

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
        { schedule: EventSchedule.MONTH_ONLY, month: '2026-08' },
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
        { schedule: EventSchedule.MONTH_ONLY, month: '2026-09' },
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

/** eventsOnDay / eventsInMonth で共通に使うイベント */
const dayAndMonthEvents = [
  makeEvent({
    title: { ja: '期間', en: '期間' },
    startDate: '2026-10-30',
    endDate: '2026-11-01',
  }),
  makeEvent({ title: { ja: '1日', en: '1日' }, startDate: '2026-11-15' }),
  makeEvent({
    title: { ja: '年月だけ', en: '年月だけ' },
    schedule: EventSchedule.MONTH_ONLY,
    month: '2026-11',
  }),
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

describe('localizeEvent', () => {
  const event = makeEvent({
    title: {
      ja: '全日本新体操選手権大会',
      en: 'All Japan Rhythmic Gymnastics Championships',
    },
    venue: { name: { ja: '高崎アリーナ（群馬県）', en: 'Takasaki Arena' } },
    note: { ja: '日程は仮の発表です。', en: 'The dates are provisional.' },
  })

  describe('正常系', () => {
    it('日本語の場合、日本語の値ともう一方の言語（英語）の大会名になること', () => {
      // #region Given
      const locale = 'ja'
      // #endregion

      // #region When
      const result = localizeEvent(event, locale)
      // #endregion

      // #region Then
      expect(result).toEqual({
        title: '全日本新体操選手権大会',
        alternateTitle: 'All Japan Rhythmic Gymnastics Championships',
        venue: '高崎アリーナ（群馬県）',
        streaming: undefined,
        note: '日程は仮の発表です。',
      })
      // #endregion
    })

    it('英語の場合、英語の値ともう一方の言語（日本語）の大会名になること', () => {
      // #region Given
      const locale = 'en'
      // #endregion

      // #region When
      const result = localizeEvent(event, locale)
      // #endregion

      // #region Then
      expect(result).toEqual({
        title: 'All Japan Rhythmic Gymnastics Championships',
        alternateTitle: '全日本新体操選手権大会',
        venue: 'Takasaki Arena',
        streaming: undefined,
        note: 'The dates are provisional.',
      })
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('英語の会場が無い場合、英語でも日本語の会場になること', () => {
      // #region Given
      const noVenueEnglish = makeEvent({
        venue: { name: { ja: '青森県武道館' } },
      })
      // #endregion

      // #region When
      const result = localizeEvent(noVenueEnglish, 'en')
      // #endregion

      // #region Then
      expect(result.venue).toBe('青森県武道館')
      // #endregion
    })

    it('英語の会場が無く、会場が都道府県名だけの場合、英語の都道府県名になること', () => {
      // #region Given
      const prefectureOnly = makeEvent({
        venue: { name: { ja: '東京都' } },
      })
      // #endregion

      // #region When
      const result = localizeEvent(prefectureOnly, 'en')
      // #endregion

      // #region Then
      expect(result.venue).toBe('Tokyo')
      // #endregion
    })

    it('英語の会場が無く、会場が都道府県名だけの場合でも、日本語では日本語の会場になること', () => {
      // #region Given
      const prefectureOnly = makeEvent({
        venue: { name: { ja: '東京都' } },
      })
      // #endregion

      // #region When
      const result = localizeEvent(prefectureOnly, 'ja')
      // #endregion

      // #region Then
      expect(result.venue).toBe('東京都')
      // #endregion
    })

    it('日本語と英語の大会名が同じ場合、もう一方の言語の大会名が無いこと', () => {
      // #region Given
      const sameTitle = makeEvent({
        title: { ja: 'BLUE TOKYO', en: 'BLUE TOKYO' },
      })
      // #endregion

      // #region When
      const result = localizeEvent(sameTitle, 'en')
      // #endregion

      // #region Then
      expect(result.alternateTitle).toBeUndefined()
      // #endregion
    })
  })
})

describe('monthRangeOf', () => {
  describe('正常系', () => {
    it('イベントの開始月と終了月の最小・最大が範囲になること', () => {
      // #region Given
      const events = [
        makeEvent({ startDate: '2025-05-01' }),
        makeEvent({ startDate: '2027-02-27', endDate: '2027-03-02' }),
      ]
      // #endregion

      // #region When
      const result = monthRangeOf(events, '2026-09-16')
      // #endregion

      // #region Then
      expect(result).toEqual({ first: '2025-05', last: '2027-03' })
      // #endregion
    })
  })

  describe('境界値', () => {
    it('イベントが無い場合、最終確認日の月だけが範囲になること', () => {
      // #region Given
      const events: ReturnType<typeof makeEvent>[] = []
      // #endregion

      // #region When
      const result = monthRangeOf(events, '2026-09-16')
      // #endregion

      // #region Then
      expect(result).toEqual({ first: '2026-09', last: '2026-09' })
      // #endregion
    })
  })
})

describe('hostnameOf', () => {
  describe('正常系', () => {
    it('先頭に www. が付く URL の場合、www. を除いたホスト名になること', () => {
      // #region Given
      const url = 'https://www.example.com/a'
      // #endregion

      // #region When
      const result = hostnameOf(url)
      // #endregion

      // #region Then
      expect(result).toBe('example.com')
      // #endregion
    })
  })

  describe('異常系', () => {
    it('URL として読めない場合、元の文字列になること', () => {
      // #region Given
      const url = 'not a url'
      // #endregion

      // #region When
      const result = hostnameOf(url)
      // #endregion

      // #region Then
      expect(result).toBe('not a url')
      // #endregion
    })
  })
})
