<script lang="ts" module>
  /** もう一方の依頼（曲編集 ↔ 手具装飾）への案内 */
  export interface OrderContactCrossLink {
    /** リンクの文言 */
    label: string
    /** リンク先（サイトの中のページ） */
    href: string
    /** ひと言の説明 */
    body: string
  }
</script>

<script lang="ts">
  import { CharacterFigure, type CharacterProfile } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import SectionHeading from './SectionHeading.svelte'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「相談する」の引数 */
  interface Props {
    /** 見出しの上に出す小さなラベル */
    eyebrow: string
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの下に出す補足 */
    lead: string
    /** 窓口の説明。1要素を1行にする */
    bodyLines: readonly string[]
    /** 相談の窓口（Instagram） */
    contactHref: string
    /** 相談のボタンの文言 */
    contactLabel: string
    /** ボタンの下に小さく出す補足 */
    note: string
    /** このページの案内役 */
    character: CharacterProfile
    /** もう一方の依頼への案内。省くと出さない */
    crossLink?: OrderContactCrossLink
  }

  const {
    eyebrow,
    title,
    subtitle,
    lead,
    bodyLines,
    contactHref,
    contactLabel,
    note,
    character,
    crossLink,
  }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="contact" class:mobile={isMobile} id="contact">
  <div class="inner">
    <SectionHeading {eyebrow} {title} {subtitle} {lead} tone="amber" />

    <div class="card">
      <div class="guide">
        <CharacterFigure {character} size={isMobile ? 84 : 112} />
      </div>

      <div class="body">
        <p class="lines">
          {#each bodyLines as line, index (index)}
            {#if index > 0}<br />{/if}{line}
          {/each}
        </p>

        <a class="button" href={contactHref} target="_blank" rel="noopener noreferrer">
          {contactLabel}
        </a>

        <p class="note">{note}</p>
      </div>
    </div>

    {#if crossLink}
      <!-- もう一方の依頼も受けていることを、最後にもう一度知らせる -->
      <a class="cross" href={crossLink.href}>
        <span class="cross-label">{crossLink.label}</span>
        <span class="cross-body">{crossLink.body}</span>
        <span class="cross-arrow" aria-hidden="true">→</span>
      </a>
    {/if}
  </div>
</section>

<style lang="scss">
  .contact {
    width: 100%;

    // 青を両端から差す。トップページのヒーローと揃える
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 16%), transparent 42%), $white;
    border-top: 1px solid map.get($gray, 100);
  }

  .inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
  }

  .card {
    display: flex;
    align-items: center;
    gap: $space-size-24;
    box-sizing: border-box;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: $space-size-32;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 10px;
    background: $white;
  }

  .mobile .card {
    flex-direction: column;
    gap: $space-size-16;
    padding: $space-size-24 $space-size-16;
  }

  .guide {
    display: flex;
    align-items: flex-end;
    flex: none;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-16;
    min-inline-size: 0;
    flex: 1;
  }

  .lines {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.9;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .mobile .lines {
    font-size: $font-size-14;
  }

  // 連絡への一歩は黄。このページで黄を使うのはここだけ
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    min-height: 56px;
    padding: 0 $space-size-20;
    font-size: $font-size-18;
    font-weight: bold;
    color: map.get($amber, 900);
    border-radius: 6px;
    background: map.get($amber, 300);
    box-shadow: 0 2px 8px rgb(240 165 0 / 35%);
    transition: transform 0.15s ease;
    text-align: center;
    text-decoration: none;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .cross {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    box-sizing: border-box;
    width: 100%;
    max-width: 720px;
    margin: $space-size-16 auto 0;
    padding: $space-size-16 $space-size-24;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;
    text-decoration: none;
  }

  .cross:hover {
    border-color: map.get($sky-blue, border);
  }

  .cross-label {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .cross-body {
    font-size: $font-size-12;
    color: map.get($gray, 600);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  // 本文の下に置く。重ねない
  .cross-arrow {
    align-self: flex-end;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
  }
</style>
