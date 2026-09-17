<script context="module" lang="ts">
  import { ImageAssets } from '@shared/ui'
  import MainVisual from './_image/main-visual.png?w=1024;2048&format=webp&as=meta'
  const MAIN_VISUALS = [
    { description: '大好きな曲を、自然な演技時間に短縮！' },
    { description: '最適な編曲で、最高の演技体験を！' },
    { description: '音楽の魔法で、あなたの演技を引き立てます！' },
    { description: 'No Music, No Life. \nあなたの演技に音楽を添えて！' },
    { description: '豊かな音色があなたの演技の魅力を加速させる！' },
  ]
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { pageData } from '@shared/lib/device'

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

<section class="main-visual" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="image">
    <ImageAssets
      width="100%"
      height="100%"
      alt="メインビジュアル"
      lazy={false}
      imageSourceMeta={MainVisual}
      objectFit="cover"
    />
  </div>
  <div class="content-wrapper">
    <div class="content">
      {#if initialized}
        <h1 class="title" in:fly={{ duration: 1000, delay: 100, x: 50 }}>曲編集</h1>
        <div class="english-title" in:fly={{ duration: 1000, delay: 600, y: 50 }}>
          Background Music Editing
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
  .desktop {
    --width: 1024px;
    --height: calc(100dvh - 80px);
    --content-margin: 250px auto 0;
    --title-font-size: 64px;
    --english-title-font-size: 24px;
    --english-margin-bottom: 100px;
    --description-font-size: 36px;
  }

  .mobile {
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
    width: 100%;
    height: var(--height);
    padding: 0;

    &::after {
      position: absolute;
      width: 85%;
      height: var(--height);
      background: linear-gradient(to right, #000, transparent);
      top: 0;
      left: 0;
      content: '';
      opacity: 0.5;
      z-index: 0;
    }
  }

  .image {
    width: 100vw;
    height: var(--height);
    overflow: hidden;
  }

  .content-wrapper {
    position: absolute;
    width: 100%;
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
    margin: 0 0 4px;
    font-size: var(--title-font-size);
    font-weight: bold;
    line-height: var(--title-font-size);
    text-shadow: 5px 5px 10px rgb(0, 0, 0, 0.5);
  }

  .english-title {
    margin-bottom: var(--english-margin-bottom);
    font-size: var(--english-title-font-size);
    letter-spacing: 0.25em;
    text-shadow: 5px 5px 10px rgb(0, 0, 0, 0.5);
  }

  .description {
    font-size: var(--description-font-size);
    font-weight: bold;
    text-shadow: 5px 5px 10px rgb(0, 0, 0, 0.5);
    white-space: pre-line;
  }
</style>
