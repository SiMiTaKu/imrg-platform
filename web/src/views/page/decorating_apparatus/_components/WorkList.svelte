<script context="module" lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import WorkCard from './_component/WorkCard.svelte'
  import { WORK_LIST } from './_data/work-list'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
</script>

<section class="work-list" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    subtitle="Work List"
    title="過去の作品"
  />
  <ul class="list">
    {#each WORK_LIST as work, index (index)}
      <li class="item">
        <WorkCard images={work.images} workIndex={index} />
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --item-size: calc((var(--width) - 16px * 2) / 3);
  }

  .sp {
    --width: 90%;
    --item-size: 337px;
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
    padding: 80px 0;
  }

  .list {
    display: flex;
    gap: 16px;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  .item {
    width: var(--item-size);
    height: var(--item-size);
  }
</style>
