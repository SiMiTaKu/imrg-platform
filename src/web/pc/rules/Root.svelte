<script lang="ts">
  import {
    vvRuleBook,
    calculateIndexOfArticle,
  } from "../../../ts/rules/ViewValueRuleBook";
</script>

<article id="mrg-rules" class="rule-book">
  <h1>{vvRuleBook.title}</h1>
  {#each vvRuleBook.chapter as chapter, chapterIndex}
    <h2>第{chapterIndex + 1}章 {chapter.title}</h2>

    {#each chapter.article as article, articleIndex}
      <h3>{articleIndex + 1} {article.title}</h3>

      {#each article.section as section, sectionIndex}
        {#if section.block.length}
          <h4>{sectionIndex + 1} {section.title}</h4>
          {#each section.block as block, blockIndex}
            <div class="rule-book__record">
              <h5>
                第{calculateIndexOfArticle(
                  chapterIndex,
                  articleIndex,
                  sectionIndex,
                  blockIndex
                )}条 {block.title}
              </h5>
              <p class="rule-book__record-text">{block.element}</p>
            </div>
          {/each}
        {:else}
          <div class="rule-book__record">
            <h4 class="rule-book__record-title">
              第{calculateIndexOfArticle(
                chapterIndex,
                articleIndex,
                sectionIndex
              )}条 {section.title}
            </h4>
            <p class="rule-book__record-text">{section.content}</p>
          </div>
        {/if}
      {/each}
    {/each}
  {/each}
  <div class="top">
    <p><a href="/">TOPに戻る</a></p>
    <p></p>
  </div>
</article>

<style lang="scss">
  #mrg-rules {
    width: 1024px;
    margin: 0 auto;
  }

  .rule-book {
    &__record {
      margin-bottom: 48px;
    }

    &__record-text {
      margin: 0;
      white-space: pre-wrap;
    }
  }
</style>
