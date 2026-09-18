<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { m } from '$lib/paraglide/messages'
  import { OGP_IMAGE } from '../config/layout'
  import type { PageMeta } from '@shared/config/meta'
  import {
    BASE_LOCALE,
    OG_LOCALES,
    getLocale,
    isPublished,
    localizeHref,
    publishedLocales,
  } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'

  /** ページの head 要素の引数 */
  interface Props {
    /** ページのメタ情報 */
    meta: PageMeta
  }

  const { meta }: Props = $props()

  const locale = $derived(getLocale() as SiteLocale)
  // 英語ページでは /en/ 付きの URL になる
  const pageUrl = $derived(`${PUBLIC_BASE_URL}${localizeHref(meta.path)}`)
  const locales = $derived(publishedLocales(meta.path))
  // 他の言語でも公開しているページだけ、言語の対応を示す
  const alternates = $derived(
    locales.length > 1
      ? locales.map((alternate) => ({
          hreflang: alternate,
          href: `${PUBLIC_BASE_URL}${localizeHref(meta.path, { locale: alternate })}`,
        }))
      : [],
  )
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link href={pageUrl} rel="canonical" />
  <!-- 訳す前の英語ページは、検索エンジンに登録させない -->
  {#if !isPublished(meta.path, locale)}
    <meta name="robots" content="noindex" />
  {/if}

  <!-- OGP -->
  <meta content={meta.title} property="og:title" />
  <meta content={meta.description} property="og:description" />
  <meta content={meta.ogType} property="og:type" />
  <meta content={pageUrl} property="og:url" />
  <meta content={m.meta_site_name()} property="og:site_name" />
  <meta content={OG_LOCALES[locale]} property="og:locale" />
  <meta content={OGP_IMAGE} property="og:image" />
  <meta content="1200" property="og:image:width" />
  <meta content="630" property="og:image:height" />
  <meta content={meta.title} property="og:image:alt" />

  <!-- 言語の対応 -->
  <!-- hreflang は自分の言語も含めて並べる。og:locale:alternate は自分以外の言語だけ -->
  {#each alternates as alternate (alternate.hreflang)}
    {#if alternate.hreflang !== locale}
      <meta content={OG_LOCALES[alternate.hreflang]} property="og:locale:alternate" />
    {/if}
    <link href={alternate.href} hreflang={alternate.hreflang} rel="alternate" />
  {/each}
  {#if alternates.length > 0}
    <link
      href={`${PUBLIC_BASE_URL}${localizeHref(meta.path, { locale: BASE_LOCALE })}`}
      hreflang="x-default"
      rel="alternate"
    />
  {/if}

  <!-- X（Twitter）のカード -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={OGP_IMAGE} />
</svelte:head>
