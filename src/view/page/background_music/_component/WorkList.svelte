<script lang="ts" context="module">
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="work-list"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <h2 class="title">過去の作品<span class="english-title">Work List</span></h2>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --title-font-size: 40px;
    --english-title-font-size: 20px;
  }

  .sp {
    --width: 90%;
    --title-font-size: 30px;
    --english-title-font-size: 16px;
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
</style>
