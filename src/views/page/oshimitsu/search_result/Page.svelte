<script context='module' lang='ts'>
  import { VIDEOS } from "$views/page/oshimitsu/data"
  import { isIndividualVideoResource } from "$views/page/oshimitsu/models"
</script>

<script lang='ts'>
  import IndividualVideoCard from "$views/page/oshimitsu/search_result/_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "$views/page/oshimitsu/search_result/_components/GroupVideoCard.svelte"
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each VIDEOS as video (video.id)}
      {#if isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </div>
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
