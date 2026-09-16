<script context="module" lang="ts">
  import WithEnglishHeading from '$views/atomic/heading/WithEnglishHeading.svelte'
  import EventRow from './_components/EventRow.svelte'
  import MonthCalendar from './_components/MonthCalendar.svelte'
  import Pagination from './_components/Pagination.svelte'
  import { CATEGORY_LABELS, CATEGORY_ORDER } from './_data/category'
  import { EVENTS, UPDATED_AT } from './_data/events'
  import type { EventCategory } from './_data/model'
  import {
    type CalendarState,
    type EventPeriod,
    defaultState,
    eventsInMonth,
    eventsOnDay,
    filterEvents,
    formatDayEn,
    formatDayJa,
    formatMonthEn,
    formatMonthJa,
    groupByMonth,
    isEveryCategory,
    paginate,
    parseState,
    serializeState,
    toDateKey,
    toMonthKey,
  } from './_lib/calendar'

  const INSTAGRAM = 'https://www.instagram.com/takumi.rg/'

  const PERIODS: { key: EventPeriod; ja: string; en: string }[] = [
    { key: 'upcoming', ja: 'これから', en: 'Upcoming' },
    { key: 'past', ja: '終わった', en: 'Past' },
    { key: 'all', ja: 'すべて', en: 'All' },
  ]

  // カレンダーで移動できる範囲（データのある最初の月から最後の月まで）
  const MONTH_KEYS = EVENTS.flatMap((event) => [
    toMonthKey(event.startDate),
    toMonthKey(event.endDate ?? event.startDate),
  ])
  const FIRST_MONTH = MONTH_KEYS.reduce((a, b) => (a < b ? a : b), toMonthKey(UPDATED_AT))
  const LAST_MONTH = MONTH_KEYS.reduce((a, b) => (a > b ? a : b), toMonthKey(UPDATED_AT))
</script>

