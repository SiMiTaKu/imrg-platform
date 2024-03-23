<script lang="ts" context="module">
  import PointA from "./_component/PointA.svelte";
  import PointB from "./_component/PointB.svelte";
  import ExecutionPointResultModalPC from "./_component/ExecutionPointResultModalPC.svelte";
  import ExecutionPointResultModalSP from "./_component/ExecutionPointResultModalSP.svelte";
</script>

<script lang="ts">
  import { executionDeduct } from "./_store/store";
  import { page } from "$app/stores";

  let submitted: boolean = false;
  function submit() {
    submitted = true;
  }
</script>

<section
  class="judgement-form"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
>
  <div class="form-container">
    <!-- Aの最後の回答がされるまで表示 -->
    {#if !$executionDeduct.pointA.beautifulPose || !$executionDeduct.pointA.flexibility || !$executionDeduct.pointA.naturalMovement || !$executionDeduct.pointA.bendingWeight || !$executionDeduct.pointA.jumpingHeight || !$executionDeduct.pointA.bodyControl || !$executionDeduct.pointA.heelRaise || !$executionDeduct.pointA.weaknessAndStrength || !$executionDeduct.pointA.connectMovement || !$executionDeduct.pointA.apparatusControl || !$executionDeduct.pointA.musicImage}
      <PointA />
    {/if}
    {#if $executionDeduct.pointA.beautifulPose && $executionDeduct.pointA.flexibility && $executionDeduct.pointA.naturalMovement && $executionDeduct.pointA.bendingWeight && $executionDeduct.pointA.jumpingHeight && $executionDeduct.pointA.bodyControl && $executionDeduct.pointA.heelRaise && $executionDeduct.pointA.weaknessAndStrength && $executionDeduct.pointA.connectMovement && $executionDeduct.pointA.apparatusControl && $executionDeduct.pointA.musicImage}
      <PointB on:submit={() => submit()} />
    {/if}
    {#if $page.data.isMobile}
      <ExecutionPointResultModalSP show={submitted} />
    {:else}
      <ExecutionPointResultModalPC show={submitted} />
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
    --container-padding: 16px;
  }

  .judgement-form {
    display: flex;
    padding: 64px 0;
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
