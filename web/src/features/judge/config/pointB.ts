import { m } from '$lib/paraglide/messages'
import type { PointBScaleItem, PointBScaleOption } from '../model/executionDeduct'

/**
 * 実施のBの設問。
 *
 * @remarks
 * 規則の欠点表（『新体操男子規則 2025年版』46〜47ページ）をそのまま並べると
 * 項目が26個になり、採点を試す人には多すぎた。
 * 「見ていてどう感じたか」に答えれば点が付く形にまとめ直してある。
 * **規則と1対1では対応しない**
 *
 * 画面・内訳はこの順に並ぶ
 */
export const POINT_B_SCALE_ITEMS: readonly PointBScaleItem[] = [
  { key: 'apparatusSpin', title: m.judge_point_b_apparatus_spin, weight: 1 },
  { key: 'apparatusSkill', title: m.judge_point_b_apparatus_skill, weight: 1 },
  // 投げは1つの演技に3回以上あるので、1回ぶんではなくまとめて見る
  { key: 'throwCatch', title: m.judge_point_b_throw_catch, weight: 3 },
  { key: 'tumblingHeight', title: m.judge_point_b_tumbling_height, weight: 1 },
  // 着地は転回のたびにあるので、ほかより重く見る
  { key: 'landing', title: m.judge_point_b_landing, weight: 2 },
  { key: 'legLine', title: m.judge_point_b_leg_line, weight: 1 },
  { key: 'steadiness', title: m.judge_point_b_steadiness, weight: 1 },
  { key: 'musicMatch', title: m.judge_point_b_music_match, weight: 1 },
]

/**
 * あてはまり具合の5段階。
 *
 * @remarks
 * 「当てはまる」が減点なしで、1つ下がるごとに `POINT_B_SCALE_STEP` ずつ減点が増える
 */
export const POINT_B_SCALE_OPTIONS: readonly PointBScaleOption[] = [
  { code: 1, label: m.judge_point_b_scale_yes },
  { code: 2, label: m.judge_point_b_scale_mostly },
  { code: 3, label: m.judge_point_b_scale_neutral },
  { code: 4, label: m.judge_point_b_scale_partly },
  { code: 5, label: m.judge_point_b_scale_no },
]

/** 段階が1つ下がるごとに増える減点 */
export const POINT_B_SCALE_STEP = 0.3

/** 手具を1回落としたときの減点。規則の 0.30 点（46ページ）に合わせてある */
export const POINT_B_DROP_VALUE = 0.3
