<script lang="ts">
  import { CharacterFigure, Character, findCharacter } from '@entities/character'
  import { calculateArticleNumber, type LocalizedRuleBook } from '@entities/rule'
  import { pageData } from '@shared/lib/device'
  import RuleFigure from './RuleFigure.svelte'

  const {
    ruleBook,
  }: {
    /** 表示中の言語に絞った規則集 */
    ruleBook: LocalizedRuleBook
  } = $props()

  const isMobile = $derived($pageData.isMobile)
  /** ルールの案内役 */
  const guide = findCharacter(Character.OSAMU)

  /** 探している言葉。空なら全部出す */
  let keyword = $state('')
  /** 開いている章。null は全部閉じている */
  let openedChapter = $state<number | null>(0)

  /** 章が探している言葉を含むか。見出しと本文の両方を見る */
  const matches = (chapterIndex: number): boolean => {
    if (keyword.trim() === '') return true

    const chapter = ruleBook.chapter[chapterIndex]
    const haystack = [
      chapter.title,
      ...chapter.article.flatMap((article) => [
        article.title,
        ...article.section.flatMap((section) => [
          section.title,
          section.content,
          ...section.block.flatMap((block) => [block.title, block.element]),
        ]),
      ]),
    ]
      .join('\n')
      .toLowerCase()

    return haystack.includes(keyword.trim().toLowerCase())
  }

  const visibleChapters = $derived(
    ruleBook.chapter
      .map((chapter, index) => ({ chapter, index }))
      .filter(({ index }) => matches(index)),
  )

  /** 探しているときは、当てはまる章をすべて開く */
  const isOpened = (index: number): boolean => keyword.trim() !== '' || openedChapter === index

  const toggle = (index: number) => {
    openedChapter = openedChapter === index ? null : index
  }
</script>

