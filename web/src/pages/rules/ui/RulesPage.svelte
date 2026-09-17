<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { calculateArticleNumber, type LocalizedRuleBook } from '@entities/rule'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { Image } from '@shared/ui'

  const {
    ruleBook,
  }: {
    /** 表示中の言語に絞った規則集 */
    ruleBook: LocalizedRuleBook
  } = $props()
</script>

<article class="rule-book" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <p>
    {m.rules_notice_incomplete()}<br />
    {m.rules_notice_readability()}
  </p>
  <h1>{ruleBook.title}</h1>
  {#each ruleBook.chapter as chapter, chapterIndex (chapterIndex)}
    <h2>{m.rules_chapter_heading({ number: chapterIndex + 1, title: chapter.title })}</h2>

    {#each chapter.article as article, articleIndex (articleIndex)}
      <h3>{articleIndex + 1} {article.title}</h3>

      {#each article.section as section, sectionIndex (sectionIndex)}
        {#if section.block.length}
          <h4>{sectionIndex + 1} {section.title}</h4>
          {#each section.block as block, blockIndex (blockIndex)}
            <div>
              <h5>
                {m.rules_article_heading({
                  number: calculateArticleNumber(chapter, articleIndex, sectionIndex, blockIndex),
                  title: block.title,
                })}
              </h5>
              <p>{block.element}</p>
              {#each block.image as image, blockImageIndex (blockImageIndex)}
                <div>
                  <Image {image} isLazy={true} width="100%" />
                </div>
              {/each}
            </div>
          {/each}
        {:else}
          <div>
            <h4>
              {m.rules_article_heading({
                number: calculateArticleNumber(chapter, articleIndex, sectionIndex),
                title: section.title,
              })}
            </h4>
            <p>{section.content}</p>
            {#each section.image as image, sectionImageIndex (sectionImageIndex)}
              <div>
                <Image {image} isLazy={true} width="100%" />
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    {/each}
  {/each}
  <div>
    <p><a href={localizeHref(ROUTES.top)}>{m.rules_back_to_top()}</a></p>
  </div>
</article>

<style lang="scss">
  .desktop {
    --width: 1024px;
  }

  .mobile {
    --width: 90%;
  }

  .rule-book {
    width: var(--width);
    margin: 0 auto;
  }
</style>
