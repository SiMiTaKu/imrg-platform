<script context='module' lang='ts'>
  import { CATEGORY_LABELS } from "../_data/category"
  import type { CalendarEvent } from "../_data/model"
  import { formatDateRangeEn, formatDateRangeJa, hostnameOf } from "../_lib/calendar"
</script>

<script lang='ts'>
  import { afterNavigate } from "$app/navigation"
  import { pageData } from "$views/atomic/device-store/store"

  export let event: CalendarEvent

  let fromCalendar = false

  afterNavigate(({ from }) => {
    fromCalendar = from?.url.pathname === "/calendar/"
  })

  // カレンダーの一覧から来たときは、検索条件やページを保ったまま戻る
  function back(clickEvent: MouseEvent) {
    if (!fromCalendar) return
    clickEvent.preventDefault()
    history.back()
  }

  $: label = CATEGORY_LABELS[event.category]
  $: showSource = event.sourceUrl !== event.officialUrl && event.sourceUrl !== event.resultUrl
</script>

<article style:--color={label.color}
         class='event-detail'
         class:pc={!$pageData.isMobile}
         class:sp={$pageData.isMobile}>
  <p class='breadcrumb'>
    <a href='/calendar/'
       on:click={back}>‹ カレンダーに戻る<span lang='en'>Back to calendar</span></a>
  </p>

  <p class='badges'>
    <span class='category'>{label.ja} / {label.en}</span>
    {#if event.status === "tentative"}
      <span class='tentative'>日程は予定 / Tentative</span>
    {/if}
  </p>

  <h1 class='title'>{event.titleJa}</h1>
  {#if event.titleEn !== event.titleJa}
    <p class='title-en'
       lang='en'>{event.titleEn}</p>
  {/if}

  <dl class='facts'>
    <div class='fact'>
      <dt>日程<span lang='en'>Date</span></dt>
      <dd>
        <span class='fact-main'>{formatDateRangeJa(event)}</span>
        <span class='fact-en'
              lang='en'>{formatDateRangeEn(event)}</span>
      </dd>
    </div>

    {#if event.venueJa}
      <div class='fact'>
        <dt>会場<span lang='en'>Venue</span></dt>
        <dd>
          <span class='fact-main'>{event.venueJa}</span>
          {#if event.venueEn}
            <span class='fact-en'
                  lang='en'>{event.venueEn}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if event.streamingJa}
      <div class='fact'>
        <dt>配信<span lang='en'>Live stream</span></dt>
        <dd>
          <span class='fact-text'>{event.streamingJa}</span>
          {#if event.streamingEn}
            <span class='fact-en'
                  lang='en'>{event.streamingEn}</span>
          {/if}
        </dd>
      </div>
    {/if}

    {#if event.noteJa}
      <div class='fact'>
        <dt>補足<span lang='en'>Note</span></dt>
        <dd>
          <span class='fact-text'>{event.noteJa}</span>
          {#if event.noteEn}
            <span class='fact-en'
                  lang='en'>{event.noteEn}</span>
          {/if}
        </dd>
      </div>
    {/if}
  </dl>

  {#if event.officialUrl || event.resultUrl}
    <p class='actions'>
      {#if event.officialUrl}
        <a class='action primary'
           href={event.officialUrl}
           rel='noopener noreferrer'
           target='_blank'>公式サイト<span lang='en'>Official site</span></a>
      {/if}
      {#if event.resultUrl}
        <a class='action'
           href={event.resultUrl}
           rel='noopener noreferrer'
           target='_blank'>結果を見る<span lang='en'>Results</span></a>
      {/if}
    </p>
  {/if}

  {#if showSource}
    <p class='source'>
      出典 / Source:
      <a href={event.sourceUrl}
         rel='noopener noreferrer'
         target='_blank'>{hostnameOf(event.sourceUrl)}</a>
    </p>
  {/if}

  <p class='caution'>
    日程や会場は変更されることがあります。お出かけ前に、必ず主催者の公式情報をご確認ください。
    <span lang='en'>Dates and venues may change. Please check the organizer's official information before you go.</span>
  </p>
</article>

<style lang='scss'>
  .pc {
    --width: 720px;
    --title-size: 30px;
    --fact-columns: 120px 1fr;
  }

  .sp {
    --width: calc(100% - 32px);
    --title-size: #{$font-size-22};
    --fact-columns: 1fr;
  }

  .event-detail {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-32 0 $space-size-80;
    color: map.get($gray, text);
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", YuGothic, "Yu Gothic", Meiryo, sans-serif;
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

  .breadcrumb span[lang="en"] {
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
    border-radius: $border-radius-64;
    font-weight: bold;
  }

  .category {
    background: color-mix(in srgb, var(--color) 14%, white);
    color: map.get($gray, 800);
  }

  .tentative {
    background: map.get($gray, background);
    color: map.get($gray, light-text);
  }

  .title {
    margin-top: $space-size-12;
    font-size: var(--title-size);
    line-height: 1.4;
    font-feature-settings: "palt";
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
    grid-template-columns: var(--fact-columns);
    gap: $space-size-4 $space-size-16;
    padding: $space-size-16 0;
    border-bottom: $border-size-1 solid map.get($gray, 200);
  }

  dt {
    font-size: 13px;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  dt span[lang="en"] {
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
    place-items: center;
    min-width: 180px;
    padding: $space-size-8 $space-size-24;
    border: $border-size-1 solid map.get($sky-blue, button);
    border-radius: $border-radius-64;
    color: map.get($sky-blue, text);
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.3;
  }

  .action span[lang="en"] {
    font-size: $font-size-11;
    font-weight: normal;
  }

  .primary {
    background: map.get($sky-blue, button);
    color: $white;
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

  .caution span[lang="en"] {
    display: block;
  }
</style>
