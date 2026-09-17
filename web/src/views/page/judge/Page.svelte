<script context="module" lang="ts">
  import PointA from './_components/PointA.svelte'
  import PointB from './_components/PointB.svelte'
  import ExecutionPointResultModalDesktop from './_components/ExecutionPointResultModalDesktop.svelte'
  import ExecutionPointResultModalMobile from './_components/ExecutionPointResultModalMobile.svelte'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import SelectApparatus from './_components/SelectApparatus.svelte'
  import { judgementApparatus } from './_store/apparatus'

  let submittedPointA: boolean = false
  let submittedPointB: boolean = false

  function submitPointA() {
    submittedPointA = true
  }

  function submitPointB() {
    submittedPointB = true
  }
</script>

<section
  class="judgement-form {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
>
  <div class="form-container">
    <SelectApparatus />
    {#if $judgementApparatus}
      <PointA on:submit={() => submitPointA()} />
      {#if submittedPointA}
        <PointB on:submit={() => submitPointB()} />
      {/if}
      {#if $pageData.isMobile}
        <ExecutionPointResultModalMobile show={submittedPointB} />
      {:else}
        <ExecutionPointResultModalDesktop show={submittedPointB} />
      {/if}
    {/if}
  </div>
</section>

<style lang="scss">
  .desktop {
    --padding: 64px 0;
    --container-width: #{calc(1024px - 160px)};
    --container-padding: 40px 80px;
  }

  .mobile {
    --padding: 40px 0;
    --container-width: #{calc(351px - 24px)};
    --container-padding: 32px 12px;
  }

  .gray {
    --background: #f1f1f1;
  }

  .blue {
    --background: #e6f6ff;
  }

  .red {
    --background: #ffe6e6;
  }

  .yellow {
    --background: #fffbe6;
  }

  .green {
    --background: #ecffe6;
  }

  .judgement-form {
    display: flex;
    padding: var(--padding);
    justify-content: center;
    background: var(--background);
    transition: 0.5s;
  }

  .form-container {
    display: grid;
    gap: 24px;
    width: var(--container-width);
    padding: var(--container-padding);
    border-radius: 8px;
    background: white;
    box-shadow: 0 0 50px rgb(0, 0, 0, 0.3);
  }
</style>
