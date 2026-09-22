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
   * 1つ以上の案内。
   *
   * @remarks
   * 空の配列を渡せない形にして、「案内が無いときは出さない」を使う側で決めさせる。
   * こちらは必ず1つ以上あるものとして描ける
   */
  export type CrossLinkList = readonly [CrossLink, ...CrossLink[]]
</script>

<script lang="ts">
  /** ほかのページへの案内の引数 */
  interface Props {
    /** ほかのページへの案内。1つ以上渡す */
    links: CrossLinkList
  }

  const { links }: Props = $props()
</script>

<!-- ほかのページでも受けていることを、最後にもう一度知らせる -->
<ul class="links">
  {#each links as link (link.href)}
    <li>
      <a class="link" href={link.href}>
        <span class="label">{link.label}</span>
        <span class="body">{link.body}</span>
        <span class="arrow" aria-hidden="true"></span>
      </a>
    </li>
  {/each}
</ul>

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
    color: map.get($gray, light-text);
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  // 右を向いた三角。枠線だけで描くので、字体によって形が変わらない
  .arrow {
    flex: none;
    align-self: center;
    width: 0;
    height: 0;
    margin-left: auto;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid map.get($sky-blue, button);
  }
</style>
