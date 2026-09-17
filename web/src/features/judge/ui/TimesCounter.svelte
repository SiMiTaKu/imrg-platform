<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { judgementApparatus } from '../store/apparatus'

  type Props = {
    /** 回数 */
    count: number
    /** 回数を変えたときに呼ぶ。引数は変えたあとの回数 */
    onchange: (count: number) => void
  }

  const { count, onchange }: Props = $props()

  const color = $derived($judgementApparatus?.imageColor ?? 'gray')
</script>

<div class="counter {color}">
  <button
    class="minus"
    aria-label={m.judge_counter_decrease()}
    disabled={count <= 0}
    type="button"
    onclick={() => onchange(count - 1)}>−</button
  >
  <span class="count">{count}</span>
  <button
    class="plus"
    aria-label={m.judge_counter_increase()}
    type="button"
    onclick={() => onchange(count + 1)}>+</button
  >
</div>

<style lang="scss">
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
    gap: 12px;
    grid-template-columns: auto auto auto 1fr;
    align-items: center;
    justify-content: center;
  }

  .plus,
  .minus {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 4px;
    background-color: var(--button-color);
    transition: 0.5s;

    &:hover {
      filter: brightness(1.2);
    }

    &:active {
      color: var(--button-color);
      background: white;
      transition: 0.1s;
    }

    &:disabled {
      color: white;
      background-color: #aaa;
      pointer-events: none;
      user-select: none;
    }
  }

  .count {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 26px;
    font-weight: bold;
  }
</style>
