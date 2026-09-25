<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { apparatusOfSlug } from '@shared/lib/apparatus'
  import { getLocale, localizedText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { createAutoPlayGroup, VideoCard, youtubeVideoId } from '@features/videoAutoPlay'
  import { SectionHeading } from '@features/sectionHeading'
  import { WORK_LIST } from '../config/workList'
  import { EDITED_MUSIC_TOTAL, WORKS_HEADING, WORK_VIDEO_ASPECT_RATIO } from '../config/content'

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)

  // 画面の真ん中に来たカードを1つだけ鳴らす
  const { watch, cardState, play } = createAutoPlayGroup()
</script>

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow()}
      title={m.background_music_work_list_title()}
      lead={WORKS_HEADING.lead()}
    />

    <ul class="cards">
      {#each WORK_LIST as work, index (index)}
        <li use:watch={index}>
          <VideoCard
            videoId={youtubeVideoId(work.youtube)}
            title={localizedText(work.customerName, locale)}
            label={apparatusOfSlug(work.apparatus).label()}
            aspectRatio={WORK_VIDEO_ASPECT_RATIO}
            {...cardState(index)}
            onRequestPlay={() => play(index)}
          />
        </li>
      {/each}
    </ul>

    <p class="count">{m.background_music_works_total({ count: EDITED_MUSIC_TOTAL })}</p>
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

  // 1列に縦に積む。横に並べると動画が小さくなり、演技が見えない
  .cards {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    gap: $space-size-16;
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
