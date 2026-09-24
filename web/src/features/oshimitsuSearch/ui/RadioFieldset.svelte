<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import type { FieldsetOption } from '../model/fieldset'

  interface Props {
    /** 見出し */
    legendText: string
    /** ラジオボタンの name */
    name: string
    /** 選択肢 */
    options: readonly FieldsetOption[]
    /**
     * 選んだときに呼ぶ
     * @param value - 選んだ選択肢の値
     */
    onchange: (value: string) => void
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
              type="radio"
              value={item.value}
              onchange={() => onchange(item.value)}
            />
            {item.label}
          </label>
        </li>
      {/each}
    </ul>
  </div>
</fieldset>

<style lang="scss">
  fieldset {
    box-sizing: border-box;

    // 親が align-items: flex-start / center だと、指定が無いと中身の幅まで縮む。
    // 選択肢が2つしかないと 172px ほどになって潰れて見えるので、横いっぱいに広げる
    width: 100%;

    // fieldset は既定で中身より狭くならないので、狭い画面でも縮むようにする
    min-inline-size: 0;
    max-width: 100%;
  }

  .desktop {
    --legend-font-size: #{$font-size-24};
    --label-font-size: #{$font-size-20};
  }

  .mobile {
    --legend-font-size: #{$font-size-20};
    --label-font-size: #{$font-size-18};
  }

  .wrapper {
    display: grid;
    gap: $space-size-8;

    // 固定幅だと、画面がそれより狭いときに横へはみ出す
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
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
