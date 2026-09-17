import { META_DATA } from '@shared/config/meta'
import { ROUTES } from '@shared/routes'
import type { Video } from '$views/page/oshimitsu/_lib'
import { ContentType } from '$views/page/oshimitsu/_models'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  meta: META_DATA.oshimitsuFiltered(
    ContentType.INDIVIDUAL.label,
    ROUTES.oshimitsu.contentType(ContentType.INDIVIDUAL.slug),
  ),
  criteria: {
    contentType: ContentType.INDIVIDUAL,
    apparatuses: [],
    exceptVideos: [],
  } satisfies Video.Criteria,
})
