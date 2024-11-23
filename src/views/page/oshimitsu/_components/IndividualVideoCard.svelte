<script context='module' lang='ts'>
  import type { IndividualVideoResource } from "../models"
  import { format } from "date-fns"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  export let video: IndividualVideoResource
</script>

<a
  class='card'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  href={video.src}
>
  <iframe
    class='video'
    allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
    frameborder='0'
    height={$pageData.isMobile ? 194 : 140}
    referrerpolicy='strict-origin-when-cross-origin'
    src={`${video.src}?controls=0&rel=0&fs=0&modestbranding=1`}
    title={`${video.player.name} ${video.apparatus.label} ${format(video.filmedAt, "yyyy年")}`}
    width={$pageData.isMobile ? 343 : 140}
  />
  <div class='info'>
    <div class='name'>{video.player.name}</div>
    <div class='detail'>
      {`${video.apparatus.label} ${format(video.filmedAt, "yyyy年")}`}
    </div>
  </div>
</a>

<style lang='scss'>
  .pc {
  }

  .sp {
  }

  .card {
    display: grid;
    width: 343px;
    min-height: 194px;
    grid-template-rows: 97px 97px auto;
    place-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  .video {
    grid-row: 1 / 3;
    grid-column: 1;
    pointer-events: none;
    user-select: none;
  }

  .info {
    grid-row: 2 / 4;
    grid-column: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 8px;
    padding: 64px 8px 12px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(255, 255, 255, 0.1) 22px,
      rgba(255, 255, 255, 0.9) 55px,
      rgba(255, 255, 255, 0.95) 60px,
      rgb(255, 255, 255) 65px
    );
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
  }

  .name {
    font-size: 34px;
    line-height: 34px;
    font-weight: bold;
  }

  .detail {
    font-size: 14px;
    font-weight: bold;
    color: #666666;
  }
</style>
