<script context='module' lang='ts'>
  import { CATEGORY_LABELS } from "../_data/category"
  import type { CalendarEvent } from "../_data/model"
  import { formatDateRangeEn, formatDateRangeJa } from "../_lib/calendar"
</script>

<script lang='ts'>
  export let event: CalendarEvent

  $: label = CATEGORY_LABELS[event.category]
</script>

<article class='event-card'>
  <p class='badges'>
    <span class='badge category'>{label.ja} / {label.en}</span>
    {#if event.status === "tentative"}
      <span class='badge tentative'>日程は予定 / Tentative</span>
    {/if}
  </p>

  <h4 class='title'>{event.titleJa}</h4>
  {#if event.titleEn !== event.titleJa}
    <p class='title-en' lang='en'>{event.titleEn}</p>
  {/if}

  <dl class='details'>
    <dt>日程 / Date</dt>
    <dd>
      {formatDateRangeJa(event)}
      <span lang='en'>{formatDateRangeEn(event)}</span>
    </dd>

    {#if event.venueJa}
      <dt>会場 / Venue</dt>
      <dd>
        {event.venueJa}
        {#if event.venueEn}
          <span lang='en'>{event.venueEn}</span>
        {/if}
      </dd>
    {/if}

    {#if event.streamingJa}
      <dt>配信 / Live stream</dt>
      <dd>
        {event.streamingJa}
        {#if event.streamingEn}
          <span lang='en'>{event.streamingEn}</span>
        {/if}
      </dd>
    {/if}

    {#if event.noteJa}
      <dt>メモ / Note</dt>
      <dd>
        {event.noteJa}
        {#if event.noteEn}
          <span lang='en'>{event.noteEn}</span>
        {/if}
      </dd>
    {/if}
  </dl>

  <p class='links'>
    {#if event.officialUrl}
      <a href={event.officialUrl}
         rel='noopener noreferrer'
         target='_blank'>公式サイト / Official site</a>
    {/if}
    {#if event.resultUrl}
      <a href={event.resultUrl}
         rel='noopener noreferrer'
         target='_blank'>結果 / Results</a>
    {/if}
    {#if event.sourceUrl !== event.officialUrl && event.sourceUrl !== event.resultUrl}
      <a href={event.sourceUrl}
         rel='noopener noreferrer'
         target='_blank'>出典 / Source</a>
    {/if}
  </p>
</article>

<style lang='scss'>
  .event-card {
    display: grid;
    gap: $space-size-8;
    padding: $space-size-16 $space-size-20;
    border: $border-size-1 solid map.get($sky-blue, 200);
    border-radius: $border-radius-8;
    background: $white;
    color: map.get($gray, text);
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
  }

  .badge {
    padding: $space-size-2 $space-size-8;
    border-radius: $border-radius-4;
    font-size: $font-size-12;
    font-weight: bold;
  }

  .category {
    background: map.get($sky-blue, background);
    color: map.get($sky-blue, text);
  }

  .tentative {
    background: map.get($gray, background);
    color: map.get($gray, light-text);
  }

  .title {
    font-size: $font-size-18;
    line-height: 1.4;
  }

  .title-en {
    margin-top: -$space-size-8;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .details {
    display: grid;
    gap: $space-size-2;
    font-size: $font-size-14;
  }

  dt {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  dd:not(:last-child) {
    margin-bottom: $space-size-4;
  }

  dd span[lang="en"] {
    display: block;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-16;
    font-size: $font-size-14;
  }

  .links a {
    color: rgb(50, 150, 255);
  }
</style>
