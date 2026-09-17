<script lang="ts">
  import { OshimitsuPage } from '@pages/oshimitsu'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<OshimitsuPage />
