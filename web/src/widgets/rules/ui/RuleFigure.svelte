<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import {
    findRuleTable,
    findRuleTree,
    hasRowHeader,
    narrowColumnCount,
    normalizeRuleTableCell,
  } from '@entities/rule'
  import type { RuleTreeNode } from '@entities/rule'
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
  // 罫線と文字だけでできた図は、入れ子の箇条書きとして出す
  const tree = $derived(findRuleTree(image.src))

  /** 行の見出しの列を出すか */
  const showsRowHeader = $derived(table ? hasRowHeader(table) : false)
  /** 区分の見出しの行が、横に何列ぶん広がるか */
  const totalColumnCount = $derived(table ? table.columns.length + (showsRowHeader ? 1 : 0) : 0)
  /** ここから右の列は、幅を詰めて折り返さない */
  const narrowFromIndex = $derived(table ? table.columns.length - narrowColumnCount(table) : 0)

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

  /**
   * 行のます目を、左から何列目に置かれるかまで含めて数え直す。
   * 横に続けて使うます目（colSpan）があると、並び順と列の位置がずれるため
   * @param cells - 行のます目
   * @returns 中身・横幅・左から何列目か・幅を詰める列かどうか
   */
  const placeCells = (cells: readonly (string | { text: string; colSpan?: number })[]) => {
    let column = 0

    return cells.map((cell) => {
      const { text, colSpan } = normalizeRuleTableCell(cell)
      const startColumn = column
      column += colSpan

      return {
        text,
        colSpan,
        // 幅を詰めるのは、横に続けて使っていない、右寄りの列だけ
        isNarrow: colSpan === 1 && startColumn >= narrowFromIndex,
      }
    })
  }
</script>

<!--
  分類図の枝。自分自身を呼び出して、何段でも下りていく
