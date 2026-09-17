<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { getLocale, localizeHref } from '$lib/paraglide/runtime'
  import { BASE_LOCALE, OG_LOCALES, isPublished, publishedLocales } from './translation'
  import type { SiteLocale } from './translation'

  /** ページの言語ごとの head 要素（hreflang・og:locale・訳す前のページの noindex） */
  const { path }: { path: string } = $props()

  const locale = $derived(getLocale() as SiteLocale)
  const locales = $derived(publishedLocales(path))
  const published = $derived(isPublished(path, locale))
  // 他の言語でも公開しているページだけ、言語の対応を示す
  const alternates = $derived(
    locales.length > 1
      ? locales.map((alternate) => ({
          hreflang: alternate,
          href: `${PUBLIC_BASE_URL}${localizeHref(path, { locale: alternate })}`,
        }))
      : [],
  )
</script>

<svelte:head>
  <meta content={OG_LOCALES[locale]} property="og:locale" />
  {#each alternates as alternate (alternate.hreflang)}
    <meta content={OG_LOCALES[alternate.hreflang]} property="og:locale:alternate" />
    <link href={alternate.href} hreflang={alternate.hreflang} rel="alternate" />
  {/each}
  {#if alternates.length > 0}
    <link
      href={`${PUBLIC_BASE_URL}${localizeHref(path, { locale: BASE_LOCALE })}`}
      hreflang="x-default"
      rel="alternate"
    />
  {/if}
  {#if !published}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>
