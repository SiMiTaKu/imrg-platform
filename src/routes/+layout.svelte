<script lang="ts" context="module">
  import Header from "../view/layout/Header.svelte";
  import Footer from "../view/layout/Footer.svelte";
  import ContentsFooter from "../view/layout/ContentsFooter.svelte";
  import "./styles.css";
</script>

<script lang="ts">
  import { page } from "$app/stores";
</script>

<Header />
<main class:pc={!$page.data.isMobile} class:sp={$page.data.isMobile}>
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
