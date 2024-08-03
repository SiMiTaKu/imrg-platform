<script context='module' lang='ts'>
  import Page from "../../view/page/decorating_apparatus/Page.svelte"
  import Layout from "../../view/layout/Layout.svelte"
</script>

<script lang='ts'>
  import { page } from "$app/stores"
</script>

<Layout layout={$page.data.layout} origin={$page.data.origin}>
  <Page slot='main' />
</Layout>
