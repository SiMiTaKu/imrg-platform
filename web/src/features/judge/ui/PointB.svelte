<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { normalizeMiss } from '../lib/calculator'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'
  import TimesCounter from './TimesCounter.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)

  // 入力中の値を書き換えないように、入力欄には最初の値だけを渡す
  const initialMiss = $executionDeduct.pointB.miss

  /**
   * その他ミスによる減点の入力を、採点に使える値にしてストアへ入れる
   * @param event - input イベント
   */
  const handleMissInput = (event: Event & { currentTarget: HTMLInputElement }) => {
    executionDeduct.setMiss(normalizeMiss(event.currentTarget.valueAsNumber))
  }
</script>

<div
  class="point-b"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2>{m.judge_point_b_heading()}</h2>
    <div>{m.judge_point_b_note()}</div>
  </header>
  <div class="section {color}">
    <h3>{m.judge_point_b_dropped_section()}</h3>
    <div class="section-container">
      <div class="dropped-apparatus">
        <h4>{m.judge_point_b_dropped_single()}</h4>
        <TimesCounter
          count={$executionDeduct.pointB.droppedApparatus.single}
          onchange={(count) => executionDeduct.setDroppedCount('single', count)}
        />
      </div>
      {#if $judgementApparatus?.isDouble}
        <div class="dropped-apparatus">
          <h4>{m.judge_point_b_dropped_double()}</h4>
          <TimesCounter
            count={$executionDeduct.pointB.droppedApparatus.double}
            onchange={(count) => executionDeduct.setDroppedCount('double', count)}
          />
        </div>
      {/if}
    </div>
  </div>
  <div class="section {color}">
    <h3>{m.judge_point_b_miss()}</h3>
    <input
      class="miss-point"
      aria-label={m.judge_point_b_miss()}
      min="0"
      step="0.05"
      type="number"
      value={initialMiss}
      oninput={handleMissInput}
    />
  </div>
  <div class="submit {color}">
    <button class="submit-button" type="submit" onclick={onsubmit}>{m.judge_submit()}</button>
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
    --submit-button-background: #{map.get($theme, gray)};
    --forcus-border-color: #{map.get($theme, gray)};
  }

  .blue {
    --submit-button-background: #{map.get($theme, blue)};
    --forcus-border-color: #{map.get($theme, blue)};
  }

  .red {
    --submit-button-background: #{map.get($theme, red)};
    --forcus-border-color: #{map.get($theme, red)};
  }

  .yellow {
    --submit-button-background: #{map.get($theme, yellow)};
    --forcus-border-color: #{map.get($theme, yellow)};
  }

  .green {
    --submit-button-background: #{map.get($theme, green)};
    --forcus-border-color: #{map.get($theme, green)};
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
