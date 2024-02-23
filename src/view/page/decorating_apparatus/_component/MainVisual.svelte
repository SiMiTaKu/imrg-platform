<script lang="ts" context="module">
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte";
  import Image1 from "./_image/main-visual-1.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image2 from "./_image/main-visual-3.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image3 from "./_image/main-visual-5.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image4 from "./_image/main-visual-2.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image5 from "./_image/main-visual-4.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";

  const MAIN_IMAGES = [Image1,
Image2,
Image3,
Image4,
Image5];
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let screenWidth;
  let currentIndex = 0;
  let currentImage = MAIN_IMAGES[currentIndex];
  let isShow = true;

  onMount(() => {
    setInterval(() => {
      changeImage();
    }, 5000);
  });

  function changeImage() {
    isShow = false;
    setTimeout(() => {
      isShow = true;
    }, 1250);

    if (currentIndex === MAIN_IMAGES.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    currentImage = MAIN_IMAGES[currentIndex];
  }
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="main-visual"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  {#if isShow}
    <div class="image" transition:fade={{ duration: 1000 }}>
      <ImageAssets srcMeta={currentImage} lazy={false} alt="メインビジュアル" />
    </div>
  {/if}
  <div class="content-wrapper">
    <div class="content">
      <h1 class="title">手具装飾</h1>
      <div class="english-title">Decorating Apparatus</div>
    </div>
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --content-margin: 300px auto 0;
    --title-font-size: 56px;
    --english-title-font-size: 24px;
  }

  .sp {
    --width: 90%;
    --content-margin: 200px auto 0;
    --title-font-size: 48px;
    --english-title-font-size: 22px;
  }

  .main-visual {
    position: relative;
    padding: 0;
    width: 100%;
    height: calc(100vh - 80px);

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: calc(100vh - 80px);
      width: 75%;
      background: linear-gradient(to right, #000, transparent);
      opacity: 0.3;
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
    font-size: var(--title-font-size);
    line-height: var(--title-font-size);
    margin: 0 0 4px;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .english-title {
    font-size: var(--english-title-font-size);
    letter-spacing: 0.3em;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
</style>
