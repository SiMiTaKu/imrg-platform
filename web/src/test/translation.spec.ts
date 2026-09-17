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
    ] as const)('%s', (_, path, locale, translated, expected) => {
      expect(isPublished(path, locale, translated)).toBe(expected)
    })
  })

  describe('境界値', () => {
    it.each([
      ['動的なページの親を指定した場合、親自身は含まれないこと', '/calendar/', ['/calendar/*']],
      ['前方一致では判定しないこと', '/calendar/abc/', ['/calendar/']],
    ] as const)('%s', (_, path, translated) => {
      expect(isPublished(path, 'en', translated)).toBe(false)
    })
  })
})

describe('publishedLocales', () => {
  it('訳したページの場合、既定の言語を先頭に両方の言語が返ること', () => {
    expect(publishedLocales('/privacy/', ['/privacy/'])).toEqual(['ja', 'en'])
  })

  it('訳していないページの場合、既定の言語だけが返ること', () => {
    expect(publishedLocales('/privacy/', [])).toEqual(['ja'])
  })
})

describe('localizePath', () => {
  it.each([
    ['既定の言語の場合、パスが変わらないこと', 'ja', '/calendar/', '/calendar/'],
    ['英語の場合、/en が先頭に付くこと', 'en', '/calendar/', '/en/calendar/'],
    ['英語のトップの場合、/en/ になること', 'en', '/', '/en/'],
  ] as const)('%s', (_, locale, path, expected) => {
    expect(localizePath(path, locale)).toBe(expected)
  })
})
