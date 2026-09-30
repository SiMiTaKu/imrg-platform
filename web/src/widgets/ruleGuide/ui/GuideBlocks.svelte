<script lang="ts">
  import type { GuideBlock } from '@entities/ruleGuide'
  import { guideKeyToPath, publishedGuideKeys } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { hasGuideFigure } from '../lib/figureKeys'
  import GuideFigure from './GuideFigure.svelte'

  /** 本文のかたまりを順に描く */
  interface Props {
    /** 描くかたまり */
    blocks: readonly GuideBlock[]
  }

  const { blocks }: Props = $props()

  const published = publishedGuideKeys()

  /*
    まだ無いものへは案内しない。

    - 絵（figure）… 描いていない絵は、かたまりごと出さない。
      「準備中」と出すと読み手の信頼を落とす
    - リンク（link）… まだ書いていないページへは押せても何も無いので出さない。
      本文を書けば自動で出る
  */
  const shown = $derived(
    blocks.filter((block) => {
      if (block.kind === 'figure') return hasGuideFigure(block.figureKey)
      if (block.kind === 'link') return published.includes(block.to)
      return true
    }),
  )
</script>

<div class="blocks">
  {#each shown as block, index (index)}
    {#if block.kind === 'heading'}
      <h2>{block.text}</h2>
    {:else if block.kind === 'paragraph'}
      <p>{block.text}</p>
    {:else if block.kind === 'note'}
      <p class="note">{block.text}</p>
    {:else if block.kind === 'list'}
      <ul>
        {#each block.items as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
    {:else if block.kind === 'table'}
      <figure class="table">
        <figcaption>{block.caption}</figcaption>
        <div class="scroll">
          <table>
            <thead>
              <tr>
                {#each block.columns as column (column)}
                  <th scope="col">{column}</th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each block.rows as row, rowIndex (rowIndex)}
                <tr>
                  {#each row as cell, cellIndex (cellIndex)}
                    {#if cellIndex === 0}
                      <th scope="row">{cell}</th>
                    {:else}
                      <td>{cell}</td>
                    {/if}
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </figure>
    {:else if block.kind === 'figure'}
      <figure class="drawing">
        <GuideFigure figureKey={block.figureKey} />
        <figcaption>{block.caption}</figcaption>
      </figure>
    {:else if block.kind === 'video'}
      <figure class="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${block.videoId}`}
          title={block.caption}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <figcaption>{block.caption}</figcaption>
      </figure>
    {:else if block.kind === 'link'}
      <p class="next">
        <a href={localizeHref(ROUTES.rules.page(guideKeyToPath(block.to)))}>{block.label}</a>
      </p>
    {:else if block.kind === 'cards'}
      <!-- 見くらべるものをカードで並べる。表より親しみやすく見せたいところで使う -->
      <ul class="cards">
        {#each block.cards as card (card.title)}
          <li class="card">
            <p class="card-title">{card.title}</p>
            {#if card.tagline}
              <p class="card-tagline">{card.tagline}</p>
            {/if}
            <dl class="facts">
              {#each card.facts as fact (fact.label)}
                <div>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              {/each}
            </dl>
            {#if card.body}
              <p class="card-body">{card.body}</p>
            {/if}
            {#if card.link && published.includes(card.link.to)}
              <a
                class="card-link"
                href={localizeHref(ROUTES.rules.page(guideKeyToPath(card.link.to)))}
                >{card.link.label} →</a
              >
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  {/each}

  {#if shown.length === 0}
    <p>{m.rule_guide_empty()}</p>
  {/if}
</div>

<style lang="scss">
  /*
    間隔は親の gap で作る。margin はこのリポジトリーでは使わない決まり。
    見出しの前だけは広く空けたいので、padding-top で足す
  */
  .blocks {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
  }

  /* カード。広い画面では横に並べ、狭い画面では縦に積む */
  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    padding: 0;
    list-style: none;
  }

  .card {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-20;
    border-radius: $border-radius-8;
    background: $white;
    flex-direction: column;
    border-top: 5px solid var(--accent, #{map.get($sky-blue, button)});
    box-shadow: 0 2px 10px rgb(0 0 0 / 8%);

    /* 全体のスタイルが p を18pxにしているので、段落ごとに大きさを当てる */
    .card-title {
      font-size: $font-size-24;
      font-weight: bold;
      line-height: 1.3;
      color: var(--accent, #{map.get($sky-blue, text)});
    }

    .card-tagline {
      font-size: $font-size-14;
      font-weight: bold;
      color: map.get($gray, light-text);
    }

    .card-body {
      font-size: $font-size-14;
      line-height: 1.8;
    }
  }

  .facts {
    display: flex;
    flex-direction: column;
    padding: $space-size-8 0;
    border-top: $border-size-1 solid map.get($gray, 100);
    border-bottom: $border-size-1 solid map.get($gray, 100);

    div {
      display: flex;
      gap: $space-size-12;
      justify-content: space-between;
      padding: $space-size-4 0;
    }

    dt {
      font-size: $font-size-14;
      color: map.get($gray, light-text);
    }

    dd {
      margin-inline-start: 0;
      font-size: $font-size-16;
      font-weight: bold;
      text-align: right;
    }
  }

  .card-link {
    font-size: $font-size-14;
    font-weight: bold;
    color: var(--accent, #{map.get($sky-blue, text)});
  }

  h2 {
    padding-top: $space-size-24;
    font-size: $font-size-22;
    line-height: 1.5;
  }

  p {
    font-size: $font-size-16;
    line-height: 1.9;
  }

  .note {
    padding: $space-size-12 $space-size-16;
    border-left: $border-size-4 solid map.get($sky-blue, border);
    border-radius: $border-radius-4;
  }

  /*
    全体のスタイル（app/styles/global.css）が ul の点を消しているので、
    本文の箇条書きだけ戻す。点が無いと、ただの短い段落に見えて読みにくい
  */
  ul {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding-left: $space-size-24;
    line-height: 1.9;
    list-style: disc;
  }

  .table {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;

    figcaption {
      font-size: $font-size-14;
      color: map.get($gray, light-text);
    }
  }

  .scroll {
    overflow-x: auto;
  }

  table {
    width: 100%;
    font-size: $font-size-14;
    border-collapse: collapse;
  }

  th,
  td {
    padding: $space-size-8 $space-size-12;
    line-height: 1.7;
    text-align: left;
    border: $border-size-1 solid map.get($gray, border);
  }

  thead th {
    background-color: map.get($gray, background);
  }

  .drawing {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;

    figcaption {
      font-size: $font-size-14;
      color: map.get($gray, light-text);
    }
  }

  .video {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;

    iframe {
      width: 100%;
      aspect-ratio: 16 / 9;
      border: 0;
      border-radius: $border-radius-8;
    }

    figcaption {
      font-size: $font-size-14;
      color: map.get($gray, light-text);
    }
  }

  .next a {
    color: map.get($sky-blue, text);
  }
</style>
