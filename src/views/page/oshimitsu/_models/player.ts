import type { TeamResource } from './team'

/** 選手を表すオブジェクト */
export interface PlayerResource {
  /** 名前 */
  name: string
  /** 名前(かな） */
  nameKana: string
  /** 所属したチーム */
  belongedTeams: TeamResource[]
}
