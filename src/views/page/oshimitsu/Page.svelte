<script context='module' lang='ts'>
  import { VIDEOS } from "$views/page/oshimitsu/data"
</script>

<div>
  <h1>推しミツ！</h1>
  {#each VIDEOS as video (video.id)}
    <iframe
      allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen
      frameborder='0'
      height={315}
      referrerpolicy='strict-origin-when-cross-origin'
      src={video.src}
      title='YouTube video player'
      width={560}
    />
  {/each}
</div>

<style lang='scss'>
</style>
