<script lang="ts" context="module">
  import { WORK_LIST } from "./_data/work-list";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import WorkCard from "./_component/WorkCard.svelte";
  import WithEnglishHeading from "../../../atomic/heading/WithEnglishHeading.svelte";

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="work-list"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <WithEnglishHeading title="過去の作品" englishTitle="Work List" />
  <ul class="list">
    {#each WORK_LIST as work, index}
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
    --item-size: 350px;
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 16px;
    list-style: none;
  }

  .item {
    width: var(--item-size);
    height: var(--item-size);
  }
</style>
