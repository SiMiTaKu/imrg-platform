/**
 * ロシア語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 *
 * @remarks
 * 訳し終えたページを足すと、noindex が外れ、hreflang と sitemap に載る。
 * 全ページ訳し終えたら `ALL_PAGES`（`./allPages`）に差し替える
 */
export const RU_TRANSLATED_PATHS: readonly string[] = []
