import { GLOSSARY_JA } from '@entities/glossary'
import { publishedGuideKeys } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

/*
  用語集。検索は画面の中だけで絞り込むので、語はまとめて渡す。
  ルールの外の言葉も載せるので、`/rules/` の下ではなく `/words/` に置く。
  語ごとのページ（`/words/<slug>/`）はこれから作る
*/
export const load: PageServerLoad = () => ({
  meta: META_DATA.words(),
  groups: GLOSSARY_JA,
  publishedKeys: publishedGuideKeys(),
})
