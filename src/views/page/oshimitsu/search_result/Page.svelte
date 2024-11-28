<script context='module' lang='ts'>
  import { VIDEOS } from "$views/page/oshimitsu/data"
  import { isIndividualVideoResource } from "$views/page/oshimitsu/models"

  const shuffleArray = <T,>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ array[i], array[j] ] = [ array[j], array[i] ]
    }
    return array
  }

  const RANDOM_SORT_VIDEOS = shuffleArray([ ...VIDEOS ])
</script>

<script lang='ts'>
  import IndividualVideoCard from "$views/page/oshimitsu/search_result/_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "$views/page/oshimitsu/search_result/_components/GroupVideoCard.svelte"
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each RANDOM_SORT_VIDEOS as video, index (index)}
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
