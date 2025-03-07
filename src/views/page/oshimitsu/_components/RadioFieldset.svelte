<script context='module' lang='ts'>
  import { createEventDispatcher } from "svelte"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  const dispatch = createEventDispatcher<{ change: { value: string } }>()

  export let legendText: string
  export let name: string
  export let options: {
    value: string;
    label: string;
  }[]
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
              type='radio'
              value={item.value}
              on:change={() => {
                dispatch("change", { value: item.value })
              }}
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
    place-items: center;
    width: 100%;
    height: 48px;
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
      border-radius: 50%;
      border: $border-size-2 solid var(--border-color, map.get($gray, border));
    }

    &:has(.input:checked) {
      --border-color: #{map.get($sky-blue, border)};
      --background: #{map.get($sky-blue, background)};
      color: map.get($sky-blue, text);

      &:after {
        left: 13px;
        position: absolute;
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: map.get($sky-blue, button);
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
