import { RECOMMENDED_VIDEOS, VIDEOS } from '../_data'
import {
  type VideoResource,
  type IndividualVideoResource,
  ContentType,
  Apparatus,
} from '../_models'

/**
 * 配列をシャッフルする
 * @param array - シャッフルする配列
 * @returns array - シャッフルされた配列
 */
const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * 動画の絞り込み条件
 */
export type Criteria = {
  /** 動画タイプ（個人・団体）。未指定なら絞り込まない */
  contentType?: ContentType
  /** 結果から除く動画（表示済みの動画など） */
  exceptVideos: VideoResource[]
  /** 手具。個人動画を指定したときだけ使う。空なら絞り込まない */
  apparatuses: Apparatus[]
}

/**
 * 動画リストを取得する
 * @param criteria - 検索条件
 * @returns 条件に合う動画の合計（total）と、シャッフルした先頭10件の動画リスト（items）
 * @remarks
 * 10件取得する
 */
export const filterVideos = (
  criteria?: Criteria,
): {
  total: number
  items: VideoResource[]
} => {
  const ALL_VIDEOS = [...VIDEOS]
  const shuffledVideos = shuffleArray(ALL_VIDEOS)

  const newItems = shuffledVideos.filter((video) => {
    if (!criteria) return true

    const matchesContentType =
      !criteria.contentType || criteria.contentType.slug === video.contentType.slug

    const notInExceptVideos =
      !criteria.exceptVideos || !criteria.exceptVideos.some((exceptVideo) => exceptVideo === video)

    // 絞り込み条件の動画タイプ指定が個人動画且つ、手具が指定されている場合
    // 動画タイプが個人且つ、動画の手具タイプが、絞り込み条件の手具タイプに含まれているか
    const matchesApparatuses = criteria.apparatuses.length
      ? criteria.contentType?.slug === ContentType.INDIVIDUAL.slug &&
        isIndividualVideoResource(video) &&
        criteria.apparatuses.some((apparatus) => apparatus.slug === video.apparatus.slug)
      : true

    return matchesContentType && notInExceptVideos && matchesApparatuses
  })

  const ADDITIONAL_VIDEO_COUNT = 10

  return {
    total: newItems.length,
    items: newItems.slice(0, ADDITIONAL_VIDEO_COUNT),
  }
}

/**
 * Type Guards
 *
 * 動画が個人動画かどうかを判別する
 * @param video - 判別する動画
 * @returns 動画タイプが個人なら true
 */
export const isIndividualVideoResource = (
  video: VideoResource,
): video is IndividualVideoResource => {
  return video.contentType.slug === ContentType.INDIVIDUAL.slug
}

/**
 * おすすめ動画をシャッフルして返す
 * @returns シャッフルしたおすすめ動画のリスト（RECOMMENDED_VIDEOS の並びをその場で入れ替える）
 */
export const getRecommendedVideos = () => shuffleArray(RECOMMENDED_VIDEOS)
