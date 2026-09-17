<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'

  export let width: number
  export let height: number
  export let text: string
</script>

<button
  class="button"
  type="button"
  style:width={`${width}px`}
  style:height={`${height}px`}
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  on:click
>
  {text}
</button>

<style lang="scss">
  .pc {
    --item-font-size: #{$font-size-24};
  }

  .sp {
    --item-font-size: #{$font-size-20};
  }

  .button {
    display: grid;
    place-items: center;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: $white;
    border: none;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
