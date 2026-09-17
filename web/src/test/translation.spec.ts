import { describe, expect, it } from 'vitest'
import { isPublished, localizePath, publishedLocales } from '$lib/i18n/translation'

describe('isPublished', () => {
  describe('正常系', () => {
    it.each([
      ['既定の言語の場合、訳していなくても true になること', '/calendar/', 'ja', [], true],
      ['英語で訳していない場合、false になること', '/calendar/', 'en', [], false],
      ['英語で訳したパスと一致する場合、true になること', '/calendar/', 'en', ['/calendar/'], true],
      [
        '動的なページの親を指定した場合、子のページが true になること',
        '/calendar/2026-01-01-abc/',
        'en',
        ['/calendar/*'],
        true,
      ],
    ] as const)('%s', (_, path, locale, translatedPaths, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = isPublished(path, locale, translatedPaths)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it.each([
      ['動的なページの親を指定した場合、親自身は false になること', '/calendar/', ['/calendar/*']],
      ['子のページでも完全一致の指定の場合、false になること', '/calendar/abc/', ['/calendar/']],
    ] as const)('%s', (_, path, translatedPaths) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = isPublished(path, 'en', translatedPaths)
      // #endregion

      // #region Then
      expect(result).toBe(false)
      // #endregion
    })
  })
})

describe('publishedLocales', () => {
  describe('正常系', () => {
    it.each([
      ['訳したページの場合、既定の言語を先頭に両方の言語が返ること', ['/privacy/'], ['ja', 'en']],
      ['訳していないページの場合、既定の言語だけが返ること', [], ['ja']],
    ] as const)('%s', (_, translatedPaths, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = publishedLocales('/privacy/', translatedPaths)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })
  })
})

describe('localizePath', () => {
  describe('正常系', () => {
    it.each([
      ['既定の言語の場合、パスが変わらないこと', 'ja', '/calendar/', '/calendar/'],
      ['英語の場合、/en が先頭に付くこと', 'en', '/calendar/', '/en/calendar/'],
    ] as const)('%s', (_, locale, path, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = localizePath(path, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('境界値', () => {
    it('英語でトップの場合、/en/ になること', () => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = localizePath('/', 'en')
      // #endregion

      // #region Then
      expect(result).toBe('/en/')
      // #endregion
    })
  })
})
