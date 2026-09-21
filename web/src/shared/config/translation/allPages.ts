import { ROUTES } from '@shared/routes'

/** サイトのすべてのページ（言語の接頭辞なし、末尾スラッシュ付き）。動的なページは `/*` を付ける */
export const ALL_PAGES: readonly string[] = [
  ROUTES.top,
  ROUTES.calendar.index,
  `${ROUTES.calendar.index}*`,
  ROUTES.oshimitsu.index,
  ROUTES.oshimitsu.searchResult,
  `${ROUTES.oshimitsu.index}*`,
  ROUTES.decoratingApparatus,
  ROUTES.backgroundMusic,
  ROUTES.coaching,
  ROUTES.judge,
  // 規則集は、載せてよいか確かめている途中。
  // 見には行けるが、検索に登録させない（ここに足すと noindex が外れる）
  ROUTES.privacy,
  ROUTES.terms,
]
