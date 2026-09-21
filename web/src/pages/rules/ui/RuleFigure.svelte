<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { findRuleTable, hasRowHeader, normalizeRuleTableCell } from '@entities/rule'
  import type { Image as RuleImage } from '@shared/model'

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

  /** 行の見出しの列を出すか */
  const showsRowHeader = $derived(table ? hasRowHeader(table) : false)
  /** 区分の見出しの行が、横に何列ぶん広がるか */
  const totalColumnCount = $derived(table ? table.columns.length + (showsRowHeader ? 1 : 0) : 0)

  /** 中身が入れ物からはみ出していて、横に送れる状態か */
  let isScrollable = $state(false)

  /**
   * 横に送れるかを見張る。入れ物や画面の幅が変わるたびに測り直す
   * @param element - 横に送る入れ物の要素
   * @returns 片付けの手順
   */
  const watchOverflow = (element: HTMLElement) => {
    const measure = () => {
      // 小数の誤差で出っぱなしにならないよう、1px の余裕を持たせる
      isScrollable = element.scrollWidth - element.clientWidth > 1
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    for (const child of element.children) observer.observe(child)

    return { destroy: () => observer.disconnect() }
  }
</script>

<figure class="rule-figure">
  {#if table}
    <!-- 文字の表。言葉で探せて、訳せて、スマホでも読める -->
    <p class="title">{table.caption}</p>
    <!-- 横に送れるときだけキーボードでも送れるようにする（tabindex） -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
      class="scroller"
      class:matrix={table.layout === 'matrix'}
      use:watchOverflow
      role={isScrollable ? 'region' : undefined}
      tabindex={isScrollable ? 0 : undefined}
      aria-label={isScrollable ? table.caption : undefined}
    >
      <table>
        <caption class="visually-hidden">{table.caption}</caption>
        <thead>
          <tr>
            {#if showsRowHeader}
              <th scope="col" class="corner">{table.cornerLabel ?? ''}</th>
            {/if}
            {#each table.columns as column (column)}
              <th scope="col">{column}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each table.rows as row, rowIndex (rowIndex)}
            {#if row.group}
              <tr class="group-row">
                <th scope="colgroup" colspan={totalColumnCount}>{row.group}</th>
              </tr>
            {/if}
            <tr>
              {#if showsRowHeader}
                <th scope="row" class="row-header">{row.header ?? ''}</th>
              {/if}
              {#each row.cells as cell, cellIndex (cellIndex)}
                {@const { text, colSpan } = normalizeRuleTableCell(cell)}
                <td colspan={colSpan === 1 ? undefined : colSpan}>{text}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    {#if isScrollable}
      <p class="hint">{m.rules_scroll_hint()}</p>
    {/if}
    <figcaption>
      {#if table.note}<span class="note">{table.note}</span>{/if}
      <span class="source">{m.rules_table_source({ source: table.source })}</span>
    </figcaption>
  {:else}
    <!--
      まだ文字にしていない表・図は画像のまま。
      拡大して見る窓はやめ、代わりに入れ物の中で横に送れるようにした。
      画面が狭いときに縮めてしまうと字が潰れて読めなくなるため、最低限の幅を保つ
    -->
    <div class="scroller image" use:watchOverflow>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </div>
    {#if isScrollable}
      <p class="hint">{m.rules_scroll_hint()}</p>
    {/if}
    <figcaption>{caption ?? image.alt}</figcaption>
  {/if}
</figure>

<style lang="scss">
  .rule-figure {
    margin: 0;
    padding: $space-size-16 0 0;
  }

  .title {
    margin: 0 0 $space-size-8;
    font-size: $font-size-14;
    font-weight: bold;
    line-height: 1.6;
    color: map.get($gray, text);
  }

  // 表と図を横に送る入れ物。ページ全体は広げず、この中だけで送る
  .scroller {
    overflow-x: auto;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-4;
    background: $white;

    // キーボードで送るときに、どこを触っているか分かるように
    &:focus-visible {
      outline: $border-size-2 solid map.get($sky-blue, border);
      outline-offset: $border-size-2;
    }
  }

  .scroller.image {
    padding: $space-size-12;
  }

  // 画像は縮めると字が潰れる。狭い画面では縮めず、入れ物の中で横に送る
  .scroller.image img {
    display: block;
    width: 100%;
    min-width: 640px;
    height: auto;
  }

  .hint {
    margin: $space-size-8 0 0;
    font-size: $font-size-11;
    line-height: 1.6;
    color: map.get($gray, light-text);
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding-top: $space-size-8;
    font-size: $font-size-11;
    line-height: 1.7;
    color: map.get($gray, light-text);
  }

  // 規則そのものの但し書き。出典より目立たせる
  .note {
    color: map.get($gray, text);
  }

  .source {
    font-size: $font-size-10;
  }

  /* ─── 文字の表 ─── */

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: $font-size-12;
  }

  // 表の名前は上に見出しとして出しているので、読み上げ用にだけ残す
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  th,
  td {
    padding: $space-size-8 $space-size-12;
    border: $border-size-1 solid map.get($gray, 100);
    line-height: 1.7;
    text-align: left;
    vertical-align: top;

    // 表のデータは改行をそのまま出す（手具の形状など、箇条書きになっているもの）
    white-space: pre-line;

    // はみ出すときだけ語の途中で折る。「90cm〜110cm」が不用意に割れないように
    overflow-wrap: break-word;
  }

  thead th {
    font-size: $font-size-12;
    color: map.get($gray, 700);
    background: map.get($gray, background);
    white-space: nowrap;
  }

  // 区分の見出しの行。長い欠点表を、目で区切って読めるようにする
  .group-row th {
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
    white-space: normal;
  }

  .corner,
  .row-header {
    background: map.get($gray, background);
  }

  .row-header {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, text);
    white-space: nowrap;
  }

  tbody tr:nth-child(even of :not(.group-row)) td {
    background: map.get($gray, 50);
  }

  /*
    「区分・内容・減点」のように左から右へ読む表（layout: 'list'）。
    いちばん右の減点の列を中身の幅に詰め、残りを内容の列に回すと、
    スマホでも横に送らずに収まる
  */
  .scroller:not(.matrix) td:last-child {
    width: 1%;
    white-space: nowrap;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  /*
    行と列の見出しが交わる表（layout: 'matrix'）。
    幅が足りないときは横に送る。そのとき行の見出しは左に貼り付けておく
  */
  .scroller.matrix td {
    // 「90cm〜110cm」のような値が1行に収まる幅。これより狭いと数字が割れて読みにくい
    min-width: 11em;
  }

  .scroller.matrix .corner,
  .scroller.matrix .row-header {
    position: sticky;
    left: 0;
    z-index: 1;

    // 下に潜る本文が透けないように、地の色を必ず塗る
    background: map.get($gray, 100);
  }

  .scroller.matrix .corner {
    z-index: 2;
  }
</style>
