import { describe, expect, it } from 'vitest'
import { buildSitemapXml, toAbsoluteUrl, withTrailingSlash } from '$lib/common/sitemap'

describe('withTrailingSlash', () => {
  describe('正常系', () => {
    it.each([
      ['末尾にスラッシュが無い場合、末尾にスラッシュが付くこと', '/calendar', '/calendar/'],
      ['末尾にスラッシュがある場合、そのままになること', '/calendar/', '/calendar/'],
      ['トップの場合、そのままになること', '/', '/'],
    ])('%s', (_, path, expected) => {
      // #region Given / When
      const result = withTrailingSlash(path)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('先頭にスラッシュが無い場合、先頭と末尾にスラッシュが付くこと', () => {
      // #region Given
      const path = 'calendar'
      // #endregion

      // #region When
      const result = withTrailingSlash(path)
      // #endregion

      // #region Then
      expect(result).toBe('/calendar/')
      // #endregion
    })
  })
})

describe('toAbsoluteUrl', () => {
  describe('正常系', () => {
    it.each([
      ['baseUrl の末尾にスラッシュが無い場合、そのままつながること', 'https://imrg.work'],
      ['baseUrl の末尾にスラッシュがある場合、スラッシュが重ならないこと', 'https://imrg.work/'],
    ])('%s', (_, baseUrl) => {
      // #region Given / When
      const result = toAbsoluteUrl(baseUrl, '/calendar')
      // #endregion

      // #region Then
      expect(result).toBe('https://imrg.work/calendar/')
      // #endregion
    })
  })
})

describe('buildSitemapXml', () => {
  const BASE_URL = 'https://imrg.work'

  describe('正常系', () => {
    it('最終更新日を渡した場合、lastmod が出力されること', () => {
      // #region Given
      const entries = [{ path: '/calendar', lastmod: '2026-09-16' }]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml).toContain('<lastmod>2026-09-16</lastmod>')
      // #endregion
    })

    it.each([
      ['優先度を渡した場合、小数1桁で出力されること', 1, '<priority>1.0</priority>'],
      ['優先度を省いた場合、0.5 が出力されること', undefined, '<priority>0.5</priority>'],
    ])('%s', (_, priority, expected) => {
      // #region Given
      const entries = [{ path: '/calendar', priority }]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml).toContain(expected)
      // #endregion
    })

    it('他の言語のページを渡した場合、xhtml の名前空間と link が出力されること', () => {
      // #region Given
      const entries = [
        {
          path: '/en/calendar/',
          alternates: [
            { hreflang: 'ja', path: '/calendar/' },
            { hreflang: 'en', path: '/en/calendar/' },
          ],
        },
      ]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
      expect(xml).toContain(
        '<xhtml:link rel="alternate" hreflang="ja" href="https://imrg.work/calendar/"/>',
      )
      expect(xml).toContain(
        '<xhtml:link rel="alternate" hreflang="en" href="https://imrg.work/en/calendar/"/>',
      )
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('同じパスが複数ある場合、1つにまとめられること', () => {
      // #region Given
      const entries = [{ path: '/calendar' }, { path: '/calendar/' }]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml.match(/<loc>https:\/\/imrg\.work\/calendar\/<\/loc>/g)).toHaveLength(1)
      // #endregion
    })

    it('パスに XML の特殊文字がある場合、実体参照になること', () => {
      // #region Given
      const entries = [{ path: '/a&b' }]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml).toContain('<loc>https://imrg.work/a&amp;b/</loc>')
      // #endregion
    })

    it('他の言語のページが無い場合、xhtml の名前空間が出力されないこと', () => {
      // #region Given
      const entries = [{ path: '/calendar' }]
      // #endregion

      // #region When
      const xml = buildSitemapXml(BASE_URL, entries)
      // #endregion

      // #region Then
      expect(xml).not.toContain('xmlns:xhtml')
      expect(xml).not.toContain('<xhtml:link')
      // #endregion
    })
  })
})
