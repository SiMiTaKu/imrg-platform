import { ContentType, Apparatus } from "../lib"
import type { PlayerResource, TeamResource } from "../models"
import { Player, Team } from "../util"

/** 動画のベースクラス */
abstract class BaseVideo {
  id: number
  src: string
  filmedAt: Date

  constructor(id: number, src: string, filmedAt: Date) {
    this.id = id
    this.src = src
    this.filmedAt = filmedAt
  }
}

export class IndividualVideoResource extends BaseVideo {
  player: PlayerResource
  contentType: ContentType = ContentType.INDIVIDUAL
  apparatus: Apparatus

  constructor(
    id: number,
    playerId: number,
    src: string,
    apparatus: Apparatus,
    filmedAt: Date
  ) {
    super(id, src, filmedAt)
    const player = Player.findById(playerId)
    if (player === undefined) {
      throw new Error(`IndividualVideoResource：Player not found: ${playerId}`)
    }
    this.player = player
    this.apparatus = apparatus
  }
}

export class GroupVideoResource extends BaseVideo {
  team: TeamResource
  players: PlayerResource[]
  contentType: ContentType = ContentType.GROUP

  constructor(
    id: number,
    teamId: number,
    playerIds: number[],
    src: string,
    filmedAt: Date
  ) {
    super(id, src, filmedAt)
    const team = Team.findById(teamId)
    if (team === undefined) {
      throw new Error(`GroupVideoResource：Team not found: ${teamId}`)
    }
    this.team = team
    this.players = playerIds.map((id) => Player.findById(id) ?? []).flat()
  }
}

/** 動画の型 */
export type VideoResource = IndividualVideoResource | GroupVideoResource;
