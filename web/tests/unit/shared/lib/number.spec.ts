import { describe, expect, it } from 'vitest'
import { formatNumber } from '@shared/lib/number'

describe('formatNumber', () => {
  describe('正常系', () => {
    it.each([
      ['日本語で 0.5 の場合、小数 3 桁になること', 0.5, 'ja', '0.500'],
      ['英語で 0.5 の場合、小数 3 桁になること', 0.5, 'en', '0.500'],
      ['日本語で 9.45 の場合、小数 3 桁になること', 9.45, 'ja', '9.450'],
      ['英語で 0 の場合、小数 3 桁になること', 0, 'en', '0.000'],
    ] as const)('%s', (_, value, locale, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = formatNumber(value, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })

    it.each([0.8999999999999999, 4.95, 8.950000000000001, 0.15000000000000002, 1234.5])(
      '値が %s の場合、以前の toFixed(3) と同じ文字列になること',
      (value) => {
        // #region Given
        const expected = value.toFixed(3)
        // #endregion

        // #region When
        const result = formatNumber(value, 'en')
        // #endregion

        // #region Then
        expect(result).toBe(expected)
        // #endregion
      },
    )

    it('桁数を 2 にした場合、小数 2 桁になること', () => {
      // #region Given
      const value = 10
      // #endregion

      // #region When
      const result = formatNumber(value, 'ja', 2)
      // #endregion

      // #region Then
      expect(result).toBe('10.00')
      // #endregion
    })
  })
})
