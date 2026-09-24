/**
 * 表の列の見きわめ。
 *
 * @remarks
 * 「行の見出しの列を出すか」「右から何列を詰めるか」のように、
 * 書かれていないところを表の中身から決める
 */

import type { RuleTable } from '../model/ruleTable'

/**
 * 幅を詰める列の数を決める。書かれていなければ組み方から決める
 * @param table - 表
 * @returns 右から数えて幅を詰める列の数
 */
export const narrowColumnCount = (table: RuleTable): number =>
  table.narrowColumns ?? (table.layout === 'matrix' ? 0 : 1)

/**
 * 行の見出しの列が要るか。見出しの付いた行が1つでもあれば要る
 * @param table - 表
 * @returns 行の見出しの列を出すなら true
 */
export const hasRowHeader = (table: RuleTable): boolean =>
  table.cornerLabel !== undefined || table.rows.some((row) => row.header !== undefined)

/**
 * 左から何列を行の見出しにするか
 * @param table - 表
 * @returns 行の見出しにする列の数。指定が無ければ 0
 */
export const headerColumnCount = (table: RuleTable): number => table.headerColumns ?? 0

/**
 * 行の見出しが、番号のように短いものばかりか。
 *
 * @remarks
 * 難度表の通し番号のような列に、本文と同じ最小の幅を当てると、
 * 番号1つのために広い列ができてしまう
 *
 * @param table - 表
 * @returns どの見出しも3文字以内なら true
 */
export const hasShortRowHeader = (table: RuleTable): boolean =>
  table.rows.every((row) => (row.header ?? '').length <= 3)
