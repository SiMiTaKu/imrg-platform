<script lang='ts'>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher<{ change: { value: string } }>()

  export let id: string
  export let options: { code: number; value: string }[]
  export let placeholder: string

  let hasChanged = false

  function onchange(event: Event) {
    const target = event.target as HTMLSelectElement
    dispatch("change", { value: target.value })
    hasChanged = true
  }
</script>

<select name={id}
        class='select-box'
        class:hasChanged
        on:change={onchange}>
  <option class='no-option' value="">{placeholder}</option>
  {#each options as option (option.code)}
    <option value={option.code}>{option.value}</option>
  {/each}
</select>

<style lang='scss'>
  .select-box {
    width: 100%;
    height: 48px;
    padding-left: 8px;
    font-size: 16px;
    color: #aaaaaa;
    border: 4px solid #aaaaaa;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;

    &:focus {
      border-color: #4d9cff;
    }
  }

  .hasChanged {
    color: #555555;
    font-weight: bold;
  }

  .no-option {
    display: none;
  }
</style>
