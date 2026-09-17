import { ROUTES } from '@shared/routes'

/**
 * 大会・イベントカレンダー（詳細ページも含む）のうち、英語に訳し終えたページのパス（言語の接頭辞なし、末尾スラッシュ付き）。
 * 動的なページは親のパスに `/*` を付けて書く（例: `/calendar/*`）
 */
export const CALENDAR_TRANSLATED_PATHS: readonly string[] = [
  ROUTES.calendar.index,
  `${ROUTES.calendar.index}*`,
]
