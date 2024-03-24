<script lang="ts">
  import { page } from "$app/stores";

  export let width: string;
  export let height: string;
  export let text: string;
  export let href: string;
</script>

<a
  class="button-link"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
  {href}
  style:width
  style:height
>
  {text}
</a>

<style lang="scss">
  .pc {
    --item-font-size: 24px;
  }

  .sp {
    --item-font-size: 20px;
  }

  .button-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: #333333;
    text-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
    border-radius: 8px;
    background-color: white;
    border: 1px solid #333333;
    box-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
  }
</style>
