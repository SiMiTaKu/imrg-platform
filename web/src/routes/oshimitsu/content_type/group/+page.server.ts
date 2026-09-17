import { META_DATA } from '@shared/config/meta'
import { ROUTES } from '@shared/routes'
import type { Video } from '$views/page/oshimitsu/_lib'
import { ContentType } from '$views/page/oshimitsu/_models'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  meta: META_DATA.oshimitsuFiltered(
    ContentType.GROUP.label,
    ROUTES.oshimitsu.contentType(ContentType.GROUP.slug),
  ),
  criteria: {
    contentType: ContentType.GROUP,
    apparatuses: [],
    exceptVideos: [],
  } satisfies Video.Criteria,
})
