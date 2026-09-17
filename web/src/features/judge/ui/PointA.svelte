<script lang="ts">
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'
  import Radio from './Radio.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  let submitted = $state(false)

  const color = $derived($judgementApparatus?.imageColor ?? 'gray')

  /**
   * 決定ボタンを押したときに、親へ知らせてボタンを消す
   */
  const handleSubmit = () => {
    onsubmit()
    submitted = true
  }
</script>

<div
  class="point-a"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2>{m.judge_point_a_heading()}</h2>
    <div>{m.judge_point_a_note()}</div>
  </header>
  <div class="section">
    <h3 class="section-title">{m.judge_point_a_section()}</h3>
    <div class="question-list">
      {#each POINT_A_ITEMS as item (item.key)}
        <Radio
          annotation={item.annotation()}
          selected={$executionDeduct.pointA[item.key]}
          title={item.title()}
          uniqueId={item.key}
          onchange={(option) => executionDeduct.selectPointA(item.key, option)}
        />
      {/each}
    </div>
  </div>
  {#if !submitted}
    <div class="submit {color}">
      <button class="submit-button" type="submit" onclick={handleSubmit}>
        {m.judge_submit()}
      </button>
    </div>
  {/if}
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --header-gap: 16px;
    --section-font-size: 26px;
    --question-list-gap: 40px;
  }

  .mobile {
    --header-flex-direction: column;
    --header-gap: 8px;
    --section-font-size: 24px;
    --question-list-gap: 32px;
  }

  .gray {
    --submit-button-background: #707070;
  }

  .blue {
    --submit-button-background: #0065a4;
  }

  .red {
    --submit-button-background: #d30000;
  }

  .yellow {
    --submit-button-background: #ecc200;
  }

  .green {
    --submit-button-background: #219300;
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
