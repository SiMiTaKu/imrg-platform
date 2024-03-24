<script context="module" lang="ts">
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";

  const OPTIONS = [1,
2,
3,
4,
5,
6,
7,
8,
9,
10];
</script>

<script lang="ts">
  export let title: string;
  export let userSelected: number;
  export let annotation: string;
  export let uniqueId: string;

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<div
  class="radio-question"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="header">
    <span class="title"><span class="icon">Q</span>{title}</span>
    <span class="annotation">※{annotation}</span>
  </div>
  <div
    role="radio"
    class="radio-group"
    aria-checked="false"
    aria-labelledby="label-${uniqueId}"
  >
    {#each OPTIONS as option}
      <input
        id={`${uniqueId}_${option}`}
        type="radio"
        value={option}
        aria-checked="false"
        bind:group={userSelected}
      />
      <label for={`${uniqueId}_${option}`}>{option}</label>
    {/each}
  </div>
</div>

<style lang="scss">
  .pc {
    --header-flex-direction: row;
    --radio-group-gap: 12px;
    --radio-button-size: 72px;
  }

  .sp {
    --header-flex-direction: column;
    --radio-group-gap: 8px;
    --radio-button-size: 56px;
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
    display: flex;
    justify-content: center;
    gap: var(--radio-group-gap);
    flex-wrap: wrap;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: #2c567e;
    color: white;
    opacity: 1;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--radio-button-size);
    height: var(--radio-button-size);
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    background: #e1e1e1;
    color: #333333;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:focus {
      transition: 0.2s;
      opacity: 1;
    }
  }
</style>
