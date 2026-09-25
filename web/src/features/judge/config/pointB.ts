import { m } from '$lib/paraglide/messages'
import type {
  PointBScaleCode,
  PointBScaleItem,
  PointBScaleOption,
  PointBSummary,
} from '../model/executionDeduct'

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
 * 実施のBで付けられる点。1〜5 点。
 *
 * @remarks
 * **5点が減点なし**で、1点下がるごとに `POINT_B_SCALE_STEP` ずつ減点が増える。
 * 言葉ではなく数にしているのは、狭い画面でも5つを横1列に並べるため
 */
export const POINT_B_SCALE_OPTIONS: readonly PointBScaleOption[] = [1, 2, 3, 4, 5].map((score) => ({
  code: score as PointBScaleCode,
}))

/** 点をいちばん良く付けたときの値 */
export const POINT_B_BEST_SCORE = 5

/** 1点下がるごとに増える減点 */
export const POINT_B_SCALE_STEP = 0.3

/** 手具を1回落としたときの減点。規則の 0.30 点（46ページ）に合わせてある */
export const POINT_B_DROP_VALUE = 0.3

/**
 * 内訳に出すときの、Bのまとめ方。
 *
 * @remarks
 * 設問をそのまま8行並べても、どこで引かれたのかが掴めない。
 * 「手具の扱い」「投げのミス」のように、減点の出どころとして
 * 名前が付くまとまりにして出す
 */
export const POINT_B_SUMMARIES: readonly PointBSummary[] = [
  {
    key: 'apparatus',
    title: m.judge_point_b_summary_apparatus,
    items: ['apparatusSpin', 'apparatusSkill'],
  },
  { key: 'throw', title: m.judge_point_b_summary_throw, items: ['throwCatch'] },
  {
    key: 'tumbling',
    title: m.judge_point_b_summary_tumbling,
    items: ['tumblingHeight', 'landing'],
  },
  { key: 'body', title: m.judge_point_b_summary_body, items: ['legLine', 'steadiness'] },
  { key: 'music', title: m.judge_point_b_summary_music, items: ['musicMatch'] },
]
