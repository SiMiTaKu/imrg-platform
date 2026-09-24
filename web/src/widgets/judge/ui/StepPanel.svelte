<script lang="ts">
  import type { Snippet } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { JudgeThemeColor, judgementApparatus } from '@features/judge'
  import { JudgeStepState, type JudgeStep } from '../config/steps'

  type Props = {
    /** どの段階か */
    step: JudgeStep
    /** 進み具合 */
    state: JudgeStepState
    /** 段階の中身（採点の部品）。まだ来ていない段階では描かない */
    children?: Snippet
    /**
     * 見出しと手引きを畳むか。
     *
     * @remarks
     * 手具を選んだあとのように、済んでしまえば読む必要が無くなる段階で立てる
     */
    compact?: boolean
  }

  const { step, state, children = undefined, compact = false }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  /** 手具のイメージカラー。段階の番号に使う */
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
</script>

<!-- 段階1つ分の枠。番号・見出し・手引き・中身を、重ねずに縦へ積む -->
<section
  class="panel {color}"
  class:mobile={isMobile}
  class:current={state === JudgeStepState.CURRENT}
  class:waiting={state === JudgeStepState.WAITING}
>
  {#if !compact}
    <header class="head">
      <span class="number" aria-hidden="true">{step.number}</span>
      <div class="words">
        <h2>{step.title()}</h2>
        <p class="note">{state === JudgeStepState.WAITING ? step.waiting() : step.note()}</p>
      </div>
      {#if state === JudgeStepState.CURRENT}
        <span class="badge">{m.judge_step_badge_current()}</span>
      {:else if state === JudgeStepState.DONE}
        <span class="badge filled">{m.judge_step_badge_done()}</span>
      {/if}
    </header>
  {/if}

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

  // 段階の番号。選んだ手具の色にする
  .gray {
    --step-color: #{map.get($theme, gray)};
  }

  .blue {
    --step-color: #{map.get($theme, blue)};
  }

  .red {
    --step-color: #{map.get($theme, red)};
  }

  .yellow {
    --step-color: #{map.get($theme, yellow)};
  }

  .green {
    --step-color: #{map.get($theme, green)};
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
    background: var(--step-color);
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
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }

  // 見出しの右端へ。重ねずに置く
  .badge {
    flex: none;
    margin-left: auto;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
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
