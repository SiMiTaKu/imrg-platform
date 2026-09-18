import { describe, expect, it } from 'vitest'
import {
  formatDateRange,
  formatDateRangeEnglish,
  formatDateRangeJapanese,
} from '@entities/calendarEvent/lib/date'
import { makeEvent } from './fixtures'

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
