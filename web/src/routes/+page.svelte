<script lang="ts">
  import Page from '$views/page/top/Page.svelte'
  import { PageHead, StickyFooter } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<Page />
<StickyFooter />
