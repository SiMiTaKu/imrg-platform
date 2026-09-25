import type { SiteLocale } from '@shared/lib/i18n'
import { formatNumber } from '@shared/lib/number'
import { MAX_EXECUTION_SCORE } from '../config/pointA'

/**
 * 決定点の計算式（満点からAとBの減点を引く式）を作る
 * @param pointA - Aの減点の合計
 * @param pointB - Bの減点の合計
 * @param locale - 表示中の言語
 * @returns 計算式（例: `10.00 − (5.500 + 0.300)`）
 *
 * @remarks
 * 引き算の記号は、半角ハイフンではなく**マイナス記号**（U+2212）を使う。
 * ハイフンは短くて点や中黒に見え、式に見えない。
 * 括弧のすぐ内側の空きも詰める。離れていると括弧がどこに掛かるのか分かりにくい
 */
export const buildScoreFormula = (pointA: number, pointB: number, locale: SiteLocale): string =>
  `${formatNumber(MAX_EXECUTION_SCORE, locale, 2)} − (${formatNumber(pointA, locale)} + ${formatNumber(pointB, locale)})`
