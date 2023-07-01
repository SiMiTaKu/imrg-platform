<script>
  import PCHeader from './pc/common/layout/Header.svelte';
  import PCFooter from './pc/common/layout/Footer.svelte';
  import SPHeader from './sp/common/layout/Header.svelte';
  import SPFooter from './sp/common/layout/Footer.svelte';
  import './styles.css';
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP
  } from '../ts/common/ResponsiveDesign';

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth}/>

<div>
  {#if getResponsiveDesign(screenWidth) === designOfPC}
    <PCHeader />
  {:else if getResponsiveDesign(screenWidth) === designOfSP}
    <SPHeader />
  {/if}
  <main>
    <slot />
  </main>
  {#if getResponsiveDesign(screenWidth) === designOfPC}
    <PCFooter />
  {:else if getResponsiveDesign(screenWidth) === designOfSP}
    <SPFooter />
  {/if}
</div>