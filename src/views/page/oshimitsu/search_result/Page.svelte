<script context='module' lang='ts'>
  import IndividualVideoCard from "../_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "../_components/GroupVideoCard.svelte"
  import Button from "$views/atomic/button/Button.svelte"
  import { type VideoResource } from "$views/page/oshimitsu/_models"
  import { Video } from "../_lib"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
  import { onMount } from "svelte"

  export let searchResult: {
    items: VideoResource[];
    total: number;
  }
  export let criteria: Video.Criteria

  let additionalVideos: VideoResource[] = []
  let currentVideos: VideoResource[] = []

  onMount(() => {
    currentVideos = searchResult.items.concat(additionalVideos)
  })

  const getMoreVideos = () => {
    const criteriaTest = { ...criteria, exceptVideos: currentVideos }
    console.log(criteriaTest)
    additionalVideos = additionalVideos.concat(
      Video.filterVideos(criteriaTest).items
    )
  }
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each currentVideos as video, index (index)}
      {#if Video.isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </div>
  {#if searchResult.total > currentVideos.length}
    <Button
      width={$pageData.isMobile ? 280 : 340}
      height={56}
      text='もっと見る'
      on:click={() => getMoreVideos()}
    />
  {:else}
    <p>※現在これ以上表示する動画はありません</p>
  {/if}
</article>

<style lang='scss'>
  .article {
    display: grid;
    gap: $space-size-16;
    place-items: center;
    padding: $space-size-40 $space-size-16;
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    place-items: center;
  }
</style>
