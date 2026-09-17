import { describe, expect, it } from 'vitest'
import {
  Apparatus,
  ContentType,
  VIDEOS,
  isIndividualVideo,
  type VideoResource,
} from '@entities/oshimitsuVideo'
import {
  VIDEOS_PER_PAGE,
  buildSearchPath,
  filterVideos,
  parseSearchQuery,
  redirectPath,
  shuffle,
  toCriteria,
  type Criteria,
  type SearchQuery,
} from '@features/oshimitsuSearch'

/**
 * 並べ替えない乱数（Fisher–Yates で常に自分自身と入れ替える）
 * @returns 1 に近い値
 */
const noShuffle = () => 0.999999

describe('shuffle', () => {
  describe('正常系', () => {
    it('並べ替えた場合、要素がそろったまま、元の配列は変わらないこと', () => {
      // #region Given
      const items = [1, 2, 3, 4, 5]
      // #endregion

      // #region When
      const result = shuffle(items, () => 0)
      // #endregion

      // #region Then
      expect([...result].sort()).toEqual([1, 2, 3, 4, 5])
      expect(result).not.toBe(items)
      expect(items).toEqual([1, 2, 3, 4, 5])
      // #endregion
    })

    it('常に最後の要素を選ぶ乱数の場合、並びが変わらないこと', () => {
      // #region Given
      const items = ['a', 'b', 'c']
      // #endregion

      // #region When
      const result = shuffle(items, noShuffle)
      // #endregion

      // #region Then
      expect(result).toEqual(['a', 'b', 'c'])
      // #endregion
    })
  })
})

