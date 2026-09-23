<script lang="ts">
  import type { Snippet } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import { ApparatusKind } from '@entities/rule'
  import type { RulePaper } from '@entities/rule'
  import ApparatusMark from './ApparatusMark.svelte'

  const {
    paper,
    caption,
    children,
  }: {
    /** 表のまわりにある欄 */
    paper: RulePaper
    /** 用紙の名前 */
    caption: string
    /** 表そのもの */
    children: Snippet
  } = $props()

  /** 手具の名前。冊子の採点票に並んでいる順に出す */
  const APPARATUS_LABELS: Record<ApparatusKind, () => string> = {
    [ApparatusKind.STICK]: m.rules_apparatus_stick,
    [ApparatusKind.RING]: m.rules_apparatus_ring,
    [ApparatusKind.ROPE]: m.rules_apparatus_rope,
    [ApparatusKind.CLUBS]: m.rules_apparatus_clubs,
  }

  /**
   * 表の上に置く得点の欄。
   *
   * @remarks
   * 冊子62ページの審判長減点表では、この4つだけが表より上、手具の枠の下に並んでいる。
   * ほかの合計（減点合計・最終得点など）は表の下にある
   */
  const PRE_DEDUCTION_TOTALS: readonly string[] = ['D', 'A', 'E', '減点前得点']

  /**
   * 表の左に置く、背の高い空欄の印。
   *
   * @remarks
   * 冊子79ページでは、紙面の左半分が何も刷っていない大きな枠になっていて、
   * 審判が演技を見ながら自由に書き込む。表のます目ではないので表からは外し、
   * この名前が欄の並びにあるときだけ、表の左に枠として置く。
   * 名前そのものは紙面に刷られていないので、画面にも出さない
   */
  const SIDE_MEMO_TOTAL = 'メモ'

  /** 名前の無い欄の印。冊子79ページのいちばん下にある、何も刷っていない四角い枠 */
  const BLANK_TOTAL = ''

  /** 加点の欄の名前。冊子78ページでは、難度の表とは別の小さな表になっている */
  const BONUS_TOTAL = '加点'

  /** 得点の枠の名前。冊子78ページでは、紙面の右下に枠が1つだけ置いてある */
  const SCORE_BOX_TOTAL = '得点'

  /**
   * 冊子で1つずつ離れた枠になっている欄。
   *
   * @remarks
   * 冊子62ページの「減点合計」「最終得点」は線を共有して続けて並ぶが、
   * 78・79ページの欄はそれぞれ独立した枠で、間が空けてある。
   * この欄がある用紙は、下の欄を続けずに間を空けて置く
   */
  const DETACHED_TOTALS: readonly string[] = [BONUS_TOTAL, SCORE_BOX_TOTAL, BLANK_TOTAL]

  /** 加点の表の、内容の列の見出し。冊子78ページのまま */
  const BONUS_CONTENT_LABEL = '内容'

  /**
   * 加点の表に刷ってある4つの項目。
   *
   * @remarks
   * 出典は 新体操男子規則 2025年版 3 採点規則 3.8.10 個人徒手採点表「D採点表」（78ページ）。
   * 冊子では難度の表とは別の表になっていて、1つの図に表は1つしか持てない。
   * 表のまわりの欄としてここで描くので、刷ってある言葉もここに持たせてある
   */
  const BONUS_ITEMS: readonly string[] = [
    '（1）　異なるB難度の跳躍の連続',
    '（2）　（1）の中にC難度以上の跳躍が含まれていた場合',
    '（3）　A難度とB難度の連続した転回',
    '（4）　B難度を含む４回以上の異なる転回技の連続',
  ]

  /** 加点の表の右に刷ってある但し書き */
  const BONUS_NOTE = '※（1）（2）はどちらか一方のみ'

  /** 但し書きの欄が、上から何行ぶんを使うか。冊子では（1）（2）の2行にまたがっている */
  const BONUS_NOTE_ROWS = 2

  /**
   * 2段の記入欄の、1つぶんの幅（px）。
   *
   * @remarks
   * 名前がこれより長い欄は、名前が折り返さないところまで広がる。
   * 用紙の幅いっぱいに引き伸ばすと、書き込む場所のわりに欄が大きくなりすぎる
   */
  const FIELD_BOX_WIDTH = 84

  /** 記入欄を、名前の行とます目の行の2段で出す最小の欄の数 */
  const FIELD_HEADER_ROW_MIN = 3

  /**
   * 冊子で1ページを丸ごと使う用紙か。
   *
   * @remarks
   * 冊子は、はがき大の用紙を「採点票」、1ページ大の用紙を「採点表」「減点表」と書き分けている。
   * 1ページ大のほうは記入欄が枠で囲まれていて、はがき大のほうは線を引いてあるだけ、
   * というように紙面の作りそのものが違う。
   *
   * ただし個人徒手の3枚（77・78・79ページ）は、79ページだけが「E採点票」という名前でも
   * 1ページを丸ごと使い、記入欄も枠で囲んである。名前ではなく紙面に合わせて数える
   *
   * @param name - 用紙の名前
   * @returns 1ページ大の用紙なら true
   */
  const isFullPagePaper = (name: string): boolean =>
    name.includes('採点表') || name.includes('減点表') || name.startsWith('個人徒手')

  /** 1ページ大の用紙か */
  const fullPage = $derived(isFullPagePaper(caption))

  /**
   * 表の上に置く得点の欄を拾う
   * @param label - 欄の名前
   * @returns 表の上に置くなら true
   */
  const isPreDeductionTotal = (label: string): boolean => PRE_DEDUCTION_TOTALS.includes(label)

  /**
   * 冊子で1つずつ離れた枠になっている欄か
   * @param label - 欄の名前
   * @returns 離して置くなら true
   */
  const isDetachedTotal = (label: string): boolean => DETACHED_TOTALS.includes(label)

  /**
   * 記入欄を、名前の行とます目の行の2段で出すか。
   *
   * @remarks
   * 冊子77・79ページの記入欄は、上の行に「No.／所属　名／カテゴリー」と名前が横に並び、
   * その下に書き込むためのます目が並ぶ2段の表になっている。
   * 冊子62ページのように名前が2つだけの用紙は、名前とます目の組が縦に積んである
   *
   * @param fields - 記入欄の名前
   * @returns 2段で出すなら true
   */
  const usesFieldHeaderRow = (fields: readonly string[]): boolean =>
    fields.length >= FIELD_HEADER_ROW_MIN

  /**
   * 記入欄の列の割り当て。
   *
   * @remarks
   * 2段のときは欄の数だけ列を作り、どの列も名前が折り返さないだけの幅を取ってから、
   * 残りを等分する。縦に積むときは、名前の列と書き込む列の2列にする
   *
   * @param fields - 記入欄の名前
   * @returns grid-template-columns に渡す値
   */
  const fieldColumns = (fields: readonly string[]): string =>
    usesFieldHeaderRow(fields)
      ? `repeat(${fields.length}, minmax(max-content, ${FIELD_BOX_WIDTH}px))`
      : // 縦に積むときも、書き込む列に幅を持たせる。
        // 1fr だけだと、欄ぜんたいを中身の幅で止めているぶん、中身の無い列が潰れる
        `max-content minmax(${FIELD_BOX_WIDTH * 2}px, 1fr)`

  /**
   * 記入欄の名前を、何列目・何行目に置くか
   * @param fields - 記入欄の名前
   * @param index - 何番目の欄か（0 から数える）
   * @returns 列と行の指定
   */
  const fieldNamePlace = (
    fields: readonly string[],
    index: number,
  ): { column: number; row: number } =>
    usesFieldHeaderRow(fields) ? { column: index + 1, row: 1 } : { column: 1, row: index + 1 }

  /**
   * 記入欄のます目を、何列目・何行目に置くか
   * @param fields - 記入欄の名前
   * @param index - 何番目の欄か（0 から数える）
   * @returns 列と行の指定
   */
  const fieldBoxPlace = (
    fields: readonly string[],
    index: number,
  ): { column: number; row: number } =>
    usesFieldHeaderRow(fields) ? { column: index + 1, row: 2 } : { column: 2, row: index + 1 }

  /** 表の上に置く得点の欄。1ページ大の用紙だけに出る */
  const topTotals = $derived(fullPage ? (paper.totals ?? []).filter(isPreDeductionTotal) : [])

  /** 表の左に、背の高い空欄を置く用紙か */
  const hasSideMemo = $derived((paper.totals ?? []).includes(SIDE_MEMO_TOTAL))

  /** 表の下に置く合計の欄。表の上と左に出すものは、ここからは外す */
  const bottomTotals = $derived(
    (paper.totals ?? []).filter((total) => !topTotals.includes(total) && total !== SIDE_MEMO_TOTAL),
  )

  /** 表の下の欄を、1つずつ離して置くか */
  const detached = $derived(bottomTotals.some(isDetachedTotal))

  /** 表より上に出すものがあるか。78ページのように、表だけの用紙もある */
  const hasHead = $derived(
    paper.categories !== undefined ||
      paper.apparatus !== undefined ||
      paper.mark !== undefined ||
      paper.fields !== undefined ||
      topTotals.length > 0,
  )
