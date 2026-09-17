<script context="module" lang="ts">
  const BREAK_POINT = 500
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
  import { fade } from 'svelte/transition'

  let scrollY = 0

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<svelte:window bind:scrollY />

{#if scrollY > BREAK_POINT}
  <div class="base" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile} transition:fade>
    <div class="wrapper">
      <button class="scroll-to-top-button" type="button" on:click={onClick}> TOP </button>
    </div>
  </div>
{/if}

<style lang="scss">
  .pc {
    --bottom: #{$space-size-8};
    --right: 0;
    --wrapper-width: 1024px;
    --botton-size: 56px;
  }

  .sp {
    --bottom: 72px;
    --right: #{$space-size-12};
    --wrapper-width: 100%;
    --botton-size: 48px;
  }

  .base {
    position: fixed;
    bottom: var(--bottom);
    right: var(--right);
    display: grid;
    place-items: center;
    width: 100%;
    z-index: 1000;
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
    display: grid;
    width: var(--botton-size);
    height: var(--botton-size);
    font-size: $font-size-14;
    color: $white;
    border: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    right: 0;
    place-items: center;
    pointer-events: auto;
  }
</style>
