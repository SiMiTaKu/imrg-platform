<script lang="ts">
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
      <a
        class="button"
        {href}
        target={cta.external ? '_blank' : '_self'}
        rel={cta.external ? 'noopener noreferrer' : undefined}
      >
        {cta.label()}
      </a>
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
    padding: $space-size-8 var(--content-padding-inline);
    background: rgb(255 255 255 / 92%);
    border-top: 1px solid map.get($gray, 100);
    backdrop-filter: blur(6px);
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

  .inner {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    min-height: 52px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    text-align: center;
    text-decoration: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(0 89 184 / 25%);
  }

  .mobile .button {
    max-width: none;
    min-height: 48px;
    font-size: $font-size-14;
  }
</style>
