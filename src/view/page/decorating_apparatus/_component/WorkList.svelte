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

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="work-list"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <h2 class="title">過去の作品<span class="english-title">Work List</span></h2>
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
    --title-margin: 0 0 40px;
    --title-font-size: 40px;
    --english-title-font-size: 20px;
    --item-size: calc((var(--width) - 16px * 2) / 3);
  }

  .sp {
    --width: 90%;
    --title-margin: 0 0 40px;
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
    margin: var(--title-margin);
    font-size: var(--title-font-size);
    line-height: var(--title-font-size);
    color: #333333;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
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
