<script lang="ts">
  import type { Chart } from 'chart.js/auto'
  import { m } from '$lib/paraglide/messages'
  import { Button, Modal, ThemeColor } from '@imrg-platform/design-system'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import { JudgeThemeColor } from '../config/themeColor'
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfDroppedApparatus,
  } from '../lib/calculator'
  import { renderDetailChart } from '../lib/detailChart'
  import { buildScoreFormula } from '../lib/scoreFormula'
  import type { JudgeThemeColorKey } from '../model/apparatus'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'

  type Props = {
    /** 結果を出すか */
    show: boolean
    /** スマホなら true。グラフの大きさと内訳の並べ方が変わる */
    isMobile: boolean
    /** 最初から採点し直すときに呼ぶ */
    onretry: () => void
    /** 閉じるときに呼ぶ */
    onclose: () => void
  }

  const { show, isMobile, onretry, onclose }: Props = $props()

  /**
   * 手具のイメージカラー（CSS の色）。見出しの帯と、採点し直すボタンの地に使う。
   * 色の値はデザインシステム（`ThemeColor`）が持つ
   */
  const THEME_COLORS = {
    gray: ThemeColor.GRAY,
    blue: ThemeColor.BLUE,
    red: ThemeColor.RED,
    yellow: ThemeColor.YELLOW,
    green: ThemeColor.GREEN,
  } as const satisfies Record<JudgeThemeColorKey, string>

  const locale = getLocale()
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
  // 満点からAとBの減点を引く式（例: 10.00　-　( 5.500 + 0.300 )）
  const formula = $derived(
    buildScoreFormula(
      getAmountOfPointA($executionDeduct),
      getAmountOfPointB($executionDeduct),
      locale,
    ),
  )
  const decisionPoints = $derived(getDecisionPoints($executionDeduct))

  let isPointDetailShown = $state(false)
  let pointDetailOpacity = $state(0)
  let pointDetailHeight = $state(0)
  let canvas: HTMLCanvasElement | undefined = $state()
  let chart: Chart | undefined = undefined

  $effect(() => () => chart?.destroy())

  /**
   * 内訳のグラフを描き直す。スマホでは項目名を出さない
   */
  const renderChart = () => {
    if (!canvas) return
    chart?.destroy()
    chart = renderDetailChart(canvas, {
      labels: POINT_A_ITEMS.map((item) => item.title()),
      values: POINT_A_ITEMS.map((item) => $executionDeduct.pointA[item.key].code),
      color,
      showsPointLabels: !isMobile,
    })
  }

  /**
   * 内訳を開け閉めする
   */
  const switchShowPointADetail = () => {
    isPointDetailShown = !isPointDetailShown
    if (isPointDetailShown) {
      renderChart()
      pointDetailHeight = isMobile ? 300 : 430
      setTimeout(() => {
        pointDetailOpacity = 1
      }, 100)
      return
    }
    pointDetailOpacity = 0
    setTimeout(() => {
      pointDetailHeight = 0
    }, 100)
  }
</script>

{#if show}
  <Modal
    title={m.judge_result_title()}
    titleVariant="tinted"
    titleBackground={THEME_COLORS[color]}
    width={isMobile ? 480 : 800}
    {onclose}
    labels={{ close: m.modal_close() }}
  >
    <div class:mobile={isMobile}>
      <div class="detail-switch">
        <Button
          variant="outline"
          width={isMobile ? 'full' : 'auto'}
          onclick={switchShowPointADetail}
        >
          {isPointDetailShown ? m.judge_result_hide_detail() : m.judge_result_show_detail()}
        </Button>
      </div>

      <div
        style:opacity={pointDetailOpacity}
        style:height={`${pointDetailHeight}px`}
        class="pull-down"
      >
        <div class="pull-down-inner">
          <div class="chart">
            <canvas
              id="detail-chart"
              width={isMobile ? 256 : 500}
              height={isMobile ? 256 : 400}
              bind:this={canvas}
            >
              <!-- HTML5の仕様上canvasタグは終了タグを必要とするため文字は表示されないが終了タグを記載している -->
            </canvas>
          </div>
          <ul class="detail">
            {#each POINT_A_ITEMS as item (item.key)}
              <li class="detail-item">
                <span class="detail-title">{item.title()}</span>
                <span>{formatNumber($executionDeduct.pointA[item.key].value, locale)}</span>
              </li>
            {/each}
            {#if !isMobile}
              <li class="detail-item">
                <span class="detail-title">{m.judge_result_dropped_deduction()}</span>
                <span>{formatNumber(getDeductionOfDroppedApparatus($executionDeduct), locale)}</span
                >
              </li>
            {/if}
            <li class="detail-item">
              <span class="detail-title"> {m.judge_point_b_miss()} </span>
              <span>{formatNumber($executionDeduct.pointB.miss, locale)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="format">
        {formula}
      </div>
      <div class="result">
        {formatNumber(decisionPoints, locale)}
      </div>
      <div class="footer">
        <Button width="full" onclick={onretry}>{m.judge_result_retry()}</Button>
      </div>
    </div>
  </Modal>
{/if}

<style lang="scss">
  .detail-switch {
    display: flex;
  }

  /** ポイントA 内訳のプルダウン ------------------------- */
  .pull-down {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      opacity 0.5s ease-out,
      height 0.5s ease-out;
  }

  // PC はグラフと内訳を横に並べ、スマホは縦に積む
  .pull-down-inner {
    display: flex;
    gap: 32px;
    align-items: center;
    padding-top: 8px;
  }

  .mobile .pull-down-inner {
    flex-direction: column;
    gap: 8px;
  }

  .chart {
    flex: 0 0 auto;
  }

  .detail {
    width: 220px;
    margin: 0;
    padding: 0;
  }

  .mobile .detail {
    width: 270px;
  }

  .detail-item {
    margin-bottom: 8px;
    font-size: 12px;
    list-style: none;
    border-bottom: 1px solid #aaa;
  }

  .mobile .detail-item {
    font-size: 16px;
  }

  .detail-title {
    display: inline-block;
    width: 180px;
    font-size: 12px;
  }

  .mobile .detail-title {
    width: 220px;
    font-size: 16px;
  }

  /** 決定点 ------------------------------------- */
  .format {
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 24px;
  }

  // 点数の下に線を引く
  .result {
    position: relative;
    padding-left: 40px;
    font-size: 40px;
    font-weight: bold;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      display: block;
      width: 200px;
      height: 4px;
      background: #aaa;
    }
  }

  .mobile .result {
    padding-left: 70px;
  }

  // もう一度のボタンは中央に置く。スマホでは横いっぱいにする
  .footer {
    display: grid;
    grid-template-columns: min(260px, 100%);
    justify-content: center;
    padding-top: 24px;
  }

  .mobile .footer {
    grid-template-columns: minmax(0, 1fr);
  }
</style>
