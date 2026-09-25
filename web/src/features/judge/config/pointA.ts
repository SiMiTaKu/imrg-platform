import type { PointALevel } from '../model/executionDeduct'

/** 実施の満点 */
export const MAX_EXECUTION_SCORE = 10

/** 点をいちばん良く付けたときの値。ここから1点下がるごとに減点が増える */
export const POINT_A_BEST_SCORE = 5

/** 1点下がるごとに増える減点 */
export const POINT_A_SCORE_STEP = 0.1

/**
 * 実施のAの段階。1〜5 点で答える。
 *
 * @remarks
 * 規則の欠点基準（『新体操男子規則 2025年版』46ページ・0.50〜0.10 の5段階）は
 * 「どれだけ欠けていたか」を選ばせる形で、欠点が無いという答えが選べなかった。
 * 見たままを点で答えれば点数が付くようにしたいので、
 * **5点を減点なし**とし、1点下がるごとに 0.1 ずつ増やす。
 *
 * 言葉ではなく数にしているのは、狭い画面でも5つを横1列に並べるため
 */
export const POINT_A_OPTIONS: readonly PointALevel[] = [1, 2, 3, 4, 5].map((score) => ({
  code: score,
  value: Math.round((POINT_A_BEST_SCORE - score) * POINT_A_SCORE_STEP * 100) / 100,
}))

/** 選択肢のコードの最大値。グラフの目盛りの外側になる */
export const POINT_A_MAX_CODE = POINT_A_BEST_SCORE
