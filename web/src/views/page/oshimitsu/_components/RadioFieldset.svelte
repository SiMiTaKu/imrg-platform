<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'

  const dispatch = createEventDispatcher<{ change: { value: string } }>()

  export let legendText: string
  export let name: string
  export let options: {
    value: string
    label: string
  }[]
</script>

<fieldset class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <div class="wrapper">
    <legend class="legend">{legendText}</legend>
    <ul class="ul">
      {#each options as item, index (index)}
        <li>
          <label class="label">
            <input
              class="input"
              {name}
              type="radio"
              value={item.value}
              on:change={() => {
                dispatch('change', { value: item.value })
              }}
            />
            {item.label}
          </label>
        </li>
      {/each}
    </ul>
  </div>
</fieldset>

<style lang="scss">
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
    gap: $space-size-8;
    font-size: var(--legend-font-size);
    font-weight: bold;
    align-items: center;

    &::before {
      display: grid;
      width: 4px;
      height: var(--legend-font-size);
      background: map.get($sky-blue, border);
      content: '';
    }
  }

  .ul {
    display: grid;
    gap: $space-size-8 $space-size-16;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    list-style: none;
  }

  .label {
    position: relative;
    display: grid;
    width: 100%;
    height: 48px;
    padding: 0 0 0 $space-size-40;
    font-size: var(--label-font-size);
    font-weight: bold;
    color: map.get($gray, light-text);
    border: $border-size-1 solid var(--border-color, map.get($gray, border));
    border-radius: $border-radius-8;
    background: var(--background, $white);
    transition: 0.2s;
    place-items: center start;
    box-sizing: border-box;

    &::before {
      position: absolute;
      width: 20px;
      height: 20px;
      border: $border-size-2 solid var(--border-color, map.get($gray, border));
      border-radius: $border-radius-64;
      background: var(--background, $white);
      left: $space-size-8;
      content: '';
      box-sizing: border-box;
    }

    &:has(.input:checked) {
      --border-color: #{map.get($sky-blue, border)};
      --background: #{map.get($sky-blue, background)};

      color: map.get($sky-blue, text);

      &::after {
        left: $space-size-12;
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: $border-radius-64;
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
