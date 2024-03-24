<script lang="ts">
  import MainVisual from "./_component/MainVisual.svelte";
  import Introduction from "./_component/Introduction.svelte";
  import Links from "./_component/Links.svelte";
</script>

<article class="site-top">
  <MainVisual />
  <Introduction />
  <Links />
</article>

<style lang="scss">
  .site-top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
