import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

/*
  ルールの解説は、いま書き直している途中（`docs/rules-guide.md`）。
  条文を写したページは 2026-09-26 に取り下げたので、いまは「準備中」だけを出す
*/
export const load: PageServerLoad = () => ({ meta: META_DATA.rules() })
