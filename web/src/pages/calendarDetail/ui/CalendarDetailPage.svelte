<script lang="ts" module>
  import { PUBLIC_BASE_URL } from '$env/static/public'
</script>

<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { m } from '$lib/paraglide/messages'
  import {
    CATEGORY_COLORS,
    categoryLabel,
    hostnameOf,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { formatDateRange } from '@shared/lib/date'
  import { pageData } from '@shared/lib/device'
  import { SECONDARY_LOCALE, getLocale, localizeHref, showsSecondaryText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { buildSportsEventJsonLd } from '../lib/detail'

  /** 大会の詳細ページの引数 */
  interface Props {
    /** 表示する大会 */
    event: CalendarEvent
  }

  const { event }: Props = $props()

  const locale = getLocale() as SiteLocale
  // 日本語ページでは、見出しや値に英語を小さく併記する
  const showsBoth = showsSecondaryText()
  const calendarHref = localizeHref(ROUTES.calendar.index)

  let fromCalendar = $state(false)

  afterNavigate(({ from }) => {
    fromCalendar = from?.url.pathname === calendarHref
  })

  /**
   * カレンダーの一覧から来たときは、検索条件やページを保ったまま戻る
   * @param clickEvent - リンクのクリック
   */
  const back = (clickEvent: MouseEvent) => {
    if (!fromCalendar) return
    clickEvent.preventDefault()
    history.back()
  }

  /**
   * 日本語ページでは「日本語 / English」の形にする
   * @param message - 文言
   * @returns 表示する文字列
   */
  const withSecondary = (message: typeof m.calendar_tag_tentative): string =>
    showsBoth ? `${message()} / ${message({}, { locale: SECONDARY_LOCALE })}` : message()

  const localized = $derived(localizeEvent(event, locale))
  // 日本語ページで併記する英語の値
  const secondary = $derived(localizeEvent(event, SECONDARY_LOCALE))
  const showSource = $derived(
    event.sourceUrl !== event.officialUrl && event.sourceUrl !== event.resultUrl,
  )
  const categoryText = $derived(
    showsBoth
      ? `${categoryLabel(event.category)} / ${categoryLabel(event.category, SECONDARY_LOCALE)}`
      : categoryLabel(event.category),
  )

  // 検索結果に日程と会場を出すための構造化データ。表示中の言語の値にする
  const jsonLd = $derived(
    JSON.stringify(
      buildSportsEventJsonLd(
        event,
        locale,
        PUBLIC_BASE_URL,
        localizeHref(ROUTES.calendar.detail(event.id)),
      ),
    ),
  )
  // .svelte の中に閉じタグをそのまま書くと script の終わりと見なされるため、文字列を分けて組み立てる
  const jsonLdTag = $derived(`<script type="application/ld+json">${jsonLd}<` + '/script>')
</script>

{#snippet factLabel(message: typeof m.calendar_fact_date)}
  {message()}{#if showsBoth}<span lang="en">{message({}, { locale: SECONDARY_LOCALE })}</span>{/if}
{/snippet}

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- 埋め込むのは自前のデータを JSON.stringify した文字列だけで、外部からの入力は混ざらない -->
  {@html jsonLdTag}
</svelte:head>

<article
  style:--color={CATEGORY_COLORS[event.category]}
  class="event-detail"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
>
  <p class="breadcrumb">
    <a href={calendarHref} onclick={back}
      >‹ {m.calendar_back_to_calendar()}{#if showsBoth}<span lang="en"
          >{m.calendar_back_to_calendar({}, { locale: SECONDARY_LOCALE })}</span
        >{/if}</a
    >
  </p>

  <p class="badges">
    <span class="category">{categoryText}</span>
    {#if event.status === 'tentative'}
      <span class="tentative">{withSecondary(m.calendar_tag_tentative)}</span>
    {/if}
  </p>

  <h1 class="title">{localized.title}</h1>
  {#if showsBoth && localized.alternateTitle}
    <p class="title-en" lang="en">{localized.alternateTitle}</p>
  {/if}

  <dl class="facts">
    <div class="fact">
      <dt>{@render factLabel(m.calendar_fact_date)}</dt>
      <dd>
        <span class="fact-main">{formatDateRange(event.startDate, event.endDate, locale)}</span>
        {#if showsBoth}
          <span class="fact-en" lang="en"
            >{formatDateRange(event.startDate, event.endDate, SECONDARY_LOCALE)}</span
          >
        {/if}
      </dd>
    </div>

    {#if localized.venue}
      <div class="fact">
        <dt>{@render factLabel(m.calendar_fact_venue)}</dt>
        <dd>
          <span class="fact-main">{localized.venue}</span>
          {#if showsBoth && event.venueEnglish}
            <span class="fact-en" lang="en">{secondary.venue}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if localized.streaming}
      <div class="fact">
        <dt>{@render factLabel(m.calendar_fact_streaming)}</dt>
        <dd>
          <span class="fact-text">{localized.streaming}</span>
          {#if showsBoth && event.streamingEnglish}
            <span class="fact-en" lang="en">{secondary.streaming}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if localized.note}
      <div class="fact">
        <dt>{@render factLabel(m.calendar_fact_note)}</dt>
        <dd>
          <span class="fact-text">{localized.note}</span>
          {#if showsBoth && event.noteEnglish}
            <span class="fact-en" lang="en">{secondary.note}</span>
          {/if}
        </dd>
      </div>
    {/if}
  </dl>

  {#if event.officialUrl || event.resultUrl}
    <p class="actions">
      {#if event.officialUrl}
        <a class="action primary" href={event.officialUrl} rel="noopener noreferrer" target="_blank"
          >{@render factLabel(m.calendar_official_site)}</a
        >
      {/if}
      {#if event.resultUrl}
        <a class="action" href={event.resultUrl} rel="noopener noreferrer" target="_blank"
          >{@render factLabel(m.calendar_results)}</a
        >
      {/if}
    </p>
  {/if}

  {#if showSource}
    <p class="source">
      {withSecondary(m.calendar_source)}:
      <a href={event.sourceUrl} rel="noopener noreferrer" target="_blank"
        >{hostnameOf(event.sourceUrl)}</a
      >
    </p>
  {/if}

  <p class="caution">
    {m.calendar_caution()}
    {#if showsBoth}
      <span lang="en">{m.calendar_caution({}, { locale: SECONDARY_LOCALE })}</span>
    {/if}
  </p>
</article>

<style lang="scss">
  .desktop {
    --width: 720px;
    --title-size: 30px;
    --fact-columns: 120px 1fr;
  }

  .mobile {
    --width: calc(100% - 32px);
    --title-size: #{$font-size-22};
    --fact-columns: 1fr;
  }

  .event-detail {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-32 0 $space-size-80;
    font-family:
      'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', Meiryo, sans-serif;
    color: map.get($gray, text);
    line-height: 1.7;
    letter-spacing: 0.02em;
    overflow-wrap: anywhere;
  }

  .breadcrumb {
    font-size: $font-size-14;
  }

  .breadcrumb a {
    color: rgb(50, 150, 255);
  }

  .breadcrumb span[lang='en'] {
    margin-left: $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin-top: $space-size-24;
    font-size: 13px;
  }

  .category,
  .tentative {
    padding: $space-size-2 $space-size-12;
    font-weight: bold;
    border-radius: $border-radius-64;
  }

  .category {
    color: map.get($gray, 800);
    background: color-mix(in srgb, var(--color) 14%, white);
  }

  .tentative {
    color: map.get($gray, light-text);
    background: map.get($gray, background);
  }

  .title {
    margin-top: $space-size-12;
    font-size: var(--title-size);
    line-height: 1.4;
    font-feature-settings: 'palt';
  }

  .title-en {
    margin-top: $space-size-4;
    font-size: 15px;
    line-height: 1.5;
    color: map.get($gray, light-text);
  }

  .facts {
    margin-top: $space-size-32;
    border-top: $border-size-1 solid map.get($gray, 200);
  }

  .fact {
    display: grid;
    gap: $space-size-4 $space-size-16;
    grid-template-columns: var(--fact-columns);
    padding: $space-size-16 0;
    border-bottom: $border-size-1 solid map.get($gray, 200);
  }

  dt {
    font-size: 13px;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  dt span[lang='en'] {
    margin-left: $space-size-8;
    font-weight: normal;
  }

  dd {
    margin: 0;
  }

  .fact-main {
    display: block;
    font-size: 17px;
    font-weight: bold;
    font-variant-numeric: tabular-nums;
  }

  .fact-text {
    display: block;
    font-size: 15px;
  }

  .fact-en {
    display: block;
    font-size: 13px;
    color: map.get($gray, light-text);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    margin-top: $space-size-32;
  }

  .action {
    display: grid;
    min-width: 180px;
    padding: $space-size-8 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, button);
    border-radius: $border-radius-64;
    place-items: center;
    line-height: 1.3;
  }

  .action span[lang='en'] {
    font-size: $font-size-11;
    font-weight: normal;
  }

  .primary {
    color: $white;
    background: map.get($sky-blue, button);
  }

  .source {
    margin-top: $space-size-16;
    font-size: 13px;
    color: map.get($gray, light-text);
  }

  .source a {
    color: rgb(50, 150, 255);
  }

  .caution {
    margin-top: $space-size-40;
    font-size: 13px;
    color: map.get($gray, light-text);
  }

  .caution span[lang='en'] {
    display: block;
  }
</style>
