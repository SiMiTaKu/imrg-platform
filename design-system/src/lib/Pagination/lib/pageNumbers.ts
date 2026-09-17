/** ページ番号の並びで、番号を省いた場所を表す印 */
export const ELLIPSIS = '…'

/**
 * ページ番号の並びを作る。先頭・末尾・今のページの前後だけを出し、間は「…」にする
 * @param current - 今のページ（1始まり）
 * @param total - 全ページ数
 * @returns 番号と「…」の並び
 * @remarks
 * 1ページだけ飛ぶ場合は「…」にせず、その番号を出す（「…」と番号で幅が変わらないため）
 */
export const pageNumbers = (current: number, total: number): (number | typeof ELLIPSIS)[] => {
  const candidates = [1, current - 1, current, current + 1, total]
  const pages = [...new Set(candidates.filter((page) => page >= 1 && page <= total))].sort(
    (a, b) => a - b,
  )

  const result: (number | typeof ELLIPSIS)[] = []
  pages.forEach((page, index) => {
    const previous = pages[index - 1]
    if (previous !== undefined && page - previous === 2) result.push(previous + 1)
    else if (previous !== undefined && page - previous > 2) result.push(ELLIPSIS)
    result.push(page)
  })
  return result
}
