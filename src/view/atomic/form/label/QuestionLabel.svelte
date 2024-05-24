<script lang='ts'>
  import { judgementApparatus } from "../../../page/judge/_store/apparatus"

  export let caption: string
  export let annotation: string | undefined = undefined
</script>

<div
  class="header {$judgementApparatus ? $judgementApparatus.imageColor : 'gray'}"
>
  <span class='title'><span class='icon'>Q</span>{caption}</span>
  {#if annotation}
    <span class='annotation'>※{annotation}</span>
  {/if}
</div>

<style lang='scss'>
  .gray {
    --icon-background: #707070;
  }

  .blue {
    --icon-background: #00a2ff;
  }

  .red {
    --icon-background: #ff0000;
  }

  .yellow {
    --icon-background: #f6ce00;
  }

  .green {
    --icon-background: #37ec00;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: 8px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background: var(--icon-background);
    border-radius: 1em;
  }

  .title {
    display: flex;
    flex-direction: row;
    gap: 12px;
    font-size: 22px;
    font-weight: bold;
  }

  .annotation {
    font-size: 16px;
  }
</style>
