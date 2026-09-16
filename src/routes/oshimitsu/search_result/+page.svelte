<script context="module" lang="ts">
  import Page from '$views/page/oshimitsu/search_result/Page.svelte'
  import Layout from '$views/layout/Layout.svelte'
</script>

<script lang="ts">
  import { page } from '$app/stores'
</script>

<Layout layout={$page.data.layout}>
  <Page slot="main" criteria={$page.data.criteria} />
</Layout>
