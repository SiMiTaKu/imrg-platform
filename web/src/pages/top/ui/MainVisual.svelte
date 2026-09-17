<script lang="ts" module>
  import MainImage from '../images/imrg-logo.jpg?w=650;1300&format=webp&as=meta'
</script>

<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { ImageAssets } from '@shared/ui'
</script>

<section class="main-visual" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="image">
    <ImageAssets
      width={$pageData.isMobile ? 325 : 500}
      height={$pageData.isMobile ? 210 : 330}
      alt={m.top_main_visual_logo_alt()}
      lazy={false}
      imageSourceMeta={MainImage}
      objectFit="cover"
    />
  </div>
  <p class="title">{m.top_main_visual_catchphrase()}</p>
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

    // 英語は長く折り返すので中央にそろえる（日本語は1行に収まるので今の見た目のまま）
    &:lang(en) {
      text-align: center;
    }
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
