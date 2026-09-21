<script lang="ts">
  import type { Snippet } from 'svelte'

  const {
    href,
    variant = 'outline',
    size = 'medium',
    block = false,
    onclick,
    children,
  }: {
    /** 飛び先。渡すとリンク、渡さなければ押しボタンになる */
    href?: string
    /** 塗り（fill）か白抜き（outline）か */
    variant?: 'fill' | 'outline'
    /** 大きさ */
    size?: 'medium' | 'large'
    /** 横いっぱいに広げるか */
    block?: boolean
    /** 押したときに呼ぶ。href が無いときに使う */
    onclick?: () => void
    /** ボタンに出す中身 */
    children: Snippet
  } = $props()
</script>

{#if href}
  <a
    class="action"
    class:fill={variant === 'fill'}
    class:outline={variant === 'outline'}
    class:large={size === 'large'}
    class:block
    {href}
  >
    {@render children()}
  </a>
{:else}
  <button
    type="button"
    class="action"
    class:fill={variant === 'fill'}
    class:outline={variant === 'outline'}
    class:large={size === 'large'}
    class:block
    {onclick}
  >
    {@render children()}
  </button>
{/if}

<style lang="scss">
  .action {
    display: inline-flex;
    gap: $space-size-8;
    min-height: 44px;
    padding: 0 $space-size-24;
    font-size: $font-size-14;
    font-weight: bold;
    border-radius: $border-radius-64;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .large {
    min-height: 52px;
    padding: 0 $space-size-32;
    font-size: $font-size-16;
  }

  .block {
    display: flex;
    width: 100%;
  }

  .fill {
    color: $white;
    border: 1px solid map.get($sky-blue, button);
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(0 89 184 / 25%);
  }

  // 白抜き。押す先が主役ではないときや、中身の上に置くときに使う
  .outline {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .outline:hover {
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, background);
  }
</style>
