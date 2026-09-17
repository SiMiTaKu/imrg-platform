<script lang="ts" module>
  import type { SrcMeta } from '@shared/ui'

  /** メインビジュアルで切り替えて見せる1枚分 */
  export interface OrderMainVisualSlide {
    /** キャッチコピー。改行（`\n`）はそのまま改行して表示する */
    description: string
    /** この1枚の背景画像。省くと `backgroundImage` を出したままにする */
    image?: SrcMeta[]
  }

  /** キャッチコピーを切り替える間隔（ミリ秒） */
  const SLIDE_INTERVAL = 5000
  /** キャッチコピーを消してから次を出すまでの時間（ミリ秒） */
  const SLIDE_GAP = 1250
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { pageData } from '@shared/lib/device'
  import { ImageAssets } from '@shared/ui'

  /** 依頼を受け付けるページ（曲編集・手具装飾）のメインビジュアルの引数 */
  interface Props {
    /** ページの見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 背景画像の代替テキスト */
    imageAlt: string
    /** 切り替えて見せるキャッチコピー（と背景画像） */
    slides: OrderMainVisualSlide[]
    /** 切り替えずに出したままにする背景画像 */
    backgroundImage?: SrcMeta[]
    /** 左から暗くする影の幅（`85%` など） */
    overlayWidth: string
    /** 左から暗くする影の濃さ（0〜1） */
    overlayOpacity: number
  }

  const {
    title,
    subtitle,
    imageAlt,
    slides,
    backgroundImage,
    overlayWidth,
    overlayOpacity,
  }: Props = $props()

  let currentIndex = $state(0)
  let isShow = $state(false)
  let initialized = $state(false)

  const currentSlide = $derived(slides[currentIndex % slides.length])

  onMount(() => {
    // 最初に見せる1枚は、開くたびに変える。表示はマウント後なので、書き出した HTML とずれない
    currentIndex = Math.floor(Math.random() * slides.length)
    isShow = true
    initialized = true
    let gapTimer: ReturnType<typeof setTimeout> | undefined
    const slideTimer = setInterval(() => {
      isShow = false
      gapTimer = setTimeout(() => {
        isShow = true
      }, SLIDE_GAP)
      currentIndex = (currentIndex + 1) % slides.length
    }, SLIDE_INTERVAL)

    // ページを離れたらタイマーを止める
    return () => {
      clearInterval(slideTimer)
      clearTimeout(gapTimer)
    }
  })
</script>

<section
  class="main-visual"
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  style:--overlay-width={overlayWidth}
  style:--overlay-opacity={overlayOpacity}
>
  {#if backgroundImage}
    <div class="image">
      <ImageAssets
        width="100%"
        height="100%"
        alt={imageAlt}
        lazy={false}
        srcMeta={backgroundImage}
        objectFit="cover"
      />
    </div>
  {/if}
  {#if isShow && currentSlide.image}
    <div class="image" in:fade={{ duration: 1000 }} out:fade={{ duration: 300 }}>
      <ImageAssets
        width="100%"
        height="100%"
        alt={imageAlt}
        lazy={false}
        srcMeta={currentSlide.image}
        objectFit="cover"
      />
    </div>
  {/if}
  <div class="content-wrapper">
    <div class="content">
      {#if initialized}
        <h1
          class="title"
          data-has-subtitle={subtitle !== undefined}
          in:fly={{ duration: 1000, delay: 100, x: 50 }}
        >
          {title}
        </h1>
        {#if subtitle}
          <div class="english-title" lang="en" in:fly={{ duration: 1000, delay: 600, y: 50 }}>
            {subtitle}
          </div>
        {/if}
      {/if}
      {#if isShow}
        <div
          class="description"
          in:fly={$pageData.isMobile ? { duration: 1000, y: 50 } : { duration: 1000, x: 100 }}
          out:fly={$pageData.isMobile ? { duration: 300, y: -50 } : { duration: 300, x: -100 }}
        >
          {currentSlide.description}
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
    width: 100%;
    height: var(--height);
    padding: 0;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: var(--overlay-width);
      height: 100%;
      content: '';
      background: linear-gradient(to right, #000, transparent);
      opacity: var(--overlay-opacity);
    }
  }

  .image {
    width: 100vw;
    height: var(--height);
    overflow: hidden;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
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

    // 英語の見出しを出さない（英語ページの）ときは、見出しの下にキャッチコピーとの間を空ける
    &[data-has-subtitle='false'] {
      margin-bottom: var(--english-margin-bottom);
    }
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
