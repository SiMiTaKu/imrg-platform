<script context='module' lang='ts'>
  import IndividualVideoCard from "../_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "../_components/GroupVideoCard.svelte"
  import { VIDEOS } from "../_data"
  import { Video } from "../_lib"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
  import Button from "$views/atomic/button/Button.svelte"

  let videos = Video.getVideos([])
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each videos as video, index (index)}
      {#if Video.isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </div>
  {#if VIDEOS.length > videos.length}
    <Button
      width={$pageData.isMobile ? 280 : 340}
      height={56}
      text='もっと見る'
      on:click={() => {
        videos = videos.concat(Video.getVideos(videos))
      }}
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
