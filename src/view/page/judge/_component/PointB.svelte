<script context="module" lang="ts">
  import { createEventDispatcher } from "svelte";
</script>

<script lang="ts">
  import { executionDeduct } from "../_store/store";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";

  const dispatch = createEventDispatcher();
</script>

<div
  class="point-b"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
  in:fly={$page.data.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2 class="header-title">Bの減点項目</h2>
    <div class="header-annotation">※数字で入力してください。</div>
  </header>
  <div class="section">
    <h3 class="section-title">手具を落とした回数</h3>
    <div class="section-container">
      <div class="dropped-apparatus">
        <h4 class="dropped-apparatus-title">1つの手具を落とした回数</h4>
        <input
          type="number"
          step="1"
          min="0"
          class="miss-point"
          bind:value={$executionDeduct.pointB.droppedApparatus.single}
        />
      </div>
      <div class="dropped-apparatus">
        <h4 class="dropped-apparatus-title">2つの手具を同時に落とした回数</h4>
        <input
          type="number"
          step="1"
          min="0"
          class="miss-point"
          bind:value={$executionDeduct.pointB.droppedApparatus.double}
        />
      </div>
    </div>
  </div>
  <div class="section">
    <h3 class="section-title">その他ミスによる減点</h3>
    <input
      type="number"
      step="0.05"
      min="0"
      class="miss-point"
      bind:value={$executionDeduct.pointB.miss}
    />
  </div>
  <div class="submit">
    <button class="submit-button" on:click={() => dispatch("submit")}>
      決定
    </button>
  </div>
</div>

<style lang="scss">
  .pc {
    --header-flex-direction: row;
    --gap: 16px;
    --dropped-apparatus-flex-direction: row;
    --dropped-apparatus-gap: 32px;
  }

  .sp {
    --header-flex-direction: column;
    --gap: 8px;
    --dropped-apparatus-flex-direction: column;
    --dropped-apparatus-gap: 8px;
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

  .section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .section-container {
    display: flex;
    flex-direction: var(--dropped-apparatus-flex-direction);
    gap: var(--dropped-apparatus-gap);
    width: 100%;
  }

  .dropped-apparatus {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .miss-point {
    height: 56px;
    width: 100%;
    margin: 0;
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
    width: 200px;
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
  }
</style>
