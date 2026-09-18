import { describe, expect, it } from 'vitest'
import { isMobileUserAgent } from '@shared/lib/device'

describe('isMobileUserAgent', () => {
  describe('正常系', () => {
    it.each([
      [
        'iPhone の場合、スマホ扱い（true）になること',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
        true,
      ],
      [
        'Android のスマホの場合、スマホ扱い（true）になること',
        'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
        true,
      ],
      [
        'PC（Mac）の場合、PC 扱い（false）になること',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        false,
      ],
      [
        'PC（Windows）の場合、PC 扱い（false）になること',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        false,
      ],
    ] as const)('%s', (_, userAgent, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = isMobileUserAgent(userAgent)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it.each([
      [
        'iPad の場合、画面が広いので PC 扱い（false）になること',
        'Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/604.1',
        false,
      ],
      [
        'Android のタブレットの場合、画面が広いので PC 扱い（false）になること',
        'Mozilla/5.0 (Linux; Android 14; SM-X200) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        false,
      ],
    ] as const)('%s', (_, userAgent, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = isMobileUserAgent(userAgent)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
