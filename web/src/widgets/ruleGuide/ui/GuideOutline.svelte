<script lang="ts">
  import type { GuideKey } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { readLessons } from '@features/guideProgress'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { chapterColor } from '../config/chapterColors'

  /** 目次の章1つ */
  interface OutlineChapter {
    /** 何章か */
    number: number
    /** 章のいちばん上の鍵 */
    key: GuideKey
    /** 章の名前 */
    title: string
    /** 章のレッスン。読む順 */
    lessons: readonly { key: GuideKey; title: string }[]
  }

  /**
   * 講座全体の目次。どのレッスンからでも、ほかの章・レッスンへ移れるようにする。
   *
   * @remarks
   * 章ごとに開け閉めでき、いま読んでいる章だけ最初から開いておく。
   * 読んだレッスンにはチェック、いま読んでいるレッスンには印を付ける
   */
  interface Props {
    /** 講座の章 */
    outline: readonly OutlineChapter[]
    /** いま読んでいるレッスンの鍵 */
    currentKey: GuideKey
    /** リンクを押したときに呼ぶ。スマホで開いた目次を閉じるのに使う */
    onnavigate?: () => void
  }

  const { outline, currentKey, onnavigate }: Props = $props()

  /**
   * レッスンへのリンク先を作る
   * @param key - レッスンの鍵
   * @returns 表示中の言語のパス
   */
  const lessonHref = (key: GuideKey) => localizeHref(ROUTES.rules.page(guideKeyToPath(key)))

  /**
   * いま読んでいる章か
   * @param chapter - 章
   * @returns いま読んでいるレッスンがこの章にあれば true
   */
  const isCurrentChapter = (chapter: OutlineChapter) =>
    chapter.lessons.some((lesson) => lesson.key === currentKey)
</script>

<nav class="outline" aria-label={m.rule_guide_outline_title()}>
  <a class="home" href={localizeHref(ROUTES.rules.index)} onclick={() => onnavigate?.()}>
    ← {m.rule_guide_outline_home()}
  </a>

  <ol class="chapters">
    {#each outline as chapter (chapter.key)}
      {@const read = chapter.lessons.filter((lesson) => $readLessons.includes(lesson.key)).length}
      <li style:--accent={chapterColor(chapter.number)}>
        <details open={isCurrentChapter(chapter)}>
          <summary>
            <span class="number">{chapter.number}</span>
            <span class="title">{chapter.title}</span>
            <span class="count">{read}/{chapter.lessons.length}</span>
            <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"
              ><polyline points="4,6 8,10 12,6" /></svg
            >
          </summary>
          <ol class="lessons">
            {#each chapter.lessons as lesson, index (lesson.key)}
              {@const done = $readLessons.includes(lesson.key)}
              {@const current = lesson.key === currentKey}
              <li>
                <a
                  href={lessonHref(lesson.key)}
                  class:current
                  class:done
                  aria-current={current ? 'page' : undefined}
                  onclick={() => onnavigate?.()}
                >
                  <span class="check" aria-hidden="true">
                    {#if done}
                      <svg viewBox="0 0 16 16"><polyline points="3.5,8.5 6.5,11.5 12.5,4.5" /></svg>
                    {/if}
                  </span>
                  <span class="lesson-number">{chapter.number}-{index + 1}</span>
                  <span class="lesson-title">{lesson.title}</span>
                </a>
              </li>
            {/each}
          </ol>
        </details>
      </li>
    {/each}
  </ol>

  <a class="quiz" href={localizeHref(ROUTES.rules.quiz)} onclick={() => onnavigate?.()}>
    {m.rule_guide_quiz_page_title()} →
  </a>
</nav>

<style lang="scss">
  .outline {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    font-size: $font-size-14;
  }

  .home,
  .quiz {
    padding: $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    text-decoration: none;
    border-radius: $border-radius-4;

    &:hover {
      color: map.get($sky-blue, text);
      background: map.get($gray, 50);
    }
  }

  .chapters,
  .lessons {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;
  }

  .chapters {
    gap: $space-size-4;
  }

  summary {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    padding: $space-size-8;
    cursor: pointer;
    list-style: none;
    border-radius: $border-radius-4;

    &::-webkit-details-marker {
      display: none;
    }

    &:hover {
      background: map.get($gray, 50);
    }
  }

  .number {
    display: grid;
    width: 24px;
    height: 24px;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 50%;
    background: var(--accent);
    flex: none;
    place-items: center;
  }

  .title {
    flex: 1 1 auto;
    min-width: 0;
    font-weight: bold;
    line-height: 1.4;
  }

  .count {
    flex: none;
    font-size: $font-size-11;
    color: map.get($gray, light-text);
  }

  .chevron {
    flex: none;
    width: 14px;
    height: 14px;
    fill: none;
    stroke: map.get($gray, light-text);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.2s ease;
  }

  details[open] .chevron {
    transform: rotate(180deg);
  }

  .lessons {
    padding: $space-size-2 0 $space-size-8 $space-size-12;
  }

  .lessons a {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    padding: $space-size-4 $space-size-8;
    color: map.get($gray, text);
    text-decoration: none;
    border-left: 3px solid transparent;
    border-radius: 0 $border-radius-4 $border-radius-4 0;

    &:hover {
      background: map.get($gray, 50);
    }

    /* いま読んでいるレッスン。章の色の線と淡い地で示す */
    &.current {
      font-weight: bold;
      background: map.get($gray, 50);
      border-left-color: var(--accent);
    }
  }

  .check {
    display: grid;
    flex: none;
    place-items: center;
    width: 14px;
    height: 14px;
    border: $border-size-2 solid map.get($gray, border);
    border-radius: 50%;

    svg {
      width: 10px;
      height: 10px;
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
    font-size: $font-size-11;
    color: map.get($gray, light-text);
  }

  .lesson-title {
    flex: 1 1 auto;
    min-width: 0;
    line-height: 1.5;
  }
</style>
