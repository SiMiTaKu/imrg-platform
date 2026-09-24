<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { getDeductionOfCounts } from '../lib/calculator'
  import { PointBUnit, type PointBGroup, type PointBItem } from '../model/executionDeduct'
  import { judgementApparatus } from '../store/apparatus'
  import { executionDeduct } from '../store/executionDeduct'
  import TimesCounter from './TimesCounter.svelte'

  type Props = {
    /** どの区分か */
    group: PointBGroup
  }

  const { group }: Props = $props()

  const locale = getLocale()
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)

  /** いまの手具で数えられる項目だけに絞ったもの */
  const items = $derived(
    group.items.filter((item) => {
      if (item.pairOnly && !$judgementApparatus?.isDouble) return false
      if (item.apparatusSlug && item.apparatusSlug !== $judgementApparatus?.slug) return false
      return true
    }),
  )
  /** すでに数えた項目。畳んでいても何を入れたか分かるように、見出しへ出す */
  const counted = $derived(items.filter((item) => $executionDeduct.pointB.counts[item.key] > 0))
  /** この区分の減点 */
  const deduction = $derived(
    getDeductionOfCounts(
      $executionDeduct,
      items.map((item) => item.key),
    ),
  )

  /**
   * 1回あたりの減点の出し方を、数える単位に合わせて文にする
   * @param item - 数える欠点
   * @returns 例: その都度 0.10
   */
  const unitLabel = (item: PointBItem): string => {
    const value = formatNumber(item.value, locale, 2)
    if (item.unit === PointBUnit.SECOND) return m.judge_point_b_unit_second({ value })
    if (item.unit === PointBUnit.STEP) return m.judge_point_b_unit_step({ value })
    return m.judge_point_b_unit_each({ value })
  }
</script>

<!-- 区分1つ分。0回のものまで見えると長くなるので、ふだんは畳んでおく -->
<details class="group {color}">
  <summary class="group-summary">
    <span class="group-title">{group.title()}</span>
    <span class="group-state" class:counted={counted.length > 0}>
      {m.judge_point_b_group_summary({
        count: counted.length,
        deduction: formatNumber(deduction, locale, 2),
      })}
    </span>
  </summary>
  <ul class="items">
    {#each items as item (item.key)}
      <li class="item" class:active={$executionDeduct.pointB.counts[item.key] > 0}>
        <div class="words">
          <span class="item-title">{item.title()}</span>
          <span class="item-unit">{unitLabel(item)}</span>
        </div>
        <TimesCounter
          count={$executionDeduct.pointB.counts[item.key]}
          onchange={(count) => executionDeduct.setCount(item.key, count)}
        />
      </li>
    {/each}
  </ul>
</details>

<style lang="scss">
  .gray {
    --accent-color: #{map.get($theme, gray)};
  }

  .blue {
    --accent-color: #{map.get($theme, blue)};
  }

  .red {
    --accent-color: #{map.get($theme, red)};
  }

  .yellow {
    --accent-color: #{map.get($theme, yellow)};
  }

  .green {
    --accent-color: #{map.get($theme, green)};
  }

  .group {
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
  }

  .group-summary {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: $space-size-8;
    padding: $space-size-12 $space-size-16;
    cursor: pointer;
  }

  .group-title {
    font-size: $font-size-18;
    font-weight: bold;
  }

  .group-state {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);

    // 件数と減点は意味のまとまりなので、途中では折り返さない
    white-space: nowrap;
  }

  .group-state.counted {
    color: var(--accent-color);
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    margin: 0;
    padding: 0 $space-size-16 $space-size-16;
    list-style: none;
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: $space-size-12;
    padding: $space-size-8 $space-size-12;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 8px;
  }

  .item.active {
    border-color: var(--accent-color);
    background: map.get($gray, background);
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-inline-size: 0;
  }

  .item-title {
    font-size: $font-size-16;
    line-height: 1.6;
  }

  .item-unit {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }
</style>
