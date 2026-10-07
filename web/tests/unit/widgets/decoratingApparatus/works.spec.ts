import { describe, expect, it } from 'vitest'
import {
  apparatusCounts,
  filterByApparatus,
  groupByApparatus,
  numberWorks,
} from '@widgets/decoratingApparatus/lib/works'

/** 競技で使う順 */
const ORDER = [{ slug: 'stick' }, { slug: 'ring' }, { slug: 'rope' }, { slug: 'club' }] as const

const works = numberWorks([
  { apparatus: { slug: 'ring' } },
  { apparatus: { slug: 'club' } },
  { apparatus: { slug: 'stick' } },
  { apparatus: { slug: 'ring' } },
  { apparatus: { slug: 'club' } },
])

describe('numberWorks', () => {
  describe('正常系', () => {
    it('元の並びの順に、1 から番号が付くこと', () => {
      // #region When
      const result = works.map((work) => work.number)
      // #endregion

      // #region Then
      expect(result).toEqual([1, 2, 3, 4, 5])
      // #endregion
    })
  })
})

describe('groupByApparatus', () => {
  describe('正常系', () => {
    it('手具の順にまとまり、同じ手具の中は番号の順のままであること', () => {
      // #region When
      const result = groupByApparatus(works, ORDER).map((work) => work.number)
      // #endregion

      // #region Then
      expect(result).toEqual([3, 1, 4, 2, 5])
      // #endregion
    })
  })
})

describe('filterByApparatus', () => {
  describe('正常系', () => {
    it.each([
      ['手具を選んだ場合、その手具の作品だけになること', 'club', [2, 5]],
      ['null の場合、すべての作品が残ること', null, [1, 2, 3, 4, 5]],
      ['作品の無い手具の場合、空になること', 'rope', []],
    ] as const)('%s', (_, slug, expected) => {
      // #region When
      const result = filterByApparatus(works, slug).map((work) => work.number)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })
  })
})

describe('apparatusCounts', () => {
  describe('正常系', () => {
    it('作品のある手具だけが、手具の順に作品数つきで並ぶこと', () => {
      // #region When
      const result = apparatusCounts(works, ORDER).map(({ apparatus, count }) => [
        apparatus.slug,
        count,
      ])
      // #endregion

      // #region Then
      expect(result).toEqual([
        ['stick', 1],
        ['ring', 2],
        ['club', 2],
      ])
      // #endregion
    })
  })
})
