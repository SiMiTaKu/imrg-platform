<script lang="ts">
  import type { Size } from '../types'

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
    /** 大きさ。`medium` は狭い画面向けの一回り小さい大きさ */
    size?: Size
  }

  const { text, href, width, height, target = '_self', size = 'large' }: Props = $props()
</script>

<a
  style:width={`${width}px`}
  style:height={`${height}px`}
  class="button-link"
  class:large={size === 'large'}
  class:medium={size === 'medium'}
  {href}
  {target}
  rel={target === '_blank' ? 'noopener noreferrer' : ''}
>
  {text}
</a>

<style lang="scss">
  .large {
    --item-font-size: #{$font-size-24};
  }

  .medium {
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
