<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'

  export let width: number
  export let height: number
  export let text: string
  export let href: string
  export let target: '_blank' | '_self' = '_self'
</script>

<a
  style:width={`${width}px`}
  style:height={`${height}px`}
  class="button-link"
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  {href}
  {target}
  rel={target === '_blank' ? 'noopener noreferrer' : ''}
>
  {text}
</a>

<style lang="scss">
  .pc {
    --item-font-size: #{$font-size-24};
  }

  .sp {
    --item-font-size: #{$font-size-20};
  }

  .button-link {
    display: grid;
    place-items: center;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: $white;
    border-radius: $border-radius-64;
    background: map.get($sky-blue, button);
    cursor: pointer;
  }
</style>
