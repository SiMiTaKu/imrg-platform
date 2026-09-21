<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@widgets/orderService'
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

    <ul class="list">
      {#each WORK_LIST as work, index (index)}
        <WorkTile
          images={work.images}
          workNumber={index + 1}
          alt={m.decorating_apparatus_work_image_alt({ work: index + 1, image: 1 })}
          onOpen={() => (openedIndex = index)}
        />
      {/each}
    </ul>

    {#if openedIndex !== null}
      <WorkViewer
        images={WORK_LIST[openedIndex].images}
        workNumber={openedIndex + 1}
        alt={m.decorating_apparatus_work_image_alt({ work: openedIndex + 1, image: 1 })}
        onClose={() => (openedIndex = null)}
      />
    {/if}

    <p class="count">{m.decorating_apparatus_works_count({ count: WORK_LIST.length })}</p>
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

  .list {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .list {
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .count {
    margin: $space-size-24 0 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
