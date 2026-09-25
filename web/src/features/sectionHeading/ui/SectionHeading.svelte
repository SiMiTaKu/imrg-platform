<script lang="ts" module>
  /** 節の見出しのラベルの色味。いまはどちらも青で出す（黄は相談のボタンにだけ残す） */
  export type SectionHeadingTone = 'blue' | 'amber'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'

  /** 節の見出し（ラベル＋見出し＋補足の組）の引数 */
  interface Props {
    /** 見出しの上に出す小さなラベル。省くと出さない */
    eyebrow?: string
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの下に出す補足。省くと出さない */
    lead?: string
    /** ラベルの色味（既定は青） */
    tone?: SectionHeadingTone
  }

  const { eyebrow, title, subtitle, lead, tone = 'blue' }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<header class="section-heading" class:mobile={isMobile}>
  {#if eyebrow}
    <p class="eyebrow" class:amber={tone === 'amber'}>{eyebrow}</p>
  {/if}
  <h2>
    {title}
    {#if subtitle}
      <span class="subtitle" lang="en">{subtitle}</span>
    {/if}
  </h2>
  {#if lead}
    <p class="lead">{lead}</p>
  {/if}
</header>

<style lang="scss">
  .section-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-8;
    margin: 0 0 $space-size-40;
    text-align: center;
  }

  .mobile.section-heading {
    margin-bottom: $space-size-32;
  }

  .eyebrow {
    display: inline-block;
    margin: 0;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
    letter-spacing: 0.1em;
  }

  // 行動をうながす節（料金・相談）も、ラベルは青でそろえる
  .eyebrow.amber {
    color: $white;
    background: map.get($sky-blue, button);
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-4;
    margin: 0;
    font-size: $font-size-30;
    color: map.get($gray, text);
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  .subtitle {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
    letter-spacing: 0.25em;
  }

  .lead {
    max-width: 38em;
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }
</style>
