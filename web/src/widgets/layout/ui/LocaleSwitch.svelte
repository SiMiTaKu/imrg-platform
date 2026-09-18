<script lang="ts">
  import { GlobeIcon } from '@imrg-platform/design-system'
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { deLocalizeHref, getLocale, localizeHref, publishedLocales } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'

  /** 言語の表示名。`locale_name_ja` などの文言から取る */
  const LOCALE_NAMES = {
    ja: m.locale_name_ja,
    en: m.locale_name_en,
  } satisfies Record<SiteLocale, typeof m.locale_name_ja>

  let isOpen = $state(false)

  const currentLocale = $derived(getLocale() as SiteLocale)
  // いま見ているページを公開している言語だけを選べるようにする
  const path = $derived(deLocalizeHref(page.url.pathname))
  const locales = $derived(publishedLocales(path))

  const close = () => {
    isOpen = false
  }
</script>

<svelte:window onclick={isOpen ? close : undefined} />

{#if locales.length > 1}
  <div class="locale-switch" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
    <button
      class="button"
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label={m.layout_locale_switch_label()}
      onclick={(clickEvent) => {
        // 画面のどこかを押したら閉じる処理と打ち消し合わないように止める
        clickEvent.stopPropagation()
        isOpen = !isOpen
      }}
    >
      <GlobeIcon size={$pageData.isMobile ? 22 : 26} color="gray" />
    </button>
    {#if isOpen}
      <ul class="list" aria-label={m.layout_locale_switch_label()} role="listbox">
        {#each locales as locale (locale)}
          <li role="option" aria-selected={locale === currentLocale}>
            <!-- 言語の境目をまたぐので、ページを読み込み直して表示と URL をそろえる -->
            <a
              class="item"
              class:current={locale === currentLocale}
              href={localizeHref(path, { locale })}
              hreflang={locale}
              lang={locale}
              data-sveltekit-reload
              onclick={close}>{LOCALE_NAMES[locale]()}</a
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}

<style lang="scss">
  .desktop {
    --height: 80px;
    --button-width: 48px;
    --list-font-size: #{$font-size-16};
  }

  .mobile {
    --height: 64px;
    --button-width: 40px;
    --list-font-size: #{$font-size-14};
  }

  .locale-switch {
    position: relative;
    display: grid;
    place-items: center;
    height: var(--height);
  }

  .button {
    display: grid;
    place-items: center;
    width: var(--button-width);
    height: var(--height);
    padding: 0;
    border: none;
    background: transparent;
    transition: 0.25s;

    &:hover,
    &[aria-expanded='true'] {
      background: map.get($sky-blue, background);
    }
  }

  .list {
    position: absolute;
    top: var(--height);
    right: 0;
    z-index: 1;
    margin: 0;
    padding: $space-size-4 0;
    border-radius: 0 0 $border-radius-8 $border-radius-8;
    background: map.get($sky-blue, background);
    box-shadow: $black-box-shadow;
    list-style: none;
  }

  .item {
    display: grid;
    padding: $space-size-8 $space-size-24;
    font-size: var(--list-font-size);
    font-weight: bold;
    color: map.get($gray, text);
    white-space: nowrap;
    transition: 0.25s;

    &:hover {
      opacity: 0.8;
    }
  }

  .current {
    color: map.get($sky-blue, text);
  }
</style>
