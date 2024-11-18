import type { VideoInformation } from "./video-information"

/** 選手の動画を表すオブジェクト */
export interface Team {
  /** ID */
  id: number;
  /** チームID */
  playerId: number;
  /** url */
  url: string;
  /** 内容 */
  contentType: VideoInformation.ContentType;
  /** 撮影日 */
  filmedAt: string;
}
