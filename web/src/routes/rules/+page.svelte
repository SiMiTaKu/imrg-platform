<script lang="ts">
  import { RulesOverview, RulesPage } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()

  /*
    規則集の条文を出すかは、読み込み側（`+page.server.ts`）が決める。
    出せないときも、ルールの案内（自分の言葉で書いたもの）は出す。
    条文が出ていない間もページとして成り立つので、検索にも載せる
  */
</script>

<PageHead meta={data.meta} />
{#if data.ruleBook}
  <RulesPage ruleBook={data.ruleBook} />
{:else}
  <RulesOverview />
{/if}
