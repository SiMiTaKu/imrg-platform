<script lang="ts">
  import type { ButtonProps } from '../model/props'

  const {
    href,
    target,
    variant = 'fill',
    size = 'medium',
    block = false,
    label,
    onclick,
    children,
  }: ButtonProps = $props()
</script>

{#if href}
  <a
    class="button"
    class:fill={variant === 'fill'}
    class:outline={variant === 'outline'}
    class:yellow={variant === 'yellow'}
    class:large={size === 'large'}
    class:block
    {href}
    {target}
    aria-label={label}
    rel={target === '_blank' ? 'noopener noreferrer' : ''}
  >
    {@render children()}
  </a>
{:else}
  <button
    class="button"
    class:fill={variant === 'fill'}
    class:outline={variant === 'outline'}
    class:yellow={variant === 'yellow'}
    class:large={size === 'large'}
    class:block
    type="button"
    aria-label={label}
    {onclick}
  >
    {@render children()}
  </button>
{/if}

<style lang="scss">
  // サイトのボタンはこの1つ。a でも button でも同じ見た目になるよう、ブラウザーの既定をそろえる
  .button {
    display: inline-flex;
    gap: $space-size-8;
    min-height: 48px;
    padding: 0 $space-size-24;
    font-family: inherit;
    font-size: $font-size-16;
    font-weight: bold;
    line-height: normal;
    border: $border-size-1 solid transparent;

    // 角はどのボタンも全丸にする
    border-radius: $border-radius-64;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .large {
    min-height: 56px;
    padding: 0 $space-size-32;
    font-size: $font-size-18;
  }

  .block {
    display: flex;
    width: 100%;
  }

  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  // スマホでは block の指定が無くても横いっぱいにする。文字に合わせて縮めない。
  // 端末の印は app.html が描画の前に html へ付けるので、:global で外から見る
  :global(html:not([data-device='desktop'])) .button {
    display: flex;
    width: 100%;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  // 塗り。そのページでいちばん進んでほしい先に使う
  .fill {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(0 89 184 / 25%);
  }

  .fill:hover {
    border-color: map.get($sky-blue, text);
    background: map.get($sky-blue, text);
  }

  // 白抜き。押す先が主役ではないときや、中身の上に置くときに使う
  .outline {
    color: map.get($sky-blue, text);
    border-color: map.get($sky-blue, border);
    background: $white;
  }

  .outline:hover {
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, background);
  }

  // 黄。相談への一歩に使う。黄は明るいので文字は黒にする（色の決まり 4）
  .yellow {
    color: $black;
    border-color: map.get($yellow, 300);
    background: map.get($yellow, 300);
    box-shadow: 0 2px 8px rgb(153 128 0 / 25%);
  }

  .yellow:hover {
    border-color: map.get($yellow, 400);
    background: map.get($yellow, 400);
  }
</style>
