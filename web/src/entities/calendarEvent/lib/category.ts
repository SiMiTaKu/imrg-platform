import type { SiteLocale } from '@shared/lib/i18n'
import { EVENT_CATEGORIES } from '../config/category'
import type { EventCategory, EventCategorySlug } from '../model'

/**
 * slug から種類を返す
 * @param slug - 種類の slug（`national` など）
 * @returns 種類
 */
export const categoryOfSlug = (slug: EventCategorySlug): EventCategory =>
  EVENT_CATEGORIES.find((category) => category.slug === slug) ?? EVENT_CATEGORIES[0]

/**
 * 種類の表示名を返す
 * @param slug - 種類の slug
 * @param locale - 言語。省くと表示中の言語
 * @returns 「全国大会」「National」などの表示名
 */
export const categoryLabel = (slug: EventCategorySlug, locale?: SiteLocale): string =>
  categoryOfSlug(slug).label({}, locale ? { locale } : undefined)

/**
 * 種類の色を返す
 * @param slug - 種類の slug
 * @returns カレンダーの印や一覧の線に使う色
 */
export const categoryColor = (slug: EventCategorySlug): string => categoryOfSlug(slug).color
