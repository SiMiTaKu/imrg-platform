import { Chart } from 'chart.js/auto'
import { CHART_BORDER_COLORS } from '../config/chart'
import type { JudgeThemeColor } from '../model/apparatus'
import { wrapChartLabel } from './wrapChartLabel'

/**
 * 内訳のグラフ（Aの減点項目のレーダーチャート）の描き方
 */
export type DetailChartOptions = {
  /** 項目名（表示中の言語） */
  labels: string[]
  /** 項目ごとの選択肢のコード（1〜10） */
  values: number[]
  /** テーマの色 */
  color: JudgeThemeColor
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
          // 選択肢のコード（1〜10）を 1 刻みで出す
          max: 10,
          min: 0,
          ticks: { stepSize: 1 },
          ...(options.showsPointLabels ? {} : { pointLabels: { display: false } }),
        },
      },
      plugins: { legend: { display: false } },
    },
  })
