<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { pageNumbers } from '../_lib/calendar'
</script>

<script lang="ts">
  export let page: number
  export let totalPages: number

  const dispatch = createEventDispatcher<{ change: number }>()

  $: numbers = pageNumbers(page, totalPages)
</script>

<nav class="pagination" aria-label="ページ / Pages">
  <button
    class="step"
    type="button"
    disabled={page <= 1}
    on:click={() => dispatch('change', page - 1)}
  >
    ‹ 前へ<span lang="en">Prev</span>
  </button>

  <ul class="numbers">
    {#each numbers as item, index (`${item}-${index}`)}
      <li>
        {#if item === '…'}
          <span class="ellipsis">…</span>
        {:else}
          <button
            class="number"
            class:current={item === page}
            type="button"
            aria-current={item === page ? 'page' : undefined}
            on:click={() => dispatch('change', Number(item))}>{item}</button
          >
        {/if}
      </li>
    {/each}
  </ul>

  <button
    class="step"
    type="button"
    disabled={page >= totalPages}
    on:click={() => dispatch('change', page + 1)}
  >
    次へ<span lang="en">Next</span> ›
  </button>
</nav>

<style lang="scss">
  .pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: $space-size-8;
    margin-top: $space-size-32;
  }

  .numbers {
    display: flex;
    gap: $space-size-4;
    list-style: none;
  }

  .step,
  .number {
    min-width: 40px;
    height: 40px;
    padding: 0 $space-size-12;
    border: $border-size-1 solid map.get($sky-blue, border);
    border-radius: $border-radius-8;
    background: $white;
    color: map.get($sky-blue, text);
    font-size: $font-size-14;
    font-weight: bold;
    font-variant-numeric: tabular-nums;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }

  .step span[lang='en'] {
    margin: 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: normal;
  }

  .current {
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
    color: $white;
  }

  .ellipsis {
    display: grid;
    place-items: center;
    min-width: 24px;
    height: 40px;
    color: map.get($gray, light-text);
  }
</style>
