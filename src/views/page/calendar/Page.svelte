<script context='module' lang='ts'>
  import WithEnglishHeading from "$views/atomic/heading/WithEnglishHeading.svelte"
  import EventCard from "./_components/EventCard.svelte"
  import { CATEGORY_LABELS, CATEGORY_ORDER } from "./_data/category"
  import { EVENTS, UPDATED_AT } from "./_data/events"
  import type { EventCategory } from "./_data/model"
  import {
    filterEvents,
    formatDayEn,
    formatDayJa,
    formatMonthEn,
    formatMonthJa,
    groupByMonth,
    toDateKey,
  } from "./_lib/calendar"

  const INSTAGRAM = "https://www.instagram.com/takumi.rg/"
</script>

<script lang='ts'>
  import { onMount } from "svelte"
  import { pageData } from "$views/atomic/device-store/store"

  let category: EventCategory | "all" = "all"
  let showPast = false
  // 書き出した日で絞り込むと公開後に古くなるので、今日の日付は閲覧したときに決める
  let today: string | null = null

  onMount(() => {
    today = toDateKey(new Date())
  })

  $: groups = groupByMonth(filterEvents(EVENTS, { category, today: showPast ? null : today }))
</script>

<article
  class='calendar'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <WithEnglishHeading englishTitle='Event Calendar'
                      title='大会・イベントカレンダー' />

  <p class='lead'>
    男子新体操の大会・発表会・講習会の日程をまとめています。見に行きたい大会や、参加できる講習会を探すのにお使いください。
  </p>
  <p class='lead' lang='en'>
    A calendar of men's rhythmic gymnastics competitions, performances and workshops. Use it to find events to
    watch or join.
  </p>
  <p class='updated-at'>
    最終更新: {formatDayJa(UPDATED_AT)} / Last updated: {formatDayEn(UPDATED_AT)}
  </p>

  <div class='filters'
       aria-label='種類で絞り込む / Filter by type'
       role='group'>
    <button class='chip'
            class:selected={category === "all"}
            type='button'
            aria-pressed={category === "all"}
            on:click={() => (category = "all")}>
      すべて<span lang='en'>All</span>
    </button>
    {#each CATEGORY_ORDER as key (key)}
      <button class='chip'
              class:selected={category === key}
              type='button'
              aria-pressed={category === key}
              on:click={() => (category = key)}>
        {CATEGORY_LABELS[key].ja}<span lang='en'>{CATEGORY_LABELS[key].en}</span>
      </button>
    {/each}
  </div>

  <label class='past-toggle'>
    <input bind:checked={showPast} type='checkbox' />
    終わったイベントも表示 / Show past events
  </label>

  {#each groups as group (group.monthKey)}
    <section class='month'>
      <h3 class='month-heading'>
        {formatMonthJa(group.monthKey)}
        <span lang='en'>{formatMonthEn(group.monthKey)}</span>
      </h3>
      <ul class='event-list'>
        {#each group.events as event (`${event.startDate}-${event.titleJa}`)}
          <li><EventCard {event} /></li>
        {/each}
      </ul>
    </section>
  {:else}
    <p class='empty'>
      条件に合うイベントはまだありません。
      <span lang='en'>No events match yet.</span>
    </p>
  {/each}

  <p class='caution'>
    日程や会場は変更されることがあります。お出かけ前に、必ず主催者の公式情報をご確認ください。
    <span lang='en'>Dates and venues may change. Please check the organizer's official information before you go.</span>
  </p>

  <section class='contribute'>
    <h3 class='contribute-heading'>
      情報をお寄せください
      <span lang='en'>Send us event information</span>
    </h3>
    <p>
      載っていない大会・発表会・講習会や、内容の誤りを見つけたら、<a href={INSTAGRAM}
                                       rel='noopener noreferrer'
                                       target='_blank'>Instagram のダイレクトメッセージ</a>で教えてください。確認して掲載します。
    </p>
    <p lang='en'>
      If you know of a competition, performance or workshop that is not listed, or find a mistake, please tell us
      via <a href={INSTAGRAM}
             rel='noopener noreferrer'
             target='_blank'>Instagram direct message</a>. We will check it and add it.
    </p>
  </section>

  <p class='back'><a href='/'>TOPに戻る</a></p>
</article>

<style lang='scss'>
  .pc {
    --width: 800px;
    --month-font-size: #{$font-size-24};
  }

  .sp {
    --width: 90%;
    --month-font-size: #{$font-size-20};
  }

  .calendar {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-40 0 $space-size-80;
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .lead[lang="en"] {
    margin-top: $space-size-8;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .updated-at {
    margin-top: $space-size-16;
    text-align: right;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: $space-size-32 0 $space-size-16;
  }

  .chip {
    display: grid;
    place-items: center;
    padding: $space-size-4 $space-size-16;
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-64;
    background: $white;
    color: map.get($sky-blue, text);
    font-size: $font-size-14;
    font-weight: bold;
    line-height: 1.3;
    cursor: pointer;
  }

  .chip span[lang="en"] {
    font-size: $font-size-10;
    font-weight: normal;
  }

  .selected {
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
    color: $white;
  }

  .past-toggle {
    display: flex;
    align-items: center;
    gap: $space-size-8;
    font-size: $font-size-14;
    cursor: pointer;
  }

  .month {
    margin-top: $space-size-40;
  }

  .month-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 $space-size-12;
    margin-bottom: $space-size-16;
    padding-left: 12px;
    border-left: 4px solid rgb(50, 150, 255);
    font-size: var(--month-font-size);
    line-height: 1.4;
  }

  .month-heading span[lang="en"] {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .event-list {
    display: grid;
    gap: $space-size-16;
    list-style: none;
  }

  .empty {
    margin-top: $space-size-40;
    text-align: center;
  }

  .empty span[lang="en"],
  .caution span[lang="en"],
  .contribute-heading span[lang="en"] {
    display: block;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .caution {
    margin-top: $space-size-40;
    font-size: $font-size-14;
  }

  .contribute {
    display: grid;
    gap: $space-size-12;
    margin-top: $space-size-40;
    padding: $space-size-24;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .contribute-heading {
    font-size: $font-size-20;
    line-height: 1.4;
  }

  .contribute p[lang="en"] {
    font-size: $font-size-14;
  }

  .contribute a {
    color: rgb(50, 150, 255);
  }

  .back {
    margin-top: $space-size-80;
    text-align: center;
  }
</style>
