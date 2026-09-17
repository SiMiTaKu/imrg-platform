import { describe, expect, it } from 'vitest'
import { buildScoreFormula, formatPoint } from '@features/judge'

describe('formatPoint', () => {
  describe('正常系', () => {
    it.each([
      ['日本語で 0.5 の場合、小数 3 桁になること', 0.5, 'ja', '0.500'],
      ['英語で 0.5 の場合、小数 3 桁になること', 0.5, 'en', '0.500'],
      ['日本語で 9.45 の場合、小数 3 桁になること', 9.45, 'ja', '9.450'],
      ['英語で 0 の場合、小数 3 桁になること', 0, 'en', '0.000'],
    ])('%s', (_, value, locale, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = formatPoint(value, locale)
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
        const result = formatPoint(value, 'en')
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
      const result = formatPoint(value, 'ja', 2)
      // #endregion

      // #region Then
      expect(result).toBe('10.00')
      // #endregion
    })
  })
})

describe('buildScoreFormula', () => {
  describe('正常系', () => {
    it('AとBの減点を渡した場合、以前と同じ形の式になること', () => {
      // #region Given
      const pointA = 5.5
      const pointB = 0.3
      // #endregion

      // #region When
      const result = buildScoreFormula(pointA, pointB, 'ja')
      // #endregion

      // #region Then
      expect(result).toBe('10.00　-　( 5.500 + 0.300 )')
      // #endregion
    })
  })
})
