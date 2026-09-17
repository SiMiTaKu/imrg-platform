<script lang="ts" module>
  /** このくらい下へ進んだら表示する（px） */
  const SHOW_AFTER_SCROLL = 500
</script>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'

  let scrollY = $state(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<svelte:window bind:scrollY />

{#if scrollY > SHOW_AFTER_SCROLL}
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
    --wrapper-width: 1024px;
    --botton-size: 56px;
  }

  .mobile {
    --bottom: 72px;
    --right: #{$space-size-12};
    --wrapper-width: 100%;
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
    width: var(--wrapper-width);
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
    color: $white;
    border: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    pointer-events: auto;
  }
</style>
