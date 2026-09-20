<script lang="ts">
  import { tick } from 'svelte'
  import { afterNavigate } from '$app/navigation'
  import { Pagination } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { formatDay, formatMonth, toDateKey, toMonthKey } from '@shared/lib/date'
  import {
    EVENTS,
    EventRow,
    UPDATED_AT,
    categoryLabel,
    eventMonthKey,
    eventsInMonth,
    eventsOnDay,
    monthRangeOf,
  } from '@entities/calendarEvent'
  import {
    CalendarSearchPanel,
    EVENT_PERIODS,
    EventPeriod,
    defaultState,
    filterEvents,
    groupByMonth,
    isEveryCategory,
    paginate,
    parseState,
    serializeState,
    type CalendarState,
  } from '@features/calendarFilter'
  import { pageData } from '@shared/lib/device'
  import { getLocale } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { UPCOMING_PICK_COUNT } from '../config/calendarConfig'
  import { loadCalendarState, saveCalendarState } from '../lib/stateStorage'
  import {
    ANY,
    countByRegion,
    countByYear,
    defaultRefine,
    isRefined,
    parseRefine,
    refineEvents,
    withRefineQuery,
    type Any,
    type CalendarRefine,
  } from '../lib/refine'
  import { regionLabel, type CalendarRegionKey } from '../lib/region'
  import CalendarContribute from './CalendarContribute.svelte'
  import CalendarArchive from './CalendarArchive.svelte'
  import CalendarIntro from './CalendarIntro.svelte'
  import CalendarRefinePanel from './CalendarRefinePanel.svelte'
  import CalendarUpcoming from './CalendarUpcoming.svelte'
  import MonthCalendar from './MonthCalendar.svelte'

  // カレンダーで移動できる範囲（データのある最初の月から最後の月まで）
  const MONTH_RANGE = monthRangeOf(EVENTS, UPDATED_AT)

  const locale = getLocale() as SiteLocale

  // 書き出すHTMLは最終更新日の時点で作り、閲覧したときに今日の日付とURLの条件で描き直す
  let today = $state(UPDATED_AT)
  let calendarState: CalendarState = $state.raw(defaultState(toMonthKey(UPDATED_AT)))
  let refine: CalendarRefine = $state.raw(defaultRefine())
  let ready = $state(false)
  let resultsTop: HTMLElement | undefined = $state()
  let finderTop: HTMLElement | undefined = $state()

  // 条件は URL に書き戻さない。書き戻すと、アクセス解析が絞り込みのたびに
  // 1回の閲覧として数えてしまうため。代わりにタブの中に覚えておく
  afterNavigate(({ type }) => {
    if (ready) return
    today = toDateKey(new Date())
    // 詳細ページから戻ったときは直前の条件に戻し、それ以外は URL の指定を読む
    const saved = type === 'popstate' ? loadCalendarState() : null
    const query = saved ?? window.location.search
    calendarState = parseState(query, toMonthKey(today))
    refine = parseRefine(query)
    ready = true
  })

  $effect(() => {
    if (!ready) return
    const query = serializeState(calendarState, toMonthKey(today))
    saveCalendarState(withRefineQuery(query, refine))
  })

  // 種類・キーワード・時期まで絞ったところ。年と地域の件数は、ここを母数にして数える
  const base = $derived(
    filterEvents(EVENTS, {
      categories: calendarState.categories,
      keyword: calendarState.keyword,
      today,
      period: calendarState.view === 'list' ? calendarState.period : EventPeriod.ALL.key,
    }),
  )
  const matched = $derived(refineEvents(base, refine))

  // 絞り込みボタンに添える件数。自分の軸だけ外して数えると、押したあとの件数と一致する
  const byYear = $derived(refineEvents(base, { year: ANY, region: refine.region }))
  const yearCounts = $derived(countByYear(byYear))
  const regionCounts = $derived(
    countByRegion(refineEvents(base, { year: refine.year, region: ANY })),
  )

  const slice = $derived(paginate(matched, calendarState.page))
  const pageGroups = $derived(groupByMonth(slice.items))
  const calendarEvents = $derived(
    calendarState.day
      ? eventsOnDay(matched, calendarState.day)
      : eventsInMonth(matched, calendarState.month),
  )

  // ページの先頭に出す「次にある大会」。絞り込みとは別に、いつでも今日に近いものを見せる
  const upcomingAll = $derived(
    filterEvents(EVENTS, {
      categories: [],
      keyword: '',
      today,
      period: EventPeriod.UPCOMING.key,
    }),
  )
  const upcomingPicks = $derived(upcomingAll.slice(0, UPCOMING_PICK_COUNT))

  // 最終更新日。日本語ページでは「最終更新: … / Last updated: …」と並べる
  const updatedAtText = m.calendar_updated_at({ date: formatDay(UPDATED_AT, locale) })

  // 英語の単数・複数で文言を分ける（日本語はどちらも同じ）
  const isOne = $derived(new Intl.PluralRules(locale).select(matched.length) === 'one')

  // 何かしら絞り込んでいるか。「条件を解除」を出すかどうかの判定に使う
  const isFiltered = $derived(
    calendarState.keyword !== '' ||
      !isEveryCategory(calendarState.categories) ||
      isRefined(refine) ||
      calendarState.day !== null,
  )

  // 「絞り込み中」に並べる札。型を確かめてから文字にするため、表示の前に作っておく
  const yearPill = $derived(
    refine.year === ANY ? null : m.calendar_archive_year({ year: refine.year }),
  )
  const regionPill = $derived(refine.region === ANY ? null : regionLabel(refine.region))

  /**
   * 条件を変える。ページ送り以外の変更では1ページ目に戻す
   * @param patch - 変える項目
   */
  const update = (patch: Partial<CalendarState>) => {
    calendarState = { ...calendarState, page: 1, ...patch }
  }

  /**
   * ページを移り、一覧の先頭までスクロールする
   * @param page - 移るページ番号
   */
  const goToPage = async (page: number) => {
    calendarState = { ...calendarState, page }
    await tick()
    resultsTop?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /**
   * 日を選ぶ。選んでいる日をもう一度押すと、月のすべてに戻す
   * @param day - 押した日 "YYYY-MM-DD"
   */
  const selectDay = (day: string) => {
    update({ day: day === calendarState.day ? null : day })
  }

  /**
   * 開催年を選ぶ。カレンダー表示では、その年で最初にイベントのある月へ移る
   * @param year - 選んだ年 "2026"。`ANY` ならすべての年
   */
  const selectYear = (year: string | Any) => {
    refine = { ...refine, year }
    if (year === ANY) {
      update({})
      return
    }
    // 選んだ年に1件も無い月を開いたままにしない
    const months = refineEvents(base, { year, region: refine.region })
      .map(eventMonthKey)
      .sort((a, b) => a.localeCompare(b))
    update({ month: months[0] ?? `${year}-01`, day: null })
  }

  /**
   * 地域を選ぶ
   * @param region - 選んだ地域。`ANY` ならすべての地域
   */
  const selectRegion = (region: CalendarRegionKey | Any) => {
    refine = { ...refine, region }
    update({})
  }

  /** 絞り込みをすべて解除して、今月のカレンダーに戻す */
  const clearAll = () => {
    refine = defaultRefine()
    calendarState = defaultState(toMonthKey(today))
  }

  /** 「これから」の一覧へ切り替え、絞り込みの欄まで移動する */
  const showUpcomingList = async () => {
    update({ view: 'list', period: EventPeriod.UPCOMING.key, day: null })
    await tick()
    finderTop?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
</script>

{#snippet segmentLabel(message: typeof m.calendar_view_calendar)}
  {message()}
{/snippet}

{#snippet resultsTitle(targetLocale: SiteLocale)}
  {calendarState.day
    ? m.calendar_events_on_day(
        { date: formatDay(calendarState.day, targetLocale) },
        { locale: targetLocale },
      )
    : m.calendar_events_in_month(
        { month: formatMonth(calendarState.month, targetLocale) },
        { locale: targetLocale },
      )}
{/snippet}

<article class="calendar" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <CalendarIntro total={EVENTS.length} upcoming={upcomingAll.length} {updatedAtText} />

  <CalendarUpcoming events={upcomingPicks} {today} onseeall={showUpcomingList} />

  <!-- 探すための道具をひとまとめにする。キーワード・種類・年・地域・表示の切り替えを続けて置く -->
  <section bind:this={finderTop} class="finder" aria-label={m.calendar_search_label()}>
    <h2 class="finder-title">大会をさがす</h2>

    <CalendarSearchPanel
      keyword={calendarState.keyword}
      categories={calendarState.categories}
      onkeywordchange={(keyword) => update({ keyword })}
      oncategorieschange={(categories) => update({ categories })}
    />

    <CalendarRefinePanel
      {refine}
      {yearCounts}
      yearTotal={byYear.length}
      {regionCounts}
      onyearchange={selectYear}
      onregionchange={selectRegion}
    />

    <div class="toolbar">
      <div class="segmented" aria-label={m.calendar_view_label()} role="group">
        <button
          class="segment"
          class:active={calendarState.view === 'calendar'}
          type="button"
          aria-pressed={calendarState.view === 'calendar'}
          onclick={() => update({ view: 'calendar' })}
          >{@render segmentLabel(m.calendar_view_calendar)}</button
        >
        <button
          class="segment"
          class:active={calendarState.view === 'list'}
          type="button"
          aria-pressed={calendarState.view === 'list'}
          onclick={() => update({ view: 'list' })}
          >{@render segmentLabel(m.calendar_view_list)}</button
        >
      </div>

      {#if calendarState.view === 'list'}
        <div class="segmented" aria-label={m.calendar_period_label()} role="group">
          {#each EVENT_PERIODS as period (period.key)}
            <button
              class="segment"
              class:active={calendarState.period === period.key}
              type="button"
              aria-pressed={calendarState.period === period.key}
              onclick={() => update({ period: period.key })}
              >{@render segmentLabel(period.label)}</button
            >
          {/each}
        </div>
      {/if}

      <p class="count">
        <strong>{matched.length}</strong
        >{` ${isOne ? m.calendar_count_unit_one() : m.calendar_count_unit_other()}`}
      </p>
    </div>

    {#if isFiltered}
      <!-- 何で絞っているかを言葉で出す。押した覚えのない条件で0件になるのを防ぐ -->
      <p class="active-filters">
        <span class="active-label">絞り込み中</span>
        {#if calendarState.keyword}
          <span class="pill">「{calendarState.keyword}」</span>
        {/if}
        {#if yearPill}
          <span class="pill">{yearPill}</span>
        {/if}
        {#if regionPill}
          <span class="pill">{regionPill}</span>
        {/if}
        {#if !isEveryCategory(calendarState.categories)}
          {#each calendarState.categories as category (category)}
            <span class="pill">{categoryLabel(category)}</span>
          {/each}
        {/if}
        {#if calendarState.day}
          <span class="pill">{formatDay(calendarState.day, locale)}</span>
        {/if}
        <button class="clear" type="button" onclick={clearAll}>条件をすべて解除</button>
      </p>
    {/if}
  </section>

  {#if calendarState.view === 'calendar'}
    {#if calendarState.keyword}
      <p class="hint">
        {(isOne ? m.calendar_keyword_hint_one : m.calendar_keyword_hint_other)({
          count: matched.length,
        })}
        <button
          class="link-button"
          type="button"
          onclick={() => update({ view: 'list', period: EventPeriod.ALL.key })}
          >{m.calendar_see_all_in_list()}</button
        >
      </p>
    {/if}

    <div class="calendar-view">
      <MonthCalendar
        canNext={calendarState.month < MONTH_RANGE.last}
        canPrev={calendarState.month > MONTH_RANGE.first}
        events={matched}
        monthKey={calendarState.month}
        selectedDay={calendarState.day}
        {today}
        onmonthchange={(month) => update({ month, day: null })}
        onselect={selectDay}
      />
    </div>

    <section bind:this={resultsTop} class="results">
      <div class="results-heading">
        <h3 class="section-title">
          {@render resultsTitle(locale)}
        </h3>
        {#if calendarState.day}
          <button class="link-button" type="button" onclick={() => update({ day: null })}
            >{m.calendar_show_whole_month()}</button
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
          {m.calendar_empty_month()}
          {#if isFiltered}
            <button class="clear" type="button" onclick={clearAll}>条件をすべて解除</button>
          {/if}
        </p>
      {/if}
    </section>
  {:else}
    <section bind:this={resultsTop} class="results">
      {#each pageGroups as group, index (`${group.monthKey}-${index}`)}
        <h3 class="month-heading">
          {formatMonth(group.monthKey, locale)}
        </h3>
        <ul class="rows">
          {#each group.events as event (event.id)}
            <li><EventRow {event} /></li>
          {/each}
        </ul>
      {:else}
        <p class="empty">
          {m.calendar_empty_filter()}
          {#if isFiltered}
            <button class="clear" type="button" onclick={clearAll}>条件をすべて解除</button>
          {/if}
        </p>
      {/each}

      {#if slice.totalPages > 1}
        <Pagination
          page={slice.page}
          totalPages={slice.totalPages}
          onchange={goToPage}
          labels={{
            navigation: m.pagination_label(),
            first: m.pagination_first(),
            prev: m.pagination_prev(),
            next: m.pagination_next(),
            last: m.pagination_last(),
          }}
        />
      {/if}
    </section>
  {/if}

  <CalendarArchive />
  <CalendarContribute />
</article>

<style lang="scss">
  .desktop {
    --width: 960px;
  }

  .mobile {
    --width: calc(100% - 32px);
  }

  .calendar {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-40 0 $space-size-80;
    font-family:
      'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', Meiryo, sans-serif;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.7;
    letter-spacing: 0.02em;

    // 長い大会名・会場名でも横へはみ出させない
    overflow-wrap: anywhere;
  }

  .mobile.calendar {
    padding-top: $space-size-24;
  }

  /* ─── 探すための道具 ─── */

  .finder {
    display: grid;
    gap: $space-size-12;
    margin-top: $space-size-40;
    padding: $space-size-20;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
    scroll-margin-top: $space-size-16;
  }

  .mobile .finder {
    padding: $space-size-12;
  }

  .finder-title {
    margin: 0;
    padding-left: $space-size-12;
    border-left: $border-size-4 solid map.get($sky-blue, button);
    font-size: $font-size-20;
    line-height: 1.4;
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-12;
  }

  .segmented {
    display: inline-flex;
    overflow: hidden;
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-8;
  }

  .segment {
    display: grid;
    min-height: 40px;
    padding: $space-size-4 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: none;
    background: $white;
    align-items: center;
    line-height: 1.3;
    cursor: pointer;

    & + & {
      border-left: $border-size-1 solid map.get($sky-blue, border);
    }
  }

  .segment.active {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .count {
    margin: 0 0 0 auto;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }

  .count strong {
    margin-right: $space-size-2;
    font-size: $font-size-24;
    color: map.get($sky-blue, text);
  }

  .active-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-8;
    margin: 0;
    padding: $space-size-8 $space-size-12;
    font-size: $font-size-12;

    // 今かかっている条件は、行動に近い情報なので黄で囲む
    border: $border-size-1 solid map.get($amber, 200);
    border-radius: $border-radius-8;
    background: map.get($amber, background);
  }

  .active-label {
    font-weight: bold;
    color: map.get($amber, text);
  }

  .pill {
    padding: 0 $space-size-8;
    color: map.get($gray, 600);
    border-radius: $border-radius-64;
    background: $white;
  }

  .clear {
    padding: $space-size-2 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($amber, 800);
    border: $border-size-1 solid map.get($amber, border);
    border-radius: $border-radius-64;
    background: map.get($amber, 300);
    cursor: pointer;
  }

  .hint {
    margin: $space-size-24 0 0;
    font-size: $font-size-14;
  }

  .calendar-view {
    margin-top: $space-size-24;
  }

  .link-button {
    padding: 0;
    font-size: $font-size-14;
    color: map.get($sky-blue, text);
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
  }

  /* ─── 結果 ─── */

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
    border-left: $border-size-4 solid map.get($sky-blue, button);
    font-size: $font-size-18;
    line-height: 1.4;
    font-variant-numeric: tabular-nums;
  }

  .month-heading {
    margin: $space-size-24 0 $space-size-12;
  }

  .rows {
    display: grid;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .empty {
    display: grid;
    justify-items: center;
    gap: $space-size-12;
    padding: $space-size-32 0;
    font-size: $font-size-14;
    text-align: center;
    color: map.get($gray, light-text);
  }
</style>
