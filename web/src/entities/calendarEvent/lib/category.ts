import { m } from '$lib/paraglide/messages'
import type { SiteLocale } from '@shared/lib/i18n'
import type { EventCategory } from '../model'

/** 種類ごとの表示名の文言 */
const CATEGORY_MESSAGES: Record<EventCategory, typeof m.calendar_category_national> = {
  national: m.calendar_category_national,
  regional: m.calendar_category_regional,
  prefectural: m.calendar_category_prefectural,
  performance: m.calendar_category_performance,
  workshop: m.calendar_category_workshop,
  international: m.calendar_category_international,
}

/**
 * 種類の表示名を返す
 * @param category - 種類
 * @param locale - 言語。省くと表示中の言語
 * @returns 「全国大会」「National」などの表示名
 */
export const categoryLabel = (category: EventCategory, locale?: SiteLocale): string =>
  CATEGORY_MESSAGES[category]({}, locale ? { locale } : undefined)
