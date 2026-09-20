<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { apparatusOfSlug } from '@shared/lib/apparatus'
  import { getLocale, localizedText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { SectionHeading } from '@widgets/orderService'
  import { WORK_LIST } from '../config/workList'
  import { WORKS_HEADING } from '../config/content'
  import { AutoPlayWatcher } from '../lib/autoPlay'
  import { youtubeVideoId } from '../lib/youtube'
  import WorkVideoCard from './WorkVideoCard.svelte'

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)

  /** いま鳴っているカードの番号。-1 は何も鳴っていない */
  let playingIndex = $state(-1)
  /** 一度でも再生したカードの番号 */
  let playedIndexes = $state<ReadonlySet<number>>(new Set())

  const watcher = new AutoPlayWatcher((playing, played) => {
    playingIndex = playing
    playedIndexes = new Set(played)
  })

  $effect(() => () => watcher.destroy())

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

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow}
      title={m.background_music_work_list_title()}
      lead={WORKS_HEADING.lead}
    />

    <ul class="cards">
      {#each WORK_LIST as work, index (index)}
        <li use:watch={index}>
          <WorkVideoCard
            videoId={youtubeVideoId(work.youtube)}
            title={localizedText(work.customerName, locale)}
            label={apparatusOfSlug(work.apparatus).label()}
            playing={playingIndex === index}
            played={playedIndexes.has(index)}
            onRequestPlay={() => watcher.play(index)}
          />
        </li>
      {/each}
    </ul>

    <p class="count">これまでに {WORK_LIST.length} 曲を編集しました。</p>
  </div>
</section>

<style lang="scss">
  .work-list {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // 手具・名前・見るボタンを縦に積むだけ。重ねない

  // 日本語以外の名前は日本語より長いので小さくする

  // 下に置く。重ねない

  .count {
    margin: $space-size-24 0 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
