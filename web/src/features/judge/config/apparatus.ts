import { Apparatus } from '@shared/config/apparatus'
import type { JudgeApparatus } from '../model/apparatus'
import { JudgeThemeColor } from './themeColor'

/**
 * 採点できる手具。選択肢はこの順に並ぶ。
 *
 * @remarks
 * 手具そのもの（名前・2つで1組か）は `@shared/config/apparatus` が持ち、
 * ここでは採点の画面で使う値（選択肢のコードとイメージカラー）を足す
 */
export const JUDGE_APPARATUSES: readonly JudgeApparatus[] = [
  {
    code: 1,
    slug: Apparatus.STICK.slug,
    name: Apparatus.STICK.label,
    imageColor: JudgeThemeColor.BLUE,
    isDouble: Apparatus.STICK.isPair,
  },
  {
    code: 2,
    slug: Apparatus.RING.slug,
    name: Apparatus.RING.label,
    imageColor: JudgeThemeColor.RED,
    isDouble: Apparatus.RING.isPair,
  },
  {
    code: 3,
    slug: Apparatus.ROPE.slug,
    name: Apparatus.ROPE.label,
    imageColor: JudgeThemeColor.YELLOW,
    isDouble: Apparatus.ROPE.isPair,
  },
  {
    code: 4,
    slug: Apparatus.CLUB.slug,
    name: Apparatus.CLUB.label,
    imageColor: JudgeThemeColor.GREEN,
    isDouble: Apparatus.CLUB.isPair,
  },
]
