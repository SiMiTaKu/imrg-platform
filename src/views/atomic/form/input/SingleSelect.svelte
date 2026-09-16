<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { judgementApparatus } from '$views/page/judge/_store/apparatus'

  const dispatch = createEventDispatcher<{ change: { value: string } }>()

  export let id: string
  export let options: { code: number; value: string }[]
  export let placeholder: string

  let hasChanged = false

  function onchange(event: Event) {
    const target = event.target as HTMLSelectElement
    dispatch('change', { value: target.value })
    hasChanged = true
  }
</script>

<select
  class="select-box {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}"
  name={id}
  class:hasChanged
  on:change={onchange}
>
  <option class="no-option" value="">{placeholder}</option>
  {#each options as option (option.code)}
    <option value={option.code}>{option.value}</option>
  {/each}
</select>

<style lang="scss">
  .gray {
    --forcus-border-color: #707070;
  }

  .blue {
    --forcus-border-color: #0065a4;
  }

  .red {
    --forcus-border-color: #d30000;
  }

  .yellow {
    --forcus-border-color: #ecc200;
  }

  .green {
    --forcus-border-color: #219300;
  }

  .select-box {
    width: 100%;
    height: 48px;
    padding-left: 8px;
    font-size: 16px;
    color: #cccccc;
    border: 4px solid #cccccc;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;

    &:focus {
      border-color: var(--forcus-border-color);
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
