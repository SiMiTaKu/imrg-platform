<script lang="ts" context="module">
  import Header from "../view/layout/Header.svelte";
  import Footer from "../view/layout/Footer.svelte";
  import ContentsFooter from "../view/layout/ContentsFooter.svelte";
  import "./styles.css";
</script>

<script lang="ts">
  import { pageData } from "../view/atomic/device-store/store";

  let screenWidth = 0;

  pageData.update(screenWidth);
</script>

<svelte:window bind:outerWidth={screenWidth} />

<svelte:head>
  {#if $pageData.isMobile}
    <meta name="viewport" content="width=375, user-scalable=no" />
  {:else}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/if}
</svelte:head>

<Header />
<main class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <slot />
</main>
<ContentsFooter />
<Footer />

<style lang="scss">
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
