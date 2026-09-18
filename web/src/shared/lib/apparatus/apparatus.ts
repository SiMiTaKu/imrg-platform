import { APPARATUSES } from '@shared/config/apparatus'
import type { Apparatus, ApparatusSlug } from '@shared/model'

/**
 * slug から手具を返す
 * @param slug - 手具の slug（`stick` / `ring` / `rope` / `club`）
 * @returns 手具
 */
export const apparatusOfSlug = (slug: ApparatusSlug): Apparatus =>
  APPARATUSES.find((apparatus) => apparatus.slug === slug) ?? APPARATUSES[0]
