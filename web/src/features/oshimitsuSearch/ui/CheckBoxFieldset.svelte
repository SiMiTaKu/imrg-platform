<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import type { FieldsetOption } from '../model/fieldset'

  interface Props {
    /** 見出し */
    legendText: string
    /** チェックボックスの name */
    name: string
    /** 選択肢 */
    options: readonly FieldsetOption[]
    /**
     * チェックを付け外ししたときに呼ぶ
     * @param value - 付け外しした選択肢の値
     * @param checked - 付けたら true
     */
    onchange: (value: string, checked: boolean) => void
  }

  const { legendText, name, options, onchange }: Props = $props()
</script>

<fieldset class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="wrapper">
    <legend class="legend">{legendText}</legend>
    <ul class="ul">
      {#each options as item, index (index)}
        <li>
          <label class="label">
            <input
              class="input"
              {name}
              type="checkbox"
              value={item.value}
              onchange={(event) => onchange(item.value, event.currentTarget.checked)}
            />
            {item.label}
          </label>
        </li>
      {/each}
    </ul>
  </div>
</fieldset>

<style lang="scss">
  .desktop {
    --width: 343px;
    --legend-font-size: #{$font-size-24};
    --label-font-size: #{$font-size-20};
  }

  .mobile {
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
      border: var(--border, $border-size-2 solid map.get($gray, border));
      border-radius: $border-size-4;
      background: var(--checkbox-background, $white);
      left: $space-size-8;
      content: '';
      box-sizing: border-box;
    }

    &:has(.input:checked) {
      --border: none;
      --background: #{map.get($sky-blue, background)};
      --checkbox-background: #{map.get($sky-blue, button)};

      color: map.get($sky-blue, text);

      &::after {
        top: 14px;
        left: 13px;
        position: absolute;
        content: '';
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
