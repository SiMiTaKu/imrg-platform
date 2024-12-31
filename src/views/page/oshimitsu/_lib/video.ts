import { VIDEOS } from "../_data"
import {
  type VideoResource,
  type IndividualVideoResource,
  ContentType,
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
    exceptVideos?: VideoResource[];
    contentType?: ContentType;
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
    // 重複削除
    const newItems = shuffleArray(VIDEOS).filter((video) => {
      return (
        (criteria?.contentType
          ? video.contentType.slug === criteria.contentType.slug
          : true) &&
        (criteria?.exceptVideos
          ? !criteria.exceptVideos.some(
            (exceptVideo) => exceptVideo.src === video.src
          )
          : true)
      )
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
}
