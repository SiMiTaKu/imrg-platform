import type { SiteLocale } from '@shared/lib/i18n'
import { ES_EVENT_TRANSLATIONS } from './es'
import { FR_EVENT_TRANSLATIONS } from './fr'
import { HI_EVENT_TRANSLATIONS } from './hi'
import { KO_EVENT_TRANSLATIONS } from './ko'
import type { EventTranslation, EventTranslations } from './model'
import { RU_EVENT_TRANSLATIONS } from './ru'
import { ZH_EVENT_TRANSLATIONS } from './zh'

/** 言語ごとの、大会の訳 */
const EVENT_TRANSLATIONS: Partial<Record<SiteLocale, EventTranslations>> = {
  zh: ZH_EVENT_TRANSLATIONS,
  ko: KO_EVENT_TRANSLATIONS,
  es: ES_EVENT_TRANSLATIONS,
  fr: FR_EVENT_TRANSLATIONS,
  ru: RU_EVENT_TRANSLATIONS,
  hi: HI_EVENT_TRANSLATIONS,
}

/**
 * 大会の訳を引く
 * @param id - 大会の ID
 * @param locale - 表示する言語
 * @returns その言語の訳。無ければ空
 */
export const eventTranslation = (id: string, locale: SiteLocale): EventTranslation =>
  EVENT_TRANSLATIONS[locale]?.[id] ?? {}

export type { EventTranslation, EventTranslations } from './model'
