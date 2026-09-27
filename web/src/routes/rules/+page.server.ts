import { loadAllGuidePages, loadTopGuidePages } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { PageServerLoad } from './$types'

/*
  ルールの解説の入口。ここから各ページへ送る。
  本文のあるページだけが一覧に出る（`docs/rules-guide.md` の 7-2）
*/
export const load: PageServerLoad = () => {
  const locale = getLocale()
  return {
    meta: META_DATA.rules(),
    topPages: loadTopGuidePages(locale),
    allPages: loadAllGuidePages(locale),
  }
}
