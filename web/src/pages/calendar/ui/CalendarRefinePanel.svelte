<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { CALENDAR_REGIONS, type CalendarRegionKey } from '../lib/region'
  import { ANY, type Any, type CalendarRefine, type RefineCount } from '../lib/refine'

  /** 年・地域で絞り込む欄の引数 */
  interface Props {
    /** 今の年・地域の条件 */
    refine: CalendarRefine
    /** 年ごとの件数（新しい年から並んだもの） */
    yearCounts: RefineCount<string>[]
    /** 年を絞り込まないときの件数 */
    yearTotal: number
    /** 地域ごとの件数。`ANY` には全体の件数が入る */
    regionCounts: Map<CalendarRegionKey | Any, number>
    /** 年を変えたとき */
    onyearchange: (year: string | Any) => void
    /** 地域を変えたとき */
    onregionchange: (region: CalendarRegionKey | Any) => void
  }

  const { refine, yearCounts, yearTotal, regionCounts, onyearchange, onregionchange }: Props =
    $props()

  // 1件も無い地域はボタンを出さない。押しても何も出ないボタンを並べない
  const visibleRegions = $derived(
    CALENDAR_REGIONS.filter((region) => (regionCounts.get(region.key) ?? 0) > 0),
  )
</script>

<!-- 種類とキーワードに続けて、年と地域でも絞り込めるようにする -->
<div class="refine">
  <div class="row">
    <span class="row-label" id="calendar-refine-year">開催年</span>
    <div class="chips" aria-labelledby="calendar-refine-year" role="group">
      <button
        class="chip"
        class:active={refine.year === ANY}
        type="button"
        aria-pressed={refine.year === ANY}
        onclick={() => onyearchange(ANY)}
      >
        {m.calendar_category_all()}<span class="count">{yearTotal}</span>
      </button>
      {#each yearCounts as year (year.value)}
        <button
          class="chip"
          class:active={refine.year === year.value}
          type="button"
          aria-pressed={refine.year === year.value}
          onclick={() => onyearchange(year.value)}
        >
          {m.calendar_archive_year({ year: year.value })}<span class="count">{year.count}</span>
        </button>
      {/each}
    </div>
  </div>

  <div class="row">
    <span class="row-label" id="calendar-refine-region">地域</span>
    <div class="chips" aria-labelledby="calendar-refine-region" role="group">
      <button
        class="chip"
        class:active={refine.region === ANY}
        type="button"
        aria-pressed={refine.region === ANY}
        onclick={() => onregionchange(ANY)}
      >
        {m.calendar_category_all()}<span class="count">{regionCounts.get(ANY) ?? 0}</span>
      </button>
      {#each visibleRegions as region (region.key)}
        <button
          class="chip"
          class:active={refine.region === region.key}
          type="button"
          aria-pressed={refine.region === region.key}
          onclick={() => onregionchange(region.key)}
        >
          {region.label}<span class="count">{regionCounts.get(region.key) ?? 0}</span>
        </button>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .refine {
    display: grid;
    gap: $space-size-12;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .row {
    display: grid;
    gap: $space-size-4;
  }

  .row-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, 600);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
  }

  .chip {
    display: flex;
    align-items: center;
    gap: $space-size-4;
    min-height: 32px;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, 300);
    border-radius: $border-radius-64;
    background: $white;
    line-height: 1.4;
    cursor: pointer;
  }

  .chip.active {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  // 件数を添えると、押す前に何件あるか分かる
  .count {
    font-size: $font-size-10;
    font-weight: normal;
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }

  .chip.active .count {
    color: $white;
  }
</style>
