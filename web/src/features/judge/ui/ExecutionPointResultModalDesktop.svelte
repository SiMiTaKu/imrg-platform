<script lang="ts">
  import type { Chart } from 'chart.js/auto'
  import { fade } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfDroppedApparatus,
  } from '../lib/calculator'
  import { renderDetailChart } from '../lib/detailChart'
  import { buildScoreFormula, formatPoint } from '../lib/formatPoint'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'

  type Props = {
    /** 結果を出すか */
    show: boolean
  }

  const { show }: Props = $props()

  const locale = getLocale()
  const color = $derived($judgementApparatus?.imageColor ?? 'gray')
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
  let pointDetailMarginTop = $state('0px')
  let canvas: HTMLCanvasElement | undefined = $state()
  let chart: Chart | undefined = undefined

  $effect(() => () => chart?.destroy())

  /**
   * 内訳のグラフを描き直す
   */
  const renderChart = () => {
    if (!canvas) return
    chart?.destroy()
    chart = renderDetailChart(canvas, {
      labels: POINT_A_ITEMS.map((item) => item.title()),
      values: POINT_A_ITEMS.map((item) => $executionDeduct.pointA[item.key].code),
      color,
      showsPointLabels: true,
    })
  }

  /**
   * 内訳を開け閉めする
   */
  const switchShowPointADetail = () => {
    isPointDetailShown = !isPointDetailShown
    if (isPointDetailShown) {
      renderChart()
      pointDetailMarginTop = '-72px'
      pointDetailHeight = 430
      setTimeout(() => {
        pointDetailOpacity = 1
      }, 100)
      return
    }
    pointDetailMarginTop = '0px'
    pointDetailOpacity = 0
    setTimeout(() => {
      pointDetailHeight = 0
    }, 100)
  }

  /**
   * ページを読み込み直して、最初から採点する
   */
  const oneMoreJudge = () => {
    location.reload()
  }
</script>

{#if show}
  <section class="modal" transition:fade>
    <div class="container">
      <div class="header">
        <h2 class="title {color}">
          {m.judge_result_title()}
        </h2>
        <button class="detail-pull-down-button" type="button" onclick={switchShowPointADetail}
          >{isPointDetailShown
            ? m.judge_result_hide_detail()
            : m.judge_result_show_detail()}</button
        >
      </div>
      <div
        style:opacity={pointDetailOpacity}
        style:height={`${pointDetailHeight}px`}
        style:margin-top={pointDetailMarginTop}
        class="pull-down"
      >
        <div class="chart">
          <canvas id="detail-chart" width="500" height="400" bind:this={canvas}>
            <!-- HTML5の仕様上canvasタグは終了タグを必要とするため文字は表示されないが終了タグを記載している -->
          </canvas>
        </div>
        <ul class="detail">
          {#each POINT_A_ITEMS as item (item.key)}
            <li class="detail-item">
              <span class="detail-title">{item.title()}</span>
              <span>{formatPoint($executionDeduct.pointA[item.key].value, locale)}</span>
            </li>
          {/each}
          <li class="detail-item">
            <span class="detail-title">{m.judge_result_dropped_deduction()}</span>
            <span>{formatPoint(getDeductionOfDroppedApparatus($executionDeduct), locale)}</span>
          </li>
          <li class="detail-item">
            <span class="detail-title"> {m.judge_point_b_miss()} </span>
            <span>
              {formatPoint($executionDeduct.pointB.miss, locale)}
            </span>
          </li>
        </ul>
      </div>
      <div class="format">
        {formula}
      </div>
      <div class="result">
        {formatPoint(decisionPoints, locale)}
      </div>
      <div class="footer">
        <button class="footer-button {color}" type="button" onclick={oneMoreJudge}
          >{m.judge_result_retry()}</button
        >
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  .gray {
    --title-background-color: #707070;
    --footer-button-background-color: #707070;
  }

  .blue {
    --title-background-color: #0065a4;
    --footer-button-background-color: #0065a4;
  }

  .red {
    --title-background-color: #d30000;
    --footer-button-background-color: #d30000;
  }

  .yellow {
    --title-background-color: #ecc200;
    --footer-button-background-color: #ecc200;
  }

  .green {
    --title-background-color: #219300;
    --footer-button-background-color: #219300;
  }

  .modal {
    position: fixed;
    inset: 0;

    &::before {
      content: '';
      position: fixed;
      inset: 0;
      background-color: #333;
      opacity: 0.7;
    }
  }

  .container {
    position: relative;
    width: 800px;
    padding: 100px 50px 50px;
    border-radius: 8px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .header {
    position: absolute;
    top: 50px;
    z-index: 100;
  }

  .title {
    display: inline-block;
    margin: 0 0 16px;
    padding: 0 24px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: var(--title-background-color);
  }

  .chart {
    display: inline-block;
    margin-right: 32px;
    vertical-align: middle;
  }

  .format {
    margin-bottom: 16px;
    font-size: 24px;
  }

  .result {
    margin-bottom: 20px;
    padding-left: 40px;
    font-size: 40px;
    font-weight: bold;

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 200px;
      height: 4px;
      left: 50px;
      background: #aaa;
    }
  }

  .footer {
    text-align: center;
  }

  .footer-button {
    position: relative;
    width: 200px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 8px;
    background: var(--footer-button-background-color);
    z-index: 100;
    cursor: pointer;
  }

  /** ポイント詳細 プルダウン ------------------------- */
  .pull-down {
    opacity: 0;
    height: 0;
    margin: 0;
    transition:
      opacity 0.5s ease-out,
      height 0.5s ease-out,
      margin-top 0.5s ease-out;
  }

  /** ポイントA 詳細 ------------------------------- */
  .detail {
    display: inline-block;
    width: 220px;
    margin: 0 0 16px;
    padding: 0;
    vertical-align: middle;
  }

  .detail-pull-down-button {
    margin-bottom: 8px;
    font-family: YuGothic, sans-serif;
    border-radius: 4px;
    background: white;

    &:hover {
      cursor: pointer;
    }
  }

  .detail-item {
    margin-bottom: 8px;
    font-size: 12px;
    list-style: none;
    border-bottom: 1px solid #aaa;
  }

  .detail-title {
    display: inline-block;
    width: 180px;
    font-size: 12px;
  }
</style>
