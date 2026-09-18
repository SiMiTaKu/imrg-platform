import { describe, expect, it } from 'vitest'
import { RULE_BOOK, calculateArticleNumber } from '@entities/rule'
import type { NumberableChapter } from '@entities/rule'

/** 小項あり・なしの条項を混ぜた章 */
const CHAPTER: NumberableChapter = {
  article: [
    { section: [{}, { block: [] }] },
    { section: [{ block: [1, 2, 3] }, {}, { block: [1, 2] }] },
  ],
}

describe('calculateArticleNumber', () => {
  describe('正常系', () => {
    it.each([
      ['章の最初の条項の場合、1 になること', 0, 0, undefined, 1],
      ['小項が空の条項は 1 つの条として数えること', 0, 1, undefined, 2],
      ['前の大項の条項をすべて数えること', 1, 0, 0, 3],
      ['小項の位置を足すこと', 1, 0, 2, 5],
      ['前の条項の小項の数を数えること', 1, 1, undefined, 6],
      ['小項を持たない条項のあとの小項の場合、続きの番号になること', 1, 2, 1, 8],
    ] as const)('%s', (_, articleIndex, sectionIndex, blockIndex, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = calculateArticleNumber(CHAPTER, articleIndex, sectionIndex, blockIndex)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })

    it.each([
      ['競技規則の「競技者の服装」の場合、本文が参照する第39条になること', 5, 5, 39],
      ['競技規則の「伴奏音楽」の場合、本文が参照する第45条になること', 7, 1, 45],
    ] as const)('%s', (_, articleIndex, sectionIndex, expected) => {
      // #region Given
      const chapter = RULE_BOOK.chapter[0]
      // #endregion

      // #region When
      const result = calculateArticleNumber(chapter, articleIndex, sectionIndex)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
