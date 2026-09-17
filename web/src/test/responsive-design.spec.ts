import { describe, expect, it } from 'vitest'
import {
  designOfPC,
  designOfSP,
  getResponsiveDesign,
  type ResponsiveDesign,
} from '$lib/common/responsive-design'

describe('getResponsiveDesign', () => {
  describe('境界値', () => {
    it.each<[string, number, ResponsiveDesign]>([
      ['幅が500以下の場合、SP のデザインになること', 500, designOfSP],
      ['幅が500より大きい場合、PC のデザインになること', 501, designOfPC],
    ])('%s', (_, width, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = getResponsiveDesign(width)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
