/** グラフの項目名を折り返す長さ（これより長いときだけ折り返す） */
const WRAP_THRESHOLD = 16

/** 折り返したあとの1行の長さの目安 */
const MAX_LINE_LENGTH = 18

/**
 * グラフの項目名が長いときに、語の区切り（空白）で複数行に分ける
 * @param label - 項目名
 * @returns 16 文字以下ならそのままの文字列。それより長ければ、1行 18 文字を目安に分けた行の配列
 *
 * @remarks
 * 英語の項目名はグラフの枠からはみ出して切れるため、chart.js の複数行のラベル（文字列の配列）にする。
 * 日本語の項目名は 16 文字以下なので、今までどおり1行のまま
 */
export const wrapChartLabel = (label: string): string | string[] => {
  if (label.length <= WRAP_THRESHOLD) return label
  return label.split(' ').reduce<string[]>((lines, word) => {
    const last = lines.at(-1)
    if (last !== undefined && `${last} ${word}`.length <= MAX_LINE_LENGTH) {
      return [...lines.slice(0, -1), `${last} ${word}`]
    }
    return [...lines, word]
  }, [])
}
