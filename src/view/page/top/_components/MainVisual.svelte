<script context='module' lang='ts'>
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte"
  import MainImage from "../../../../../static/image/common/imrg-logo.jpg?w=681;1363&format=webp;png;jpg&as=meta"
</script>

<script lang='ts'>
  import { onMount } from "svelte"
  import { fly, fade } from "svelte/transition"
  import { pageData } from "../../../atomic/device-store/store"

  let isShowMainVisual = false

  onMount(() => {
    isShowMainVisual = true
  })
</script>

<section
  class='main-visual'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  {#if isShowMainVisual}
    <div class='image' in:fade={{ duration: 1000 }}>
      <ImageAssets
        alt='男子新体操国際化プロジェクトのロゴ'
        lazy={false}
        srcMeta={MainImage}
      />
    </div>
    <div
      class='title'
      in:fly={{ y: $pageData.isMobile ? 32 : 50, delay: 500, duration: 1000 }}
    >
      {"日本の文化を\n世界のスポーツへ"}
    </div>
  {/if}
</section>

<style lang='scss'>
  .pc {
    --width: 1024px;
    --height: 536px;
    --image-width: 856px;
    --image-left: -40px;
    --image-top: -80px;
    --title-width: 400px;
    --title-height: 176px;
    --title-top: 280px;
    --title-font-size: 36px;
  }

  .sp {
    --width: 100vw;
    --height: 240px;
    --image-width: 100%;
    --image-left: 0;
    --image-top: 0;
    --title-width: 200px;
    --title-height: 88px;
    --title-top: 160px;
    --title-font-size: 20px;
  }

  .main-visual {
    position: relative;
    width: var(--width);
    height: var(--height);
    padding: 80px 0 40px;
    overflow: hidden;
  }

  .image {
    position: absolute;
    width: var(--image-width);
    left: var(--image-left);
    top: var(--image-top);
    object-fit: cover;
    z-index: 0;
  }

  .title {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: var(--title-top);
    right: 0;
    width: var(--title-width);
    height: var(--title-height);
    font-size: var(--title-font-size);
    font-weight: bold;
    background-color: #777777dd;
    color: white;
    white-space: pre-line;
  }
</style>
