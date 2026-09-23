<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { CHARACTERS, Character, CharacterFigure } from '@entities/character'
  import { CrossLinks, type CrossLink, type CrossLinkList } from '@features/crossLinks'
  import { createAutoPlayGroup, VideoCard, youtubeVideoId } from '@features/videoAutoPlay'
  import { LINKS } from '@shared/config/links'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import {
    COACHING_WAYS,
    CONTINUOUS_RESULTS,
    FLOW,
    HERO,
    MARKET_POINTS,
    OTHER_SERVICES,
    PRICES,
    RESULTS,
  } from '../config/content'

  const isMobile = $derived($pageData.isMobile)
  // 基本を誰よりも正確に、が持ち味の一徒が指導の案内役
  const guide = CHARACTERS[Character.KAZUTO]

  // 先頭と残りに分けて持つ。案内が必ず1つ以上あることを、型のまま保ったまま組み立てられる
  const [firstService, ...restServices] = OTHER_SERVICES

  /**
   * ほかの依頼1つを、案内1つ分に直す
   * @param service - ほかの依頼
   * @returns 案内1つ分
   */
  const toCrossLink = (service: (typeof OTHER_SERVICES)[number]): CrossLink => ({
    label: service.title(),
    href: localizeHref(service.href),
    body: service.body(),
  })

  /** ページの下に置く、ほかの依頼（曲編集・手具装飾）への案内 */
  const otherServiceLinks: CrossLinkList = $derived([
    toCrossLink(firstService),
    ...restServices.map(toCrossLink),
  ])

  /** 相場の説明を開いているか */
  let isMarketOpen = $state(false)

  /** 相場の説明を開く */
  const openMarket = () => {
    isMarketOpen = true
  }

  /** 相場の説明を閉じる */
  const closeMarket = () => {
    isMarketOpen = false
  }

  /** 押したときに開け閉めする。スマホはこれだけで動く */
  const toggleMarket = () => {
    isMarketOpen = !isMarketOpen
  }

  /** PC はマウスを重ねただけで開く。スマホでは重ねる動きが無いので何もしない */
  const openOnHover = () => {
    if (isMobile) return
    openMarket()
  }

  /** PC はマウスが離れたら閉じる */
  const closeOnHover = () => {
    if (isMobile) return
    closeMarket()
  }

  /**
   * Esc で閉じられるようにする
   * @param event - 押されたキー
   */
  const onWindowKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeMarket()
  }

  // 自動で再生する動画を実績の並びから取り出して、先にまとめて見せる。
  // 並んだ順の番号がそのままカードの番号になり、見張りはこの番号で見張る
  const autoPlayVideos = RESULTS.flatMap((result) =>
    result.videos.filter((video) => video.autoPlay).map((video) => ({ result, video })),
  )

  // 画面の真ん中に来たカードを1つだけ鳴らす
  const { watch, cardState, play } = createAutoPlayGroup()
</script>

<svelte:window onkeydown={onWindowKeydown} />

