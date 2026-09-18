import { describe, expect, it } from 'vitest'
import { Weekday } from '@shared/config/date'
import {
  buildMonthGrid,
  formatDay,
  formatMonth,
  shiftMonth,
  toDateBadge,
  toDateKey,
} from '@shared/lib/date'

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
      expect(weeks[0][0]).toEqual({
        dateKey: '2026-08-30',
        day: 30,
        weekday: Weekday.SUNDAY,
        inMonth: false,
      })
      expect(weeks[0][2]).toEqual({
        dateKey: '2026-09-01',
        day: 1,
        weekday: Weekday.TUESDAY,
        inMonth: true,
      })
      expect(weeks[4][6]).toEqual({
        dateKey: '2026-10-03',
        day: 3,
        weekday: Weekday.SATURDAY,
        inMonth: false,
      })
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
        { month: 10, day: 30, weekday: Weekday.FRIDAY },
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
