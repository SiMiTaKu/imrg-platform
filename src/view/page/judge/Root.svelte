<script lang="ts" context="module">
  import PointA from "./_component/PointA.svelte";
  import PointB from "./_component/PointB.svelte";
  import ExecutionPointResultModalPC from "./_component/ExecutionPointResultModalPC.svelte";
  import ExecutionPointResultModalSP from "./_component/ExecutionPointResultModalSP.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import { executionDeduct } from "./_store/store";

  let submitted: boolean = false;
  function submit() {
    submitted = true;
  }

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="judgement-form"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="form-container">
    <!-- Aの最後の回答がされるまで表示 -->
    {#if !$executionDeduct.pointA.beautifulPose || !$executionDeduct.pointA.flexibility || !$executionDeduct.pointA.naturalMovement || !$executionDeduct.pointA.bendingWeight || !$executionDeduct.pointA.jumpingHeight || !$executionDeduct.pointA.bodyControl || !$executionDeduct.pointA.heelRaise || !$executionDeduct.pointA.weaknessAndStrength || !$executionDeduct.pointA.connectMovement || !$executionDeduct.pointA.apparatusControl || !$executionDeduct.pointA.musicImage}
      <PointA />
    {/if}
    {#if $executionDeduct.pointA.beautifulPose && $executionDeduct.pointA.flexibility && $executionDeduct.pointA.naturalMovement && $executionDeduct.pointA.bendingWeight && $executionDeduct.pointA.jumpingHeight && $executionDeduct.pointA.bodyControl && $executionDeduct.pointA.heelRaise && $executionDeduct.pointA.weaknessAndStrength && $executionDeduct.pointA.connectMovement && $executionDeduct.pointA.apparatusControl && $executionDeduct.pointA.musicImage}
      <PointB on:submit={() => submit()} />
    {/if}
    {#if getResponsiveDesign(screenWidth) === designOfPC}
      <ExecutionPointResultModalPC show={submitted} />
    {:else}
      <ExecutionPointResultModalSP show={submitted} />
    {/if}
  </div>
</section>

<style lang="scss">
  .pc {
    --container-width: #{calc(1024px - 160px)};
    --container-padding: 40px 80px;
  }

  .sp {
    --container-width: 83%;
    --container-padding: 24px;
  }

  .judgement-form {
    display: flex;
    justify-content: center;
    background: #dcecec;
  }

  .form-container {
    width: var(--container-width);
    padding: var(--container-padding);
    background: white;
    border-radius: 8px;
  }
</style>
