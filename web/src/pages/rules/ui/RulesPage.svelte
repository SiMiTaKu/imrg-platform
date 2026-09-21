<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { Character, findCharacter } from '@entities/character'
  import { calculateArticleNumber, type LocalizedRuleBook } from '@entities/rule'
  import { GuideLead } from '@features/guideLead'
  import { pageData } from '@shared/lib/device'
  import { RuleFigure } from '@widgets/rules'
  import {
    DEFAULT_OPEN,
    articleKey,
    chapterKey,
    chapterMatchesKeyword,
    createInitialOpenState,
    createOpenStateForKeyword,
    isOpenAt,
    sectionKey,
    withAllOpen,
    withChapterOpen,
    type RuleOpenState,
  } from '../lib/openState'

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
  /** 押して変えた開閉。載っていないところは DEFAULT_OPEN に従う */
  let openState = $state<RuleOpenState>(createInitialOpenState())

  /**
   * そこが開いているか
   * @param key - 開閉を見分ける名前
   * @param defaultOpen - まだ押されていないときの開閉
   * @returns 開いていれば true
   */
  const isOpen = (key: string, defaultOpen: boolean): boolean =>
    isOpenAt(openState, key, defaultOpen)

  /**
   * そこの開閉を入れ替える
   * @param key - 開閉を見分ける名前
   * @param defaultOpen - まだ押されていないときの開閉
   */
  const toggle = (key: string, defaultOpen: boolean) => {
    openState = { ...openState, [key]: !isOpen(key, defaultOpen) }
  }

  /**
   * 章ひとつの中（章・節・条）をまとめて開け閉めする
   * @param chapterIndex - 章の位置（0 始まり）
   * @param open - 開くなら true
   */
  const toggleChapterAll = (chapterIndex: number, open: boolean) => {
    openState = withChapterOpen(openState, ruleBook.chapter[chapterIndex], chapterIndex, open)
  }

  /**
   * 規則集ぜんぶをまとめて開け閉めする
   * @param open - 開くなら true
   */
  const toggleAll = (open: boolean) => {
    openState = withAllOpen(ruleBook, open)
  }

  const visibleChapters = $derived(
    ruleBook.chapter
      .map((chapter, index) => ({ chapter, index }))
      .filter(({ chapter }) => chapterMatchesKeyword(chapter, keyword)),
  )

  /**
   * 探している言葉を書き換える
   * @param event - 入力の出来事
   *
   * @remarks
   * 当てはまるところが読める深さまで開いた状態にし直す。言葉を消したら初めの開き方に戻る。
   */
  const handleKeywordInput = (event: Event & { currentTarget: HTMLInputElement }) => {
    const { value } = event.currentTarget
    keyword = value
    openState = createOpenStateForKeyword(ruleBook, value)
  }
</script>

