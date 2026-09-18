<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { EVENT_CATEGORIES, type EventCategorySlug } from '@entities/calendarEvent'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
  import { isEveryCategory } from '../lib/filter'

  /** キーワードと種類で絞り込む欄の引数 */
  interface Props {
    /** 入力中のキーワード */
    keyword: string
    /** 選んでいる種類。空ならすべて */
    categories: readonly EventCategorySlug[]
    /** キーワードを変えたとき */
    onkeywordchange: (keyword: string) => void
    /** 種類の選択を変えたとき。空の配列は「すべて」 */
    oncategorieschange: (categories: EventCategorySlug[]) => void
  }

  const { keyword, categories, onkeywordchange, oncategorieschange }: Props = $props()

  // 日本語ページでは、ラベルに英語を小さく併記する
  const showsBoth = showsSecondaryText()

  /**
   * 日本語ページでは「日本語 / English」の形にする
   * @param message - 文言
   * @returns 表示する文字列
   */
  const withSecondary = (message: typeof m.calendar_search_label): string =>
    showsBoth ? `${message()} / ${message({}, { locale: SECONDARY_LOCALE })}` : message()

  // 全部選んだときは「すべて」と同じ結果なので、「すべて」も選択状態にする
  const allCategories = $derived(isEveryCategory(categories))

  /**
   * 種類の絞り込みは複数選べる。押すたびに入り切りする
   * @param slug - 押した種類の slug
   */
  const toggleCategory = (slug: EventCategorySlug) => {
    oncategorieschange(
      categories.includes(slug)
        ? categories.filter((selected) => selected !== slug)
        : [...categories, slug],
    )
  }
</script>

<section class="search" aria-label={withSecondary(m.calendar_search_label)}>
  <label class="keyword">
    <span class="field-label"
      >{m.calendar_keyword_label()}{#if showsBoth}<span lang="en"
          >{m.calendar_keyword_label({}, { locale: SECONDARY_LOCALE })}</span
        >{/if}</span
    >
    <input
      class="keyword-input"
      type="search"
      value={keyword}
      placeholder={withSecondary(m.calendar_keyword_placeholder)}
      oninput={(inputEvent) => onkeywordchange(inputEvent.currentTarget.value)}
    />
  </label>

  <div class="chips" aria-label={withSecondary(m.calendar_category_filter_label)} role="group">
    <button
      class="chip"
      class:active={allCategories}
      type="button"
      aria-pressed={allCategories}
      onclick={() => oncategorieschange([])}
    >
      {m.calendar_category_all()}{#if showsBoth}<span lang="en"
          >{m.calendar_category_all({}, { locale: SECONDARY_LOCALE })}</span
        >{/if}
    </button>
    {#each EVENT_CATEGORIES as category (category.slug)}
      <button
        style:--color={category.color}
        class="chip"
        class:active={categories.includes(category.slug)}
        type="button"
        aria-pressed={categories.includes(category.slug)}
        onclick={() => toggleCategory(category.slug)}
      >
        <span class="chip-dot"></span>{category.label()}{#if showsBoth}<span lang="en"
            >{category.label({}, { locale: SECONDARY_LOCALE })}</span
          >{/if}
      </button>
    {/each}
  </div>
</section>

<style lang="scss">
  .search {
    display: grid;
    gap: $space-size-12;
    margin-top: $space-size-24;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .keyword {
    display: grid;
    gap: $space-size-4;
  }

  .field-label {
    font-size: 13px;
    font-weight: bold;
  }

  .field-label span[lang='en'] {
    margin-left: $space-size-8;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .keyword-input {
    width: 100%;
    height: 44px;
    padding: 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, 300);
    border-radius: $border-radius-8;
    background: $white;
    box-sizing: border-box;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
  }

  .chip {
    display: flex;
    gap: $space-size-4;
    padding: $space-size-4 $space-size-12;
    font-size: 13px;
    font-weight: bold;
    color: map.get($gray, text);
    border: $border-size-1 solid map.get($sky-blue, 300);
    border-radius: $border-radius-64;
    background: $white;
    align-items: center;
    line-height: 1.4;
    cursor: pointer;
  }

  .chip span[lang='en'] {
    font-size: $font-size-10;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .chip-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color);
  }

  .chip.active {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .chip.active span[lang='en'] {
    color: $white;
  }
</style>
