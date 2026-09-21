<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'
  import { WORKS_HEADING } from '../config/content'
  import { WORK_LIST } from '../config/workList'
  import WorkTile from './WorkTile.svelte'
  import WorkViewer from './WorkViewer.svelte'

  const isMobile = $derived($pageData.isMobile)

  /** 大きく見ている作品の番号（0 始まり）。null は閉じている */
  let openedIndex = $state<number | null>(null)
</script>

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow()}
      title={m.decorating_apparatus_work_list_title()}
      lead={WORKS_HEADING.lead()}
    />
  </div>

  <!-- 作例は写真だけを隙間なく並べる。左右の余白も取らず、画面の端まで敷き詰める -->
  <ul class="list">
    {#each WORK_LIST as work, index (index)}
      <WorkTile
        images={work.images}
        alt={m.decorating_apparatus_work_image_alt({ work: index + 1, image: 1 })}
        onOpen={() => (openedIndex = index)}
      />
    {/each}
  </ul>

  {#if openedIndex !== null}
    <WorkViewer
      images={WORK_LIST[openedIndex].images}
      alt={m.decorating_apparatus_work_image_alt({ work: openedIndex + 1, image: 1 })}
      onClose={() => (openedIndex = null)}
    />
  {/if}

  <div class="inner foot">
    <p class="count">{m.decorating_apparatus_works_count({ count: WORK_LIST.length })}</p>
  </div>
</section>

<style lang="scss">
  .work-list {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  // 見出しと本数の数え上げだけが、サイトの決まりどおりの余白を持つ
  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline) 0;
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline) 0;
  }

  .foot {
    padding-top: $space-size-24;
    padding-bottom: $space-size-80;
  }

  .mobile .foot {
    padding-top: $space-size-16;
    padding-bottom: $space-size-48;
  }

  .list {
    display: grid;
    gap: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .count {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
