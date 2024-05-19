<script context='module' lang='ts'>
  import PointA from "./_components/PointA.svelte";
  import PointB from "./_components/PointB.svelte";
  import ExecutionPointResultModalPC from "./_components/ExecutionPointResultModalPC.svelte";
  import ExecutionPointResultModalSP from "./_components/ExecutionPointResultModalSP.svelte";
</script>

<script lang='ts'>
  import { pageData } from "../../atomic/device-store/store";
  import SelectApparatus from "./_components/SelectApparatus.svelte";

  let submittedPointA: boolean = false;
  let submittedPointB: boolean = false;

  function submitPointA() {
    submittedPointA = true;
  }

  function submitPointB() {
    submittedPointB = true;
  }
</script>

<section
  class='judgement-form'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='form-container'>
    <SelectApparatus />
    <PointA on:submit={() => submitPointA()} />
    {#if submittedPointA}
      <PointB on:submit={() => submitPointB()} />
    {/if}
    {#if $pageData.isMobile}
      <ExecutionPointResultModalSP show={submittedPointB} />
    {:else}
      <ExecutionPointResultModalPC show={submittedPointB} />
    {/if}
  </div>
</section>

<style lang='scss'>
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
