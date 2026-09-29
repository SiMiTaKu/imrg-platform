<script lang="ts">
  import { tick } from 'svelte'
  import type { GuideQuizQuestion } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  /**
   * 理解度チェック。1問ずつ出すステップ形式。
   *
   * @remarks
   * 選ぶとその場で正解と解説が出て、「次の問題へ」で進む。
   * 全問を縦に並べると、答えるたびにスクロールが要ったため、1問ずつにした。
   * 最後まで解くと、正解の数と、問題ごとの正誤のふり返りを出す
   */
  interface Props {
    /** 見出し（「第4章の理解度チェック」など） */
    heading: string
    /** 問題 */
    questions: readonly GuideQuizQuestion[]
    /** 部品を置くページの中で重ならない目印 */
    id: string
    /** 解説のページへ戻るリンクを出すか。そのページの中に置くときは出さない */
    showReview?: boolean
    /** 最後まで解いたときに呼ぶ。問題集で、章ごとの点数を覚えておくのに使う */
    onfinish?: (correct: number, total: number) => void
    /** 結果の画面に出す「次へ」のボタンの文字。渡したときだけ出す（問題集の「次の章へ」） */
    nextLabel?: string
    /** 「次へ」のボタンを押したときに呼ぶ */
    onnext?: () => void
  }

  const {
    heading,
    questions,
    id,
    showReview = false,
    onfinish,
    nextLabel,
    onnext,
  }: Props = $props()

  /* いま出している問題の番号（0から）。問題の数と同じになったら結果を出す */
  let current = $state(0)
  /* 選んだ答え。1問につき1回だけ選べる。選び直しは「もう一度解く」で全部消してから */
  let chosen = $state<(number | undefined)[]>([])

  const finished = $derived(current >= questions.length)
  const question = $derived(questions[current])
  const choice = $derived(chosen[current])
  const answered = $derived(choice !== undefined)
  const correctCount = $derived(
    questions.filter((item, index) => chosen[index] === item.answer).length,
  )
  const isLast = $derived(current === questions.length - 1)

  /* 次の問題や結果に切り替わったら、そこへ読み上げと操作の位置を移す */
  let stage = $state<HTMLElement>()
  /** 次の画面に切り替えたあと、その先頭に操作の位置を移す */
  const focusStage = async () => {
    await tick()
    stage?.focus()
  }

  /**
   * 答えを選ぶ
   * @param choiceIndex - 選んだ選択肢
   */
  const choose = (choiceIndex: number) => {
    if (answered) return
    const next = [...chosen]
    next[current] = choiceIndex
    chosen = next
  }

  /** 次の問題へ進む。最後の問題なら結果へ */
  const goNext = () => {
    current += 1
    if (current >= questions.length) onfinish?.(correctCount, questions.length)
    void focusStage()
  }

  /** はじめから解き直す */
  const retry = () => {
    chosen = []
    current = 0
    void focusStage()
  }

  /**
   * 解説のページへのリンク先を作る
   * @param item - 問題
   * @returns 表示中の言語のパス
   */
  const reviewHref = (item: GuideQuizQuestion) =>
    localizeHref(ROUTES.rules.page(guideKeyToPath(item.from)))
</script>

