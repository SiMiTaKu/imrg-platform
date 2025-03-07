import { RECOMMENDED_VIDEOS, VIDEOS } from "../_data"
import {
  type VideoResource,
  type IndividualVideoResource,
  ContentType,
  Apparatus,
} from "../_models"

/**
 * 配列をシャッフルする
 * @param array - シャッフルする配列
 * @returns array - シャッフルされた配列
 */
const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ array[i], array[j] ] = [ array[j], array[i] ]
  }
  return array
}

export namespace Video {
  export type Criteria = {
    contentType?: ContentType;
    exceptVideos?: VideoResource[];
    apparatuses?: Apparatus[];
  };

  /**
   * 動画リストを取得する
   * @param criteria - 検索条件
   * @returns total - 動画の合計
   * @returns items - 取得した動画リスト
   * @remarks
   * 10件取得する
   */
  export const filterVideos = (
    criteria?: Criteria
  ): {
    total: number;
    items: VideoResource[];
  } => {
    const ALL_VIDEOS = [ ...VIDEOS ]
    const shuffledVideos = shuffleArray(ALL_VIDEOS)

    const newItems = shuffledVideos.filter((video) => {
      if (!criteria) return true

      const matchesContentType =
        !criteria.contentType ||
        criteria.contentType.slug === video.contentType.slug

      const notInExceptVideos =
        !criteria.exceptVideos ||
        !criteria.exceptVideos.some((exceptVideo) => exceptVideo === video)

      // 絞り込み条件の動画タイプ指定が個人動画且つ、手具が指定されている場合
      // 動画タイプが個人且つ、動画の手具タイプが、絞り込み条件の手具タイプに含まれているか
      const matchesApparatuses =
        criteria.contentType?.slug === ContentType.INDIVIDUAL.slug &&
        criteria.apparatuses
          ? isIndividualVideoResource(video) &&
            criteria.apparatuses.some(
              (apparatus) => apparatus.slug === video.apparatus.slug
            )
          : true

      return matchesContentType && notInExceptVideos && matchesApparatuses
    })

    const ADDITIONAL_VIDEO_COUNT = 10

    return {
      total: newItems.length,
      items: newItems.slice(0, ADDITIONAL_VIDEO_COUNT),
    }
  }

  /** Type Guards */
  export const isIndividualVideoResource = (
    video: VideoResource
  ): video is IndividualVideoResource => {
    return video.contentType.slug === ContentType.INDIVIDUAL.slug
  }

  export const getRecommendedVideos = () => shuffleArray(RECOMMENDED_VIDEOS)
}
