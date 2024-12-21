<script context='module' lang='ts'>
  import { createEventDispatcher } from "svelte"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  const dispatch = createEventDispatcher<{ click: void }>()

  export let isOpen: boolean
</script>

<button
  class='button'
  type='button'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  on:click={() => dispatch("click")}
>
  <div class='icon' class:open={isOpen} />
  <span class='text'>{isOpen ? "close" : "open"}</span>
</button>

<style lang='scss'>
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
    place-items: center;
    grid-template-rows: 1fr var(--button-icon-size) 1fr 1fr;
    width: var(--height);
    height: var(--height);
    padding: 0;
    transition: 0.25s;
    border: none;
    background: transparent;

    &:has(.open) {
      background: map.get($sky-blue, background);
    }
  }

  .pc:hover {
    background: map.get($sky-blue, background);
  }

  .icon {
    display: grid;
    position: relative;
    grid-row: 2;
    grid-column: 1;
    width: var(--button-icon-size);
    height: 3px;
    background: map.get($gray, text);
    transition: 0.25s;

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: var(--button-icon-size);
      height: 3px;
      background: map.get($gray, text);
      transition: 0.25s;
    }

    &:before {
      top: calc(var(--button-icon-size) / -4);
      right: 0;
    }

    &:after {
      top: calc(var(--button-icon-size) / 4);
      left: 0;
    }
  }

  .icon.open {
    transform: rotate(90deg);
    height: 0;

    &:before {
      transform: rotate(45deg);
      top: 50%;
    }

    &:after {
      transform: rotate(135deg);
      top: 50%;
    }
  }

  .text {
    grid-row: 3;
    grid-column: 1;
    color: map.get($gray, text);
    font-size: var(--hamburger-text-font-size);
  }
</style>
