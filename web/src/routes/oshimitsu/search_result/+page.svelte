<script lang="ts">
  import { OshimitsuSearchResultPage } from '@pages/oshimitsuSearchResult'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<!-- 検索条件は URL のクエリから読むので、初期条件（initialQuery）は渡さない -->
<OshimitsuSearchResultPage />
