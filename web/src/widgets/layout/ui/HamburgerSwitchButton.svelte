<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'

  /** メニューの開閉ボタンの引数 */
  interface Props {
    /** メニューが開いているか */
    isOpen: boolean
    /** 押したときの処理 */
    onclick: () => void
  }

  const { isOpen, onclick }: Props = $props()
</script>

<button
  class="button"
  type="button"
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  aria-expanded={isOpen}
  {onclick}
>
  <div class="icon" class:open={isOpen}></div>
  <span class="text">{isOpen ? m.layout_menu_close() : m.layout_menu_open()}</span>
</button>

<style lang="scss">
  .pc {
    --height: 80px;
    --hamburger-text-font-size: #{$font-size-18};
    --hamburger-wrapper-width: 400px;
    --button-icon-size: #{$font-size-28};
  }

  .sp {
    --height: 64px;
    --hamburger-text-font-size: #{$font-size-16};
    --hamburger-wrapper-width: 100vw;
    --button-icon-size: #{$font-size-24};
  }

  .button {
    display: grid;
    grid-template-rows: 1fr var(--button-icon-size) 1fr 1fr;
    place-items: center;
    width: var(--height);
    height: var(--height);
    padding: 0;
    border: none;
    background: transparent;
    transition: 0.25s;

    &:has(.open) {
      background: map.get($sky-blue, background);
    }
  }

  .pc:hover {
    background: map.get($sky-blue, background);
  }

  .icon {
    position: relative;
    display: grid;
    grid-column: 1;
    grid-row: 2;
    width: var(--button-icon-size);
    height: 3px;
    background: map.get($gray, text);
    transition: 0.25s;

    &::before,
    &::after {
      position: absolute;
      width: var(--button-icon-size);
      height: 3px;
      background: map.get($gray, text);
      transition: 0.25s;
      content: '';
    }

    &::before {
      top: calc(var(--button-icon-size) / -4);
      right: 0;
    }

    &::after {
      top: calc(var(--button-icon-size) / 4);
      left: 0;
    }
  }

  .icon.open {
    height: 0;
    transform: rotate(90deg);

    &::before {
      top: 50%;
      transform: rotate(45deg);
    }

    &::after {
      top: 50%;
      transform: rotate(135deg);
    }
  }

  .text {
    grid-column: 1;
    grid-row: 3;
    font-size: var(--hamburger-text-font-size);
    color: map.get($gray, text);
  }
</style>
