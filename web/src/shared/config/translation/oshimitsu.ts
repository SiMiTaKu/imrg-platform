import { ROUTES } from '@shared/routes'

/**
 * 推しミツ！のうち、英語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 * 動的なページは親のパスに `/*` を付けて書く（例: `/calendar/*`）
 *
 * @remarks
 * `/oshimitsu/*` は検索結果と種類・手具のページ（`/oshimitsu/content_type/**`）。
 * `/*` は親のパス自身を含まないので、トップ（`/oshimitsu/`）は別に書く
 */
export const OSHIMITSU_TRANSLATED_PATHS: readonly string[] = [
  ROUTES.oshimitsu.index,
  `${ROUTES.oshimitsu.index}*`,
]
