import { deLocalizeHref, getLocale, localizeHref } from '$lib/paraglide/runtime'
import { BASE_LOCALE } from './translation'

export {
  BASE_LOCALE,
  OG_LOCALES,
  SITE_LOCALES,
  isPublished,
  localizePath,
  publishedLocales,
} from './translation'
export type { SiteLocale } from './translation'
export { deLocalizeHref, getLocale, localizeHref }
export { toEnglishPlaceName } from './placeName'

/** 日本語ページで、英語を小さく併記するときの言語 */
export const SECONDARY_LOCALE = 'en'

/**
 * 表示中の言語が既定の言語（日本語）かを返す
 * @returns 日本語ページなら true
 *
 * @remarks
 * 日本語ページでは、これまでどおり英語を小さく併記する（日英併記の見た目は Phase 5 で見直す）。
 * 英語ページでは併記しない。併記する英語は `m.xxx({}, { locale: SECONDARY_LOCALE })` で取る
 */
export const showsSecondaryText = (): boolean => getLocale() === BASE_LOCALE
