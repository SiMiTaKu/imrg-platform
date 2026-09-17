import { m } from '$lib/paraglide/messages'
import type { JudgeApparatus } from '../model/apparatus'

/**
 * 採点できる手具。選択肢はこの順に並ぶ
 */
export const JUDGE_APPARATUSES: readonly JudgeApparatus[] = [
  { code: 1, name: m.judge_apparatus_stick, imageColor: 'blue', isDouble: false },
  { code: 2, name: m.judge_apparatus_ring, imageColor: 'red', isDouble: true },
  { code: 3, name: m.judge_apparatus_rope, imageColor: 'yellow', isDouble: false },
  { code: 4, name: m.judge_apparatus_club, imageColor: 'green', isDouble: true },
]
