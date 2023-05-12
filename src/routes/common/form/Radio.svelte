<script lang="ts">
  export let title;
  export let options;
  export let userSelected: number;
  export let annotation: string;
  
  const uniqueID = Math.floor(Math.random() * 100);
  import { fly } from 'svelte/transition';
</script>

<div class="radio-question" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>
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

<style>
  .radio-question {
    margin-bottom: 24px;
  }

  .radio-question__title {
    margin-bottom: 8px;
    font-size:     20px;
    font-weight:   bold;
  }
  
  .radio-question__annotation {
    font-size:   15px;
    font-weight: normal;
    margin-left: 8px;
  }

  input[type=radio] { display: none; }
  
  input[type=radio]:checked + label {
    background: #5996cb;
    border:     solid 4px #32538D;
    color:      #113c69;
  }

  label {
    display:      inline-block;
    width:         40px;
    height:        40px;
    margin-right:  8px;
    font-size:     20px;
    font-weight:   bold;
    line-height:   40px;
    border-radius: 8px;
    background:    #E1E1E1;
    border:        solid 4px #AAAAAA;
    color:         #8D8D8D;
    text-align:    center;
    transition:    .3s;
  }

  label:hover {
    cursor:  pointer;
    opacity: .5;
  }
</style>