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

  /** 表の上に置く得点の欄。1ページ大の用紙だけに出る */
  const topTotals = $derived(fullPage ? (paper.totals ?? []).filter(isPreDeductionTotal) : [])

  /** 表の下に置く合計の欄 */
  const bottomTotals = $derived((paper.totals ?? []).filter((total) => !topTotals.includes(total)))

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
      1ページ大の用紙の記入欄。冊子では名前と書き込む枠が横に並んだ表になっている。
      横に並べると狭い画面で枠が潰れるので、1行に1つずつ縦に積む
    -->
    <dl class="field-boxes">
      {#each paper.fields as field, index (index)}
        <dt>{field}</dt>
        <dd></dd>
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

<div class="paper-outer">
  {#if paper.event}
    <!-- 大会名。冊子では用紙の枠の外、右上に刷ってある -->
    <p class="event">{paper.event}</p>
  {/if}

  <div class="paper">
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

    {@render children()}

    {#if bottomTotals.length > 0}
      <!-- 合計の欄。冊子では名前の枠と、書き込む広い枠が横に並ぶ -->
      <dl class="totals">
        {#each bottomTotals as total (total)}
          <!-- 名前の無い欄は、冊子79ページのいちばん下にある空白の枠。審判が自由に書き込む場所 -->
          <dt class:memo={total === ''}>{total}</dt>
          <dd class:memo={total === ''}></dd>
        {/each}
      </dl>
    {/if}

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
    696px は A4 の縦（左右10mm の余白を取って約718px）に収まる幅
  */
  .paper {
    box-sizing: border-box;
    width: 696px;
    padding: $space-size-16;
    border: $border-size-1 solid map.get($gray, 300);
    border-radius: $border-radius-4;
    background: $white;
  }

  // 大会名。冊子では用紙の枠の外、右上に刷ってある
  .event {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    color: map.get($gray, text);
    text-align: right;
  }

  // 用紙の名前。冊子では紙の上に大きく書いてある
  .paper-title {
    margin: 0 0 $space-size-12;
    font-size: $font-size-14;
    font-weight: bold;
    text-align: center;
    color: map.get($gray, text);
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

  .signatures {
    margin-top: $space-size-12;
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

  // 枠で囲む記入欄。冊子62ページの「チーム・番号」「選手・番号」など

  /*
    枠囲みの記入欄。冊子では名前と書き込む場所が横に並び、その組が左から続く。
    名前の列と書き込む列が交互に並ぶよう、2列ずつの繰り返しにする
  */

  /*
    枠囲みの記入欄。冊子では名前と書き込む場所が横に並び、その組が左から続く。

    線はます目ごとに右と下だけ持ち、上と左の縁だけを入れ物に持たせる。
    入れ物とます目の両方が線を引くと、境目が二重に見えてしまう
  */
  .field-boxes {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    border-top: $border-size-1 solid map.get($gray, 300);
    border-left: $border-size-1 solid map.get($gray, 300);
    flex-wrap: wrap;
  }

  .field-boxes dt {
    padding: $space-size-8 $space-size-12;
    border-right: $border-size-1 solid map.get($gray, 300);
    border-bottom: $border-size-1 solid map.get($gray, 300);
    background-color: map.get($gray, background);
    white-space: nowrap;
  }

  .field-boxes dd {
    min-width: $space-size-48;
    min-height: $space-size-24;
    margin: 0;
    border-right: $border-size-1 solid map.get($gray, 300);
    border-bottom: $border-size-1 solid map.get($gray, 300);
    flex: 1 1 $space-size-48;
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

  // 合計の欄。冊子では名前の枠と、書き込む広い枠が横に並ぶ
  .totals {
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
    margin: $space-size-12 0 0;
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
    名前の無い合計の欄。冊子79ページのいちばん下にある、何も刷っていない四角い枠で、
    審判が自由に書き込む場所。名前の列を作らず、1行を丸ごと使う
  */
  .totals dt.memo {
    display: none;
  }

  .totals dd.memo {
    grid-column: 1 / -1;
    min-height: $space-size-120;
  }
</style>
