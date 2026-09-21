import type { RuleTable } from '../../model/ruleTable'
import { FREE_HAND_TABLES } from './deductionTables'

/**
 * 画像で載せていた表を、文字で持ち直したもの。
 *
 * @remarks
 * 中身はすべて 公益社団法人日本体操協会『新体操規則2025年版』から取り、
 * 出典（冊子名・節番号・ページ）を各表の `source` とコメントに残してある。
 * 文字にできた表から順に、画像の代わりに出る
 */
export const RULE_TABLES: readonly RuleTable[] = [...FREE_HAND_TABLES]

/** 画像のパスから表を引くための対応表 */
const TABLE_BY_IMAGE_SOURCE = new Map(RULE_TABLES.map((table) => [table.imageSource, table]))

/**
 * 画像に対応する表を引く
 * @param imageSource - 画像のパス
 * @returns 文字で持ち直した表。まだ無ければ undefined
 */
export const findRuleTable = (imageSource: string): RuleTable | undefined =>
  TABLE_BY_IMAGE_SOURCE.get(imageSource)
