import { ROUTES } from '@shared/routes'

/**
 * 利用規約のうち、英語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 * 動的なページは親のパスに `/*` を付けて書く（例: `/calendar/*`）
 */
export const TERMS_TRANSLATED_PATHS: readonly string[] = [ROUTES.terms]
