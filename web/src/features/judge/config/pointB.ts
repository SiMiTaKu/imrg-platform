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
  { key: 'apparatusSpin', title: m.judge_point_b_apparatus_spin, step: 0.3 },
  { key: 'apparatusSkill', title: m.judge_point_b_apparatus_skill, step: 0.2 },
  { key: 'throwCatch', title: m.judge_point_b_throw_catch, step: 0.3 },
  // 高さは見た目の差が付きにくいので小さく取る
  { key: 'tumblingHeight', title: m.judge_point_b_tumbling_height, step: 0.1 },
  // 着地は転回のたびにあり、崩れると目に付くので大きく取る
  { key: 'landing', title: m.judge_point_b_landing, step: 0.4 },
  { key: 'legLine', title: m.judge_point_b_leg_line, step: 0.3 },
  { key: 'steadiness', title: m.judge_point_b_steadiness, step: 0.3 },
  { key: 'musicMatch', title: m.judge_point_b_music_match, step: 0.3 },
]

/**
 * 実施のBで付けられる点。1〜5 点。
 *
 * @remarks
 * **5点が減点なし**で、1点下がるごとに設問ごとの刻み（`step`）ぶん減点が増える。
 * 言葉ではなく数にしているのは、狭い画面でも5つを横1列に並べるため
 */
export const POINT_B_SCALE_OPTIONS: readonly PointBScaleOption[] = [1, 2, 3, 4, 5].map((score) => ({
  code: score as PointBScaleCode,
}))

/** 点をいちばん良く付けたときの値 */
export const POINT_B_BEST_SCORE = 5

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
