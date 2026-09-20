<script lang="ts">
  import { RECOMMENDED_VIDEOS, VideoCard } from '@entities/oshimitsuVideo'
  import { shuffle } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { onMount } from 'svelte'

  const isMobile = $derived($pageData.isMobile)

  /**
   * おすすめ動画。サーバーで書き出す HTML はデータの並びのままにし、ブラウザーで並べ替える
   * （サーバーとブラウザーで並びがずれると、ハイドレーションの警告が出るため）
   */
  let recommendedVideos = $state.raw(RECOMMENDED_VIDEOS)

  onMount(() => {
    recommendedVideos = shuffle(RECOMMENDED_VIDEOS)
  })
</script>

<section class="recommended" class:mobile={isMobile} id="recommended">
  <div class="inner">
    <header class="head">
      <h2>{m.oshimitsu_recommended_title()}</h2>
      <p>どれを見ればいいか迷ったら、ここから。開くたびに並びが変わります。</p>
    </header>

    <ul class="cards">
      {#each recommendedVideos as video, index (index)}
        <li><VideoCard {video} /></li>
      {/each}
    </ul>

    <a class="all" href={localizeHref(ROUTES.oshimitsu.searchResult)}>
      すべての動画を見る
      <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

<style lang="scss">
  .recommended {
    width: 100%;
    background: map.get($gray, background);
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-64 $space-size-24 $space-size-80;
    align-items: center;
  }

  .mobile .inner {
    padding: $space-size-40 $space-size-16 $space-size-48;
  }

  .head {
    text-align: center;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  .head p {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .cards {
    display: grid;
    gap: $space-size-24 $space-size-16;

    // 画面の幅に合わせて列を増やす。狭い画面でも横にはみ出さないよう min() で止める
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-items: center;
  }

  .cards li {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .all {
    display: inline-flex;
    gap: $space-size-8;
    min-height: 54px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    border-radius: 6px;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
    transition: transform 0.15s ease;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .all:hover {
    transform: translateY(-1px);
  }
</style>
