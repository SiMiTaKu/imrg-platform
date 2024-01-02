<script lang="ts">
  import type { RadioDeduction } from "../../../ts/form/executionDeduct/model";
  export let title: string;
  export let options: RadioDeduction[];
  export let userSelected: number;
  export let annotation: string;
  export let uniqueId: string;
</script>

<div class="radio-question">
  <div class="radio-question__title">{title}</div>
  <div class="radio-question__annotation">※{annotation}</div>
  <div
    role="radio"
    class="radio-group"
    aria-checked="false"
    aria-labelledby="label-${uniqueId}"
  >
    {#each options as option}
      <input
        id={option.label + uniqueId}
        type="radio"
        value={option.value}
        aria-checked="false"
        bind:group={userSelected}
      />
      <label for={option.label + uniqueId}>{option.label}</label>
    {/each}
  </div>
</div>

<style lang="scss">
  .radio-question {
    margin-bottom: 24px;

    &__title {
      margin-bottom: 4px;
      font-size: 20px;
      font-weight: bold;
    }

    &__annotation {
      font-size: 12px;
      margin-bottom: 12px;
      font-weight: normal;
      margin-left: 8px;
    }
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
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    border-radius: 8px;
    background: #e1e1e1;
    color: #333333;
    text-align: center;
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
