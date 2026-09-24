<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { POINT_A_OPTIONS } from '../config/pointA'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import { scrollToQuestion } from '../lib/scrollToQuestion'
  import type { PointAKey } from '../model/executionDeduct'
  import { executionDeduct } from '../store/executionDeduct'
  import ScaleQuestion from './ScaleQuestion.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  /** 選択肢は言葉だけにする。減点の数は出さない */
  const options = POINT_A_OPTIONS.map((option) => ({ code: option.code, label: option.level() }))

  let submitted = $state(false)
  /** いま開いている項目。最初は先頭の項目だけを開く。すべて閉じているときは undefined */
  let openKey: PointAKey | undefined = $state(POINT_A_ITEMS[0]?.key)
  /** もう選んだ項目。選んだ順に増える */
  let answeredKeys: PointAKey[] = $state([])
  /** 決定を押したのに未回答が残っていたか。残っていれば但し書きを出す */
  let missing = $state(false)

  /** まだ選んでいない項目。並びは画面と同じ */
  const unanswered = $derived(POINT_A_ITEMS.filter((item) => !answeredKeys.includes(item.key)))

  /**
   * 選んだあとに次へ開く項目を探す。
   * まだ選んでいない項目を、その項目の次から順に見て、見つからなければ先頭から探す
   * @param key - いま選び終えた項目のキー
   * @param answered - 選び終えたあとの、選んだ項目の一覧
   * @returns 次に開く項目のキー。すべて選び終えていれば undefined
   */
  const findNextKey = (key: PointAKey, answered: PointAKey[]): PointAKey | undefined => {
    const index = POINT_A_ITEMS.findIndex((item) => item.key === key)
    const order = [...POINT_A_ITEMS.slice(index + 1), ...POINT_A_ITEMS.slice(0, index)]
    return order.find((item) => !answered.includes(item.key))?.key
  }

  /**
   * 項目の入力が終わったので、その項目を閉じて次の項目を開き、そこまで画面を動かす
   * @param key - 選んだ項目のキー
   * @param code - 選んだ段階
   */
  const handleSelect = (key: PointAKey, code: number) => {
    const option = POINT_A_OPTIONS.find((candidate) => candidate.code === code)
    if (!option) return
    executionDeduct.selectPointA(key, option)
    const answered = answeredKeys.includes(key) ? answeredKeys : [...answeredKeys, key]
    answeredKeys = answered
    missing = false
    const next = findNextKey(key, answered)
    openKey = next
    if (next) scrollToQuestion(`${next}-body`)
  }

  /**
   * 見出しを押した項目を開く。開いている項目をもう一度押したときは閉じる
   * @param key - 押した項目のキー
   */
  const handleToggle = (key: PointAKey) => {
    openKey = openKey === key ? undefined : key
  }

  /**
   * 決定ボタンを押したときの動き。
   * まだ選んでいない項目があれば先へ進まず、いちばん上の未回答まで戻す
   */
  const handleSubmit = () => {
    const [first] = unanswered
    if (first) {
      missing = true
      openKey = first.key
      scrollToQuestion(`${first.key}-body`)
      return
    }
    missing = false
    onsubmit()
    submitted = true
  }
</script>

<div
  class="point-a"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2>{m.judge_point_a_heading()}</h2>
    <div>{m.judge_point_a_note()}</div>
  </header>
  <div class="section">
    <div class="section-head">
      <h3 class="section-title">{m.judge_point_a_section()}</h3>
      <p class="progress">
        {m.judge_point_a_progress({
          done: answeredKeys.length,
          total: POINT_A_ITEMS.length,
        })}
      </p>
    </div>
    <div class="question-list">
      {#each POINT_A_ITEMS as item (item.key)}
        <ScaleQuestion
          annotation={item.annotation()}
          groupLabel={m.judge_point_a_levels_label()}
          open={openKey === item.key}
          {options}
          selected={answeredKeys.includes(item.key)
            ? $executionDeduct.pointA[item.key].code
            : undefined}
          title={item.title()}
          uniqueId={item.key}
          untouchedLabel={m.judge_point_a_item_untouched()}
          onchange={(code) => handleSelect(item.key, code)}
          ontoggle={() => handleToggle(item.key)}
        />
      {/each}
    </div>
  </div>
  {#if !submitted}
    <div class="submit">
      {#if missing}
        <p class="missing" role="status">{m.judge_unanswered_note()}</p>
      {/if}
      <Button size="large" width="full" onclick={handleSubmit} variant="sky-blue"
        >{m.judge_submit()}</Button
      >
    </div>
  {/if}
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

  .point-a {
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

  .section-title {
    font-size: var(--section-font-size);
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
