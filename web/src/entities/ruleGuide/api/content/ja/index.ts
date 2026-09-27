import type { GuideContent } from '../../../model'
import { BASICS_JA } from './basics'
import { FORMATION_JA } from './formation'
import { GROUP_JA } from './group'
import { INDIVIDUAL_JA } from './individual'
import { SCORE_JA } from './score'
import { SCORE_ARTISTRY_JA } from './scoreArtistry'
import { SCORE_DIFFICULTY_JA } from './scoreDifficulty'
import { SCORE_EXECUTION_JA } from './scoreExecution'
import { TOSHU_JA } from './toshu'

/**
 * 日本語の本文。ここが正。
 *
 * @remarks
 * 鍵の木（`GUIDE_KEY_TREE`）に無い鍵は書けない。
 * 逆に、木にあっても**ここに無い鍵はページが生えない**。
 * だから書いた順に公開できる
 */
export const GUIDE_CONTENT_JA: GuideContent = {
  basics: BASICS_JA,
  score: SCORE_JA,
  'score.difficulty': SCORE_DIFFICULTY_JA,
  'score.artistry': SCORE_ARTISTRY_JA,
  'score.execution': SCORE_EXECUTION_JA,
  group: GROUP_JA,
  'group.formation': FORMATION_JA,
  individual: INDIVIDUAL_JA,
  toshu: TOSHU_JA,
}
