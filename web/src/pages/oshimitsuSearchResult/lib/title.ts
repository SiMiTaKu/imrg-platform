import { ContentType, findApparatus, findContentType } from '@entities/oshimitsuVideo'
import type { Criteria, SearchQuery } from '@features/oshimitsuSearch'
import { m } from '$lib/paraglide/messages'

/**
 * 検索結果のページの見出しを返す
 * @param criteria - 絞り込み条件
 * @returns 手具が1つなら「推しミツ！（クラブ）」、2つ以上なら「推しミツ！」、
 * 手具が無く種類があれば「推しミツ！（団体）」、どちらも無ければ「推しミツ！」（表示中の言語）
 */
export const searchResultTitle = (criteria: Criteria): string => {
  if (criteria.apparatuses.length === 1) {
    return m.oshimitsu_filtered_title({ filter: criteria.apparatuses[0].label() })
  }
  if (criteria.apparatuses.length > 1 || !criteria.contentType) return m.oshimitsu_title()
  return m.oshimitsu_filtered_title({ filter: criteria.contentType.label() })
}

/**
 * 種類・手具のページのメタ情報（title）に入れる絞り込みの表記を返す
 * @param query - そのページの検索条件
 * @returns 「団体」「個人 × クラブ」のような表記（表示中の言語）。条件が無ければ空文字
 */
export const filterLabel = (query: SearchQuery): string => {
  const contentType = query.contentType ? findContentType(query.contentType) : undefined
  if (!contentType) return ''
  const apparatus =
    contentType.slug === ContentType.INDIVIDUAL.slug && query.apparatuses.length === 1
      ? findApparatus(query.apparatuses[0])
      : undefined
  if (!apparatus) return contentType.label()
  return m.oshimitsu_filter_individual_apparatus({
    contentType: contentType.label(),
    apparatus: apparatus.label(),
  })
}
