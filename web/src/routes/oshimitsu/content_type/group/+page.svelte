<script lang="ts">
  import Page from '$views/page/oshimitsu/search_result/Page.svelte'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<Page initCriteria={data.criteria} />
