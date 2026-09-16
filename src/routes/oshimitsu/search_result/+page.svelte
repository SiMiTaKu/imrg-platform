<script context="module" lang="ts">
  import Page from '$views/page/oshimitsu/search_result/Page.svelte'
  import Layout from '$views/layout/Layout.svelte'
</script>

<script lang="ts">
  import { page } from '$app/stores'
</script>

<Layout layout={$page.data.layout}>
  <!-- 検索条件は URL から読むので、初期条件（initCriteria）は渡さない -->
  <Page slot="main" />
</Layout>
