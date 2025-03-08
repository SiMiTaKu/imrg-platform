<script context='module' lang='ts'>
  import { createEventDispatcher } from "svelte"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  const dispatch = createEventDispatcher<{
    change: { value: string; checked: boolean };
  }>()

  export let legendText: string
  export let name: string
  export let options: {
    value: string;
    label: string;
  }[]

  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    dispatch("change", { value: target.value, checked: target.checked })
  }
</script>

<fieldset class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <div class='wrapper'>
    <legend class='legend'>{legendText}</legend>
    <ul class='ul'>
      {#each options as item, index (index)}
        <li>
          <label class='label'>
            <input
              class='input'
              {name}
              type='checkbox'
              value={item.value}
              on:change={onChange}
            />
            {item.label}
          </label>
        </li>
      {/each}
    </ul>
  </div>
</fieldset>

<style lang='scss'>
  .pc {
    --width: 343px;
    --legend-font-size: #{$font-size-24};
    --label-font-size: #{$font-size-20};
  }

  .sp {
    --width: 343px;
    --legend-font-size: #{$font-size-20};
    --label-font-size: #{$font-size-18};
  }

  .wrapper {
    display: grid;
    gap: $space-size-8;
    width: var(--width);
  }

  .legend {
    display: flex;
    font-size: var(--legend-font-size);
    font-weight: bold;
    align-items: center;
    gap: $space-size-8;

    &:before {
      content: "";
      width: 4px;
      height: var(--legend-font-size);
      background: map.get($sky-blue, border);
      display: grid;
    }
  }

  .ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-size-8 $space-size-16;
    flex-wrap: wrap;
    list-style: none;
  }

  .label {
    position: relative;
    display: grid;
    place-items: center start;
    width: 100%;
    height: 48px;
    padding: 0 0 0 $space-size-40;
    font-size: var(--label-font-size);
    font-weight: bold;
    color: map.get($gray, light-text);
    background: var(--background, $white);
    border-radius: $border-radius-8;
    border: $border-size-1 solid var(--border-color, map.get($gray, border));
    box-sizing: border-box;
    transition: 0.2s;

    &:before {
      left: $space-size-8;
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: $border-size-4;
      border: var(--border, $border-size-2 solid map.get($gray, border));
      background: var(--checkbox-background, $white);
      box-sizing: border-box;
    }

    &:has(.input:checked) {
      --border: none;
      --background: #{map.get($sky-blue, background)};
      --checkbox-background: #{map.get($sky-blue, button)};
      color: map.get($sky-blue, text);

      &:after {
        top: 14px;
        left: 13px;
        position: absolute;
        content: "";
        width: 6px;
        height: 11px;
        transform: rotate(45deg);
        border-right: 3px solid $white;
        border-bottom: 3px solid $white;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .input {
    position: absolute;
    visibility: hidden;
    width: 0;
    height: 0;
  }
</style>
