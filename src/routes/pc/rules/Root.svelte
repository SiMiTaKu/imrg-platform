<script lang="ts">
  import { vvRuleBook } from '../../../ts/rules/ViewValueRuleBook';

  /**
   * 条項(section)のインデックスを計算する
   * @param chapterIndex 章のインデックス
   * @param articleIndex 大項のインデックス
   * @param sectionIndex 条項のインデックス
   * @param blockIndex   小項のインデックス
   * @returns 条項のインデックス
   */
  function calculateIndexOfArticle(chapterIndex: number, articleIndex: number, sectionIndex: number, blockIndex: number = undefined): number {
    let index = 0;
    // 現在のchapterIndexの持つarticleの数分ループさせる。
    for (let i = 0; i < vvRuleBook.chapter[chapterIndex].article.length; i++) {
      // 現在のarticleIndex以下かどうか判別
      if(i < articleIndex) {
        // articleIndex未満のarticleのsectionの数分ループさせる。
        for (let j = 0; j < vvRuleBook.chapter[chapterIndex].article[i].section.length; j++) {
          // sectionがブロックを持つか判別
          if(vvRuleBook.chapter[chapterIndex].article[i].section[j].block.length > 0) {
            // ブロックを持つ場合 + ブロックリストの長さ分
            index += vvRuleBook.chapter[chapterIndex].article[i].section[j].block.length;
          } else {
            // ブロックを持たない場合 + 1
            index ++;
          }
        }
      } else if (i === articleIndex) {
        // articleIndex未満のarticleのsectionの数分ループさせる。
        for (let j = 0; j < vvRuleBook.chapter[chapterIndex].article[i].section.length; j++) {
          // sectionがブロックを持つか判別
          if(j < sectionIndex && vvRuleBook.chapter[chapterIndex].article[i].section[j].block.length > 0) {
            // ブロックを持つ場合 + ブロックリストの長さ分
            index += vvRuleBook.chapter[chapterIndex].article[i].section[j].block.length;
          } else if(j <= sectionIndex) {
            // ブロックを持たない場合 + 1
            index ++;
          }
        }
      }
    }
    blockIndex !== undefined ? index += blockIndex : "";
    return index;
  }
</script>

<article id="mrg-rules">

  <h1>{vvRuleBook.title}</h1>
  {#each vvRuleBook.chapter as chapter, chapterIndex}
    <h2>第{chapterIndex + 1}章 {chapter.title}</h2>

    {#each chapter.article as article, articleIndex}
      <h3>{articleIndex + 1} {article.title}</h3>

      {#each article.section as section, sectionIndex}
        {#if section.block.length}
          {sectionIndex + 1} {section.title}
          {#each section.block as block, blockIndex}
            <h4>第{calculateIndexOfArticle(chapterIndex, articleIndex, sectionIndex, blockIndex)}条 {block.title}</h4>
            <p>{@html block.element.replaceAll('\n', '<br>')}</p>
          {/each}
        {:else}
          <h4>第{calculateIndexOfArticle(chapterIndex, articleIndex, sectionIndex)}条 {section.title}</h4>
          <p>{@html section.content.replaceAll('\n', '<br>')}</p>
        {/if}
      {/each}
    {/each}
  {/each}
  <div class="top">
    <p><a href="/">TOPに戻る</a><p>
  </div>
</article>

<style lang="scss">
  #mrg-rules {
    width:  1024px;
    margin: 0 auto;
  }
</style>