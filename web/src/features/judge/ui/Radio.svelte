<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { getLocale } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { POINT_A_OPTIONS } from '../config/pointA'
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
  /** 閉じているときに見出しの右へ出す、いまの選び具合 */
  const summary = $derived(
    answered
      ? m.judge_point_a_value_label({ value: formatNumber(selected.value, locale, 2) })
      : m.judge_point_a_item_untouched(),
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
      <span class="summary" class:answered>{summary}</span>
      <span class="mark" aria-hidden="true"></span>
    </span>
  </button>

  {#if open}
    <div class="body" id={`${uniqueId}-body`}>
      <div class="radio-group {color}" aria-label={title} role="radiogroup">
        {#each POINT_A_OPTIONS as option, index (index)}
          <input
            id={`${uniqueId}-${option.code}`}
            checked={selected.code === option.code}
            name={uniqueId}
            type="radio"
            value={option.code}
            onchange={() => onchange(option)}
          />
          <label for={`${uniqueId}-${option.code}`}>
            <!-- HTML5の仕様上labelタグは終了タグを必要とするため文字は表示されないが終了タグを記載している -->
          </label>
        {/each}
      </div>
      <p class="level-meter">
        <span>{m.judge_level_low()}</span>
        <span>{m.judge_level_middle()}</span>
        <span>{m.judge_level_high()}</span>
      </p>
    </div>
  {/if}
</div>

<style lang="scss">
  .desktop {
    --header-flex-direction: row;
    --radio-button-size: 48px;
    --level-meter-font-size: 18px;
  }

  .mobile {
    --header-flex-direction: column;
    --radio-button-size: 32px;
    --level-meter-font-size: 16px;
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

  .summary {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
    white-space: nowrap;
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
    gap: $space-size-8;
  }

  .radio-group {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--radio-button-size);

    &::before {
      position: absolute;
      width: 100%;
      height: 5px;
      border-radius: 1em;
      background: var(--radio-color);
      content: '';
      top: 50%;
      transform: translateY(-50%);
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label::before {
    width: var(--radio-button-size);
    height: var(--radio-button-size);
    color: white;
    border: 5px solid var(--radio-color);
    background: white;
    opacity: 1;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &::before {
      content: '';
      position: relative;
      display: grid;
      align-items: center;
      justify-content: center;
      width: calc(var(--radio-button-size) / 2);
      height: calc(var(--radio-button-size) / 2);
      border-radius: 2em;
      box-sizing: border-box;
      background: var(--radio-color);
      transition: 0.3s;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover::before {
      width: var(--radio-button-size);
      height: var(--radio-button-size);
      color: white;
      border: 5px solid var(--radio-color);
      background: white;
      cursor: pointer;
      opacity: 0.3;
    }
  }

  .level-meter {
    display: flex;
    justify-content: space-between;
    font-size: var(--level-meter-font-size);
    font-weight: bold;
    color: #aaa;
  }
</style>
