<script lang='ts'>
  import { judgementApparatus } from "../_store/apparatus"
  import { pageData } from "../../../atomic/device-store/store"

  export let count: number
</script>

<div
  class="counter {$judgementApparatus
    ? $judgementApparatus.imageColor
    : 'gray'}"
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <button
    class='minus'
    disabled={count <= 0}
    type='button'
    on:click={() => count--}>−</button
  >
  <span class='count'>{count}</span>
  <button class='plus'
          type='button'
          on:click={() => count++}>+</button>
</div>

<style lang='scss'>
  .pc {
    --button-size: 40px;
  }

  .sp {
    --button-size: 32px;
  }

  .gray {
    --button-color: #707070;
  }

  .blue {
    --button-color: #0065a4;
  }

  .red {
    --button-color: #d30000;
  }

  .yellow {
    --button-color: #ecc200;
  }

  .green {
    --button-color: #219300;
  }

  .counter {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto 1fr;
    gap: 12px;
  }

  .plus,
  .minus {
    display: grid;
    justify-content: center;
    align-items: center;
    width: var(--button-size);
    height: var(--button-size);
    font-size: 24px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 4px;
    background-color: var(--button-color);
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }

    &:active {
      transition: 0.1s;
      background: white;
      color: var(--button-color);
    }

    &:disabled {
      background-color: #aaaaaa;
      color: white;
      pointer-events: none;
      user-select: none;
    }
  }

  .count {
    display: grid;
    justify-content: center;
    align-items: center;
    width: var(--button-size);
    font-size: 28px;
    font-weight: bold;
  }
</style>
