/**
 * sitemap.xml の組み立て。
 * 末尾スラッシュはサイトの設定（trailingSlash: "always"）に合わせる。
 */

export type SitemapEntry = {
  /** サイト内のパス。"/" から始める */
  path: string
  /** 最終更新日 "YYYY-MM-DD"。省略可 */
  lastmod?: string
  /** 0.0〜1.0。省略時は 0.5 */
  priority?: number
}

/** "/calendar" → "/calendar/"。"/" はそのまま */
export function withTrailingSlash(path: string): string {
  if (!path.startsWith('/')) return `/${path}`.replace(/\/+$/, '/')
  return path.endsWith('/') ? path : `${path}/`
}

/** XML に入れられない文字を実体参照にする */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** 絶対 URL にする。baseUrl の末尾スラッシュは無視する */
export function toAbsoluteUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, '')}${withTrailingSlash(path)}`
}

/** sitemap.xml の中身を作る。同じパスが複数あっても1つにまとめる */
export function buildSitemapXml(baseUrl: string, entries: SitemapEntry[]): string {
  const seen = new Set<string>()
  const urls: string[] = []

  for (const entry of entries) {
    const url = toAbsoluteUrl(baseUrl, entry.path)
    if (seen.has(url)) continue
    seen.add(url)

    const parts = [`    <loc>${escapeXml(url)}</loc>`]
    if (entry.lastmod) parts.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`)
    parts.push(`    <priority>${(entry.priority ?? 0.5).toFixed(1)}</priority>`)
    urls.push(`  <url>\n${parts.join('\n')}\n  </url>`)
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}
