/**
 * サイト内のページのパス。
 *
 * @remarks
 * リンク先のパスを文字列で直書きせず、ここから参照する。
 * サイトは trailingSlash: 'always' なので、末尾にスラッシュを付ける。
 * 英語ページへのリンクは、`@shared/lib/i18n` の `localizeHref` で言語を付けて使う。
 */
export const ROUTES = {
  top: '/',
  calendar: {
    index: '/calendar/',
    /**
     * 大会の詳細ページ
     * @param id - 大会の ID
     * @returns 詳細ページのパス
     */
    detail: (id: string) => `/calendar/${id}/`,
  },
  oshimitsu: {
    index: '/oshimitsu/',
    searchResult: '/oshimitsu/search_result/',
    /**
     * 種類（個人・団体）で絞ったページ
     * @param contentType - 種類のスラッグ（`individual` / `group`）
     * @returns 絞り込みページのパス
     */
    contentType: (contentType: string) => `/oshimitsu/content_type/${contentType}/`,
    /**
     * 個人の手具で絞ったページ
     * @param apparatus - 手具のスラッグ（`club` / `ring` / `rope` / `stick`）
     * @returns 絞り込みページのパス
     */
    apparatus: (apparatus: string) => `/oshimitsu/content_type/individual/apparatus/${apparatus}/`,
  },
  decoratingApparatus: '/decorating_apparatus/',
  coaching: '/coaching/',
  backgroundMusic: '/background_music/',
  judge: '/judge/',
  rules: {
    index: '/rules/',
    /**
     * ルールの解説のページ
     * @param path - 鍵から作ったパス（`score/difficulty` の形。`guideKeyToPath` で作る）
     * @returns 解説のページのパス
     */
    page: (path: string) => `/rules/${path}/`,
  },
  privacy: '/privacy/',
  terms: '/terms/',
} as const
