import { deLocalizeHref, getLocale, localizeHref } from '$lib/paraglide/runtime'

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
export { localizedText } from './localizedText'
export { toEnglishPlaceName } from './placeName'
