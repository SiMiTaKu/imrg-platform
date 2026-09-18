<script lang="ts">
  import { GlobeIcon } from '@imrg-platform/design-system'
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { deLocalizeHref, getLocale, localizeHref, publishedLocales } from '@shared/lib/i18n'

  // いま見ているページを別の言語でも公開していれば、切り替えのリンクを出す
  const path = $derived(deLocalizeHref(page.url.pathname))
  const otherLocale = $derived(publishedLocales(path).find((locale) => locale !== getLocale()))
</script>

{#if otherLocale}
  <!-- 言語の境目をまたぐので、ページを読み込み直して表示と URL をそろえる -->
  <a
    class="switch"
    class:desktop={!$pageData.isMobile}
    class:mobile={$pageData.isMobile}
    href={localizeHref(path, { locale: otherLocale })}
    hreflang={otherLocale}
    lang={otherLocale}
    data-sveltekit-reload
  >
    <GlobeIcon size={$pageData.isMobile ? 20 : 24} color="gray" />
    <span class="label">{m.layout_locale_switch_to()}</span>
  </a>
{/if}

<style lang="scss">
  .desktop {
    --height: 80px;
    --gap: #{$space-size-8};
    --padding: 0 #{$space-size-16};
    --label-font-size: #{$font-size-16};
  }

  .mobile {
    --height: 64px;
    --gap: #{$space-size-4};
    --padding: 0 #{$space-size-8};
    --label-font-size: #{$font-size-14};
  }

  .switch {
    display: flex;
    gap: var(--gap);
    align-items: center;
    height: var(--height);
    padding: var(--padding);
    color: map.get($gray, text);
    transition: 0.25s;

    &:hover {
      background: map.get($sky-blue, background);
    }
  }

  .label {
    font-size: var(--label-font-size);
    font-weight: bold;
    white-space: nowrap;
  }
</style>
