<script lang="ts">
  import { JudgePage } from '@pages/judge'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<JudgePage />
