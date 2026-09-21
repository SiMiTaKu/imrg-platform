<script lang="ts">
  import { isIndividualVideo, localizedName, RECOMMENDED_VIDEOS } from '@entities/oshimitsuVideo'
  import { shuffle } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { formatYear } from '@shared/lib/date'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import { createAutoPlayGroup, VideoCard, youtubeVideoId } from '@features/videoAutoPlay'
  import { ROUTES } from '@shared/routes'
  import { onMount } from 'svelte'

  const isMobile = $derived($pageData.isMobile)
  const locale = getLocale()

  /**
   * おすすめ動画。サーバーで書き出す HTML はデータの並びのままにし、ブラウザーで並べ替える
   * （サーバーとブラウザーで並びがずれると、ハイドレーションの警告が出るため）
   */
  let recommendedVideos = $state.raw(RECOMMENDED_VIDEOS)

  // 画面の真ん中に来たカードを1つだけ鳴らす
  const { watch, cardState, play } = createAutoPlayGroup()

  onMount(() => {
    recommendedVideos = shuffle(RECOMMENDED_VIDEOS)
  })
</script>

<section class="recommended" class:mobile={isMobile} id="recommended">
  <div class="inner">
    <header class="head">
      <h2>{m.oshimitsu_recommended_title()}</h2>
      <p>{m.oshimitsu_recommended_lead()}</p>
    </header>

    <ul class="cards">
      {#each recommendedVideos as video, index (index)}
        <!-- 選手かチームの名前 -->
        {@const name = isIndividualVideo(video)
          ? localizedName(video.player, locale)
          : localizedName(video.team, locale)}
        <!-- 名前の下に出す手がかり。個人は手具と年、団体は年 -->
        {@const detail = isIndividualVideo(video)
          ? `${video.apparatus.label()} ${formatYear(video.filmedAt, locale)}`
          : formatYear(video.filmedAt, locale)}
        <!-- 団体の出場選手。個人のときは空 -->
        {@const members = isIndividualVideo(video)
          ? ''
          : video.players.map((player) => localizedName(player, locale)).join(', ')}
        <li use:watch={index}>
          <VideoCard
            videoId={youtubeVideoId(video.embedUrl)}
            title={name}
            appearance="raised"
            {...cardState(index)}
            onRequestPlay={() => play(index)}
          >
            {#snippet words()}
              <div class="info">
                <span class="name">{name}</span>
                <span class="detail">{detail}</span>
                {#if members}
                  <span class="members">{members}</span>
                {/if}
              </div>
            {/snippet}
          </VideoCard>
        </li>
      {/each}
    </ul>

    <a class="all" href={localizeHref(ROUTES.oshimitsu.searchResult)}>
      {m.oshimitsu_all_videos()}
      <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

<style lang="scss">
  .recommended {
    width: 100%;
    background: map.get($gray, background);
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-64 var(--content-padding-inline) $space-size-80;
    align-items: center;
  }

  .mobile .inner {
    padding: $space-size-40 var(--content-padding-inline) $space-size-48;
  }

  .head {
    text-align: center;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  .head p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  .cards {
    display: grid;
    gap: $space-size-24 $space-size-16;

    // 画面の幅に合わせて列を増やす。狭い画面でも横にはみ出さないよう min() で止める
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-items: center;
  }

  .cards li {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  // 名前・手具と年・団体の出場選手を、動画の下に並べる
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

  // 出場選手は名前より小さく、必ず次の行へ送る
  .members {
    width: 100%;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    overflow-wrap: anywhere;
  }

  .all {
    display: inline-flex;
    gap: $space-size-8;
    min-height: 54px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    border-radius: 6px;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
    transition: transform 0.15s ease;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .all:hover {
    transform: translateY(-1px);
  }
</style>
