import { ContentType, Apparatus } from "../lib"

/** 個人の動画タイプを表すEnum */
export class IndividualVideo {
  id: number
  playerId: number
  src: string
  contentType: ContentType = ContentType.INDIVIDUAL
  apparatus: Apparatus
  filmedAt: Date

  constructor(
    id: number,
    playerId: number,
    src: string,
    apparatus: Apparatus,
    filmedAt: Date
  ) {
    this.id = id
    this.playerId = playerId
    this.src = src
    this.apparatus = apparatus
    this.filmedAt = filmedAt
  }
}

/** 団体の動画タイプを表すEnum */
export class GroupVideo {
  id: number
  teamId: number
  playerId: number
  src: string
  filmedAt: Date
  contentType: ContentType = ContentType.GROUP

  constructor(
    id: number,
    teamId: number,
    playerId: number,
    src: string,
    filmedAt: Date
  ) {
    this.id = id
    this.teamId = teamId
    this.playerId = playerId
    this.src = src
    this.filmedAt = filmedAt
  }
}

/** 動画を表すオブジェクト */
export type Video = IndividualVideo | GroupVideo;
