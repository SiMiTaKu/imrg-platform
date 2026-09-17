<script lang="ts">
  /** ボタンの見た目のリンクの引数 */
  interface Props {
    /** 表示する文言 */
    text: string
    /** リンク先 */
    href: string
    /** 開き方。`_blank` なら新しいタブで開き、`noopener noreferrer` を付ける */
    target: '_blank' | '_self'
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** 文字の大きさ（px） */
    fontSize: number
  }

  const { text, href, target, width, height, fontSize }: Props = $props()
</script>

<a
  style:width={`${width}px`}
  style:height={`${height}px`}
  style:font-size={`${fontSize}px`}
  class="button-link"
  {href}
  {target}
  rel={target === '_blank' ? 'noopener noreferrer' : ''}
>
  {text}
</a>

<style lang="scss">
  .button-link {
    display: grid;
    place-items: center;
    font-weight: bold;
    color: $white;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
