<script lang="ts">
  import { fade } from "svelte/transition";
  import { executionDeduct } from "../store/store";
  import { Motion } from "svelte-motion";
  import { Chart } from "chart.js/auto";
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
    getDeductionOfPointA,
    getDeductionOfDroppedApparatus,
  } from "../_service/culculator";

  let pointA: number;
  let pointB: number;
  let decisionPoints: number;
  export let show;

  executionDeduct.subscribe((data) => {
    pointA = getAmountOfPointA(data);
    pointB = getAmountOfPointB(data);
    decisionPoints = getDecisionPoints(data);
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
          $executionDeduct.pointA.beautifulPose.title,
          $executionDeduct.pointA.flexibility.title,
          $executionDeduct.pointA.naturalMovement.title,
          $executionDeduct.pointA.bendingWeight.title,
          $executionDeduct.pointA.jumpingHeight.title,
          $executionDeduct.pointA.bodyControl.title,
          $executionDeduct.pointA.heelRaise.title,
          $executionDeduct.pointA.weaknessAndStrength.title,
          $executionDeduct.pointA.connectMovement.title,
          $executionDeduct.pointA.apparatusControl.title,
          $executionDeduct.pointA.musicImage.title,
        ],
        datasets: [
          {
            data: [
              $executionDeduct.pointA.beautifulPose.value,
              $executionDeduct.pointA.flexibility.value,
              $executionDeduct.pointA.naturalMovement.value,
              $executionDeduct.pointA.bendingWeight.value,
              $executionDeduct.pointA.jumpingHeight.value,
              $executionDeduct.pointA.bodyControl.value,
              $executionDeduct.pointA.heelRaise.value,
              $executionDeduct.pointA.weaknessAndStrength.value,
              $executionDeduct.pointA.connectMovement.value,
              $executionDeduct.pointA.apparatusControl.value,
              $executionDeduct.pointA.musicImage.value,
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
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.beautifulPose.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.beautifulPose.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.flexibility.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.flexibility.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.naturalMovement.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.naturalMovement.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.bendingWeight.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.bendingWeight.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.jumpingHeight.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.jumpingHeight.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.bodyControl.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.bodyControl.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.heelRaise.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.heelRaise.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.weaknessAndStrength.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.weaknessAndStrength.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.connectMovement.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.connectMovement.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.apparatusControl.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.apparatusControl.value
                ).toFixed(3)}</span
              >
            </li>
            <li class="point-a-detail__item">
              <span class="point-a-detail__title"
                >{$executionDeduct.pointA.musicImage.title}</span
              >
              <span class="point-a-detail__value"
                >{getDeductionOfPointA(
                  $executionDeduct.pointA.musicImage.value
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
