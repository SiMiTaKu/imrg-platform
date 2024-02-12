<script lang="ts" context="module">
  import ImageAssets from "../atomic/image/ImageAssets.svelte";
  import MainImage from "../../../static/image/common/imrg-logo.jpg?w=681;1363&format=webp;png;jpg&as=meta";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<header
  class="header"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="content">
    <div class="content__image">
      <ImageAssets
        srcMeta={MainImage}
        width="100%"
        height="100%"
        lazy={false}
        alt="男子新体操国際化プロジェクトロゴ"
      />
    </div>
    <div class="content__title">
      <span class="content__title--main">男子新体操国際化プロジェクト</span>
      <span class="content__title--sub"
        >Internationalize Men's Rhythmic Gymnastics</span
      >
    </div>
  </div>
</header>

<style lang="scss">
  .pc {
    --height: 80px;
    --content-width: 1024px;
    --title-margin-top: 8px;
    --main-font-size: 30px;
    --sub-font-size: 12px;
  }

  .sp {
    --height: 64px;
    --content-width: 90%;
    --title-margin-top: 10px;
    --main-font-size: 22px;
    --sub-font-size: 11px;
  }

  .header {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    width: 100vw;
    height: var(--height);
    background: white;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }

  .content {
    width: var(--content-width);
    height: 100%;
    margin: 0 auto;

    &__image {
      position: absolute;
      top: -25%;
      height: 160%;
      opacity: 0.1;
    }

    &__title {
      display: flex;
      flex-direction: column;
      margin-top: var(--title-margin-top);
      font-weight: bold;
      color: #555;

      &--main {
        display: block;
        font-size: var(--main-font-size);
      }

      &--sub {
        display: block;
        font-size: var(--sub-font-size);
      }
    }
  }
</style>
