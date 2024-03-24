<script lang="ts" context="module">
  import Header from "../view/layout/Header.svelte";
  import Footer from "../view/layout/Footer.svelte";
  import ContentsFooter from "../view/layout/ContentsFooter.svelte";
  import "./styles.css";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<Header />
<main
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
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
