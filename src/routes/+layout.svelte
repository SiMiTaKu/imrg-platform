<script lang="ts" context="module">
  import HeaderPC from "../web/layout/HeaderPC.svelte";
  import FooterPC from "../web/layout/FooterPC.svelte";
  import HeaderSP from "../web/layout/HeaderSP.svelte";
  import FooterSP from "../web/layout/FooterSP.svelte";
  import "./styles.css";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

{#if getResponsiveDesign(screenWidth) === designOfPC}
  <HeaderPC />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <HeaderSP />
{/if}
<main>
  <slot />
</main>
{#if getResponsiveDesign(screenWidth) === designOfPC}
  <FooterPC />
{:else if getResponsiveDesign(screenWidth) === designOfSP}
  <FooterSP />
{/if}
