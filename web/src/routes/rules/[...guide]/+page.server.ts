import { error } from '@sveltejs/kit'
import {
  guidePathToKey,
  loadGuideChildren,
  loadGuidePage,
  publishedGuideKeys,
} from '@entities/ruleGuide'
import { guideKeyToPath } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { EntryGenerator, PageServerLoad } from './$types'

/*
  書き出す URL は、本文を書いた鍵から作る。
  鍵の木（GUIDE_KEY_TREE）に足しただけでは URL は生えず、
  本文（api/content/ja）を書いた時点で生える。
  だからページを1枚書くたびに、ここを直さなくてよい
*/
export const entries: EntryGenerator = () =>
  publishedGuideKeys().map((key) => ({ guide: guideKeyToPath(key) }))

export const load: PageServerLoad = ({ params }) => {
  const key = guidePathToKey(params.guide)
  if (key === undefined) error(404, 'Not Found')

  const locale = getLocale()
  const page = loadGuidePage(key, locale)
  if (page === undefined) error(404, 'Not Found')

  return {
    meta: META_DATA.ruleGuide({
      title: page.title,
      lead: page.lead,
      path: guideKeyToPath(key),
    }),
    page,
    children: loadGuideChildren(key, locale),
  }
}
