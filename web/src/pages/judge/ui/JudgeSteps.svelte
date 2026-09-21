<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { JUDGE_STEPS, JudgeStepState, getStepState } from '../config/steps'

  type Props = {
    /** いま何番目の段階にいるか */
    current: number
  }

  const { current }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<!-- いまどこを採点しているかを、常に上に出しておく -->
<nav class="steps" class:mobile={isMobile} aria-label={m.judge_steps_nav_label()}>
  <ol>
    {#each JUDGE_STEPS as step (step.number)}
      {@const state = getStepState(step.number, current)}
      <li class="step {state}" aria-current={state === JudgeStepState.CURRENT ? 'step' : undefined}>
        <span class="number" aria-hidden="true">{step.number}</span>
        <span class="label">{step.short()}</span>
      </li>
    {/each}
  </ol>
</nav>

<style lang="scss">
  .steps ol {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .step {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: $space-size-8;
    min-inline-size: 0;
    padding: $space-size-8 $space-size-12;
    border: 1px solid map.get($gray, 100);
    border-radius: 999px;
    background: $white;
  }

  .mobile .step {
    // 4つ並べると窮屈なので、2つずつ折り返す
    flex: 1 1 40%;
  }

  .number {
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    border-radius: 999px;
    background: map.get($gray, 100);
  }

  .label {
    min-inline-size: 0;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 済んだところは青（信頼）
  .done {
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  .done .number {
    color: $white;
    background: map.get($sky-blue, button);
  }

  .done .label {
    color: map.get($sky-blue, text);
  }

  // いまいるところは黄（行動）。目がここに行くようにする
  .current {
    border-color: map.get($yellow, border);
    background: map.get($yellow, background);
    box-shadow: 0 0 0 3px rgb(240 165 0 / 20%);
  }

  // 黄の地に白い文字は読めない（差 3.2）。
  // 決まりどおり「300 の地に黒の文字」にする（差 17.3）
  .current .number {
    color: $black;
    background: map.get($yellow, 300);
  }

  .current .label {
    color: map.get($yellow, 900);
  }

  .waiting {
    opacity: 0.7;
  }
</style>
