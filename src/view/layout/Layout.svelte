<script context='module' lang='ts'>
  import type { ViewValueLayout } from "@model/view-value-layout"
</script>

<script lang='ts'>
  export let origin: string
  export let layout: ViewValueLayout
</script>

<svelte:head>
  <title>{layout.title}</title>
  <meta name='description' content={layout.description} />

  <!-- canonical -->
  {#if layout.canonical}
    <link href={layout.canonical} rel='canonical' />
  {/if}

  <!-- noindex nofollow -->
  {#if layout.noindex}
    <meta name='robots' content='noindex' />
  {/if}
  {#if layout.nofollow}
    <meta name='robots' content='nofollow' />
  {/if}

  <!-- OGP -->
  <meta content={layout.title} property='og:title' />
  <meta content={layout.description} property='og:description' />
  <meta content='website' property='og:type' />
  <meta content='{origin}/image/common/imrg-logo.jpg' property='og:image' />
</svelte:head>

<slot name='main' />
