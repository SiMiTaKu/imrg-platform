<script context="module" lang="ts">
  import RootPC from "../view/page/top/RootPC.svelte";
  import RootSP from "../view/page/top/RootSP.svelte";
</script>

<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>男子新体操国際化プロジェクト</title>
</svelte:head>

{#if $page.data.isMobile}
  <RootSP />
{:else}
  <RootPC />
{/if}
