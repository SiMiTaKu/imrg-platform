import { ContentType, Apparatus } from "../lib"
import type { PlayerResource, TeamResource } from "../models"

/** 動画のベースクラス */
interface BaseVideo {
  id: number;
  src: string;
  filmedAt: Date;
}

export interface IndividualVideoResource extends BaseVideo {
  player: PlayerResource;
  contentType: typeof ContentType.INDIVIDUAL;
  apparatus: Apparatus;
}

export interface GroupVideoResource extends BaseVideo {
  team: TeamResource;
  players: PlayerResource[];
  contentType: typeof ContentType.GROUP;
}

/** 動画の型 */
export type VideoResource = IndividualVideoResource | GroupVideoResource;

/** Type Guards */
export function isIndividualVideoResource(
  video: VideoResource
): video is IndividualVideoResource {
  return video.contentType === ContentType.INDIVIDUAL
}
