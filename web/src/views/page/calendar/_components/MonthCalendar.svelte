<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { CATEGORY_LABELS, CATEGORY_ORDER } from '../_data/category'
  import type { CalendarEvent } from '../_data/model'
  import {
    WEEKDAYS_EN,
    WEEKDAYS_JA,
    buildMonthGrid,
    eventsInMonth,
    eventsOnDay,
    formatDayJa,
    formatMonthEn,
    formatMonthJa,
    shiftMonth,
    toMonthKey,
  } from '../_lib/calendar'

  /** PC で1マスに出す大会名の数。超えた分は「+N件」にまとめる */
  const MAX_CHIPS = 3
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'

  export let monthKey: string
  export let events: CalendarEvent[]
  export let selectedDay: string | null
  export let today: string
  export let canPrev: boolean
  export let canNext: boolean

  const dispatch = createEventDispatcher<{ month: string; select: string }>()

  $: weeks = buildMonthGrid(monthKey)
  $: undated = eventsInMonth(events, monthKey).filter((event) => event.startDate.length === 7)
</script>

<div class="month-calendar" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <div class="nav">
    <button
      class="nav-button"
      type="button"
      aria-label="前の月 / Previous month"
      disabled={!canPrev}
      on:click={() => dispatch('month', shiftMonth(monthKey, -1))}>‹</button
    >
    <h3 class="month-title">
      {formatMonthJa(monthKey)}
      <span lang="en">{formatMonthEn(monthKey)}</span>
    </h3>
    <button
      class="nav-button"
      type="button"
      aria-label="次の月 / Next month"
      disabled={!canNext}
      on:click={() => dispatch('month', shiftMonth(monthKey, 1))}>›</button
    >
  </div>
  {#if toMonthKey(today) !== monthKey}
    <button class="this-month" type="button" on:click={() => dispatch('month', toMonthKey(today))}
      >今月に戻る / This month</button
    >
  {/if}

  <table class="grid">
    <thead>
      <tr>
        {#each WEEKDAYS_JA as weekday, index (weekday)}
          <th class:sunday={index === 0} class:saturday={index === 6} scope="col">
            {weekday}<span lang="en">{WEEKDAYS_EN[index]}</span>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each weeks as week (week[0].dateKey)}
        <tr>
          {#each week as cell (cell.dateKey)}
            {@const dayEvents = cell.inMonth ? eventsOnDay(events, cell.dateKey) : []}
            <td
              class="cell"
              class:outside={!cell.inMonth}
              class:selected={cell.dateKey === selectedDay}
            >
              <button
                class="day-button"
                type="button"
                aria-label={`${formatDayJa(cell.dateKey)} ${dayEvents.length}件`}
                aria-pressed={cell.dateKey === selectedDay}
                disabled={dayEvents.length === 0}
                on:click={() => dispatch('select', cell.dateKey)}
              >
                <span
                  class="day-number"
                  class:muted={!cell.inMonth}
                  class:sunday={cell.inMonth && cell.weekday === 0}
                  class:saturday={cell.inMonth && cell.weekday === 6}
                  class:today-mark={cell.dateKey === today}>{cell.day}</span
                >
                {#if $pageData.isMobile && dayEvents.length}
                  <span class="dots">
                    {#each dayEvents.slice(0, MAX_CHIPS) as event (event.id)}
                      <span style:--color={CATEGORY_LABELS[event.category].color} class="dot"
                      ></span>
                    {/each}
                  </span>
                {/if}
              </button>

              {#if !$pageData.isMobile && dayEvents.length}
                <ul class="chips">
                  {#each dayEvents.slice(0, MAX_CHIPS) as event (event.id)}
                    <li>
                      <a
                        style:--color={CATEGORY_LABELS[event.category].color}
                        class="chip"
                        title={event.titleJa}
                        href={`/calendar/${event.id}/`}>{event.titleJa}</a
                      >
                    </li>
                  {/each}
                  {#if dayEvents.length > MAX_CHIPS}
                    <li>
                      <button
                        class="more"
                        type="button"
                        on:click={() => dispatch('select', cell.dateKey)}
                      >
                        +{dayEvents.length - MAX_CHIPS}件
                      </button>
                    </li>
                  {/if}
                </ul>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  {#if undated.length}
    <div class="undated">
      <span class="undated-label">日付未定 <span lang="en">Date TBD</span></span>
      {#each undated as event (event.id)}
        <a
          style:--color={CATEGORY_LABELS[event.category].color}
          class="undated-chip"
          href={`/calendar/${event.id}/`}>{event.titleJa}</a
        >
      {/each}
    </div>
  {/if}

  <ul class="legend">
    {#each CATEGORY_ORDER as key (key)}
      <li class="legend-item">
        <span style:--color={CATEGORY_LABELS[key].color} class="dot"></span>
        {CATEGORY_LABELS[key].ja}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .pc {
    --cell-height: 108px;
    --month-title-size: #{$font-size-24};
  }

  .sp {
    --cell-height: 52px;
    --month-title-size: #{$font-size-20};
  }

  .month-calendar {
    display: grid;
    gap: $space-size-12;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-size-8;
  }

  .nav-button {
    width: 44px;
    height: 44px;
    font-size: $font-size-24;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: 50%;
    background: $white;
    line-height: 1;
    cursor: pointer;

    &:disabled {
      opacity: 0.35;
      cursor: default;
    }
  }

  .month-title {
    display: grid;
    justify-items: center;
    font-size: var(--month-title-size);
    line-height: 1.3;
    font-variant-numeric: tabular-nums;
  }

  .month-title span[lang='en'] {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .this-month {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-64;
    background: $white;
    justify-self: center;
    cursor: pointer;
  }

  .grid {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: $white;
  }

  th {
    padding: $space-size-4 0;
    border-bottom: $border-size-1 solid map.get($gray, 200);
    font-size: $font-size-12;
    color: map.get($gray, 600);
    text-align: center;
  }

  th span[lang='en'] {
    display: block;
    font-size: $font-size-10;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .cell {
    height: var(--cell-height);
    padding: $space-size-2;
    border: $border-size-1 solid map.get($gray, 100);
    vertical-align: top;
  }

  .outside {
    background: map.get($gray, background);
  }

  .selected {
    outline: $border-size-2 solid map.get($sky-blue, button);
    outline-offset: -2px;
    background: map.get($sky-blue, background);
  }

  .day-button {
    display: flex;
    gap: $space-size-2;
    width: 100%;
    padding: $space-size-2 0;
    font: inherit;
    color: inherit;
    border: none;
    background: transparent;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  .day-number {
    display: grid;
    width: 24px;
    height: 24px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 50%;
    place-items: center;
    font-variant-numeric: tabular-nums;
  }

  .sunday {
    color: #d64545;
  }

  .saturday {
    color: #1f6fd1;
  }

  .muted {
    color: map.get($gray, 300);
  }

  .today-mark {
    color: $white;
    background: map.get($sky-blue, button);
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 3px;
  }

  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color);
  }

  // 長い大会名でもマスからはみ出さず「…」で切れるよう、列の最小幅を0にする
  .chips {
    display: grid;
    gap: $space-size-2;
    grid-template-columns: minmax(0, 1fr);
    list-style: none;
  }

  .chip {
    display: block;
    padding: 1px $space-size-4;
    font-size: $font-size-11;
    color: map.get($gray, text);
    border-radius: 2px;
    background: color-mix(in srgb, var(--color) 12%, white);
    border-left: 3px solid var(--color);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      opacity: 0.75;
    }
  }

  .more {
    padding: 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: none;
    background: none;
    cursor: pointer;
  }

  .undated {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-8;
    padding: $space-size-8 $space-size-12;
    border: $border-size-1 dashed map.get($gray, 200);
    border-radius: $border-radius-8;
  }

  .undated-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .undated-label span[lang='en'] {
    font-weight: normal;
  }

  .undated-chip {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border-radius: 2px;
    background: color-mix(in srgb, var(--color) 12%, white);
    border-left: 3px solid var(--color);
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-16;
    list-style: none;
    font-size: $font-size-12;
    color: map.get($gray, 600);
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: $space-size-4;
  }
</style>
