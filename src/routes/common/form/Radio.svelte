<script lang="ts">
  export let title;
  export let options
  export let userSelected;
  const uniqueID = Math.floor(Math.random() * 100);
</script>

<div>{title}</div>
<div
  role            = "radio"
  class           = "group-container"
  aria-labelledby = "label-${uniqueID}">
  {#each options as option}
    <input
      id           = {option.label}
      type         = "radio"
      value        = {option.value}
      aria-checked = false
      bind:group   = {userSelected}
    />
    <label for={option.label}>{option.label}</label>
  {/each}
</div>

