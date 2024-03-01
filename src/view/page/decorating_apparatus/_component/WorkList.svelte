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
    --title-font-size: 40px;
    --english-title-font-size: 20px;
    --item-size: calc((var(--width) - 16px * 2) / 3);
  }

  .sp {
    --width: 90%;
    --title-font-size: 30px;
    --english-title-font-size: 16px;
    --item-size: 350px;
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 40px;
    font-size: var(--title-font-size);
    line-height: var(--title-font-size);
    color: #333333;
    text-shadow: 0 0 10px rgba(50, 150, 255, 0.5);
  }

  .english-title {
    margin-top: 8px;
    font-size: var(--english-title-font-size);
    line-height: var(--english-title-font-size);
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
