import { loadRuleBook } from '@entities/rule'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { PageServerLoad } from './$types'

// 本文は量が多いので、ビルド時に表示する言語だけに絞って渡す（ブラウザーへ全部の言語を送らない）
export const load: PageServerLoad = () => ({
  meta: META_DATA.rules(),
  ruleBook: loadRuleBook(getLocale()),
})
