<script lang="ts">
  import { ELLIPSIS, pageNumbers } from './lib/pageNumbers'

  /** 読み上げ用の名前。画面には出さない */
  interface Labels {
    /** ページ送り全体 */
    navigation: string
    /** 最初のページへ */
    first: string
    /** 前のページへ */
    prev: string
    /** 次のページへ */
    next: string
    /** 最後のページへ */
    last: string
  }

  /** ページ送りの引数 */
  interface Props {
    /** 今のページ（1始まり） */
    page: number
    /** 全ページ数 */
    totalPages: number
    /** ページを選んだときの処理 */
    onchange: (page: number) => void
    /** 読み上げ用の名前。アイコンだけのボタンにも名前が要るため、使う側の言語で渡す */
    labels: Labels
  }

  const { page, totalPages, onchange, labels }: Props = $props()

  const numbers = $derived(pageNumbers(page, totalPages))
  const isFirst = $derived(page <= 1)
  const isLast = $derived(page >= totalPages)
</script>

<!-- 矢印の形。« ‹ › » の順に、2本線と1本線を左右で使う -->
{#snippet chevron(direction: 'left' | 'right', double: boolean)}
  <svg class="icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    {#if direction === 'left'}
      <path d="M10 3 5 8l5 5" />
      {#if double}<path d="M14 3 9 8l5 5" />{/if}
    {:else}
      <path d="m6 3 5 5-5 5" />
      {#if double}<path d="m2 3 5 5-5 5" />{/if}
    {/if}
  </svg>
{/snippet}

<nav class="pagination" aria-label={labels.navigation}>
  <button
    class="step"
    type="button"
    aria-label={labels.first}
    disabled={isFirst}
    onclick={() => onchange(1)}
  >
    {@render chevron('left', true)}
  </button>
  <button
    class="step"
    type="button"
    aria-label={labels.prev}
    disabled={isFirst}
    onclick={() => onchange(page - 1)}
  >
    {@render chevron('left', false)}
  </button>

  <ul class="numbers">
    {#each numbers as item, index (`${item}-${index}`)}
      <li>
        {#if item === ELLIPSIS}
          <span class="ellipsis">…</span>
        {:else}
          <button
            class="number"
            class:current={item === page}
            type="button"
            aria-current={item === page ? 'page' : undefined}
            onclick={() => onchange(item)}>{item}</button
          >
        {/if}
      </li>
    {/each}
  </ul>

  <button
    class="step"
    type="button"
    aria-label={labels.next}
    disabled={isLast}
    onclick={() => onchange(page + 1)}
  >
    {@render chevron('right', false)}
  </button>
  <button
    class="step"
    type="button"
    aria-label={labels.last}
    disabled={isLast}
    onclick={() => onchange(totalPages)}
  >
    {@render chevron('right', true)}
  </button>
</nav>

<style lang="scss">
  .pagination {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    align-items: center;
    justify-content: center;

    // 前の要素との間隔。置き換えは TODO 5-5
    margin-top: $space-size-32;
  }

  .numbers {
    display: flex;
    gap: $space-size-4;
    padding: 0;
    list-style: none;
  }

  .step,
  .number {
    display: grid;
    place-items: center;
    min-width: 40px;
    height: 40px;
    padding: 0 $space-size-12;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-8;
    background: $white;
    font-variant-numeric: tabular-nums;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }

  .step {
    width: 40px;
    padding: 0;
  }

  .icon {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentcolor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }

  .current {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .ellipsis {
    display: grid;
    place-items: center;
    min-width: 24px;
    height: 40px;
    color: map.get($gray, light-text);
  }
</style>
