<script context='module' lang='ts'>
  import Page from "../../view/page/background_music/Page.svelte"
  import Layout from "../../view/layout/Layout.svelte"
  import { page } from "$app/stores"
</script>

<Layout layout={$page.data.layout} origin={$page.data.origin}>
  <Page slot='main' />
</Layout>
