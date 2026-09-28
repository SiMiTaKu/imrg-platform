<script lang="ts">
  import { onMount } from 'svelte'
  import { Button } from '@imrg-platform/design-system'
  import type { GuideKey } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { loadReadLessons, readLessons, resetReadLessons } from '@features/guideProgress'
  import { searchGuide } from '@features/guideSearch'
  import type { GuideSearchDocument } from '@features/guideSearch'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer, chapterColor } from '@widgets/ruleGuide'

  /** 章の中のレッスン1つ */
  interface Lesson {
    /** 鍵 */
    key: GuideKey
    /** 見出し */
    title: string
    /** 読む目安の分 */
    minutes: number
  }

  /** 章カード1枚ぶん */
  interface Chapter {
    /** 何章か */
    number: number
    /** 章のいちばん上の鍵 */
    key: GuideKey
    /** 章の名前 */
    title: string
    /** 章の最初の答え */
    lead: string
    /** 章のレッスン。読む順 */
    lessons: readonly Lesson[]
    /** 章をぜんぶ読む目安の分 */
    minutes: number
    /** 章末の理解度チェックの問題数 */
    quizCount: number
  }

  /** ルールの解説の入口 */
  interface Props {
    /** 講座の章 */
    chapters: readonly Chapter[]
    /** 検索の対象（レッスンと用語） */
    documents: readonly GuideSearchDocument[]
    /** 講座の大きさ */
    stats: { chapters: number; lessons: number; questions: number; words: number }
  }

  const { chapters, documents, stats }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /*
    入り方は2つ。講座を前から順に進むか、ルールを言葉で探すか。
    言葉を入れているあいだは、講座の一覧の代わりに検索結果を出す
  */
  let keyword = $state('')
  const results = $derived(searchGuide(documents, keyword))
  const searching = $derived(keyword.trim() !== '')

  /* 読んだレッスンの記録は、その人のブラウザの中にだけある。画面が出たあとで読み込む */
  onMount(() => {
    loadReadLessons()
    // ほかのページの検索窓から来たとき（/rules/?q=…）は、その言葉で探した状態にする
    const q = new URL(window.location.href).searchParams.get('q')
    if (q !== null) keyword = q
  })

  const allLessons = $derived(chapters.flatMap((chapter) => chapter.lessons))
  const readCount = $derived(
    allLessons.filter((lesson) => $readLessons.includes(lesson.key)).length,
  )
  const readRatio = $derived(allLessons.length === 0 ? 0 : readCount / allLessons.length)

  /* 続きから読む先。まだ読んでいない、いちばん前のレッスン */
  const nextLesson = $derived(allLessons.find((lesson) => !$readLessons.includes(lesson.key)))

  /**
   * レッスンへのリンク先を作る
   * @param key - レッスンの鍵
   * @returns 表示中の言語のパス
   */
  const lessonHref = (key: GuideKey) => localizeHref(ROUTES.rules.page(guideKeyToPath(key)))

  /**
   * 章の中で読んだレッスンの数を返す
   * @param chapter - 章
   * @returns 読んだ数
   */
  const readInChapter = (chapter: Chapter) =>
    chapter.lessons.filter((lesson) => $readLessons.includes(lesson.key)).length
</script>

