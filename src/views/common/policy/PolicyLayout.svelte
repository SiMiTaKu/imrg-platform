<script context="module" lang="ts">
  import WithEnglishHeading from '$views/atomic/heading/WithEnglishHeading.svelte'
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'

  export let title: string
  export let englishTitle: string
  export let enactedAt: string
</script>

<!-- プライバシーポリシー・利用規約など、文章だけのページの共通の枠 -->
<article class="policy" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <WithEnglishHeading {englishTitle} {title} />
  <p class="enacted-at">{enactedAt}</p>
  <slot></slot>
  <p class="back"><a href="/">TOPに戻る</a></p>
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

  // 本文は各ページのスロットで渡すため、ここから :global で体裁を当てる。
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
