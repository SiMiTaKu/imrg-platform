<script lang="ts">
  import type { GuideQuizQuestion } from '@entities/ruleGuide'
  import { GuideQuiz } from '@features/guideQuiz'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer, chapterColor } from '@widgets/ruleGuide'

  /** 問題集。章ごとの理解度チェックを、講座の順番に並べる */
  interface Props {
    /** 章ごとの問題 */
    chapters: readonly {
      /** 何章か */
      number: number
      /** 章の名前 */
      title: string
      /** 問題 */
      questions: readonly GuideQuizQuestion[]
    }[]
  }

  const { chapters }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /*
    章を縦に並べると、次の章を解くたびにスクロールが要った。
    上の切り替えで章を選び、選んだ章の問題だけを出す
  */
  let selected = $state(0)
  const chapter = $derived(chapters[selected])

  /* 解き終えた章の点数。切り替えのボタンに「3/4」と出す */
  let scores = $state<Record<number, { correct: number; total: number }>>({})

  /**
   * 章を選ぶ
   * @param index - 何番目の章か（0から）
   */
  const select = (index: number) => {
    selected = index
  }
</script>

<article class="quiz-page" class:mobile={isMobile}>
  <section class="hero">
    <div class="inner">
      <nav class="up">
        <a href={localizeHref(ROUTES.rules.index)}>{m.rule_guide_breadcrumb_top()}</a>
      </nav>
      <h1>{m.rule_guide_quiz_page_title()}</h1>
      <p class="lead">{m.rule_guide_quiz_page_lead()}</p>
    </div>
  </section>

  <section class="body">
    <div class="inner">
      <!-- 章の切り替え。解き終えた章には点数を出す -->
      <div class="tabs" role="tablist" aria-label={m.rule_guide_outline_title()}>
        {#each chapters as item, index (item.number)}
          {@const score = scores[item.number]}
          <button
            type="button"
            role="tab"
            id="quiz-tab-{item.number}"
            aria-selected={index === selected}
            aria-controls="quiz-panel"
            class="tab"
            class:active={index === selected}
            style:--accent={chapterColor(item.number)}
            onclick={() => select(index)}
          >
            <span class="tab-number">{item.number}</span>
            <span class="tab-title">{item.title}</span>
            {#if score}
              <span class="tab-score">{score.correct}/{score.total}</span>
            {/if}
          </button>
        {/each}
      </div>

      {#if chapter}
        <div
          id="quiz-panel"
          role="tabpanel"
          aria-labelledby="quiz-tab-{chapter.number}"
          style:--accent={chapterColor(chapter.number)}
        >
          <!-- 章を切り替えたら、解いている途中の状態は捨てて最初から出す -->
          {#key chapter.number}
            <!-- 問題集では、答えを確かめに戻れるよう解説のページへのリンクを出す -->
            <GuideQuiz
              heading="{m.rule_guide_chapter({ number: chapter.number })} {chapter.title}"
              questions={chapter.questions}
              id="quiz-chapter-{chapter.number}"
              showReview={true}
              onfinish={(correct, total) =>
                (scores = { ...scores, [chapter.number]: { correct, total } })}
              nextLabel={selected < chapters.length - 1 ? m.rule_guide_next_chapter() : undefined}
              onnext={() => select(selected + 1)}
            />
          {/key}
        </div>
      {/if}
      <GuideDisclaimer />
    </div>
  </section>
</article>

<style lang="scss">
  /* ─── 章の切り替え ─── */

  .tabs {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .mobile .tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tab {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-8 $space-size-12;
    font-size: $font-size-14;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, border);
    border-radius: $border-radius-8;
    background: $white;
    align-items: center;
    text-align: left;
    cursor: pointer;

    &:hover {
      border-color: var(--accent);
    }

    &:focus-visible {
      outline: $border-size-2 solid var(--accent);
    }

    /* 選んでいる章は、章の色で塗る */
    &.active {
      color: $white;
      border-color: var(--accent);
      background: var(--accent);

      .tab-number {
        color: var(--accent);
        background: $white;
      }

      .tab-score {
        color: $white;
      }
    }
  }

  .tab-number {
    display: grid;
    width: 22px;
    height: 22px;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 50%;
    background: var(--accent);
    flex: none;
    place-items: center;
  }

  .tab-title {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tab-score {
    flex: none;
    font-size: $font-size-12;
    font-weight: bold;
    color: var(--accent);
  }

  /* 解説のページと同じ組み方。帯で受けて、白い面に本文を置く */
  .quiz-page {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .hero {
    width: 100%;
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 14%), transparent 42%), $white;
    border-bottom: $border-size-1 solid map.get($gray, 100);
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    width: 100%;
    max-width: 48em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-48 $space-size-16;
  }

  .mobile .inner {
    padding: $space-size-32 $space-size-16;
  }

  .body .inner {
    gap: $space-size-32;
    padding-bottom: $space-size-64;
  }

  .up {
    font-size: $font-size-14;

    a {
      color: map.get($gray, light-text);
    }
  }

  h1 {
    font-size: $font-size-30;
    line-height: 1.5;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .lead {
    font-size: $font-size-18;
    line-height: 1.9;
  }

  .mobile .lead {
    font-size: $font-size-16;
  }
</style>
