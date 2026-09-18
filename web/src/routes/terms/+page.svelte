<script lang="ts">
  import { TermsPage } from '@pages/terms'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<TermsPage />
