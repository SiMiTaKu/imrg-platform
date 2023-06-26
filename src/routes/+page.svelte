<script lang="ts">
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP
  } from '../ts/common/ResponsiveDesign';
  import { PCTop } from './pc/top/Top.svelte';

  let screenWidth;
</script>

<svelte:head>
	<title>ホーム</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth}/>

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <PCTop />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  これSP
{/if}

<style lang="scss">

</style>
