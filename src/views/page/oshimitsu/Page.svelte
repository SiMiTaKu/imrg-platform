<script context='module' lang='ts'>
  import { VIDEOS } from "$views/page/oshimitsu/data"
  import { isIndividualVideoResource } from "$views/page/oshimitsu/models"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <div class='cards'>
    {#each VIDEOS as video (video.id)}
      {#if isIndividualVideoResource(video)}
        <div>
          <div class='label'>{video.contentType.label}</div>
          <div>{video.player.name}</div>
          <div>{video.filmedAt}</div>
          <iframe
            allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            frameborder='0'
            height={$pageData.isMobile ? 315 : 140}
            referrerpolicy='strict-origin-when-cross-origin'
            src={video.src}
            title='YouTube video player'
            width={$pageData.isMobile ? 315 : 140}
          />
        </div>
      {:else}
        <iframe
          allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          frameborder='0'
          height={$pageData.isMobile ? 315 : 140}
          referrerpolicy='strict-origin-when-cross-origin'
          src={video.src}
          title='YouTube video player'
          width={$pageData.isMobile ? 315 : 140}
        />
      {/if}
    {/each}
  </div>
</article>

<style lang='scss'>
  .article {
    display: grid;
    gap: 16px;
    place-items: center;
    padding: 40px 12px;
  }

  .cards {
    display: grid;
    gap: 16px;
    place-items: center;
  }

  .label {
    display: grid;
    place-items: center;
    font-size: 16px;
    padding: 0 12px;
    height: 28px;
    font-weight: bold;
    color: white;
    background: #015ccf;
    border-radius: 8px;
  }
</style>
