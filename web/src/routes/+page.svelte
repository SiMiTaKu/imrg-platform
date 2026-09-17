<script context="module" lang="ts">
  import Layout from '$views/layout/Layout.svelte'
  import Page from '$views/page/top/Page.svelte'
  import StickyFooter from '$views/layout/StickyFooter.svelte'
</script>

<script lang="ts">
  import { page } from '$app/stores'
</script>

<Layout layout={$page.data.layout}>
  <Page slot="main" />
</Layout>
<StickyFooter />
