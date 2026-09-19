<script lang="ts">
  import { PrivacyPage } from '@pages/privacy'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<PrivacyPage />
