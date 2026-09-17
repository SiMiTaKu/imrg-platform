import { ROUTES } from '@shared/routes'

/**
 * 曲編集のうち、英語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 * 動的なページは親のパスに `/*` を付けて書く（例: `/calendar/*`）
 */
export const BACKGROUND_MUSIC_TRANSLATED_PATHS: readonly string[] = [ROUTES.backgroundMusic]
