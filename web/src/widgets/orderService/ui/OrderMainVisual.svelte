<script lang="ts" module>
  import type { ImageSourceMeta } from '@shared/ui'

  /** メインビジュアルで切り替えて見せる1枚分 */
  export interface OrderMainVisualSlide {
    /** キャッチコピー。改行（`\n`）はそのまま改行して表示する */
    description: string
    /** この1枚の背景画像。省くと `backgroundImage` を出したままにする */
    image?: ImageSourceMeta[]
  }

  /** キャッチコピーを消してから次を出すまでの時間（ミリ秒） */
  const SLIDE_GAP = 1250
</script>

<script lang="ts">
  import { SLIDE_INTERVAL } from '../config/orderService'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { CharacterFigure, type CharacterProfile } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { ImageAssets } from '@shared/ui'

  /** 依頼を受け付けるページ（曲編集・手具装飾）のメインビジュアルの引数 */
  interface Props {
    /** ページの見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの上に出す小さなラベル（例: 曲編集を承っています） */
    eyebrow: string
    /** 何を頼めるのかの説明。2〜3行でまとめる */
    summary: string
    /** 何に対しての金額か（例: 1曲） */
    priceUnit: string
    /** 金額の表記（例: 5,000円〜） */
    priceAmount: string
    /** 頼めることの短い言い切り。3つまでにする */
    points: readonly string[]
    /** このページの案内役 */
    character: CharacterProfile
    /** 相談の窓口（Instagram） */
    contactHref: string
    /** 相談のボタンの文言 */
    contactLabel: string
    /** 作例へ送るリンク先（同じページの中の `#works` など） */
    worksHref: string
    /** 作例のボタンの文言 */
    worksLabel: string
    /** ボタンの下に小さく出す補足 */
    note: string
    /** 背景画像の代替テキスト */
    imageAlt: string
    /** 切り替えて見せるキャッチコピー（と背景画像） */
    slides: OrderMainVisualSlide[]
    /** 切り替えずに出したままにする背景画像 */
    backgroundImage?: ImageSourceMeta[]
    /**
     * 中身を白い札に載せずに、背景の写真の上へ直に置くか。
     * 既定（false）は白い札に載せる
     */
    bleed?: boolean
  }

  const {
    title,
    subtitle,
    eyebrow,
    summary,
    priceUnit,
    priceAmount,
    points,
    character,
    contactHref,
    contactLabel,
    worksHref,
    worksLabel,
    note,
    imageAlt,
    slides,
    backgroundImage,
    bleed = false,
  }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

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

