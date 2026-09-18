<script lang="ts">
  import { TopPage } from '@pages/top'
  import { PageHead, StickyFooter } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<TopPage />
<StickyFooter />
