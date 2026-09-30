<script lang="ts">
  import { CrossLinks, type CrossLinkList } from '@features/crossLinks'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { OshimitsuHero, RecommendedVideos, SearchWays } from '@widgets/oshimitsu'

  /*
    演技を見にきた人を、ルールの解説へ送る。
    点の決まり方を知っていると、同じ演技でも見えるものが変わる
  */
  const rulesLink: CrossLinkList = $derived([
    {
      label: m.cross_rules_label(),
      href: localizeHref(ROUTES.rules.index),
      body: m.cross_rules_from_oshimitsu(),
    },
  ])
</script>

<!--
  上から「何ができるページか」→「どう探すか」→「まず見る動画」の順に並べる。
  名前（推しミツ！）だけでは伝わらないので、探し方の入口を折り返しの前に出す
-->
<article class="article">
  <OshimitsuHero />
  <SearchWays />
  <RecommendedVideos />
  <CrossLinks links={rulesLink} />
</article>

<style lang="scss">
  .article {
    display: flex;
    flex-direction: column;

    // 中身が画面より広くならないようにする
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
</style>
