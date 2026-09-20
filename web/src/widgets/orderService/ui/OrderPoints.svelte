<script lang="ts" module>
  /** 「頼めること」の1件 */
  export interface OrderPoint {
    /** 頼めることの名前 */
    title: string
    /** どこまで頼めるかの説明 */
    body: string
  }
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import SectionHeading from './SectionHeading.svelte'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「頼めること」の引数 */
  interface Props {
    /** 見出しの上に出す小さなラベル */
    eyebrow: string
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの下に出す補足 */
    lead: string
    /** 頼めること */
    items: readonly OrderPoint[]
  }

  const { eyebrow, title, subtitle, lead, items }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="points" class:mobile={isMobile}>
  <div class="inner">
    <SectionHeading {eyebrow} {title} {subtitle} {lead} />

    <ul class="cards">
      {#each items as item, index (item.title)}
        <li>
          <span class="badge">{index + 1}</span>
          <div class="words">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .points {
    width: 100%;
    background: $white;
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

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    grid-template-columns: 1fr;
  }

  // 縦に積むだけ。重ねない
  // 番号を左に置き、見出しと説明を右に並べる。縦に伸びすぎないように
  .cards li {
    display: flex;
    gap: $space-size-16;
    align-items: flex-start;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-inline-size: 0;
  }

  .cards li:hover {
    border-color: map.get($sky-blue, border);
  }

  // 番号は青。数えられることが「色々頼める」ことの合図になる
  // 番号は大きく。何番目かが一目で分かるようにする
  .badge {
    flex: none;
    font-size: $font-size-30;
    font-weight: bold;
    line-height: 1;
    color: map.get($sky-blue, 200);
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
  }

  h3 {
    margin: 0;
    font-size: $font-size-20;
    color: map.get($gray, text);
  }

  .mobile h3 {
    font-size: $font-size-18;
  }

  .cards p {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.85;
    overflow-wrap: anywhere;
  }
</style>
