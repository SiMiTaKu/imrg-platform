<script lang="ts">
  import type { Snippet } from 'svelte'
  import { pageData } from '@shared/lib/device'
  import { JudgeStepState, type JudgeStep } from '../config/steps'

  type Props = {
    /** どの段階か */
    step: JudgeStep
    /** 進み具合 */
    state: JudgeStepState
    /** 段階の中身（採点の部品）。まだ来ていない段階では描かない */
    children?: Snippet
  }

  const { step, state, children = undefined }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<!-- 段階1つ分の枠。番号・見出し・手引き・中身を、重ねずに縦へ積む -->
<section class="panel {state}" class:mobile={isMobile}>
  <header class="head">
    <span class="number" aria-hidden="true">{step.number}</span>
    <div class="words">
      <h2>{step.title}</h2>
      <p class="note">{state === JudgeStepState.WAITING ? step.waiting : step.note}</p>
    </div>
    {#if state === JudgeStepState.CURRENT}
      <span class="badge">いまここ</span>
    {:else if state === JudgeStepState.DONE}
      <span class="badge filled">入力ずみ</span>
    {/if}
  </header>

  {#if state !== JudgeStepState.WAITING}
    <!-- 採点表は横に長くなることがあるので、この中だけで横に送る -->
    <div class="body">
      {@render children?.()}
    </div>
  {/if}
</section>

<style lang="scss">
  .panel {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    padding: $space-size-32;
    border: 1px solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
  }

  .panel.mobile {
    gap: $space-size-16;
    padding: $space-size-20 $space-size-16;
  }

  // いまいる段階だけ、青の枠で前に出す。黄は上の進み具合の印にだけ残す
  .current {
    border-color: map.get($sky-blue, border);
    box-shadow: 0 4px 20px rgb(0 0 0 / 8%);
  }

  // まだ来ていない段階は、うすく置いておく。この先に何があるかは見せる
  .waiting {
    border-style: dashed;
    border-color: map.get($gray, 200);
    background: map.get($gray, background);
  }

  .head {
    display: flex;
    align-items: flex-start;
    gap: $space-size-16;
  }

  .panel.mobile .head {
    gap: $space-size-12;
  }

  .number {
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    font-size: $font-size-18;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
  }

  .current .number {
    background: map.get($sky-blue, button);
  }

  .waiting .number {
    color: map.get($gray, light-text);
    background: map.get($gray, 200);
  }

  .words {
    min-inline-size: 0;
  }

  h2 {
    margin: 0 0 $space-size-4;
    font-size: $font-size-20;
  }

  .panel.mobile h2 {
    font-size: $font-size-18;
  }

  .note {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }

  // 見出しの右端へ。重ねずに置く
  .badge {
    flex: none;
    margin-left: auto;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    white-space: nowrap;
  }

  .badge.filled {
    color: map.get($sky-blue, text);
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  .body {
    max-width: 100%;
    overflow-x: auto;
  }
</style>
