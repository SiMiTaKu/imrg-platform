<script lang="ts">
  import { ComingSoon, RuleGuideIndexPage } from '@pages/rules'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<!--
  書き直している途中なので、検索には登録させない。
  外すのは TODO 7-6（全体がそろってから）
-->
<PageHead meta={data.meta} noindex={true} />
{#if data.chapters.length > 0}
  <RuleGuideIndexPage chapters={data.chapters} documents={data.documents} stats={data.stats} />
{:else}
  <!-- 本文が1枚も無いときは、空の講座を見せずに「準備中」を出す -->
  <ComingSoon />
{/if}
