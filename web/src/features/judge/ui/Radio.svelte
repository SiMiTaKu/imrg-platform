<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
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
    /** input の id と name の頭に付ける値 */
    uniqueId: string
    /** 選び直したときに呼ぶ */
    onchange: (option: PointAOption) => void
  }

  const { title, annotation, selected, uniqueId, onchange }: Props = $props()

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
</script>

<div class="radio-question" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <QuestionLabel {annotation} caption={title} {color} />
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
    gap: 8px;
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

  .radio-group {
    position: relative;
    display: flex;
    align-items: center;

    // justify-content: space-between;
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
