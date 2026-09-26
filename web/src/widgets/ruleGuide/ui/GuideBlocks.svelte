<script lang="ts">
  import type { GuideBlock } from '@entities/ruleGuide'
  import { guideKeyToPath, publishedGuideKeys } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  /** 本文のかたまりを順に描く */
  interface Props {
    /** 描くかたまり */
    blocks: readonly GuideBlock[]
  }

  const { blocks }: Props = $props()

  const published = publishedGuideKeys()

  /*
    出さないかたまりが2つある。

    - 絵（figure）… 鍵だけ持たせてあり、まだ描いていない（TODO 7-7）。
      「準備中」と出すと読み手の信頼を落とすので、かたまりごと出さない
    - まだ書いていないページへのリンク（link）… 押しても何も無いので出さない。
      本文を書けば自動で出る
  */
  const shown = $derived(
    blocks.filter(
      (block) => block.kind !== 'figure' && (block.kind !== 'link' || published.includes(block.to)),
    ),
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

  ul {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding-left: $space-size-20;
    line-height: 1.9;
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
