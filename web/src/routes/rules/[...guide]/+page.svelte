<script lang="ts">
  import { RuleGuidePage } from '@pages/ruleGuide'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!--
  書き直している途中なので、検索には登録させない。
  外すのは TODO 7-6（公開と下回りの修正）で、全体がそろってから
-->
<PageHead meta={data.meta} noindex={true} />
<RuleGuidePage page={data.page} children={data.children} />
