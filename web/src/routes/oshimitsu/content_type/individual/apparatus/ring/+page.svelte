<script lang="ts">
  import { OshimitsuSearchResultPage } from '@pages/oshimitsuSearchResult'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<OshimitsuSearchResultPage initialQuery={data.query} />
