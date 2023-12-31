<script lang="ts">
  import PCRoot from "../../web/pc/judge/Root.svelte";
  import SPRoot from "../../web/sp/judge/Root.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../ts/common/ResponsiveDesign";

  let screenWidth;
</script>

<svelte:head>
  <title>男子新体操国際化プロジェクト</title>
</svelte:head>

<svelte:window bind:outerWidth={screenWidth} />

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <PCRoot />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <SPRoot />
{/if}

<style lang="scss">
</style>
