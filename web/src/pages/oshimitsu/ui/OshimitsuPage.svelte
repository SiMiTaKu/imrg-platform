<script lang="ts">
  import OshimitsuHero from './OshimitsuHero.svelte'
  import RecommendedVideos from './RecommendedVideos.svelte'
  import SearchWays from './SearchWays.svelte'
</script>

<!--
  上から「何ができるページか」→「どう探すか」→「まず見る動画」の順に並べる。
  名前（推しミツ！）だけでは伝わらないので、探し方の入口を折り返しの前に出す
-->
<article class="article">
  <OshimitsuHero />
  <SearchWays />
  <RecommendedVideos />
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
