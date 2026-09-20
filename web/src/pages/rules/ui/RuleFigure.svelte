<script lang="ts">
  import { findRuleTable } from '@entities/rule'
  import type { Image as RuleImage } from '@shared/model'
  import { Image } from '@shared/ui'

  const {
    image,
    caption,
  }: {
    /** 表や図の画像 */
    image: RuleImage
    /** 図の下に出す説明。無ければ画像の代替テキストを使う */
    caption?: string
  } = $props()

  // 文字で持ち直した表があれば、画像の代わりにそれを出す
  const table = $derived(findRuleTable(image.src))

  let dialog = $state<HTMLDialogElement>()

  const open = () => dialog?.showModal()
  const close = () => dialog?.close()
</script>

<figure class="rule-figure">
  {#if table}
    <!-- 文字の表。言葉で探せて、スマホでも読める -->
    <div class="table-wrap">
      <table>
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {#if table.cornerLabel || table.rows.some((row) => row.header)}
              <th scope="col" class="corner">{table.cornerLabel ?? ''}</th>
            {/if}
            {#each table.columns as column (column)}
              <th scope="col">{column}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each table.rows as row, rowIndex (rowIndex)}
            <tr>
              {#if table.cornerLabel || table.rows.some((item) => item.header)}
                <th scope="row" class="row-header">{row.header ?? ''}</th>
              {/if}
              {#each row.cells as cell, cellIndex (cellIndex)}
                <td>{cell}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    {#if table.note}
      <figcaption>{table.note}</figcaption>
    {/if}
  {:else}
    <!-- まだ文字にしていない表・図は画像のまま。押したら大きく見られる -->
    <button type="button" class="thumbnail" onclick={open} aria-label="{image.alt}を大きく見る">
      <Image {image} isLazy={true} />
      <span class="zoom" aria-hidden="true">＋ 拡大</span>
    </button>
    <figcaption>{caption ?? image.alt}</figcaption>
  {/if}
</figure>

<dialog bind:this={dialog} class="viewer" onclick={close} onclose={close}>
  <div class="viewer-inner">
    <p class="viewer-caption">{caption ?? image.alt}</p>
    <div class="viewer-image">
      <img src={image.src} alt={image.alt} />
    </div>
    <button type="button" class="viewer-close" onclick={close}>閉じる</button>
  </div>
</dialog>

<style lang="scss">
  .rule-figure {
    margin: 0;
    padding: $space-size-16 0 0;
  }

  .thumbnail {
    position: relative;
    display: block;
    width: 100%;
    padding: $space-size-12;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
    cursor: zoom-in;

    // 表は横に長い。縮めずに横へ送れるようにする
    overflow-x: auto;
  }

  .thumbnail:hover {
    border-color: map.get($sky-blue, border);
  }

  .zoom {
    position: absolute;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: $white;
    border-radius: 4px;
    background: rgb(0 0 0 / 55%);
    right: $space-size-8;
    bottom: $space-size-8;
  }

  figcaption {
    padding-top: $space-size-8;
    font-size: $font-size-12;
    line-height: 1.7;
    color: map.get($gray, light-text);
    text-align: center;
  }

  /* ─── 文字の表 ─── */

  .table-wrap {
    // 表は横に長い。ページ全体を広げず、この中だけで横へ送る
    overflow-x: auto;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: $font-size-12;
  }

  caption {
    padding: $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    text-align: left;
    color: map.get($gray, text);
    background: map.get($gray, background);
    border-bottom: 1px solid map.get($gray, 200);
  }

  th,
  td {
    // 表の中で語が切れても、表自体は広がりすぎない
    min-width: 8em;
    padding: $space-size-8 $space-size-12;
    border: 1px solid map.get($gray, 100);
    line-height: 1.8;
    text-align: left;
    vertical-align: top;
    overflow-wrap: anywhere;
  }

  thead th {
    font-size: $font-size-12;
    color: map.get($gray, 600);
    background: map.get($gray, background);
    white-space: nowrap;
  }

  .corner,
  .row-header {
    min-width: 0;
    background: map.get($gray, background);
  }

  .row-header {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  /* ─── 拡大して見る ─── */

  .viewer {
    width: min(96vw, 1400px);
    max-width: none;
    max-height: 92vh;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: $white;
  }

  .viewer::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  .viewer-inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    max-height: 92vh;
    padding: $space-size-20;
  }

  .viewer-caption {
    margin: 0;
    font-size: $font-size-14;
    font-weight: bold;
  }

  .viewer-image {
    flex: 1;
    min-block-size: 0;
    overflow: auto;
  }

  .viewer-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .viewer-close {
    min-height: 44px;
    padding: 0 $space-size-32;
    font-size: $font-size-14;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
    align-self: center;
    cursor: pointer;
  }
</style>
