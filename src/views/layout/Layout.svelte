<script context="module" lang="ts">
  import type { ViewValueLayout } from '$model/view-value-layout'
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { withTrailingSlash } from '$lib/common/sitemap'

  const SITE_NAME = '男子新体操国際化プロジェクト'
  /** SNS のカード画像（1200×630）。絶対 URL でないと表示されない */
  const OGP_IMAGE = `${PUBLIC_BASE_URL}/images/ogp.png`
</script>

<script lang="ts">
  export let layout: ViewValueLayout

  // サイトの設定が trailingSlash: "always" なので、canonical も末尾スラッシュをそろえる
  $: pageUrl = `${PUBLIC_BASE_URL}${withTrailingSlash(layout.path)}`
</script>

<svelte:head>
  <title>{layout.title}</title>
  <meta name="description" content={layout.description} />

  <!-- canonical -->
  {#if layout.canonical}
    <link href={pageUrl} rel="canonical" />
  {/if}

  <!-- noindex nofollow -->
  {#if layout.noindex}
    <meta name="robots" content="noindex" />
  {/if}
  {#if layout.nofollow}
    <meta name="robots" content="nofollow" />
  {/if}

  <!-- OGP -->
  <meta content={layout.ogp.title} property="og:title" />
  <meta content={layout.ogp.description} property="og:description" />
  <meta content={layout.ogp.type} property="og:type" />
  <meta content={pageUrl} property="og:url" />
  <meta content={SITE_NAME} property="og:site_name" />
  <meta content="ja_JP" property="og:locale" />
  <meta content={OGP_IMAGE} property="og:image" />
  <meta content="1200" property="og:image:width" />
  <meta content="630" property="og:image:height" />
  <meta content={layout.ogp.title} property="og:image:alt" />

  <!-- X（Twitter）のカード -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={layout.ogp.title} />
  <meta name="twitter:description" content={layout.ogp.description} />
  <meta name="twitter:image" content={OGP_IMAGE} />
</svelte:head>

<slot name="main"></slot>
