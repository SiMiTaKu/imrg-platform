<script lang="ts">
  import type { Chart } from 'chart.js/auto'
  import { fade } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import { getAmountOfPointA, getAmountOfPointB, getDecisionPoints } from '../lib/calculator'
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
      showsPointLabels: false,
    })
  }

  /**
   * 内訳を開け閉めする
   */
  const switchShowPointADetail = () => {
    isPointDetailShown = !isPointDetailShown
    if (isPointDetailShown) {
      renderChart()
      pointDetailHeight = 300
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
        <button class="pull-down-button" type="button" ontouchstart={switchShowPointADetail}
          >{isPointDetailShown
            ? m.judge_result_hide_detail()
            : m.judge_result_show_detail()}</button
        >
      </div>
      <div
        style:opacity={pointDetailOpacity}
        style:height={`${pointDetailHeight}px`}
        style:margin-top="0px"
        class="pull-down"
      >
        <div class="wrapper">
          <div class="chart">
            <canvas id="detail-chart" width="256" height="256" bind:this={canvas}>
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
              <span class="detail-title"> {m.judge_point_b_miss()} </span>
              <span>{formatPoint($executionDeduct.pointB.miss, locale)}</span>
            </li>
          </ul>
        </div>
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
    width: 85%;
    padding: 100px 5% 50px;
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
    margin: 0;
    padding: 0 24px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: var(--title-background-color);
    vertical-align: middle;
  }

  .format {
    margin-bottom: 16px;
    font-size: 24px;
  }

  .result {
    margin-bottom: 24px;
    padding-left: 70px;
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
    width: 180px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 8px;
    background: var(--footer-button-background-color);
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
    overflow: scroll;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  /** ポイントA 詳細 ------------------------------- */
  .chart {
    width: 256px;
    margin-bottom: 8px;
  }

  .detail {
    width: 270px;
    margin: 0 auto 16px;
    padding: 0;
    vertical-align: middle;
  }

  .pull-down-button {
    display: inline-block;
    width: 120px;
    height: 32px;
    font-family: YuGothic, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #555;
    border: 2px solid #555;
    border-radius: 4px;
    background: white;
    vertical-align: middle;
    cursor: pointer;
  }

  .detail-item {
    margin-bottom: 8px;
    font-size: 16px;
    list-style: none;
    border-bottom: 1px solid #aaa;
  }

  .detail-title {
    display: inline-block;
    width: 220px;
    font-size: 16px;
  }
</style>