<article class="index" class:mobile={isMobile}>
  <!-- ─── 帯。講座を始めるか、言葉で探すか ─── -->
  <section class="hero">
    <div class="inner">
      <span class="eyebrow">{m.rule_guide_index_eyebrow()}</span>
      <h1>{m.rule_guide_index_title()}</h1>
      <p class="lead">{m.rule_guide_index_lead()}</p>

      <form class="search" role="search" onsubmit={(event) => event.preventDefault()}>
        <label class="label" for="rule-guide-search">{m.rule_guide_index_search_label()}</label>
        <div class="field">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            id="rule-guide-search"
            type="search"
            bind:value={keyword}
            placeholder={m.rule_guide_index_search_placeholder()}
            autocomplete="off"
            enterkeyhint="search"
          />
        </div>
      </form>

      {#if !searching}
        <div class="actions">
          {#if nextLesson !== undefined && readCount > 0}
            <Button
              href={lessonHref(nextLesson.key)}
              target="_self"
              width={isMobile ? 'full' : 'auto'}
              size="large"
              variant="sky-blue">{m.rule_guide_index_continue()}：{nextLesson.title}</Button
            >
          {:else}
            <Button
              href={lessonHref(allLessons[0]?.key ?? 'basics')}
              target="_self"
              width={isMobile ? 'full' : 'auto'}
              size="large"
              variant="sky-blue">{m.rule_guide_index_start_course()}</Button
            >
          {/if}
          <Button
            href={localizeHref(ROUTES.rules.quiz)}
            target="_self"
            width={isMobile ? 'full' : 'auto'}
            size="large"
            variant="sky-blue-outline">{m.rule_guide_index_quiz_title()}</Button
          >
        </div>

        <ul class="stats">
          <li>{m.rule_guide_index_stat_chapters({ count: stats.chapters })}</li>
          <li>{m.rule_guide_index_stat_lessons({ count: stats.lessons })}</li>
          <li>{m.rule_guide_index_stat_questions({ count: stats.questions })}</li>
          <li>{m.rule_guide_index_stat_words({ count: stats.words })}</li>
        </ul>
      {/if}
    </div>
  </section>

  {#if searching}
    <!-- ─── 検索結果。レッスンと用語をまとめて出す ─── -->
    <section class="results" aria-live="polite">
      <div class="inner">
        {#if results.length === 0}
          <p class="empty">{m.rule_guide_index_results_empty({ keyword: keyword.trim() })}</p>
        {:else}
          <p class="count">
            {m.rule_guide_index_results({ keyword: keyword.trim(), count: results.length })}
          </p>
          <ul class="result-list">
            {#each results as result (result.document.id)}
              {@const document = result.document}
              <li style:--accent={document.chapter ? chapterColor(document.chapter) : undefined}>
                <a href={document.href}>
                  <span class="result-head">
                    <span class="kind" class:word={document.kind === 'word'}>
                      {document.kind === 'lesson'
                        ? m.rule_guide_index_kind_lesson()
                        : m.rule_guide_index_kind_word()}
                    </span>
                    <span class="result-title">{document.title}</span>
                    {#if document.chapter}
                      <span class="result-sub"
                        >{m.rule_guide_chapter({ number: document.chapter })}{document.subtitle
                          ? ` ${document.subtitle}`
                          : ''}</span
                      >
                    {:else if document.subtitle}
                      <span class="result-sub">{document.subtitle}</span>
                    {/if}
                  </span>
                  <span class="snippet">
                    {#each result.snippet as part, index (index)}
                      {#if part.hit}<mark>{part.text}</mark>{:else}{part.text}{/if}
                    {/each}
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </section>
  {:else}
    <!-- ─── 講座。章をカードで並べる ─── -->
    <section class="course">
      <div class="inner">
        <header class="section-head">
          <h2>{m.rule_guide_index_course_heading()}</h2>
          <p>{m.rule_guide_index_course_lead()}</p>
        </header>

        {#if readCount > 0}
          <div class="progress">
            <div class="progress-row">
              <span class="progress-label">
                {readCount === allLessons.length
                  ? m.rule_guide_index_done()
                  : m.rule_guide_index_progress({ read: readCount, total: allLessons.length })}
              </span>
              <button type="button" class="reset" onclick={resetReadLessons}>
                {m.rule_guide_index_reset()}
              </button>
            </div>
            <div
              class="bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={allLessons.length}
              aria-valuenow={readCount}
            >
              <span style:width="{readRatio * 100}%"></span>
            </div>
          </div>
        {/if}

        <!--
          章は1列の道のりにする。番号の丸を縦の線でつなぎ、上から順に進む講座だと形で伝える。
          2列にすると章ごとのレッスン数の差で高さがそろわず、空白が目立ったため
        -->
        <ol class="chapters">
          {#each chapters as chapter (chapter.key)}
            {@const read = readInChapter(chapter)}
            {@const complete = read === chapter.lessons.length && read > 0}
            <li class="chapter" style:--accent={chapterColor(chapter.number)}>
              <div class="rail" aria-hidden="true">
                <span class="node">
                  {#if complete}
                    <svg viewBox="0 0 16 16"><polyline points="3.5,8.5 6.5,11.5 12.5,4.5" /></svg>
                  {:else}
                    {String(chapter.number).padStart(2, '0')}
                  {/if}
                </span>
              </div>

              <div class="card">
                <a class="chapter-head" href={lessonHref(chapter.key)}>
                  <span class="chapter-label"
                    >{m.rule_guide_chapter({ number: chapter.number })}</span
                  >
                  <span class="chapter-title">{chapter.title}</span>
                </a>
                <p class="chapter-lead">{chapter.lead}</p>
                <p class="chapter-meta">
                  <span>{m.rule_guide_index_minutes({ minutes: chapter.minutes })}</span>
                  <span>{m.rule_guide_index_lessons({ count: chapter.lessons.length })}</span>
                  {#if chapter.quizCount > 0}
                    <span>{m.rule_guide_index_quiz_count({ count: chapter.quizCount })}</span>
                  {/if}
                  {#if read > 0}
                    <span class="chapter-read">{read} / {chapter.lessons.length}</span>
                  {/if}
                </p>

                {#if chapter.lessons.length > 1}
                  <ol class="lessons">
                    {#each chapter.lessons as lesson, index (lesson.key)}
                      {@const done = $readLessons.includes(lesson.key)}
                      <li>
                        <a href={lessonHref(lesson.key)} class:done>
                          <span
                            class="check"
                            aria-label={done ? m.rule_guide_index_read() : undefined}
                          >
                            {#if done}
                              <svg viewBox="0 0 16 16" aria-hidden="true"
                                ><polyline points="3.5,8.5 6.5,11.5 12.5,4.5" /></svg
                              >
                            {/if}
                          </span>
                          <span class="lesson-number">{chapter.number}-{index + 1}</span>
                          <span class="lesson-title">{lesson.title}</span>
                          <span class="lesson-minutes"
                            >{m.rule_guide_index_minutes({ minutes: lesson.minutes })}</span
                          >
                        </a>
                      </li>
                    {/each}
                  </ol>
                {:else}
                  <!-- レッスンが1つの章は、章の名前と重なるので一覧を出さず「読む」だけにする -->
                  <a class="read-one" href={lessonHref(chapter.key)} class:done={read > 0}>
                    <span
                      class="check"
                      aria-label={read > 0 ? m.rule_guide_index_read() : undefined}
                    >
                      {#if read > 0}
                        <svg viewBox="0 0 16 16" aria-hidden="true"
                          ><polyline points="3.5,8.5 6.5,11.5 12.5,4.5" /></svg
                        >
                      {/if}
                    </span>
                    <span class="lesson-title">{m.rule_guide_index_read_lesson()} →</span>
                  </a>
                {/if}
              </div>
            </li>
          {/each}
        </ol>
        <p class="writing">{m.rule_guide_index_writing()}</p>
      </div>
    </section>

    <!-- ─── もっと深める。問題集と用語集 ─── -->
    <section class="more">
      <div class="inner">
        <header class="section-head">
          <h2>{m.rule_guide_index_more_heading()}</h2>
        </header>
        <ul class="more-cards">
          <li>
            <a href={localizeHref(ROUTES.rules.quiz)}>
              <span class="more-badge">Q</span>
              <span class="more-title">{m.rule_guide_quiz_page_title()}</span>
              <span class="more-body">{m.rule_guide_index_quiz_body()}</span>
            </a>
          </li>
          <li>
            <a href={localizeHref(ROUTES.words.index)}>
              <span class="more-badge word">あ</span>
              <span class="more-title">{m.words_title()}</span>
              <span class="more-body">{m.rule_guide_index_words_body()}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  {/if}

  <section class="foot">
    <div class="inner">
      <GuideDisclaimer />
    </div>
  </section>
</article>

<style lang="scss">
  .index {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-20;
    width: 100%;
    max-width: 64em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-56 $space-size-16;
  }

  .mobile .inner {
    padding: $space-size-40 $space-size-16;
  }

  /* ─── 帯 ─── */

  .hero {
    width: 100%;
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 14%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 18%), transparent 42%), $white;
    border-bottom: $border-size-1 solid map.get($gray, 100);

    .inner {
      align-items: center;
      padding-top: $space-size-64;
      padding-bottom: $space-size-56;
      text-align: center;
    }
  }

  .eyebrow {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
    letter-spacing: 0.06em;
  }

  h1 {
    font-size: $font-size-40;
    line-height: 1.3;
  }

  .mobile h1 {
    font-size: $font-size-30;
  }

  .lead {
    max-width: 36em;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, light-text);
  }

  /* 検索窓。帯の中でいちばん目立たせる */
  .search {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    width: 100%;
    max-width: 36em;
  }

  .label {
    font-size: $font-size-14;
    font-weight: bold;
    text-align: left;
  }

  .field {
    position: relative;

    input {
      width: 100%;
      padding: $space-size-16 $space-size-16 $space-size-16 $space-size-48;
      font-size: $font-size-18;
      border: $border-size-2 solid map.get($sky-blue, border);
      border-radius: 999px;
      background: $white;
      box-shadow: 0 6px 20px rgb(25 134 255 / 12%);

      &:focus-visible {
        border-color: map.get($sky-blue, button);
        outline: none;
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: $space-size-20;
    width: 20px;
    height: 20px;
    fill: none;
    stroke: map.get($sky-blue, button);
    stroke-width: 2.5;
    stroke-linecap: round;
    transform: translateY(-50%);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    justify-content: center;
    width: 100%;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    justify-content: center;
    padding: 0;
    list-style: none;

    li {
      padding: $space-size-4 $space-size-12;
      font-size: $font-size-14;
      font-weight: bold;
      color: map.get($sky-blue, text);
      border: $border-size-1 solid map.get($sky-blue, border);
      border-radius: 999px;
      background: $white;
    }
  }

  /* ─── 見出し（節ごと） ─── */

  .section-head {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;

    h2 {
      font-size: $font-size-28;
    }

    p {
      font-size: $font-size-16;
      color: map.get($gray, light-text);
    }
  }

  .mobile .section-head h2 {
    font-size: $font-size-22;
  }

  /* ─── 進み具合 ─── */

  .progress {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-16 $space-size-20;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
    flex-direction: column;
  }

  .progress-row {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    align-items: center;
    justify-content: space-between;
  }

  .progress-label {
    font-size: $font-size-16;
    font-weight: bold;
  }

  .reset {
    padding: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    border: 0;
    background: none;
    text-decoration: underline;
    cursor: pointer;
  }

  .bar {
    height: 8px;
    border-radius: 999px;
    background: $white;
    overflow: hidden;

    span {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: map.get($sky-blue, button);
      transition: width 0.3s ease;
    }
  }

  /* ─── 章（道のり） ─── */

  .course {
    background: map.get($gray, 50);
  }

  .chapters {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    padding: 0;
    list-style: none;
  }

  .chapter {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: 56px minmax(0, 1fr);
  }

  .mobile .chapter {
    gap: $space-size-12;
    grid-template-columns: 40px minmax(0, 1fr);
  }

  /* 番号の丸と、次の章へつながる線 */
  .rail {
    position: relative;
    display: flex;
    justify-content: center;

    &::after {
      position: absolute;
      width: 3px;
      border-radius: 2px;
      background: map.get($gray, 200);
      top: 60px;
      bottom: calc(-1 * #{$space-size-16});
      left: 50%;
      content: '';
      transform: translateX(-50%);
    }
  }

  .mobile .rail::after {
    top: 44px;
  }

  .chapter:last-child .rail::after {
    display: none;
  }

  .node {
    position: relative;
    display: grid;
    width: 56px;
    height: 56px;
    font-size: $font-size-20;
    font-weight: bold;
    color: $white;
    border: 4px solid $white;
    border-radius: 50%;
    background: var(--accent);
    z-index: 1;
    place-items: center;
    box-shadow: 0 2px 8px rgb(0 0 0 / 12%);

    svg {
      width: 26px;
      height: 26px;
      fill: none;
      stroke: $white;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }

  .mobile .node {
    width: 40px;
    height: 40px;
    font-size: $font-size-14;
    border-width: 3px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .card {
    display: flex;
    gap: $space-size-12;
    padding: $space-size-20 $space-size-24;
    border-radius: $border-radius-8;
    background: $white;
    flex-direction: column;
    border-left: 5px solid var(--accent);
    box-shadow: 0 2px 10px rgb(0 0 0 / 6%);
  }

  .mobile .card {
    padding: $space-size-16;
  }

  .chapter-head {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    color: map.get($gray, text);
    text-decoration: none;

    &:hover .chapter-title {
      color: var(--accent);
    }
  }

  .chapter-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: var(--accent);
  }

  .chapter-title {
    font-size: $font-size-22;
    font-weight: bold;
    line-height: 1.4;
    transition: color 0.15s ease;
  }

  .mobile .chapter-title {
    font-size: $font-size-18;
  }

  .chapter-lead {
    display: -webkit-box;
    overflow: hidden;
    font-size: $font-size-14;
    line-height: 1.8;
    color: map.get($gray, light-text);
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .chapter-meta {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, light-text);

    span {
      padding: $space-size-2 $space-size-8;
      border-radius: 999px;
      background: map.get($gray, 50);
    }

    .chapter-read {
      font-weight: bold;
      color: $white;
      background: var(--accent);
    }
  }

  /*
    レッスンは2列に分けるが、読む順が追えるよう「左の列を上から下、続きを右の列」と流す。
    grid で横に並べると 4-1 の右に 4-2 が来て、順番が追いにくかった
  */
  .lessons {
    padding: 0;
    list-style: none;
    border-top: $border-size-1 solid map.get($gray, 100);
    column-gap: $space-size-16;
    columns: 2;

    li {
      border-bottom: $border-size-1 solid map.get($gray, 100);
      break-inside: avoid;
    }
  }

  .mobile .lessons {
    columns: 1;
  }

  .lessons a,
  .read-one {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    padding: $space-size-8 $space-size-4;
    font-size: $font-size-14;
    color: map.get($gray, text);
    text-decoration: none;
    border-radius: $border-radius-4;

    &:hover {
      background: map.get($gray, 50);
    }

    &:hover .lesson-title {
      color: var(--accent);
    }
  }

  .read-one {
    border-top: $border-size-1 solid map.get($gray, 100);
    border-radius: 0;

    .lesson-title {
      font-weight: bold;
      color: var(--accent);
    }
  }

  .check {
    display: grid;
    flex: none;
    place-items: center;
    width: 18px;
    height: 18px;
    border: $border-size-2 solid map.get($gray, border);
    border-radius: 50%;

    svg {
      width: 12px;
      height: 12px;
      fill: none;
      stroke: $white;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }

  .done .check {
    border-color: var(--accent);
    background: var(--accent);
  }

  .lesson-number {
    flex: none;
    min-width: 2.4em;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .lesson-title {
    flex: 1 1 auto;
    min-width: 0;
    transition: color 0.15s ease;
  }

  .lesson-minutes {
    flex: none;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .writing {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  /* ─── もっと深める ─── */

  .more {
    background: $white;
  }

  .more-cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0;
    list-style: none;

    a {
      display: grid;
      gap: $space-size-4 $space-size-16;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      height: 100%;
      padding: $space-size-20;
      color: map.get($gray, text);
      border: $border-size-1 solid map.get($gray, 100);
      border-radius: $border-radius-8;
      background: $white;
      transition:
        border-color 0.15s ease,
        transform 0.15s ease;
      align-items: center;
      text-decoration: none;

      &:hover {
        border-color: map.get($sky-blue, border);
        transform: translateY(-2px);
      }
    }
  }

  .mobile .more-cards {
    grid-template-columns: 1fr;
  }

  .more-badge {
    display: grid;
    grid-row: 1 / span 2;
    width: 48px;
    height: 48px;
    font-size: $font-size-22;
    font-weight: bold;
    color: $white;
    border-radius: 50%;
    background: map.get($sky-blue, button);
    place-items: center;

    &.word {
      background: map.get($theme, green);
    }
  }

  .more-title {
    font-size: $font-size-18;
    font-weight: bold;
  }

  .more-body {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  /* ─── 検索結果 ─── */

  .results {
    background: map.get($gray, 50);
  }

  .count,
  .empty {
    font-size: $font-size-16;
    font-weight: bold;
  }

  .empty {
    padding: $space-size-24 0;
    text-align: center;
  }

  .result-list {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: 0;
    list-style: none;

    a {
      display: flex;
      gap: $space-size-8;
      padding: $space-size-16 $space-size-20;
      color: map.get($gray, text);
      border-radius: $border-radius-8;
      background: $white;
      flex-direction: column;
      text-decoration: none;
      border-left: 4px solid var(--accent, #{map.get($theme, green)});
      box-shadow: 0 1px 6px rgb(0 0 0 / 5%);

      &:hover .result-title {
        color: map.get($sky-blue, text);
      }
    }
  }

  .result-head {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    align-items: baseline;
  }

  .kind {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-11;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: var(--accent, #{map.get($sky-blue, button)});

    &.word {
      background: map.get($theme, green);
    }
  }

  .result-title {
    font-size: $font-size-18;
    font-weight: bold;
  }

  .result-sub {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .snippet {
    font-size: $font-size-14;
    line-height: 1.8;
    color: map.get($gray, light-text);

    mark {
      padding: 0 2px;
      font-weight: bold;
      color: map.get($gray, text);
      border-radius: 2px;
      background: map.get($yellow, 200);
    }
  }

  /* ─── 断り書き ─── */

  .foot .inner {
    padding-top: $space-size-8;
    padding-bottom: $space-size-48;
  }
</style>
