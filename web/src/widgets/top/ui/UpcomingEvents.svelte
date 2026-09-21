<script lang="ts">
  import { onMount } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import {
    EVENTS,
    UPDATED_AT,
    categoryColor,
    categoryLabel,
    eventDateRange,
    eventSortKey,
    isTentative,
    isUpcoming,
    localizeEvent,
  } from '@entities/calendarEvent'
  import { toDateKey } from '@shared/lib/date'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ActionButton } from '@shared/ui'
  import { UPCOMING_EVENT_COUNT } from '../config/sections'

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)

  // HTML は掲載内容を最後に確かめた日の時点で書き出す。
  // 見ているときは、その端末の今日で数え直して、終わった大会を出さないようにする
  let today = $state(UPDATED_AT)
  onMount(() => {
    today = toDateKey(new Date())
  })

  const upcoming = $derived(
    EVENTS.filter((event) => isUpcoming(event, today))
      .sort((left, right) => eventSortKey(left).localeCompare(eventSortKey(right)))
      .slice(0, UPCOMING_EVENT_COUNT),
  )
</script>

<!--
  トップでも「次はこれ」が分かるようにする。
  件数を絞って見せ、探すのはカレンダーのページに任せる
-->
{#if upcoming.length}
  <section class="upcoming" class:mobile={isMobile}>
    <div class="inner">
      <header>
        <h2>{m.top_upcoming_title()}</h2>
        <p>{m.top_upcoming_lead()}</p>
      </header>

      <ul class="cards">
        {#each upcoming as event (event.id)}
          {@const localized = localizeEvent(event, locale)}
          <li style:--accent={categoryColor(event.category)}>
            <a href={localizeHref(ROUTES.calendar.detail(event.id))}>
              <!-- 日付と札は1行に。別の行にすると card が1行ぶん高くなる -->
              <span class="meta">
                <span class="date">{eventDateRange(event, locale)}</span>
                <span class="category">{categoryLabel(event.category)}</span>
                {#if isTentative(event)}
                  <span class="tentative">{m.top_upcoming_tentative()}</span>
                {/if}
              </span>

              <span class="title">{localized.title}</span>
              {#if localized.venue}
                <span class="venue">{localized.venue}</span>
              {/if}

              <!-- 下に置きたいものは重ねず、余った高さで押し下げる -->
              <span class="arrow" aria-hidden="true">→</span>
            </a>
          </li>
        {/each}
      </ul>

      <div class="search">
        <ActionButton href={localizeHref(ROUTES.calendar.index)} variant="fill" size="large">
          {m.top_upcoming_search()}
        </ActionButton>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  .upcoming {
    width: 100%;
    background: map.get($gray, background);
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
  }

  header {
    text-align: center;
    margin-bottom: $space-size-40;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  header p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    grid-template-columns: minmax(0, 1fr);
  }

  // 重ねずに縦へ積む。高さの違うカードでも矢印が下でそろう
  .cards a {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-20;
    color: inherit;
    border: 1px solid map.get($gray, 100);

    // 種類の色は上の線にだけ置く。カード全体を色で塗り分けない
    border-top: 4px solid var(--accent);
    border-radius: 8px;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
    text-decoration: none;
  }

  .cards a:hover {
    border-color: map.get($sky-blue, border);
    border-top-color: var(--accent);
    transform: translateY(-2px);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-4 $space-size-8;
    font-size: $font-size-12;
    line-height: 1.6;
  }

  .date {
    flex: none;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .category {
    padding: 0 $space-size-8;
    font-weight: bold;
    color: map.get($gray, 600);
    border-radius: 999px;
    background: color-mix(in srgb, var(--accent) 14%, white);
  }

  .tentative {
    padding: 0 $space-size-8;
    color: map.get($gray, light-text);
    border-radius: 999px;
    background: map.get($gray, background);
  }

  .title {
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.5;
    font-feature-settings: 'palt';
    overflow-wrap: anywhere;
  }

  .venue {
    font-size: $font-size-12;
    color: map.get($gray, 600);
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .arrow {
    margin-top: auto;
    padding-top: $space-size-4;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
    text-align: right;
  }

  .search {
    display: flex;
    justify-content: center;
    margin-top: $space-size-32;
  }
</style>
