<script lang="ts">
  /** ボタンの見た目のリンクの引数 */
  interface Props {
    /** 表示する文言 */
    text: string
    /** リンク先 */
    href: string
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** 開き方。`_blank` なら新しいタブで開き、`noopener noreferrer` を付ける */
    target?: '_blank' | '_self'
    /** スマホ向けの大きさで表示するか */
    isMobile?: boolean
  }

  const { text, href, width, height, target = '_self', isMobile = false }: Props = $props()
</script>

<a
  style:width={`${width}px`}
  style:height={`${height}px`}
  class="button-link"
  class:pc={!isMobile}
  class:sp={isMobile}
  {href}
  {target}
  rel={target === '_blank' ? 'noopener noreferrer' : ''}
>
  {text}
</a>

<style lang="scss">
  .pc {
    --item-font-size: #{$font-size-24};
  }

  .sp {
    --item-font-size: #{$font-size-20};
  }

  .button-link {
    display: grid;
    place-items: center;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: $white;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
