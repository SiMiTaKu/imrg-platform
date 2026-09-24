<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { POINT_B_SCALE_ITEMS, POINT_B_SCALE_OPTIONS } from '../config/pointB'
  import { scrollToQuestion } from '../lib/scrollToQuestion'
  import type { PointBScaleCode, PointBScaleKey } from '../model/executionDeduct'
  import { executionDeduct } from '../store/executionDeduct'
  import QuestionCard from './QuestionCard.svelte'
  import ScaleQuestion from './ScaleQuestion.svelte'
  import TimesCounter from './TimesCounter.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  /** 選択肢は言葉だけにする。減点の数は出さない */
  const options = POINT_B_SCALE_OPTIONS.map((option) => ({
    code: option.code,
    label: option.label(),
  }))

  /** 落下の回数の札を開いているか。最初はここから答える */
  let dropsOpen = $state(true)
  /** いま開いている設問。すべて閉じているときは undefined */
  let openKey: PointBScaleKey | undefined = $state(undefined)
  /** 落下の回数に答えたか。0 回も答えのうちなので、押したかどうかで持つ */
  let dropsAnswered = $state(false)
  /** 決定を押したのに未回答が残っていたか */
  let missing = $state(false)

  /** まだ答えていない設問。並びは画面と同じ */
  const unanswered = $derived(
    POINT_B_SCALE_ITEMS.filter((item) => $executionDeduct.pointB.scales[item.key] === undefined),
  )
  /** 答えた数。落下の回数も1問として数える */
  const answeredCount = $derived(
    POINT_B_SCALE_ITEMS.length - unanswered.length + (dropsAnswered ? 1 : 0),
  )

  /**
   * 次に答える設問を探す。まだ答えていない設問を、その設問の次から順に見る
   * @param key - いま答え終えた設問のキー
   * @returns 次に開く設問のキー。すべて答え終えていれば undefined
   */
  const findNextKey = (key: PointBScaleKey): PointBScaleKey | undefined => {
    const index = POINT_B_SCALE_ITEMS.findIndex((item) => item.key === key)
    const order = [...POINT_B_SCALE_ITEMS.slice(index + 1), ...POINT_B_SCALE_ITEMS.slice(0, index)]
    return order.find(
      (item) => item.key !== key && $executionDeduct.pointB.scales[item.key] === undefined,
    )?.key
  }

  /**
   * 落下の回数を決めて、最初の設問へ進む
   * @param count - 落とした回数
   */
  const handleDrops = (count: number) => {
    executionDeduct.setDrops(count)
    dropsAnswered = true
    missing = false
  }

  /**
   * 落下の回数の札を閉じて、最初の設問を開く
   */
  const handleDropsDone = () => {
    dropsAnswered = true
    dropsOpen = false
    const [first] = unanswered
    if (first) {
      openKey = first.key
      scrollToQuestion(`${first.key}-body`)
    }
  }

  /**
   * 設問に答えたので、その設問を閉じて次の設問を開き、そこまで画面を動かす
   * @param key - 答えた設問のキー
   * @param code - 選んだ段階
   */
  const handleSelect = (key: PointBScaleKey, code: PointBScaleCode) => {
    executionDeduct.selectScale(key, code)
    missing = false
    const next = findNextKey(key)
    openKey = next
    if (next) scrollToQuestion(`${next}-body`)
  }

  /**
   * 決定ボタンを押したときの動き。
   * まだ答えていない設問があれば先へ進まず、いちばん上の未回答まで戻す
   */
  const handleSubmit = () => {
    if (!dropsAnswered) {
      missing = true
      dropsOpen = true
      scrollToQuestion('drops-body')
      return
    }
    const [first] = unanswered
    if (first) {
      missing = true
      openKey = first.key
      scrollToQuestion(`${first.key}-body`)
      return
    }
    missing = false
    onsubmit()
  }
</script>

<div
  class="point-b"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2>{m.judge_point_b_heading()}</h2>
    <div>{m.judge_point_b_note()}</div>
  </header>

  <div class="section">
    <div class="section-head">
      <h3 class="section-title">{m.judge_point_b_scale_section()}</h3>
      <p class="progress">
        {m.judge_point_b_progress({
          done: answeredCount,
          total: POINT_B_SCALE_ITEMS.length + 1,
        })}
      </p>
    </div>

    <div class="question-list">
      <!-- 落下だけは段階ではなく回数で答える -->
      <QuestionCard
        answered={dropsAnswered}
        bodyId="drops-body"
        open={dropsOpen}
        ontoggle={() => (dropsOpen = !dropsOpen)}
        summary={dropsAnswered
          ? m.judge_times({ count: $executionDeduct.pointB.drops })
          : m.judge_point_b_item_untouched()}
        title={m.judge_point_b_drops()}
      >
        <div class="drops">
          <TimesCounter count={$executionDeduct.pointB.drops} onchange={handleDrops} />
          <Button size="medium" width="auto" onclick={handleDropsDone} variant="sky-blue-outline"
            >{m.judge_next()}</Button
          >
        </div>
      </QuestionCard>

      {#each POINT_B_SCALE_ITEMS as item (item.key)}
        <ScaleQuestion
          groupLabel={m.judge_point_b_scale_label()}
          open={openKey === item.key}
          {options}
          selected={$executionDeduct.pointB.scales[item.key]}
          title={item.title()}
          uniqueId={item.key}
          untouchedLabel={m.judge_point_b_item_untouched()}
          onchange={(code) => handleSelect(item.key, code)}
          ontoggle={() => (openKey = openKey === item.key ? undefined : item.key)}
        />
      {/each}
    </div>
  </div>

  <div class="submit">
    {#if missing}
      <p class="missing" role="status">{m.judge_unanswered_note()}</p>
    {/if}
    <Button size="large" width="full" onclick={handleSubmit} variant="sky-blue"
      >{m.judge_submit()}</Button
    >
  </div>
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --header-gap: 16px;
    --section-font-size: 26px;
    --question-list-gap: 12px;
  }

  .mobile {
    --header-flex-direction: column;
    --header-gap: 8px;
    --section-font-size: 24px;
    --question-list-gap: 8px;
  }

  .point-b {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: var(--header-gap);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-head {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: $space-size-12;
  }

  .section-title {
    font-size: var(--section-font-size);
  }

  .progress {
    margin: 0;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .question-list {
    display: flex;
    flex-direction: column;
    gap: var(--question-list-gap);
  }

  // 回数を数える欄と、次へ進むボタン
  .drops {
    display: flex;
    gap: $space-size-16;
    align-items: center;
    flex-wrap: wrap;
  }

  // 送るボタンは中央に置く。スマホでは横いっぱいにする
  .submit {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: min(260px, 100%);
    justify-content: center;
  }

  .mobile .submit {
    grid-template-columns: minmax(0, 1fr);
  }

  .missing {
    margin: 0;
    font-size: $font-size-14;
    font-weight: bold;
    color: #{map.get($theme, red)};
    text-align: center;
  }
</style>
