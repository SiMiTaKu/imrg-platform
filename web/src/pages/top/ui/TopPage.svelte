<script lang="ts">
  import Introduction from './Introduction.svelte'
  import Links from './Links.svelte'
  import MainVisual from './MainVisual.svelte'
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
