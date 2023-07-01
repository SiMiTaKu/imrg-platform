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
    <main>
      <slot />
    </main>
    <PCFooter />
  {:else if getResponsiveDesign(screenWidth) === designOfSP}
    <SPHeader />
    <main>
      <slot />
    </main>
    <SPFooter />
  {/if}
</div>

<style>

</style>