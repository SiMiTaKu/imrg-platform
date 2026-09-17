<script lang="ts">
  import type { Snippet } from 'svelte'
  import { Heading } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  /** 文章だけのページの枠の引数 */
  interface Props {
    /** 見出し */
    title: string
    /** 見出しの下に小さく出す文言。省くと出さない */
    subtitle?: string
    /** 制定日・改定日の表記 */
    enactedAt: string
    /** 本文 */
    children: Snippet
  }

  const { title, subtitle, enactedAt, children }: Props = $props()
</script>

<!-- プライバシーポリシー・利用規約など、文章だけのページの共通の枠 -->
<article class="policy" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    {subtitle}
    {title}
  />
  <p class="enacted-at">{enactedAt}</p>
  {@render children()}
  <p class="back"><a href={localizeHref(ROUTES.top)}>{m.layout_back_to_top()}</a></p>
</article>

<style lang="scss">
  .pc {
    --width: 800px;
    --heading-font-size: #{$font-size-24};
  }

  .sp {
    --width: 90%;
    --heading-font-size: #{$font-size-20};
  }

  .policy {
    width: var(--width);
    margin: 0 auto;
    padding: $space-size-40 0 $space-size-80;
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .enacted-at {
    text-align: right;
  }

  .back {
    margin-top: $space-size-80;
    text-align: center;
  }

  // 本文は各ページから children で渡すため、ここから :global で体裁を当てる。
  // .policy の中だけに効くので、ほかのページへは漏れない
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  .policy :global(h3) {
    margin: $space-size-40 0 $space-size-16;
    padding-left: 12px;
    border-left: 4px solid rgb(50, 150, 255);
    font-size: var(--heading-font-size);
    line-height: 1.4;
  }

  // サイト全体のリセットで黒丸が消えているので付け直す
  .policy :global(ul) {
    padding-left: 1.5em;
    list-style: disc;
  }

  .policy :global(a) {
    color: rgb(50, 150, 255);
  }

  // 英語版は lang='en' の section で渡す（クラスにすると lint が未使用と判定する）
  .policy :global(section[lang='en']) {
    margin-top: $space-size-80;
    padding-top: $space-size-40;
    border-top: 1px solid #ddd;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
</style>
