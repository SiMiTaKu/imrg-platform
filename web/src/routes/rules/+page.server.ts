import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

// 規則集の本文は、内容を見直しているあいだ出さない。
// パスは残し、準備中であることを伝える
export const load: PageServerLoad = () => ({ meta: META_DATA.rules() })
