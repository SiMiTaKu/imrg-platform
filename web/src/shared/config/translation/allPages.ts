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
  // 規則集のページ（/rules/）は、日本語だけ検索に載せる。
  // 案内の文は8言語そろっているが、条文を出したときの本文が日本語のままなので、
  // 日本語以外は noindex のままにしておく（ここに足すと noindex が外れる）
  ROUTES.privacy,
  ROUTES.terms,
]
