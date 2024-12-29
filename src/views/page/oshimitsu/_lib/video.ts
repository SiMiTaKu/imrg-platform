import { VIDEOS } from "../_data"
import {
  type VideoResource,
  type GroupVideoResource,
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
  /**
   * 現在表示していない動画リストを取得する
   * @param currentItems - 現在の動画リスト
   * @returns array - 取得した動画リスト
   * @remarks
   * 10件取得する
   */
  export const getVideos = (
    currentItems: (IndividualVideoResource | GroupVideoResource)[]
  ) => {
    // 重複削除
    const newItems = shuffleArray([ ...VIDEOS ]).filter(
      (video) => !currentItems.includes(video)
    )
    const ADDITIONAL_VIDEO_COUNT = 10
    return newItems.slice(0, ADDITIONAL_VIDEO_COUNT)
  }

  /** Type Guards */
  export const isIndividualVideoResource = (
    video: VideoResource
  ): video is IndividualVideoResource => {
    return video.contentType === ContentType.INDIVIDUAL
  }
}
