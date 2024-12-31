<script context='module' lang='ts'>
  import Button from "$views/atomic/button/Button.svelte"
  import IndividualVideoCard from "../_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "../_components/GroupVideoCard.svelte"
  import type { VideoResource } from "$views/page/oshimitsu/_models"
  import { Video } from "../_lib"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  export let videos: VideoResource[]
  export let criteria: Video.Criteria

  let additionalVideos: VideoResource[] = []

  $: currentVideos = [ ...videos, ...additionalVideos ]
  $: totalVideos = Video.filterVideos(criteria).total

  const getMoreVideos = () => {
    additionalVideos = additionalVideos.concat(
      Video.filterVideos({ ...criteria, exceptVideos: currentVideos }).items
    )
  }
</script>

<article class='article'>
  <h1>{`推しミツ！(${criteria?.contentType?.label})`}</h1>
  <div class='cards'>
    {#each currentVideos as video, index (index)}
      {#if Video.isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </div>
  {#if totalVideos > currentVideos.length}
    <Button
      width={$pageData.isMobile ? 280 : 340}
      height={56}
      text='もっと見る'
      on:click={getMoreVideos}
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
