<script lang="ts">
  import { CoachingPage } from '@pages/coaching'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<CoachingPage />
