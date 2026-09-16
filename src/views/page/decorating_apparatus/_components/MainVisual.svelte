<script context="module" lang="ts">
  import ImageAssets from '$views/atomic/image/ImageAssets.svelte'
  import Image1 from './_image/main-visual-1.jpg?w=1024;2048&format=webp&as=meta'
  import Image2 from './_image/main-visual-3.jpg?w=1024;2048&format=webp&as=meta'
  import Image3 from './_image/main-visual-5.jpg?w=1024;2048&format=webp&as=meta'
  import Image4 from './_image/main-visual-2.jpg?w=1024;2048&format=webp&as=meta'
  import Image5 from './_image/main-visual-4.jpg?w=1024;2048&format=webp&as=meta'

  const MAIN_VISUALS = [
    {
      image: Image1,
      description: '装飾にルールはない！\n自由な発想でユニークな手具を作ろう。',
    },
    {
      image: Image2,
      description: '個性を輝かせる、あなただけの手具を！',
    },
    {
      image: Image3,
      description: '手具装飾のアートで個性を注入し、\n さらなる華やかな演技を。',
    },
    {
      image: Image4,
      description: '手具のデコレーションから周りと差をつけろ！',
    },
    {
      image: Image5,
      description: '豊かな彩が君の表現の進化を加速させる。',
    },
  ]
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { pageData } from '../../../atomic/device-store/store'

  let currentIndex = Math.floor(Math.random() * 5)
  let currentVisual = MAIN_VISUALS[currentIndex]
  let isShow = false
  let initialized = false

  onMount(() => {
    isShow = true
    initialized = true
    setInterval(() => {
      changeVisuals()
    }, 5000)
  })

  function changeVisuals() {
    isShow = false
    setTimeout(() => {
      isShow = true
    }, 1250)

    if (currentIndex === MAIN_VISUALS.length - 1) {
      currentIndex = 0
    } else {
      currentIndex++
    }
    currentVisual = MAIN_VISUALS[currentIndex]
  }
</script>

<section class="main-visual" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  {#if isShow}
    <div class="image" in:fade={{ duration: 1000 }} out:fade={{ duration: 300 }}>
      <ImageAssets
        width="100%"
        height="100%"
        alt="手具装飾のメインビジュアル"
        lazy={false}
        srcMeta={currentVisual.image}
        objectFit="cover"
      />
    </div>
  {/if}
  <div class="content-wrapper">
    <div class="content">
      {#if initialized}
        <h1 class="title" in:fly={{ duration: 1000, delay: 100, x: 50 }}>手具装飾</h1>
        <div class="english-title" in:fly={{ duration: 1000, delay: 600, y: 50 }}>
          Decorating Apparatus
        </div>
      {/if}
      {#if isShow}
        <div
          class="description"
          in:fly={$pageData.isMobile ? { duration: 1000, y: 50 } : { duration: 1000, x: 100 }}
          out:fly={$pageData.isMobile ? { duration: 300, y: -50 } : { duration: 300, x: -100 }}
        >
          {currentVisual.description}
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --height: calc(100dvh - 80px);
    --content-margin: 250px auto 0;
    --title-font-size: 64px;
    --english-title-font-size: 24px;
    --english-margin-bottom: 100px;
    --description-font-size: 36px;
  }

  .sp {
    --width: 90%;
    --height: calc(100dvh - 64px);
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
    height: var(--height);

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 75%;
      background: linear-gradient(to right, #000, transparent);
      opacity: 0.3;
      z-index: 0;
    }
  }

  .image {
    width: 100vw;
    height: var(--height);
    overflow: hidden;
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

  .description {
    font-size: var(--description-font-size);
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    white-space: pre-line;
  }
</style>
