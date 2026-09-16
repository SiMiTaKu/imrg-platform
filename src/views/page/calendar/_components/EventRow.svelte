<script context='module' lang='ts'>
  import { CATEGORY_LABELS } from "../_data/category"
  import type { CalendarEvent } from "../_data/model"
  import { formatDateRangeJa, toDateBadge } from "../_lib/calendar"
</script>

<script lang='ts'>
  export let event: CalendarEvent

  $: label = CATEGORY_LABELS[event.category]
  $: badge = toDateBadge(event.startDate)
</script>

<!-- 一覧の1行。押すと詳細ページへ移る -->
<a style:--color={label.color}
   class='event-row'
   href={`/calendar/${event.id}/`}>
  <span class='date'
        aria-hidden='true'>
    <span class='date-month'>{badge.month}月</span>
    {#if badge.day}
      <span class='date-day'>{badge.day}</span>
      <span class='date-weekday'>{badge.weekdayJa}</span>
    {:else}
      <span class='date-undecided'>日付<br />未定</span>
    {/if}
  </span>

  <span class='body'>
    <span class='meta'>
      <span class='category'>{label.ja}<span lang='en'>{label.en}</span></span>
      {#if event.status === "tentative"}
        <span class='tag'>日程は予定</span>
      {/if}
      {#if event.resultUrl}
        <span class='tag result'>結果あり</span>
      {/if}
    </span>
    <span class='title'>{event.titleJa}</span>
    {#if event.titleEn !== event.titleJa}
      <span class='title-en'
            lang='en'>{event.titleEn}</span>
    {/if}
    <span class='sub'>
      {formatDateRangeJa(event)}{#if event.venueJa}<span class='separator'>・</span>{event.venueJa}{/if}
    </span>
  </span>

  <span class='arrow'
        aria-hidden='true'>›</span>
</a>

<style lang='scss'>
  .event-row {
    display: grid;
    grid-template-columns: 52px 1fr 12px;
    align-items: center;
    gap: $space-size-12;
    padding: $space-size-12 $space-size-16 $space-size-12 $space-size-12;
    border: $border-size-1 solid map.get($gray, 100);
    border-left: $border-size-4 solid var(--color);
    border-radius: $border-radius-8;
    background: $white;
    color: map.get($gray, text);
    transition: background-color 0.2s;

    &:hover {
      background: map.get($sky-blue, background);
    }
  }

  .date {
    display: grid;
    justify-items: center;
    line-height: 1.15;
    font-variant-numeric: tabular-nums;
  }

  .date-month,
  .date-weekday {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .date-day {
    font-size: $font-size-26;
    font-weight: bold;
  }

  .date-undecided {
    margin-top: $space-size-4;
    font-size: $font-size-11;
    font-weight: bold;
    text-align: center;
    color: map.get($gray, light-text);
  }

  .body {
    display: grid;
    gap: $space-size-2;
    min-width: 0;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-4 $space-size-8;
    font-size: $font-size-12;
    line-height: 1.4;
  }

  .category {
    font-weight: bold;
    color: map.get($gray, 600);
  }

  .category span[lang="en"] {
    margin-left: $space-size-4;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .tag {
    padding: 0 $space-size-4;
    border-radius: $border-radius-4;
    background: map.get($gray, background);
    color: map.get($gray, light-text);
  }

  .result {
    background: map.get($sky-blue, background);
    color: map.get($sky-blue, text);
  }

  .title {
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.45;
    font-feature-settings: "palt";
  }

  .title-en {
    font-size: 13px;
    line-height: 1.4;
    color: map.get($gray, light-text);
  }

  .sub {
    font-size: 13px;
    line-height: 1.5;
    color: map.get($gray, 600);
    font-variant-numeric: tabular-nums;
  }

  .separator {
    margin: 0 $space-size-2;
    color: map.get($gray, 300);
  }

  .arrow {
    font-size: $font-size-20;
    color: map.get($gray, 300);
  }
</style>
