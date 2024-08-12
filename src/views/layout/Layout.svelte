<script context='module' lang='ts'>
  import type { ViewValueLayout } from "$model/view-value-layout"
  import ImrgLogo from "$images/common/imrg-logo.jpg"
  import { PUBLIC_BASE_URL } from "$env/static/public"
</script>

<script lang='ts'>
  export let layout: ViewValueLayout
</script>

<svelte:head>
  <title>{layout.title}</title>
  <meta name='description' content={layout.description} />

  <!-- canonical -->
  {#if layout.canonical}
    <link href={`${PUBLIC_BASE_URL}${layout.path}`} rel='canonical' />
  {/if}

  <!-- noindex nofollow -->
  {#if layout.noindex}
    <meta name='robots' content='noindex' />
  {/if}
  {#if layout.nofollow}
    <meta name='robots' content='nofollow' />
  {/if}

  <!-- OGP -->
  <meta content={layout.ogp.title} property='og:title' />
  <meta content={layout.ogp.description} property='og:description' />
  <meta content='website' property='og:type' />
  <meta content={`${PUBLIC_BASE_URL}${layout.path}`} property='og:url' />
  <meta content={layout.ogp.title} property='og:site_name' />
  <meta content={ImrgLogo} property='og:image' />
</svelte:head>

<slot name='main' />
