<script lang="ts">
  import type { Size } from '../types'

  /** ボタンの引数 */
  interface Props {
    /** ボタンに表示する文言 */
    text: string
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** 大きさ。`medium` は狭い画面向けの一回り小さい大きさ */
    size?: Size
    /** 押したときの処理 */
    onclick?: (event: MouseEvent) => void
  }

  const { text, width, height, size = 'large', onclick }: Props = $props()
</script>

<button
  class="button"
  type="button"
  style:width={`${width}px`}
  style:height={`${height}px`}
  class:large={size === 'large'}
  class:medium={size === 'medium'}
  {onclick}
>
  {text}
</button>

<style lang="scss">
  .large {
    --item-font-size: #{$font-size-24};
  }

  .medium {
    --item-font-size: #{$font-size-20};
  }

  .button {
    display: grid;
    place-items: center;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: $white;
    border: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