<!-- 背景・影・中身は position ではなく grid の同じマス目に重ねる。高さは中身で決まる -->
<section class="main-visual" class:mobile={isMobile} class:bleed>
  <div class="layer images">
    {#if backgroundImage}
      <div class="image">
        <ImageAssets
          width="100%"
          height="100%"
          alt={imageAlt}
          lazy={false}
          imageSourceMeta={backgroundImage}
          objectFit="cover"
        />
      </div>
    {/if}
    <!--
      写真は全部を同じ場所に重ねて置き、いま見せる1枚だけを前に出して透過を解く。
      下には前の写真が残り続けるので、入れ替わりの合間に背景が暗く抜けない
    -->
    {#each slides as slide, index (index)}
      {#if slide.image}
        <div class="image" class:showing={index === currentIndex % slides.length}>
          <ImageAssets
            width="100%"
            height="100%"
            alt={index === currentIndex % slides.length ? imageAlt : ''}
            lazy={index !== 0}
            imageSourceMeta={slide.image}
            objectFit="cover"
          />
        </div>
      {/if}
    {/each}
  </div>
  <div class="layer veil" aria-hidden="true"></div>

  <div class="layer inner">
    <div class="panel">
      <div class="head">
        <CharacterFigure {character} size={isMobile ? 84 : 112} />
        <div class="naming">
          <p class="eyebrow">{eyebrow}</p>
          <h1>
            {title}
            {#if subtitle}
              <span class="subtitle" lang="en">{subtitle}</span>
            {/if}
          </h1>
          <p class="price">
            <span class="unit">{priceUnit}</span>
            <strong class="amount">{priceAmount}</strong>
          </p>
        </div>
      </div>

      <!-- キャッチコピーは入れ替わる。抜けたときに高さが縮まないよう置き場所の高さを決めておく -->
      <div class="catch-slot">
        {#if initialized && isShow}
          <p
            class="catch"
            in:fly={{ duration: 800, delay: 100, y: 16 }}
            out:fly={{ duration: 300, y: -16 }}
          >
            {currentSlide.description}
          </p>
        {/if}
      </div>

      <p class="summary">{summary}</p>

      <ul class="points">
        {#each points as point (point)}
          <li>{point}</li>
        {/each}
      </ul>

      <div class="actions">
        <a class="contact" href={contactHref} target="_blank" rel="noopener noreferrer">
          {contactLabel}
        </a>
        <a class="works" href={worksHref}>{worksLabel}</a>
      </div>

      <p class="note">{note}</p>
    </div>
  </div>
</section>

<style lang="scss">
  .main-visual {
    display: grid;
    width: 100%;
    min-height: 560px;
    overflow: hidden;
    background: map.get($gray, text);
  }

  .mobile.main-visual {
    min-height: 0;
  }

  // 3つの層を同じマス目に置く。position: absolute で重ねない
  .layer {
    grid-area: 1 / 1;
    min-width: 0;
  }

  .images {
    display: grid;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image {
    grid-area: 1 / 1;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;

    // 見せる1枚だけを前に出し、ゆっくり現れる。下の写真は消さずに残す
    opacity: 0;
    transition: opacity 1.4s ease-in-out;
  }

  .image.showing {
    z-index: 2;
    opacity: 1;
  }

  // ImageAssets の img は高さが auto になるので、ここで枠いっぱいに伸ばす
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  .image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  // 写真の上の文字が読めるように、左から暗くする
  .veil {
    background: linear-gradient(to right, rgb(0 0 0 / 55%), rgb(0 0 0 / 15%) 70%, transparent);
  }

  .mobile .veil {
    background: linear-gradient(to bottom, rgb(0 0 0 / 30%), rgb(0 0 0 / 55%));
  }

  .inner {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-56 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-40 var(--content-padding-inline);
  }

  .panel {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    box-sizing: border-box;
    width: 100%;
    max-width: 620px;
    padding: $space-size-32;
    border-top: 4px solid map.get($sky-blue, border);
    border-radius: 10px;
    background: rgb(255 255 255 / 95%);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }

  .mobile .panel {
    gap: $space-size-12;
    padding: $space-size-20 $space-size-16;
  }

  .head {
    display: flex;
    align-items: center;
    gap: $space-size-16;
  }

  .naming {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-inline-size: 0;
  }

  .eyebrow {
    align-self: flex-start;
    margin: 0;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.08em;
  }

  h1 {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    margin: 0;
    font-size: $font-size-40;
    line-height: 1.2;
    color: map.get($gray, text);
  }

  .mobile h1 {
    font-size: $font-size-30;
  }

  .subtitle {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
    letter-spacing: 0.25em;
  }

  // 料金は最初の画面で見せる。青で強調する
  .price {
    display: inline-flex;
    align-items: baseline;
    gap: $space-size-8;
    margin: 0;
  }

  .unit {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
  }

  .amount {
    font-size: $font-size-22;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
  }

  .catch-slot {
    display: flex;
    align-items: center;
    min-height: 3.4em;
  }

  .catch {
    margin: 0;
    font-size: $font-size-20;
    font-weight: bold;
    line-height: 1.7;
    color: map.get($sky-blue, text);
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  .mobile .catch {
    font-size: $font-size-16;
  }

  .summary {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .points {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .points li {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, 600);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 999px;
    background: map.get($sky-blue, background);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 200px;
    min-height: 54px;
    padding: 0 $space-size-20;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    transition: transform 0.15s ease;
    text-align: center;
    text-decoration: none;
  }

  .actions a:hover {
    transform: translateY(-1px);
  }

  // 相談へ進む一歩は青の塗り。作例を見に行くのは青の枠。黄はページ下の相談の節だけに残す
  .contact {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 35%);
  }

  .works {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  // 白い札をやめて、背景の写真を画面の端まで見せる（トップページのヒーローと同じ立て付け）。
  // 文字は写真の上に直に載るので、白く抜いて影で読めるようにする
  .bleed .panel {
    max-width: 680px;
    padding: 0;
    border-top: 0;
    border-radius: 0;
    background: none;
    box-shadow: none;
  }

  .bleed.mobile .panel {
    padding: 0;
  }

  .bleed .inner {
    padding-top: $space-size-80;
    padding-bottom: $space-size-80;
  }

  .bleed.mobile .inner {
    padding-top: $space-size-48;
    padding-bottom: $space-size-48;
  }

  // 写真の明暗に負けないよう、veil を全体に一段濃くする
  .bleed .veil {
    background: linear-gradient(to right, rgb(0 0 0 / 70%), rgb(0 0 0 / 45%) 70%, rgb(0 0 0 / 30%));
  }

  .bleed.mobile .veil {
    background: linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 70%));
  }

  .bleed h1,
  .bleed .catch,
  .bleed .summary,
  .bleed .amount {
    color: $white;
    text-shadow: 0 1px 6px rgb(0 0 0 / 55%);
  }

  .bleed .subtitle,
  .bleed .note {
    color: rgb(255 255 255 / 80%);
    text-shadow: 0 1px 4px rgb(0 0 0 / 55%);
  }

  // 丸い札は地の色を持っているので、写真の上でもそのまま読める
  .bleed .points li {
    color: map.get($gray, text);
  }
</style>