<script lang="ts">
  import { tick } from 'svelte'
  import { afterNavigate } from '$app/navigation'
  import { pageData } from '$views/atomic/device-store/store'

  /** 絞り込みの条件を覚えておくキー（同じタブの中だけ） */
  const STATE_KEY = 'imrg-calendar-state'

  // 書き出すHTMLは最終更新日の時点で作り、閲覧したときに今日の日付とURLの条件で描き直す
  let today = UPDATED_AT
  let state: CalendarState = defaultState(toMonthKey(UPDATED_AT))
  let ready = false
  let resultsTop: HTMLElement | undefined

  // 条件は URL に書き戻さない。書き戻すと、アクセス解析が絞り込みのたびに
  // 1回の閲覧として数えてしまうため。代わりにタブの中に覚えておく
  afterNavigate(({ type }) => {
    if (ready) return
    today = toDateKey(new Date())
    // 詳細ページから戻ったときは直前の条件に戻し、それ以外は URL の指定を読む
    const saved = type === 'popstate' ? loadState() : null
    state = parseState(saved ?? window.location.search, toMonthKey(today))
    ready = true
  })

  $: if (ready) saveState(state)

  function loadState(): string | null {
    try {
      return sessionStorage.getItem(STATE_KEY)
    } catch {
      // 保存を止めている設定のブラウザでは覚えないだけにする
      return null
    }
  }

  function saveState(value: CalendarState) {
    try {
      sessionStorage.setItem(STATE_KEY, serializeState(value, toMonthKey(today)))
    } catch {
      // 同上
    }
  }

  $: matched = filterEvents(EVENTS, {
    categories: state.categories,
    keyword: state.keyword,
    today,
    period: state.view === 'list' ? state.period : 'all',
  })
  $: slice = paginate(matched, state.page)
  $: pageGroups = groupByMonth(slice.items)
  $: calendarEvents = state.day
    ? eventsOnDay(matched, state.day)
    : eventsInMonth(matched, state.month)
  // 全部選んだときは「すべて」と同じ結果なので、「すべて」も選択状態にする
  $: allCategories = isEveryCategory(state.categories)

  /** 条件を変える。ページ送り以外の変更では1ページ目に戻す */
  function update(patch: Partial<CalendarState>) {
    state = { ...state, page: 1, ...patch }
  }

  /** 種類の絞り込みは複数選べる。押すたびに入り切りする */
  function toggleCategory(key: EventCategory) {
    const categories = state.categories.includes(key)
      ? state.categories.filter((category) => category !== key)
      : [...state.categories, key]
    update({ categories })
  }

  async function goToPage(page: number) {
    state = { ...state, page }
    await tick()
    resultsTop?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function selectDay(day: string) {
    update({ day: day === state.day ? null : day })
  }
</script>

<article class="calendar" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <WithEnglishHeading englishTitle="Event Calendar" title="大会・イベントカレンダー" />

  <p class="lead">
    男子新体操の大会・発表会・講習会の日程をまとめています。見に行きたい大会や、参加できる講習会を探すのにお使いください。
  </p>
  <p class="lead-en" lang="en">
    A calendar of men's rhythmic gymnastics competitions, performances and workshops.
  </p>
  <p class="updated-at">
    最終更新: {formatDayJa(UPDATED_AT)} / Last updated: {formatDayEn(UPDATED_AT)}
  </p>

  <section class="search" aria-label="検索と絞り込み / Search and filter">
    <label class="keyword">
      <span class="field-label">キーワードで探す<span lang="en">Search</span></span>
      <input
        class="keyword-input"
        type="search"
        value={state.keyword}
        placeholder="大会名・会場（例: 全日本 高崎） / Name or venue"
        on:input={(inputEvent) => update({ keyword: inputEvent.currentTarget.value })}
      />
    </label>

    <div class="chips" aria-label="種類で絞り込む / Filter by type" role="group">
      <button
        class="chip"
        class:active={allCategories}
        type="button"
        aria-pressed={allCategories}
        on:click={() => update({ categories: [] })}
      >
        すべて<span lang="en">All</span>
      </button>
      {#each CATEGORY_ORDER as key (key)}
        <button
          style:--color={CATEGORY_LABELS[key].color}
          class="chip"
          class:active={state.categories.includes(key)}
          type="button"
          aria-pressed={state.categories.includes(key)}
          on:click={() => toggleCategory(key)}
        >
          <span class="chip-dot"></span>{CATEGORY_LABELS[key].ja}<span lang="en"
            >{CATEGORY_LABELS[key].en}</span
          >
        </button>
      {/each}
    </div>
  </section>

  <div class="toolbar">
    <div class="segmented" aria-label="表示の切り替え / View" role="group">
      <button
        class="segment"
        class:active={state.view === 'calendar'}
        type="button"
        aria-pressed={state.view === 'calendar'}
        on:click={() => update({ view: 'calendar' })}
        >カレンダー<span lang="en">Calendar</span></button
      >
      <button
        class="segment"
        class:active={state.view === 'list'}
        type="button"
        aria-pressed={state.view === 'list'}
        on:click={() => update({ view: 'list' })}>リスト<span lang="en">List</span></button
      >
    </div>

    {#if state.view === 'list'}
      <div class="segmented" aria-label="時期 / Period" role="group">
        {#each PERIODS as period (period.key)}
          <button
            class="segment"
            class:active={state.period === period.key}
            type="button"
            aria-pressed={state.period === period.key}
            on:click={() => update({ period: period.key })}
            >{period.ja}<span lang="en">{period.en}</span></button
          >
        {/each}
      </div>
    {/if}

    <p class="count">
      <strong>{matched.length}</strong>件<span lang="en">{matched.length} events</span>
    </p>
  </div>

  {#if state.view === 'calendar'}
    {#if state.keyword}
      <p class="hint">
        キーワードに合うイベントは全部で {matched.length} 件です。
        <button
          class="link-button"
          type="button"
          on:click={() => update({ view: 'list', period: 'all' })}
          >リストで全部見る / See all in list</button
        >
      </p>
    {/if}

    <MonthCalendar
      canNext={state.month < LAST_MONTH}
      canPrev={state.month > FIRST_MONTH}
      events={matched}
      monthKey={state.month}
      selectedDay={state.day}
      {today}
      on:month={(monthEvent) => update({ month: monthEvent.detail, day: null })}
      on:select={(selectEvent) => selectDay(selectEvent.detail)}
    />

    <section bind:this={resultsTop} class="results">
      <div class="results-heading">
        <h3 class="section-title">
          {state.day
            ? `${formatDayJa(state.day)}のイベント`
            : `${formatMonthJa(state.month)}のイベント`}
          <span lang="en"
            >{state.day
              ? `Events on ${formatDayEn(state.day)}`
              : `Events in ${formatMonthEn(state.month)}`}</span
          >
        </h3>
        {#if state.day}
          <button class="link-button" type="button" on:click={() => update({ day: null })}
            >月のすべてを表示 / Show whole month</button
          >
        {/if}
      </div>
      {#if calendarEvents.length}
        <ul class="rows">
          {#each calendarEvents as event (event.id)}
            <li><EventRow {event} /></li>
          {/each}
        </ul>
      {:else}
        <p class="empty">
          この月のイベントは見つかりませんでした。<span lang="en">No events this month.</span>
        </p>
      {/if}
    </section>
  {:else}
    <section bind:this={resultsTop} class="results">
      {#each pageGroups as group, index (`${group.monthKey}-${index}`)}
        <h3 class="month-heading">
          {formatMonthJa(group.monthKey)}
          <span lang="en">{formatMonthEn(group.monthKey)}</span>
        </h3>
        <ul class="rows">
          {#each group.events as event (event.id)}
            <li><EventRow {event} /></li>
          {/each}
        </ul>
      {:else}
        <p class="empty">
          条件に合うイベントは見つかりませんでした。<span lang="en">No events match.</span>
        </p>
      {/each}

      {#if slice.totalPages > 1}
        <Pagination
          page={slice.page}
          totalPages={slice.totalPages}
          on:change={(pageEvent) => goToPage(pageEvent.detail)}
        />
      {/if}
    </section>
  {/if}

  <p class="caution">
    日程や会場は変更されることがあります。お出かけ前に、必ず主催者の公式情報をご確認ください。
    <span lang="en"
      >Dates and venues may change. Please check the organizer's official information before you go.</span
    >
  </p>

  <section class="contribute">
    <h3 class="contribute-heading">
      情報をお寄せください
      <span lang="en">Send us event information</span>
    </h3>
    <p class="contribute-text">
      載っていない大会・発表会・講習会や、内容の誤りを見つけたら、<a
        href={INSTAGRAM}
        rel="noopener noreferrer"
        target="_blank">Instagram のダイレクトメッセージ</a
      >で教えてください。確認して掲載します。
    </p>
    <p class="contribute-text-en" lang="en">
      If you know of a competition, performance or workshop that is not listed, or find a mistake,
      please tell us via <a href={INSTAGRAM} rel="noopener noreferrer" target="_blank"
        >Instagram direct message</a
      >. We will check it and add it.
    </p>
  </section>

  <p class="back"><a href="/">TOPに戻る</a></p>
</article>

<style lang="scss">
  .pc {
    --width: 960px;
  }

  .sp {
    --width: calc(100% - 32px);
  }

  .calendar {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-40 0 $space-size-80;
    font-family:
      'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', Meiryo, sans-serif;
    font-size: 15px;
    color: map.get($gray, text);
    line-height: 1.7;
    letter-spacing: 0.02em;
    overflow-wrap: anywhere;
  }

  .lead {
    font-size: $font-size-16;
  }

  .lead-en {
    margin-top: $space-size-4;
    font-size: 13px;
    color: map.get($gray, light-text);
  }

  .updated-at {
    margin-top: $space-size-12;
    text-align: right;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .search {
    display: grid;
    gap: $space-size-12;
    margin-top: $space-size-24;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .keyword {
    display: grid;
    gap: $space-size-4;
  }

  .field-label {
    font-size: 13px;
    font-weight: bold;
  }

  .field-label span[lang='en'] {
    margin-left: $space-size-8;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .keyword-input {
    width: 100%;
    height: 44px;
    padding: 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, 300);
    border-radius: $border-radius-8;
    background: $white;
    box-sizing: border-box;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
  }

  .chip {
    display: flex;
    gap: $space-size-4;
    padding: $space-size-4 $space-size-12;
    font-size: 13px;
    font-weight: bold;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, 300);
    border-radius: $border-radius-64;
    background: $white;
    align-items: center;
    line-height: 1.4;
    cursor: pointer;
  }

  .chip span[lang='en'] {
    font-size: $font-size-10;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .chip-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color);
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-12;
    margin: $space-size-24 0 $space-size-16;
  }

  .segmented {
    display: inline-flex;
    overflow: hidden;
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-8;
  }

  .segment {
    display: grid;
    padding: $space-size-4 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: none;
    background: $white;
    line-height: 1.3;
    cursor: pointer;

    & + & {
      border-left: $border-size-1 solid map.get($sky-blue, border);
    }
  }

  .segment span[lang='en'] {
    font-size: $font-size-10;
    font-weight: normal;
  }

  .chip.active,
  .segment.active {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .chip.active span[lang='en'] {
    color: $white;
  }

  .count {
    margin-left: auto;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }

  .count strong {
    margin-right: $space-size-2;
    font-size: $font-size-20;
    color: map.get($gray, text);
  }

  .count span[lang='en'] {
    display: none;
  }

  .hint {
    margin-bottom: $space-size-12;
    font-size: 13px;
  }

  .link-button {
    padding: 0;
    font-size: 13px;
    color: rgb(50, 150, 255);
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
  }

  .results {
    margin-top: $space-size-32;
    scroll-margin-top: 96px;
  }

  .results-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: $space-size-8;
    margin-bottom: $space-size-12;
  }

  .section-title,
  .month-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 $space-size-8;
    padding-left: $space-size-12;
    border-left: $border-size-4 solid rgb(50, 150, 255);
    font-size: $font-size-18;
    line-height: 1.4;
    font-variant-numeric: tabular-nums;
  }

  .section-title span[lang='en'],
  .month-heading span[lang='en'] {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .month-heading {
    margin: $space-size-24 0 $space-size-12;
  }

  .rows {
    display: grid;
    gap: $space-size-8;
    list-style: none;
  }

  .empty {
    padding: $space-size-32 0;
    font-size: $font-size-14;
    text-align: center;
    color: map.get($gray, light-text);
  }

  .empty span[lang='en'],
  .caution span[lang='en'],
  .contribute-heading span[lang='en'] {
    display: block;
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .caution {
    margin-top: $space-size-40;
    font-size: 13px;
    color: map.get($gray, 600);
  }

  .contribute {
    display: grid;
    gap: $space-size-8;
    margin-top: $space-size-32;
    padding: $space-size-24;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .contribute-heading {
    font-size: $font-size-18;
    line-height: 1.4;
  }

  .contribute-text {
    font-size: $font-size-14;
  }

  .contribute-text-en {
    font-size: 13px;
    color: map.get($gray, light-text);
  }

  .contribute a {
    color: rgb(50, 150, 255);
  }

  .back {
    margin-top: $space-size-64;
    font-size: $font-size-16;
    text-align: center;
  }
</style>
