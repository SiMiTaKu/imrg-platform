import {
  ContentType,
  VIDEOS,
  findApparatus,
  findContentType,
  isIndividualVideo,
  type VideoResource,
} from '@entities/oshimitsuVideo'
import type { ApparatusSlug } from '@shared/model'
import { ROUTES } from '@shared/routes'
import { SEARCH_PARAMS, VIDEOS_PER_PAGE } from '../config/search'
import type { Criteria, FilteredVideos, SearchQuery } from '../model/criteria'

/**
 * 配列を並べ替えた新しい配列を返す（Fisher–Yates）
 * @param items - 並べ替える配列。書き換えない
 * @param random - 0 以上 1 未満の乱数を返す関数。テストのときだけ差し替える
 * @returns 並べ替えた新しい配列
 *
 * @remarks
 * 乱数を使うので、ブラウザーでだけ呼ぶ（サーバーで書き出す HTML と並びがずれ、ハイドレーションの警告が出るため）
 */
export const shuffle = <T>(items: readonly T[], random: () => number = Math.random): T[] => {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }
  return result
}

/**
 * 動画が絞り込み条件に合うかを返す
 * @param video - 動画
 * @param criteria - 絞り込み条件
 * @returns 合えば true
 */
const matchesCriteria = (video: VideoResource, criteria: Criteria): boolean => {
  const matchesContentType =
    !criteria.contentType || criteria.contentType.slug === video.contentType.slug
  const notInExceptVideos = !criteria.exceptVideos.includes(video)
  // 手具を指定したときは、個人の動画で、その手具のものだけにする
  const matchesApparatuses =
    criteria.apparatuses.length === 0 ||
    (criteria.contentType?.slug === ContentType.INDIVIDUAL.slug &&
      isIndividualVideo(video) &&
      criteria.apparatuses.some((apparatus) => apparatus.slug === video.apparatus.slug))
  return matchesContentType && notInExceptVideos && matchesApparatuses
}

/**
 * 条件に合う動画を、並べ替えて先頭から取り出す
 * @param criteria - 絞り込み条件
 * @param videos - 絞り込む動画。テストのときだけ差し替える
 * @param random - 並べ替えに使う乱数。テストのときだけ差し替える
 * @returns 条件に合う動画の数と、並べ替えた先頭 {@link VIDEOS_PER_PAGE} 件
 *
 * @remarks
 * 並べ替えに乱数を使うので、ブラウザーでだけ呼ぶ
 */
export const filterVideos = (
  criteria: Criteria,
  videos: readonly VideoResource[] = VIDEOS,
  random: () => number = Math.random,
): FilteredVideos => {
  const matched = shuffle(videos, random).filter((video) => matchesCriteria(video, criteria))
  return {
    total: matched.length,
    items: matched.slice(0, VIDEOS_PER_PAGE),
  }
}

/**
 * slug で持つ検索条件を、絞り込み条件にする
 * @param query - 検索条件
 * @returns 絞り込み条件（除く動画は空）
 */
export const toCriteria = (query: SearchQuery): Criteria => ({
  contentType: query.contentType ? findContentType(query.contentType) : undefined,
  apparatuses: query.apparatuses.flatMap((slug) => findApparatus(slug) ?? []),
  exceptVideos: [],
})

/**
 * URL のクエリから検索条件を読む
 * @param searchParams - URL のクエリ（`ct` = 種類、`app` = 手具をカンマ区切り）
 * @returns 検索条件
 *
 * @remarks
 * 正しい手具が1つでもあれば、種類は個人にし、正しい手具だけを残す。
 * 知らない種類・手具は無視する
 */
export const parseSearchQuery = (searchParams: URLSearchParams): SearchQuery => {
  const apparatuses = (searchParams.get(SEARCH_PARAMS.apparatuses)?.split(',') ?? []).flatMap(
    (slug): ApparatusSlug[] => {
      const apparatus = findApparatus(slug)
      return apparatus ? [apparatus.slug] : []
    },
  )
  if (apparatuses.length > 0) {
    return { contentType: ContentType.INDIVIDUAL.slug, apparatuses }
  }
  const contentTypeSlug = searchParams.get(SEARCH_PARAMS.contentType)
  return {
    contentType: contentTypeSlug ? findContentType(contentTypeSlug)?.slug : undefined,
    apparatuses: [],
  }
}

/**
 * 検索条件に合うページのパスを返す（言語の接頭辞なし）
 * @param query - 検索条件
 * @returns 種類・手具ごとのページがあればそのパス、無ければ検索結果のページ（クエリ付き）のパス
 *
 * @remarks
 * 手具は個人を選んだときだけ使う。手具が1つなら手具のページ、2つ以上なら検索結果のページにする
 */
export const buildSearchPath = (query: SearchQuery): string => {
  if (!query.contentType) return ROUTES.oshimitsu.searchResult
  if (query.contentType !== ContentType.INDIVIDUAL.slug || query.apparatuses.length === 0) {
    return ROUTES.oshimitsu.contentType(query.contentType)
  }
  if (query.apparatuses.length === 1) return ROUTES.oshimitsu.apparatus(query.apparatuses[0])
  return `${ROUTES.oshimitsu.searchResult}?${SEARCH_PARAMS.contentType}=${query.contentType}&${SEARCH_PARAMS.apparatuses}=${query.apparatuses.join(',')}`
}

/**
 * 検索結果のページで、ほかのページへ移すべき条件なら移し先を返す
 * @param query - URL から読んだ検索条件
 * @returns 手具が1つだけなら、その手具のページのパス（言語の接頭辞なし）。それ以外は undefined
 */
export const redirectPath = (query: SearchQuery): string | undefined =>
  query.apparatuses.length === 1 ? ROUTES.oshimitsu.apparatus(query.apparatuses[0]) : undefined
