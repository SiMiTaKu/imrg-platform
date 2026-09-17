<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte'
</script>

<script lang="ts">
  import { fly } from 'svelte/transition'
  import { Apparatus } from '../_model/apparatus'
  import { executionDeduct } from '../_store/store'
  import { judgementApparatus } from '../_store/apparatus'
  import { pageData } from '@shared/lib/device'
  import TimesCounter from './TimesCounter.svelte'

  const dispatch = createEventDispatcher<{ submit: void }>()
</script>

<div
  class="point-b"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2>Bの減点項目</h2>
    <div>※数字で入力してください。</div>
  </header>
  <div class="section {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}">
    <h3>手具を落とした回数</h3>
    <div class="section-container">
      <div class="dropped-apparatus">
        <h4>1つの手具を落とした回数</h4>
        <TimesCounter bind:count={$executionDeduct.pointB.droppedApparatus.single} />
      </div>
      {#if Apparatus.isDoubleApparatus($judgementApparatus)}
        <div class="dropped-apparatus">
          <h4>2つの手具を同時に落とした回数</h4>
          <TimesCounter bind:count={$executionDeduct.pointB.droppedApparatus.double} />
        </div>
      {/if}
    </div>
  </div>
  <div class="section {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}">
    <h3>その他ミスによる減点</h3>
    <input
      class="miss-point"
      min="0"
      step="0.05"
      type="number"
      bind:value={$executionDeduct.pointB.miss}
    />
  </div>
  <div class="submit {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}">
    <button class="submit-button" type="submit" on:click={() => dispatch('submit')}> 決定 </button>
  </div>
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --gap: 16px;
    --dropped-apparatus-flex-direction: row;
    --dropped-apparatus-gap: 32px;
  }

  .mobile {
    --header-flex-direction: column;
    --gap: 8px;
    --dropped-apparatus-flex-direction: column;
    --dropped-apparatus-gap: 8px;
  }

  .gray {
    --submit-button-background: #707070;
    --forcus-border-color: #707070;
  }

  .blue {
    --submit-button-background: #0065a4;
    --forcus-border-color: #0065a4;
  }

  .red {
    --submit-button-background: #d30000;
    --forcus-border-color: #d30000;
  }

  .yellow {
    --submit-button-background: #ecc200;
    --forcus-border-color: #ecc200;
  }

  .green {
    --submit-button-background: #219300;
    --forcus-border-color: #219300;
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
    gap: 12px;
    width: 100%;
  }

  .miss-point {
    width: 100%;
    height: 56px;
    margin: 0;
    padding-left: 24px;
    font-size: 20px;
    font-weight: bold;
    border: solid 4px #aaa;
    border-radius: 8px;
    transition: 0.3s;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border: solid 4px var(--forcus-border-color);
    }
  }

  .submit {
    text-align: center;
  }

  .submit-button {
    width: 200px;
    height: 56px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: unset;
    border-radius: 8px;
    background: var(--submit-button-background);
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
</style>
