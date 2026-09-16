<script lang="ts">
  import { fade } from 'svelte/transition'
  import { executionDeduct } from '../_store/store'
  import { Chart } from 'chart.js/auto'
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfDroppedApparatus,
  } from '../_service/culculator'
  import { judgementApparatus } from '../_store/apparatus'

  export let show: boolean

  $: pointA = getAmountOfPointA($executionDeduct)
  $: pointB = getAmountOfPointB($executionDeduct)
  $: decisionPoints = getDecisionPoints($executionDeduct)

  let pointDetailButtonTitle: string = '内訳を見る'
  let pointDetailOpacity: number = 0
  let pointDetailHeight: number = 0
  let pointDetailMarginTop: string = '0px'

  function switchShowPointADetail() {
    if (pointDetailOpacity === 0) {
      renderPointDetailChart()
      pointDetailMarginTop = '-72px'
      pointDetailButtonTitle = '内訳を閉じる'
      pointDetailHeight = 430
      setTimeout(() => {
        pointDetailOpacity = 1
      }, 100)
    } else {
      pointDetailMarginTop = '0px'
      pointDetailButtonTitle = '内訳を見る'
      pointDetailOpacity = 0
      setTimeout(() => {
        pointDetailHeight = 0
      }, 100)
    }
  }

  const borderColor = {
    gray: '#707070',
    blue: '#0065a4',
    red: '#d30000',
    yellow: '#ecc200',
    green: '#219300',
  }

  /** @note Chartが描画されているか判別する変数 */
  let myChart: Chart | undefined = undefined
  function renderPointDetailChart() {
    let ctx = <HTMLCanvasElement>document.getElementById('detail-chart')
    if (myChart) {
      myChart.clear()
      myChart.destroy()
    }
    myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: Object.values($executionDeduct.pointA).map((point) => point.info.title),
        datasets: [
          {
            data: Object.values($executionDeduct.pointA).map((point) => point.option.code),
            borderColor: borderColor[$judgementApparatus ? $judgementApparatus.imageColor : 'gray'],
          },
        ],
      },
      options: {
        scales: {
          r: {
            max: 10, //グラフの最大値
            min: 0, //グラフの最小値
            ticks: { stepSize: 1 }, //目盛間隔
          },
        },
        plugins: { legend: { display: false } },
      },
    })
  }

  function oneMoreJudge(): void {
    location.reload()
  }
</script>

{#if show}
  <section class="modal" transition:fade>
    <div class="container">
      <div class="header">
        <h2 class="title {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}">
          決定点
        </h2>
        <button class="detail-pull-down-button" type="button" on:click={switchShowPointADetail}
          >{pointDetailButtonTitle}</button
        >
      </div>
      <div
        style:opacity={pointDetailOpacity}
        style:height={`${pointDetailHeight}px`}
        style:margin-top={pointDetailMarginTop}
        class="pull-down"
      >
        <div class="chart">
          <canvas id="detail-chart" width="500" height="400">
            <!-- HTML5の仕様上canvasタグは終了タグを必要とするため文字は表示されないが終了タグを記載している -->
          </canvas>
        </div>
        <ul class="detail">
          {#each Object.values($executionDeduct.pointA) as point, index (index)}
            <li class="detail-item">
              <span class="detail-title">{point.info.title}</span>
              <span>{point.option.value.toFixed(3)}</span>
            </li>
          {/each}
          <li class="detail-item">
            <span class="detail-title">手具を落とした減点</span>
            <span>{getDeductionOfDroppedApparatus($executionDeduct).toFixed(3)}</span>
          </li>
          <li class="detail-item">
            <span class="detail-title"> その他ミスによる減点 </span>
            <span>
              {$executionDeduct.pointB.miss.toFixed(3)}
            </span>
          </li>
        </ul>
      </div>
      <div class="format">
        10.00　-　( {pointA.toFixed(3)} + {pointB.toFixed(3)} )
      </div>
      <div class="result">
        {decisionPoints.toFixed(3)}
      </div>
      <div class="footer">
        <button
          class="footer-button {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}"
          type="button"
          on:click={oneMoreJudge}>もう一度採点する</button
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333333;
      opacity: 0.7;
    }
  }

  .container {
    position: relative;
    top: 50%;
    left: 50%;
    width: 800px;
    padding: 100px 50px 50px;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 8px;
  }

  .header {
    position: absolute;
    top: 50px;
    z-index: 100;
  }

  .title {
    display: inline-block;
    padding: 0 24px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 0 0 16px;
    border-radius: 8px;
    background: var(--title-background-color);
  }

  .chart {
    display: inline-block;
    margin-right: 32px;
    vertical-align: middle;
  }

  .format {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .result {
    padding-left: 40px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 200px;
      height: 4px;
      left: 50px;
      background: #aaaaaa;
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
    background: var(--footer-button-background-color);
    border: none;
    border-radius: 8px;
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
    background: white;
    border-radius: 4px;
    font-family: YuGothic, sans-serif;

    &:hover {
      cursor: pointer;
    }
  }

  .detail-item {
    margin-bottom: 8px;
    font-size: 12px;
    list-style: none;
    border-bottom: 1px solid #aaaaaa;
  }

  .detail-title {
    display: inline-block;
    width: 180px;
    font-size: 12px;
  }
</style>