</script>

<!--
  審判が書き込む用紙。冊子の紙面をなぞって、表のまわりの欄まで出す。
  どの欄も書き込む場所なので、中身は空のまま枠だけを置く
-->

{#snippet categoryBoxes()}
  {#if paper.categories}
    <!-- 種別。冊子ではどちらかに丸を付けて使うので、枠を並べておく -->
    <ul class="categories">
      {#each paper.categories as category (category)}
        <li>{category}</li>
      {/each}
    </ul>
  {/if}
{/snippet}

{#snippet markBadge()}
  {#if paper.mark}
    <!-- 「難度 D」のような印。冊子では名前が上、印が下の枠に入る -->
    <div class="badge">
      {#if paper.markLabel}<span class="badge-label">{paper.markLabel}</span>{/if}
      <span class="badge-mark">{paper.mark}</span>
    </div>
  {/if}
{/snippet}

{#snippet apparatusBoxes()}
  {#if paper.apparatus}
    <!-- 手具の欄。1ページ大の用紙では、冊子と同じく絵の上に名前が入る -->
    <ul class="apparatus">
      {#each paper.apparatus as kind (kind)}
        <li>
          {#if fullPage}<span class="apparatus-name">{APPARATUS_LABELS[kind]()}</span>{/if}
          <ApparatusMark {kind} label={APPARATUS_LABELS[kind]()} />
        </li>
      {/each}
    </ul>
  {/if}
{/snippet}

{#snippet fieldLines()}
  {#if paper.fields}
    <!-- はがき大の用紙の記入欄。冊子と同じく、名前の右に線を引く -->
    <dl class="field-lines">
      {#each paper.fields as field, index (index)}
        <div class="field-line" class:nameless={field === ''}>
          <dt>{field}</dt>
          <dd><span class="blank-line"></span></dd>
        </div>
      {/each}
    </dl>
  {/if}
{/snippet}

{#snippet fieldBoxes()}
  {#if paper.fields}
    <!--
      1ページ大の用紙の記入欄。冊子77・79ページでは、上の行に名前が横に並び、
      その下に書き込むための空のます目が並ぶ2段の表になっている。
      冊子62ページのように名前が2つだけの用紙は、名前とます目の組を縦に積む
    -->
    <dl class="field-boxes" style:grid-template-columns={fieldColumns(paper.fields)}>
      {#each paper.fields as field, index (index)}
        {@const name = fieldNamePlace(paper.fields, index)}
        {@const box = fieldBoxPlace(paper.fields, index)}
        <dt style:grid-column={name.column} style:grid-row={name.row}>{field}</dt>
        <dd style:grid-column={box.column} style:grid-row={box.row}></dd>
      {/each}
    </dl>
  {/if}
{/snippet}

{#snippet preDeductionTotals()}
  {#if topTotals.length > 0}
    <!-- 減点前の得点。冊子62ページでは、手具の枠の下に横に並んでいる -->
    <dl class="score-row">
      {#each topTotals as total (total)}
        <div class="score-cell">
          <dt>{total}</dt>
          <dd></dd>
        </div>
      {/each}
    </dl>
  {/if}
{/snippet}

{#snippet bonusTable()}
  <!--
    加点の欄。冊子78ページでは、難度の表とは別の表になっていて、
    左に「加点」、上に「内容」の見出しがあり、その下に（1）〜（4）が縦に並ぶ。
    右の欄には「※（1）（2）はどちらか一方のみ」が（1）（2）の2行にまたがって刷ってある
  -->
  <table class="bonus">
    <tbody>
      <tr>
        <th scope="row" class="bonus-label" rowspan={BONUS_ITEMS.length + 1}>{BONUS_TOTAL}</th>
        <th scope="col" class="bonus-head">{BONUS_CONTENT_LABEL}</th>
        <td class="bonus-note-head"></td>
      </tr>
      {#each BONUS_ITEMS as item, index (item)}
        <tr>
          <td>{item}</td>
          {#if index === 0}
            <td class="bonus-note" rowspan={BONUS_NOTE_ROWS}>{BONUS_NOTE}</td>
          {:else if index >= BONUS_NOTE_ROWS}
            <td></td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
{/snippet}

{#snippet totalBoxes()}
  {#if bottomTotals.length > 0}
    {#if detached}
      <!-- 冊子78・79ページ。下の欄は1つずつ離れた枠なので、間を空けて縦に並べる -->
      {#each bottomTotals as total (total)}
        {#if total === BONUS_TOTAL}
          {@render bonusTable()}
        {:else if total === SCORE_BOX_TOTAL}
          <!-- 冊子78ページの右下にある得点の欄。名前の枠と書き込む枠を横に並べ、右に寄せる -->
          <dl class="total-box score-box">
            <dt>{total}</dt>
            <dd></dd>
          </dl>
        {:else if total === BLANK_TOTAL}
          <!-- 冊子79ページのいちばん下にある、何も刷っていない四角い枠 -->
          <div class="memo-box"></div>
        {:else}
          <!-- 名前の枠と、書き込む広い枠が横に並ぶ欄 -->
          <dl class="total-box">
            <dt>{total}</dt>
            <dd></dd>
          </dl>
        {/if}
      {/each}
    {:else}
      <!-- 合計の欄。冊子62ページでは、線を共有して続けて並ぶ -->
      <dl class="totals">
        {#each bottomTotals as total (total)}
          <dt>{total}</dt>
          <dd></dd>
        {/each}
      </dl>
    {/if}
  {/if}
{/snippet}

{#snippet signatureLines()}
  {#if paper.signatures}
    <dl class="signatures">
      {#each paper.signatures as signature (signature)}
        <div class="field-line">
          <dt>{signature}</dt>
          <dd><span class="blank-line"></span></dd>
        </div>
      {/each}
    </dl>
  {/if}
{/snippet}

{#snippet paperMain()}
  {@render children()}
  {@render totalBoxes()}
  {@render signatureLines()}
{/snippet}

<div class="paper-outer">
  {#if paper.event && fullPage}
    <!-- 大会名。1ページ大の用紙では、冊子と同じく枠の外、右上に刷ってある -->
    <p class="event">{paper.event}</p>
  {/if}

  <div
    class="paper"
    class:card={!fullPage}
    style:--rule-paper-width={paper.width === undefined ? undefined : `${paper.width}px`}
  >
    {#if paper.event && !fullPage}
      <!-- はがき大の用紙は幅が狭い。大会名は枠の中の左上に入れる -->
      <p class="event in-paper">{paper.event}</p>
    {/if}

    <p class="paper-title">{caption}</p>

    {#if !hasHead}
      <!-- 表だけの用紙。冊子78ページのように、記入欄が前のページにあるもの -->
    {:else if fullPage}
      <div class="page-head">
        <div class="page-head-left">
          {@render fieldBoxes()}
        </div>
        <div class="page-head-right">
          {@render categoryBoxes()}
          {@render apparatusBoxes()}
          {@render markBadge()}
          {@render preDeductionTotals()}
        </div>
      </div>
    {:else}
      <div class="card-head">
        {@render categoryBoxes()}
        <div class="card-marks">
          {@render markBadge()}
          {@render apparatusBoxes()}
        </div>
        {@render fieldLines()}
      </div>
    {/if}

    {#if hasSideMemo}
      <!-- 冊子79ページ。左に背の高い空欄、右に採点の表と下の欄が並ぶ -->
      <div class="paper-body">
        <div class="side-memo"></div>
        <div class="stack main" class:detached>
          {@render paperMain()}
        </div>
      </div>
    {:else}
      <div class="stack" class:detached>
        {@render paperMain()}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .paper-outer {
    width: 100%;
  }

  /*
    用紙。幅を px で決めてある。

    PC・スマホ・紙（PDF）のどれでも同じ形に見せたいので、画面の幅に合わせて
    伸び縮みさせない。狭い画面では、包んでいる入れ物の中で横に送る。
    680px は A4 の縦（左右10mm の余白を取って約718px）に収まる幅で、
    紙の端まで38px の余裕がある。

    左右の余白を 8px にすると、中身の幅が表と同じ 662px になる。
    そろえておかないと、表の上に置く印や記入欄が表より右へはみ出す
  */
  .paper {
    box-sizing: border-box;
    width: var(--rule-paper-width, 680px);
    padding: $space-size-16 $space-size-8;
    border: $border-size-1 solid map.get($gray, 300);
    border-radius: $border-radius-4;
    background: $white;
  }

  /*
    はがき大の用紙（冊子61ページの4枚）。幅が 264px しかないので、
    1ページ大の用紙と同じ余白のままだと、印と手具、審判No.と署名が
    それぞれ折り返して縦に積み上がってしまう。横に並ぶところまで詰める
  */
  .paper.card .card-marks {
    gap: $space-size-8;

    // 冊子61ページと同じく、印は左、手具は右の端に寄せる
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .paper.card .badge {
    padding: $space-size-4 $space-size-8;
  }

  .paper.card .apparatus li {
    padding: $space-size-4;
  }

  /*
    署名の欄。はがき大の用紙は欄が2つか3つしかないので、2列に並べる。
    冊子61ページの line・time 採点票は「線審 No.1．2」と「計時」が横に並び、
    その下に署名が1行を丸ごと使う。欄が奇数のときは最後の1つを2列ぶんに伸ばす
  */
  .paper.card .signatures {
    display: grid;
    gap: $space-size-4 $space-size-8;
    grid-template-columns: 1fr 1fr;
  }

  .paper.card .signatures .field-line:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  // 大会名。冊子では用紙の枠の外、右上に刷ってある
  .event {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    color: map.get($gray, text);
    text-align: right;
  }

  // はがき大の用紙では枠の中に入れる。用紙の名前より上の左端に置く
  .event.in-paper {
    text-align: left;
  }

  // 用紙の名前。冊子では紙の上に大きく書いてある
  .paper-title {
    margin: 0 0 $space-size-12;
    font-size: $font-size-14;
    font-weight: bold;
    text-align: center;
    color: map.get($gray, text);
  }

  /* ─── 表と、その下の欄の並び ─── */

  // 冊子の並びのまま、表と下の欄を縦に積む
  .stack {
    display: flex;
    gap: $space-size-12;
    flex-direction: column;
  }

  /*
    冊子78・79ページのように、下の欄が1つずつ独立した枠になっている用紙。
    枠の間を同じだけ空けて、紙面と同じ間隔で並べる
  */
  // 離して置く欄の間
  .stack.detached {
    gap: $space-size-16;
  }

  // 冊子79ページ。左に背の高い空欄、右に採点の表と下の欄が並ぶ
  .paper-body {
    display: flex;
    gap: $space-size-12;
    align-items: stretch;
  }

  /*
    左の空欄。審判が演技を見ながら自由に書き込む場所で、冊子では紙面の左半分を占める。
    右の表は幅を px で決めてあるので、残った幅をこちらが受け取る
  */
  .side-memo {
    min-width: 0;
    border: $border-size-1 solid map.get($gray, 300);
    flex: 1 1 auto;
  }

  // 右側。表の幅のまま置き、下の欄もその幅にそろえる
  .stack.main {
    max-width: 100%;
    flex: 0 0 auto;
  }

  /* ─── はがき大の用紙（採点票） ─── */

  /*
    冊子61ページの4枚。上から順に、種別の枠、印と手具の枠、選手名の欄と並ぶ
  */
  .card-head {
    display: flex;
    gap: $space-size-12;
    flex-direction: column;
    margin-bottom: $space-size-12;
  }

  // 種別の枠は、冊子と同じく紙の真ん中上に置く
  .card-head .categories {
    justify-content: center;
  }

  .card-marks {
    display: flex;
    gap: $space-size-12;
    align-items: stretch;
    flex-wrap: wrap;
  }

  /* ─── 1ページ大の用紙（採点表・減点表） ─── */

  /*
    冊子62・77・79ページ。左に記入欄の表、右に種別・手具・印・減点前の得点が並ぶ
  */
  .page-head {
    display: flex;
    gap: $space-size-16;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: $space-size-12;
    flex-wrap: wrap;
  }

  .page-head-left {
    min-width: 0;
    flex: 1 1 14em;
  }

  .page-head-right {
    display: flex;
    gap: $space-size-8;
    flex-direction: column;
    align-items: flex-end;
    min-width: 0;
  }

  /* ─── 表のまわりの部品 ─── */

  // 「難度 D」のような印。冊子では名前が上、印が下
  .badge {
    display: flex;
    gap: $space-size-2;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 5em;
    padding: $space-size-4 $space-size-12;
    border: $border-size-1 solid map.get($gray, 300);
    align-items: center;
    justify-content: center;
    align-self: flex-start;
  }

  .badge-label {
    font-size: $font-size-10;
    color: map.get($gray, light-text);
    white-space: nowrap;
  }

  .badge-mark {
    font-size: $font-size-18;
    font-weight: bold;
    line-height: 1.2;
    color: map.get($gray, text);
    text-align: center;

    // 「line」「time」のように2段で刷ってある印は、改行をそのまま出す
    white-space: pre-line;
  }

  // 種別（団体・個人）。冊子ではどちらかに丸を付けて使う
  .categories {
    display: flex;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
  }

  .categories li {
    padding: $space-size-4 $space-size-16;
    font-size: $font-size-14;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 300);
  }

  // 手具の欄。冊子では4つの枠が横につながっている
  .apparatus {
    display: flex;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    border: $border-size-1 solid map.get($gray, 300);
  }

  .apparatus li {
    display: flex;
    gap: $space-size-2;
    place-items: center;
    padding: $space-size-4 $space-size-8;
    flex-direction: column;
  }

  .apparatus li + li {
    border-left: $border-size-1 solid map.get($gray, 300);
  }

  .apparatus-name {
    font-size: $font-size-10;
    color: map.get($gray, light-text);
    white-space: nowrap;
  }

  // 名前の右に線を引く記入欄。冊子61ページの選手名や、いちばん下の署名の欄
  .field-lines,
  .signatures {
    display: flex;
    gap: $space-size-8 $space-size-16;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    flex-wrap: wrap;
  }

  .field-line {
    display: flex;
    gap: $space-size-8;
    min-width: 0;
    flex: 1 1 12em;
    align-items: baseline;
  }

  // 名前の無い欄は、冊子で選手名の下に引いてある続きの線。1行を丸ごと使う
  .field-line.nameless {
    flex-basis: 100%;
  }

  .field-line dt {
    white-space: nowrap;
  }

  .field-line dd {
    min-width: 0;
    margin: 0;
    flex: 1;
  }

  .blank-line {
    display: block;
    height: 1em;
    border-bottom: $border-size-1 solid map.get($gray, 300);
  }

  /*
    枠囲みの記入欄。冊子77・79ページでは、上の行に「No.／所属　名／カテゴリー」と
    名前が横に並び、その下に書き込むための空のます目が同じ幅で並ぶ。
    名前とます目を交互に置くと、どこに書けばよいのか分からないので、必ず2段にする。
    列と行の指定は、欄の数に合わせてその場で付ける。

    線はます目ごとに右と下だけ持ち、上と左の縁だけを入れ物に持たせる。
    入れ物とます目の両方が線を引くと、境目が二重に見えてしまう
  */
  .field-boxes {
    display: grid;
    box-sizing: border-box;

    // 中身の幅で止める。用紙の幅いっぱいには引き伸ばさない
    width: fit-content;
    max-width: 100%;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border-top: $border-size-1 solid map.get($gray, 300);
    border-left: $border-size-1 solid map.get($gray, 300);
  }

  .field-boxes dt {
    padding: $space-size-4 $space-size-8;
    border-right: $border-size-1 solid map.get($gray, 300);
    border-bottom: $border-size-1 solid map.get($gray, 300);
    background-color: map.get($gray, background);
    text-align: center;
    white-space: nowrap;
  }

  .field-boxes dd {
    min-height: $space-size-24;
    margin: 0;
    border-right: $border-size-1 solid map.get($gray, 300);
    border-bottom: $border-size-1 solid map.get($gray, 300);
  }

  // 減点前の得点。冊子62ページでは「D／A／E／減点前得点」が横に並ぶ
  .score-row {
    display: flex;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 300);
  }

  /*
    欄の幅は、名前が折り返さないだけ取る。
    幅の起点を 0 にすると「減点前得点」の5文字が 4em に押し込まれ、枠からはみ出す
  */
  .score-cell {
    min-width: 4em;
    flex: 1 1 auto;
  }

  .score-cell + .score-cell {
    border-left: $border-size-1 solid map.get($gray, 300);
  }

  .score-cell dt {
    padding: $space-size-4 $space-size-8;
    border-bottom: $border-size-1 solid map.get($gray, 300);
    background: map.get($gray, background);
    text-align: center;
    white-space: nowrap;
  }

  .score-cell dd {
    min-height: $space-size-24;
    margin: 0;
  }

  // 合計の欄。冊子62ページでは、名前の枠と書き込む広い枠が線を共有して続けて並ぶ
  .totals {
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 300);
  }

  .totals dt {
    padding: $space-size-8 $space-size-12;
    font-weight: bold;
    border-right: $border-size-1 solid map.get($gray, 300);
    background: map.get($gray, background);
    white-space: pre-line;
  }

  .totals dd {
    min-height: $space-size-32;
    margin: 0;
  }

  .totals dt:not(:first-of-type),
  .totals dd:not(:first-of-type) {
    border-top: $border-size-1 solid map.get($gray, 300);
  }

  /*
    1つずつ離れた枠の欄。冊子78ページの「要素減点」、79ページの B と得点。
    名前の枠と、書き込む広い枠が横に並ぶ
  */
  .total-box {
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($gray, 300);
  }

  .total-box dt {
    padding: $space-size-8 $space-size-12;
    font-weight: bold;
    border-right: $border-size-1 solid map.get($gray, 300);
    background: map.get($gray, background);
    white-space: pre-line;
  }

  .total-box dd {
    min-height: $space-size-32;
    margin: 0;
  }

  // 冊子78ページの右下にある得点の欄。紙面と同じく右に寄せる
  .score-box {
    width: $space-size-160;
    align-self: flex-end;
  }

  // 冊子79ページのいちばん下にある、何も刷っていない四角い枠
  .memo-box {
    min-height: $space-size-120;
    border: $border-size-1 solid map.get($gray, 300);
  }

  /*
    加点の欄。冊子78ページでは難度の表とは別の表で、
    左に「加点」、上に「内容」の見出しがあり、その下に（1）〜（4）が縦に並ぶ
  */
  .bonus {
    width: 100%;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border-top: $border-size-1 solid map.get($gray, 300);
    border-left: $border-size-1 solid map.get($gray, 300);
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }

  .bonus th,
  .bonus td {
    padding: $space-size-4 $space-size-8;
    border-right: $border-size-1 solid map.get($gray, 300);
    border-bottom: $border-size-1 solid map.get($gray, 300);
    line-height: 1.5;
    text-align: left;
    vertical-align: middle;
  }

  // 左の「加点」。冊子では表の高さいっぱいの1つのます目
  .bonus th.bonus-label {
    width: $space-size-120;
    font-weight: bold;
    background-color: map.get($gray, background);
    text-align: center;
  }

  // 「内容」の見出し
  .bonus th.bonus-head {
    background-color: map.get($gray, background);
    text-align: center;
  }

  // 但し書きの欄の幅。いちばん上の行で決まるので、見出しの行に持たせる
  .bonus-note-head {
    width: $space-size-160;
  }

  // 右の但し書き。冊子では（1）（2）の2行にまたがって刷ってある
  .bonus-note {
    font-size: $font-size-11;
    vertical-align: top;
  }
</style>
