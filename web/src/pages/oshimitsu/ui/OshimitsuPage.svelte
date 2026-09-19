<script lang="ts">
  import { RECOMMENDED_VIDEOS, VideoCard } from '@entities/oshimitsuVideo'
  import { OshimitsuSearchForm, shuffle } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { onMount } from 'svelte'

  /**
   * おすすめ動画。サーバーで書き出す HTML はデータの並びのままにし、ブラウザーで並べ替える
   * （サーバーとブラウザーで並びがずれると、ハイドレーションの警告が出るため）
   */
  let recommendedVideos = $state.raw(RECOMMENDED_VIDEOS)

  onMount(() => {
    recommendedVideos = shuffle(RECOMMENDED_VIDEOS)
  })
</script>

<article class="article">
  <section class="section">
    <h1>{m.oshimitsu_title()}</h1>
    <p>
      {m.oshimitsu_lead_line1()}<br />
      {m.oshimitsu_lead_line2()}
    </p>
  </section>
  <section class="section">
    <OshimitsuSearchForm />
  </section>
  <section class="section">
    <h2 class="h2">{m.oshimitsu_recommended_title()}</h2>
    {#each recommendedVideos as video, index (index)}
      <VideoCard {video} />
    {/each}
  </section>
</article>

<style lang="scss">
  .article {
    display: grid;
    gap: $space-size-40;

    // 中身が画面より広くならないようにする（minmax(0, …) が無いと文章が折り返さない）
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    padding: $space-size-40 $space-size-16;
    justify-items: center;
    box-sizing: border-box;
  }

  .section {
    display: grid;
    gap: $space-size-16;

    // 中身が画面より広くならないようにする
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    justify-items: center;
  }

  .h2 {
    font-size: $font-size-30;
    font-weight: bold;
  }
</style>
