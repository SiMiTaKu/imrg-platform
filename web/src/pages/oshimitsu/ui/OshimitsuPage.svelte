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
    place-items: center;
    padding: $space-size-40 $space-size-16;
  }

  .section {
    display: grid;
    gap: $space-size-16;
    place-items: center;
  }

  .h2 {
    font-size: $font-size-30;
    font-weight: bold;
  }
</style>
