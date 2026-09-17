import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  meta: META_DATA.oshimitsu(),
})
