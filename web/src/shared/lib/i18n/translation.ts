import { TRANSLATED_PATHS } from '@shared/config/translation'
import type { TranslatedPaths } from '@shared/config/translation'

/**
 * 言語ごとのページの公開状態。
 *
 * @remarks
 * 日本語以外のページは、すべてのページについて `/<言語>/...` に書き出している。
 * ただし訳し終わるまでは中身が日本語のままなので、検索エンジンに登録させない（noindex）。
 * 訳し終えたページのパスを `@shared/config/translation` の言語ごとのファイルに足すと、noindex が外れ、
 * hreflang と sitemap にそのページが載る。
 */

/** サイトの言語。先頭が既定の言語 */
export const SITE_LOCALES = ['ja', 'en', 'zh', 'ko', 'es', 'fr', 'ru', 'hi'] as const

/** サイトの言語 */
export type SiteLocale = (typeof SITE_LOCALES)[number]

/** 既定の言語。URL に接頭辞を付けない */
export const BASE_LOCALE: SiteLocale = 'ja'

/** OGP の og:locale に書く値 */
export const OG_LOCALES: Record<SiteLocale, string> = {
  ja: 'ja_JP',
  en: 'en_US',
  zh: 'zh_CN',
  ko: 'ko_KR',
  es: 'es_ES',
  fr: 'fr_FR',
  ru: 'ru_RU',
  hi: 'hi_IN',
}

/**
 * そのページが、指定した言語で公開してよい状態かを返す
 * @param path - 言語の接頭辞を外したパス（末尾スラッシュ付き）
 * @param locale - 言語
 * @param translatedPaths - 訳し終えたページのパス。テストのときだけ差し替える
 * @returns 既定の言語なら常に true。それ以外は訳し終えていれば true
 */
export const isPublished = (
  path: string,
  locale: SiteLocale,
  translatedPaths: TranslatedPaths = TRANSLATED_PATHS,
): boolean => {
  if (locale === BASE_LOCALE) return true
  return (translatedPaths[locale] ?? []).some((translated) =>
    translated.endsWith('/*')
      ? path.startsWith(translated.slice(0, -1)) && path.length > translated.length - 1
      : translated === path,
  )
}

/**
 * パスに言語の接頭辞を付ける（Paraglide JS の既定の URL の形と同じ）
 * @param path - 言語の接頭辞を外したパス（末尾スラッシュ付き）
 * @param locale - 言語
 * @returns 既定の言語ならそのまま、それ以外は `/en/...` の形
 */
export const localizePath = (path: string, locale: SiteLocale): string =>
  locale === BASE_LOCALE ? path : `/${locale}${path}`

/**
 * そのページを公開している言語の一覧を返す
 * @param path - 言語の接頭辞を外したパス（末尾スラッシュ付き）
 * @param translatedPaths - 訳し終えたページのパス。テストのときだけ差し替える
 * @returns 公開している言語。既定の言語が先頭
 */
export const publishedLocales = (
  path: string,
  translatedPaths: TranslatedPaths = TRANSLATED_PATHS,
): SiteLocale[] => SITE_LOCALES.filter((locale) => isPublished(path, locale, translatedPaths))
