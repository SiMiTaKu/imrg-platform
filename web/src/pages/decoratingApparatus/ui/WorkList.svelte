<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@widgets/orderService'
  import { WORKS_HEADING } from '../config/content'
  import { WORK_LIST } from '../config/workList'
  import WorkCard from './WorkCard.svelte'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow}
      title={m.decorating_apparatus_work_list_title()}
      lead={WORKS_HEADING.lead}
    />

    <ul class="list">
      {#each WORK_LIST as work, index (index)}
        <li>
          <WorkCard images={work.images} workIndex={index} />
        </li>
      {/each}
    </ul>

    <p class="count">これまでに {WORK_LIST.length} 本の手具を仕上げました。</p>
  </div>
</section>

<style lang="scss">
  .work-list {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  .inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
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

  .list li {
    min-width: 0;
  }

  .count {
    margin: $space-size-24 0 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
