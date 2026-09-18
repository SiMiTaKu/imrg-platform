<script lang="ts">
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { deLocalizeHref, getLocale, localizeHref, publishedLocales } from '@shared/lib/i18n'
  import { MENU_ITEM_HEIGHT, MENU_VERTICAL_SPACE } from '../config/layout'
  import { NAVIGATION_LINKS } from '../config/navigation'

  /** メニューの引数 */
  interface Props {
    /** 開いているか */
    open: boolean
    /** 閉じるときの処理 */
    onclose: () => void
  }

  const { open, onclose }: Props = $props()

  // いま表示しているページを別の言語でも公開していれば、切り替えのリンクを出す。
  // 訳す前の英語ページでは、日本語ページへのリンクになる
  const path = $derived(deLocalizeHref(page.url.pathname))
  const otherLocale = $derived(publishedLocales(path).find((locale) => locale !== getLocale()))
  const itemCount = $derived(NAVIGATION_LINKS.length + (otherLocale ? 1 : 0))
</script>

<div
  style:--open-height={`${itemCount * MENU_ITEM_HEIGHT + MENU_VERTICAL_SPACE}px`}
  class="wrapper"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  class:open
>
  <ul class="links">
    {#each NAVIGATION_LINKS as link, index (index)}
      <li>
        <a class="link" href={localizeHref(link.href)} onclick={onclose}>{link.label()}</a>
      </li>
    {/each}
    {#if otherLocale}
      <li>
        <!-- 言語の境目をまたぐので、ページを読み込み直して表示と URL をそろえる -->
        <a
          class="link"
          href={localizeHref(path, { locale: otherLocale })}
          hreflang={otherLocale}
          lang={otherLocale}
          data-sveltekit-reload>{m.layout_locale_switch_to()}</a
        >
      </li>
    {/if}
  </ul>
</div>

<style lang="scss">
  .desktop {
    --wrapper-width: 400px;
  }

  .mobile {
    --wrapper-width: 100vw;
  }

  .wrapper {
    position: absolute;
    top: var(--height);
    right: 0;
    display: grid;
    width: var(--wrapper-width);
    height: 0;
    border-radius: 0 0 $border-radius-8 $border-radius-8;
    background-color: map.get($sky-blue, background);
    transition: 0.3s;
    overflow: hidden;
  }

  .open {
    height: var(--open-height);
  }

  .links {
    display: grid;
    height: min-content;
    padding: $space-size-8 $space-size-16;
    font-size: 18px;
    font-weight: bold;
    list-style: none;
  }

  .links > li {
    transition: 0.3s;

    &:not(:last-child) {
      border-bottom: $border-size-1 solid map.get($sky-blue, border);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .link {
    display: grid;
    padding: $space-size-8 $space-size-16;
  }
</style>
