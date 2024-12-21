<script context='module' lang='ts'>
  import ImageAssets from "$views/atomic/image/ImageAssets.svelte"
  import MainImage from "../_images/imrg-logo.jpg?w=650;1300&format=webp&as=meta"
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
</script>

<section
  class='main-visual'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='image'>
    <ImageAssets
      width={$pageData.isMobile ? 325 : 500}
      height={$pageData.isMobile ? 210 : 330}
      alt='男子新体操国際化プロジェクトのロゴ'
      lazy={false}
      srcMeta={MainImage}
      objectFit='cover'
    />
  </div>
  <p class='title'>日本の文化を世界のスポーツへ</p>
</section>

<style lang='scss'>
  .pc {
    --width: 1024px;
    --height: calc(100vh - 80px);
    --title-font-size: #{$font-size-48};
  }

  .sp {
    --width: 100vw;
    --height: calc(100vh - 60px);
    --title-font-size: #{$font-size-24};
  }

  .main-visual {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $space-size-24;
    width: var(--width);
    height: var(--height);
    padding: 0 0 $space-size-40;
    box-sizing: border-box;
  }

  .image {
    opacity: 0;
    animation: image-animation 1.5s forwards;
  }

  @keyframes image-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .title {
    display: grid;
    place-items: center;
    font-size: var(--title-font-size);
    font-weight: bold;
    margin: $space-size-80 0 0;
    color: map.get($gray, 700);
    text-shadow: $sky-blue-text-shadow;
    opacity: 0;
    animation: title-animation 2.5s 0s forwards;
  }

  @keyframes title-animation {
    0% {
      margin: $space-size-80 0 0;
      opacity: 0;
    }
    25% {
      margin: $space-size-80 0 0;
    }
    65% {
      opacity: 1;
    }
    100% {
      margin: 0;
      opacity: 1;
    }
  }
</style>
