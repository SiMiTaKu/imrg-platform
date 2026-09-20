<script lang="ts">
  import { Character, CharacterFigure, findCharacter } from '@entities/character'
  import { LINKS } from '@shared/config/links'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import {
    COACHING_WAYS,
    CONTINUOUS_RESULTS,
    FLOW,
    HERO,
    OTHER_SERVICES,
    PRICES,
    RESULTS,
  } from '../config/content'

  const isMobile = $derived($pageData.isMobile)
  // 基本を誰よりも正確に、が持ち味の一徒が指導の案内役
  const guide = findCharacter(Character.KAZUTO)
</script>

<article class="coaching" class:mobile={isMobile}>
  <!-- 何を頼めて、いくらで、どこから相談するのかを最初に出す -->
  <section class="hero">
    <div class="inner">
      <div class="panel">
        <div class="head">
          <CharacterFigure character={guide} size={isMobile ? 84 : 112} />
          <div class="naming">
            <span class="eyebrow">{HERO.eyebrow}</span>
            <h1>指導・演技構成</h1>
            <p class="price"><span class="unit">{HERO.priceUnit}</span>{HERO.priceAmount}</p>
          </div>
        </div>

        <p class="summary">{HERO.summary}</p>

        <ul class="tags">
          {#each HERO.points as point (point)}
            <li>{point}</li>
          {/each}
        </ul>

        <div class="actions">
          <a class="contact" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            DM で相談する
          </a>
          <a class="secondary" href="#prices">料金を見る</a>
        </div>
        <p class="note">
          Instagram のダイレクトメッセージがいちばん早く届きます。見積もりまで無料です。
        </p>
      </div>
    </div>
  </section>

  <!-- 受け方の違い -->
  <section class="ways">
    <div class="inner">
      <header>
        <span class="label">受け方</span>
        <h2>オンラインと、会場へ出向く形があります</h2>
        <p>できることが変わるので、目的に合うほうを選んでください。</p>
      </header>

      <ul class="way-cards">
        {#each COACHING_WAYS as way (way.key)}
          {@const character = findCharacter(way.character)}
          <li style:--accent={character.color}>
            <div class="way-head">
              <CharacterFigure {character} size={isMobile ? 72 : 88} />
              <div>
                <h3>{way.label}</h3>
                <p class="way-summary">{way.summary}</p>
              </div>
            </div>
            <ul class="points">
              {#each way.points as point (point)}
                <li>{point}</li>
              {/each}
            </ul>
            <p class="way-note">{way.note}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- 料金 -->
  <section class="prices" id="prices">
    <div class="inner">
      <header>
        <span class="label">料金</span>
        <h2>料金の目安</h2>
        <p>内容と人数で変わります。まず相談してもらって、見積もりをお伝えします。</p>
      </header>

      <div class="price-tables">
        {#each PRICES as group (group.way)}
          <div class="price-table">
            <h3>{group.way}</h3>
            <dl>
              {#each group.items as item (item.name)}
                <div class="row">
                  <dt>
                    {item.name}
                    <span class="row-note">{item.note}</span>
                  </dt>
                  <dd>{item.price}</dd>
                </div>
              {/each}
            </dl>
          </div>
        {/each}
      </div>

      <div class="market">
        <h3>相場について</h3>
        <p>
          男子新体操は競技人口が少なく、指導や構成作成の相場が決まっていません。
          頼む側も「いくらが普通なのか」が分からないと思うので、考え方を書いておきます。
        </p>
        <ul>
          <li>
            <b>会場へ出向く場合</b>は、丸1日を空けて移動します。1日 10,000円は、
            スポーツの個人指導の相場（1時間 3,000〜5,000円）から見ると低めの設定です。
          </li>
          <li>
            <b>構成の作成</b>は、曲を聴いて組み立て、動画を作り、書き起こす作業が入ります。
            1演技あたり数日かかります。
          </li>
          <li>
            <b>添削</b>は動画を見て直しを伝えるだけなので、いちばん頼みやすい入口です。
          </li>
        </ul>
        <p class="market-note">
          予算に合わせて内容を調整できます。「この金額でどこまでできるか」という相談でも構いません。
        </p>
      </div>
    </div>
  </section>

  <!-- 実績 -->
  <section class="results">
    <div class="inner">
      <header>
        <span class="label">実績</span>
        <h2>これまでに作った演技</h2>
        <p>全日本・全国大会で使われた構成を含みます。</p>
      </header>

      <ol class="timeline">
        {#each RESULTS as result, index (index)}
          <li>
            <span class="year">{result.year}</span>
            <span class="name">{result.name}</span>
            {#if result.detail}
              <span class="detail">{result.detail}</span>
            {/if}
          </li>
        {/each}
      </ol>

      <ul class="continuous">
        {#each CONTINUOUS_RESULTS as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- 流れ -->
  <section class="flow">
    <div class="inner">
      <header>
        <span class="label">流れ</span>
        <h2>相談から渡すまで</h2>
      </header>

      <ol class="steps">
        {#each FLOW as step, index (index)}
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
              <h3>{step.title}</h3>
              <p>{step.description}</p>
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
      <h2>まずは相談してください</h2>
      <p>
        いつ・どこで・何人を・どこまで。決まっていないことがあっても構いません。
        予算に合わせて内容を調整できます。
      </p>
      <a class="contact" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
        DM で相談する
      </a>
      <p class="note">返事に数日いただくことがあります。見積もりまで無料です。</p>

      <ul class="others">
        {#each OTHER_SERVICES as service (service.title)}
          <li>
            <a href={localizeHref(service.href)}>
              <span class="other-title">{service.title}</span>
              <span class="other-body">{service.body}</span>
            </a>
          </li>
        {/each}
      </ul>
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

  .hero {
    background:
      radial-gradient(circle at 10% 0%, rgb(0 111 230 / 10%), transparent 45%), map.get($gray, 50);
  }

  .panel {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    padding: $space-size-32;
    border-top: 4px solid map.get($sky-blue, button);
    border-radius: 10px;
    background: $white;
    box-shadow: 0 2px 16px rgb(0 48 99 / 8%);
  }

  .mobile .panel {
    padding: $space-size-20;
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
    display: flex;
    gap: $space-size-8;
    align-items: baseline;
    margin: 0;
    font-size: $font-size-18;
    font-weight: bold;
    color: map.get($sky-blue, text);
    flex-wrap: wrap;
  }

  .unit {
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

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
  }

  .actions a {
    display: inline-flex;
    flex: 1 1 200px;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 $space-size-20;
    font-size: $font-size-16;
    font-weight: bold;
    text-decoration: none;
    border-radius: 6px;
  }

  // 連絡への一歩だけ黄にする
  .contact {
    color: map.get($amber, 900);
    background: map.get($amber, 300);
  }

  .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
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

  .market-note {
    margin: 0;
    padding: $space-size-12;
    border-radius: 6px;
    background: map.get($sky-blue, background);
  }

  /* ─── 実績 ─── */

  .results {
    background: $white;
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

  .timeline li {
    display: flex;
    gap: $space-size-12;
    align-items: baseline;
    padding: $space-size-12 $space-size-16;
    border-radius: 6px;
    background: map.get($gray, 50);
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

  .contact-panel .contact {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 $space-size-32;
    font-size: $font-size-16;
    font-weight: bold;
    text-decoration: none;
    border-radius: 6px;
  }

  .others {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin: $space-size-20 0 0;
    padding: 0;
    list-style: none;
  }

  .mobile .others {
    grid-template-columns: 1fr;
  }

  // 名前と説明を1行に並べる。2行に積むと札が縦に伸びる
  .others a {
    display: flex;
    gap: $space-size-8;
    align-items: baseline;
    height: 100%;
    padding: $space-size-12 $space-size-16;
    text-align: left;
    text-decoration: none;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
  }

  .others a:hover {
    border-color: map.get($sky-blue, border);
  }

  .other-title {
    flex: none;
    font-size: $font-size-16;
    font-weight: bold;
  }

  .other-body {
    min-inline-size: 0;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }
</style>
