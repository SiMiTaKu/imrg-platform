<script lang="ts">
  import { isIndividualVideo, localizedName, type VideoResource } from '@entities/oshimitsuVideo'
  import { m } from '$lib/paraglide/messages'
  import { formatYear } from '@shared/lib/date'
  import { getLocale } from '@shared/lib/i18n'
  import { youtubeEmbedUrl, youtubeThumbnail, youtubeVideoId } from '@features/videoAutoPlay'

  const {
    video,
    playing,
    played,
    muted,
    onRequestPlay,
  }: {
    /** 出す動画 */
    video: VideoResource
    /** いま再生しているか */
    playing: boolean
    /** 一度でも再生したか。したものは、画面に入っても勝手に始めない */
    played: boolean
    /** 音を消して始めるか。勝手に始めるときは消す */
    muted: boolean
    /** 再生を頼む */
    onRequestPlay: () => void
  } = $props()

  const locale = getLocale()
  const videoId = $derived(youtubeVideoId(video.embedUrl))
  /** 選手かチームの名前 */
  const name = $derived(
    isIndividualVideo(video)
      ? localizedName(video.player, locale)
      : localizedName(video.team, locale),
  )
  /** 名前の下に出す手がかり。個人は手具と年、団体は年 */
  const detail = $derived(
    isIndividualVideo(video)
      ? `${video.apparatus.label()} ${formatYear(video.filmedAt, locale)}`
      : formatYear(video.filmedAt, locale),
  )
  /** 団体の出場選手。個人のときは空 */
  const members = $derived(
    isIndividualVideo(video)
      ? ''
      : video.players.map((player) => localizedName(player, locale)).join(', '),
  )
</script>

<article class="card" class:playing>
  <div class="screen">
    {#if playing}
      <!-- 勝手に始まるときは音を消す。消さないと、ブラウザーが再生を止める -->
      <iframe
        src={youtubeEmbedUrl(videoId, muted)}
        title={`${name} ${detail}`}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    {:else}
      <button type="button" onclick={onRequestPlay} aria-label={m.oshimitsu_video_play({ name })}>
        <img src={youtubeThumbnail(videoId)} alt="" loading="lazy" />
        <!-- 止まっているカードには、押せば見られることが分かる印を出す -->
        <span class="mark" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="54" height="38">
            <path
              d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.5C4 2.3 2.3 4.8 1.5 7.7 0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.5c2.9-.8 4.6-3.3 5.4-6.2C68 35 68 24 68 24s0-11-1.5-16.3z"
              fill="#f00"
            />
            <path d="M45 24 27 14v20" fill="#fff" />
          </svg>
        </span>
        {#if played}
          <span class="again">{m.oshimitsu_video_again()}</span>
        {/if}
      </button>
    {/if}
  </div>

  <div class="info">
    <span class="name">{name}</span>
    <span class="detail">{detail}</span>
    {#if members}
      <span class="members">{members}</span>
    {/if}
  </div>
</article>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;
    box-sizing: border-box;
    box-shadow: $black-box-shadow;
  }

  .card.playing {
    border-color: map.get($sky-blue, border);
  }

  .screen {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: map.get($gray, 900);
  }

  iframe,
  .screen button {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .screen button {
    display: grid;
    place-items: center;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mark {
    position: relative;
    display: grid;
    place-items: center;
    transition: transform 0.15s ease;
  }

  .screen button:hover .mark {
    transform: scale(1.08);
  }

  .again {
    position: absolute;
    right: $space-size-8;
    bottom: $space-size-8;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: $white;
    border-radius: 4px;
    background: rgb(0 0 0 / 60%);
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    padding: $space-size-12 $space-size-16 $space-size-16;
    align-items: baseline;
  }

  .name {
    min-inline-size: 0;
    font-size: $font-size-24;
    font-weight: bold;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .detail {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .members {
    width: 100%;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    overflow-wrap: anywhere;
  }
</style>
