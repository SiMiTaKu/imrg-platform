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
{#if data.allPages.length > 0}
  <RuleGuideIndexPage topPages={data.topPages} allPages={data.allPages} />
{:else}
  <!-- 本文が1枚も無いときは、空の一覧を見せずに「準備中」を出す -->
  <ComingSoon />
{/if}
