import { Chart } from 'chart.js/auto'
import { CHART_BORDER_COLORS } from '../config/chart'
import { POINT_A_MAX_CODE } from '../config/pointA'
import type { JudgeThemeColorKey } from '../model/apparatus'
import { wrapChartLabel } from './wrapChartLabel'

/**
 * 内訳のグラフ（Aの減点項目のレーダーチャート）の描き方
 */
export type DetailChartOptions = {
  /** 項目名（表示中の言語） */
  labels: string[]
  /** 項目ごとの選択肢のコード（規則の5段階が 1〜5。段階の間は 1.5・2.5 など） */
  values: number[]
  /** テーマの色 */
  color: JudgeThemeColorKey
  /** 項目名を出すか。スマホでは出さない */
  showsPointLabels: boolean
}

/**
 * 内訳のグラフを描く
 * @param canvas - 描く先の canvas
 * @param options - 描き方
 * @returns 描いたグラフ。描き直す前に destroy する
 */
export const renderDetailChart = (canvas: HTMLCanvasElement, options: DetailChartOptions): Chart =>
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: options.labels.map(wrapChartLabel),
      datasets: [{ data: options.values, borderColor: CHART_BORDER_COLORS[options.color] }],
    },
    options: {
      scales: {
        r: {
          // 規則の5段階（コード 1〜5）を 1 刻みで出す。外側の余りは 0.05 刻みの補助のぶん
          max: POINT_A_MAX_CODE,
          min: 0,
          ticks: { stepSize: 1 },
          ...(options.showsPointLabels ? {} : { pointLabels: { display: false } }),
        },
      },
      plugins: { legend: { display: false } },
    },
  })
