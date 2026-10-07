<script lang="ts">
  import { ComingSoon } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!-- 書き直している途中なので、検索には登録させない -->
<PageHead meta={data.meta} noindex={true} />
<ComingSoon />