<article class="rules" class:mobile={isMobile}>
  <!-- ファーストビジュアル。背景は画面の端まで、中身だけをコンテンツ幅に収める -->
  <header class="hero">
    <div class="inner">
      <GuideLead character={guide}>
        <h1>{ruleBook.title}</h1>
        <p class="say">
          <strong>{m.rules_intro_collapsible()}</strong>
          {m.rules_intro_guide()}
        </p>
        <p class="caution">{m.rules_caution()}</p>
      </GuideLead>
    </div>
  </header>

  <div class="body">
    <div class="search">
      <label for="rule-keyword">{m.rules_search_label()}</label>
      <input
        id="rule-keyword"
        type="search"
        value={keyword}
        oninput={handleKeywordInput}
        placeholder={m.rules_search_placeholder()}
        autocomplete="off"
      />
      {#if keyword.trim() !== ''}
        <span class="result"
          >{m.rules_search_result({
            found: visibleChapters.length,
            total: ruleBook.chapter.length,
          })}</span
        >
      {/if}
    </div>

    <div class="bulk">
      <button type="button" class="bulk-button" onclick={() => toggleAll(true)}>
        {m.rules_expand_all()}
      </button>
      <button type="button" class="bulk-button" onclick={() => toggleAll(false)}>
        {m.rules_collapse_all()}
      </button>
    </div>

    {#if keyword.trim() === ''}
      <nav class="toc" aria-label={m.rules_toc()}>
        <p class="toc-title">{m.rules_toc()}</p>
        <ol>
          {#each ruleBook.chapter as chapter, index (index)}
            <li>
              <button
                type="button"
                onclick={() => toggle(chapterKey(index), DEFAULT_OPEN.chapter)}
                aria-expanded={isOpen(chapterKey(index), DEFAULT_OPEN.chapter)}
                aria-controls={chapterKey(index)}
              >
                <span class="number">{m.rules_chapter_number({ number: index + 1 })}</span>
                <span class="label">{chapter.title}</span>
                {#if chapter.article.length > 0}
                  <span class="count"
                    >{m.rules_article_count({ count: chapter.article.length })}</span
                  >
                {/if}
              </button>
            </li>
          {/each}
        </ol>
      </nav>
    {/if}

    {#if visibleChapters.length === 0}
      <p class="empty">{m.rules_search_empty({ keyword })}</p>
    {/if}

    {#each visibleChapters as { chapter, index } (index)}
      {@const chapterId = chapterKey(index)}
      {@const isChapterOpen = isOpen(chapterId, DEFAULT_OPEN.chapter)}
      <section class="chapter">
        <h2>
          <button
            type="button"
            class="toggle chapter-toggle"
            onclick={() => toggle(chapterId, DEFAULT_OPEN.chapter)}
            aria-expanded={isChapterOpen}
            aria-controls={chapterId}
          >
            <span class="number">{m.rules_chapter_number({ number: index + 1 })}</span>
            <span class="label">{chapter.title}</span>
            <span class="mark" aria-hidden="true"></span>
          </button>
        </h2>

        <!-- 中身は閉じていても置いたままにして、data-open の付け外しだけで高さを変える -->
        <div class="collapsible" id={chapterId} data-open={isChapterOpen}>
          <div class="collapsible-inner chapter-body">
            <div class="bulk in-chapter">
              <button
                type="button"
                class="bulk-button"
                onclick={() => toggleChapterAll(index, true)}
                aria-label={m.rules_expand_chapter_label({ number: index + 1 })}
              >
                {m.rules_expand_all()}
              </button>
              <button
                type="button"
                class="bulk-button"
                onclick={() => toggleChapterAll(index, false)}
                aria-label={m.rules_collapse_chapter_label({ number: index + 1 })}
              >
                {m.rules_collapse_all()}
              </button>
            </div>

            {#each chapter.article as article, articleIndex (articleIndex)}
              {@const articleId = articleKey(index, articleIndex)}
              {@const isArticleOpen = isOpen(articleId, DEFAULT_OPEN.article)}
              <section class="article">
                <h3>
                  <button
                    type="button"
                    class="toggle article-toggle"
                    onclick={() => toggle(articleId, DEFAULT_OPEN.article)}
                    aria-expanded={isArticleOpen}
                    aria-controls={articleId}
                  >
                    <span class="number">{articleIndex + 1}</span>
                    <span class="label">{article.title}</span>
                    <span class="mark" aria-hidden="true"></span>
                  </button>
                </h3>

                <div class="collapsible" id={articleId} data-open={isArticleOpen}>
                  <div class="collapsible-inner article-body">
                    {#each article.section as section, sectionIndex (sectionIndex)}
                      {@const sectionId = sectionKey(index, articleIndex, sectionIndex)}
                      {@const isSectionOpen = isOpen(sectionId, DEFAULT_OPEN.section)}
                      <section class="section">
                        <h4>
                          <button
                            type="button"
                            class="toggle section-toggle"
                            onclick={() => toggle(sectionId, DEFAULT_OPEN.section)}
                            aria-expanded={isSectionOpen}
                            aria-controls={sectionId}
                          >
                            {#if section.block.length === 0}
                              <span class="article-number">
                                {calculateArticleNumber(chapter, articleIndex, sectionIndex)}
                              </span>
                            {/if}
                            <span class="label">{section.title}</span>
                            <span class="mark" aria-hidden="true"></span>
                          </button>
                        </h4>

                        <div class="collapsible" id={sectionId} data-open={isSectionOpen}>
                          <div class="collapsible-inner section-body">
                            {#if section.block.length > 0}
                              {#each section.block as block, blockIndex (blockIndex)}
                                <div class="item">
                                  <h5>
                                    <span class="article-number">
                                      {calculateArticleNumber(
                                        chapter,
                                        articleIndex,
                                        sectionIndex,
                                        blockIndex,
                                      )}
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
                                <p>{section.content}</p>
                                {#each section.image as image, sectionImageIndex (sectionImageIndex)}
                                  <RuleFigure {image} />
                                {/each}
                              </div>
                            {/if}
                          </div>
                        </div>
                      </section>
                    {/each}
                  </div>
                </div>
              </section>
            {/each}
          </div>
        </div>
      </section>
    {/each}
  </div>
</article>

<style lang="scss">
  .rules {
    // 開閉にかかる時間。章・節・条のどれも同じ間で動かす
    --rule-open-close-duration: 240ms;

    width: 100%;
  }

  // 動きを減らす設定の人には、間を置かずに切り替える
  @media (prefers-reduced-motion: reduce) {
    .rules {
      --rule-open-close-duration: 0ms;
    }
  }

  // 規則の本文はコンテンツ幅に収める
  .body {
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-40 var(--content-padding-inline) $space-size-80;
  }

  .mobile .body {
    padding: $space-size-24 var(--content-padding-inline) $space-size-48;
  }

  /* ─── 案内役のひとこと（ファーストビジュアル） ─── */

  .hero {
    width: 100%;

    // 青（信頼）を両端から差す。トップページと同じ作り
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 16%), transparent 42%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  // 中身だけをコンテンツ幅に収める
  .hero .inner {
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline);
  }

  .mobile .hero .inner {
    padding: $space-size-32 var(--content-padding-inline);
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

  /* ─── すべて開く・すべて閉じる ─── */

  .bulk {
    display: flex;
    gap: $space-size-8;
    padding-bottom: $space-size-24;
    flex-wrap: wrap;
  }

  /* 章の中では、章の中身の gap が下の余白になる */
  .bulk.in-chapter {
    padding-bottom: 0;
  }

  .bulk-button {
    min-height: 32px;
    padding: 0 $space-size-12;
    font-size: $font-size-12;
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 999px;
    background: $white;
    cursor: pointer;
  }

  .bulk-button:hover {
    background: map.get($sky-blue, background);
  }

  .bulk-button:focus-visible {
    outline: 2px solid map.get($sky-blue, button);
    outline-offset: 1px;
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

  /* 今開いている章が目次でも分かるようにする */
  .toc button[aria-expanded='true'] {
    font-weight: bold;
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
  }

  .toc button:focus-visible {
    outline: 2px solid map.get($sky-blue, button);
    outline-offset: -2px;
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

  /* ─── 開閉の見出し（章・節・条で共通） ─── */

  .toggle {
    display: flex;
    gap: $space-size-12;
    width: 100%;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    border: 0;
    background: none;
    transition: padding var(--rule-open-close-duration) ease;
    align-items: center;
    text-align: left;
    cursor: pointer;
  }

  .toggle:focus-visible {
    outline: 2px solid map.get($sky-blue, button);
    outline-offset: -2px;
  }

  .toggle .label {
    flex: 1;
    min-inline-size: 0;
  }

  /* 開いているかどうかは aria-expanded から取り、記号だけで見せる */
  .mark {
    flex: none;
    color: map.get($sky-blue, button);
  }

  .toggle[aria-expanded='false'] .mark::before {
    content: '＋';
  }

  .toggle[aria-expanded='true'] .mark::before {
    content: '−';
  }

  /* ─── 開閉する中身（章・節・条で共通） ─── */

  // 行の高さを 0fr と 1fr のあいだで渡し、高さを決め打ちせずに開け閉めする。
  // 中身は閉じていても置いたままなので、開くときも閉じるときも、
  // 1つだけ動かすときもまとめて動かすときも、同じように動く。
  // fr の補間に対応していないブラウザーでは 0fr と 1fr に飛ぶだけで、
  // 開閉そのものは正しく効く（アニメーションが出ないだけ）。
  // visibility も一緒に渡す。こうすると閉じているあいだは読み上げにも
  // タブ移動にも出てこなくなり、閉じる動きのあいだは最後まで見えたままになる
  .collapsible {
    display: grid;
    grid-template-rows: 0fr;
    visibility: hidden;
    transition:
      grid-template-rows var(--rule-open-close-duration) ease,
      visibility var(--rule-open-close-duration);
  }

  .collapsible[data-open='true'] {
    grid-template-rows: 1fr;
    visibility: visible;
  }

  // 行が 0fr のあいだ、中身をはみ出させない。
  // min-height はグリッドの中身が持つ既定の下限を外すために要る
  .collapsible-inner {
    min-height: 0;
    overflow: hidden;
  }

  /* ─── 章 ─── */

  .chapter {
    border-bottom: 1px solid map.get($gray, 100);
  }

  .chapter h2 {
    margin: 0;
    font-size: $font-size-18;
  }

  /*
    閉じているあいだは上下を詰める。閉じた見出しだけが並ぶ一覧では、
    見出しごとの余白がそのまま縦の長さになり、目当ての章まで遠くなるため
  */
  .chapter-toggle {
    padding: $space-size-8 $space-size-4;
    font-weight: bold;
  }

  /* 開いているあいだは元の余白に戻し、中身と見出しが窮屈にならないようにする */
  .chapter-toggle[aria-expanded='true'] {
    padding: $space-size-20 $space-size-4;
  }

  .chapter-toggle .mark {
    font-size: $font-size-18;
  }

  .chapter-body {
    display: flex;
    gap: $space-size-20;
    padding: 0 $space-size-4 $space-size-32;
    flex-direction: column;
  }

  /* ─── 節（章の中の大項） ─── */

  .article h3 {
    margin: 0;
    font-size: $font-size-16;
  }

  /* 章と同じく、閉じているあいだは上下を詰める */
  .article-toggle {
    padding: $space-size-8;
    font-weight: bold;
    border-inline-start: 4px solid map.get($sky-blue, border);
    border-radius: 4px;
    background: map.get($sky-blue, background);
  }

  .article-toggle[aria-expanded='true'] {
    padding: $space-size-12 $space-size-8;
  }

  .article-toggle .mark {
    font-size: $font-size-16;
  }

  .article-body {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-12 0 $space-size-4;
    padding-inline-start: $space-size-12;
    border-inline-start: 2px solid map.get($sky-blue, border);
    flex-direction: column;
  }

  .mobile .article-body {
    padding-inline-start: $space-size-8;
  }

  /* ─── 条（節の中の条項） ─── */

  .section h4 {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
  }

  .section-toggle {
    padding: $space-size-8 $space-size-4;
    font-weight: bold;
  }

  .section-toggle .mark {
    font-size: $font-size-14;
  }

  .section-body {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-4 0 $space-size-8;
    padding-inline-start: $space-size-12;
    border-inline-start: 2px solid map.get($gray, 100);
    flex-direction: column;
  }

  .mobile .section-body {
    padding-inline-start: $space-size-8;
  }

  /* ─── 条の本文 ─── */

  .item {
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
