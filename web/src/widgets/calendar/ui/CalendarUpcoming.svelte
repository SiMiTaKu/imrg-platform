<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import {
    categoryColor,
    categoryLabel,
    eventDateRange,
    isTentative,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { countdownText } from '../lib/countdown'

  /** 「次にある大会」の引数 */
  interface Props {
    /** 近い順に並べたイベント。出したい件数だけ渡す */
    events: CalendarEvent[]
    /** 今日の日付 "YYYY-MM-DD" */
    today: string
    /** 「これから」の一覧へ切り替えるとき */
    onseeall: () => void
  }

  const { events, today, onseeall }: Props = $props()

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)
</script>

<!--
  今日に近い大会を先に見せる。312件の一覧を上から読ませずに、
  「次はこれ」が最初に目に入るようにするための区画
-->
{#if events.length}
  <section class="upcoming" class:mobile={isMobile} aria-label={m.calendar_upcoming_title()}>
    <div class="head">
      <h2>{m.calendar_upcoming_title()}</h2>
      <button class="see-all" type="button" onclick={onseeall}
        >{m.calendar_upcoming_see_all()} ›</button
      >
    </div>

    <ul class="cards">
      {#each events as event (event.id)}
        {@const localized = localizeEvent(event, locale)}
        {@const countdown = countdownText(event, today)}
        <li style:--color={categoryColor(event.category)}>
          <a class="card" href={localizeHref(ROUTES.calendar.detail(event.id))}>
            <!-- 日付と札は1行に。日付を別の行にすると card が1行ぶん高くなる -->
            <span class="meta">
              <span class="date">{eventDateRange(event, locale)}</span>
              {#if countdown}
                <span class="countdown">{countdown}</span>
              {/if}
              <span class="category">{categoryLabel(event.category)}</span>
              {#if isTentative(event)}
                <span class="tentative">{m.calendar_tag_tentative()}</span>
              {/if}
            </span>

            <span class="title">{localized.title}</span>
            {#if localized.venue}
              <span class="venue">{localized.venue}</span>
            {/if}

            <!-- 下に置きたいものは重ねず、余った高さを margin で押し下げる -->
            <span class="more">{m.calendar_upcoming_more()} ›</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style lang="scss">
  .upcoming {
    margin-top: $space-size-32;
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: $space-size-8;
    margin-bottom: $space-size-12;
  }

  h2 {
    display: flex;
    align-items: baseline;
    gap: $space-size-8;
    margin: 0;
    padding-left: $space-size-12;

    // 見出しの線は青。ページの黄は「今日」の印にだけ残す
    border-left: $border-size-4 solid map.get($sky-blue, button);
    font-size: $font-size-20;
    line-height: 1.4;
  }

  .mobile h2 {
    font-size: $font-size-18;
  }

  .see-all {
    padding: 0;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: none;
    background: none;
    cursor: pointer;
  }

  .see-all:hover {
    text-decoration: underline;
  }

  .cards {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    grid-template-columns: minmax(0, 1fr);
  }

  // 重ねずに縦へ積む。高さの違うカードでも「詳しく見る」が下でそろう
  .card {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-16;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 100);
    border-top: $border-size-4 solid var(--color);
    border-radius: $border-radius-8;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
  }

  .card:hover {
    border-color: map.get($sky-blue, border);
    border-top-color: var(--color);
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

  // 「あと3日」は青で塗って出す
  .countdown {
    padding: 0 $space-size-8;
    font-weight: bold;
    color: $white;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
  }

  .category {
    padding: 0 $space-size-8;
    font-weight: bold;
    color: map.get($gray, 600);
    border-radius: $border-radius-64;
    background: color-mix(in srgb, var(--color) 14%, white);
  }

  .tentative {
    padding: 0 $space-size-8;
    color: map.get($gray, light-text);
    border-radius: $border-radius-64;
    background: map.get($gray, background);
  }

  .date {
    flex: none;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
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

  .more {
    margin-top: auto;
    padding-top: $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    text-align: right;
  }
</style>
