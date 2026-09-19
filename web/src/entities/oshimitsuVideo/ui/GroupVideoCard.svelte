<script lang="ts">
  import { getLocale } from '@shared/lib/i18n'
  import { formatYear } from '@shared/lib/date'
  import { localizedName } from '../lib/video'
  import type { GroupVideoResource } from '../model/video'

  interface Props {
    /** 表示する団体の動画 */
    video: GroupVideoResource
  }

  const { video }: Props = $props()

  const locale = getLocale()
  const teamName = $derived(localizedName(video.team, locale))
  const year = $derived(formatYear(video.filmedAt, locale))
  const embedSource = $derived(`${video.embedUrl}?controls=0&rel=0&fs=0&modestbranding=1`)

  /** 読み込みを終えた埋め込みの URL。表示中の URL と同じになるまで、読み込み中の印を出す */
  let loadedSource = $state<string>()
</script>

<a class="card" href={video.embedUrl}>
  <iframe
    class="video"
    class:placeholder={loadedSource !== embedSource}
    allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    frameborder="0"
    width={343}
    height={194}
    referrerpolicy="strict-origin-when-cross-origin"
    src={embedSource}
    title={`${teamName} ${year}`}
    loading="lazy"
    onload={() => (loadedSource = embedSource)}
  ></iframe>
  <div class="info">
    <div class="name">{teamName}</div>
    <div class="date">{year}</div>
    <div class="detail">
      {video.players.map((player) => localizedName(player, locale)).join(', ')}
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
      background: url('../images/spin.gif') 50% 56px / 20% no-repeat;
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
