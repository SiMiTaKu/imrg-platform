<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { POINT_A_FINE_OPTIONS, POINT_A_OPTIONS } from '../config/pointA'
  import type { PointAOption } from '../model/executionDeduct'
  import { judgementApparatus } from '../store/apparatus'
  import QuestionLabel from './QuestionLabel.svelte'

  type Props = {
    /** 設問の見出し */
    title: string
    /** 設問の補足 */
    annotation: string
    /** 選んでいる選択肢 */
    selected: PointAOption
    /** 開いているか。閉じているときは見出しだけを出す */
    open: boolean
    /** この項目をもう選んだか。まだなら見出しに「未選択」と出す */
    answered: boolean
    /** input の id と name の頭に付ける値 */
    uniqueId: string
    /** 見出しを押して開け閉めするときに呼ぶ */
    ontoggle: () => void
    /** 選び直したときに呼ぶ */
    onchange: (option: PointAOption) => void
  }

  const { title, annotation, selected, open, answered, uniqueId, ontoggle, onchange }: Props =
    $props()

  const locale = getLocale()
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
  /** 選んでいるのが 0.05 刻みの補助の選択肢か。そのときは補助の並びを開いておく */
  const usesFine = $derived(POINT_A_FINE_OPTIONS.some((option) => option.code === selected.code))
  /** 閉じているときに見出しの右へ出す、いまの選び具合 */
  const summary = $derived(
    answered
      ? m.judge_point_a_value_label({ value: formatNumber(selected.value, locale, 2) })
      : m.judge_point_a_item_untouched(),
  )

  /**
   * 選んでいる段階の言い回し。補助の選択肢を選んでいるときは空にする
   */
  const selectedLevel = $derived(
    POINT_A_OPTIONS.find((option) => option.code === selected.code)?.level(),
  )
</script>

<div
  class="radio-question {color}"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  class:open
>
  <!-- 見出しを押すと開け閉めできる。選び終わった項目は自動で閉じる -->
  <button
    class="head"
    aria-controls={`${uniqueId}-body`}
    aria-expanded={open}
    type="button"
    onclick={ontoggle}
  >
    <QuestionLabel {annotation} caption={title} {color} />
    <span class="state">
      {#if answered && selectedLevel}
        <span class="summary-level">{selectedLevel}</span>
      {/if}
      <span class="summary" class:answered>{summary}</span>
      <span class="mark" aria-hidden="true"></span>
    </span>
  </button>

  {#if open}
    <div class="body" id={`${uniqueId}-body`}>
      <!-- 規則の5段階。ふだんはこの中から選ぶ -->
      <div class="levels" aria-label={m.judge_point_a_levels_label()} role="radiogroup">
        {#each POINT_A_OPTIONS as option (option.code)}
          <input
            id={`${uniqueId}-${option.code}`}
            checked={selected.code === option.code}
            name={uniqueId}
            type="radio"
            value={option.code}
            onchange={() => onchange(option)}
          />
          <label class="level" for={`${uniqueId}-${option.code}`}>
            <span class="level-name">{option.level()}</span>
            <span class="level-value">{formatNumber(option.value, locale, 2)}</span>
          </label>
        {/each}
      </div>

      <!-- 5段階に当てはまらないわずかな差のための補助。ふだんは畳んでおく -->
      <details open={usesFine}>
        <summary class="fine-summary">{m.judge_point_a_fine_summary()}</summary>
        <div class="fine-body">
          <p class="fine-note">{m.judge_point_a_fine_note()}</p>
          <div class="fine-list" aria-label={m.judge_point_a_fine_summary()} role="radiogroup">
            {#each POINT_A_FINE_OPTIONS as option (option.code)}
              <input
                id={`${uniqueId}-${option.code}`}
                checked={selected.code === option.code}
                name={uniqueId}
                type="radio"
                value={option.code}
                onchange={() => onchange(option)}
              />
              <label class="fine-item" for={`${uniqueId}-${option.code}`}>
                {formatNumber(option.value, locale, 2)}
              </label>
            {/each}
          </div>
        </div>
      </details>
    </div>
  {/if}
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --level-columns: repeat(5, 1fr);
    --level-name-font-size: #{$font-size-14};
  }

  .mobile {
    --header-flex-direction: column;
    --level-columns: 1fr 1fr;
    --level-name-font-size: #{$font-size-14};
  }

  .radio-question {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-12 $space-size-16;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
  }

  .radio-question.open {
    border-color: var(--radio-color);
  }

  .gray {
    --radio-color: #{map.get($theme, gray)};
  }

  .blue {
    --radio-color: #{map.get($theme, blue)};
  }

  .red {
    --radio-color: #{map.get($theme, red)};
  }

  .yellow {
    --radio-color: #{map.get($theme, yellow)};
  }

  .green {
    --radio-color: #{map.get($theme, green)};
  }

  .head {
    display: flex;
    align-items: center;
    gap: $space-size-12;
    width: 100%;
    padding: 0;
    font-family: inherit;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
  }

  .state {
    display: flex;
    flex: none;
    align-items: center;
    gap: $space-size-8;
    margin-left: auto;
  }

  .summary-level,
  .summary {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
    white-space: nowrap;
  }

  .summary-level {
    color: map.get($gray, 600);
  }

  .summary.answered {
    color: var(--radio-color);
  }

  // 開け閉めの向きを示す三角
  .mark {
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid map.get($gray, light-text);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    transition: transform 0.2s;
  }

  .open .mark {
    transform: rotate(180deg);
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
  }

  .levels {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: var(--level-columns);
  }

  input[type='radio'] {
    display: none;
  }

  .level {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $space-size-4;
    min-height: 64px;
    padding: $space-size-8 $space-size-4;
    text-align: center;
    border: $border-size-2 solid map.get($gray, 200);
    border-radius: 8px;
    background: $white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: var(--radio-color);
    }
  }

  .level-name {
    font-size: var(--level-name-font-size);
    font-weight: bold;
    line-height: 1.4;
  }

  .level-value {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  input[type='radio']:checked + .level {
    color: $white;
    border-color: var(--radio-color);
    background: var(--radio-color);
  }

  input[type='radio']:checked + .level .level-value {
    color: $white;
  }

  .fine-summary {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
    cursor: pointer;
  }

  .fine-body {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding-top: $space-size-8;
  }

  .fine-note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .fine-list {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
  }

  .fine-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    min-height: 40px;
    padding: 0 $space-size-12;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, 600);
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: 999px;
    background: $white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: var(--radio-color);
    }
  }

  input[type='radio']:checked + .fine-item {
    color: $white;
    border-color: var(--radio-color);
    background: var(--radio-color);
  }
</style>
