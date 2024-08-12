<script context='module' lang='ts'>
  import Page from "$views/page/top/Page.svelte"
</script>

<script lang='ts'>
  import Layout from "$views/layout/Layout.svelte"
  import { page } from "$app/stores"
</script>

<Layout layout={$page.data.layout}>
  <Page slot='main' />
</Layout>
