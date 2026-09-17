import { describe, expect, it } from 'vitest'
import {
  buildMonthGrid,
  formatDateRange,
  formatDateRangeEnglish,
  formatDateRangeJapanese,
  formatDay,
  formatMonth,
  shiftMonth,
  toDateBadge,
  toDateKey,
} from '@entities/calendarEvent/lib/date'
import { makeEvent } from './fixtures'

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

describe('toDateBadge', () => {
  describe('正常系', () => {
    it.each([
      [
        '日付まで分かる場合、月・日・曜日になること',
        '2026-10-30',
        { month: 10, day: 30, weekday: 5 },
      ],
      ['年月しか分からない場合、月だけになること', '2027-03', { month: 3 }],
    ])('%s', (_, value, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = toDateBadge(value)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
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

describe('formatDateRange', () => {
  describe('正常系', () => {
    it.each([
      ['日本語の場合、日本語の表記になること', 'ja', '2026年10月30日（金）〜11月1日（日）'],
      ['英語の場合、英語の表記になること', 'en', 'Fri, Oct 30 – Sun, Nov 1, 2026'],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      const event = makeEvent({ startDate: '2026-10-30', endDate: '2026-11-01' })
      // #endregion

      // #region When
      const result = formatDateRange(event, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('formatMonth', () => {
  describe('正常系', () => {
    it.each([
      ['日本語の場合、「年・月」の表記になること', 'ja', '2026年10月'],
      ['英語の場合、月の名前と年の表記になること', 'en', 'October 2026'],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      const monthKey = '2026-10'
      // #endregion

      // #region When
      const result = formatMonth(monthKey, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('formatDay', () => {
  describe('正常系', () => {
    it.each([
      ['日本語の場合、「年・月・日」の表記になること', 'ja', '2026年9月16日'],
      ['英語の場合、月の名前・日・年の表記になること', 'en', 'September 16, 2026'],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      const value = '2026-09-16'
      // #endregion

      // #region When
      const result = formatDay(value, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
