<script lang="ts">
  import {
    categoryColor,
    categoryLabel,
    eventDateRange,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  /** 「同じころに開かれる大会」の引数 */
  interface Props {
    /** 日付の並びで前後にある大会 */
    events: CalendarEvent[]
  }

  const { events }: Props = $props()

  const locale = getLocale() as SiteLocale
</script>

<!-- 行き先を1つに絞らせない。この日に見に行ける別の大会へも移れるようにする -->
{#if events.length}
  <section class="related">
    <h2 class="related-title">同じころに開かれる大会</h2>
    <ul class="list">
      {#each events as event (event.id)}
        <li style:--color={categoryColor(event.category)}>
          <a class="item" href={localizeHref(ROUTES.calendar.detail(event.id))}>
            <!-- 日付と種類は同じ行に。どちらも小さな字なので、別の行に積むと間延びする -->
            <span class="item-meta">
              <span class="item-date">{eventDateRange(event, locale)}</span>
              <span class="item-category">{categoryLabel(event.category)}</span>
            </span>
            <span class="item-title">{localizeEvent(event, locale).title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style lang="scss">
  .related {
    margin-top: $space-size-48;
  }

  .related-title {
    margin: 0 0 $space-size-12;
    padding-left: $space-size-12;
    border-left: $border-size-4 solid map.get($sky-blue, button);
    font-size: $font-size-18;
    line-height: 1.4;
  }

  .list {
    display: grid;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // 縦に積むだけの並び。要素を重ねない
  .item {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    padding: $space-size-12 $space-size-16;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 100);
    border-left: $border-size-4 solid var(--color);
    border-radius: $border-radius-8;
    background: $white;
  }

  .item:hover {
    background: map.get($sky-blue, background);
  }

  // 日付と種類の行
  .item-meta {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    align-items: baseline;
  }

  .item-date {
    flex: none;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }

  .item-title {
    font-size: $font-size-14;
    font-weight: bold;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  .item-category {
    min-inline-size: 0;
    font-size: $font-size-12;
    color: map.get($gray, 600);
  }
</style>
