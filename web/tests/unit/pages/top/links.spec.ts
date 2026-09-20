import { describe, expect, it } from 'vitest'
import { TOP_LINKS } from '@pages/top/config/links'

describe('TOP_LINKS', () => {
  describe('正常系', () => {
    it('リンク先を並べた場合、今のトップと同じページが同じ順に並ぶこと', () => {
      // #region Given
      const expected = [
        '/calendar/',
        '/decorating_apparatus/',
        '/background_music/',
        '/judge/',
        '/oshimitsu/',
      ]
      // #endregion

      // #region When
      const result = TOP_LINKS.map((link) => link.href)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })

    it('文言を取った場合、どのリンクも空でないこと', () => {
      // #region Given
      // 表示中の言語（既定の日本語）で取る
      // #endregion

      // #region When
      const labels = TOP_LINKS.map((link) => link.label())
      // #endregion

      // #region Then
      expect(labels.every((label) => label.length > 0)).toBe(true)
      // #endregion
    })
  })
})
