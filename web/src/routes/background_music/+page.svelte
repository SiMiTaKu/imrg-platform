<script lang="ts">
  import { BackgroundMusicPage } from '@pages/backgroundMusic'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<BackgroundMusicPage />
