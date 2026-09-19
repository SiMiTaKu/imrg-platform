<script lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import { pageData } from '@shared/lib/device'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「料金」の引数 */
  interface Props {
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 何に対しての金額か（例: 1曲あたり） */
    unit: string
    /** 金額の表記（例: 5,000円〜） */
    amount: string
    /** 金額の下に並べる補足 */
    notes: string[]
  }

  const { title, subtitle, unit, amount, notes }: Props = $props()
</script>

<section
  class="price-section"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    {subtitle}
    {title}
  />
  <div class="card">
    <p class="unit">{unit}</p>
    <p class="amount">{amount}</p>
    <ul class="notes">
      {#each notes as note, index (index)}
        <li class="note">{note}</li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .desktop {
    --width: 1024px;
    --card-width: 560px;
    --card-padding: 32px 40px;
    --unit-font-size: 20px;
    --amount-font-size: 48px;
    --note-font-size: 16px;
  }

  .mobile {
    --width: 90%;
    --card-width: 100%;
    --card-padding: 24px 20px;
    --unit-font-size: 16px;
    --amount-font-size: 36px;
    --note-font-size: 14px;
  }

  .price-section {
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 80px;
    text-align: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--card-width);
    margin: 0 auto;
    padding: var(--card-padding);
    border-radius: 8px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
  }

  .unit {
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 4px 16px;
    font-size: var(--unit-font-size);
    font-weight: bold;
    color: white;
    border-radius: 1em;
    background: rgb(50, 150, 255);
  }

  .amount {
    margin: 16px 0 0;
    font-size: var(--amount-font-size);
    font-weight: bold;
    line-height: 1.2;
    color: #333;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 10px rgb(50, 150, 255, 0.5);
  }

  .notes {
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .note {
    font-size: var(--note-font-size);
    line-height: 1.8;
    color: #666;
  }
</style>
