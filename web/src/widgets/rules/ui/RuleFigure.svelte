<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import {
    findRuleSeating,
    findRuleShapeFigure,
    findRuleTable,
    findRuleTree,
    hasRowHeader,
    hasShortRowHeader,
    poseOf,
    headerColumnCount,
    mergeEmptyCellsDownward,
    narrowColumnCount,
  } from '@entities/rule'
  import type { RuleShape, RuleShapeKind, RuleTreeNode } from '@entities/rule'
  import type { Image as RuleImage } from '@shared/model'
  import { pageData } from '@shared/lib/device'
  import RulePaperFrame from './RulePaperFrame.svelte'
  import StickFigure from './StickFigure.svelte'

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
  /** 左から何列を行の見出しにするか */
  const headerColumns = $derived(table ? headerColumnCount(table) : 0)
  /** 行の見出しが番号のように短いものばかりか。幅を詰めてよい */
  const shortRowHeader = $derived(table ? hasShortRowHeader(table) : false)
  /**
   * 列ごとの幅の割り当て。行の見出しの列がある表では、その列のぶんを先頭に足す。
   *
   * @remarks
   * 割り当ては columns の数だけ書いてあるので、行の見出しの列には何も当たらない。
   * 列の幅を割り当てどおりに並べる表では、当たらなかった列が幅 0 になり、
   * 中身だけが宙に浮いて見えてしまう
   */
  const resolvedWidths = $derived.by(() => {
    if (!table?.columnWidths) return undefined
    if (!showsRowHeader) return table.columnWidths
    // 通し番号だけの見出しは狭く、言葉が入る見出しは広めに取る
    const headerShare = shortRowHeader ? 8 : 16
    const shares = table.columnWidths.map((width) => Number.parseFloat(width))
    const total = shares.reduce((sum, share) => sum + share, 0)
    // 書いてある割り当ての合計が 100 でなくても、残りをその比で埋める
    const scale = total > 0 ? (100 - headerShare) / total : 0
    return [`${headerShare}%`, ...shares.map((share) => `${share * scale}%`)]
  })

  /**
   * 列ごとの幅（px）を足し合わせた、表そのものの幅。
   *
   * @remarks
   * 紙に出したときと画面で同じ形に見せるため、幅を px で決める。
   * 狭い画面でも縮めず、入れ物の中で横に送る
   */
  const pixelWidth = $derived(
    table?.columnPixels ? table.columnPixels.reduce((sum, width) => sum + width, 0) : undefined,
  )

  /** ます目が左から何列目に出るか。行の見出しの列があれば1つずれる */
  const visualColumn = $derived(showsRowHeader ? 1 : 0)

  /** どの列も幅を詰める表か。見出しを折り返す意味が無い */
  const allColumnsNarrow = $derived(
    table ? narrowColumnCount(table) >= table.columns.length : false,
  )
  /** 区分の見出しの行が、横に何列ぶん広がるか */
  const totalColumnCount = $derived(table ? table.columns.length + (showsRowHeader ? 1 : 0) : 0)
  /** ここから右の列は、幅を詰めて折り返さない */
  const narrowFromIndex = $derived(table ? table.columns.length - narrowColumnCount(table) : 0)

  const isMobile = $derived($pageData.isMobile)

  /** 中身が入れ物からはみ出していて、横に送れる状態か */
  let isScrollable = $state(false)

  /**
   * 左に貼り付ける1列目の幅を測る。
   *
   * @remarks
   * 2列目を貼り付けるには、1列目の幅だけ右へずらす必要がある。
   * 幅は百分率で決まるので、画面の幅が変わるたびに測り直す
   *
   * @param element - 表を包む入れ物
   * @returns 片付けの手順
   */
  const watchHeaderWidth = (element: HTMLElement) => {
    const measure = () => {
      const first = element.querySelector('tbody th.sticky-0')
      element.style.setProperty(
        '--rule-first-header-width',
        `${first instanceof HTMLElement ? first.offsetWidth : 0}px`,
      )
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    const first = element.querySelector('tbody th.sticky-0')
    if (first instanceof HTMLElement) observer.observe(first)

    return { destroy: () => observer.disconnect() }
  }

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
  const placeCells = (
    cells: readonly {
      text: string
      colSpan: number
      rowSpan: number
      slash?: 'down' | 'up'
    }[],
  ) => {
    let column = 0

    return cells.map((cell) => {
      const startColumn = column
      column += cell.colSpan

      return {
        ...cell,
        // 左から何列目に置かれるか。横に続けて使うます目があると、並び順とずれる
        startColumn,
        // 幅を詰めるのは、横に続けて使っていない、右寄りの列だけ
        isNarrow: cell.colSpan === 1 && startColumn >= narrowFromIndex,
      }
    })
  }

  // 縦に続く空のます目は、上のます目にまとめてから出す
  const mergedRows = $derived(table ? mergeEmptyCellsDownward(table) : [])

  /** 印刷したい用紙。押されたものだけを紙に出す */
  let printing = $state(false)

  /**
   * この用紙だけを印刷する。
   *
   * @remarks
   * 紙に出すのはブラウザーに任せる。PDF として残したい人は、印刷の窓から保存できる
   */
  let figure = $state<HTMLElement>()

  /**
   * 紙に出す用紙までの道すじに印を付ける
   * @param element - 用紙の要素
   * @returns 印を消す手順
   */
  const markPrintPath = (element: HTMLElement) => {
    const marked: HTMLElement[] = []
    for (let node = element.parentElement; node; node = node.parentElement) {
      node.dataset.printPath = 'true'
      marked.push(node)
    }
    return () => {
      for (const node of marked) delete node.dataset.printPath
    }
  }

  /**
   * この用紙だけを印刷する。
   *
   * @remarks
   * 紙に出すのはブラウザーに任せる。PDF として残したい人は、印刷の窓から保存できる。
   * ほかの中身は「隠す」のではなく「消す」。隠すだけだと場所が残り、白紙が何十枚も続く
   */
  const print = () => {
    if (!figure) return
    printing = true
    document.body.dataset.printing = 'true'
    const clear = markPrintPath(figure)
    // 印刷の目印が画面に行き渡ってから窓を開く
    requestAnimationFrame(() => {
      globalThis.print()
      printing = false
      delete document.body.dataset.printing
      clear()
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

{#snippet formTable()}
  {#if table}
    <!-- 横に送れるときだけキーボードでも送れるようにする（tabindex） -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div
      class="scroller"
      class:matrix={table.layout === 'matrix'}
      class:form={table.purpose === 'form'}
      class:compact={table.compact}
      class:vertical-header={table.verticalHeader}
      class:keep-breaks={table.preserveLineBreaks}
      class:short-row-header={shortRowHeader}
      class:uniform={allColumnsNarrow}
      use:watchOverflow
      use:watchHeaderWidth
      role={isScrollable ? 'region' : undefined}
      tabindex={isScrollable ? 0 : undefined}
      aria-label={isScrollable ? table.caption : undefined}
    >
      <table
        class:sized={resolvedWidths}
        class:pixel-sized={table.columnPixels}
        style:width={pixelWidth === undefined ? undefined : `${pixelWidth}px`}
      >
        <caption class="visually-hidden">{table.caption}</caption>
        {#if table.columnPixels}
          <!-- 紙に出したときと同じ形にするため、列の幅を px で決める -->
          <colgroup>
            {#each table.columnPixels as pixels, pixelIndex (pixelIndex)}
              <col style:width={`${pixels}px`} />
            {/each}
          </colgroup>
        {:else if resolvedWidths}
          <!-- 書くことが多い列は広く、数字だけの列は狭くする -->
          <colgroup>
            {#each resolvedWidths as width, widthIndex (widthIndex)}
              <col style:width />
            {/each}
          </colgroup>
        {/if}
        <thead>
          <tr>
            {#if showsRowHeader}
              <th scope="col" class="corner sticky-0">{table.cornerLabel ?? ''}</th>
            {/if}
            {#each table.columns as column, columnIndex (column)}
              <th
                scope="col"
                class:corner={columnIndex < headerColumns}
                class:narrow={columnIndex >= narrowFromIndex}
                class:sticky-0={columnIndex + visualColumn === 0}
                class:sticky-1={headerColumns + visualColumn > 1 &&
                  columnIndex + visualColumn === 1}
                style:text-align={table.columnAligns?.[columnIndex]}>{column}</th
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
                <th scope="row" class="row-header sticky-0">{row.header ?? ''}</th>
              {/if}
              {#each placeCells(mergedRows[rowIndex] ?? []) as cell, cellIndex (cellIndex)}
                <!-- 上のます目に呑まれたものは出さない -->
                {#if cell.rowSpan > 0}
                  {#if cell.startColumn < headerColumns}
                    <!-- いちばん左がその行の名前になっている表。読み上げに伝わるよう th で出す -->
                    <th
                      scope="row"
                      class="row-header"
                      class:sticky-0={cell.startColumn + visualColumn === 0}
                      class:sticky-1={cell.startColumn + visualColumn === 1}
                      colspan={cell.colSpan === 1 ? undefined : cell.colSpan}
                      rowspan={cell.rowSpan === 1 ? undefined : cell.rowSpan}>{cell.text}</th
                    >
                  {:else}
                    <td
                      colspan={cell.colSpan === 1 ? undefined : cell.colSpan}
                      rowspan={cell.rowSpan === 1 ? undefined : cell.rowSpan}
                      class:narrow={cell.isNarrow}
                      class:figure-cell={table.stickFigures?.figureColumn === cell.startColumn}
                      class:slashed-down={cell.slash === 'down'}
                      class:slashed-up={cell.slash === 'up'}
                      style:text-align={table.columnAligns?.[cell.startColumn]}
                    >
                      {#if table.stickFigures?.figureColumn === cell.startColumn}
                        <!-- 冊子の線画の代わりに出す、仮の棒人間 -->
                        {@const name = row.cells[table.stickFigures.nameColumn]}
                        {@const label = typeof name === 'string' ? name : (name?.text ?? '')}
                        <StickFigure pose={poseOf(label)} {label} />
                      {:else}
                        {cell.text}
                      {/if}
                    </td>
                  {/if}
                {/if}
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
{/snippet}

<figure bind:this={figure} class="rule-figure" data-printing={printing ? 'true' : undefined}>
  {#if table}
    <!-- 文字の表。言葉で探せて、訳せて、スマホでも読める -->
    {#if !table.paper}
      <p class="title">{table.caption}</p>
    {/if}
    {#if table.purpose === 'form'}
      <p class="hint">{m.rules_form_hint()}</p>
    {/if}
    {#if table.paper}
      <!-- 用紙は幅を決めてあるので、狭い画面ではこの中だけで横に送る -->
      <div class="paper-scroller">
        <RulePaperFrame paper={table.paper} caption={table.caption}>
          {@render formTable()}
        </RulePaperFrame>
      </div>
      <div class="print-action no-print">
        <Button variant="outline" width={isMobile ? 'full' : 'auto'} onclick={print}>
          {m.rules_print()}
        </Button>
        <span class="hint">{m.rules_print_hint()}</span>
      </div>
    {:else}
      {@render formTable()}
    {/if}
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
    <div class="seating-scroller">
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
    斜線を引いたます目。冊子の採点票で「ここには書かない」ことを示している。
    空のまま置くと書き込む場所に見えてしまう
  */
  .slashed-down {
    background-image: linear-gradient(
      to top right,
      transparent calc(50% - 0.6px),
      map.get($gray, 500) calc(50% - 0.6px),
      map.get($gray, 500) calc(50% + 0.6px),
      transparent calc(50% + 0.6px)
    );
  }

  // 右上から左下へ引く斜線
  .slashed-up {
    background-image: linear-gradient(
      to top left,
      transparent calc(50% - 0.6px),
      map.get($gray, 500) calc(50% - 0.6px),
      map.get($gray, 500) calc(50% + 0.6px),
      transparent calc(50% + 0.6px)
    );
  }

  // 仮の棒人間だけが入る列。絵のぶんだけの幅で足りる
  .figure-cell {
    min-width: 0;
    padding: $space-size-4;
    text-align: center;
  }

  // 用紙は幅を決めてあるので、入らないときはこの中で横に送る
  .paper-scroller {
    overflow-x: auto;
  }

  // 用紙の中の表は、用紙そのものが横に送れるので、二重に送らせない
  .paper-scroller .scroller {
    max-height: none;
    overflow: visible;
    border: 0;
  }

  // 印刷のボタン。用紙の下に置く
  .print-action {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    margin-top: $space-size-8;
    flex-wrap: wrap;
  }

  /*
    印刷。押した用紙だけを紙に出す。

    ページ全体に「印刷中の図がある」という目印を付け、その図以外を隠す。
    用紙は罫線で読ませるものなので、地の色と線はそのまま出す
  */
  @media print {
    .no-print {
      display: none;
    }

    .rule-figure {
      margin: 0;
      padding: 0;
    }

    .rule-figure .scroller {
      max-height: none;
      overflow: visible;
      border: 0;
    }

    .rule-figure table {
      min-width: 0;
    }
  }

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

  /*
    表と図を横に送る入れ物。ページ全体は広げず、この中だけで送る。

    縦にも高さの上限を決めてあるのは、見出し行を追従させるため。
    横に送るために overflow を持たせると、この入れ物が送りの基準になるので、
    ここが縦にも送れないと position: sticky が効かない。
    上限に届かない短い表は、これまでどおりページごと送られる
  */
  .scroller {
    max-height: 70vh;
    overflow: auto;
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

    // 行の高さが中身でまちまちになるので、どのます目も縦の中央にそろえる
    vertical-align: middle;

    // 表のデータは改行をそのまま出す（手具の形状など、箇条書きになっているもの）
    white-space: pre-line;

    // はみ出すときだけ語の途中で折る。「90cm〜110cm」が不用意に割れないように
    overflow-wrap: break-word;
  }

  /*
    見出し行は上に貼り付けて、下へ送っても残るようにする。
    罫線をまとめる（border-collapse: collapse）と貼り付けた行の線が置き去りに
    なるので、影で下の縁を引き直している
  */
  thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    font-size: $font-size-12;
    color: map.get($gray, 700);
    background: map.get($gray, background);
    box-shadow: inset 0 -#{$border-size-1} 0 map.get($gray, 200);
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

  /*
    行の見出しは左に貼り付けて、横へ送っても残るようにする。

    どのます目を貼り付けるかは「並び順の何番目か」ではなく「左から何列目か」で
    決める。縦にまとめたます目があると、行によって並び順がずれるため、
    並び順で見ると2列目が1列目の場所に貼り付いて、上に重なってしまう
  */
  th.sticky-0,
  th.sticky-1 {
    position: sticky;
    z-index: 1;
    box-shadow: inset -#{$border-size-1} 0 0 map.get($gray, 200);
  }

  th.sticky-0 {
    left: 0;
  }

  // 2列目は、1列目の幅だけ右へずらす。幅は use:watchHeaderWidth が測って入れる
  th.sticky-1 {
    left: var(--rule-first-header-width, 0);
  }

  // 見出し行と行の見出しが重なる角は、どちらよりも手前に置く
  thead th.sticky-0,
  thead th.sticky-1 {
    z-index: 2;
  }

  /*
    見出しの言葉は、途中で折らない。「徒手系の技」で改行されると読みにくい。
    どうしても収まらないときだけ折る（overflow-wrap: break-word が効く）
  */
  th,
  td {
    word-break: keep-all;
  }

  /*
    分類のように、同じ言葉が何行にもまたがる列。
    縦に書くと1行ぶんの幅で済み、残りを本文の列に回せる。
    縦書きでは text-align が上下方向の揃えになるので、中央は center で指定する
  */

  /*
    縦書きの列の見出し。中身が縦なので、見出しも縦に立てる。
    横のままだと、細い列に「大分類」の3文字が収まらずはみ出す
  */
  .scroller.vertical-header thead th:first-child {
    padding: $space-size-12 $space-size-2;
    line-height: 1.2;
    writing-mode: vertical-rl;
    text-orientation: upright;
    white-space: nowrap;
  }

  /*
    書いてある改行だけで折る表。冊子の難度表のように、改行の位置そのものが
    読みやすさを作っているもの。収まらないときは入れ物の中で横に送る
  */
  .scroller.keep-breaks th,
  .scroller.keep-breaks td {
    white-space: pre;
  }

  /*
    改行を守る表は、列の幅を中身に合わせる。
    幅を割り当てると、折り返さない文字がます目からはみ出してしまう。
    中身に合わせれば、どの画面でも同じ形のまま横に送るだけで済む
  */
  .scroller.keep-breaks table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
  }

  .scroller.keep-breaks .row-header:first-child {
    white-space: nowrap;
  }

  .scroller.vertical-header .row-header:first-child {
    min-width: 0;

    // 縦書きでは行の高さが横幅になる。1.7 のままだと列に収まらず、字が切れる
    padding: $space-size-12 $space-size-2;
    line-height: 1.2;
    writing-mode: vertical-rl;

    // 数字や英字も縦のまま立てる。既定では横倒しになり「静止2秒以上」の 2 だけが寝てしまう
    text-orientation: upright;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }

  // 通し番号だけが入る行の見出し。本文と同じ幅を取ると、番号1つのために広い列ができる
  .scroller.short-row-header .row-header {
    min-width: 3em;
    text-align: center;
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
  .scroller:not(.matrix, .uniform) thead th.narrow {
    white-space: normal;
  }

  /*
    中身が「A」「0.1」しか入らない表。最小の幅を外して中身の幅に任せ、
    折り返しもしない。狭い画面でも収まるので、横へ送らせずに済む
  */
  .scroller.compact th,
  .scroller.compact td {
    // 1列あたりの最小の幅は決めない。横へ送らずに収めるため
    min-width: 0;
    white-space: nowrap;
  }

  // 中身が短いぶん、列を等分して表を入れ物いっぱいに広げる。
  // 中身の幅で止めると、右に白い余白が残って落ち着かない
  .scroller.compact table {
    table-layout: fixed;
  }

  /*
    中身が短い表は列を等分するので、幅を詰める指定は要らない。
    そのままだと列が 1% になり、等分の指定とぶつかって中身がはみ出す
  */
  .scroller.compact td.narrow,
  .scroller.compact th.narrow {
    width: auto;
  }

  /*
    幅を px で決めた表。画面の幅が変わっても形が変わらない。
    紙に出したものと画面とで同じに見せるため、採点票はこちらを使う
  */
  table.pixel-sized {
    min-width: 0;
    table-layout: fixed;
  }

  .pixel-sized th,
  .pixel-sized td {
    min-width: 0;
    padding: $space-size-4;
    font-size: $font-size-10;
    line-height: 1.5;
  }

  /*
    列ごとの幅を決めた表は、その割り当てどおりに並べる。

    割り当てどおりに並べると、ます目ごとの最小の幅は効かなくなる。
    そのままだと狭い画面で列がどれも潰れるので、表そのものに最小の幅を決めて、
    入らないときは入れ物の中で横に送る
  */
  table.sized {
    min-width: 50em;
    table-layout: fixed;
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

  /*
    2段目から下は、左に寄せて親からぶら下げる。

    線は「ぶら下がっている一覧」ではなく「子ひとつずつ」に引く。
    一覧の左端に1本の線を引くと、その線が子のさらに下の段の並びを
    縦に貫いてしまい、親から出た線が孫の線へ合流しているように見える。
    子ごとに引けば、線は親と子の間だけを結び、最後の子のところで止まる
  */
  ul.tree:not(.root) {
    // 線を引く場所を空けるための下げ幅
    padding-left: $space-size-24;
  }

  /*
    段が下がるほど、親の箱の右寄りから線が出るようにする。
    左端から出すと、どの段の線も同じ位置から始まり、段が下がったことが分からない
  */
  ul.tree.leaf {
    margin-left: $space-size-24;
  }

  ul.tree > li {
    position: relative;
    padding: $space-size-4 0;
  }

  // 親から下りてくる縦の線。最後の子では、その子の高さの半分で止める
  ul.tree:not(.root) > li::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: -$space-size-24;
    width: 0;
  }

  // 途中の子では、次の子へ渡すために下まで引く
  ul.tree:not(.root) > li:not(:last-child)::after {
    bottom: 0;
  }

  // 縦の線から箱へ伸びる、横の枝
  ul.tree:not(.root) > li::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -$space-size-24;
    width: $space-size-24;
  }

  // 上の段から中の段へ下りる線は紺。中の段から下は淡い青にして、深さが分かるようにする
  ul.tree.middle > li::before {
    border-top: $border-size-2 solid map.get($sky-blue, 900);
  }

  ul.tree.middle > li::after {
    border-left: $border-size-2 solid map.get($sky-blue, 900);
  }

  ul.tree.leaf > li::before {
    border-top: $border-size-1 solid map.get($sky-blue, border);
  }

  ul.tree.leaf > li::after {
    border-left: $border-size-1 solid map.get($sky-blue, border);
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

  // 席が画面に収まらないときは、この中だけで横に送る
  .seating-scroller {
    overflow-x: auto;
  }

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

  /*
    席の並び。紙面では前列の真ん中に後列が並ぶので、数の少ない列は真ん中に寄せる。

    折り返さない。折り返すと1つの列が2列に見えてしまい、
    どの席がどの列なのかが読めなくなる。狭い画面では入れ物の中で横に送る
  */
  .seats {
    display: flex;
    gap: $space-size-4;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: nowrap;
  }

  .seat {
    flex: none;
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
