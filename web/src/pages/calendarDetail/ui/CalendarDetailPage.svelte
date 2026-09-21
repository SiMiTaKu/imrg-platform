<script lang="ts" module>
  import { PUBLIC_BASE_URL } from '$env/static/public'
</script>

<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { m } from '$lib/paraglide/messages'
  import {
    UPDATED_AT,
    categoryColor,
    categoryLabel,
    eventDateRange,
    isTentative,
    hostnameOf,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { formatDay, toDateKey } from '@shared/lib/date'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { NEARBY_COUNT } from '../config/detailConfig'
  import { buildSportsEventJsonLd, eventCountdown, nearbyEvents } from '../lib/detail'
  import RelatedEvents from './RelatedEvents.svelte'

  /** 大会の詳細ページの引数 */
  interface Props {
    /** 表示する大会 */
    event: CalendarEvent
  }

  const { event }: Props = $props()

  const locale = getLocale() as SiteLocale
  const calendarHref = localizeHref(ROUTES.calendar.index)

  let fromCalendar = $state(false)
  // 書き出すHTMLは最終更新日の時点で作り、閲覧したときの今日の日付で「あと何日」を描き直す
  let today = $state(UPDATED_AT)

  afterNavigate(({ from }) => {
    fromCalendar = from?.url.pathname === calendarHref
    today = toDateKey(new Date())
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

  const isMobile = $derived($pageData.isMobile)
  const localized = $derived(localizeEvent(event, locale))
  const showSource = $derived(
    event.sourceUrl !== event.officialUrl && event.sourceUrl !== event.resultUrl,
  )
  const categoryText = $derived(categoryLabel(event.category))
  // 「終了」は済んだことなので、青で目立たせない。訳した文字ではなく finished で見分ける
  const countdown = $derived(eventCountdown(event, today))
  const nearby = $derived(nearbyEvents(event, NEARBY_COUNT))

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
  {message()}
{/snippet}

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- 埋め込むのは自前のデータを JSON.stringify した文字列だけで、外部からの入力は混ざらない -->
  {@html jsonLdTag}
</svelte:head>

<article
  style:--color={categoryColor(event.category)}
  class="event-detail"
  class:desktop={!isMobile}
  class:mobile={isMobile}
>
  <p class="breadcrumb">
    <a href={calendarHref} onclick={back}>‹ {m.calendar_back_to_calendar()}</a>
  </p>

  <header class="head">
    <p class="badges">
      {#if countdown}
        <span class="countdown" class:soon={!countdown.finished}>{countdown.text}</span>
      {/if}
      <span class="category">{categoryText}</span>
      {#if isTentative(event)}
        <span class="tentative">{m.calendar_tag_tentative()}</span>
      {/if}
      {#if event.resultUrl}
        <span class="result">{m.calendar_tag_result()}</span>
      {/if}
    </p>

    <h1 class="title">{localized.title}</h1>
    {#if localized.alternateTitle}
      <p class="alternate-title">{localized.alternateTitle}</p>
    {/if}
  </header>

  <!--
    日程・会場・配信の3つを同じ大きさで並べる。無い項目も「未定」「情報なし」と書いて枠を残し、
    「書いていない」のか「決まっていない」のかが分かるようにする
  -->
  <dl class="facts">
    <div class="fact date">
      <dt>{@render factLabel(m.calendar_fact_date)}</dt>
      <dd>
        <span class="fact-main">{eventDateRange(event, locale)}</span>
        {#if isTentative(event)}
          <span class="fact-note">{m.calendar_tag_tentative()}</span>
        {/if}
      </dd>
    </div>

    <div class="fact">
      <dt>{@render factLabel(m.calendar_fact_venue)}</dt>
      <dd>
        {#if localized.venue}
          <span class="fact-main">{localized.venue}</span>
        {:else}
          <span class="fact-empty">{m.calendar_detail_venue_tbd()}</span>
        {/if}
      </dd>
    </div>

    <div class="fact">
      <dt>{@render factLabel(m.calendar_fact_streaming)}</dt>
      <dd>
        {#if localized.streaming}
          <span class="fact-text">{localized.streaming}</span>
        {:else}
          <span class="fact-empty">{m.calendar_detail_streaming_none()}</span>
          <span class="fact-note">{m.calendar_detail_streaming_check()}</span>
        {/if}
      </dd>
    </div>
  </dl>

  {#if localized.note}
    <section class="note">
      <h2 class="note-title">{@render factLabel(m.calendar_fact_note)}</h2>
      <p class="note-text">{localized.note}</p>
    </section>
  {/if}

  {#if event.officialUrl || event.resultUrl}
    <p class="actions">
      {#if event.officialUrl}
        <a class="action primary" href={event.officialUrl} rel="noopener noreferrer" target="_blank"
          >{@render factLabel(m.calendar_official_site)}</a
        >
      {/if}
      {#if event.resultUrl}
        <a
          class="action result-action"
          href={event.resultUrl}
          rel="noopener noreferrer"
          target="_blank">{@render factLabel(m.calendar_results)}</a
        >
      {/if}
    </p>
  {/if}

  <!-- どこから取った情報かを、注意書きと同じ場所にまとめて出す -->
  <section class="source-panel">
    <h2 class="source-title">{m.calendar_about_title()}</h2>
    {#if showSource}
      <dl class="source-list">
        <div class="source-row">
          <dt>{m.calendar_source()}</dt>
          <dd>
            <a href={event.sourceUrl} rel="noopener noreferrer" target="_blank"
              >{hostnameOf(event.sourceUrl)}</a
            >
          </dd>
        </div>
      </dl>
    {/if}
    <p class="updated">{m.calendar_updated_at({ date: formatDay(UPDATED_AT, locale) })}</p>
    <p class="caution">{m.calendar_caution()}</p>
  </section>

  <RelatedEvents events={nearby} />

  <p class="back">
    <a href={calendarHref} onclick={back}>‹ {m.calendar_back_to_calendar()}</a>
  </p>
</article>

<style lang="scss">
  .desktop {
    --title-size: #{$font-size-30};
    --fact-columns: repeat(3, minmax(0, 1fr));
  }

  .mobile {
    --title-size: #{$font-size-22};
    --fact-columns: minmax(0, 1fr);
  }

  .event-detail {
    // 固定幅だと、画面がそれより狭いときに横へはみ出す
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-32 var(--content-padding-inline) $space-size-80;
    font-family:
      'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', Meiryo, sans-serif;
    color: map.get($gray, text);
    line-height: 1.7;
    letter-spacing: 0.02em;

    // 長い大会名・会場名・URL でも横へはみ出させない
    overflow-wrap: anywhere;
  }

  .breadcrumb {
    margin: 0;
    font-size: $font-size-14;
  }

  .breadcrumb a {
    color: map.get($sky-blue, text);
  }

  /* ─── 見出し ─── */

  .head {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    margin-top: $space-size-24;
    padding: $space-size-20;

    // 種類の色を薄く敷いて、どの種類の大会かをひと目で分かるようにする
    border: $border-size-1 solid color-mix(in srgb, var(--color) 24%, white);
    border-radius: 10px;
    background: color-mix(in srgb, var(--color) 8%, white);
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-8;
    margin: 0;
    font-size: $font-size-12;
  }

  .countdown,
  .category,
  .tentative,
  .result {
    padding: $space-size-2 $space-size-12;
    font-weight: bold;
    border-radius: $border-radius-64;
    line-height: 1.6;
  }

  // 開催が近いことは青で塗って出す
  .countdown {
    color: map.get($gray, light-text);
    background: map.get($gray, background);
  }

  .countdown.soon {
    color: $white;
    background: map.get($sky-blue, button);
  }

  .category {
    color: map.get($gray, 800);
    background: $white;
  }

  .tentative {
    color: map.get($gray, light-text);
    background: map.get($gray, background);
  }

  .result {
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
  }

  .title {
    margin: 0;
    font-size: var(--title-size);
    line-height: 1.4;
    font-feature-settings: 'palt';
  }

  .alternate-title {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.6;
  }

  /* ─── 日程・会場・配信 ─── */

  .facts {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: var(--fact-columns);
    margin: $space-size-16 0 0;
  }

  // 縦に積むだけ。重ねない
  .fact {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    box-sizing: border-box;
    padding: $space-size-16;
    border: $border-size-1 solid map.get($gray, 100);
    border-top: $border-size-4 solid map.get($sky-blue, border);
    border-radius: $border-radius-8;
    background: $white;
  }

  // 日程はいちばん先に知りたい項目なので、上辺を濃い青にして目線を集める
  .fact.date {
    border-top-color: map.get($sky-blue, button);
  }

  dt {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    letter-spacing: 0.06em;
  }

  dd {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    margin: 0;
  }

  .fact-main {
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.5;
    font-variant-numeric: tabular-nums;
  }

  // 日程はいちばん大きく出す
  .date .fact-main {
    font-size: $font-size-18;
  }

  .fact-text {
    font-size: $font-size-14;
    line-height: 1.7;
  }

  .fact-empty {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($gray, 300);
  }

  .fact-note {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.6;
  }

  /* ─── 補足 ─── */

  .note {
    margin-top: $space-size-16;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background: map.get($gray, background);
  }

  .note-title {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    letter-spacing: 0.06em;
  }

  .note-text {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
  }

  /* ─── 外部への入口 ─── */

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    margin: $space-size-32 0 0;
  }

  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    min-height: 52px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    line-height: 1.3;
    transition: transform 0.15s ease;
  }

  .mobile .action {
    min-width: 100%;
  }

  .action:hover {
    transform: translateY(-1px);
  }

  // 主な入口は青（信頼）
  .primary {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
  }

  // 結果を見に行くのは別の行動。青の枠のボタンにして、主な入口と役割を分ける
  .result-action {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  }

  /* ─── 出典と注意書き ─── */

  .source-panel {
    margin-top: $space-size-40;
    padding: $space-size-16 $space-size-20;
    border: $border-size-1 solid map.get($sky-blue, 100);
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .source-title {
    margin: 0 0 $space-size-8;
    font-size: $font-size-14;
    color: map.get($sky-blue, text);
  }

  .source-list {
    display: grid;
    gap: $space-size-4;
    margin: 0 0 $space-size-8;
  }

  .source-row {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-12;
    font-size: $font-size-12;
  }

  .source-row dt {
    flex: none;
    min-width: 48px;
  }

  .source-row dd {
    color: map.get($gray, 600);
  }

  .source-row a {
    color: map.get($sky-blue, text);
    text-decoration: underline;
  }

  .updated {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, 600);
  }

  .caution {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
  }

  .back {
    margin-top: $space-size-48;
    font-size: $font-size-16;
    text-align: center;
  }

  .back a {
    color: map.get($sky-blue, text);
  }
</style>
