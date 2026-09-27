<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import type { GuideKey, GuidePage, GuideQuizQuestion } from '@entities/ruleGuide'
  import { guideKeyToPath, guideUpKey } from '@entities/ruleGuide'
  import { GuideQuiz } from '@features/guideQuiz'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideBlocks, GuideDisclaimer } from '@widgets/ruleGuide'

  /** ルールの解説の1ページ */
  interface Props {
    /** 出すページ */
    page: GuidePage
    /** すぐ下にぶら下がるページ。本文があるものだけ渡ってくる */
    children: readonly GuidePage[]
    /** 講座の中での位置。何章の何番目のレッスンか、前後はどこか */
    course: GuideCourse
    /** 章末の理解度チェック。章の最後のレッスンでだけ中身がある */
    quiz: readonly GuideQuizQuestion[]
  }

  /** 前後のレッスンへのリンクに要るもの */
  interface LessonLink {
    /** 鍵 */
    key: GuideKey
    /** 見出し */
    title: string
  }

  /** 講座の中での位置 */
  interface GuideCourse {
    /** 何章か */
    chapter: number
    /** 章の名前（章のいちばん上のページの見出し） */
    chapterTitle: string
    /** 章の中で何番目か */
    lesson: number
    /** 章の中のレッスンの数 */
    lessonCount: number
    /** 前のレッスン */
    prev?: LessonLink
    /** 次のレッスン */
    next?: LessonLink
    /** 次のレッスンが別の章か */
    nextIsNewChapter: boolean
  }

  const { page, children, course, quiz }: Props = $props()

  /**
   * レッスンへのリンク先を作る
   * @param key - レッスンの鍵
   * @returns 表示中の言語のパス
   */
  const lessonHref = (key: GuideKey) => localizeHref(ROUTES.rules.page(guideKeyToPath(key)))

  const isMobile = $derived($pageData.isMobile)

  /*
    上へ戻る先。まだ書いていない親を飛ばして、本文のあるいちばん近い先祖へ戻す。
    見つからなければ解説の入口へ。書いていないページへのリンクを出さないための決まり
  */
  const up = $derived(guideUpKey(page.key))
  const upHref = $derived(
    up === undefined
      ? localizeHref(ROUTES.rules.index)
      : localizeHref(ROUTES.rules.page(guideKeyToPath(up))),
  )
</script>

<article class="guide" class:mobile={isMobile}>
  <!-- ほかのページと同じ作り。帯で受けて、本文は白い面に置く -->
  <section class="hero">
    <div class="inner">
      <nav class="up">
        <a href={upHref}>{m.rule_guide_breadcrumb_top()}</a>
      </nav>
      <!-- 講座の中の位置。Udemy のように、いま何章の何番目かを見せる -->
      <p class="course">
        <span class="chapter">{m.rule_guide_chapter({ number: course.chapter })}</span>
        <span class="chapter-title">{course.chapterTitle}</span>
        <span class="lesson"
          >{m.rule_guide_lesson({ number: course.lesson, total: course.lessonCount })}</span
        >
      </p>
      <h1>{page.title}</h1>
      <!-- 最初の答え。検索から来た人はここだけ読んで帰れるようにする -->
      <p class="lead">{page.lead}</p>
    </div>
  </section>

  <section class="body">
    <div class="inner">
      <GuideBlocks blocks={page.blocks} />

      {#if children.length > 0}
        <section class="children">
          <h2>{m.rule_guide_children_heading()}</h2>
          <ul>
            {#each children as child (child.key)}
              <li>
                <a href={localizeHref(ROUTES.rules.page(guideKeyToPath(child.key)))}>
                  <span class="child-title">{child.title}</span>
                  <span class="child-lead">{child.lead}</span>
                </a>
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if quiz.length > 0}
        <GuideQuiz
          heading={m.rule_guide_quiz_heading({ number: course.chapter })}
          questions={quiz}
          id="chapter-{course.chapter}-quiz"
        />
      {/if}

      <!-- 前後のレッスン。前から順に読めば理解が積み上がるように並べてある -->
      <nav class="pager" aria-label={m.rule_guide_chapter({ number: course.chapter })}>
        {#if course.prev}
          <a href={lessonHref(course.prev.key)}>
            <span class="direction">← {m.rule_guide_prev()}</span>
            <span class="title">{course.prev.title}</span>
          </a>
        {/if}
        {#if course.next}
          <a class="next" href={lessonHref(course.next.key)}>
            <span class="direction"
              >{course.nextIsNewChapter ? m.rule_guide_next_chapter() : m.rule_guide_next()} →</span
            >
            <span class="title">{course.next.title}</span>
          </a>
        {:else}
          <a class="next" href={localizeHref(ROUTES.rules.quiz)}>
            <span class="direction">{m.rule_guide_quiz_page_title()} →</span>
            <span class="title">{m.rule_guide_course_end()}</span>
          </a>
        {/if}
      </nav>

      <!-- 断り書き。ページの型（GuidePage.disclaimer）で必須にしてある -->
      <GuideDisclaimer />

      <div class="back">
        <Button
          href={localizeHref(ROUTES.rules.index)}
          target="_self"
          width={isMobile ? 'full' : 'auto'}
          size="medium"
          variant="sky-blue">{m.rule_guide_breadcrumb_top()}</Button
        >
      </div>
    </div>
  </section>
</article>

<style lang="scss">
  /* ほかのページと同じ組み方。帯（hero）で受けて、白い面に本文を置く */
  .guide {
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
    gap: $space-size-24;
    padding-bottom: $space-size-64;
  }

  .course {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    align-items: center;
    font-size: $font-size-14;
  }

  .chapter {
    padding: $space-size-2 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background-color: map.get($sky-blue, button);
  }

  .chapter-title {
    font-weight: bold;
    color: map.get($gray, text);
  }

  .lesson {
    color: map.get($gray, light-text);
  }

  /* 前後のレッスン。前は左、次は右に置く */
  .pager {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: 1fr 1fr;

    a {
      display: flex;
      gap: $space-size-4;
      padding: $space-size-16;
      color: map.get($gray, text);
      border: $border-size-1 solid map.get($gray, border);
      border-radius: $border-radius-8;
      background-color: $white;
      flex-direction: column;
      text-decoration: none;

      &:hover {
        border-color: map.get($sky-blue, border);
      }
    }

    .next {
      grid-column: 2;
      text-align: right;
    }
  }

  .mobile .pager {
    grid-template-columns: 1fr;

    .next {
      grid-column: 1;
    }
  }

  .direction {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .pager .title {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
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

  /* 次に読むページ。ほかのページのカードと同じ見た目にそろえる */
  .children {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;

    h2 {
      font-size: $font-size-20;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: $space-size-8;
    }

    a {
      display: flex;
      gap: $space-size-4;
      padding: $space-size-16;
      color: map.get($gray, text);
      border: $border-size-1 solid map.get($gray, border);
      border-radius: $border-radius-8;
      background-color: $white;
      flex-direction: column;
      text-decoration: none;

      &:hover {
        border-color: map.get($sky-blue, border);
      }
    }
  }

  .child-title {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .child-lead {
    display: -webkit-box;
    overflow: hidden;
    font-size: $font-size-14;
    line-height: 1.7;
    color: map.get($gray, light-text);
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .back {
    display: flex;
    justify-content: center;
    padding-top: $space-size-16;
  }
</style>
