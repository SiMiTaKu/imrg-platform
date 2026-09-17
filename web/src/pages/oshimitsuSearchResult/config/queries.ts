import { Apparatus, ContentType } from '@entities/oshimitsuVideo'
import type { SearchQuery } from '@features/oshimitsuSearch'

/** 種類・手具のページ（`/oshimitsu/content_type/**`）の検索条件 */
export const FILTERED_PAGE_QUERIES = {
  individual: { contentType: ContentType.INDIVIDUAL.slug, apparatuses: [] },
  group: { contentType: ContentType.GROUP.slug, apparatuses: [] },
  stick: { contentType: ContentType.INDIVIDUAL.slug, apparatuses: [Apparatus.STICK.slug] },
  ring: { contentType: ContentType.INDIVIDUAL.slug, apparatuses: [Apparatus.RING.slug] },
  rope: { contentType: ContentType.INDIVIDUAL.slug, apparatuses: [Apparatus.ROPE.slug] },
  club: { contentType: ContentType.INDIVIDUAL.slug, apparatuses: [Apparatus.CLUB.slug] },
} as const satisfies Record<string, SearchQuery>
