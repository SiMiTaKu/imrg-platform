<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { fly } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { POINT_A_ITEMS } from '../config/pointAItems'
  import type { PointAKey, PointAOption } from '../model/executionDeduct'
  import { executionDeduct } from '../store/executionDeduct'
  import Radio from './Radio.svelte'

  type Props = {
    /** 決定ボタンを押したときに呼ぶ */
    onsubmit: () => void
  }

  const { onsubmit }: Props = $props()

  let submitted = $state(false)
  /** いま開いている項目。最初は先頭の項目だけを開く。すべて閉じているときは undefined */
  let openKey: PointAKey | undefined = $state(POINT_A_ITEMS[0]?.key)
  /** もう選んだ項目。選んだ順に増える */
  let answeredKeys: PointAKey[] = $state([])

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
   * 項目の入力が終わったので、その項目を閉じて次の項目を開く
   * @param key - 選んだ項目のキー
   * @param option - 選んだ選択肢
   */
  const handleSelect = (key: PointAKey, option: PointAOption) => {
    executionDeduct.selectPointA(key, option)
    const answered = answeredKeys.includes(key) ? answeredKeys : [...answeredKeys, key]
    answeredKeys = answered
    openKey = findNextKey(key, answered)
  }

  /**
   * 見出しを押した項目を開く。開いている項目をもう一度押したときは閉じる
   * @param key - 押した項目のキー
   */
  const handleToggle = (key: PointAKey) => {
    openKey = openKey === key ? undefined : key
  }

  /**
   * 決定ボタンを押したときに、親へ知らせてボタンを消す
   */
  const handleSubmit = () => {
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
        <Radio
          annotation={item.annotation()}
          answered={answeredKeys.includes(item.key)}
          open={openKey === item.key}
          selected={$executionDeduct.pointA[item.key]}
          title={item.title()}
          uniqueId={item.key}
          onchange={(option) => handleSelect(item.key, option)}
          ontoggle={() => handleToggle(item.key)}
        />
      {/each}
    </div>
  </div>
  {#if !submitted}
    <div class="submit">
      <Button size="large" width="full" onclick={handleSubmit}>{m.judge_submit()}</Button>
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
    grid-template-columns: min(260px, 100%);
    justify-content: center;
  }

  .mobile .submit {
    grid-template-columns: minmax(0, 1fr);
  }
</style>
