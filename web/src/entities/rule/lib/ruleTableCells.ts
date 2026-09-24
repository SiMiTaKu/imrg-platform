/**
 * 表のます目の整え。
 *
 * @remarks
 * 書き方のゆれをそろえ、縦に続く空のます目を上のます目にまとめる
 */

import type { RuleTable, RuleTableCell, RuleTableCellSource } from '../model/ruleTable'
import { headerColumnCount } from './ruleTableColumns'

/**
 * ます目の書き方をそろえる。ただの文字列で書かれていたら `text` だけの形にする
 * @param cell - ます目。文字列か、`colSpan` 付きのもの
 * @returns `text` と `colSpan` を持つ形にそろえたます目
 */
export const normalizeRuleTableCell = (cell: RuleTableCellSource): Required<RuleTableCell> =>
  typeof cell === 'string'
    ? { text: cell, colSpan: 1, rowSpan: 1, slash: false }
    : {
        text: cell.text,
        colSpan: cell.colSpan ?? 1,
        rowSpan: cell.rowSpan ?? 1,
        slash: cell.slash ?? false,
      }

/**
 * 縦に続く空のます目を、上のます目にまとめた結果。
 *
 * @remarks
 * `rowSpan` が 0 のます目は、上のます目に呑まれたので出さない
 */
export interface MergedRuleTableCell {
  /** ます目の中身 */
  readonly text: string
  /** 横にいくつ分か */
  readonly colSpan: number
  /** 縦にいくつ分か。0 なら上に呑まれたので出さない */
  readonly rowSpan: number
  /** 斜線を引くか */
  readonly slash: boolean
}

/**
 * 縦に続く空のます目を、上のます目にまとめる。
 *
 * @remarks
 * 欠点表のように「分類」「内容」が何行かにわたって同じ表では、2行目から先を
 * 空にして書いてある。そのまま出すと空の枠が並んで読みにくいので、上のます目を
 * 縦に伸ばして1つにする。
 *
 * 区分の見出し（`group`）をまたいでは、まとめない。区分が変われば別のかたまりになる
 *
 * @param table - 表
 * @returns 行ごと・ます目ごとの、まとめた結果
 */
export const mergeEmptyCellsDownward = (
  table: RuleTable,
): readonly (readonly MergedRuleTableCell[])[] => {
  const rows = table.rows.map((row) => row.cells.map(normalizeRuleTableCell))
  const merged: MergedRuleTableCell[][] = rows.map((cells) =>
    cells.map((cell) => ({
      text: cell.text,
      colSpan: cell.colSpan,
      rowSpan: cell.rowSpan,
      slash: cell.slash,
    })),
  )

  if (!table.mergeEmptyCells) return merged

  const columnCount = Math.max(...rows.map((cells) => cells.length), 0)
  /** まとめる列。書いていなければすべての列 */
  const targets = Array.isArray(table.mergeEmptyCells) ? table.mergeEmptyCells : undefined

  for (let column = 0; column < columnCount; column += 1) {
    if (targets && !targets.includes(column)) continue

    let anchor = -1
    for (let row = 0; row < merged.length; row += 1) {
      // 区分の見出しで区切る。区分が変われば、まとめ直す
      if (table.rows[row].group !== undefined) anchor = -1

      /*
        左の**行の見出しの列**が新しい値になった行から、新しいかたまりが始まる。

        大分類が変わったのに小分類の空のます目が前のかたまりにつながると、
        別の分類の見出しに呑まれてしまう。
        かたまりの先頭は、中身が空でもそこを起点にする。
        そうしないと、名前の無い小分類（倒立など）が行ごとに分かれてしまう。

        見る先を行の見出しの列だけにしているのは、本文の列まで見ると
        中身のある行のたびにまとめ直してしまい、減点のように同じ値が続く列が
        いつまでもまとまらないため
      */
      const groupingColumns = Math.min(column, headerColumnCount(table))
      if (rows[row].slice(0, groupingColumns).some((left) => left.text !== '')) anchor = row

      const cell = merged[row][column]
      if (cell === undefined) continue

      if (cell.text === '' && anchor >= 0 && anchor !== row) {
        merged[anchor][column] = {
          ...merged[anchor][column],
          rowSpan: merged[anchor][column].rowSpan + 1,
        }
        merged[row][column] = { ...cell, rowSpan: 0 }
      } else if (cell.text !== '') {
        anchor = row
      }
    }
  }

  return merged
}
