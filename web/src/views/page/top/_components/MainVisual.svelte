<script context="module" lang="ts">
  import { ImageAssets } from '@shared/ui'
  import MainImage from '../_images/imrg-logo.jpg?w=650;1300&format=webp&as=meta'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
</script>

<section class="main-visual" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="image">
    <ImageAssets
      width={$pageData.isMobile ? 325 : 500}
      height={$pageData.isMobile ? 210 : 330}
      alt="男子新体操国際化プロジェクトのロゴ"
      lazy={false}
      imageSourceMeta={MainImage}
      objectFit="cover"
    />
  </div>
  <p class="title">日本の文化を世界のスポーツへ</p>
</section>

<style lang="scss">
  .desktop {
    --width: 1024px;
    --height: calc(100dvh - 80px);
    --title-font-size: #{$font-size-48};
  }

  .mobile {
    --width: 100vw;
    --height: calc(100dvh - 60px);
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
    margin: $space-size-80 0 0;
    font-size: var(--title-font-size);
    font-weight: bold;
    color: map.get($gray, 700);
    animation: title-animation 2.5s 0s forwards;
    place-items: center;
    text-shadow: $sky-blue-text-shadow;
    opacity: 0;
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
