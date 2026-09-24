import type { RuleContentComplete } from '../../../model/ruleSource'
import { AMENDMENTS_JA } from './amendments'
import { APPENDIX_JA } from './appendix'
import { BASICS_JA } from './basics'
import { COMPETITION_JA } from './competition'
import { FREE_HAND_JA } from './freeHand'
import { GROUP_SCORING_JA } from './groupScoring'
import { INDIVIDUAL_SCORING_JA } from './individualScoring'
import { SCORING_GENERAL_JA } from './scoringGeneral'

/**
 * 日本語の本文。これが正で、ほかの言語はここから訳す。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』。
 * 冊子の1〜101ページを読んで起こしたもので、言い回しは資料のまま変えていない。
 *
 * `RuleContentComplete` を付けてあるので、`RULE_KEY_TREE` に足した鍵の本文を
 * 書き忘れたとき、木から消した鍵の本文が残っているときに、どちらも型で落ちる
 */
export const RULE_JA: RuleContentComplete = {
  // 3章の見出し。中身は担当ごとに分かれているので、章の見出しだけここで持つ
  scoring: { title: '採点規則' },

  ...COMPETITION_JA,
  ...BASICS_JA,
  ...SCORING_GENERAL_JA,
  ...GROUP_SCORING_JA,
  ...INDIVIDUAL_SCORING_JA,
  ...FREE_HAND_JA,
  ...AMENDMENTS_JA,
  ...APPENDIX_JA,
}
