import type { RuleNode, RuleStructure } from '../../model/ruleSource'
import { AMENDMENTS_STRUCTURE } from './amendments'
import { APPENDIX_STRUCTURE } from './appendix'
import { BASICS_STRUCTURE } from './basics'
import { COMPETITION_STRUCTURE } from './competition'
import { FREE_HAND_STRUCTURE } from './freeHand'
import { GROUP_SCORING_STRUCTURE } from './groupScoring'
import { INDIVIDUAL_SCORING_STRUCTURE } from './individualScoring'
import { SCORING_GENERAL_STRUCTURE } from './scoringGeneral'

/**
 * 3 採点規則。節が多いので、担当を分けて書き起こしたものをここでつなぐ。
 *
 * @remarks
 * 冊子の並びは 3.1 総則／3.2 審判／3.3 一般的な採点規則／3.4 団体競技／
 * 3.5 個人競技／3.6 難度表／3.7 採点票等／3.8 個人徒手
 */
const SCORING_STRUCTURE: RuleNode = {
  key: 'scoring',
  number: '3',
  page: 19,
  // 3.8.10 個人徒手採点表が79ページまで続く
  endPage: 79,
  children: [
    ...SCORING_GENERAL_STRUCTURE,
    ...GROUP_SCORING_STRUCTURE,
    ...INDIVIDUAL_SCORING_STRUCTURE,
    ...FREE_HAND_STRUCTURE,
  ],
}

/**
 * 規則集の骨格。
 *
 * @remarks
 * 冊子の章立てそのまま。1 競技規則／2 新体操の特性とその基本／3 採点規則／
 * 4 変更規則／5 付録 の5章。
 *
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』
 */
export const RULE_STRUCTURE: RuleStructure = [
  COMPETITION_STRUCTURE,
  BASICS_STRUCTURE,
  SCORING_STRUCTURE,
  AMENDMENTS_STRUCTURE,
  APPENDIX_STRUCTURE,
]
