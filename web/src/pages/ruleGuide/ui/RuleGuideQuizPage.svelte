<script lang="ts">
  import type { GuideQuizQuestion } from '@entities/ruleGuide'
  import { GuideQuiz } from '@features/guideQuiz'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer } from '@widgets/ruleGuide'

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
      {#each chapters as chapter (chapter.number)}
        <!-- 問題集では、答えを確かめに戻れるよう解説のページへのリンクを出す -->
        <GuideQuiz
          heading="{m.rule_guide_chapter({ number: chapter.number })} {chapter.title}"
          questions={chapter.questions}
          id="quiz-chapter-{chapter.number}"
          showReview={true}
        />
      {/each}
      <GuideDisclaimer />
    </div>
  </section>
</article>

<style lang="scss">
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
