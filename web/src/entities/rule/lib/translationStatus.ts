import { SITE_LOCALES } from '@shared/lib/i18n'
import type { RuleContentByLocale, RuleKey, TranslationStatus } from '../model/ruleSource'
import { fingerprint } from './fingerprint'

/**
 * 訳がどこまで日本語に追いついているかを調べる。
 *
 * @remarks
 * 日本語を直すと指紋が変わるので、訳を直し忘れていれば必ず `stale` に出る。
 * ビルドのときに呼んで、追いついていない条文の数を知らせる
 *
 * @param content - 言語ごとの本文
 * @returns 言語ごとの見立て（日本語を除く）
 */
export const checkTranslations = (content: RuleContentByLocale): readonly TranslationStatus[] => {
  const japanese = content.ja
  const keys = Object.keys(japanese) as RuleKey[]

  return SITE_LOCALES.filter((locale) => locale !== 'ja').map((locale) => {
    const translated = content[locale] ?? {}
    const fresh: RuleKey[] = []
    const stale: RuleKey[] = []
    const missing: RuleKey[] = []

    for (const key of keys) {
      const entry = translated[key]
      if (!entry) {
        missing.push(key)
      } else if (entry.from === fingerprint(japanese[key])) {
        fresh.push(key)
      } else {
        stale.push(key)
      }
    }

    return { locale, fresh, stale, missing }
  })
}

/**
 * 訳の進み具合を、人が読める形にする
 * @param statuses - 言語ごとの見立て
 * @returns 1行に1言語ずつ並べた文
 */
export const formatTranslationStatus = (statuses: readonly TranslationStatus[]): string =>
  statuses
    .map(({ locale, fresh, stale, missing }) => {
      const total = fresh.length + stale.length + missing.length
      const parts = [`追いついている ${fresh.length} / ${total}`]
      if (stale.length > 0) parts.push(`日本語が変わった ${stale.length}`)
      if (missing.length > 0) parts.push(`まだ訳していない ${missing.length}`)
      return `  ${locale}: ${parts.join('、')}`
    })
    .join('\n')
