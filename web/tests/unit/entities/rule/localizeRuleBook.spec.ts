import { describe, expect, it } from 'vitest'
import { RULE_BOOK, localizeRuleBook } from '@entities/rule'
import type { RuleBook } from '@entities/rule'

/** 小項あり・なしの条項と図を持つ規則集 */
const RULE_BOOK_SAMPLE: RuleBook = {
  title: '規則',
  titleEnglish: 'Rules',
  chapter: [
    {
      title: '章',
      titleEnglish: 'Chapter',
      article: [
        {
          title: '大項',
          titleEnglish: 'Part',
          section: [
            {
              title: '条項',
              titleEnglish: 'Section',
              content: '本文',
              contentEnglish: 'Body',
              image: [{ src: '/a.png', alt: '図', altEnglish: 'Figure' }],
            },
            {
              title: '小項を持つ条項',
              titleEnglish: 'Section with items',
              block: [
                { title: '小項', titleEnglish: 'Item', element: '要素', elementEnglish: 'Element' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

describe('localizeRuleBook', () => {
  describe('正常系', () => {
    it('日本語の場合、日本語の文字列だけになること', () => {
      // #region Given
      const locale = 'ja'
      // #endregion

      // #region When
      const result = localizeRuleBook(RULE_BOOK_SAMPLE, locale)
      // #endregion

      // #region Then
      expect(result).toEqual({
        title: '規則',
        chapter: [
          {
            title: '章',
            article: [
              {
                title: '大項',
                section: [
                  {
                    title: '条項',
                    content: '本文',
                    image: [{ src: '/a.png', alt: '図' }],
                    block: [],
                  },
                  {
                    title: '小項を持つ条項',
                    content: '',
                    image: [],
                    block: [{ title: '小項', element: '要素', image: [] }],
                  },
                ],
              },
            ],
          },
        ],
      })
      // #endregion
    })

    it('英語の場合、英語の文字列だけになること', () => {
      // #region Given
      const locale = 'en'
      // #endregion

      // #region When
      const result = localizeRuleBook(RULE_BOOK_SAMPLE, locale)
      // #endregion

      // #region Then
      const [section, sectionWithBlock] = result.chapter[0].article[0].section
      expect(result.title).toBe('Rules')
      expect(result.chapter[0].title).toBe('Chapter')
      expect(section).toEqual({
        title: 'Section',
        content: 'Body',
        image: [{ src: '/a.png', alt: 'Figure' }],
        block: [],
      })
      expect(sectionWithBlock.block).toEqual([{ title: 'Item', element: 'Element', image: [] }])
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('規則集の英語の場合、訳し漏れ（日本語の文字）が無いこと', () => {
      // #region Given
      const japanese = /[぀-ヿ㐀-鿿！-～]/
      // #endregion

      // #region When
      const text = JSON.stringify(localizeRuleBook(RULE_BOOK, 'en'))
      // #endregion

      // #region Then
      expect(text).not.toMatch(japanese)
      // #endregion
    })
  })
})
