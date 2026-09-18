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
