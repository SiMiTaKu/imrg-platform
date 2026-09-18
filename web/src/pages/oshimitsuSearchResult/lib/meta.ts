import { buildSearchPath, type SearchQuery } from '@features/oshimitsuSearch'
import { META_DATA, type PageMeta } from '@shared/config/meta'
import { filterLabel } from './title'

/**
 * 種類・手具のページのメタ情報を返す
 * @param query - そのページの検索条件
 * @returns メタ情報（title に「団体」「個人 × クラブ」などを入れる。表示中の言語）
 *
 * @remarks
 * 文言は多言語化の文言から取るので、`+page.server.ts` の load の中で呼ぶ
 */
export const filteredPageMeta = (query: SearchQuery): PageMeta =>
  META_DATA.oshimitsuFiltered(filterLabel(query), buildSearchPath(query))
