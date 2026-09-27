import { GLOSSARY_JA, publishedGuideKeys } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

/*
  用語集。検索は画面の中だけで絞り込むので、語はまとめて渡す。
  語の数が数百になったら、サーバー側で絞ることを考える
*/
export const load: PageServerLoad = () => ({
  meta: META_DATA.ruleGuideWords(),
  groups: GLOSSARY_JA,
  publishedKeys: publishedGuideKeys(),
})
