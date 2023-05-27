<script lang="ts">
  import { fade, fly       } from 'svelte/transition';
  import { executionDeduct } from "../ts/form/executionDeduct/store";
  import { Motion          } from "svelte-motion";
  import {
    getAmountOfPointA,
    getAmountOfPointB,
    getDecisionPoints,
  } from "../ts/form/executionDeduct/Culculator";

  let pointA:           number;
  let pointB:           number;
  let decisionPoints:   number;
  export let show;

  executionDeduct.subscribe(data => {
    pointA         = getAmountOfPointA(data);
    pointB         = getAmountOfPointB(data);
    decisionPoints = getDecisionPoints(data);
  });

  let pointDetailButtonTitle: string = '内訳を見る';
  let pointDetailOpacity:     number = 0;
  let pointDetailHeight:      number = 0;
  function switchShowPointADetail() {
    if(pointDetailOpacity === 0) {
      pointDetailButtonTitle = '内訳を閉じる';
      pointDetailHeight      = 430;
      setTimeout(() => { pointDetailOpacity = 1; }, 100);
    } else {
      pointDetailButtonTitle = '内訳を見る';
      pointDetailOpacity     = 0;
      setTimeout(() => { pointDetailHeight  = 0; }, 100);
    }
  }
</script>

{#if show}
  <section id="execution-point-result-modal" transition:fade>
    <div class="modal-overlay"></div>
    <div class="decision-point-container">
      <h2 class="decision-point-container__title">決定点</h2>
      <button class="point-a-detail__pull-down-button" on:click={switchShowPointADetail}>{pointDetailButtonTitle}</button>
      <Motion animate={{opacity: pointDetailOpacity, height: pointDetailHeight}} transition={{ duration: .5 }} let:motion>
        <ul class="point-a-detail" use:motion>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.beautifulPose.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.beautifulPose.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.beautifulPose.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.beautifulPose.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.flexibility.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.flexibility.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.naturalMovement.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.naturalMovement.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.bendingWeight.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.bendingWeight.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.jumpingHeight.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.jumpingHeight.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.bodyControl.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.bodyControl.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.heelRaise.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.heelRaise.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.weaknessAndStrength.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.weaknessAndStrength.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.connectMovement.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.connectMovement.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.apparatusControl.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.apparatusControl.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointA.musicImage.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointA.musicImage.value.toFixed(3)}</span>
          </li>
          <li class="point-a-detail__item">
            <span class="point-a-detail__title">{$executionDeduct.pointB.miss.title}</span>
            <span class="point-a-detail__value">{$executionDeduct.pointB.miss.value.toFixed(3)}</span>
          </li>
        </ul>
      </Motion>
      <div class="decision-point-container__format">10.00　-　( {pointA.toFixed(3)} + {pointB.toFixed(3)} )</div>
      <div class="decision-point-container__result">{decisionPoints.toFixed(3)}</div>
    </div>
  </section>
{/if}

<style lang="scss">
  #execution-point-result-modal {
    position: fixed;
    top:      0;
    left:     0;
    right:    0;
    bottom:   0;

    .modal-overlay {
      position:         fixed;
      top:              0;
      left:             0;
      right:            0;
      bottom:           0;
      background-color: #333333;
      opacity:          0.7;
    }

    .decision-point-container {
      position:         relative;
      top:              50%;
      left:             50%;
      width:            400px;
      padding:          100px 50px;
      transform:        translate(-50%, -50%);
      background-color: white;
      border-radius:    8px;

      &__title {
        display:       inline-block;
        padding:       0 24px;
        font-size:     24px;
        font-weight:   bold;
        color:         white;
        margin:        0 0 16px;
        border-radius: 8px;
        background:    #32538D;
      }

      &__format {
        font-size:     24px;
        margin-bottom: 16px;
      }

      &__result {
        padding-left: 20px;
        font-size:    40px;
        font-weight:  bold;
      }

      &__result:after {
        content:    "";
        position:   absolute;
        display:    block;
        width:      200px;
        height:     4px;
        left:       40px;
        background: #AAAAAA;
      }
    }

    /** ポイントA 詳細 ------------------------------- */
    .point-a-detail {
      width:   320px;
      height:  0;
      margin:  0 0 16px;
      padding: 0;
      opacity: 0;

      &__pull-down-button {
        margin-bottom: 8px;
        background:    white;
        border-radius: 4px;
      }

      &__item {
        margin-bottom: 8px;
        list-style:    none;
        border-bottom: 1px solid #AAAAAA;
      }

      &__title {
        display: inline-block;
        width:   250px;
      }
    }
  }
</style>