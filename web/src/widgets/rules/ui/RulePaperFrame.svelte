<script lang="ts">
  import type { Snippet } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import { ApparatusKind } from '@entities/rule'
  import type { RulePaper } from '@entities/rule'
  import { pageData } from '@shared/lib/device'
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

  const isMobile = $derived($pageData.isMobile)

  /** 手具の名前。冊子の採点票に並んでいる順に出す */
  const APPARATUS_LABELS: Record<ApparatusKind, () => string> = {
    [ApparatusKind.STICK]: m.rules_apparatus_stick,
    [ApparatusKind.RING]: m.rules_apparatus_ring,
    [ApparatusKind.ROPE]: m.rules_apparatus_rope,
    [ApparatusKind.CLUBS]: m.rules_apparatus_clubs,
  }
</script>

<!--
  審判が書き込む用紙。冊子の紙面をなぞって、表のまわりの欄まで出す。
  どの欄も書き込む場所なので、中身は空のまま枠だけを置く
-->
<div class="paper" class:mobile={isMobile}>
  <p class="paper-title">{caption}</p>

  <div class="head">
    <div class="head-left">
      {#if paper.event}
        <p class="event">{paper.event}</p>
      {/if}

      {#if paper.mark}
        <div class="badge">
          {#if paper.markLabel}<span class="badge-label">{paper.markLabel}</span>{/if}
          <span class="badge-mark">{paper.mark}</span>
        </div>
      {/if}

      {#if paper.fields}
        <dl class="fields">
          {#each paper.fields as field (field)}
            <dt>{field}</dt>
            <dd><span class="blank-line"></span></dd>
          {/each}
        </dl>
      {/if}
    </div>

    <div class="head-right">
      {#if paper.categories}
        <ul class="categories">
          {#each paper.categories as category (category)}
            <li>{category}</li>
          {/each}
        </ul>
      {/if}

      {#if paper.apparatus}
        <ul class="apparatus">
          {#each paper.apparatus as kind (kind)}
            <li>
              <span class="apparatus-name">{APPARATUS_LABELS[kind]()}</span>
              <ApparatusMark {kind} label={APPARATUS_LABELS[kind]()} />
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>

  {@render children()}

  {#if paper.totals}
    <dl class="totals">
      {#each paper.totals as total (total)}
        <dt>{total}</dt>
        <dd><span class="blank-box"></span></dd>
      {/each}
    </dl>
  {/if}

  {#if paper.signatures}
    <dl class="signatures">
      {#each paper.signatures as signature (signature)}
        <dt>{signature}</dt>
        <dd><span class="blank-line"></span></dd>
      {/each}
    </dl>
  {/if}
</div>

<style lang="scss">
  .paper {
    box-sizing: border-box;
    width: 100%;
    padding: $space-size-16;
    border: $border-size-1 solid map.get($gray, 300);
    border-radius: $border-radius-4;
    background: $white;
  }

  .mobile.paper {
    padding: $space-size-12;
  }

  // 用紙の名前。冊子では紙の真ん中上に大きく書いてある
  .paper-title {
    margin: 0 0 $space-size-12;
    font-size: $font-size-14;
    font-weight: bold;
    text-align: center;
    color: map.get($gray, text);
  }

  .head {
    display: flex;
    gap: $space-size-16;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: $space-size-12;
    flex-wrap: wrap;
  }

  .head-left,
  .head-right {
    display: flex;
    gap: $space-size-8;
    flex-direction: column;
    min-width: 0;
  }

  .head-right {
    align-items: flex-end;
  }

  .event {
    margin: 0;
    font-size: $font-size-11;
    color: map.get($gray, light-text);
  }

  // 「難度 D」のような印。冊子では枠で囲ってある
  .badge {
    display: flex;
    gap: $space-size-4;
    align-items: baseline;
    box-sizing: border-box;
    padding: $space-size-4 $space-size-12;
    border: $border-size-1 solid map.get($gray, 300);
    align-self: flex-start;
  }

  .badge-label {
    font-size: $font-size-10;
    color: map.get($gray, light-text);
  }

  .badge-mark {
    font-size: $font-size-18;
    font-weight: bold;
    color: map.get($gray, text);
  }

  // 種別（団体競技・個人競技）。どちらかに丸を付けて使う
  .categories {
    display: flex;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    border: $border-size-1 solid map.get($gray, 300);
  }

  .categories li {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    color: map.get($gray, text);
  }

  .categories li + li {
    border-left: $border-size-1 solid map.get($gray, 300);
  }

  // 手具の欄。名前の下に絵が入る
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
  }

  // 書き込む欄。名前と、書き込む場所の線を横に並べる
  .fields,
  .signatures {
    display: flex;
    gap: $space-size-4 $space-size-12;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, text);
    flex-wrap: wrap;
    align-items: baseline;
  }

  .signatures {
    margin-top: $space-size-12;
  }

  .fields dt,
  .signatures dt {
    white-space: nowrap;
  }

  .fields dd,
  .signatures dd {
    min-width: 120px;
    margin: 0;
    flex: 1;
  }

  .blank-line {
    display: block;
    height: 1em;
    border-bottom: $border-size-1 solid map.get($gray, 300);
  }

  // 合計の欄。名前の右に書き込む枠を置く
  .totals {
    display: grid;
    gap: $space-size-4 $space-size-8;
    grid-template-columns: max-content 1fr;
    max-width: 320px;
    margin: $space-size-12 0 0;
    margin-left: auto;
    font-size: $font-size-12;
    color: map.get($gray, text);
  }

  .totals dd {
    margin: 0;
  }

  .blank-box {
    display: block;
    height: 1.8em;
    border: $border-size-1 solid map.get($gray, 300);
  }
</style>
