<script context='module' lang='ts'>
  import type { PointAOption } from "../_model/point-a";
  import { PointAOptions } from "../_model/point-a";
</script>

<script lang='ts'>
  import { pageData } from "../../../atomic/device-store/store";

  export let title: string;
  export let userSelected: PointAOption;
  export let annotation: string;
  export let uniqueId: string;
</script>

<div
  class='radio-question'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='header'>
    <span class='title'><span class='icon'>Q</span>{title}</span>
    <span class='annotation'>※{annotation}</span>
  </div>
  <div
    class='radio-group'
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

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: 8px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background: #3e7cb7;
    border-radius: 1em;
  }

  .title {
    display: flex;
    flex-direction: row;
    gap: 12px;
    font-size: 22px;
    font-weight: bold;
  }

  .annotation {
    font-size: 16px;
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
      background: #4d9cff;
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
    border: 5px solid #4d9cff;
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
      background: #4d9cff;
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
      border: 5px solid #4d9cff;
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
