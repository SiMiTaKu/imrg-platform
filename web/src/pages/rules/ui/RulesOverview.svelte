<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { CrossLinks, type CrossLink, type CrossLinkList } from '@features/crossLinks'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { LINKS } from '@shared/config/links'
  import { ApparatusMark } from '@widgets/rules'
  import {
    APPARATUS_LIST,
    EVENT_KINDS,
    RELATED_PAGES,
    SCORE_PARTS,
    type RelatedPage,
  } from '../config/overview'

  const isMobile = $derived($pageData.isMobile)

  /**
   * ほかのページ1つを、案内1つ分に直す
   * @param page - ほかのページ
   * @returns 案内1つ分
   */
  const toCrossLink = (page: RelatedPage): CrossLink => ({
    label: page.label(),
    href: localizeHref(page.href),
    body: page.body(),
  })

  // 先頭と残りに分けて組み立てる。案内が必ず1つ以上あることを型のまま保てる
  const [firstRelated, ...restRelated] = RELATED_PAGES

  /** ページの下に置く、ほかのページへの案内 */
  const relatedLinks: CrossLinkList = $derived([
    toCrossLink(firstRelated),
    ...restRelated.map(toCrossLink),
  ])
</script>

<!--
  ルールの案内。規則集の条文そのものではなく、試合を見るとき・はじめて出るときに
  知っておくと分かるところを自分の言葉で書いたもの。
  条文を並べたページ（`RulesPage`）は、掲載してよいかを確かめている間は出さない
