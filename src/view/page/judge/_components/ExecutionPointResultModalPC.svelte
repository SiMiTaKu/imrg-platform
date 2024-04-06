<script lang='ts'>
  import { fade } from "svelte/transition";
  import { executionDeduct } from "../_store/store";
  import { Motion } from "svelte-motion";
  import { Chart } from "chart.js/auto";
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfPointA,
    getDeductionOfDroppedApparatus,
  } from "../_service/culculator";

  export let show;

  $: pointA = getAmountOfPointA($executionDeduct);
  $: pointB = getAmountOfPointB($executionDeduct);
  $: decisionPoints = getDecisionPoints($executionDeduct);

  let pointDetailButtonTitle: string = "内訳を見る";
  let pointDetailOpacity: number = 0;
  let pointDetailHeight: number = 0;
  let pointDetailMarginTop: string = "0px";

  function switchShowPointADetail() {
    if (pointDetailOpacity === 0) {
      renderPointDetailChart();
      pointDetailMarginTop = "-72px";
      pointDetailButtonTitle = "内訳を閉じる";
      pointDetailHeight = 430;
      setTimeout(() => {
        pointDetailOpacity = 1;
      }, 100);
    } else {
      pointDetailMarginTop = "0px";
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
        labels: [
          "美しい姿勢",
          "柔軟性",
          "動きの技術（自然・幅）",
          "動きの技術（膝の踏込み）",
          "跳躍の高さ",
          "四肢の制御",
          "かかとの引き上げ",
          "張り, 活気, 間, アクセント",
          "運動のつなぎの技術",
          "自然な手具操作",
          "音楽のイメージ",
        ],
        datasets: [
          {
            data: [
              $executionDeduct.pointA.beautifulPose,
              $executionDeduct.pointA.flexibility,
              $executionDeduct.pointA.naturalMovement,
              $executionDeduct.pointA.bendingWeight,
              $executionDeduct.pointA.jumpingHeight,
              $executionDeduct.pointA.bodyControl,
              $executionDeduct.pointA.heelRaise,
              $executionDeduct.pointA.weaknessAndStrength,
              $executionDeduct.pointA.connectMovement,
              $executionDeduct.pointA.apparatusControl,
              $executionDeduct.pointA.musicImage,
            ],
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
          class='detail-pull-down-button'
          type='button'
          on:click={switchShowPointADetail}>{pointDetailButtonTitle}</button
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
          <div class='chart'>
            <canvas id='detail-chart'
                    height='400'
                    width='500' />
          </div>
          <ul class='detail'>
            <li class='detail-item'>
              <span class='detail-title'>美しい姿勢</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.beautifulPose
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>柔軟性</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.flexibility
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>動きの技術（自然・幅）</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.naturalMovement
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>動きの技術（膝の踏込み）</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.bendingWeight
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>跳躍の高さ</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.jumpingHeight
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>四肢の制御</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.bodyControl
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>かかとの引き上げ</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.heelRaise
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>張り, 活気, 間, アクセント</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.weaknessAndStrength
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>運動のつなぎの技術</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.connectMovement
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>自然な手具操作</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.apparatusControl
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>音楽のイメージ</span>
              <span
              >{getDeductionOfPointA(
                $executionDeduct.pointA.musicImage
              ).toFixed(3)}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'>手具を落とした減点</span>
              <span
              >{getDeductionOfDroppedApparatus($executionDeduct).toFixed(
                3
              )}</span
              >
            </li>
            <li class='detail-item'>
              <span class='detail-title'> その他ミスによる減点 </span>
              <span>
                {$executionDeduct.pointB.miss.toFixed(3)}
              </span>
            </li>
          </ul>
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
    background: #32538d;
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
    position: relative;
    width: 200px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: #32538d;
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
