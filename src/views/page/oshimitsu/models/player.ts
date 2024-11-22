import type { TeamResource } from "./team"
import { Team } from "../util"

/** 選手を表すオブジェクト */
export class PlayerResource {
  /** ID */
  id: number
  /** 名前 */
  name: string
  /** 名前(かな） */
  nameKana: string
  /** 所属したチーム */
  belongedTeams: TeamResource[]

  constructor(
    id: number,
    name: string,
    nameKana: string,
    belongTeam: number[]
  ) {
    this.id = id
    this.name = name
    this.nameKana = nameKana
    this.belongedTeams = belongTeam.map((id) => Team.findById(id) ?? []).flat()
  }
}
