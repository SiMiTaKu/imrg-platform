import { describe, expect, it } from 'vitest'
import { mergeEmptyCellsDownward } from '@entities/rule'
import type { RuleTable } from '@entities/rule'

/**
 * 試しに使う表を作る
 * @param rows - 行のます目
 * @param options - 表の指定を上書きするもの
 * @returns 表
 */
const makeTable = (
  rows: readonly { group?: string; cells: readonly string[] }[],
  options: Partial<RuleTable> = {},
): RuleTable => ({
  imageSource: '/images/rules/test.png',
  caption: '試しの表',
  columns: ['分類', '内容'],
  rows,
  source: '試し',
  ...options,
})

describe('mergeEmptyCellsDownward', () => {
  describe('正常系', () => {
    it('まとめる指定が無い場合、すべてのます目がそのまま1つ分であること', () => {
      // #region Given
      const table = makeTable([{ cells: ['分類A', '内容1'] }, { cells: ['', '内容2'] }])
      // #endregion

      // #region When
      const result = mergeEmptyCellsDownward(table)
      // #endregion

      // #region Then
      expect(result[0][0].rowSpan).toBe(1)
      expect(result[1][0].rowSpan).toBe(1)
      // #endregion
    })

    it('空のます目が続く場合、上のます目が縦に伸びること', () => {
      // #region Given
      const table = makeTable(
        [{ cells: ['分類A', '内容1'] }, { cells: ['', '内容2'] }, { cells: ['', '内容3'] }],
        { mergeEmptyCells: true },
      )
      // #endregion

      // #region When
      const result = mergeEmptyCellsDownward(table)
      // #endregion

      // #region Then
      expect(result[0][0].rowSpan).toBe(3)
      expect(result[1][0].rowSpan).toBe(0)
      expect(result[2][0].rowSpan).toBe(0)
      // #endregion
    })

    it('中身のあるます目が来た場合、そこから新しくまとめ直すこと', () => {
      // #region Given
      const table = makeTable(
        [
          { cells: ['分類A', '内容1'] },
          { cells: ['', '内容2'] },
          { cells: ['分類B', '内容3'] },
          { cells: ['', '内容4'] },
        ],
        { mergeEmptyCells: true },
      )
      // #endregion

      // #region When
      const result = mergeEmptyCellsDownward(table)
      // #endregion

      // #region Then
      expect(result[0][0].rowSpan).toBe(2)
      expect(result[2][0].rowSpan).toBe(2)
      // #endregion
    })

    it('区分の見出しをまたぐ場合、まとめないこと', () => {
      // #region Given
      const table = makeTable(
        [
          { cells: ['分類A', '内容1'] },
          { cells: ['', '内容2'] },
          { group: '別の区分', cells: ['', '内容3'] },
          { cells: ['', '内容4'] },
        ],
        { mergeEmptyCells: true },
      )
      // #endregion

      // #region When
      const result = mergeEmptyCellsDownward(table)
      // #endregion

      // #region Then
      expect(result[0][0].rowSpan).toBe(2)
      expect(result[2][0].rowSpan).toBe(1)
      expect(result[3][0].rowSpan).toBe(1)
      // #endregion
    })

    it('中身のあるます目だけが並ぶ場合、どれも1つ分のままであること', () => {
      // #region Given
      const table = makeTable([{ cells: ['分類A', '内容1'] }, { cells: ['分類B', '内容2'] }], {
        mergeEmptyCells: true,
      })
      // #endregion

      // #region When
      const result = mergeEmptyCellsDownward(table)
      // #endregion

      // #region Then
      expect(result.every((row) => row.every((cell) => cell.rowSpan === 1))).toBe(true)
      // #endregion
    })
  })
})
