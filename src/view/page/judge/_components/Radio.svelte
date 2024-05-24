<script context='module' lang='ts'>
  import type { PointAOption } from "../_model/point-a"
  import { PointAOptions } from "../_model/point-a"
</script>

<script lang='ts'>
  import { pageData } from "../../../atomic/device-store/store"
  import QuestionLabel from "../../../atomic/form/label/QuestionLabel.svelte"
  import { judgementApparatus } from "../_store/apparatus"

  export let title: string
  export let userSelected: PointAOption
  export let annotation: string
  export let uniqueId: string
</script>

<div
  class='radio-question'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <QuestionLabel {annotation} caption={title} />
  <div
    class="radio-group {$judgementApparatus
      ? $judgementApparatus.imageColor
      : 'gray'}"
    aria-checked='false'
    aria-labelledby='label-${uniqueId}'
    role='radio'
  >
    {#each PointAOptions as option, index (index)}
      <input
        id={`${uniqueId}-${option.label}`}
        aria-checked='false'
        type='radio'
        value={option}
        bind:group={userSelected}
      />
      <label for={`${uniqueId}-${option.label}`}>
        <!-- HTML5の仕様上labelタグは終了タグを必要とするため文字は表示されないが終了タグを記載している -->
      </label>
    {/each}
  </div>
  <p class='level-meter'>
    <span>低</span>
    <span>中</span>
    <span>高</span>
  </p>
</div>

<style lang='scss'>
  .pc {
    --header-flex-direction: row;
    --radio-button-size: 48px;
    --level-meter-font-size: 18px;
  }

  .sp {
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
    --radio-color: #707070;
  }

  .blue {
    --radio-color: #00a2ff;
  }

  .red {
    --radio-color: #ff0000;
  }

  .yellow {
    --radio-color: #f6ce00;
  }

  .green {
    --radio-color: #37ec00;
  }

  .radio-group {
    position: relative;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    height: var(--radio-button-size);

    &:before {
      position: absolute;
      content: "";
      background: var(--radio-color);
      height: 5px;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 1em;
    }
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label:before {
    color: white;
    opacity: 1;
    width: var(--radio-button-size);
    height: var(--radio-button-size);
    background: white;
    border: 5px solid var(--radio-color);
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:before {
      content: "";
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

    &:hover:before {
      cursor: pointer;
      color: white;
      width: var(--radio-button-size);
      height: var(--radio-button-size);
      background: white;
      border: 5px solid var(--radio-color);
      opacity: 0.3;
    }
  }

  .level-meter {
    display: flex;
    justify-content: space-between;
    font-size: var(--level-meter-font-size);
    font-weight: bold;
    color: #aaaaaa;
  }
</style>
