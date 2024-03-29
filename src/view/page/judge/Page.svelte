<script lang="ts" context="module">
  import PointA from "./_components/PointA.svelte";
  import PointB from "./_components/PointB.svelte";
  import ExecutionPointResultModalPC from "./_components/ExecutionPointResultModalPC.svelte";
  import ExecutionPointResultModalSP from "./_components/ExecutionPointResultModalSP.svelte";
</script>

<script lang="ts">
  import { executionDeduct } from "./_store/store";
  import { pageData } from "../../atomic/device-store/store";

  let submitted: boolean = false;
  function submit() {
    submitted = true;
  }
</script>

<section
  class="judgement-form"
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class="form-container">
    <!-- Aの最後の回答がされるまで表示 -->
    {#if !$executionDeduct.pointA.beautifulPose || !$executionDeduct.pointA.flexibility || !$executionDeduct.pointA.naturalMovement || !$executionDeduct.pointA.bendingWeight || !$executionDeduct.pointA.jumpingHeight || !$executionDeduct.pointA.bodyControl || !$executionDeduct.pointA.heelRaise || !$executionDeduct.pointA.weaknessAndStrength || !$executionDeduct.pointA.connectMovement || !$executionDeduct.pointA.apparatusControl || !$executionDeduct.pointA.musicImage}
      <PointA />
    {/if}
    {#if $executionDeduct.pointA.beautifulPose && $executionDeduct.pointA.flexibility && $executionDeduct.pointA.naturalMovement && $executionDeduct.pointA.bendingWeight && $executionDeduct.pointA.jumpingHeight && $executionDeduct.pointA.bodyControl && $executionDeduct.pointA.heelRaise && $executionDeduct.pointA.weaknessAndStrength && $executionDeduct.pointA.connectMovement && $executionDeduct.pointA.apparatusControl && $executionDeduct.pointA.musicImage}
      <PointB on:submit={() => submit()} />
    {/if}
    {#if $pageData.isMobile}
      <ExecutionPointResultModalSP show={submitted} />
    {:else}
      <ExecutionPointResultModalPC show={submitted} />
    {/if}
  </div>
</section>

<style lang="scss">
  .pc {
    --padding: 64px 0;
    --container-width: #{calc(1024px - 160px)};
    --container-padding: 40px 80px;
  }

  .sp {
    --padding: 40px 0;
    --container-width: #{calc(351px - 24px)};
    --container-padding: 32px 12px;
  }

  .judgement-form {
    display: flex;
    padding: var(--padding);
    justify-content: center;
    background: #e6f6ff;
  }

  .form-container {
    width: var(--container-width);
    padding: var(--container-padding);
    background: white;
    border-radius: 8px;
  }
</style>
