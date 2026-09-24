<script lang="ts">
  import { ComingSoon, RulesPage } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()

  /*
    規則集を出すか。読み込み側（`+page.server.ts`）が決める。
    出さないときは `ruleBook` を作らないので、条文が書き出しに残らない
  */
</script>

<!-- 規則集は、載せてよいか確かめている途中。見には行けるが、検索には登録させない -->
<PageHead meta={data.meta} noindex={true} />
{#if data.ruleBook}
  <RulesPage ruleBook={data.ruleBook} />
{:else}
  <ComingSoon />
{/if}
