<script lang="ts">
  import RootPC from "../../web/rules/RootPC.svelte";
  import RootSP from "../../web/rules/RootSP.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../ts/common/ResponsiveDesign";

  let screenWidth;
</script>

<svelte:head>
  <title>男子新体操国際化プロジェクト | ルール</title>
</svelte:head>

<svelte:window bind:outerWidth={screenWidth} />

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <RootPC />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <RootSP />
{/if}

<style lang="scss">
</style>
