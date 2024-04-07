<script context='module' lang='ts'>
  import Radio from "./Radio.svelte";
  import { createEventDispatcher } from "svelte";
</script>

<script lang='ts'>
  import { executionDeduct } from "../_store/store";
  import { fly } from "svelte/transition";
  import { pageData } from "../../../atomic/device-store/store";

  const dispatch = createEventDispatcher<{ submit: void }>();
</script>

<div
  class='point-a'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class='header'>
    <h2>Aの減点項目</h2>
    <div>※あなたが感じた直感を信じて1〜10点満点で選択してください。</div>
  </header>
  <div class='section'>
    <h3 class='section-title'>徒手の技術</h3>
    <div class='question-list'>
      {#each Object.keys($executionDeduct.pointA) as key (key)}
        <Radio
          annotation={$executionDeduct.pointA[key].info.annotation}
          title={$executionDeduct.pointA[key].info.title}
          uniqueId={key}
          bind:userSelected={$executionDeduct.pointA[key].option}
        />
      {/each}
    </div>
  </div>
  <div class='submit'>
    <button
      class='submit-button'
      type='submit'
      on:click={() => dispatch("submit")}
    >
      決定
    </button>
  </div>
</div>

<style lang='scss'>
  .pc {
    --header-flex-direction: row;
    --header-gap: 16px;
    --section-font-size: 26px;
    --question-list-gap: 40px;
  }

  .sp {
    --header-flex-direction: column;
    --header-gap: 8px;
    --section-font-size: 24px;
    --question-list-gap: 24px;
  }

  .point-a {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: var(--header-gap);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .question-list {
    display: flex;
    flex-direction: column;
    gap: var(--question-list-gap);
  }

  .section-title {
    font-size: var(--section-font-size);
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
