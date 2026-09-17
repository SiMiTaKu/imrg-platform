<script lang="ts">
  /** ボタンの引数 */
  interface Props {
    /** ボタンに表示する文言 */
    text: string
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** スマホ向けの大きさで表示するか */
    isMobile?: boolean
    /** 押したときの処理 */
    onclick?: (event: MouseEvent) => void
  }

  const { text, width, height, isMobile = false, onclick }: Props = $props()
</script>

<button
  class="button"
  type="button"
  style:width={`${width}px`}
  style:height={`${height}px`}
  class:pc={!isMobile}
  class:sp={isMobile}
  {onclick}
>
  {text}
</button>

<style lang="scss">
  .pc {
    --item-font-size: #{$font-size-24};
  }

  .sp {
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
