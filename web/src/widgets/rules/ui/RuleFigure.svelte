<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import {
    findRuleSeating,
    findRuleShapeFigure,
    findRuleTable,
    findRuleTree,
    hasRowHeader,
    narrowColumnCount,
    normalizeRuleTableCell,
  } from '@entities/rule'
  import type { RuleShape, RuleShapeKind, RuleTreeNode } from '@entities/rule'
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
  // 審判席の並びは、箱を横に並べた図として出す
  const seating = $derived(findRuleSeating(image.src))
  // 寸法だけでできた図は、図形を描き直して出す
  const shapeFigure = $derived(findRuleShapeFigure(image.src))

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

  /*
    寸法図の描き方。
    冊子の図は直線と寸法の引き出し線だけでできているので、画像をやめて描き直す。
    1cm を 12 の長さに決め、どの図形も同じ物差しで描くので、大きさを見比べられる。
    枠は 150 × 106 で、左と下に寸法を書き込む余白を取ってある
  */

  /** 1cm ぶんの長さ */
  const CM = 12
  /** 図形の底辺を置く高さ */
  const BASE = 80
  /** 枠の真ん中 */
  const MIDDLE = 75

  /** 描くときに必要な位置。図形の種類から決まる */
  interface ShapeDrawing {
    /** 多角形の頂点。円のときだけ空 */
    readonly polygon: string
    /** 円。半径と中心 */
    readonly circle?: { cx: number; cy: number; r: number }
    /** 下に引く寸法線と、その文字の置き場所 */
    readonly bottom?: { x1: number; x2: number; y: number; textY: number }
    /**
     * 左に引く寸法線と、その文字の置き場所。
     * 菱形は左の辺が斜めなので、辺と平行に引けるよう両端の座標で持つ
     */
    readonly side?: {
      x1: number
      y1: number
      x2: number
      y2: number
      textX: number
      textY: number
    }
    /** 角度を書き込む場所。`angleLabels` と同じ順 */
    readonly angles: readonly { x: number; y: number }[]
  }

  /**
   * 多角形の頂点を、SVG に渡せる文字列にする
   * @param points - 頂点の並び
   * @returns 「x,y x,y」の形にした頂点
   */
  const toPolygon = (points: readonly [number, number][]): string =>
    points.map(([x, y]) => `${x},${y}`).join(' ')

  /**
   * 図形の種類から、描くときの位置を決める
   * @param kind - 図形の種類
   * @returns 頂点・寸法線・角度の置き場所
   */
  const drawingOf = (kind: RuleShapeKind): ShapeDrawing => {
    switch (kind) {
      // 4.5cm×4.5cm の正方形
      case 'square': {
        const side = 4.5 * CM
        const left = MIDDLE - side / 2
        const right = left + side
        const top = BASE - side
        return {
          polygon: toPolygon([
            [left, top],
            [right, top],
            [right, BASE],
            [left, BASE],
          ]),
          bottom: { x1: left, x2: right, y: BASE + 8, textY: BASE + 20 },
          side: {
            x1: left - 8,
            y1: top,
            x2: left - 8,
            y2: BASE,
            textX: left - 12,
            textY: (top + BASE) / 2 + 3,
          },
          angles: [],
        }
      }
      // 4.0cm×5.0cm の長方形。横が 5.0cm、縦が 4.0cm
      case 'rectangle': {
        const width = 5 * CM
        const height = 4 * CM
        const left = MIDDLE - width / 2
        const right = left + width
        const top = BASE - height
        return {
          polygon: toPolygon([
            [left, top],
            [right, top],
            [right, BASE],
            [left, BASE],
          ]),
          bottom: { x1: left, x2: right, y: BASE + 8, textY: BASE + 20 },
          side: {
            x1: left - 8,
            y1: top,
            x2: left - 8,
            y2: BASE,
            textX: left - 12,
            textY: (top + BASE) / 2 + 3,
          },
          angles: [],
        }
      }
      // 一辺 5.0cm の正三角形。高さは一辺の √3/2
      case 'triangle': {
        const side = 5 * CM
        const left = MIDDLE - side / 2
        const right = left + side
        const top = BASE - (side * Math.sqrt(3)) / 2
        return {
          polygon: toPolygon([
            [MIDDLE, top],
            [right, BASE],
            [left, BASE],
          ]),
          bottom: { x1: left, x2: right, y: BASE + 8, textY: BASE + 20 },
          // 左下の角（60度）の内側に書き込む
          angles: [{ x: left + 7, y: BASE - 5 }],
        }
      }
      // 直径 4.5cm の円。寸法は直径の線の上に書き込む
      case 'circle': {
        const radius = (4.5 * CM) / 2
        const centerY = BASE - radius
        return {
          polygon: '',
          circle: { cx: MIDDLE, cy: centerY, r: radius },
          bottom: {
            x1: MIDDLE - radius,
            x2: MIDDLE + radius,
            y: centerY,
            textY: centerY - 5,
          },
          angles: [],
        }
      }
      // 一辺 4.5cm、辺の交わる角度が 60度と 120度の菱形
      case 'rhombus': {
        const side = 4.5 * CM
        // 60度ぶん右上にずれる。横の広がりは一辺＋ずれ、高さは一辺の sin60
        const shift = side * Math.cos(Math.PI / 3)
        const height = side * Math.sin(Math.PI / 3)
        const left = MIDDLE - (side + shift) / 2
        const top = BASE - height
        return {
          polygon: toPolygon([
            [left + shift, top],
            [left + shift + side, top],
            [left + side, BASE],
            [left, BASE],
          ]),
          bottom: { x1: left, x2: left + side, y: BASE + 8, textY: BASE + 20 },
          // 寸法は一辺の長さなので、斜めの辺と平行に引く
          side: {
            x1: left + shift - 9,
            y1: top,
            x2: left - 9,
            y2: BASE,
            textX: left + shift / 2 - 13,
            textY: (top + BASE) / 2 + 3,
          },
          // 左下の角（60度）と、左上の角（120度）の内側
          angles: [
            { x: left + 9, y: BASE - 5 },
            { x: left + shift + 6, y: top + 11 },
          ],
        }
      }
    }
  }

  /**
   * 寸法線の両端に付ける、直角の目印。
   * 菱形の辺は斜めなので、線の向きから直角の向きを出す
   * @param line - 寸法線の両端
   * @returns 両端に引く短い線
   */
  const endTicks = (line: { x1: number; y1: number; x2: number; y2: number }) => {
    const dx = line.x2 - line.x1
    const dy = line.y2 - line.y1
    const length = Math.hypot(dx, dy) || 1
    // 線に対して直角の向きに 3 だけ伸ばす
    const offsetX = (-dy / length) * 3
    const offsetY = (dx / length) * 3

    return [
      {
        x1: line.x1 - offsetX,
        y1: line.y1 - offsetY,
        x2: line.x1 + offsetX,
        y2: line.y1 + offsetY,
      },
      {
        x1: line.x2 - offsetX,
        y1: line.y2 - offsetY,
        x2: line.x2 + offsetX,
        y2: line.y2 + offsetY,
      },
    ]
  }

  /**
   * 図形と、描くときの位置をひとまとめにする
   * @param shapes - 図形
   * @returns 図形と、その描き方
   */
  const withDrawings = (shapes: readonly RuleShape[]) =>
    shapes.map((shape) => ({ shape, drawing: drawingOf(shape.kind) }))
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
      class:compact={table.compact}
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
              <th
                scope="col"
                class:corner={table.firstColumnIsHeader && columnIndex === 0}
                class:narrow={columnIndex >= narrowFromIndex}>{column}</th
              >
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
                {#if table.firstColumnIsHeader && cellIndex === 0}
                  <!-- いちばん左がその行の名前になっている表。読み上げに伝わるよう th で出す -->
                  <th scope="row" class="row-header">{cell.text}</th>
                {:else}
                  <td
                    colspan={cell.colSpan === 1 ? undefined : cell.colSpan}
                    class:narrow={cell.isNarrow}>{cell.text}</td
                  >
                {/if}
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
  {:else if seating}
    <!--
      審判席の並び。前列と後列で席の数が違い、列の見出しも無いので表にならない。
      箱を横に並べ、狭い画面では折り返して縦に積み直す
    -->
    <p class="title">{seating.caption}</p>
    <div class="seating-frame">
      {#each seating.rows as row (row.label)}
        <div>
          <p class="seat-row-label">
            {row.label}{#if row.note}<span class="seat-row-note">{row.note}</span>{/if}
          </p>
          <ul class="seats">
            {#each row.seats as seat, seatIndex (seatIndex)}
              <li class="seat">
                <span class="seat-label">{seat.label}</span>
                {#if seat.note}<span class="seat-note">{seat.note}</span>{/if}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    <figcaption>
      {#if seating.note}<span class="note">{seating.note}</span>{/if}
      <span class="source">{m.rules_table_source({ source: seating.source })}</span>
    </figcaption>
  {:else if shapeFigure}
    <!--
      寸法だけでできた図。線画をやめ、図形と寸法の書き込みとして描き直した。
      どの図形も同じ物差しで描いてあるので、大きさを見比べられる
    -->
    <p class="title">{shapeFigure.caption}</p>
    <ul class="shapes">
      {#each withDrawings(shapeFigure.shapes) as { shape, drawing } (shape.kind)}
        <li class="shape">
          <svg class="shape-drawing" viewBox="0 0 150 106" role="img" aria-label={shape.label}>
            <title>{shape.label}</title>
            {#if drawing.circle}
              <circle
                class="outline"
                cx={drawing.circle.cx}
                cy={drawing.circle.cy}
                r={drawing.circle.r}
              />
            {:else}
              <polygon class="outline" points={drawing.polygon} />
            {/if}

            {#if shape.bottomLabel && drawing.bottom}
              <line
                class="measure-line"
                x1={drawing.bottom.x1}
                y1={drawing.bottom.y}
                x2={drawing.bottom.x2}
                y2={drawing.bottom.y}
              />
              {#if !drawing.circle}
                <!-- 寸法線の両端の目印。円は直径の線そのものなので付けない -->
                <line
                  class="measure-line"
                  x1={drawing.bottom.x1}
                  y1={drawing.bottom.y - 3}
                  x2={drawing.bottom.x1}
                  y2={drawing.bottom.y + 3}
                />
                <line
                  class="measure-line"
                  x1={drawing.bottom.x2}
                  y1={drawing.bottom.y - 3}
                  x2={drawing.bottom.x2}
                  y2={drawing.bottom.y + 3}
                />
              {/if}
              <text
                class="measure"
                x={(drawing.bottom.x1 + drawing.bottom.x2) / 2}
                y={drawing.bottom.textY}
                text-anchor="middle">{shape.bottomLabel}</text
              >
            {/if}

            {#if shape.sideLabel && drawing.side}
              <line
                class="measure-line"
                x1={drawing.side.x1}
                y1={drawing.side.y1}
                x2={drawing.side.x2}
                y2={drawing.side.y2}
              />
              {#each endTicks(drawing.side) as tick, tickIndex (tickIndex)}
                <line class="measure-line" x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2} />
              {/each}
              <text class="measure" x={drawing.side.textX} y={drawing.side.textY} text-anchor="end"
                >{shape.sideLabel}</text
              >
            {/if}

            {#each shape.angleLabels ?? [] as angleLabel, angleIndex (angleLabel)}
              {#if drawing.angles[angleIndex]}
                <text
                  class="measure"
                  x={drawing.angles[angleIndex].x}
                  y={drawing.angles[angleIndex].y}>{angleLabel}</text
                >
              {/if}
            {/each}
          </svg>
          <p class="shape-label">{shape.label}</p>
        </li>
      {/each}
    </ul>
    <figcaption>
      {#if shapeFigure.note}<span class="note">{shapeFigure.note}</span>{/if}
      <span class="source">{m.rules_table_source({ source: shapeFigure.source })}</span>
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
    /*
      狭い画面で列が潰れると読めない。1列あたりの最小の幅を決めておき、
      収まらないときは入れ物の中で横に送る（表を縮めない）
    */
    min-width: 12em;
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
    min-width: 7em;
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

    // 減点や難度の記号しか入らないので、本文の列ほどの幅は要らない
    min-width: 5em;
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
    中身が「A」「0.1」しか入らない表。最小の幅を外して中身の幅に任せ、
    折り返しもしない。狭い画面でも収まるので、横へ送らせずに済む
  */
  .scroller.compact th,
  .scroller.compact td {
    min-width: 0;
    white-space: nowrap;
  }

  .scroller.compact table {
    width: auto;
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

  /* ─── 審判席の並び ─── */

  .seating-frame {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    padding: $space-size-12;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-4;
    background: $white;
  }

  .seat-row-label {
    display: flex;
    gap: $space-size-8;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 0 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  // 「1段高くする」のような、紙面で矢印を引いてある添え書き
  .seat-row-note {
    font-weight: normal;
    color: map.get($sky-blue, text);
  }

  .seats {
    display: flex;
    gap: $space-size-4;
    margin: 0;
    padding: 0;
    list-style: none;

    // 席は減らさず、狭い画面では折り返して縦に積み直す
    flex-wrap: wrap;
  }

  .seat {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    align-items: center;
    justify-content: center;

    // どの席も同じ幅にそろえ、名前が長いものだけ伸びる
    min-width: 3.5em;
    padding: $space-size-8;
    font-size: $font-size-12;
    line-height: 1.4;
    color: map.get($gray, text);
    text-align: center;
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-4;
    background: map.get($sky-blue, background);
  }

  .seat-label {
    font-weight: bold;
  }

  .seat-note {
    font-size: $font-size-10;
    color: map.get($sky-blue, light-text);
  }

  /* ─── 寸法図 ─── */

  .shapes {
    display: grid;
    gap: $space-size-12;

    // 狭い画面では1列ずつ、広い画面では並べて見比べられるようにする
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    margin: 0;
    padding: $space-size-12;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-4;
    background: $white;
    list-style: none;
  }

  .shape {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    align-items: center;
  }

  .shape-drawing {
    display: block;
    width: 100%;
    max-width: 176px;
    height: auto;
  }

  // 図形の線。中は塗らない
  .shape-drawing .outline {
    fill: none;
    stroke: map.get($sky-blue, 900);
    stroke-width: 1.5;
  }

  // 寸法と角度の引き出し線。図形の線より細くして区別する
  .shape-drawing .measure-line {
    stroke: map.get($gray, light-text);
    stroke-width: 0.8;
  }

  .shape-drawing .measure {
    font-size: 9px;
    fill: map.get($gray, text);
  }

  .shape-label {
    margin: 0;
    font-size: $font-size-11;
    line-height: 1.6;
    color: map.get($gray, text);
    text-align: center;
  }
</style>
