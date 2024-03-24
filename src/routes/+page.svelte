<script context="module" lang="ts">
  import Page from "../view/page/top/Page.svelte";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  onMount(() => {
    console.log($page.data.isMobile);
  });
</script>

<svelte:head>
  <title>男子新体操国際化プロジェクト</title>
</svelte:head>

<Page />
