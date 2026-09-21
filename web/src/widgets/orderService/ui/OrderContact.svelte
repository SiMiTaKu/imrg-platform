<script lang="ts">
  import { CharacterFigure, type CharacterProfile } from '@entities/character'
  import { CrossLinks, type CrossLink } from '@features/crossLinks'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'

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
    /** ほかの依頼への案内。1つでも、複数並べても出せる。省くと出さない */
    crossLink?: CrossLink | readonly CrossLink[]
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
      <!-- ほかの依頼も受けていることを、最後にもう一度知らせる -->
      <CrossLinks links={crossLink} />
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
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
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

    // 黄は明るいので、文字は黒にする（design-system の色の決まり 4）
    color: $black;
    border-radius: 6px;
    background: map.get($yellow, 300);
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
</style>
