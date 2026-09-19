/**
 * sitemap.xml の組み立て。
 * 末尾スラッシュはサイトの設定（trailingSlash: "always"）に合わせる。
 */

/**
 * sitemap.xml に載せる1ページぶんの情報
 */
export type SitemapEntry = {
  /** サイト内のパス。"/" から始める */
  path: string
  /** 最終更新日 "YYYY-MM-DD"。省略可 */
  lastmod?: string
  /** 0.0〜1.0。省略時は 0.5 */
  priority?: number
  /** 他の言語のページ（自分自身も含める）。2言語以上で公開しているページだけに付ける */
  alternates?: SitemapAlternate[]
}

/**
 * sitemap.xml に載せる、他の言語のページ
 */
export type SitemapAlternate = {
  /** 言語（"ja" "en"）または "x-default" */
  hreflang: string
  /** サイト内のパス。"/" から始める */
  path: string
}

/**
 * "/calendar" → "/calendar/"。"/" はそのまま
 * @param path - サイト内のパス
 * @returns 末尾にスラッシュを付けたパス。"/" で始まらないときは先頭にも付ける
 */
export function withTrailingSlash(path: string): string {
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
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

/**
 * 絶対 URL にする。baseUrl の末尾スラッシュは無視する
 * @param baseUrl - サイトの URL（例: "https://imrg.work"）
 * @param path - サイト内のパス
 * @returns 末尾スラッシュ付きの絶対 URL
 */
export function toAbsoluteUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, '')}${withTrailingSlash(path)}`
}

/**
 * sitemap.xml の中身を作る。同じパスが複数あっても1つにまとめる
 * @param baseUrl - サイトの URL（例: "https://imrg.work"）
 * @param entries - 載せるページの一覧
 * @returns sitemap.xml の文字列（末尾に改行付き）
 */
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
    for (const alternate of entry.alternates ?? []) {
      const href = escapeXml(toAbsoluteUrl(baseUrl, alternate.path))
      parts.push(
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${href}"/>`,
      )
    }
    urls.push(`  <url>\n${parts.join('\n')}\n  </url>`)
  }

  // 言語の対応を書くときだけ xhtml の名前空間を宣言する
  const hasAlternates = entries.some((entry) => (entry.alternates ?? []).length > 0)
  const urlset = hasAlternates
    ? '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
    : '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  return ['<?xml version="1.0" encoding="UTF-8"?>', urlset, ...urls, '</urlset>', ''].join('\n')
}
