import type { GuidePage } from '../model'
import { guideBlockTexts } from '../model'

/** 1分で読める文字数の目安（日本語） */
const CHARS_PER_MINUTE = 500

/**
 * ページを読むのにかかる時間の目安を返す。
 *
 * @remarks
 * 講座の章カードに「約◯分」と出すために使う。
 * 表や箇条書きの文字も数えるので、少し長めに出る
 * @param page - 解説のページ
 * @returns 分。少なくとも1分
 */
export const guideReadingMinutes = (page: GuidePage): number => {
  const length = [page.title, page.lead, ...page.blocks.flatMap(guideBlockTexts)].join('').length
  return Math.max(1, Math.round(length / CHARS_PER_MINUTE))
}

/**
 * 検索に使う、ページの本文をひとつながりにした文字列を返す
 * @param page - 解説のページ
 * @returns 見出しと本文をつないだもの。見出しは含めない（呼ぶ側が別に持つ）
 */
export const guideSearchText = (page: GuidePage): string =>
  [page.lead, ...page.blocks.flatMap(guideBlockTexts)].join(' ')
