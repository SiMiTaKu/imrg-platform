<script lang="ts">
  import MainVisual from './_components/MainVisual.svelte'
  import Introduction from './_components/Introduction.svelte'
  import Links from './_components/Links.svelte'
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
