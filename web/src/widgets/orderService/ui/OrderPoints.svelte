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
          <span class="badge">{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
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
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
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
  .cards li {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-24;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;
  }

  .cards li:hover {
    border-color: map.get($amber, border);
  }

  // 番号は黄。数えられることが「色々頼める」ことの合図になる
  .badge {
    align-self: flex-start;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($amber, 800);
    border-radius: 999px;
    background: map.get($amber, 300);
    letter-spacing: 0.08em;
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
