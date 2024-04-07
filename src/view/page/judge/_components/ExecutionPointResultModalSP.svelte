<script lang='ts'>
  import { fade } from "svelte/transition";
  import { executionDeduct } from "../_store/store";
  import { Motion } from "svelte-motion";
  import { Chart } from "chart.js/auto";
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
  } from "../_service/culculator";

  $: pointA = getAmountOfPointA($executionDeduct);
  $: pointB = getAmountOfPointB($executionDeduct);
  $: decisionPoints = getDecisionPoints($executionDeduct);

  export let show;

  let pointDetailButtonTitle: string = "内訳を見る";
  let pointDetailOpacity: number = 0;
  let pointDetailHeight: number = 0;
  let pointDetailMarginTop: string = "0px";
  let isPointDetailShown: boolean = false;

  function switchShowPointADetail(): void {
    isPointDetailShown = !isPointDetailShown;
    if (isPointDetailShown) {
      renderPointDetailChart();
      pointDetailButtonTitle = "内訳を閉じる";
      pointDetailHeight = 300;
      setTimeout(() => {
        pointDetailOpacity = 1;
      }, 100);
    } else {
      pointDetailButtonTitle = "内訳を見る";
      pointDetailOpacity = 0;
      setTimeout(() => {
        pointDetailHeight = 0;
      }, 100);
    }
  }

  /** @note Chartが描画されているか判別する変数 */
  let myChart = undefined;
  function renderPointDetailChart() {
    let ctx = <HTMLCanvasElement>document.getElementById("detail-chart");
    if (myChart) {
      myChart.clear();
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: Object.values($executionDeduct.pointA).map(
          (point) => point.info.title
        ),
        datasets: [
          {
            data: Object.values($executionDeduct.pointA).map(
              (point) => point.option.code
            ),
          },
        ],
      },
      options: {
        scales: {
          r: {
            max: 10, //グラフの最大値
            min: 0, //グラフの最小値
            ticks: { stepSize: 1 }, //目盛間隔
            pointLabels: false,
          },
        },
        plugins: { legend: { display: false } },
      },
    });
  }

  function oneMoreJudge(): void {
    location.reload();
  }
</script>

{#if show}
  <section class='modal' transition:fade>
    <div class='container'>
      <div class='header'>
        <h2 class='title'>決定点</h2>
        <button
          class='pull-down-button'
          type='button'
          on:touchstart={switchShowPointADetail}
        >{pointDetailButtonTitle}</button
        >
      </div>
      <Motion
        animate={{
          opacity: pointDetailOpacity,
          height: pointDetailHeight,
          marginTop: pointDetailMarginTop,
        }}
        transition={{ duration: 0.5 }}
        let:motion
      >
        <div class='pull-down' use:motion>
          <div class='wrapper'>
            <div class='chart'>
              <canvas id='detail-chart'
                      height='256'
                      width='256' />
            </div>
            <ul class='detail'>
              {#each Object.values($executionDeduct.pointA) as point, index (index)}
                <li class='detail-item'>
                  <span class='detail-title'>{point.info.title}</span>
                  <span>{point.option.value.toFixed(3)}</span>
                </li>
              {/each}
              <li class='detail-item'>
                <span class='detail-title'> その他ミスによる減点 </span>
                <span>{$executionDeduct.pointB.miss.toFixed(3)}</span>
              </li>
            </ul>
          </div>
        </div>
      </Motion>
      <div class='format'>
        10.00　-　( {pointA.toFixed(3)} + {pointB.toFixed(3)} )
      </div>
      <div class='result'>
        {decisionPoints.toFixed(3)}
      </div>
      <div class='footer'>
        <button class='footer-button'
                type='button'
                on:click={oneMoreJudge}
        >もう一度採点する</button
        >
      </div>
    </div>
  </section>
{/if}

<style lang='scss'>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:before {
      content: "";
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
    width: 85%;
    padding: 100px 5% 50px;
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
    margin: 0;
    padding: 0 24px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: #32538d;
    vertical-align: middle;
  }

  .format {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .result {
    padding-left: 70px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 24px;

    &:after {
      content: "";
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
    width: 180px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: #32538d;
    border: none;
    border-radius: 8px;
  }

  /** ポイント詳細 プルダウン ------------------------- */
  .pull-down {
    opacity: 0;
    height: 0;
    margin: 0;
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
    font-size: 14px;
    font-weight: bold;
    color: #555555;
    background: white;
    border-radius: 4px;
    border: 2px solid #555555;
    font-family: YuGothic, sans-serif;
    vertical-align: middle;
    cursor: pointer;
  }

  .detail-item {
    margin-bottom: 8px;
    font-size: 16px;
    list-style: none;
    border-bottom: 1px solid #aaaaaa;
  }

  .detail-title {
    display: inline-block;
    width: 220px;
    font-size: 16px;
  }
</style>
