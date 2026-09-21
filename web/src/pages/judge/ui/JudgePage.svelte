<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import {
    ExecutionPointResultModalDesktop,
    ExecutionPointResultModalMobile,
    JudgeThemeColor,
    PointA,
    PointB,
    SelectApparatus,
    judgementApparatus,
  } from '@features/judge'
  import { pageData } from '@shared/lib/device'
  import { JUDGE_STEPS, getStepState } from '../config/steps'
  import JudgeIntro from './JudgeIntro.svelte'
  import JudgeResult from './JudgeResult.svelte'
  import JudgeSteps from './JudgeSteps.svelte'
  import NextActions from './NextActions.svelte'
  import StepPanel from './StepPanel.svelte'

  /** 採点表の先頭の id。案内から飛ばすために使う */
  const FORM_ID = 'judge-form'
  /** 採点を終えたあとの案内の id */
  const RESULT_ID = 'judge-result'

  const isMobile = $derived($pageData.isMobile)
  /** 手具のイメージカラー。選ぶ前は灰色 */
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)

  /** Aの減点を決めたか */
  let submittedPointA = $state(false)
  /** Bの減点まで決めて、採点を終えたか */
  let judged = $state(false)
  /** 決定点の画面を出しているか */
  let resultShown = $state(false)

  /**
   * いま何番目の段階にいるか。段階の表示と、各段階の枠の見た目に使う
   */
  const currentStep = $derived.by(() => {
    if (judged) return 4
    if (submittedPointA) return 3
    return $judgementApparatus ? 2 : 1
  })

  /**
   * 指定した場所まで画面を動かす
   * @param id - 動かす先の要素の id
   */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /**
   * Bの減点まで決まったので、決定点を出す
   */
  const handleJudged = () => {
    judged = true
    resultShown = true
  }

  /**
   * 決定点の画面を閉じて、次にすることまで運ぶ
   */
  const closeResult = () => {
    resultShown = false
    scrollTo(RESULT_ID)
  }

  /**
   * 最初から採点し直す。入力をすべて消すために読み込み直す
   */
  const retry = () => {
    location.reload()
  }
</script>

<article class="judge {color}" class:mobile={isMobile}>
  <JudgeIntro onstart={() => scrollTo(FORM_ID)} />

  <section class="workspace" id={FORM_ID}>
    <div class="inner">
      <JudgeSteps current={currentStep} />

      <div class="panels">
        <StepPanel step={JUDGE_STEPS[0]} state={getStepState(1, currentStep)}>
          <SelectApparatus />
        </StepPanel>

        <!-- 中身は段階に着いてから描かれる。手具を選ぶ前は案内だけが出る -->
        <StepPanel step={JUDGE_STEPS[1]} state={getStepState(2, currentStep)}>
          <PointA onsubmit={() => (submittedPointA = true)} />
        </StepPanel>

        <StepPanel step={JUDGE_STEPS[2]} state={getStepState(3, currentStep)}>
          <PointB onsubmit={handleJudged} />
        </StepPanel>

        <div class="result-slot" id={RESULT_ID}>
          {#if judged}
            <JudgeResult onshowscore={() => (resultShown = true)} onretry={retry} />
          {:else}
            <!-- 段階4の中身は決定点の画面が受け持つので、枠だけ置いて先を見せる -->
            <StepPanel step={JUDGE_STEPS[3]} state={getStepState(4, currentStep)} />
          {/if}
        </div>
      </div>
    </div>
  </section>

  {#if !judged}
    <section class="before-next">
      <div class="inner">
        <NextActions
          title={m.judge_before_next_title()}
          description={m.judge_before_next_description()}
        />
      </div>
    </section>
  {/if}
</article>

<!-- 決定点の画面。画面いっぱいに出るので、閉じる手だてを上に重ねて置く -->
{#if isMobile}
  <ExecutionPointResultModalMobile show={resultShown} />
{:else}
  <ExecutionPointResultModalDesktop show={resultShown} />
{/if}

{#if resultShown}
  <button class="close-result" class:mobile={isMobile} type="button" onclick={closeResult}>
    {m.judge_result_close()}
  </button>
{/if}

<style lang="scss">
  .gray {
    --background: #{map.get($theme-background, gray)};
  }

  .blue {
    --background: #{map.get($theme-background, blue)};
  }

  .red {
    --background: #{map.get($theme-background, red)};
  }

  .yellow {
    --background: #{map.get($theme-background, yellow)};
  }

  .green {
    --background: #{map.get($theme-background, green)};
  }

  .judge {
    display: flex;
    flex-direction: column;
    width: 100%;

    // 採点表の出入りの動きで横に伸びても、ページごと横へ動かさない
    overflow-x: hidden;
  }

  .workspace {
    width: 100%;

    // 固定ヘッダ（デスクトップ 80px）の下に隠れないよう、飛び先に余白を持たせる
    scroll-margin-top: calc(var(--header-height) + 16px);

    // 手具を選ぶと、その手具の色が画面に広がる
    background: var(--background);
    transition: background 0.5s;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline);
  }

  .mobile .inner {
    gap: $space-size-16;
    padding: $space-size-32 var(--content-padding-inline);
  }

  .panels {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
  }

  .result-slot {
    // 結果を閉じたときの飛び先。固定ヘッダの下に隠れないようにする
    scroll-margin-top: calc(var(--header-height) + 16px);
  }

  .before-next {
    width: 100%;
    background: $white;
  }

  // 決定点の画面より前に出す。固定ヘッダ（80px）の下、画面の隅に置く
  .close-result {
    position: fixed;
    top: 96px;
    right: $space-size-16;
    z-index: 200;
    min-height: 44px;
    padding: 0 $space-size-20;
    font-family: inherit;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 999px;
    background: $white;
    box-shadow: 0 2px 12px rgb(0 0 0 / 25%);
    cursor: pointer;
  }

  .close-result.mobile {
    // スマホの固定ヘッダは 64px
    top: 76px;
  }
</style>
