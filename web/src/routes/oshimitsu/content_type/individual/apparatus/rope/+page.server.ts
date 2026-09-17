import { META_DATA } from '@shared/config/meta'
import { ROUTES } from '@shared/routes'
import type { Video } from '$views/page/oshimitsu/_lib'
import { Apparatus, ContentType } from '$views/page/oshimitsu/_models'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  meta: META_DATA.oshimitsuFiltered(
    `${ContentType.INDIVIDUAL.label} × ${Apparatus.ROPE.label}`,
    ROUTES.oshimitsu.apparatus(Apparatus.ROPE.slug),
  ),
  criteria: {
    contentType: ContentType.INDIVIDUAL,
    apparatuses: [Apparatus.ROPE],
    exceptVideos: [],
  } satisfies Video.Criteria,
})
