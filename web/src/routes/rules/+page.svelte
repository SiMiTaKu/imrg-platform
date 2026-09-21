<script lang="ts">
  import { RulesPage } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!-- 規則集は、載せてよいか確かめている途中。見には行けるが、検索には登録させない -->
<PageHead meta={data.meta} noindex={true} />
<RulesPage ruleBook={data.ruleBook} />
