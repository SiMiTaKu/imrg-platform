<script lang="ts" context="module">
  import HeaderPC from "../web/layout/HeaderPC.svelte";
  import FooterPC from "../web/layout/FooterPC.svelte";
  import "./styles.css";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../ts/common/ResponsiveDesign";
</script>

<script lang="ts">
  import SPHeader from "../web/sp/common/layout/Header.svelte";
  import SPFooter from "../web/sp/common/layout/Footer.svelte";

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<div>
  {#if getResponsiveDesign(screenWidth) === designOfPC}
    <HeaderPC />
  {:else if getResponsiveDesign(screenWidth) === designOfSP}
    <SPHeader />
  {/if}
  <main>
    <slot />
  </main>
  {#if getResponsiveDesign(screenWidth) === designOfPC}
    <FooterPC />
  {:else if getResponsiveDesign(screenWidth) === designOfSP}
    <SPFooter />
  {/if}
</div>
