<script lang="ts">
  import PCTop from './pc/top/Top.svelte';
  import SPTop from './sp/top/Top.svelte';
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP
  } from '../ts/common/ResponsiveDesign';

  let screenWidth;
</script>

<svelte:head>
	<title>ホーム</title>
</svelte:head>

<svelte:window bind:outerWidth={screenWidth}/>

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <PCTop />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <SPTop />
{/if}

<style lang="scss">

</style>
