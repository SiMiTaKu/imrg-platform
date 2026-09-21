import type { RuleTable, RuleTree } from '../../model/ruleTable'
import { APPARATUS_TABLES } from './apparatusTables'
import { ARTISTRY_TABLES } from './artistryTables'
import { FREE_HAND_TABLES } from './deductionTables'
import { DIFFICULTY_FIGURE_TABLES } from './difficultyFigures'
import { DIFFICULTY_TABLES } from './difficultyTables'
import { EXECUTION_TABLES } from './executionTables'
import { FORM_TABLES } from './formTables'
import { REQUIREMENT_TABLES } from './requirementTables'
import { SCORE_TABLES } from './scoreTables'
import { SCORING_TREES } from './scoringTrees'

/**
 * 画像で載せていた表を、文字で持ち直したもの。
 *
 * @remarks
 * 中身はすべて 公益財団法人日本体操協会『新体操男子規則 2025年版』から取り、
 * 出典（冊子名・節番号・ページ）を各表の `source` とコメントに残してある。
 * 文字にできた表から順に、画像の代わりに出る
 */
export const RULE_TABLES: readonly RuleTable[] = [
  ...APPARATUS_TABLES,
  ...ARTISTRY_TABLES,
  ...DIFFICULTY_FIGURE_TABLES,
  ...DIFFICULTY_TABLES,
  ...EXECUTION_TABLES,
  ...FORM_TABLES,
  ...FREE_HAND_TABLES,
  ...REQUIREMENT_TABLES,
  ...SCORE_TABLES,
]

/**
 * 画像で載せていた分類図を、文字で持ち直したもの。
 *
 * @remarks
 * 罫線と文字だけでできた図だけをここに置く。
 * 人の動きの絵（難度の姿勢など）は文字にできないので、画像のまま出す
 */
export const RULE_TREES: readonly RuleTree[] = [...SCORING_TREES]

/**
 * 審判が書き込む様式（採点票・減点票・審判メモ）。
 *
 * @remarks
 * 規則集のページからはまだ参照されていない。
 * `imageSource` は差し替えの鍵として使うだけで、同じ名前の画像は置いていない。
 * 条文側でこの鍵を指すと、画像を読みに行かずにこの表が出る
 */
export const RULE_FORMS: readonly RuleTable[] = [...FORM_TABLES]

/** 画像のパスから表を引くための対応表 */
const TABLE_BY_IMAGE_SOURCE = new Map(RULE_TABLES.map((table) => [table.imageSource, table]))

/** 画像のパスから分類図を引くための対応表 */
const TREE_BY_IMAGE_SOURCE = new Map(RULE_TREES.map((tree) => [tree.imageSource, tree]))

/**
 * 画像に対応する表を引く
 * @param imageSource - 画像のパス
 * @returns 文字で持ち直した表。まだ無ければ undefined
 */
export const findRuleTable = (imageSource: string): RuleTable | undefined =>
  TABLE_BY_IMAGE_SOURCE.get(imageSource)

/**
 * 画像に対応する分類図を引く
 * @param imageSource - 画像のパス
 * @returns 文字で持ち直した分類図。まだ無ければ undefined
 */
export const findRuleTree = (imageSource: string): RuleTree | undefined =>
  TREE_BY_IMAGE_SOURCE.get(imageSource)
