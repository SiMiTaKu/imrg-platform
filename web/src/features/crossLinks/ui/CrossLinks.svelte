<script lang="ts" module>
  /** ページの下に置く、ほかのページへの案内1つ */
  export interface CrossLink {
    /** 案内の名前（リンクの文言） */
    label: string
    /** リンク先（サイトの中のページ） */
    href: string
    /** ひと言の説明 */
    body: string
  }

  /**
   * 1つでも複数でも、案内の配列として受け取る
   * @param value - 案内1つ、または案内の配列
   * @returns 案内の配列
   */
  const toLinks = (value: CrossLink | readonly CrossLink[]): readonly CrossLink[] =>
    'href' in value ? [value] : value
</script>

<script lang="ts">
  /** ほかのページへの案内の引数 */
  interface Props {
    /** ほかのページへの案内。1つでも、複数並べても出せる */
    links: CrossLink | readonly CrossLink[]
  }

  const { links }: Props = $props()

  const items = $derived(toLinks(links))
</script>

{#if items.length > 0}
  <!-- ほかのページでも受けていることを、最後にもう一度知らせる -->
  <ul class="links">
    {#each items as link (link.href)}
      <li>
        <a class="link" href={link.href}>
          <span class="label">{link.label}</span>
          <span class="body">{link.body}</span>
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style lang="scss">
  // 案内は縦に積む。数が増えても並びは変えない
  .links {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    width: 100%;
    max-width: 720px;
    margin: $space-size-16 auto 0;
    padding: 0;
    list-style: none;
  }

  // 名前・説明・矢印を1行に並べる。3行に積むと札が無駄に高くなる
  .link {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-12;
    align-items: baseline;
    box-sizing: border-box;
    width: 100%;
    padding: $space-size-12 $space-size-20;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;

    // 中身を真ん中に寄せている節に置いても、札の中の行は左からそろえる
    text-align: left;
    text-decoration: none;
  }

  .link:hover {
    border-color: map.get($sky-blue, border);
  }

  .label {
    flex: none;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .body {
    min-inline-size: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  // 同じ行の右端に送る。重ねない
  .arrow {
    flex: none;
    margin-left: auto;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
  }
</style>
