<script lang="ts">
  import { DecoratingApparatusPage } from '@pages/decoratingApparatus'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<DecoratingApparatusPage />