-->
{#snippet branches(nodes: readonly RuleTreeNode[], depth: number)}
  <!-- 上・中・下の3段階で色を変える。線も、上から中・中から下と色を受け継ぐ -->
  <ul class="tree" class:root={depth === 0} class:middle={depth === 1} class:leaf={depth >= 2}>
    {#each nodes as node (node.label)}
      <li>
        <div class="node" class:upper={depth === 0} class:middle={depth === 1}>
          <span>{node.label}</span>
          {#if node.note}<span class="node-note">{node.note}</span>{/if}
        </div>
        {#if node.children && node.children.length > 0}
          {@render branches(node.children, depth + 1)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

<figure class="rule-figure">
  {#if table}
    <!-- 文字の表。言葉で探せて、訳せて、スマホでも読める -->
    <p class="title">{table.caption}</p>
    {#if table.purpose === 'form'}
      <p class="hint">{m.rules_form_hint()}</p>
    {/if}
    <!-- 横に送れるときだけキーボードでも送れるようにする（tabindex） -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
      class="scroller"
      class:matrix={table.layout === 'matrix'}
      class:form={table.purpose === 'form'}
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
            {#each table.columns as column, columnIndex (column)}
              <th scope="col" class:narrow={columnIndex >= narrowFromIndex}>{column}</th>
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
              {#each placeCells(row.cells) as cell, cellIndex (cellIndex)}
                <td
                  colspan={cell.colSpan === 1 ? undefined : cell.colSpan}
                  class:narrow={cell.isNarrow}>{cell.text}</td
                >
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
  {:else if tree}
    <!--
      罫線と文字だけでできた分類図。箱と線の絵をやめ、入れ子の箇条書きにした。
      狭い画面では段ごとに縦へ積み直るので、横に送らずに読める
    -->
    <p class="title">{tree.caption}</p>
    <div class="tree-frame">
      {@render branches(tree.roots, 0)}
    </div>
    <figcaption>
      {#if tree.note}<span class="note">{tree.note}</span>{/if}
      <span class="source">{m.rules_table_source({ source: tree.source })}</span>
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
  /*
    位置の基準をここに置く。下の読み上げ用の見出し（.visually-hidden）は
    position: absolute で浮かせてあり、基準になる親がないと画面のいちばん外を
    基準にしてしまう。そうなると、閉じた章の overflow: hidden に切られず、
    ページのずっと下に居座り、何も無いところを延々と送れてしまう
  */
  .rule-figure {
    position: relative;
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
    「区分・内容・減点」のように左から右へ読む表の、右端に寄せた細い列。
    減点や難度の記号しか入らないので、中身の幅まで詰めて、残りを内容の列に回す。
    こうするとスマホでも横に送らずに収まる
  */
  .scroller:not(.matrix) td.narrow,
  .scroller:not(.matrix) th.narrow {
    width: 1%;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  // 中身は折り返さない。「その都度 0.10」が途中で割れると読みにくい
  .scroller:not(.matrix) td.narrow {
    white-space: nowrap;
  }

  /*
    細い列の見出しだけは折り返させる。「団体5名実施」を1行に保つと、
    その幅のぶん内容の列が痩せてしまうため
  */
  .scroller:not(.matrix) thead th.narrow {
    white-space: normal;
  }

  /*
    採点票・減点票などの用紙（purpose: 'form'）。
    空のます目は書き込む場所なので、潰れないように高さを持たせる
  */
  .scroller.form td:empty::after {
    content: '';
    display: block;
    min-height: $space-size-24;
  }

  /*
    用紙は欄が潰れると書き込めない。狭い画面では詰めずに、
    入れ物の中で横に送って、欄の幅を保つ
  */
  .scroller.form table {
    min-width: 34em;
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

  /* ─── 文字の分類図 ─── */

  .tree-frame {
    padding: $space-size-12;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-4;
    background: $white;
  }

  ul.tree {
    padding: 0;
    list-style: none;
  }

  // 2段目から下は、左に寄せて親からぶら下げる
  ul.tree:not(.root) {
    // 線を引く場所を空けるための下げ幅
    padding-left: $space-size-16;
  }

  // 上の段から中の段へ下りる線は紺。中の段から下は淡い青にして、深さが分かるようにする
  ul.tree.middle {
    border-left: $border-size-2 solid map.get($sky-blue, 900);
  }

  ul.tree.leaf {
    border-left: $border-size-1 solid map.get($sky-blue, border);
  }

  ul.tree > li {
    position: relative;
    padding: $space-size-4 0;
  }

  // 縦の線から箱へ伸びる、横の枝
  ul.tree:not(.root) > li::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -$space-size-16;
    width: $space-size-16;
  }

  ul.tree.middle > li::before {
    border-top: $border-size-2 solid map.get($sky-blue, 900);
  }

  ul.tree.leaf > li::before {
    border-top: $border-size-1 solid map.get($sky-blue, border);
  }

  // いちばん下の枝から先は、縦の線を残さない
  ul.tree:not(.root) > li:last-child::after {
    content: '';
    position: absolute;
    top: calc(50% + #{$border-size-1});
    bottom: 0;
    left: calc(-#{$space-size-16} - #{$border-size-2});
    width: $border-size-2;
    background: $white;
  }

  // いちばん下の段。淡い青の地に、濃い青の文字
  .node {
    display: flex;
    gap: $space-size-4 $space-size-8;
    padding: $space-size-8 $space-size-12;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-4;
    background: map.get($sky-blue, background);
    flex-wrap: wrap;
    align-items: baseline;
    line-height: 1.6;
  }

  // いちばん上の段。「難度（D）」など、採点の柱になるもの。紺の地に白い文字
  .node.upper {
    font-size: $font-size-14;
    font-weight: bold;
    color: $white;
    border-color: map.get($sky-blue, 900);
    background: map.get($sky-blue, 900);
  }

  // 中の段。これまでいちばん上に使っていた色合いを、ここへ下ろした
  .node.middle {
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, 100);
  }

  .node-note {
    font-size: $font-size-11;
    font-weight: normal;
    color: map.get($sky-blue, light-text);
  }

  // 紺の地の上では、添え書きも白寄りにしないと読めない
  .node.upper .node-note {
    color: map.get($sky-blue, 200);
  }
</style>
