<script lang="ts">
  import { RulesPage } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<RulesPage ruleBook={data.ruleBook} />