-->
<article class="overview" class:mobile={isMobile}>
  <header class="head">
    <h1>{m.rules_overview_title()}</h1>
    <p class="lead">{m.rules_overview_lead()}</p>
    <p class="caution">{m.rules_overview_caution()}</p>
  </header>

  <!-- 何を見ているのかが決まらないと、あとの話が入らない。種目を最初に出す -->
  <section class="block" aria-labelledby="rules-overview-events">
    <h2 id="rules-overview-events">{m.rules_overview_events_heading()}</h2>
    <ul class="cards">
      {#each EVENT_KINDS as event (event.key)}
        <li class="card">
          <div class="naming">
            <h3>{event.label()}</h3>
            <span class="time">{event.time()}</span>
          </div>
          <p class="summary">{event.summary()}</p>
          <p class="body">{event.body()}</p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block" aria-labelledby="rules-overview-apparatus">
    <h2 id="rules-overview-apparatus">{m.rules_overview_apparatus_heading()}</h2>
    <ul class="apparatus">
      {#each APPARATUS_LIST as apparatus (apparatus.kind)}
        <li class="item">
          <ApparatusMark
            kind={apparatus.kind}
            label={apparatus.label()}
            size={isMobile ? 28 : 36}
          />
          <div class="words">
            <h3>{apparatus.label()}</h3>
            <p>{apparatus.body()}</p>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block" aria-labelledby="rules-overview-floor">
    <h2 id="rules-overview-floor">{m.rules_overview_floor_heading()}</h2>
    <p class="body">{m.rules_overview_floor_body()}</p>
    <p class="body">{m.rules_overview_time_body()}</p>
  </section>

  <section class="block" aria-labelledby="rules-overview-score">
    <h2 id="rules-overview-score">{m.rules_overview_score_heading()}</h2>
    <p class="body">{m.rules_overview_score_lead()}</p>
    <ul class="scores">
      {#each SCORE_PARTS as part (part.key)}
        <li class="score">
          <h3>{part.label()}</h3>
          <p>{part.body()}</p>
        </li>
      {/each}
    </ul>
    <p class="body">{m.rules_overview_score_note()}</p>
    <p class="body">{m.rules_overview_deduction_body()}</p>
  </section>

  <section class="block" aria-labelledby="rules-overview-music">
    <h2 id="rules-overview-music">{m.rules_overview_music_heading()}</h2>
    <p class="body">{m.rules_overview_music_body()}</p>
    <p class="body">{m.rules_overview_costume_body()}</p>
    <p class="note">{m.rules_overview_costume_note()}</p>
  </section>

  <!-- 条文が出ていない理由を、探しに来た人に分かる場所で言う。もとにした規則集もここで示す -->
  <section class="block" aria-labelledby="rules-overview-full-text">
    <h2 id="rules-overview-full-text">{m.rules_overview_full_text_heading()}</h2>
    <p class="body">{m.rules_overview_full_text_body()}</p>

    <div class="source">
      <p class="book">{m.rules_source_book()}</p>
      <dl class="detail">
        <dt>{m.rules_source_publisher_label()}</dt>
        <dd>{m.rules_source_publisher()}</dd>
        <dt>{m.rules_source_editor_label()}</dt>
        <dd>{m.rules_source_editor()}</dd>
        <dt>{m.rules_source_published_label()}</dt>
        <dd>{m.rules_source_published()}</dd>
        <dt>{m.rules_source_site_label()}</dt>
        <dd>
          <a href={LINKS.japanGymnastics} target="_blank" rel="noopener noreferrer">
            {LINKS.japanGymnastics}
          </a>
        </dd>
      </dl>
      <p class="source-note">{m.rules_overview_source_note()}</p>
    </div>
  </section>

  <section class="block" aria-labelledby="rules-overview-links">
    <h2 id="rules-overview-links">{m.rules_overview_links_heading()}</h2>
    <CrossLinks links={relatedLinks} />
  </section>
</article>

<style lang="scss">
  .overview {
    box-sizing: border-box;
    width: 100%;
    max-width: 52em;
    margin: 0 auto;
    padding: $space-size-48 $space-size-24 $space-size-80;
  }

  .mobile {
    padding: $space-size-32 $space-size-16 $space-size-56;
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    margin-bottom: $space-size-48;
  }

  h1 {
    margin: 0;
    font-size: $font-size-30;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .lead {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
  }

  .caution {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }

  .block {
    margin-top: $space-size-48;
  }

  h2 {
    margin: 0 0 $space-size-16;
    padding-bottom: $space-size-8;
    border-bottom: $border-size-1 solid map.get($sky-blue, border);
    font-size: $font-size-22;
  }

  .mobile h2 {
    font-size: $font-size-20;
  }

  h3 {
    margin: 0;
    font-size: $font-size-18;
  }

  .body {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    line-height: 1.9;
  }

  .body:last-child {
    margin-bottom: 0;
  }

  // 種目の札。2つ並べ、狭いときは縦に積む
  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    grid-template-columns: minmax(0, 1fr);
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-20;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-8;
    background: map.get($gray, background);
  }

  .naming {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    align-items: baseline;
  }

  .time {
    font-size: $font-size-12;
    color: map.get($sky-blue, light-text);
  }

  .summary {
    margin: 0;
    font-size: $font-size-16;
    font-weight: bold;
    line-height: 1.7;
  }

  .card .body {
    margin: 0;
    font-size: $font-size-14;
  }

  // 手具。絵と説明を横に並べる
  .apparatus {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    display: flex;
    gap: $space-size-16;
    align-items: flex-start;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
  }

  .words p {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.9;
  }

  // 得点の3つ。横に3つ並べ、狭いときは縦に積む
  .scores {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 $space-size-16;
    padding: 0;
    list-style: none;
  }

  .mobile .scores {
    grid-template-columns: minmax(0, 1fr);
  }

  .score {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-16;
    border-top: $border-size-2 solid map.get($sky-blue, border);
    background: map.get($gray, background);
  }

  .score p {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.9;
  }

  // もとにした規則集。条文そのものではないことを、ここではっきりさせる
  .source {
    margin-top: $space-size-24;
    padding: $space-size-20;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-8;
    background: map.get($gray, background);
  }

  .book {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    font-weight: bold;
  }

  .detail {
    display: grid;
    gap: $space-size-4 $space-size-16;
    grid-template-columns: max-content minmax(0, 1fr);
    margin: 0 0 $space-size-12;
    font-size: $font-size-14;
    line-height: 1.8;
  }

  .mobile .detail {
    grid-template-columns: minmax(0, 1fr);
  }

  .detail dt {
    color: map.get($gray, light-text);
  }

  .detail dd {
    margin: 0;
    overflow-wrap: anywhere;
  }

  .source-note {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.9;
    color: map.get($gray, light-text);
  }

  .note {
    margin: 0;
    padding: $space-size-12 $space-size-16;
    border-left: $border-size-4 solid map.get($yellow, 300);
    font-size: $font-size-14;
    line-height: 1.9;
  }
</style>
