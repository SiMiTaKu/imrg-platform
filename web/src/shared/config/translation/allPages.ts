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
  ROUTES.judge,
  ROUTES.rules,
  ROUTES.privacy,
  ROUTES.terms,
]
