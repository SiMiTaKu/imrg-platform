<script lang="ts">
  import { ELLIPSIS, pageNumbers } from './lib/pageNumbers'

  /** 文言と、その下に小さく出す補助の文言（英語など） */
  interface Label {
    /** 文言 */
    text: string
    /** 補助の文言 */
    secondary?: string
    /** 補助の文言の言語（`lang` 属性） */
    secondaryLang?: string
  }

  /** ページ送りの引数 */
  interface Props {
    /** 今のページ（1始まり） */
    page: number
    /** 全ページ数 */
    totalPages: number
    /** ページを選んだときの処理 */
    onchange: (page: number) => void
    /** ページ送り全体の説明（読み上げ用） */
    ariaLabel: string
    /** 「前へ」の文言 */
    prevLabel: Label
    /** 「次へ」の文言 */
    nextLabel: Label
  }

  const { page, totalPages, onchange, ariaLabel, prevLabel, nextLabel }: Props = $props()

  const numbers = $derived(pageNumbers(page, totalPages))
</script>

<nav class="pagination" aria-label={ariaLabel}>
  <button class="step" type="button" disabled={page <= 1} onclick={() => onchange(page - 1)}>
    ‹ {prevLabel.text}{#if prevLabel.secondary}<span
        class="secondary"
        lang={prevLabel.secondaryLang}>{prevLabel.secondary}</span
      >{/if}
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
    disabled={page >= totalPages}
    onclick={() => onchange(page + 1)}
  >
    {nextLabel.text}{#if nextLabel.secondary}<span class="secondary" lang={nextLabel.secondaryLang}
        >{nextLabel.secondary}</span
      >{/if} ›
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
    list-style: none;
  }

  .step,
  .number {
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

  .secondary {
    margin: 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: normal;
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
