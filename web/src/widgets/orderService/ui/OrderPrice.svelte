<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import SectionHeading from './SectionHeading.svelte'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「料金」の引数 */
  interface Props {
    /** 見出しの上に出す小さなラベル */
    eyebrow: string
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの下に出す補足 */
    lead: string
    /** 何に対しての金額か（例: 1曲あたり） */
    unit: string
    /** 金額の表記（例: 5,000円〜） */
    amount: string
    /** 金額の下に並べる補足 */
    notes: string[]
    /** 相談の窓口（Instagram） */
    contactHref: string
    /** 相談のボタンの文言 */
    contactLabel: string
  }

  const { eyebrow, title, subtitle, lead, unit, amount, notes, contactHref, contactLabel }: Props =
    $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="price" class:mobile={isMobile} id="price">
  <div class="inner">
    <SectionHeading {eyebrow} {title} {subtitle} {lead} tone="amber" />

    <div class="card">
      <p class="unit">{unit}</p>
      <p class="amount">{amount}</p>

      <ul class="notes">
        {#each notes as note (note)}
          <li>{note}</li>
        {/each}
      </ul>

      <!-- 見積もりは無料であることを、金額のすぐ下で言い切る -->
      <p class="free">見積もりまでは無料です。金額を聞いてから決めてもらって構いません。</p>

      <a class="contact" href={contactHref} target="_blank" rel="noopener noreferrer">
        {contactLabel}
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  .price {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
  }

  // 縦に積むだけ。重ねない
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    box-sizing: border-box;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
    padding: $space-size-40 $space-size-32;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 10px;
    background: $white;
    text-align: center;
  }

  .mobile .card {
    padding: $space-size-24 $space-size-16;
  }

  .unit {
    margin: 0;
    padding: $space-size-4 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
  }

  .amount {
    margin: 0;
    font-size: $font-size-48;
    font-weight: bold;
    line-height: 1.2;
    color: map.get($gray, text);
    font-variant-numeric: tabular-nums;
    overflow-wrap: anywhere;
  }

  .mobile .amount {
    font-size: $font-size-40;
  }

  .notes {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .notes li {
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  .free {
    margin: 0;
    padding: $space-size-12 $space-size-16;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 8px;
    background: map.get($gray, background);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  // 料金を見た直後に相談へ進めるようにする。ボタンは青の塗り。黄はページ下の相談の節だけに残す
  .contact {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    min-height: 56px;
    margin-top: auto;
    padding: 0 $space-size-20;
    font-size: $font-size-18;
    font-weight: bold;
    color: $white;
    border-radius: 6px;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 35%);
    transition: transform 0.15s ease;
    text-decoration: none;
  }

  .contact:hover {
    transform: translateY(-1px);
  }
</style>
