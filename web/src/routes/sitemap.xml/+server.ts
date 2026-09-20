import { PUBLIC_BASE_URL } from '$env/static/public'
import { EVENTS, UPDATED_AT } from '@entities/calendarEvent'
import { BASE_LOCALE, localizePath, publishedLocales } from '@shared/lib/i18n'
import type { SitemapEntry } from '@shared/lib/sitemap'
import { buildSitemapXml, withTrailingSlash } from '@shared/lib/sitemap'
import type { RequestHandler } from './$types'

// ビルド時に静的ファイルとして書き出す
export const prerender = true

/**
 * 固定ページ。
 * /oshimitsu/search_result はクエリ次第で中身が変わるため載せない。
 * /oshimitsu/content_type/* は書き換えルールの受け皿なので載せない。
 */
const STATIC_ENTRIES: SitemapEntry[] = [
  { path: '/', priority: 1, lastmod: UPDATED_AT },
  { path: '/calendar', priority: 0.9, lastmod: UPDATED_AT },
  { path: '/oshimitsu', priority: 0.8, lastmod: UPDATED_AT },
  { path: '/judge', priority: 0.6, lastmod: UPDATED_AT },
  { path: '/decorating_apparatus', priority: 0.6, lastmod: UPDATED_AT },
  { path: '/background_music', priority: 0.6, lastmod: UPDATED_AT },
  { path: '/privacy', priority: 0.3, lastmod: UPDATED_AT },
  { path: '/terms', priority: 0.3, lastmod: UPDATED_AT },
]

export const GET: RequestHandler = async () => {
  // 大会の詳細ページ。最終更新日はカレンダーの更新日をそのまま使う
  const eventEntries = EVENTS.map((event) => ({
    path: `/calendar/${event.id}`,
    lastmod: UPDATED_AT,
    priority: 0.6,
  }))
  const entries: SitemapEntry[] = STATIC_ENTRIES.concat(eventEntries).flatMap(localizeEntry)

  return new Response(buildSitemapXml(PUBLIC_BASE_URL, entries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

/**
 * 2言語以上で公開しているページを、言語ごとの項目に分け、互いの対応を付ける
 * @param entry - 既定の言語のページ
 * @returns 言語ごとの項目。既定の言語だけのページはそのまま1件
 */
const localizeEntry = (entry: SitemapEntry): SitemapEntry[] => {
  const path = withTrailingSlash(entry.path)
  const locales = publishedLocales(path)
  if (locales.length < 2) return [entry]

  const alternates = [
    ...locales.map((locale) => ({ hreflang: locale, path: localizePath(path, locale) })),
    { hreflang: 'x-default', path: localizePath(path, BASE_LOCALE) },
  ]
  return locales.map((locale) => ({ ...entry, path: localizePath(path, locale), alternates }))
}
