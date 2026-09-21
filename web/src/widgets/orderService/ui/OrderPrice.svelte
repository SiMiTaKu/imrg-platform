<script lang="ts" module>
  /**
   * 1つの文字列でも、意味のまとまりの並びでも、まとまりの配列として受け取る。
   *
   * @remarks
   * まとまりを1つずつ並べて出すと、まとまりの途中では折り返さない
   * @param value - 文字列、または意味のまとまりの配列
   * @returns 意味のまとまりの配列
   */
  const toParts = (value: string | readonly string[]): readonly string[] =>
    typeof value === 'string' ? [value] : value
</script>

<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'

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
    /**
     * 金額の表記（例: 5,000円〜）。
     *
     * 「個人 5,000円〜」「団体 10,000円〜」のように読み手が分けて読むものは、
     * まとまりごとの配列で渡す。まとまりの途中では折り返さずに出す
     */
    amount: string | readonly string[]
    /** 金額の下に並べる補足 */
    notes: string[]
    /**
     * 見積もりが無料であることの言い切り。金額のすぐ下に出す。
     *
     * 文ごとに分けて渡すと、文の途中では折り返さずに出す（`splitSentences` を使う）
     */
    freeNote: string | readonly string[]
    /** 相談の窓口（Instagram） */
    contactHref: string
    /** 相談のボタンの文言 */
    contactLabel: string
  }

  const {
    eyebrow,
    title,
    subtitle,
    lead,
    unit,
    amount,
    notes,
    freeNote,
    contactHref,
    contactLabel,
  }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  const amountParts = $derived(toParts(amount))
  const freeNoteParts = $derived(toParts(freeNote))
</script>

<section class="price" class:mobile={isMobile} id="price">
  <div class="inner">
    <SectionHeading {eyebrow} {title} {subtitle} {lead} tone="amber" />

    <div class="card">
      <p class="unit">{unit}</p>
      <!-- 金額はまとまりごとに出す。金額と単位の途中では折り返さない -->
      <p class="amount">
        {#each amountParts as part (part)}
          <span class="amount-part">{part}</span>
        {/each}
      </p>

      <ul class="notes">
        {#each notes as note (note)}
          <li>{note}</li>
        {/each}
      </ul>

      <!-- 見積もりは無料であることを、金額のすぐ下で言い切る。文の途中では折り返さない -->
      <p class="free">
        {#each freeNoteParts as part (part)}
          <span class="free-part">{part}</span>
        {/each}
      </p>

      <div class="contact-action">
        <Button href={contactHref} target="_blank" size="large" width="full">{contactLabel}</Button>
      </div>
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

  // まとまりごとに並べる。行が足りなければまとまりごと次の行へ送り、途中では折り返さない
  .amount {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 $space-size-16;
    margin: 0;
    font-size: $font-size-48;
    font-weight: bold;
    line-height: 1.3;
    color: map.get($gray, text);
    font-variant-numeric: tabular-nums;
  }

  .amount-part {
    max-width: 100%;
    overflow-wrap: break-word;
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

  // 文ごとに並べる。行が足りなければ文のまとまりごと次の行へ送り、文の途中では折り返さない
  .free {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 0.4em;
    margin: 0;
    padding: $space-size-12 $space-size-16;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 8px;
    background: map.get($gray, background);
    line-height: 1.8;
  }

  .free-part {
    max-width: 100%;
    overflow-wrap: break-word;
  }

  // 料金を見た直後に相談へ進めるようにする。ボタンは青の塗り。黄はページ下の相談の節だけに残す
  .contact-action {
    display: flex;
    width: 100%;
    max-width: 400px;
  }
</style>
