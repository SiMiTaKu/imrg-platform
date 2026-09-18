import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 小数の桁をそろえて整形する
 * @param value - 数値
 * @param locale - 表示中の言語
 * @param fractionDigits - 小数の桁数（既定は 3 桁）
 * @returns 整形した数値（例: `9.450`）。桁区切りは付けない
 */
export const formatNumber = (value: number, locale: SiteLocale, fractionDigits = 3): string =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    useGrouping: false,
  }).format(value)

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
