import type { SiteLocale } from '@shared/lib/i18n'
import { EN_TRANSLATED_PATHS } from './en'
import { ES_TRANSLATED_PATHS } from './es'
import { FR_TRANSLATED_PATHS } from './fr'
import { HI_TRANSLATED_PATHS } from './hi'
import { KO_TRANSLATED_PATHS } from './ko'
import { RU_TRANSLATED_PATHS } from './ru'
import { ZH_TRANSLATED_PATHS } from './zh'

/** 言語ごとの、訳し終えたページのパス */
export type TranslatedPaths = Partial<Record<SiteLocale, readonly string[]>>

/**
 * 訳し終えたページのパス。
 *
 * @remarks
 * 言語ごとにファイルを分けているのは、言語の作業を並行して進めても同じ行を取り合わないようにするため。
 * 既定の言語（日本語）は常に公開しているので、ここには書かない
 */
export const TRANSLATED_PATHS: TranslatedPaths = {
  en: EN_TRANSLATED_PATHS,
  zh: ZH_TRANSLATED_PATHS,
  ko: KO_TRANSLATED_PATHS,
  es: ES_TRANSLATED_PATHS,
  fr: FR_TRANSLATED_PATHS,
  ru: RU_TRANSLATED_PATHS,
  hi: HI_TRANSLATED_PATHS,
}

export { ALL_PAGES } from './allPages'
