import type { SiteLocale } from '@shared/lib/i18n'
import { GUIDE_CONTENT_JA } from '../api/content/ja'
import type { GuideContent, GuidePage } from '../model'
import { GUIDE_KEYS, guideChildKeys, guideParentKey } from '../model'
import type { GuideKey } from '../model'

/**
 * 言語ごとの本文。
 *
 * @remarks
 * 日本語だけが正で、ほかの言語はこれから足す（TODO 7-8）。
 * 足すまでは日本語に落ちる
 */
const CONTENT: Partial<Record<SiteLocale, GuideContent>> = {
  ja: GUIDE_CONTENT_JA,
}

/**
 * 本文を書いた鍵を返す。
 *
 * @remarks
 * 木にあっても本文が無い鍵は入らない。**URL が生えるのはここにある鍵だけ**
 * @returns 本文がある鍵。木に並べた順
 */
export const publishedGuideKeys = (): readonly GuideKey[] =>
  GUIDE_KEYS.filter((key) => GUIDE_CONTENT_JA[key] !== undefined)

/**
 * 鍵からページを引く
 * @param key - 解説のページの鍵
 * @param locale - 表示する言語
 * @returns そのページ。訳が無ければ日本語。本文がまだ無ければ `undefined`
 */
export const loadGuidePage = (key: GuideKey, locale: SiteLocale): GuidePage | undefined =>
  CONTENT[locale]?.[key] ?? GUIDE_CONTENT_JA[key]

/**
 * 上へ戻る先を返す。
 *
 * @remarks
 * 親がまだ書かれていないこともある（木には並べたが本文が無い）。
 * そのときは、さらに上へたどって**本文のあるいちばん近い先祖**を返す。
 * 見つからなければ `undefined` を返し、呼ぶ側は解説の入口へ戻す。
 *
 * これをしないと、書いていないページへのリンクができて 404 になる
 * @param key - いま見ているページの鍵
 * @returns 戻る先の鍵。無ければ `undefined`
 */
export const guideUpKey = (key: GuideKey): GuideKey | undefined => {
  let current = guideParentKey(key)
  while (current !== undefined) {
    if (GUIDE_CONTENT_JA[current] !== undefined) return current
    current = guideParentKey(current)
  }
  return undefined
}

/**
 * 子のページの一覧を作る。
 *
 * @remarks
 * **本文がある子だけ**返す。書いていないページへのリンクを出さないため
 * @param key - 親の鍵
 * @param locale - 表示する言語
 * @returns 子のページ
 */
export const loadGuideChildren = (key: GuideKey, locale: SiteLocale): GuidePage[] =>
  guideChildKeys(key)
    .map((child) => loadGuidePage(child, locale))
    .filter((page): page is GuidePage => page !== undefined)
