<script context="module" lang="ts">
  import type { GroupVideoResource } from '../_models'
  import { format } from 'date-fns'
</script>

<script lang="ts">
  export let video: GroupVideoResource

  const onVideoLoad = (event: Event) => {
    const iframe = event.target as HTMLIFrameElement
    iframe.classList.remove('placeholder')
  }
</script>

<a class="card" href={video.embedUrl}>
  <iframe
    class="video placeholder"
    allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    frameborder="0"
    width={343}
    height={194}
    referrerpolicy="strict-origin-when-cross-origin"
    src={`${video.embedUrl}?controls=0&rel=0&fs=0&modestbranding=1`}
    title={`${video.team.name} ${format(video.filmedAt, 'yyyy年')}`}
    loading="lazy"
    on:load={onVideoLoad}
  ></iframe>
  <div class="info">
    <div class="name">{video.team.name}</div>
    <div class="date">{format(video.filmedAt, 'yyyy年')}</div>
    <div class="detail">
      {video.players.map((player) => player.name).join(', ')}
    </div>
  </div>
</a>

<style lang="scss">
  .card {
    display: grid;
    grid-template-rows: 97px 97px auto;
    width: 343px;
    min-height: 194px;
    border-radius: 8px;
    place-items: center;
    overflow: hidden;
    box-shadow: $black-box-shadow;

    &:has(.placeholder) {
      background: url('../_images/spin.gif') 50% 56px / 20% no-repeat;
    }
  }

  .video {
    grid-column: 1;
    grid-row: 1 / 3;
    transition: 0.3s;
    pointer-events: none;
    user-select: none;
    opacity: 1;

    &.placeholder {
      opacity: 0;
    }
  }

  .info {
    display: flex;
    gap: 8px;
    grid-column: 1;
    grid-row: 2 / 4;
    width: 100%;
    padding: 64px 8px 12px;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0, 0) 0,
      rgb(255, 255, 255, 0.1) 22px,
      rgb(255, 255, 255, 0.9) 55px,
      rgb(255, 255, 255, 0.95) 60px,
      rgb(255, 255, 255) 65px
    );
    flex-wrap: wrap;
    align-items: flex-end;
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
