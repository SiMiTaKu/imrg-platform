<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { JudgeThemeColor } from '../config/themeColor'
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { POINT_B_GROUPS } from '../config/pointB'
  import { getAmountOfCountedFaults, normalizeMiss } from '../lib/calculator'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'
  import PointBGroup from './PointBGroup.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  const locale = getLocale()
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
  /** 数えた欠点の減点の合計 */
  const counted = $derived(getAmountOfCountedFaults($executionDeduct))

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
    <div class="section-head">
      <h3>{m.judge_point_b_counted_section()}</h3>
      <p class="total">
        {m.judge_point_b_counted_total()}
        <span class="total-value">{formatNumber(counted, locale, 2)}</span>
      </p>
    </div>
    <div class="groups">
      {#each POINT_B_GROUPS as group (group.key)}
        <PointBGroup {group} />
      {/each}
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

  <div class="submit">
    <Button size="large" onclick={onsubmit} block>{m.judge_submit()}</Button>
  </div>
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --gap: 16px;
  }

  .mobile {
    --header-flex-direction: column;
    --gap: 8px;
  }

  .gray {
    --forcus-border-color: #{map.get($theme, gray)};
  }

  .blue {
    --forcus-border-color: #{map.get($theme, blue)};
  }

  .red {
    --forcus-border-color: #{map.get($theme, red)};
  }

  .yellow {
    --forcus-border-color: #{map.get($theme, yellow)};
  }

  .green {
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

  .section-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: $space-size-12;
  }

  .total {
    margin: 0;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .total-value {
    display: inline-block;
    font-size: $font-size-16;
    color: var(--forcus-border-color);

    // 数と見出しは意味のまとまりなので、数の途中では折り返さない
    white-space: nowrap;
  }

  .groups {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
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

  // 送るボタンは中央に置く。スマホでは横いっぱいにする
  .submit {
    display: grid;
    grid-template-columns: min(260px, 100%);
    justify-content: center;
  }

  .mobile .submit {
    grid-template-columns: minmax(0, 1fr);
  }
</style>
