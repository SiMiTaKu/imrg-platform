import type { GuideContent } from '../../../model'
import { FORMATION_JA } from './formation'

/**
 * 日本語の本文。ここが正。
 *
 * @remarks
 * 鍵の木（`GUIDE_KEY_TREE`）に無い鍵は書けない。
 * 逆に、木にあっても**ここに無い鍵はページが生えない**。
 * だから書いた順に公開できる
 */
export const GUIDE_CONTENT_JA: GuideContent = {
  'group.formation': FORMATION_JA,
}
