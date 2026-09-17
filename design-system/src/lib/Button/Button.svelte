<script lang="ts">
  /** ボタンの引数 */
  interface Props {
    /** ボタンに表示する文言 */
    text: string
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** 文字の大きさ（px） */
    fontSize: number
    /** 押したときの処理 */
    onclick: (event: MouseEvent) => void
  }

  const { text, width, height, fontSize, onclick }: Props = $props()
</script>

<button
  class="button"
  type="button"
  style:width={`${width}px`}
  style:height={`${height}px`}
  style:font-size={`${fontSize}px`}
  {onclick}
>
  {text}
</button>

<style lang="scss">
  .button {
    display: grid;
    place-items: center;
    font-weight: bold;
    color: $white;
    border: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
