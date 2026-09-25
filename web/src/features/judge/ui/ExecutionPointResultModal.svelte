<script lang="ts">
  import type { Chart } from 'chart.js/auto'
  import { m } from '$lib/paraglide/messages'
  import { Button, Modal } from '@imrg-platform/design-system'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { POINT_B_SUMMARIES } from '../config/pointB'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import { JudgeThemeColor } from '../config/themeColor'
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfDroppedApparatus,
    getDeductionOfPointBSummary,
  } from '../lib/calculator'
  import { renderDetailChart } from '../lib/detailChart'
  import { buildScoreFormula } from '../lib/scoreFormula'
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

  /** 内訳の入れ物。開くときに中身の高さを測るために持つ */
  let pullDown = $state<HTMLElement>()

  /**
   * 内訳のグラフを描き直す。スマホでは項目名を出さない
   */
  const renderChart = () => {
    if (!canvas) return
    chart?.destroy()
    chart = renderDetailChart(canvas, {
      labels: POINT_A_ITEMS.map((item) => item.title()),
      // 付けた点をそのまま描く。5 がいちばん良いので、外側ほど良い形になる
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
      /*
        高さは中身を測って決める。決め打ちにすると、設問が増えたときに
        下が切れたまま送れなくなる（実際に B の設問を増やして切れた）
      */
      requestAnimationFrame(() => {
        pointDetailHeight = pullDown?.scrollHeight ?? 0
        pointDetailOpacity = 1
      })
      return
    }
    pointDetailOpacity = 0
    setTimeout(() => {
      pointDetailHeight = 0
    }, 100)
  }
</script>

{#if show}
  <Modal title={m.judge_result_title()} size="small" {onclose} closeLabel={m.modal_close()}>
    <div class:mobile={isMobile}>
      <!-- 式と得点は1つのまとまり。式は添えものなので小さく、横に並べる -->
      <div class="score">
        <span class="format">{formula}</span>
        <span class="result">{formatNumber(decisionPoints, locale)}</span>
      </div>

      <div class="actions">
        <!-- 内訳は見たい人だけが開く。もう一度採点するより先に置く -->
        <div class="detail-switch">
          <Button
            variant="sky-blue-outline"
            width={isMobile ? 'full' : 'auto'}
            onclick={switchShowPointADetail}
            size="medium"
          >
            {isPointDetailShown ? m.judge_result_hide_detail() : m.judge_result_show_detail()}
          </Button>
        </div>

        <div
          bind:this={pullDown}
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
              <!--
                B は設問のまま8行並べても、どこで引かれたのかが掴めない。
                「手具の扱い」「投げのミス」のように、減点の出どころとして
                名前が付くまとまりにして出す
              -->
              <li class="detail-item">
                <span class="detail-title">{m.judge_result_dropped_deduction()}</span>
                <span>{formatNumber(getDeductionOfDroppedApparatus($executionDeduct), locale)}</span
                >
              </li>
              {#each POINT_B_SUMMARIES as summary (summary.key)}
                <li class="detail-item">
                  <span class="detail-title">{summary.title()}</span>
                  <span
                    >{formatNumber(
                      getDeductionOfPointBSummary($executionDeduct, summary),
                      locale,
                    )}</span
                  >
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <div class="footer">
          <Button width="full" onclick={onretry} size="medium" variant="sky-blue"
            >{m.judge_result_retry()}</Button
          >
        </div>
      </div>
    </div>
  </Modal>
{/if}

<style lang="scss">
  // 内訳を開くボタンと、もう一度のボタン。得点の下に縦へ積む
  .actions {
    display: flex;
    flex-direction: column;
    padding-top: $space-size-16;
  }

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
    min-inline-size: 0;
    flex: 1 1 280px;
    margin: 0;
    padding: 0;
  }

  /*
    内訳の1行。項目名と減点を左右に離して並べる。
    12px では読めなかったので、本文と同じくらいまで大きくする
  */
  .detail-item {
    display: flex;
    gap: $space-size-12;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: $space-size-8;
    padding-bottom: $space-size-4;
    font-size: $font-size-16;
    font-weight: bold;
    list-style: none;
    border-bottom: 1px solid map.get($gray, 200);
  }

  .detail-title {
    min-inline-size: 0;
    font-weight: normal;
    color: map.get($gray, text);
  }

  /** 決定点 ------------------------------------- */

  /*
    式と得点。式は「どう出したか」の添えものなので小さくし、
    得点の横に並べる。狭い画面では式が下へ回る
  */
  .score {
    display: flex;
    gap: $space-size-12;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: $space-size-16;
    border-bottom: 4px solid map.get($gray, 300);
  }

  .format {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .mobile .format {
    font-size: $font-size-12;
  }

  .result {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.1;
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
