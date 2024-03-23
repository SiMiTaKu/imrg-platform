<script lang="ts">
  import RootPC from "../view/page/top/RootPC.svelte";
  import RootSP from "../view/page/top/RootSP.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../ts/common/responsive-design";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    console.log($page.data.isMobile);
  });
  let screenWidth;
</script>

<svelte:head>
  <title>男子新体操国際化プロジェクト</title>
</svelte:head>

<svelte:window bind:outerWidth={screenWidth} />

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <RootPC />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <RootSP />
{/if}

<style lang="scss">
</style>
