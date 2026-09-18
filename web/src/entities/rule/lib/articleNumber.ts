/**
 * 条の番号を数えるのに必要な、章の形（言語に絞る前でも後でも使える）
 */
export interface NumberableChapter {
  /** 大項 */
  article: readonly {
    /** 条項 */
    section: readonly {
      /** 小項 */
      block?: readonly unknown[]
    }[]
  }[]
}

/**
 * 条項がいくつの条になるかを返す
 * @param section - 条項
 * @returns 小項があれば小項の数、無ければ 1
 */
const countArticlesInSection = (
  section: NumberableChapter['article'][number]['section'][number],
) => (section.block?.length ? section.block.length : 1)

/**
 * 条の番号（第 N 条の N）を返す。番号は章ごとに 1 から振る
 * @param chapter - 章
 * @param articleIndex - 大項の位置（0 始まり）
 * @param sectionIndex - 条項の位置（0 始まり）
 * @param blockIndex - 小項の位置（0 始まり）。条項そのものの番号を求めるときは省く
 * @returns 条の番号
 *
 * @remarks
 * 小項を持つ条項は小項ごとに 1 つ、持たない条項は 1 つの条として、章の初めから数える。
 */
export const calculateArticleNumber = (
  chapter: NumberableChapter,
  articleIndex: number,
  sectionIndex: number,
  blockIndex?: number,
): number => {
  const previousArticles = chapter.article
    .slice(0, articleIndex)
    .flatMap((article) => article.section)
    .reduce((sum, section) => sum + countArticlesInSection(section), 0)
  const previousSections = chapter.article[articleIndex].section
    .slice(0, sectionIndex)
    .reduce((sum, section) => sum + countArticlesInSection(section), 0)
  return previousArticles + previousSections + 1 + (blockIndex ?? 0)
}