describe('filterVideos', () => {
  describe('正常系', () => {
    it.each([
      [
        '条件が無い場合、すべての動画が対象になること',
        { apparatuses: [], exceptVideos: [] },
        () => true,
      ],
      [
        '団体の場合、団体の動画だけになること',
        { contentType: ContentType.GROUP, apparatuses: [], exceptVideos: [] },
        (video: VideoResource) => !isIndividualVideo(video),
      ],
      [
        '個人とクラブ・リングの場合、その手具の個人の動画だけになること',
        {
          contentType: ContentType.INDIVIDUAL,
          apparatuses: [Apparatus.CLUB, Apparatus.RING],
          exceptVideos: [],
        },
        (video: VideoResource) =>
          isIndividualVideo(video) &&
          (video.apparatus.slug === 'club' || video.apparatus.slug === 'ring'),
      ],
    ] satisfies [string, Criteria, (video: VideoResource) => boolean][])(
      '%s',
      (_, criteria, matches) => {
        // #region Given
        const expectedTotal = VIDEOS.filter(matches).length
        // #endregion

        // #region When
        const result = filterVideos(criteria)
        // #endregion

        // #region Then
        expect(result.total).toBe(expectedTotal)
        expect(result.items).toHaveLength(Math.min(expectedTotal, VIDEOS_PER_PAGE))
        expect(result.items.every(matches)).toBe(true)
        // #endregion
      },
    )

    it('除く動画を指定した場合、その動画が結果に入らないこと', () => {
      // #region Given
      const videos = VIDEOS.slice(0, 12)
      const exceptVideos = videos.slice(0, 10)
      // #endregion

      // #region When
      const result = filterVideos({ apparatuses: [], exceptVideos }, videos, noShuffle)
      // #endregion

      // #region Then
      expect(result).toEqual({ total: 2, items: videos.slice(10) })
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('手具を指定して種類が団体の場合、1件も当たらないこと', () => {
      // #region Given
      const criteria: Criteria = {
        contentType: ContentType.GROUP,
        apparatuses: [Apparatus.CLUB],
        exceptVideos: [],
      }
      // #endregion

      // #region When
      const result = filterVideos(criteria)
      // #endregion

      // #region Then
      expect(result).toEqual({ total: 0, items: [] })
      // #endregion
    })
  })
})

describe('toCriteria', () => {
  describe('正常系', () => {
    it('slug の場合、種類と手具のオブジェクトになること', () => {
      // #region Given
      const query: SearchQuery = { contentType: 'individual', apparatuses: ['rope', 'stick'] }
      // #endregion

      // #region When
      const result = toCriteria(query)
      // #endregion

      // #region Then
      expect(result).toEqual({
        contentType: ContentType.INDIVIDUAL,
        apparatuses: [Apparatus.ROPE, Apparatus.STICK],
        exceptVideos: [],
      })
      // #endregion
    })
  })
})

describe('parseSearchQuery', () => {
  describe('正常系', () => {
    it.each([
      ['クエリが無い場合、条件が空になること', '', { apparatuses: [] }],
      ['種類が団体の場合、団体になること', '?ct=group', { contentType: 'group', apparatuses: [] }],
      [
        '手具が2つの場合、種類が個人になり、手具が並びのまま入ること',
        '?ct=individual&app=ring,club',
        { contentType: 'individual', apparatuses: ['ring', 'club'] },
      ],
      [
        '手具があって種類が無い場合、種類が個人になること',
        '?app=rope',
        { contentType: 'individual', apparatuses: ['rope'] },
      ],
    ] satisfies [string, string, SearchQuery][])('%s', (_, search, expected) => {
      // #region Given
      const searchParams = new URLSearchParams(search)
      // #endregion

      // #region When
      const result = parseSearchQuery(searchParams)
      // #endregion

      // #region Then
      expect(result).toEqual({ contentType: undefined, ...expected })
      // #endregion
    })
  })

  describe('準正常系', () => {
    it.each([
      [
        '知らない手具が混ざる場合、知っている手具だけが残ること',
        '?app=hoop,club',
        { contentType: 'individual', apparatuses: ['club'] },
      ],
      [
        '知らない手具だけの場合、種類のクエリで決まること',
        '?ct=group&app=hoop',
        { contentType: 'group', apparatuses: [] },
      ],
      ['知らない種類の場合、種類が空になること', '?ct=interview', { apparatuses: [] }],
    ] satisfies [string, string, SearchQuery][])('%s', (_, search, expected) => {
      // #region Given
      const searchParams = new URLSearchParams(search)
      // #endregion

      // #region When
      const result = parseSearchQuery(searchParams)
      // #endregion

      // #region Then
      expect(result).toEqual({ contentType: undefined, ...expected })
      // #endregion
    })
  })
})

describe('buildSearchPath', () => {
  describe('正常系', () => {
    it.each([
      [
        '条件が無い場合、検索結果のページになること',
        { apparatuses: [] },
        '/oshimitsu/search_result/',
      ],
      [
        '団体の場合、団体のページになること',
        { contentType: 'group', apparatuses: [] },
        '/oshimitsu/content_type/group/',
      ],
      [
        '個人で手具が無い場合、個人のページになること',
        { contentType: 'individual', apparatuses: [] },
        '/oshimitsu/content_type/individual/',
      ],
      [
        '個人で手具が1つの場合、手具のページになること',
        { contentType: 'individual', apparatuses: ['club'] },
        '/oshimitsu/content_type/individual/apparatus/club/',
      ],
      [
        '個人で手具が2つの場合、クエリ付きの検索結果のページになること',
        { contentType: 'individual', apparatuses: ['stick', 'ring'] },
        '/oshimitsu/search_result/?ct=individual&app=stick,ring',
      ],
    ] satisfies [string, SearchQuery, string][])('%s', (_, query, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = buildSearchPath(query)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('団体で手具がある場合、手具を無視して団体のページになること', () => {
      // #region Given
      const query: SearchQuery = { contentType: 'group', apparatuses: ['club'] }
      // #endregion

      // #region When
      const result = buildSearchPath(query)
      // #endregion

      // #region Then
      expect(result).toBe('/oshimitsu/content_type/group/')
      // #endregion
    })
  })
})

describe('redirectPath', () => {
  describe('正常系', () => {
    it.each([
      [
        '手具が1つの場合、手具のページになること',
        { contentType: 'individual', apparatuses: ['stick'] },
        '/oshimitsu/content_type/individual/apparatus/stick/',
      ],
      [
        '手具が2つの場合、移さないこと',
        { contentType: 'individual', apparatuses: ['stick', 'rope'] },
        undefined,
      ],
      ['手具が無い場合、移さないこと', { contentType: 'group', apparatuses: [] }, undefined],
    ] satisfies [string, SearchQuery, string | undefined][])('%s', (_, query, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = redirectPath(query)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})
