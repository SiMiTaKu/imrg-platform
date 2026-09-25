import { describe, expect, it } from 'vitest'
import { buildShareUrl } from '@features/judge'

describe('buildShareUrl', () => {
  describe('正常系', () => {
    it('文と URL を渡した場合、Xの投稿画面のリンクになること', () => {
      // #region Given
      const text = 'スティックの演技を採点しました。'
      const url = 'https://imrg.work/judge/'
      // #endregion

      // #region When
      const result = buildShareUrl(text, url)
      // #endregion

      // #region Then
      expect(result).toBe(
        'https://twitter.com/intent/tweet?text=%E3%82%B9%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%81%AE%E6%BC%94%E6%8A%80%E3%82%92%E6%8E%A1%E7%82%B9%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82&url=https%3A%2F%2Fimrg.work%2Fjudge%2F',
      )
      // #endregion
    })

    it('記号を含む文を渡した場合、URL として安全な形にすること', () => {
      // #region Given
      const text = 'a&b=c?d #e'
      const url = 'https://imrg.work/judge/'
      // #endregion

      // #region When
      const result = buildShareUrl(text, url)
      // #endregion

      // #region Then
      expect(result).toContain('text=a%26b%3Dc%3Fd%20%23e')
      // #endregion
    })
  })
})
