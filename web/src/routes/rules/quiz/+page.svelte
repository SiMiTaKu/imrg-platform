<script lang="ts">
  import { RuleGuideQuizPage } from '@pages/ruleGuide'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!-- 書き直している途中なので、検索には登録させない。外すのは TODO 7-6 -->
<PageHead meta={data.meta} noindex={true} />
<RuleGuideQuizPage chapters={data.chapters} />
