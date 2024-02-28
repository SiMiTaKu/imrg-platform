<script lang="ts" context="module">
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte";
  import MainVisual from "./_image/main-visual.png?w=1024;2048&format=webp;jpg&as=meta";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth: number;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="main-visual"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="image">
    <ImageAssets srcMeta={MainVisual} lazy={false} alt="メインビジュアル" />
  </div>
  <div class="content-wrapper">
    <div class="content">
      <h1 class="title">曲編集</h1>
      <div class="english-title">Background Music Editing</div>
    </div>
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --min-height: 550px;
    --content-margin: 250px auto 0;
    --title-font-size: 64px;
    --english-title-font-size: 24px;
    --english-margin-bottom: 100px;
    --description-font-size: 36px;
  }

  .sp {
    --width: 90%;
    --min-height: 450px;
    --content-margin: 180px auto 0;
    --title-font-size: 48px;
    --english-title-font-size: 22px;
    --english-margin-bottom: 80px;
    --description-font-size: 32px;
  }

  .main-visual {
    position: relative;
    padding: 0;
    width: 100%;
    height: calc(100dvh - 80px);
    min-height: var(--min-height);

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: calc(100dvh - 80px);
      width: 85%;
      background: linear-gradient(to right, #000, transparent);
      opacity: 0.5;
      z-index: 0;
    }
  }

  .image {
    width: 100%;
    height: 100%;

    :global(img) {
      object-fit: cover;
      opacity: 0.8;
    }
  }

  .content-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .content {
    width: var(--width);
    margin: var(--content-margin);
    color: white;
  }

  .title {
    display: inline-block;
    font-size: var(--title-font-size);
    font-weight: bold;
    line-height: var(--title-font-size);
    margin: 0 0 4px;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .english-title {
    font-size: var(--english-title-font-size);
    margin-bottom: var(--english-margin-bottom);
    letter-spacing: 0.25em;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
</style>
