<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import {
    EVENTS,
    eventDateRange,
    eventSortKey,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  const locale = getLocale()

  /** 年ごとにまとめた大会。新しい年から並べる */
  const eventsByYear: [string, CalendarEvent[]][] = []
  for (const event of [...EVENTS].sort((a, b) => eventSortKey(b).localeCompare(eventSortKey(a)))) {
    const year = eventSortKey(event).slice(0, 4)
    const last = eventsByYear[eventsByYear.length - 1]
    if (last?.[0] === year) last[1].push(event)
    else eventsByYear.push([year, [event]])
  }
</script>

<!--
  すべての大会の詳細ページへのリンク。探しやすさのためと、
  検索エンジンが詳細ページをたどれるようにするために置く（カレンダー表示だとその月の分しか出ないため）
-->
<section class="archive" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <h2 class="archive-title">{m.calendar_archive_title()}</h2>
  <p class="archive-lead">
    年を開くと、その年に載せている大会・発表会・講習会がすべて並びます。
    過去の大会からも、その年の出典と結果ページをたどれます。
  </p>
  {#each eventsByYear as [year, events] (year)}
    <details class="year">
      <summary class="year-summary">
        {m.calendar_archive_year({ year })}<span class="count"
          >{events.length}{m.calendar_count_unit_other()}</span
        >
      </summary>
      <ul class="list">
        {#each events as event (event.id)}
          <li>
            <a class="link" href={localizeHref(ROUTES.calendar.detail(event.id))}>
              <span class="date">{eventDateRange(event, locale)}</span>
              <span>{localizeEvent(event, locale).title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </details>
  {/each}
</section>

<style lang="scss">
  .desktop {
    --width: 100%;
    --title-font-size: #{$font-size-24};
    --link-font-size: #{$font-size-16};
    --date-width: 220px;
    --link-direction: row;
  }

  .mobile {
    --width: 100%;
    --title-font-size: #{$font-size-20};
    --link-font-size: #{$font-size-14};
    --date-width: auto;
    --link-direction: column;
  }

  .archive {
    box-sizing: border-box;
    width: var(--width);
    max-width: 100%;
    margin: $space-size-48 auto 0;
    padding: $space-size-20;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
  }

  .archive-title {
    margin: 0 0 $space-size-8;
    padding-left: $space-size-12;
    border-left: $border-size-4 solid map.get($sky-blue, button);
    font-size: var(--title-font-size);
    line-height: 1.4;
    color: map.get($gray, text);
  }

  .archive-lead {
    margin: 0 0 $space-size-16;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
  }

  .year {
    border-bottom: $border-size-1 solid map.get($gray, 200);
  }

  .year-summary {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    padding: $space-size-12 $space-size-8;
    font-weight: bold;
    color: map.get($gray, text);
    cursor: pointer;
  }

  .year-summary:hover {
    color: map.get($sky-blue, text);
  }

  .count {
    padding: 0 $space-size-8;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: $border-radius-64;
    background: map.get($sky-blue, background);
    font-variant-numeric: tabular-nums;
  }

  .list {
    margin: 0;
    padding: 0 0 $space-size-12;
    list-style: none;
  }

  .link {
    display: flex;
    flex-direction: var(--link-direction);
    gap: $space-size-4;
    padding: $space-size-8 $space-size-16;
    font-size: var(--link-font-size);
    color: map.get($gray, text);

    &:hover {
      background: map.get($sky-blue, background);
    }
  }

  .date {
    flex: 0 0 var(--date-width);
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }
</style>
