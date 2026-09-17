import { describe, expect, it } from 'vitest'
import { Apparatus, ContentType } from '@entities/oshimitsuVideo'
import type { Criteria, SearchQuery } from '@features/oshimitsuSearch'
import {
  FILTERED_PAGE_QUERIES,
  filterLabel,
  filteredPageMeta,
  searchResultTitle,
} from '@pages/oshimitsuSearchResult'

// テストでは表示中の言語が既定の言語（日本語）になる

describe('searchResultTitle', () => {
  describe('正常系', () => {
    it.each([
      ['条件が無い場合、「推しミツ！」になること', {}, '推しミツ！'],
      ['団体の場合、種類が付くこと', { contentType: ContentType.GROUP }, '推しミツ！（団体）'],
      [
        '手具が1つの場合、手具だけが付くこと',
        { contentType: ContentType.INDIVIDUAL, apparatuses: [Apparatus.CLUB] },
        '推しミツ！（クラブ）',
      ],
      [
        '手具が2つの場合、何も付かないこと',
        { contentType: ContentType.INDIVIDUAL, apparatuses: [Apparatus.CLUB, Apparatus.RING] },
        '推しミツ！',
      ],
    ] satisfies [string, Partial<Criteria>, string][])('%s', (_, partial, expected) => {
      // #region Given
      const criteria: Criteria = { apparatuses: [], exceptVideos: [], ...partial }
      // #endregion

      // #region When
      const result = searchResultTitle(criteria)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('filterLabel', () => {
  describe('正常系', () => {
    it.each([
      ['個人の場合、「個人」になること', FILTERED_PAGE_QUERIES.individual, '個人'],
      ['団体の場合、「団体」になること', FILTERED_PAGE_QUERIES.group, '団体'],
      ['クラブの場合、「個人 × クラブ」になること', FILTERED_PAGE_QUERIES.club, '個人 × クラブ'],
      [
        'スティックの場合、「個人 × スティック」になること',
        FILTERED_PAGE_QUERIES.stick,
        '個人 × スティック',
      ],
    ] satisfies [string, SearchQuery, string][])('%s', (_, query, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = filterLabel(query)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('種類が無い場合、空文字になること', () => {
      // #region Given
      const query: SearchQuery = { apparatuses: ['club'] }
      // #endregion

      // #region When
      const result = filterLabel(query)
      // #endregion

      // #region Then
      expect(result).toBe('')
      // #endregion
    })
  })
})

describe('filteredPageMeta', () => {
  describe('正常系', () => {
    it.each([
      [
        'リングの場合、手具のページのパスとタイトルになること',
        FILTERED_PAGE_QUERIES.ring,
        '/oshimitsu/content_type/individual/apparatus/ring/',
        '推しミツ！（個人 × リング）',
      ],
      [
        '団体の場合、団体のページのパスとタイトルになること',
        FILTERED_PAGE_QUERIES.group,
        '/oshimitsu/content_type/group/',
        '推しミツ！（団体）',
      ],
    ] satisfies [string, SearchQuery, string, string][])(
      '%s',
      (_, query, expectedPath, expectedTitle) => {
        // #region Given
        // 引数は it.each の表で渡す
        // #endregion

        // #region When
        const result = filteredPageMeta(query)
        // #endregion

        // #region Then
        expect(result.path).toBe(expectedPath)
        expect(result.title.startsWith(`${expectedTitle} | `)).toBe(true)
        // #endregion
      },
    )
  })
})
