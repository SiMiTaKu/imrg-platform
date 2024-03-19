<script context="module" lang="ts">
  import { createEventDispatcher } from "svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import { executionDeduct } from "../_store/store";
  import { fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let screenWidth;

  $: disabled = !(
    $executionDeduct.pointA.beautifulPose &&
    $executionDeduct.pointA.flexibility &&
    $executionDeduct.pointA.naturalMovement &&
    $executionDeduct.pointA.bendingWeight &&
    $executionDeduct.pointA.jumpingHeight &&
    $executionDeduct.pointA.bodyControl &&
    $executionDeduct.pointA.heelRaise &&
    $executionDeduct.pointA.weaknessAndStrength &&
    $executionDeduct.pointA.connectMovement &&
    $executionDeduct.pointA.apparatusControl &&
    $executionDeduct.pointA.musicImage &&
    $executionDeduct.pointB.droppedApparatus.singleApparatus.value &&
    $executionDeduct.pointB.droppedApparatus.doubleApparatus.value &&
    $executionDeduct.pointB.miss.value
  );
</script>

<svelte:window bind:outerWidth={screenWidth} />

<div
  class="point-b"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
  in:fly={{ x: 200 }}
>
  <header class="header">
    <h2 class="header-title">Bの減点項目</h2>
    <div class="header-annotation">※数字で入力してください。</div>
  </header>
  <h3>手具を落とした回数</h3>
  <div class="dropped-apparatus">
    <h4>1つの手具を落とした回数</h4>
    <input
      type="number"
      step="1"
      min="0"
      class="miss-point"
      bind:value={$executionDeduct.pointB.droppedApparatus.singleApparatus
        .value}
    />
  </div>
  <div class="dropped-apparatus">
    <h4>2つの手具を同時に落とした回数</h4>
    <input
      type="number"
      step="1"
      min="0"
      class="miss-point"
      bind:value={$executionDeduct.pointB.droppedApparatus.doubleApparatus
        .value}
    />
  </div>
  <h3>{$executionDeduct.pointB.miss.title}</h3>
  <input
    type="number"
    step="0.05"
    min="0"
    class="miss-point"
    bind:value={$executionDeduct.pointB.miss.value}
  />
  <div class="submit">
    <button
      class="submit-button"
      class:disabled
      on:click={() => dispatch("submit")}
      {disabled}
    >
      決定
    </button>
  </div>
</div>

<style lang="scss">
  .pc {
    --header-flex-direction: row;
    --gap: 16px;
  }

  .sp {
    --header-flex-direction: column;
    --gap: 8px;
  }

  .point-b {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: var(--gap);
  }

  .dropped-apparatus {
    display: inline-block;
    width: 355px;
  }

  .miss-point {
    height: 56px;
    width: 200px;
    margin-bottom: 8px;
    padding-left: 24px;
    font-size: 20px;
    font-weight: bold;
    border: solid 4px #aaaaaa;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;

    &:focus {
      border: solid 4px #32538d;
    }
  }

  .submit {
    text-align: center;
  }

  .submit-button {
    width: 100px;
    height: 56px;
    font-weight: bold;
    font-size: 20px;
    color: white;
    border: unset;
    border-radius: 8px;
    background: #32538d;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &.disabled {
      background: #aaaaaa;
      pointer-events: none;
    }
  }
</style>
