<script context='module' lang='ts'>
  import Page from "../view/page/top/Page.svelte"
</script>

<script lang='ts'>
  import Layout from "../view/layout/Layout.svelte"
  import { page } from "$app/stores"
</script>

<Layout layout={$page.data.layout}>
  <Page slot='main' />
</Layout>
