<script lang="ts">
  import { tick } from 'svelte'
  import { afterNavigate } from '$app/navigation'
  import { Heading, Pagination } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import {
    EVENTS,
    EventRow,
    UPDATED_AT,
    eventsInMonth,
    eventsOnDay,
    formatDay,
    formatMonth,
    monthRangeOf,
    toDateKey,
    toMonthKey,
  } from '@entities/calendarEvent'
  import {
    CalendarSearchPanel,
    PERIODS,
    defaultState,
    filterEvents,
    groupByMonth,
    paginate,
    parseState,
    serializeState,
    type CalendarState,
  } from '@features/calendarFilter'
  import { pageData } from '@shared/lib/device'
  import { SECONDARY_LOCALE, getLocale, showsSecondaryText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { loadCalendarState, saveCalendarState } from '../lib/stateStorage'
  import CalendarContribute from './CalendarContribute.svelte'
  import MonthCalendar from './MonthCalendar.svelte'

  // カレンダーで移動できる範囲（データのある最初の月から最後の月まで）
  const MONTH_RANGE = monthRangeOf(EVENTS, UPDATED_AT)

  const locale = getLocale() as SiteLocale
  // 日本語ページでは、見出しやボタンに英語を小さく併記する
  const showsBoth = showsSecondaryText()

  // 書き出すHTMLは最終更新日の時点で作り、閲覧したときに今日の日付とURLの条件で描き直す
  let today = $state(UPDATED_AT)
  let calendarState: CalendarState = $state.raw(defaultState(toMonthKey(UPDATED_AT)))
  let ready = $state(false)
  let resultsTop: HTMLElement | undefined = $state()

  // 条件は URL に書き戻さない。書き戻すと、アクセス解析が絞り込みのたびに
  // 1回の閲覧として数えてしまうため。代わりにタブの中に覚えておく
  afterNavigate(({ type }) => {
    if (ready) return
    today = toDateKey(new Date())
    // 詳細ページから戻ったときは直前の条件に戻し、それ以外は URL の指定を読む
    const saved = type === 'popstate' ? loadCalendarState() : null
    calendarState = parseState(saved ?? window.location.search, toMonthKey(today))
    ready = true
  })

  $effect(() => {
    if (ready) saveCalendarState(serializeState(calendarState, toMonthKey(today)))
  })

  const matched = $derived(
    filterEvents(EVENTS, {
      categories: calendarState.categories,
      keyword: calendarState.keyword,
      today,
      period: calendarState.view === 'list' ? calendarState.period : 'all',
    }),
  )
  const slice = $derived(paginate(matched, calendarState.page))
  const pageGroups = $derived(groupByMonth(slice.items))
  const calendarEvents = $derived(
    calendarState.day
      ? eventsOnDay(matched, calendarState.day)
      : eventsInMonth(matched, calendarState.month),
  )
  // 最終更新日。日本語ページでは「最終更新: … / Last updated: …」と並べる
  const updatedAtText = [
    m.calendar_updated_at({ date: formatDay(UPDATED_AT, locale) }),
    ...(showsBoth
      ? [
          m.calendar_updated_at(
            { date: formatDay(UPDATED_AT, SECONDARY_LOCALE) },
            { locale: SECONDARY_LOCALE },
          ),
        ]
      : []),
  ].join(' / ')

  // 英語の単数・複数で文言を分ける（日本語はどちらも同じ）
  const isOne = $derived(new Intl.PluralRules(locale).select(matched.length) === 'one')

  /**
   * 日本語ページでは「日本語 / English」の形にする
   * @param message - 文言
   * @returns 表示する文字列
   */
  const withSecondary = (message: typeof m.calendar_see_all_in_list): string =>
    showsBoth ? `${message()} / ${message({}, { locale: SECONDARY_LOCALE })}` : message()

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
</script>

{#snippet segmentLabel(message: typeof m.calendar_view_calendar)}
  {message()}{#if showsBoth}<span lang="en">{message({}, { locale: SECONDARY_LOCALE })}</span>{/if}
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

<article class="calendar" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    subtitle={showsBoth ? m.calendar_title({}, { locale: SECONDARY_LOCALE }) : undefined}
    title={m.calendar_title()}
  />

  <p class="lead">{m.calendar_lead()}</p>
  {#if showsBoth}
    <p class="lead-en" lang="en">{m.calendar_lead({}, { locale: SECONDARY_LOCALE })}</p>
  {/if}
  <p class="updated-at">{updatedAtText}</p>

  <CalendarSearchPanel
    keyword={calendarState.keyword}
    categories={calendarState.categories}
    onkeywordchange={(keyword) => update({ keyword })}
    oncategorieschange={(categories) => update({ categories })}
  />

  <div class="toolbar">
    <div class="segmented" aria-label={withSecondary(m.calendar_view_label)} role="group">
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
      <div class="segmented" aria-label={withSecondary(m.calendar_period_label)} role="group">
        {#each PERIODS as period (period.key)}
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
      <strong>{matched.length}</strong>{#if showsBoth}{m.calendar_count_unit_other()}<span lang="en"
          >{m.calendar_count({ count: matched.length }, { locale: SECONDARY_LOCALE })}</span
        >{:else}{` ${isOne ? m.calendar_count_unit_one() : m.calendar_count_unit_other()}`}{/if}
    </p>
  </div>

  {#if calendarState.view === 'calendar'}
    {#if calendarState.keyword}
      <p class="hint">
        {(isOne ? m.calendar_keyword_hint_one : m.calendar_keyword_hint_other)({
          count: matched.length,
        })}
        <button
          class="link-button"
          type="button"
          onclick={() => update({ view: 'list', period: 'all' })}
          >{withSecondary(m.calendar_see_all_in_list)}</button
        >
      </p>
    {/if}

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

    <section bind:this={resultsTop} class="results">
      <div class="results-heading">
        <h3 class="section-title">
          {@render resultsTitle(locale)}
          {#if showsBoth}
            <span lang="en">{@render resultsTitle(SECONDARY_LOCALE)}</span>
          {/if}
        </h3>
        {#if calendarState.day}
          <button class="link-button" type="button" onclick={() => update({ day: null })}
            >{withSecondary(m.calendar_show_whole_month)}</button
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
          {m.calendar_empty_month()}{#if showsBoth}<span lang="en"
              >{m.calendar_empty_month({}, { locale: SECONDARY_LOCALE })}</span
            >{/if}
        </p>
      {/if}
    </section>
  {:else}
    <section bind:this={resultsTop} class="results">
      {#each pageGroups as group, index (`${group.monthKey}-${index}`)}
        <h3 class="month-heading">
          {formatMonth(group.monthKey, locale)}
          {#if showsBoth}
            <span lang="en">{formatMonth(group.monthKey, SECONDARY_LOCALE)}</span>
          {/if}
        </h3>
        <ul class="rows">
          {#each group.events as event (event.id)}
            <li><EventRow {event} /></li>
          {/each}
        </ul>
      {:else}
        <p class="empty">
          {m.calendar_empty_filter()}{#if showsBoth}<span lang="en"
              >{m.calendar_empty_filter({}, { locale: SECONDARY_LOCALE })}</span
            >{/if}
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

  <CalendarContribute />
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

  .segment.active {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
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

  .empty span[lang='en'] {
    display: block;
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }
</style>