<section class="quiz" aria-labelledby="{id}-heading">
  <header class="head">
    <h2 id="{id}-heading">{heading}</h2>
    {#if !finished}
      <p class="position">
        {m.rule_guide_quiz_progress({ number: current + 1, total: questions.length })}
      </p>
    {/if}
  </header>

  <!-- 何問目まで進んだか。答えた問題は正解なら緑、不正解なら赤 -->
  <ol class="dots" aria-hidden="true">
    {#each questions as item, index (item.question)}
      <li
        class:now={index === current}
        class:ok={chosen[index] !== undefined && chosen[index] === item.answer}
        class:ng={chosen[index] !== undefined && chosen[index] !== item.answer}
      ></li>
    {/each}
  </ol>

  <div class="stage" tabindex="-1" bind:this={stage}>
    {#if !finished && question}
      <p class="ask">
        <span class="number">{m.rule_guide_quiz_question({ number: current + 1 })}</span>
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
            onclick={() => choose(choiceIndex)}
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
            <a href={reviewHref(question)}>{m.rule_guide_quiz_review()}</a>
          {/if}
        </div>

        <div class="actions">
          <button type="button" class="next" onclick={goNext}>
            {isLast ? m.rule_guide_quiz_show_result() : m.rule_guide_quiz_next()} →
          </button>
        </div>
      {/if}
    {:else}
      <!-- 結果。正解の数と、問題ごとのふり返り -->
      <div class="result" aria-live="polite">
        <p class="score">
          {m.rule_guide_quiz_result({ correct: correctCount, total: questions.length })}
        </p>
        <ol class="review">
          {#each questions as item, index (item.question)}
            {@const ok = chosen[index] === item.answer}
            <li class:ok>
              <span class="mark" aria-hidden="true">{ok ? '○' : '×'}</span>
              <span class="review-words">
                <span class="review-ask">{item.question}</span>
                {#if !ok}
                  <span class="review-answer"
                    >{m.rule_guide_quiz_wrong({ answer: item.choices[item.answer] })}</span
                  >
                {/if}
                {#if !ok && showReview}
                  <a href={reviewHref(item)}>{m.rule_guide_quiz_review()}</a>
                {/if}
              </span>
            </li>
          {/each}
        </ol>
        <div class="actions">
          <button type="button" class="retry" onclick={retry}>
            {m.rule_guide_quiz_retry()}
          </button>
          {#if nextLabel && onnext}
            <button type="button" class="next" onclick={onnext}>{nextLabel} →</button>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  .quiz {
    display: flex;
    gap: $space-size-12;
    padding: $space-size-20;
    border-radius: $border-radius-8;
    background-color: map.get($sky-blue, background);
    flex-direction: column;
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    align-items: baseline;
    justify-content: space-between;

    h2 {
      font-size: $font-size-20;
    }
  }

  /* 全体のスタイルが p を18pxにしているので、段落ごとに大きさを当てる */
  .position {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  /* 進み具合の点。答えた問題は正誤で色を変える */
  .dots {
    display: flex;
    gap: $space-size-4;
    padding: 0;
    list-style: none;

    li {
      height: 6px;
      border-radius: 999px;
      background: $white;
      flex: 1 1 0;
    }

    .now {
      background: map.get($sky-blue, border);
    }

    .ok {
      background: map.get($theme, green);
    }

    .ng {
      background: map.get($theme, red);
    }
  }

  .stage {
    display: flex;
    gap: $space-size-12;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background-color: $white;
    flex-direction: column;

    &:focus {
      outline: none;
    }
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

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    justify-content: flex-end;
  }

  .next,
  .retry {
    padding: $space-size-12 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    cursor: pointer;
    border-radius: 999px;
  }

  .next {
    color: $white;
    border: 0;
    background-color: map.get($sky-blue, button);

    &:hover {
      background-color: map.get($sky-blue, text);
    }
  }

  .retry {
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    background-color: $white;
  }

  .result {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
  }

  .score {
    font-size: $font-size-20;
    font-weight: bold;
  }

  .review {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: $space-size-8;
      padding: $space-size-8 0;
      border-bottom: $border-size-1 solid map.get($gray, 100);
    }
  }

  .mark {
    flex: none;
    width: 1.4em;
    font-weight: bold;
    color: map.get($theme, red);
    text-align: center;
  }

  .ok .mark {
    color: map.get($theme, green);
  }

  .review-words {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    font-size: $font-size-14;
    line-height: 1.7;

    a {
      color: map.get($sky-blue, text);
    }
  }

  .review-ask {
    color: map.get($gray, text);
  }

  .review-answer {
    font-size: $font-size-12;
    color: map.get($theme, red);
  }
</style>
