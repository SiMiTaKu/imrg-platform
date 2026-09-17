<script lang="ts">
  import { page } from '$app/state'
  import { locales, localizeHref } from '$lib/paraglide/runtime'
</script>

<!--
  いま表示しているページの、各言語の URL へのリンク。画面には出さない。
  ビルド時にページを書き出すクローラーが、このリンクをたどって英語ページ（/en/...）も書き出す
-->

<nav hidden aria-hidden="true">
  {#each locales as locale (locale)}
    <a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload tabindex="-1"
      >{locale}</a
    >
  {/each}
</nav>
