import { describe, expect, it } from 'vitest'
import { buildScoreFormula } from '@features/judge'

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
