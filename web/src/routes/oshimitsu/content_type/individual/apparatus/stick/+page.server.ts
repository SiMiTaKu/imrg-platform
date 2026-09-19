import { FILTERED_PAGE_QUERIES, filteredPageMeta } from '@pages/oshimitsuSearchResult'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  meta: filteredPageMeta(FILTERED_PAGE_QUERIES.stick),
  query: FILTERED_PAGE_QUERIES.stick,
})
