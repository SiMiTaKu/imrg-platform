<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { SECONDARY_LOCALE, getLocale, localizeHref, showsSecondaryText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { CATEGORY_COLORS } from '../config/category'
  import { categoryLabel } from '../lib/category'
  import { formatDateRange, shortMonthEnglish, toDateBadge, weekdayName } from '../lib/date'
  import { localizeEvent } from '../lib/event'
  import type { CalendarEvent } from '../model'

  /** 一覧の1行の引数 */
  interface Props {
    /** 表示するイベント */
    event: CalendarEvent
  }

  const { event }: Props = $props()

  const locale = getLocale() as SiteLocale
  // 日本語ページでは、種類名と大会名に英語を小さく併記する
  const showsBoth = showsSecondaryText()

  // 日程と会場の区切り。英語ページでは全角の中黒を使わない
  const separator = locale === 'en' ? '·' : '・'

  const localized = $derived(localizeEvent(event, locale))
  const badge = $derived(toDateBadge(event.startDate))
</script>

<!-- 一覧の1行。押すと詳細ページへ移る -->
<a
  style:--color={CATEGORY_COLORS[event.category]}
  class="event-row"
  href={localizeHref(ROUTES.calendar.detail(event.id))}
>
  <span class="date" aria-hidden="true">
    <span class="date-month"
      >{m.calendar_row_month({
        month: locale === 'en' ? shortMonthEnglish(badge.month) : badge.month,
      })}</span
    >
    {#if badge.day !== undefined && badge.weekday !== undefined}
      <span class="date-day">{badge.day}</span>
      <span class="date-weekday">{weekdayName(badge.weekday, locale)}</span>
    {:else}
      <span class="date-undecided"
        >{m.calendar_row_undecided_line1()}<br />{m.calendar_row_undecided_line2()}</span
      >
    {/if}
  </span>

  <span class="body">
    <span class="meta">
      <span class="category"
        >{categoryLabel(event.category)}{#if showsBoth}<span lang="en"
            >{categoryLabel(event.category, SECONDARY_LOCALE)}</span
          >{/if}</span
      >
      {#if event.status === 'tentative'}
        <span class="tag">{m.calendar_tag_tentative()}</span>
      {/if}
      {#if event.resultUrl}
        <span class="tag result">{m.calendar_tag_result()}</span>
      {/if}
    </span>
    <span class="title">{localized.title}</span>
    {#if showsBoth && localized.alternateTitle}
      <span class="title-en" lang="en">{localized.alternateTitle}</span>
    {/if}
    <span class="sub">
      {formatDateRange(event, locale)}{#if localized.venue}<span class="separator">{separator}</span
        >{localized.venue}{/if}
    </span>
  </span>

  <span class="arrow" aria-hidden="true">›</span>
</a>

<style lang="scss">
  .event-row {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: 52px 1fr 12px;
    padding: $space-size-12 $space-size-16 $space-size-12 $space-size-12;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: $border-radius-8;
    background: $white;
    transition: background-color 0.2s;
    align-items: center;
    border-left: $border-size-4 solid var(--color);

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

  .category span[lang='en'] {
    margin-left: $space-size-4;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .tag {
    padding: 0 $space-size-4;
    color: map.get($gray, light-text);
    border-radius: $border-radius-4;
    background: map.get($gray, background);
  }

  .result {
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
  }

  .title {
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.45;
    font-feature-settings: 'palt';
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
