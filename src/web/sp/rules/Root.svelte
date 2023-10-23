<script lang="ts">
  import { vvRuleBook, calculateIndexOfArticle } from '../../../ts/rules/ViewValueRuleBook';


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
              <h5>第{calculateIndexOfArticle(chapterIndex, articleIndex, sectionIndex, blockIndex)}条 {block.title}</h5>
              <p class="rule-book__record-text">{@html block.element.replaceAll('\n', '<br>')}</p>
            </div>
          {/each}
        {:else}
          <div class="rule-book__record">
            <h4 class="rule-book__record-title">第{calculateIndexOfArticle(chapterIndex, articleIndex, sectionIndex)}条 {section.title}</h4>
            <p class="rule-book__record-text">{@html section.content.replaceAll('\n', '<br>')}</p>
          </div>
        {/if}
      {/each}
    {/each}
  {/each}
  <div class="top">
    <p><a href="/static">TOPに戻る</a><p>
  </div>
</article>

<style lang="scss">
  #mrg-rules {
    width:    355px;
    margin:   0 auto;
    overflow: hidden;
  }

  .rule-book {
    &__record {
      margin-bottom: 48px;
    }

    &__record-text { margin: 0; }
  }

  h1 {
    font-size:   24px;
    font-weight: bold;
    padding:     24px 0;
    text-align:  center;
    margin:      0;
  }

  h2 {
    font-size:   20px;
    font-weight: bold;
    margin:      0 0 24px;
  }

  h3 {
    font-size:   18px;
    font-weight: bold;
    margin:      0 0 16px;
  }

  h4, h5 {
    font-size:   16px;
    font-weight: bold;
    margin:      0 0 16px;
  }

  p {
    font-size: 14px;
    margin:    0;
  }
</style>