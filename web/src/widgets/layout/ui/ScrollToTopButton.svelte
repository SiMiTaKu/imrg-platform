<script lang="ts">
  import { fade } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { SHOW_SCROLL_TO_TOP_AFTER } from '../config/layout'
  import { pageData } from '@shared/lib/device'

  let scrollY = $state(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<svelte:window bind:scrollY />

{#if scrollY > SHOW_SCROLL_TO_TOP_AFTER}
  <div
    class="base"
    class:desktop={!$pageData.isMobile}
    class:mobile={$pageData.isMobile}
    transition:fade
  >
    <div class="wrapper">
      <button class="scroll-to-top-button" type="button" onclick={scrollToTop}>
        {m.layout_scroll_to_top()}
      </button>
    </div>
  </div>
{/if}

<style lang="scss">
  .desktop {
    --bottom: #{$space-size-8};
    --right: 0;
    --wrapper-max-width: var(--content-max-width);
    --botton-size: 56px;
  }

  .mobile {
    --bottom: 72px;
    --right: #{$space-size-12};
    --wrapper-max-width: 100%;
    --botton-size: 48px;
  }

  .base {
    position: fixed;
    right: var(--right);
    bottom: var(--bottom);
    z-index: 1000;
    display: grid;
    place-items: center;
    width: 100%;
    pointer-events: none;
  }

  .wrapper {
    position: relative;

    // 固定幅だと、画面がそれより狭いときに横へはみ出す
    width: 100%;
    max-width: var(--wrapper-max-width);
    height: var(--botton-size);
    pointer-events: none;
  }

  .scroll-to-top-button {
    position: absolute;
    right: 0;
    display: grid;
    place-items: center;
    width: var(--botton-size);
    height: var(--botton-size);
    font-size: $font-size-14;

    // 白抜き。ページの中身の上に浮くので、塗りつぶさずに枠で示す
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: $border-radius-64;
    background: $white;
    box-shadow: 0 2px 8px rgb(0 48 99 / 15%);
    pointer-events: auto;
  }
</style>
