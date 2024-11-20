import type { VideoInformation } from "./video-information"

/** チームの動画を表すオブジェクト */
export interface TeamVideo {
  /** ID */
  id: number;
  /** チームID */
  teamId: number;
  /** url */
  url: string;
  /** 内容 */
  contentType: VideoInformation.ContentType;
  /** 撮影日 */
  filmedAt: string;
}
