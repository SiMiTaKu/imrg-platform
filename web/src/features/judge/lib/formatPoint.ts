import { MAX_EXECUTION_SCORE } from '../config/pointA'

/**
 * 点数を、言語に応じた形で小数の桁をそろえて整形する
 * @param value - 点数
 * @param locale - 表示中の言語
 * @param fractionDigits - 小数の桁数（既定は 3 桁）
 * @returns 整形した点数（例: `9.450`）
 */
export const formatPoint = (value: number, locale: string, fractionDigits = 3): string =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    useGrouping: false,
  }).format(value)

/**
 * 決定点の計算式（満点からAとBの減点を引く式）を作る
 * @param pointA - Aの減点の合計
 * @param pointB - Bの減点の合計
 * @param locale - 表示中の言語
 * @returns 計算式（例: `10.00　-　( 5.500 + 0.300 )`）。区切りの全角スペースは以前の表示のまま
 */
export const buildScoreFormula = (pointA: number, pointB: number, locale: string): string =>
  `${formatPoint(MAX_EXECUTION_SCORE, locale, 2)}　-　( ${formatPoint(pointA, locale)} + ${formatPoint(pointB, locale)} )`
