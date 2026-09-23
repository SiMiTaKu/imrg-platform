<script lang="ts">
  import '../app/styles/global.css'
  import { m } from '$lib/paraglide/messages'
  import { onMount, type Snippet } from 'svelte'
  import { PUBLIC_CF_BEACON_TOKEN } from '$env/static/public'
  import { LOCAL_HOSTS } from '../app/config/analytics'
  import { Footer, Header, LocalePageLinks, ScrollToTopButton, StickyFooter } from '@widgets/layout'

  const { children }: { children: Snippet } = $props()

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

<svelte:head>
  <!-- 端末の幅に合わせて表示する。拡大も止めない（スマホでの見やすさと、検索の評価のため） -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Google Adsense -->
  <meta name="google-adsense-account" content="ca-pub-8732446757854279" />

  <meta name="keywords" content={m.meta_keywords()} />
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Footer />
<ScrollToTopButton />
<StickyFooter />
<LocalePageLinks />

<style lang="scss">
  // ヘッダーの高さ分の余白。app.html が描画の前に付ける印で決めるので、
  // 読み込みの途中で高さが変わらない
  main {
    padding-top: 64px;
  }

  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  // app.html が html に付ける印を見るので :global が要る
  :global(html[data-device='desktop']) main {
    padding-top: 80px;
  }

  /*
    採点票の印刷。押した用紙だけを紙に出す。

    印刷のボタンが body に印を付け、印刷する用紙に data-printing を立てる。
    ページの外にある要素まで届かせる必要があるので :global で書く
  */
  @page {
    size: a4 portrait;
    margin: 10mm;
  }

  @media print {
    /*
      用紙までの道すじにある要素の、ほかの子を消す。
      隠す（visibility: hidden）だけだと場所が残り、白紙が何十枚も続いてしまう
    */
    :global(body[data-printing] [data-print-path] > *:not([data-print-path], [data-printing])) {
      display: none;
    }

    /*
      道すじにある要素と、紙に出す用紙そのものから、余白と枠を外す。
      用紙にも当てないと、figure が持っている既定の余白が1枚目の頭に残る
    */
    :global(body[data-printing] [data-print-path]),
    :global(body[data-printing] [data-printing='true']) {
      display: block;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      overflow: visible;
    }

    /*
      1枚に収めるための詰め。紙に出すときだけ効かせる。

      用紙は幅 696px で組んであり、A4 の縦（左右10mm の余白を取って約718px）に
      ちょうど収まる。縦が足りないときのために、ます目の上下の余白と行の高さを
      詰め、途中でページを割らないようにする
    */
    :global(body[data-printing] [data-printing='true']) {
      font-size: 8pt;
    }

    :global(body[data-printing] [data-printing='true'] table) {
      break-inside: avoid;
    }

    :global(body[data-printing] [data-printing='true'] th),
    :global(body[data-printing] [data-printing='true'] td) {
      padding-top: 0;
      padding-bottom: 0;
      line-height: 1.15;
    }

    // 画面でだけ要る説明は、紙には出さない
    :global(body[data-printing] [data-printing='true'] figcaption) {
      display: none;
    }

    main {
      padding-top: 0;
    }
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
</style>
