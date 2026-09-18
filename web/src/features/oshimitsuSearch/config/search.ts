/** 1回に表示する動画の数（「もっと見る」で足す数も同じ） */
export const VIDEOS_PER_PAGE = 10

/** URL のクエリの名前 */
export const SEARCH_PARAMS = {
  /** 種類（content type） */
  contentType: 'ct',
  /** 手具（apparatus）。複数はカンマで区切る */
  apparatuses: 'app',
} as const
