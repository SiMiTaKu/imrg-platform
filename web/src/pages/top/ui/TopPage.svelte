<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { buildTopJsonLd } from '../lib/structuredData'
  import CharacterTeam from './CharacterTeam.svelte'
  import ContactPanel from './ContactPanel.svelte'
  import Features from './Features.svelte'
  import Hero from './Hero.svelte'
  import Highlights from './Highlights.svelte'
  import Numbers from './Numbers.svelte'
  import Services from './Services.svelte'

  const jsonLd = JSON.stringify(buildTopJsonLd(PUBLIC_BASE_URL))
  // .svelte の中に閉じタグをそのまま書くと script の終わりと見なされるため、文字列を分けて組み立てる
  const jsonLdTag = `<script type="application/ld+json">${jsonLd}<` + '/script>'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- 埋め込むのは自前のデータを JSON.stringify した文字列だけで、外部からの入力は混ざらない -->
  {@html jsonLdTag}
</svelte:head>

<article class="site-top">
  <Hero />
  <Highlights />
  <Services />
  <Features />
  <Numbers />
  <CharacterTeam />
  <ContactPanel />
</article>

<style lang="scss">
  .site-top {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
