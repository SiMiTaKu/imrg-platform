<script context='module' lang='ts'>
  import Image from "../../atomic/image/Image.svelte"
  import { vvRuleBook, calculateIndexOfArticle } from "./data/data"
</script>

<script lang='ts'>
  import { pageData } from "../../atomic/device-store/store"
</script>

<article
  class='rule-book'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <p>
    ※こちらのページは未完成です。適宜更新を行なっておりますので、お待ちください。<br
    />
    ※見やすいサイト作りを心がけております。
  </p>
  <h1>{vvRuleBook.title}</h1>
  {#each vvRuleBook.chapter as chapter, chapterIndex (chapterIndex)}
    <h2>第{chapterIndex + 1}章 {chapter.title}</h2>

    {#each chapter.article as article, articleIndex (articleIndex)}
      <h3>{articleIndex + 1} {article.title}</h3>

      {#each article.section as section, sectionIndex (sectionIndex)}
        {#if section.block.length}
          <h4>{sectionIndex + 1} {section.title}</h4>
          {#each section.block as block, blockIndex (blockIndex)}
            <div>
              <h5>
                第{calculateIndexOfArticle(
                  chapterIndex,
                  articleIndex,
                  sectionIndex,
                  blockIndex
                )}条 {block.title}
              </h5>
              <p>{block.element}</p>
              {#if block.image}
                {#each block.image as image, blockImageIndex (blockImageIndex)}
                  <div>
                    <Image {image}
                           isLazy={true}
                           width='100%' />
                  </div>
                {/each}
              {/if}
            </div>
          {/each}
        {:else}
          <div>
            <h4>
              第{calculateIndexOfArticle(
                chapterIndex,
                articleIndex,
                sectionIndex
              )}条 {section.title}
            </h4>
            <p>{section.content}</p>
            {#if section.image}
              {#each section.image as image, sectionImageIndex (sectionImageIndex)}
                <div>
                  <Image {image}
                         isLazy={true}
                         width='100%' />
                </div>
              {/each}
            {/if}
          </div>
        {/if}
      {/each}
    {/each}
  {/each}
  <div>
    <p><a href='/static'>TOPに戻る</a></p>
  </div>
</article>

<style lang='scss'>
  .pc {
    --width: 1024px;
  }

  .sp {
    --width: 90%;
  }

  .rule-book {
    width: var(--width);
    margin: 0 auto;
  }
</style>
