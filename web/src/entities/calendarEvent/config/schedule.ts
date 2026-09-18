/**
 * 日程の決まり方。
 *
 * @remarks
 * `MONTH_ONLY` のイベントは、年月しか決まっていないので日付を持たない（型で保証している）。
 * サーバーからブラウザーへ渡すデータに入るので、値は文字列にする
 */
export const EventSchedule = {
  /** 主催者が日付を発表している */
  FIXED: 'fixed',
  /** 日付は分かっているが、まだ仮の日程 */
  TENTATIVE: 'tentative',
  /** 年月だけ決まっていて、日付は未定 */
  MONTH_ONLY: 'monthOnly',
} as const
