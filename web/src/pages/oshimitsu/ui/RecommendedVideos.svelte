<script lang="ts">
  import { RECOMMENDED_VIDEOS } from '@entities/oshimitsuVideo'
  import { shuffle } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { AutoPlayWatcher } from '@features/videoAutoPlay'
  import { ROUTES } from '@shared/routes'
  import { onMount } from 'svelte'
  import RecommendedVideoCard from './RecommendedVideoCard.svelte'

  const isMobile = $derived($pageData.isMobile)

  /**
   * おすすめ動画。サーバーで書き出す HTML はデータの並びのままにし、ブラウザーで並べ替える
   * （サーバーとブラウザーで並びがずれると、ハイドレーションの警告が出るため）
   */
  let recommendedVideos = $state.raw(RECOMMENDED_VIDEOS)

  /** いま再生しているカードの番号。-1 は何も再生していない */
  let playingIndex = $state(-1)
  /** 一度でも再生したカードの番号 */
  let playedIndexes = $state<ReadonlySet<number>>(new Set())
  /** 人が押して始めたカードの番号。音を出してよいのはこれだけ */
  let userStartedIndexes = $state<ReadonlySet<number>>(new Set())

  const watcher = new AutoPlayWatcher((playing, played, userStarted) => {
    playingIndex = playing
    playedIndexes = new Set(played)
    userStartedIndexes = new Set(userStarted)
  })

  $effect(() => () => watcher.destroy())

  onMount(() => {
    recommendedVideos = shuffle(RECOMMENDED_VIDEOS)
  })

  /**
   * カードを見張りに加える。画面の真ん中に来たら1つだけ鳴る
   * @param element - カードの要素
   * @param index - カードの番号
   * @returns 片づけの手続き
   */
  const watch = (element: HTMLElement, index: number) => {
    const unwatch = watcher.watch(element, index)
    return { destroy: unwatch }
  }
</script>

<section class="recommended" class:mobile={isMobile} id="recommended">
  <div class="inner">
    <header class="head">
      <h2>{m.oshimitsu_recommended_title()}</h2>
      <p>{m.oshimitsu_recommended_lead()}</p>
    </header>

    <ul class="cards">
      {#each recommendedVideos as video, index (index)}
        <li use:watch={index}>
          <RecommendedVideoCard
            {video}
            playing={playingIndex === index}
            played={playedIndexes.has(index)}
            muted={!userStartedIndexes.has(index)}
            onRequestPlay={() => watcher.play(index)}
          />
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
