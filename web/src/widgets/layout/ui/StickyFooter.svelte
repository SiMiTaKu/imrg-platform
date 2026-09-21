<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { page } from '$app/state'
  import { pageData } from '@shared/lib/device'
  import { deLocalizeHref, localizeHref } from '@shared/lib/i18n'
  import { findStickyCta } from '../config/stickyCta'

  const isMobile = $derived($pageData.isMobile)

  // 言語の接頭辞（/en/ など）を外してから、そのページの案内を探す
  const cta = $derived(findStickyCta(deLocalizeHref(page.url.pathname)))

  const href = $derived(cta?.external ? cta.href : localizeHref(cta?.href ?? '/'))
</script>

{#if cta}
  <div class="sticky-cta" class:mobile={isMobile}>
    <div class="inner">
      <Button {href} target={cta.external ? '_blank' : '_self'} size="large" width="full">
        {cta.label()}
      </Button>
    </div>
  </div>
{/if}

<style lang="scss">
  // 下に貼り付いたまま、中身の上へ浮かせる。
  // 少し遅らせて下から出すことで、読み始めの邪魔をしない
  .sticky-cta {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 900;
    padding: $space-size-12 var(--content-padding-inline);

    // 白い帯は敷くが、下の中身がうっすら透けるくらいに薄くする。
    // ぼかしを入れて、透けても文字が読みにくくならないようにする
    background: rgb(255 255 255 / 70%);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgb(255 255 255 / 60%);
    transform: translateY(100%);
    animation: sticky-cta-rise 0.35s 1.2s ease-out forwards;
  }

  @keyframes sticky-cta-rise {
    to {
      transform: translateY(0);
    }
  }

  // 動きを減らす設定の人には、最初から出したままにする
  @media (prefers-reduced-motion: reduce) {
    .sticky-cta {
      transform: none;
      animation: none;
    }
  }

  // PC では帯の真ん中に置く。スマホでは画面の端から端まで広げる
  .inner {
    display: flex;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .mobile .inner {
    max-width: none;
  }
</style>
