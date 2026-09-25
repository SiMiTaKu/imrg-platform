<script lang="ts">
  import type { ButtonProps } from '../model/props'

  const { href, target, variant, size, width, ariaLabel, onclick, children }: ButtonProps = $props()

  // auto 以外は横いっぱいに広げる。数値のときは最大幅で止まる
  const stretches = $derived(width !== 'auto')
  // 数値は最大幅として扱う。決め打ちの幅にすると、狭い画面で横にはみ出すため
  const maxWidth = $derived(typeof width === 'number' ? `${width}px` : undefined)
</script>

{#if href}
  <a
    class="button"
    class:sky-blue={variant === 'sky-blue'}
    class:sky-blue-outline={variant === 'sky-blue-outline'}
    class:yellow={variant === 'yellow'}
    class:theme-gray={variant === 'theme-gray'}
    class:theme-blue={variant === 'theme-blue'}
    class:theme-red={variant === 'theme-red'}
    class:theme-yellow={variant === 'theme-yellow'}
    class:theme-green={variant === 'theme-green'}
    class:large={size === 'large'}
    class:stretch={stretches}
    style:--button-max-width={maxWidth}
    {href}
    {target}
    aria-label={ariaLabel}
    rel={target === '_blank' ? 'noopener noreferrer' : ''}
  >
    {@render children()}
  </a>
{:else}
  <button
    class="button"
    class:sky-blue={variant === 'sky-blue'}
    class:sky-blue-outline={variant === 'sky-blue-outline'}
    class:yellow={variant === 'yellow'}
    class:theme-gray={variant === 'theme-gray'}
    class:theme-blue={variant === 'theme-blue'}
    class:theme-red={variant === 'theme-red'}
    class:theme-yellow={variant === 'theme-yellow'}
    class:theme-green={variant === 'theme-green'}
    class:large={size === 'large'}
    class:stretch={stretches}
    style:--button-max-width={maxWidth}
    type="button"
    aria-label={ariaLabel}
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

  // width が full か数値のとき。数値なら --button-max-width までで止まり、
  // それより狭い画面では画面に収まるところまで縮む
  .stretch {
    display: flex;
    width: 100%;
    max-width: var(--button-max-width, none);
  }

  // 空色の塗り。そのページでいちばん進んでほしい先に使う
  .sky-blue {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(0 89 184 / 25%);
  }

  .sky-blue:hover {
    border-color: map.get($sky-blue, text);
    background: map.get($sky-blue, text);
  }

  // 空色の白抜き。押す先が主役ではないときや、中身の上に置くときに使う
  .sky-blue-outline {
    color: map.get($sky-blue, text);
    border-color: map.get($sky-blue, border);
    background: $white;
  }

  .sky-blue-outline:hover {
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, background);
  }

  /*
    手具のイメージカラーの塗り。採点の画面で、選んだ手具に合わせて色が変わる。
    押した状態は、同じ色を少し黒に寄せて作る（$theme には濃い側の段階が無いため）
  */
  .theme-gray {
    color: $white;
    border-color: map.get($theme, gray);
    background: map.get($theme, gray);
  }

  .theme-gray:hover {
    border-color: color-mix(in srgb, #{map.get($theme, gray)} 82%, black);
    background: color-mix(in srgb, #{map.get($theme, gray)} 82%, black);
  }

  .theme-blue {
    color: $white;
    border-color: map.get($theme, blue);
    background: map.get($theme, blue);
  }

  .theme-blue:hover {
    border-color: color-mix(in srgb, #{map.get($theme, blue)} 82%, black);
    background: color-mix(in srgb, #{map.get($theme, blue)} 82%, black);
  }

  .theme-red {
    color: $white;
    border-color: map.get($theme, red);
    background: map.get($theme, red);
  }

  .theme-red:hover {
    border-color: color-mix(in srgb, #{map.get($theme, red)} 82%, black);
    background: color-mix(in srgb, #{map.get($theme, red)} 82%, black);
  }

  // 黄は明るいので文字は黒にする（色の決まり 4）
  .theme-yellow {
    color: $black;
    border-color: map.get($theme, yellow);
    background: map.get($theme, yellow);
  }

  .theme-yellow:hover {
    border-color: color-mix(in srgb, #{map.get($theme, yellow)} 82%, black);
    background: color-mix(in srgb, #{map.get($theme, yellow)} 82%, black);
  }

  .theme-green {
    color: $white;
    border-color: map.get($theme, green);
    background: map.get($theme, green);
  }

  .theme-green:hover {
    border-color: color-mix(in srgb, #{map.get($theme, green)} 82%, black);
    background: color-mix(in srgb, #{map.get($theme, green)} 82%, black);
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
