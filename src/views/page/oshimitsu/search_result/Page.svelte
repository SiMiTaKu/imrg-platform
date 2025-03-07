<script context='module' lang='ts'>
  import IndividualVideoCard from "../_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "../_components/GroupVideoCard.svelte"
  import Button from "$views/atomic/button/Button.svelte"
  import { type VideoResource } from "$views/page/oshimitsu/_models"
  import { onMount } from "svelte"
  import { Video } from "../_lib"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  export let criteria: Video.Criteria

  let isLaunched = false
  let videos: VideoResource[] = []
  let totalVideos: number | undefined

  onMount(() => {
    isLaunched = true
    videos = Video.filterVideos(criteria).items
    totalVideos = Video.filterVideos(criteria).total
  })

  const getMoreVideos = () => {
    videos = videos.concat(
      Video.filterVideos({ ...criteria, exceptVideos: videos }).items
    )
  }

  const getTitle = () => {
    const oshimitsu = "推しミツ！"
    return `${oshimitsu}${criteria.contentType ? `（${criteria.contentType.label}）` : ""}`
  }
</script>

<article class='article'>
  <h1>{getTitle()}</h1>
  {#if isLaunched}
    <div class='cards'>
      {#each videos as video, index (index)}
        {#if Video.isIndividualVideoResource(video)}
          <IndividualVideoCard {video} />
        {:else}
          <GroupVideoCard {video} />
        {/if}
      {/each}
    </div>
    {#if totalVideos && totalVideos > videos.length}
      <Button
        width={$pageData.isMobile ? 280 : 340}
        height={56}
        text='もっと見る'
        on:click={getMoreVideos}
      />
    {:else}
      <p>※現在これ以上表示する動画はありません</p>
    {/if}
  {:else}
    <p>読み込み中...</p>
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
