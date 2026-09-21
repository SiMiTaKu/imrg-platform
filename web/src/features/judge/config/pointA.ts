import { m } from '$lib/paraglide/messages'
import type { PointALevel, PointAOption } from '../model/executionDeduct'

/** 実施の満点 */
export const MAX_EXECUTION_SCORE = 10

/**
 * 実施のAの減点の段階。規則の実施欠点基準の5段階で、先頭（減点が最も大きい）が初期値。
 *
 * @remarks
 * 出典は『新体操規則2025年版』の「3 採点規則 5個人競技 実施（E）」（46ページ）。
 * 手具を持つ個人競技の欠点基準は 0.50／0.40／0.30／0.20／0.10 の5段階
 */
export const POINT_A_OPTIONS: readonly PointALevel[] = [
  { code: 1, value: 0.5, level: m.judge_point_a_level_severe },
  { code: 2, value: 0.4, level: m.judge_point_a_level_major },
  { code: 3, value: 0.3, level: m.judge_point_a_level_lacking },
  { code: 4, value: 0.2, level: m.judge_point_a_level_slight },
  { code: 5, value: 0.1, level: m.judge_point_a_level_minor },
]

/**
 * 5段階のどれにも当てはまらないわずかな差のための、補助の選択肢（0.05 刻み）。
 *
 * @remarks
 * 規則の但し書き「上記に当てはまらないわずかな差は 0.05 点の差を付けて減点しても良い」にあたる。
 * コードは段階と段階の間（1.5・2.5 など）に置き、グラフでも段階の間に出る
 */
export const POINT_A_FINE_OPTIONS: readonly PointAOption[] = [
  { code: 1.5, value: 0.45 },
  { code: 2.5, value: 0.35 },
  { code: 3.5, value: 0.25 },
  { code: 4.5, value: 0.15 },
  { code: 5.5, value: 0.05 },
]

/** 選択肢のコードの最大値。グラフの目盛りの外側になる */
export const POINT_A_MAX_CODE = 5.5
