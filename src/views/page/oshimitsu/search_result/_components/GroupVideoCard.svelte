<script context='module' lang='ts'>
  import type { GroupVideoResource } from "../../models"
  import { format } from "date-fns"
</script>

<script lang='ts'>
  export let video: GroupVideoResource
  export let isLazy: boolean = true
</script>

<a class='card' href={video.src}>
  <iframe
    class='video'
    allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
    frameborder='0'
    width={343}
    height={194}
    referrerpolicy='strict-origin-when-cross-origin'
    src={`${video.src}?controls=0&rel=0&fs=0&modestbranding=1`}
    title={`${video.team.name} ${format(video.filmedAt, "yyyy年")}`}
    loading={isLazy ? "lazy" : "eager"}
  />
  <div class='info'>
    <div class='name'>{video.team.name}</div>
    <div class='date'>{format(video.filmedAt, "yyyy年")}</div>
    <div class='detail'>
      {video.players.map((player) => player.name).join(", ")}
    </div>
  </div>
</a>

<style lang='scss'>
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
    font-size: $font-size-30;
    line-height: $font-size-30;
    font-weight: bold;
    color: map.get($gray, text);
  }

  .date {
    font-size: $font-size-20;
    line-height: $font-size-20;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .detail {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
  }
</style>
