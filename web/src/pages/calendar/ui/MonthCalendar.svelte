<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { WEEKDAYS, Weekday } from '@shared/config/date'
  import {
    buildMonthGrid,
    formatDay,
    formatMonth,
    shiftMonth,
    toMonthKey,
    weekdayName,
  } from '@shared/lib/date'
  import {
    CATEGORY_COLORS,
    EventSchedule,
    CATEGORY_ORDER,
    categoryLabel,
    eventsInMonth,
    eventsOnDay,
    localizeEvent,
    type CalendarEvent,
  } from '@entities/calendarEvent'
  import { pageData } from '@shared/lib/device'
  import { SECONDARY_LOCALE, getLocale, localizeHref, showsSecondaryText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { MAX_DAY_CHIPS } from '../config/calendarConfig'

  /** 月のカレンダーの引数 */
  interface Props {
    /** 表示する月 "YYYY-MM" */
    monthKey: string
    /** 絞り込んだイベント */
    events: CalendarEvent[]
    /** 選んでいる日 "YYYY-MM-DD"。選んでいなければ null */
    selectedDay: string | null
    /** 今日の日付 "YYYY-MM-DD" */
    today: string
    /** 前の月へ移れるか */
    canPrev: boolean
    /** 次の月へ移れるか */
    canNext: boolean
    /** 表示する月を変えるとき */
    onmonthchange: (monthKey: string) => void
    /** 日を選んだとき */
    onselect: (dateKey: string) => void
  }

  const { monthKey, events, selectedDay, today, canPrev, canNext, onmonthchange, onselect }: Props =
    $props()

  const locale = getLocale() as SiteLocale
  // 日本語ページでは、月・曜日などに英語を小さく併記する
  const showsBoth = showsSecondaryText()
  /** 曜日の並び（日曜始まり） */

  /**
   * 日本語ページでは「日本語 / English」の形にする
   * @param message - 文言
   * @returns 表示する文字列
   */
  const withSecondary = (message: typeof m.calendar_prev_month): string =>
    showsBoth ? `${message()} / ${message({}, { locale: SECONDARY_LOCALE })}` : message()

  /**
   * 日のボタンの読み上げ用の名前
   * @param dateKey - 日付 "YYYY-MM-DD"
   * @param count - その日のイベントの数
   * @returns 「2026年9月16日 2件」の形
   */
  const dayLabel = (dateKey: string, count: number): string => {
    const message =
      new Intl.PluralRules(locale).select(count) === 'one'
        ? m.calendar_day_label_one
        : m.calendar_day_label_other
    return message({ date: formatDay(dateKey, locale), count })
  }

  const weeks = $derived(buildMonthGrid(monthKey))
  const undated = $derived(
    eventsInMonth(events, monthKey).filter((event) => event.schedule === EventSchedule.MONTH_ONLY),
  )
</script>

<div class="month-calendar" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="nav">
    <button
      class="nav-button"
      type="button"
      aria-label={withSecondary(m.calendar_prev_month)}
      disabled={!canPrev}
      onclick={() => onmonthchange(shiftMonth(monthKey, -1))}>‹</button
    >
    <h3 class="month-title">
      {formatMonth(monthKey, locale)}
      {#if showsBoth}
        <span lang="en">{formatMonth(monthKey, SECONDARY_LOCALE)}</span>
      {/if}
    </h3>
    <button
      class="nav-button"
      type="button"
      aria-label={withSecondary(m.calendar_next_month)}
      disabled={!canNext}
      onclick={() => onmonthchange(shiftMonth(monthKey, 1))}>›</button
    >
  </div>
  {#if toMonthKey(today) !== monthKey}
    <button class="this-month" type="button" onclick={() => onmonthchange(toMonthKey(today))}
      >{withSecondary(m.calendar_this_month)}</button
    >
  {/if}

  <table class="grid">
    <thead>
      <tr>
        {#each WEEKDAYS as weekday (weekday.index)}
          <th
            class:sunday={weekday === Weekday.SUNDAY}
            class:saturday={weekday === Weekday.SATURDAY}
            scope="col"
          >
            {weekdayName(weekday, locale)}{#if showsBoth}<span lang="en"
                >{weekdayName(weekday, SECONDARY_LOCALE)}</span
              >{/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each weeks as week (week[0].dateKey)}
        <tr>
          {#each week as cell (cell.dateKey)}
            {@const dayEvents = cell.inMonth ? eventsOnDay(events, cell.dateKey) : []}
            <td
              class="cell"
              class:outside={!cell.inMonth}
              class:selected={cell.dateKey === selectedDay}
            >
              <button
                class="day-button"
                type="button"
                aria-label={dayLabel(cell.dateKey, dayEvents.length)}
                aria-pressed={cell.dateKey === selectedDay}
                disabled={dayEvents.length === 0}
                onclick={() => onselect(cell.dateKey)}
              >
                <span
                  class="day-number"
                  class:muted={!cell.inMonth}
                  class:sunday={cell.inMonth && cell.weekday === Weekday.SUNDAY}
                  class:saturday={cell.inMonth && cell.weekday === Weekday.SATURDAY}
                  class:today-mark={cell.dateKey === today}>{cell.day}</span
                >
                {#if $pageData.isMobile && dayEvents.length}
                  <span class="dots">
                    {#each dayEvents.slice(0, MAX_DAY_CHIPS) as event (event.id)}
                      <span style:--color={CATEGORY_COLORS[event.category]} class="dot"></span>
                    {/each}
                  </span>
                {/if}
              </button>

              {#if !$pageData.isMobile && dayEvents.length}
                <ul class="chips">
                  {#each dayEvents.slice(0, MAX_DAY_CHIPS) as event (event.id)}
                    {@const title = localizeEvent(event, locale).title}
                    <li>
                      <a
                        style:--color={CATEGORY_COLORS[event.category]}
                        class="chip"
                        {title}
                        href={localizeHref(ROUTES.calendar.detail(event.id))}>{title}</a
                      >
                    </li>
                  {/each}
                  {#if dayEvents.length > MAX_DAY_CHIPS}
                    <li>
                      <button class="more" type="button" onclick={() => onselect(cell.dateKey)}>
                        {m.calendar_more({ count: dayEvents.length - MAX_DAY_CHIPS })}
                      </button>
                    </li>
                  {/if}
                </ul>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  {#if undated.length}
    <div class="undated">
      <span class="undated-label"
        >{showsBoth ? `${m.calendar_date_tbd()} ` : m.calendar_date_tbd()}{#if showsBoth}<span
            lang="en">{m.calendar_date_tbd({}, { locale: SECONDARY_LOCALE })}</span
          >{/if}</span
      >
      {#each undated as event (event.id)}
        <a
          style:--color={CATEGORY_COLORS[event.category]}
          class="undated-chip"
          href={localizeHref(ROUTES.calendar.detail(event.id))}
          >{localizeEvent(event, locale).title}</a
        >
      {/each}
    </div>
  {/if}

  <ul class="legend">
    {#each CATEGORY_ORDER as key (key)}
      <li class="legend-item">
        <span style:--color={CATEGORY_COLORS[key]} class="dot"></span>
        {categoryLabel(key)}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .desktop {
    --cell-height: 108px;
    --month-title-size: #{$font-size-24};
  }

  .mobile {
    --cell-height: 52px;
    --month-title-size: #{$font-size-20};
  }

  .month-calendar {
    display: grid;
    gap: $space-size-12;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-size-8;
  }

  .nav-button {
    width: 44px;
    height: 44px;
    font-size: $font-size-24;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: 50%;
    background: $white;
    line-height: 1;
    cursor: pointer;

    &:disabled {
      opacity: 0.35;
      cursor: default;
    }
  }

  .month-title {
    display: grid;
    justify-items: center;
    font-size: var(--month-title-size);
    line-height: 1.3;
    font-variant-numeric: tabular-nums;
  }

  .month-title span[lang='en'] {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .this-month {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-64;
    background: $white;
    justify-self: center;
    cursor: pointer;
  }

  .grid {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: $white;
  }

  th {
    padding: $space-size-4 0;
    border-bottom: $border-size-1 solid map.get($gray, 200);
    font-size: $font-size-12;
    color: map.get($gray, 600);
    text-align: center;
  }

  th span[lang='en'] {
    display: block;
    font-size: $font-size-10;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .cell {
    height: var(--cell-height);
    padding: $space-size-2;
    border: $border-size-1 solid map.get($gray, 100);
    vertical-align: top;
  }

  .outside {
    background: map.get($gray, background);
  }

  .selected {
    outline: $border-size-2 solid map.get($sky-blue, button);
    outline-offset: -2px;
    background: map.get($sky-blue, background);
  }

  .day-button {
    display: flex;
    gap: $space-size-2;
    width: 100%;
    padding: $space-size-2 0;
    font: inherit;
    color: inherit;
    border: none;
    background: transparent;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  .day-number {
    display: grid;
    width: 24px;
    height: 24px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 50%;
    place-items: center;
    font-variant-numeric: tabular-nums;
  }

  .sunday {
    color: #d64545;
  }

  .saturday {
    color: #1f6fd1;
  }

  .muted {
    color: map.get($gray, 300);
  }

  .today-mark {
    color: $white;
    background: map.get($sky-blue, button);
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 3px;
  }

  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color);
  }

  // 長い大会名でもマスからはみ出さず「…」で切れるよう、列の最小幅を0にする
  .chips {
    display: grid;
    gap: $space-size-2;
    grid-template-columns: minmax(0, 1fr);
    list-style: none;
  }

  .chip {
    display: block;
    padding: 1px $space-size-4;
    font-size: $font-size-11;
    color: map.get($gray, text);
    border-radius: 2px;
    background: color-mix(in srgb, var(--color) 12%, white);
    border-left: 3px solid var(--color);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      opacity: 0.75;
    }
  }

  .more {
    padding: 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: none;
    background: none;
    cursor: pointer;
  }

  .undated {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-size-8;
    padding: $space-size-8 $space-size-12;
    border: $border-size-1 dashed map.get($gray, 200);
    border-radius: $border-radius-8;
  }

  .undated-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .undated-label span[lang='en'] {
    font-weight: normal;
  }

  .undated-chip {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border-radius: 2px;
    background: color-mix(in srgb, var(--color) 12%, white);
    border-left: 3px solid var(--color);
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-16;
    list-style: none;
    font-size: $font-size-12;
    color: map.get($gray, 600);
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: $space-size-4;
  }
</style>
