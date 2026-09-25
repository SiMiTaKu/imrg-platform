<script lang="ts">
  import { getLocale } from '@shared/lib/i18n'
  import { formatYear } from '@shared/lib/date'
  import { localizedName } from '../lib/video'
  import type { IndividualVideoResource } from '../model/video'

  interface Props {
    /** 表示する個人の動画 */
    video: IndividualVideoResource
  }

  const { video }: Props = $props()

  const locale = getLocale()
  const playerName = $derived(localizedName(video.player, locale))
  const detail = $derived(`${video.apparatus.label()} ${formatYear(video.filmedAt, locale)}`)
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
    title={`${playerName} ${detail}`}
    loading="lazy"
    onload={() => (loadedSource = embedSource)}
  ></iframe>
  <div class="info">
    <div class="name">{playerName}</div>
    <div class="detail">
      {detail}
    </div>
  </div>
</a>

<style lang="scss">
  .card {
    display: grid;
    grid-template-rows: auto auto;
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    transition: 0.3s;
    box-sizing: border-box;
    place-items: center;
    overflow: hidden;
    box-shadow: $black-box-shadow;

    &:has(.placeholder) {
      background: url('../images/spin.gif') 50% 25% / 18% no-repeat;
    }
  }

  .video {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    aspect-ratio: 16 / 9;
    max-width: 100%;
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
    grid-row: 2;
    width: 100%;
    padding: $space-size-12 $space-size-16 $space-size-16;
    background: $white;
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

  .detail {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
  }
</style>
