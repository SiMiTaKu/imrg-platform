<script lang="ts">
  import type { GuideQuizQuestion } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  /** 理解度チェック。選ぶとその場で答えが出る */
  interface Props {
    /** 見出し（「第4章の理解度チェック」など） */
    heading: string
    /** 問題 */
    questions: readonly GuideQuizQuestion[]
    /** 部品を置くページの中で重ならない目印。選択肢の name に使う */
    id: string
    /** 解説のページへ戻るリンクを出すか。そのページの中に置くときは出さない */
    showReview?: boolean
  }

  const { heading, questions, id, showReview = false }: Props = $props()

  /*
    選んだ答え。1問につき1回だけ選べる。選び直しは「もう一度解く」で全部消してから。
    点数を出すための答え合わせなので、選んだら確定させる
  */
  let chosen = $state<(number | undefined)[]>([])

  const answeredCount = $derived(chosen.filter((choice) => choice !== undefined).length)
  const correctCount = $derived(
    questions.filter((question, index) => chosen[index] === question.answer).length,
  )
  const finished = $derived(answeredCount === questions.length)

  /**
   * 答えを選ぶ
   * @param questionIndex - 何問目か
   * @param choiceIndex - 選んだ選択肢
   */
  const choose = (questionIndex: number, choiceIndex: number) => {
    if (chosen[questionIndex] !== undefined) return
    const next = [...chosen]
    next[questionIndex] = choiceIndex
    chosen = next
  }
</script>

<section class="quiz" aria-labelledby="{id}-heading">
  <h2 id="{id}-heading">{heading}</h2>
  <p class="lead">{m.rule_guide_quiz_lead()}</p>

  <ol class="questions">
    {#each questions as question, questionIndex (question.question)}
      {@const choice = chosen[questionIndex]}
      {@const answered = choice !== undefined}
      <li class="question">
        <p class="ask">
          <span class="number">{m.rule_guide_quiz_question({ number: questionIndex + 1 })}</span>
          {question.question}
        </p>

        <div class="choices" role="radiogroup" aria-label={question.question}>
          {#each question.choices as label, choiceIndex (label)}
            <button
              type="button"
              role="radio"
              aria-checked={choice === choiceIndex}
              class="choice"
              class:correct={answered && choiceIndex === question.answer}
              class:wrong={answered && choice === choiceIndex && choiceIndex !== question.answer}
              disabled={answered}
              onclick={() => choose(questionIndex, choiceIndex)}
            >
              {label}
            </button>
          {/each}
        </div>

        {#if answered}
          <div class="feedback" class:ok={choice === question.answer} aria-live="polite">
            <p class="verdict">
              {choice === question.answer
                ? m.rule_guide_quiz_correct()
                : m.rule_guide_quiz_wrong({ answer: question.choices[question.answer] })}
            </p>
            <p class="explanation">{question.explanation}</p>
            {#if showReview}
              <a href={localizeHref(ROUTES.rules.page(guideKeyToPath(question.from)))}>
                {m.rule_guide_quiz_review()}
              </a>
            {/if}
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  {#if finished}
    <div class="result" aria-live="polite">
      <p>{m.rule_guide_quiz_result({ correct: correctCount, total: questions.length })}</p>
      <button type="button" class="retry" onclick={() => (chosen = [])}>
        {m.rule_guide_quiz_retry()}
      </button>
    </div>
  {/if}
</section>

<style lang="scss">
  .quiz {
    display: flex;
    gap: $space-size-12;
    padding: $space-size-20;
    border-radius: $border-radius-8;
    background-color: map.get($sky-blue, background);
    flex-direction: column;

    h2 {
      font-size: $font-size-20;
    }
  }

  /* 全体のスタイルが p を18pxにしているので、段落ごとに大きさを当てる */
  .lead {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .questions {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    padding: 0;
    list-style: none;
  }

  .question {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background-color: $white;
    flex-direction: column;
  }

  .ask {
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.7;
  }

  .number {
    padding-right: $space-size-8;
    color: map.get($sky-blue, text);
  }

  .choices {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
  }

  .choice {
    padding: $space-size-12 $space-size-16;
    font-size: $font-size-14;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, border);
    border-radius: $border-radius-8;
    background-color: $white;
    text-align: left;
    cursor: pointer;

    &:hover:not(:disabled) {
      border-color: map.get($sky-blue, border);
      background-color: map.get($sky-blue, background);
    }

    &:focus-visible {
      outline: $border-size-2 solid map.get($sky-blue, button);
    }

    &:disabled {
      cursor: default;
    }

    /* 正解の選択肢は、選んだかどうかに関わらず緑で示す */
    &.correct {
      font-weight: bold;
      border-color: map.get($theme, green);
      background-color: map.get($theme-background, green);
    }

    &.wrong {
      border-color: map.get($theme, red);
      background-color: map.get($theme-background, red);
    }
  }

  .feedback {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding: $space-size-12;
    border-left: $border-size-4 solid map.get($theme, red);
    border-radius: $border-radius-4;

    &.ok {
      border-left-color: map.get($theme, green);
    }

    a {
      font-size: $font-size-14;
      color: map.get($sky-blue, text);
    }
  }

  .verdict {
    font-size: $font-size-14;
    font-weight: bold;
  }

  .explanation {
    font-size: $font-size-14;
    line-height: 1.8;
  }

  .result {
    display: flex;
    gap: $space-size-12;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background-color: $white;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: $font-size-18;
      font-weight: bold;
    }
  }

  .retry {
    padding: $space-size-8 $space-size-16;
    font-size: $font-size-14;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: 999px;
    background-color: $white;
    cursor: pointer;
  }
</style>