<article class="coaching" class:mobile={isMobile}>
  <!-- 何を頼めて、いくらで、どこから相談するのかを最初に出す -->
  <section class="hero">
    <div class="inner">
      <div class="head">
        <CharacterFigure character={guide} size={isMobile ? 84 : 112} />
        <div class="naming">
          <span class="eyebrow">{HERO.eyebrow()}</span>
          <h1>{m.coaching_hero_title()}</h1>
          <!-- 金額は意味のまとまりごとに包む。まとまりの途中では折り返さない -->
          <p class="price">
            <span class="unit">{HERO.priceUnit()}</span>
            <span class="amount">{HERO.priceOnline()}</span>
            <span class="amount">{HERO.priceOnsite()}</span>
          </p>
        </div>
      </div>

      <p class="summary">{HERO.summary()}</p>
      <!-- 断られるのではと身構えずに済むよう、summary のすぐあとで声をかける -->
      <p class="welcome">{HERO.welcome()}</p>

      <ul class="tags">
        {#each HERO.points as point (point.key)}
          <li>{point.text()}</li>
        {/each}
      </ul>

      <div class="actions">
        <Button href={LINKS.instagram} target="_blank" variant="yellow" width="full" size="medium">
          {m.coaching_contact_button()}
        </Button>
        <Button href="#prices" target="_self" variant="sky-blue-outline" width="full" size="medium">
          {m.coaching_hero_price_link()}
        </Button>
      </div>
      <p class="note">
        {m.coaching_hero_note()}
      </p>
    </div>
  </section>

  <!-- 受け方の違い -->
  <section class="ways">
    <div class="inner">
      <header>
        <span class="label">{m.coaching_ways_label()}</span>
        <h2>{m.coaching_ways_title()}</h2>
        <p>{m.coaching_ways_lead()}</p>
      </header>

      <ul class="way-cards">
        {#each COACHING_WAYS as way (way.key)}
          {@const character = CHARACTERS[way.character]}
          <li style:--accent={character.color}>
            <div class="way-head">
              <CharacterFigure {character} size={isMobile ? 72 : 88} />
              <div>
                <h3>{way.label()}</h3>
                <p class="way-summary">{way.summary()}</p>
              </div>
            </div>
            <ul class="points">
              {#each way.points as point, pointIndex (pointIndex)}
                <li>{point()}</li>
              {/each}
            </ul>
            <p class="way-note">{way.note()}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- 料金 -->
  <section class="prices" id="prices">
    <div class="inner">
      <header>
        <span class="label">{m.coaching_prices_label()}</span>
        <h2>{m.coaching_prices_title()}</h2>
        <p>{m.coaching_prices_lead()}</p>
      </header>

      <div class="price-tables">
        {#each PRICES as group (group.key)}
          <div class="price-table">
            <h3>{group.way()}</h3>
            <dl>
              {#each group.items as item (item.key)}
                <div class="row">
                  <dt>
                    {item.name()}
                    <span class="row-note">{item.note()}</span>
                  </dt>
                  <dd>{item.price()}</dd>
                </div>
              {/each}
            </dl>
          </div>
        {/each}
      </div>

      <div class="market">
        <!-- 相場の話は読みたい人だけが読めばよいので、i のアイコンの中にしまう -->
        <div
          class="market-info"
          onmouseenter={openOnHover}
          onmouseleave={closeOnHover}
          onfocusin={openMarket}
          role="presentation"
        >
          <button
            type="button"
            class="market-trigger"
            aria-expanded={isMarketOpen}
            onclick={toggleMarket}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="9.2"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />
              <circle cx="12" cy="7.6" r="1.2" fill="currentColor" />
              <path
                d="M12 11v6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
            {m.coaching_market_open()}
          </button>

          {#if isMarketOpen}
            {#if isMobile}
              <!-- スマホでは画面の手前に出す。背景を押しても閉じられる -->
              <button
                type="button"
                class="market-backdrop"
                aria-label={m.coaching_market_close()}
                onclick={closeMarket}
              ></button>
            {/if}
            <div
              class="market-panel"
              class:floating={!isMobile}
              role="dialog"
              aria-modal={isMobile}
              aria-labelledby="coaching-market-title"
            >
              <h3 id="coaching-market-title">{m.coaching_market_title()}</h3>
              <p>
                {m.coaching_market_lead()}
              </p>
              <ul>
                {#each MARKET_POINTS as point (point.key)}
                  <li>
                    <b>{point.term()}</b>{point.body()}
                  </li>
                {/each}
              </ul>
              <div class="market-close">
                <Button
                  variant="sky-blue-outline"
                  width={isMobile ? 'full' : 'auto'}
                  onclick={closeMarket}
                  size="medium"
                >
                  {m.coaching_market_close()}
                </Button>
              </div>
            </div>
          {/if}
        </div>

        <!-- 金額を見て諦める人に、まず気づいてほしい一文。黄で目立たせる -->
        <p class="market-note">
          <svg class="bulb" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M12 2.5a6.5 6.5 0 0 0-3.9 11.7c.62.47.9 1.1.9 1.8h6c0-.7.28-1.33.9-1.8A6.5 6.5 0 0 0 12 2.5Z"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linejoin="round"
            />
            <path
              d="M9.4 18.3h5.2M10.6 21h2.8"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
          <span>{m.coaching_market_note()}</span>
        </p>
      </div>
    </div>
  </section>

  <!-- 実績 -->
  <section class="results">
    <div class="inner">
      <header>
        <span class="label">{m.coaching_results_label()}</span>
        <h2>{m.coaching_results_title()}</h2>
        <p>{m.coaching_results_lead()}</p>
      </header>

      <!-- 見てほしい演技を先にまとめる。ここだけ、画面に入ったら自動で始まる -->
      <ul class="picks">
        {#each autoPlayVideos as pick, cardIndex (pick.video.href)}
          <li use:watch={cardIndex}>
            <VideoCard
              videoId={youtubeVideoId(pick.video.href)}
              title={pick.result.name()}
              label={pick.video.cardLabel ? pick.video.cardLabel() : pick.result.year}
              {...cardState(cardIndex)}
              onRequestPlay={() => play(cardIndex)}
            />
          </li>
        {/each}
      </ul>

      <!-- 残りは年の並びのまま、動画があるものはリンクで見に行ける -->
      <ol class="timeline">
        {#each RESULTS as result, index (index)}
          {@const linkVideos = result.videos.filter((video) => !video.autoPlay)}
          <li>
            <div class="result-head">
              <span class="year">{result.year}</span>
              <span class="name">{result.name()}</span>
              {#if result.detail}
                <span class="detail">{result.detail()}</span>
              {/if}
            </div>

            {#if linkVideos.length > 0}
              <ul class="videos">
                {#each linkVideos as video (video.href)}
                  <li>
                    <a href={video.href} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 68 48" width="18" height="13" aria-hidden="true">
                        <path
                          d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.5C4 2.3 2.3 4.8 1.5 7.7 0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.5c2.9-.8 4.6-3.3 5.4-6.2C68 35 68 24 68 24s0-11-1.5-16.3z"
                          fill="#f00"
                        />
                        <path d="M45 24 27 14v20" fill="#fff" />
                      </svg>
                      {video.label()}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ol>

      <ul class="continuous">
        {#each CONTINUOUS_RESULTS as item (item.key)}
          <li>{item.text()}</li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- 流れ -->
  <section class="flow">
    <div class="inner">
      <header>
        <span class="label">{m.coaching_flow_label()}</span>
        <h2>{m.coaching_flow_title()}</h2>
      </header>

      <ol class="steps">
        {#each FLOW as step, index (step.key)}
          {#if index > 0}
            <li class="arrow" aria-hidden="true">
              <svg viewBox="0 0 24 28" width="22" height="26">
                <path
                  d="M5 5 L19 14 L5 23 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          {/if}
          <li class="step">
            <span class="index">{index + 1}</span>
            <div class="words">
              <h3>{step.title()}</h3>
              <p>{step.description()}</p>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <!-- 連絡 -->
  <section class="contact-panel">
    <div class="inner">
      <CharacterFigure character={guide} size={isMobile ? 84 : 104} />
      <h2>{m.coaching_contact_title()}</h2>
      <p>
        {m.coaching_contact_lead()}
      </p>
      <Button
        href={LINKS.instagram}
        target="_blank"
        variant="yellow"
        size="large"
        width={isMobile ? 'full' : 'auto'}
      >
        {m.coaching_contact_button()}
      </Button>
      <p class="note">{m.coaching_contact_note()}</p>

      <CrossLinks links={otherServiceLinks} />
    </div>
  </section>
</article>

<style lang="scss">
  .coaching {
    display: flex;
    flex-direction: column;
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-64 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-40 var(--content-padding-inline);
  }

  /* ─── 共通の見出し ─── */

  header {
    padding-bottom: $space-size-32;
    text-align: center;
  }

  .label {
    display: inline-block;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
  }

  h2 {
    margin: $space-size-12 0 $space-size-8;
    font-size: $font-size-28;
  }

  .mobile h2 {
    font-size: $font-size-22;
  }

  header p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  /* ─── 最初の画面 ─── */

  // トップと同じく、札に収めず画面の端まで背景を行き渡らせる
  .hero {
    width: 100%;
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 14%), transparent 42%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  .hero .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    padding-block: $space-size-48;
  }

  .mobile .hero .inner {
    gap: $space-size-12;
    padding-block: $space-size-32;
  }

  .head {
    display: flex;
    gap: $space-size-16;
    align-items: center;
  }

  .naming {
    min-inline-size: 0;
  }

  .eyebrow {
    display: inline-block;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
  }

  h1 {
    margin: $space-size-4 0;
    font-size: $font-size-30;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .price {
    margin: 0;
    font-size: $font-size-18;
    font-weight: bold;
    line-height: 1.7;
    color: map.get($sky-blue, text);
  }

  // 「オンライン 2,000円〜」をひとかたまりに保つ。
  // 途中で折り返すと、数と単位が離れて読みにくくなる
  .amount {
    display: inline-block;
    margin-right: $space-size-8;
  }

  .unit {
    display: inline-block;
    margin-right: $space-size-8;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: $white;
    border-radius: 4px;
    background: map.get($sky-blue, button);
  }

  .summary {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, 600);
  }

  // 頼みやすさを伝える一言。本文より一段だけ強くする
  .welcome {
    margin: 0;
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.8;
    color: map.get($sky-blue, text);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tags li {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    color: map.get($gray, 600);
    border: 1px solid map.get($gray, 200);
    border-radius: 999px;
  }

  // 相談への一歩（黄）と料金へ寄り道する道（白抜き）を同じ幅で並べる。
  // スマホでは1列に積んで、1つずつ横いっぱいにする
  .actions {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mobile .actions {
    grid-template-columns: minmax(0, 1fr);
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  /* ─── 受け方 ─── */

  .ways {
    background: $white;
  }

  .way-cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .way-cards {
    grid-template-columns: 1fr;
  }

  .way-cards > li {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-top: 3px solid var(--accent);
    border-radius: 8px;
  }

  .way-head {
    display: flex;
    gap: $space-size-12;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: $font-size-20;
  }

  .way-summary {
    margin: $space-size-4 0 0;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .points {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // ✓ と文を左右に並べる。重ねずに grid の列で分ける
  .points li {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: auto minmax(0, 1fr);
    font-size: $font-size-16;
    line-height: 1.7;
  }

  .points li::before {
    color: var(--accent);
    content: '✓';
  }

  .way-note {
    margin: 0;
    padding: $space-size-12;
    font-size: $font-size-14;
    line-height: 1.7;
    color: map.get($gray, 600);
    border-radius: 6px;
    background: map.get($gray, 50);
  }

  /* ─── 料金 ─── */

  .prices {
    background: map.get($sky-blue, background);
  }

  .price-tables {
    display: grid;
    gap: $space-size-20;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mobile .price-tables {
    grid-template-columns: 1fr;
  }

  .price-table {
    padding: $space-size-24;
    border-radius: 8px;
    background: $white;
  }

  .price-table h3 {
    margin-bottom: $space-size-8;
    padding-bottom: $space-size-12;
    border-bottom: 2px solid map.get($sky-blue, border);
  }

  dl {
    margin: 0;
  }

  .row {
    display: flex;
    gap: $space-size-16;
    align-items: baseline;
    justify-content: space-between;
    padding: $space-size-12 0;
    border-bottom: 1px solid map.get($gray, 100);
  }

  dt {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    min-inline-size: 0;
    font-size: $font-size-16;
  }

  .row-note {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  dd {
    flex: none;
    margin: 0;
    font-size: $font-size-18;
    font-weight: bold;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
  }

  .market {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    margin-top: $space-size-20;
    padding: $space-size-24;
    border-radius: 8px;
    background: $white;
  }

  .market h3 {
    margin-bottom: $space-size-8;
  }

  .market p,
  .market li {
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, 600);
  }

  .market ul {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    margin: $space-size-12 0;
    padding-left: $space-size-20;
    list-style: disc;
  }

  // 重ねている間も開いたままにしたいので、i と説明を同じ入れ物に入れる
  .market-info {
    position: relative;
    align-self: flex-start;
  }

  .market-trigger {
    display: inline-flex;
    gap: $space-size-8;
    align-items: center;
    padding: $space-size-8 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 999px;
    background: $white;
    cursor: pointer;
  }

  .market-trigger:hover {
    background: map.get($sky-blue, background);
  }

  .market-panel {
    display: flex;
    flex-direction: column;
    padding: $space-size-20;
    text-align: left;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    box-shadow: 0 4px 24px rgb(0 48 99 / 16%);
  }

  // PC は i の下に浮かせる。読み終わる前に閉じないよう、余白を挟まず続ける
  .floating {
    position: absolute;
    z-index: 3;
    top: calc(100% + #{$space-size-8});
    left: 0;
    width: min(520px, 80vw);
  }

  // スマホは画面の手前に出す
  .mobile .market-panel {
    position: fixed;
    z-index: 21;
    top: 50%;
    left: 50%;
    width: min(440px, calc(100vw - #{$space-size-32}));
    max-height: 80vh;
    overflow-y: auto;
    transform: translate(-50%, -50%);
  }

  .market-backdrop {
    position: fixed;
    z-index: 20;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: rgb(0 0 0 / 45%);
    cursor: pointer;
  }

  // 閉じるボタンは右端。スマホではボタンが横いっぱいになるので、箱も幅いっぱいにする
  .market-close {
    display: flex;
    align-self: stretch;
    justify-content: flex-end;
  }

  .market-note {
    display: flex;
    gap: $space-size-8;
    align-items: flex-start;
    margin: 0;
    padding: $space-size-12 $space-size-16;
    border: 1px solid map.get($yellow, border);
    border-radius: 6px;
    background: map.get($yellow, background);
  }

  // 電球は文の1行目の高さに合わせる。縮ませない
  .bulb {
    flex: none;
    margin-top: 2px;
    color: map.get($yellow, button);
  }

  .market-note span {
    min-inline-size: 0;
  }

  /* ─── 実績 ─── */

  .results {
    background: $white;
  }

  // 見てほしい演技は1列に積む。横に並べると動画が小さくなり、演技が見えない
  .picks {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    width: 100%;
    max-width: 720px;
    margin: 0 auto $space-size-32;
    padding: 0;
    list-style: none;
  }

  .mobile .picks {
    gap: $space-size-16;
    margin-bottom: $space-size-24;
  }

  .timeline {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 0 $space-size-20;
    padding: 0;
    list-style: none;
  }

  .mobile .timeline {
    grid-template-columns: 1fr;
  }

  .timeline > li {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-12 $space-size-16;
    border-radius: 6px;
    background: map.get($gray, 50);
  }

  .result-head {
    display: flex;
    gap: $space-size-12;
    align-items: baseline;
    flex-wrap: wrap;
  }

  // 動画があるものは、そのまま見に行けるようにする
  .videos {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .videos a {
    display: inline-flex;
    gap: $space-size-4;
    align-items: center;
    padding: $space-size-4 $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, text);
    text-decoration: none;
    border: 1px solid map.get($gray, 200);
    border-radius: 999px;
    background: $white;
  }

  .videos a:hover {
    border-color: map.get($sky-blue, border);
  }

  .year {
    flex: none;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
  }

  .timeline .name {
    font-size: $font-size-16;
    overflow-wrap: anywhere;
  }

  .detail {
    margin-left: auto;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    flex: none;
  }

  .continuous {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    margin: 0;
    padding-left: $space-size-20;
    list-style: disc;
    font-size: $font-size-16;
    color: map.get($gray, 600);
  }

  /* ─── 流れ ─── */

  .flow {
    background: map.get($gray, 50);
  }

  .steps {
    display: grid;
    gap: $space-size-4;
    grid-template-columns: repeat(4, minmax(0, 1fr) 0);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .steps {
    grid-template-columns: 1fr;
  }

  // カードの境目に浮かせる三角形。角を丸くしてある
  .arrow {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    color: map.get($gray, 300);
  }

  .arrow svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  // 縦に並ぶときは下を向く
  .mobile .arrow svg {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .step {
    display: flex;
    gap: $space-size-12;
    align-items: flex-start;
    height: 100%;
    padding: $space-size-16;
    border-top: 3px solid map.get($sky-blue, border);
    border-radius: 8px;
    background: $white;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-inline-size: 0;
  }

  .index {
    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
  }

  .step h3 {
    font-size: $font-size-16;
  }

  .step p {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.8;
    color: map.get($gray, 600);
  }

  /* ─── 連絡 ─── */

  .contact-panel {
    background: $white;
    border-top: 1px solid map.get($gray, 100);
  }

  .contact-panel .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    text-align: center;
  }

  .contact-panel h2 {
    margin: 0;
  }

  .contact-panel p {
    max-width: 38em;
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, 600);
  }
</style>
