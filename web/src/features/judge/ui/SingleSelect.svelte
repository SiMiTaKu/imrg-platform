<script lang="ts">
  import type { JudgeThemeColor } from '../model/apparatus'

  type Props = {
    /** select の name */
    id: string
    /** 選択肢（value とその表示） */
    options: { code: number; value: string }[]
    /** 未選択のときに出す文言 */
    placeholder: string
    /** 読み上げ用の名前 */
    label: string
    /** テーマの色（手具の色） */
    color: JudgeThemeColor
    /** 選び直したときに呼ぶ。引数は選んだ選択肢の value */
    onchange: (value: string) => void
  }

  const { id, options, placeholder, label, color, onchange }: Props = $props()

  let hasChanged = $state(false)

  /**
   * 選択が変わったときに、親へ値を渡し、選択済みの見た目にする
   * @param event - change イベント
   */
  const handleChange = (event: Event & { currentTarget: HTMLSelectElement }) => {
    onchange(event.currentTarget.value)
    hasChanged = true
  }
</script>

<select
  class="select-box {color}"
  aria-label={label}
  name={id}
  class:hasChanged
  onchange={handleChange}
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
    color: #ccc;
    border: 4px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;

    &:focus {
      border-color: var(--forcus-border-color);
    }
  }

  .hasChanged {
    font-weight: bold;
    color: #555;
  }

  .no-option {
    display: none;
  }
</style>
