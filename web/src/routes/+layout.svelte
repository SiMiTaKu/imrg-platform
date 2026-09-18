<script lang="ts">
  import '../app/styles/global.css'
  import { onMount, type Snippet } from 'svelte'
  import { PUBLIC_CF_BEACON_TOKEN } from '$env/static/public'
  import { LOCAL_HOSTS } from '../app/config/analytics'
  import { pageData } from '@shared/lib/device'
  import { Footer, Header, LocalePageLinks, ScrollToTopButton } from '@widgets/layout'

  const { children }: { children: Snippet } = $props()

  let screenWidth = $state(0)

  $effect.pre(() => {
    pageData.update(screenWidth)
  })

  // アクセス解析（Cloudflare Web Analytics）。Cookie を使わない。
  // トークンが空のときは読み込まない
  onMount(() => {
    if (!PUBLIC_CF_BEACON_TOKEN || LOCAL_HOSTS.includes(location.hostname)) return
    const beacon = document.createElement('script')
    beacon.defer = true
    beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    beacon.dataset.cfBeacon = JSON.stringify({ token: PUBLIC_CF_BEACON_TOKEN, spa: true })
    document.head.appendChild(beacon)
  })
</script>

<svelte:window bind:outerWidth={screenWidth} />

<svelte:head>
  {#if $pageData.isMobile}
    <meta name="viewport" content="width=375, user-scalable=no" />
  {:else}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/if}
  <!-- Google Adsense -->
  <meta name="google-adsense-account" content="ca-pub-8732446757854279" />

  <meta name="keywords" content="男子新体操,ストレッチ,トレーニング,体操競技,柔軟性" />
</svelte:head>

<Header />

<main class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  {@render children()}
</main>

<Footer />
<ScrollToTopButton />
<LocalePageLinks />

<style lang="scss">
  .desktop {
    --header-padding: 80px;
  }

  .mobile {
    --header-padding: 64px;
  }

  main {
    padding-top: var(--header-padding);
  }
</style>
