<script lang="ts">
  import { fly                 } from 'svelte/transition';
  import type { RadioDeduction } from "../../../ts/form/executionDeduct/model";
  export let title       : string;
  export let options     : RadioDeduction[];
  export let userSelected: number;
  export let annotation:   string;

  /** @todo このuniqueIDが稀に同じになってしまうときがあるため、それぞれにもたせるように変更する */
  const uniqueID = Math.floor(Math.random() * 100);
</script>

<div class="radio-question">
  <div class="radio-question__title">
    {title}<span class="radio-question__annotation">※{annotation}</span>
  </div>
  <div
    role         = "radio"
    class        = "radio-group"
    aria-checked = false
    aria-labelledby = "label-${uniqueID}">
    {#each options as option}
      <input
        id           = {option.label + uniqueID}
        type         = "radio"
        value        = {option.value}
        aria-checked = false
        bind:group   = {userSelected}
      />
      <label for={option.label + uniqueID}>{option.label}</label>
    {/each}
  </div>
</div>

<style lang="scss">
  .radio-question {
    margin-bottom: 24px;

    &__title {
      margin-bottom: 8px;
      font-size:     20px;
      font-weight:   bold;
    }

    &__annotation {
      font-size:   15px;
      font-weight: normal;
      margin-left: 8px;
    }
  }

  input[type=radio] { display: none; }

  input[type=radio]:checked + label {
    background: #2c567e;
    color:      white;
    opacity:    1;
  }

  label {
    display:      inline-block;
    width:         50px;
    height:        50px;
    margin-right:  8px;
    font-size:     20px;
    font-weight:   bold;
    line-height:   50px;
    border-radius: 8px;
    background:    #E1E1E1;
    color:         #333333;
    text-align:    center;
    transition:    .3s;

    &:hover {
      cursor:  pointer;
      opacity: .5;
    }

    &:focus {
      transition: .2s;
      opacity:    1;
    }
  }
</style>