<script lang="ts">
  import { JudgeThemeColor } from '@features/judge'
  import {
    ExecutionPointResultModalDesktop,
    ExecutionPointResultModalMobile,
    PointA,
    PointB,
    SelectApparatus,
    judgementApparatus,
  } from '@features/judge'
  import { pageData } from '@shared/lib/device'

  let submittedPointA = $state(false)
  let submittedPointB = $state(false)
</script>

<section
  class="judgement-form {$judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY}"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
>
  <div class="form-container">
    <SelectApparatus />
    {#if $judgementApparatus}
      <PointA onsubmit={() => (submittedPointA = true)} />
      {#if submittedPointA}
        <PointB onsubmit={() => (submittedPointB = true)} />
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
    --background: #{map.get($theme-background, gray)};
  }

  .blue {
    --background: #{map.get($theme-background, blue)};
  }

  .red {
    --background: #{map.get($theme-background, red)};
  }

  .yellow {
    --background: #{map.get($theme-background, yellow)};
  }

  .green {
    --background: #{map.get($theme-background, green)};
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
