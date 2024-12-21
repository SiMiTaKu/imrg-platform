<script context='module' lang='ts'>
  import ButtonLink from "$views/atomic/button/ButtonLink.svelte"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <p>
    推しミツは、男子新体操に関する動画専用の検索機能です。<br />
    あなたがまだ知らない男子新体操の世界や魅力を見つけに行こう！
  </p>
  <ButtonLink
    width={$pageData.isMobile ? 320 : 400}
    height={56}
    text='推しを見つける！'
    href='/oshimitsu/search_result'
  />
</article>

<style lang='scss'>
  .article {
    display: grid;
    gap: $space-size-16;
    place-items: center;
    padding: $space-size-40 $space-size-16;
  }
</style>
