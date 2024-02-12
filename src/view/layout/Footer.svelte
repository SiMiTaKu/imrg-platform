<script lang="ts" context="module">
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<footer
  class="footer"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="content">
    ©︎ Internationalize Men's Rhythmic Gymnastics Project 2020-2023
  </div>
</footer>

<style>
  .pc {
    --font-size: 12px;
  }

  .sp {
    --font-size: 10px;
  }

  .footer {
    background: #666666;
  }

  .content {
    color: white;
    font-size: var(--font-size);
    text-align: center;
  }
</style>
