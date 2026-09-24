import { m } from '$lib/paraglide/messages'
import type { PointALevel } from '../model/executionDeduct'

/** 実施の満点 */
export const MAX_EXECUTION_SCORE = 10

/**
 * 実施のAの段階。B と同じ「当てはまる〜当てはまらない」の5段階。
 *
 * @remarks
 * 規則の欠点基準（『新体操男子規則 2025年版』46ページ・0.50〜0.10 の5段階）は
 * 「どれだけ欠けていたか」を選ばせる形で、欠点が無いという答えが選べなかった。
 * 見たままを答えれば点が付くようにしたいので、
 * 「当てはまる」を減点なしにして、1つ下がるごとに 0.1 ずつ増やす
 */
export const POINT_A_OPTIONS: readonly PointALevel[] = [
  { code: 1, value: 0, level: m.judge_scale_yes },
  { code: 2, value: 0.1, level: m.judge_scale_mostly },
  { code: 3, value: 0.2, level: m.judge_scale_neutral },
  { code: 4, value: 0.3, level: m.judge_scale_partly },
  { code: 5, value: 0.4, level: m.judge_scale_no },
]

/** 選択肢のコードの最大値。グラフの目盛りの外側になる */
export const POINT_A_MAX_CODE = 5
