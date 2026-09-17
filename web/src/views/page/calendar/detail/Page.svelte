<script context="module" lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { CATEGORY_LABELS } from '../_data/category'
  import type { CalendarEvent } from '../_data/model'
  import { formatDateRangeEnglish, formatDateRangeJapanese, hostnameOf } from '../_lib/calendar'
</script>

<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { pageData } from '@shared/lib/device'

  export let event: CalendarEvent

  let fromCalendar = false

  afterNavigate(({ from }) => {
    fromCalendar = from?.url.pathname === '/calendar/'
  })

  // カレンダーの一覧から来たときは、検索条件やページを保ったまま戻る
  function back(clickEvent: MouseEvent) {
    if (!fromCalendar) return
    clickEvent.preventDefault()
    history.back()
  }

  $: label = CATEGORY_LABELS[event.category]
  $: showSource = event.sourceUrl !== event.officialUrl && event.sourceUrl !== event.resultUrl

  // 検索結果に日程と会場を出すための構造化データ（schema.org の SportsEvent）
  $: jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: event.titleJapanese,
    alternateName: event.titleEnglish !== event.titleJapanese ? event.titleEnglish : undefined,
    startDate: event.startDate,
    endDate: event.endDate ?? event.startDate,
    url: `${PUBLIC_BASE_URL}/calendar/${event.id}/`,
    sport: "Men's Rhythmic Gymnastics",
    location: event.venueJapanese ? { '@type': 'Place', name: event.venueJapanese } : undefined,
  })
  // .svelte の中に閉じタグをそのまま書くと script の終わりと見なされるため、文字列を分けて組み立てる
  $: jsonLdTag = `<script type="application/ld+json">${jsonLd}<` + '/script>'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- 埋め込むのは自前のデータを JSON.stringify した文字列だけで、外部からの入力は混ざらない -->
  {@html jsonLdTag}
</svelte:head>

<article
  style:--color={label.color}
  class="event-detail"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
>
  <p class="breadcrumb">
    <a href="/calendar/" on:click={back}
      >‹ カレンダーに戻る<span lang="en">Back to calendar</span></a
    >
  </p>

  <p class="badges">
    <span class="category">{label.ja} / {label.en}</span>
    {#if event.status === 'tentative'}
      <span class="tentative">日程は予定 / Tentative</span>
    {/if}
  </p>

  <h1 class="title">{event.titleJapanese}</h1>
  {#if event.titleEnglish !== event.titleJapanese}
    <p class="title-en" lang="en">{event.titleEnglish}</p>
  {/if}

  <dl class="facts">
    <div class="fact">
      <dt>日程<span lang="en">Date</span></dt>
      <dd>
        <span class="fact-main">{formatDateRangeJapanese(event)}</span>
        <span class="fact-en" lang="en">{formatDateRangeEnglish(event)}</span>
      </dd>
    </div>

    {#if event.venueJapanese}
      <div class="fact">
        <dt>会場<span lang="en">Venue</span></dt>
        <dd>
          <span class="fact-main">{event.venueJapanese}</span>
          {#if event.venueEnglish}
            <span class="fact-en" lang="en">{event.venueEnglish}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if event.streamingJapanese}
      <div class="fact">
        <dt>配信<span lang="en">Live stream</span></dt>
        <dd>
          <span class="fact-text">{event.streamingJapanese}</span>
          {#if event.streamingEnglish}
            <span class="fact-en" lang="en">{event.streamingEnglish}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if event.noteJapanese}
      <div class="fact">
        <dt>補足<span lang="en">Note</span></dt>
        <dd>
          <span class="fact-text">{event.noteJapanese}</span>
          {#if event.noteEnglish}
            <span class="fact-en" lang="en">{event.noteEnglish}</span>
          {/if}
        </dd>
      </div>
    {/if}
  </dl>

  {#if event.officialUrl || event.resultUrl}
    <p class="actions">
      {#if event.officialUrl}
        <a class="action primary" href={event.officialUrl} rel="noopener noreferrer" target="_blank"
          >公式サイト<span lang="en">Official site</span></a
        >
      {/if}
      {#if event.resultUrl}
        <a class="action" href={event.resultUrl} rel="noopener noreferrer" target="_blank"
          >結果を見る<span lang="en">Results</span></a
        >
      {/if}
    </p>
  {/if}

  {#if showSource}
    <p class="source">
      出典 / Source:
      <a href={event.sourceUrl} rel="noopener noreferrer" target="_blank"
        >{hostnameOf(event.sourceUrl)}</a
      >
    </p>
  {/if}

  <p class="caution">
    日程や会場は変更されることがあります。お出かけ前に、必ず主催者の公式情報をご確認ください。
    <span lang="en"
      >Dates and venues may change. Please check the organizer's official information before you go.</span
    >
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
