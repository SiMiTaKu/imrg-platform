<script context='module' lang='ts'>
  import Header from "$views/layout/Header.svelte"
  import Footer from "$views/layout/Footer.svelte"
  import StickyFooter from "$views/layout/StickyFooter.svelte"
  import "./styles.css"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  let screenWidth = 0

  $: pageData.update(screenWidth)
</script>

<svelte:window bind:outerWidth={screenWidth} />

<svelte:head>
  {#if $pageData.isMobile}
    <meta name='viewport' content='width=375, user-scalable=no' />
  {:else}
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  {/if}
  <!-- Google Adsense -->
  <meta name='google-adsense-account' content='ca-pub-8732446757854279' />

  <meta
    name='keywords'
    content='男子新体操,ストレッチ,トレーニング,体操競技,柔軟性'
  />
</svelte:head>

<Header />

<main class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <slot />
</main>

<Footer />

<StickyFooter />

<style lang='scss'>
  .pc {
    --header-padding: 80px;
  }
  .sp {
    --header-padding: 64px;
  }

  main {
    padding-top: var(--header-padding);
  }
</style>
