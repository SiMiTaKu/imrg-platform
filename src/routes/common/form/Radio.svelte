<script lang="ts">
  export let title;
  export let options
  export let userSelected;
  const uniqueID = Math.floor(Math.random() * 100);
</script>

<div class="radio-question">
  <div class="radio-question__title">{title}</div>
  <div
    role            = "radio"
    class           = "radio-group"
    aria-labelledby = "label-${uniqueID}">
    {#each options as option}
      <input
        id           = {option.label}
        type         = "radio"
        value        = {option.value}
        aria-checked = false
        class        = "radio-input"
        bind:group   = {userSelected}
      />
      <label for={option.label} class="radio-button">{option.label}</label>
    {/each}
  </div>
</div>

<style>
  .radio-question {
    margin-bottom: 24px;
  }

  .radio-question__title {
    margin-bottom: 16px;
    font-size:     20px;
    font-weight:   bold;
  }

  /*.radio-input {*/
  /*  visibility: hidden;*/
  /*}*/

  .radio-button {
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
    transition:    .5s;
  }

  .radio-button:hover {
    cursor:  pointer;
    opacity: .5;
  }
</style>