<article class="rules" class:mobile={isMobile}>
  <header class="intro">
    <div class="guide">
      <CharacterFigure character={guide} size={isMobile ? 96 : 124} />
    </div>
    <div class="words">
      <p class="speaker">{guide.name}（ルール・採点）</p>
      <h1>{ruleBook.title}</h1>
      <p class="say">
        規則集は長いので、<strong>章ごとに畳んであります。</strong>
        知りたい言葉を入れて探すこともできます。 まずは第1章から読むと、採点の考え方が分かります。
      </p>
      <p class="caution">
        公式の規則をもとに、読みやすく並べ直したものです。訳の途中の部分があります。
        正式な判断は各競技団体の規則集によります。
      </p>
    </div>
  </header>

  <div class="search">
    <label for="rule-keyword">言葉で探す</label>
    <input
      id="rule-keyword"
      type="search"
      bind:value={keyword}
      placeholder="例：減点、スティック、隊形"
      autocomplete="off"
    />
    {#if keyword.trim() !== ''}
      <span class="result"
        >{visibleChapters.length} / {ruleBook.chapter.length} 章に見つかりました</span
      >
    {/if}
  </div>

  {#if keyword.trim() === ''}
    <nav class="toc" aria-label="目次">
      <p class="toc-title">目次</p>
      <ol>
        {#each ruleBook.chapter as chapter, index (index)}
          <li>
            <button
              type="button"
              onclick={() => toggle(index)}
              class:current={openedChapter === index}
            >
              <span class="number">第{index + 1}章</span>
              <span class="label">{chapter.title}</span>
              {#if chapter.article.length > 0}
                <span class="count">{chapter.article.length}節</span>
              {/if}
            </button>
          </li>
        {/each}
      </ol>
    </nav>
  {/if}

  {#if visibleChapters.length === 0}
    <p class="empty">「{keyword}」は見つかりませんでした。別の言葉で探してみてください。</p>
  {/if}

  {#each visibleChapters as { chapter, index } (index)}
    <section class="chapter">
      <h2>
        <button type="button" onclick={() => toggle(index)} aria-expanded={isOpened(index)}>
          <span class="number">第{index + 1}章</span>
          <span class="label">{chapter.title}</span>
          <span class="mark" aria-hidden="true">{isOpened(index) ? '−' : '＋'}</span>
        </button>
      </h2>

      {#if isOpened(index)}
        <div class="chapter-body">
          {#each chapter.article as article, articleIndex (articleIndex)}
            <section class="article">
              <h3>{articleIndex + 1}. {article.title}</h3>

              {#each article.section as section, sectionIndex (sectionIndex)}
                {#if section.block.length}
                  <h4>{sectionIndex + 1} {section.title}</h4>
                  {#each section.block as block, blockIndex (blockIndex)}
                    <div class="item">
                      <h5>
                        <span class="article-number">
                          {calculateArticleNumber(chapter, articleIndex, sectionIndex, blockIndex)}
                        </span>
                        {block.title}
                      </h5>
                      <p>{block.element}</p>
                      {#each block.image as image, blockImageIndex (blockImageIndex)}
                        <RuleFigure {image} />
                      {/each}
                    </div>
                  {/each}
                {:else}
                  <div class="item">
                    <h5>
                      <span class="article-number">
                        {calculateArticleNumber(chapter, articleIndex, sectionIndex)}
                      </span>
                      {section.title}
                    </h5>
                    <p>{section.content}</p>
                    {#each section.image as image, sectionImageIndex (sectionImageIndex)}
                      <RuleFigure {image} />
                    {/each}
                  </div>
                {/if}
              {/each}
            </section>
          {/each}
        </div>
      {/if}
    </section>
  {/each}
</article>

<style lang="scss">
  .rules {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-40 var(--content-padding-inline) $space-size-80;
  }

  .mobile {
    padding: $space-size-24 var(--content-padding-inline) $space-size-48;
  }

  /* ─── 案内役のひとこと ─── */

  .intro {
    display: flex;
    gap: $space-size-24;
    margin-bottom: $space-size-32;
    padding: $space-size-24;
    border-radius: 10px;
    background: map.get($gray, background);
    align-items: flex-start;
  }

  .mobile .intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: $space-size-12;
  }

  .guide {
    flex: none;
  }

  .words {
    min-inline-size: 0;
  }

  .speaker {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  h1 {
    margin: 0 0 $space-size-12;
    font-size: $font-size-26;
  }

  .mobile h1 {
    font-size: $font-size-20;
  }

  .say {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.9;
  }

  .say strong {
    color: map.get($sky-blue, text);
  }

  .caution {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
  }

  /* ─── 言葉で探す ─── */

  .search {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin-bottom: $space-size-24;
  }

  .search label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .search input {
    flex: 1;
    min-inline-size: 0;
    min-height: 44px;
    padding: 0 $space-size-16;
    font-size: $font-size-16;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
  }

  .search input:focus-visible {
    outline: 2px solid map.get($sky-blue, button);
    outline-offset: 1px;
  }

  .result {
    font-size: $font-size-12;
    color: map.get($sky-blue, text);
  }

  /* ─── 目次 ─── */

  .toc {
    margin-bottom: $space-size-32;
    padding: $space-size-16 $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
  }

  .toc-title {
    margin: 0 0 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .toc ol {
    display: grid;
    gap: $space-size-4;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .toc ol {
    grid-template-columns: 1fr;
  }

  .toc button {
    display: flex;
    gap: $space-size-8;
    width: 100%;
    padding: $space-size-8;
    font-size: $font-size-14;
    border: 0;
    border-radius: 4px;
    background: none;
    align-items: baseline;
    text-align: left;
    cursor: pointer;
  }

  .toc button:hover {
    background: map.get($sky-blue, background);
  }

  .toc button.current {
    font-weight: bold;
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
  }

  .number {
    flex: none;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .toc .label {
    flex: 1;
    min-inline-size: 0;
  }

  .count {
    flex: none;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  /* ─── 章 ─── */

  .chapter {
    border-bottom: 1px solid map.get($gray, 100);
  }

  .chapter h2 {
    margin: 0;
    font-size: $font-size-18;
  }

  .chapter h2 button {
    display: flex;
    gap: $space-size-12;
    width: 100%;
    padding: $space-size-20 $space-size-4;
    font-size: inherit;
    font-weight: bold;
    color: inherit;
    border: 0;
    background: none;
    align-items: center;
    cursor: pointer;
    text-align: left;
  }

  .chapter h2 .label {
    flex: 1;
    min-inline-size: 0;
  }

  .mark {
    flex: none;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
  }

  .chapter-body {
    padding: 0 $space-size-4 $space-size-32;
  }

  .article {
    margin-bottom: $space-size-32;
  }

  .article h3 {
    margin: 0 0 $space-size-16;
    padding-bottom: $space-size-8;
    font-size: $font-size-18;
    border-bottom: 2px solid map.get($sky-blue, border);
  }

  .article h4 {
    margin: $space-size-24 0 $space-size-8;
    font-size: $font-size-16;
    color: map.get($gray, 600);
  }

  .item {
    margin-bottom: $space-size-12;
    padding: $space-size-16;
    border-radius: 6px;
    background: map.get($gray, background);
  }

  .item h5 {
    display: flex;
    gap: $space-size-8;
    margin: 0 0 $space-size-8;
    font-size: $font-size-14;
    align-items: baseline;
  }

  .article-number {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: normal;
    color: $white;
    border-radius: 4px;
    background: map.get($sky-blue, button);
    flex: none;
  }

  .item p {
    margin: 0;
    font-size: $font-size-16;
    line-height: 2;
    white-space: pre-wrap;
  }

  .empty {
    padding: $space-size-40;
    text-align: center;
    color: map.get($gray, light-text);
  }
</style>
