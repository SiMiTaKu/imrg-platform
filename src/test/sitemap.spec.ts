import { describe, expect, test } from "@jest/globals"
import { buildSitemapXml, toAbsoluteUrl, withTrailingSlash } from "$lib/common/sitemap"

describe("test withTrailingSlash", () => {
  test.each([
    [ "末尾にスラッシュを足す", "/calendar", "/calendar/" ], [ "すでにあるときはそのまま", "/calendar/", "/calendar/" ], [ "トップはそのまま", "/", "/" ],
  ])("%s", (_, path, expected) => {
    expect(withTrailingSlash(path)).toBe(expected)
  })
})

describe("test toAbsoluteUrl", () => {
  test("baseUrl の末尾スラッシュが重ならない", () => {
    expect(toAbsoluteUrl("https://imrg.work/", "/calendar")).toBe("https://imrg.work/calendar/")
  })
})

describe("test buildSitemapXml", () => {
  const xml = buildSitemapXml("https://imrg.work", [
    { path: "/", priority: 1 }, { path: "/calendar", lastmod: "2026-09-16", priority: 0.8 }, { path: "/calendar", priority: 0.8 },
  ])

  test("XML の宣言と urlset で囲む", () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true)
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  })

  test("同じパスは1つにまとめる", () => {
    expect(xml.match(/<loc>https:\/\/imrg\.work\/calendar\/<\/loc>/g)).toHaveLength(1)
  })

  test("最終更新日と優先度を書き出す", () => {
    expect(xml).toContain("<lastmod>2026-09-16</lastmod>")
    expect(xml).toContain("<priority>1.0</priority>")
  })

  test("特殊文字を実体参照にする", () => {
    expect(buildSitemapXml("https://imrg.work", [ { path: "/a&b" } ])).toContain("/a&amp;b/")
  })
})
