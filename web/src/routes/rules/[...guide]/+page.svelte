<script lang="ts">
  import { RuleGuidePage } from '@pages/ruleGuide'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!--
  書き直している途中なので、検索には登録させない。
  外すのは TODO 7-6（全体がそろってから）
-->
<PageHead meta={data.meta} noindex={true} />
<RuleGuidePage
  page={data.page}
  children={data.children}
  course={data.course}
  quiz={data.quiz}
  outline={data.outline}
/>
