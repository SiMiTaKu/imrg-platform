<script lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import {} from '@shared/lib/i18n'
  import { WORK_LIST } from '../config/workList'
  import WorkCard from './WorkCard.svelte'
</script>

<section class="work-list" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    title={m.decorating_apparatus_work_list_title()}
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
  .desktop {
    --width: 1024px;
    --item-size: calc((var(--width) - 16px * 2) / 3);
  }

  .mobile {
    --width: 90%;
    --item-size: min(337px, 100%);
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
    padding: 80px 0;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    width: var(--item-size);
    height: var(--item-size);
  }
</style>
