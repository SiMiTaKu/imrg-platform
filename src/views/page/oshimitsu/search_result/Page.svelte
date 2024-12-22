<script context='module' lang='ts'>
  import IndividualVideoCard from "$views/page/oshimitsu/search_result/_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "$views/page/oshimitsu/search_result/_components/GroupVideoCard.svelte"
  import { VIDEOS } from "$views/page/oshimitsu/data"
  import {
    type GroupVideoResource,
    type IndividualVideoResource,
    isIndividualVideoResource,
  } from "$views/page/oshimitsu/models"

  /**
   * 配列をシャッフルする
   * @param array - シャッフルする配列
   * @returns array - シャッフルされた配列
   */
  const shuffleArray = <T,>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ array[i], array[j] ] = [ array[j], array[i] ]
    }
    return array
  }

  /**
   * 現在表示していない動画リストを取得する
   * @param currentItems - 現在の動画リスト
   * @returns array - 取得した動画リスト
   * @remarks
   * 10件取得する
   */
  const getVideos = (
    currentItems: (IndividualVideoResource | GroupVideoResource)[]
  ) => {
    // 重複削除
    const newItems = shuffleArray([ ...VIDEOS ]).filter(
      (video) => !currentItems.includes(video)
    )

    const ADDITIONAL_VIDEO_COUNT = 10
    return newItems.slice(0, ADDITIONAL_VIDEO_COUNT)
  }
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
  import Button from "$views/atomic/button/Button.svelte"

  let randomSortVideos = getVideos([])
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each randomSortVideos as video, index (index)}
      {@const lazyIndex = $pageData.isMobile ? 2 : 3}
      {#if isIndividualVideoResource(video)}
        <IndividualVideoCard {video} isLazy={index > lazyIndex} />
      {:else}
        <GroupVideoCard {video} isLazy={index > lazyIndex} />
      {/if}
    {/each}
  </div>
  {#if VIDEOS.length >= randomSortVideos.length}
    <Button
      width={$pageData.isMobile ? 280 : 340}
      height={56}
      text='もっと見る'
      on:click={() => {
        randomSortVideos = randomSortVideos.concat(getVideos(randomSortVideos))
      }}
    />
  {:else}
    <p>※現在これ以上表示する動画はありません</p>
  {/if}
</article>

<style lang='scss'>
  .article {
    display: grid;
    gap: 16px;
    place-items: center;
    padding: 40px 16px;
  }

  .cards {
    display: grid;
    gap: 16px;
    place-items: center;
  }
</style>
