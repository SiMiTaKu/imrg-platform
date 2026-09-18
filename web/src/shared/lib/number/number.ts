import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 金額を円の表記にする
 * @param value - 金額（円）
 * @param locale - 表示中の言語
 * @returns 日本語なら「5,000円」、英語なら "¥5,000"
 */
export const formatYen = (value: number, locale: SiteLocale): string =>
  locale === 'ja'
    ? `${new Intl.NumberFormat(locale).format(value)}円`
    : new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'JPY',
        maximumFractionDigits: 0,
      }).format(value)
