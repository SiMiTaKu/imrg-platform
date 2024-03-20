<script lang="ts">
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
  import { onMount } from "svelte";

  let pointA: number;
  let pointB: number;
  let decisionPoints: number;
  export let show;

  onMount(() => {
    executionDeduct.subscribe((data) => {
      pointA = getAmountOfPointA(data);
      pointB = getAmountOfPointB(data);
      decisionPoints = getDecisionPoints(data);
    });
  });

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
      pointDetailHeight = 400;
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
    let ctx = <HTMLCanvasElement>document.getElementById("point-detail-chart");
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
  <section id="execution-point-result-modal" transition:fade>
    <div class="modal-overlay"></div>
    <div class="decision-point-container">
      <div class="decision-point-container__header">
        <h2 class="decision-point-container__title">決定点</h2>
        <button
          class="point-a-detail__pull-down-button"
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
        <div id="point-detail-pull-down" use:motion>
          <div class="point-detail-chart-area">
            <canvas id="point-detail-chart" width="350" height="250"></canvas>
          </div>
          <ul class="point-a-detail">
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">美しい姿勢</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.beautifulPose
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">柔軟性</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.flexibility
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">動きの技術（自然・幅）</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.naturalMovement
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">動きの技術（膝の踏込み）</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.bendingWeight
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">跳躍の高さ</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.jumpingHeight
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">四肢の制御</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.bodyControl
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">かかとの引き上げ</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.heelRaise
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >張り, 活気, 間, アクセント</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.weaknessAndStrength
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">運動のつなぎの技術</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.connectMovement
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">自然な手具操作</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.apparatusControl
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">音楽のイメージ</span>
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.musicImage
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title">手具を落とした減点</span>
              <span class="point-a-detail__value"
                >{getDeductionOfDroppedApparatus($executionDeduct).toFixed(
                  3
                )}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointB.miss.title}</span
              >
              <span class="point-a-detail__value"
                >{$executionDeduct.pointB.miss.value.toFixed(3)}</span
              >
            </li>
          </ul>
        </div>
      </Motion>
      <div class="decision-point-container__format">
        10.00　-　( {pointA.toFixed(3)} + {pointB.toFixed(3)} )
      </div>
      <div class="decision-point-container__result">
        {decisionPoints.toFixed(3)}
      </div>
      <div class="decision-point-container__reset-button-container">
        <button
          class="decision-point-container__reset-button"
          on:click={oneMoreJudge}>もう一度採点する</button
        >
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  #execution-point-result-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333333;
      opacity: 0.7;
    }

    .decision-point-container {
      position: relative;
      top: 50%;
      left: 50%;
      width: 85%;
      padding: 100px 5% 50px;
      transform: translate(-50%, -50%);
      background-color: white;
      border-radius: 8px;

      &__header {
        position: absolute;
        top: 50px;
        z-index: 100;
      }

      &__title {
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

      &__format {
        font-size: 24px;
        margin-bottom: 16px;
      }

      &__result {
        padding-left: 70px;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 24px;
      }

      &__result:after {
        content: "";
        position: absolute;
        display: block;
        width: 200px;
        height: 4px;
        left: 50px;
        background: #aaaaaa;
      }

      &__reset-button-container {
        text-align: center;
      }

      &__reset-button {
        width: 180px;
        height: 48px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background: #32538d;
        border: none;
        border-radius: 8px;
      }
    }

    /** ポイント詳細 プルダウン ------------------------- */
    #point-detail-pull-down {
      opacity: 0;
      height: 0;
      margin: 0;
      overflow: scroll;
    }

    /** ポイントA 詳細 ------------------------------- */
    .point-detail-chart-area {
      margin-bottom: 8px;
    }

    .point-a-detail {
      width: 270px;
      margin: 0 auto 16px;
      padding: 0;
      vertical-align: middle;

      &__pull-down-button {
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

      &__item {
        margin-bottom: 8px;
        font-size: 16px;
        list-style: none;
        border-bottom: 1px solid #aaaaaa;
      }

      &__title {
        display: inline-block;
        width: 220px;
        font-size: 16px;
      }
    }
  }
</style>
