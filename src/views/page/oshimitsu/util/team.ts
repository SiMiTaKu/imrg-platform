import type { TeamResource } from "../models"
import { TEAMS } from "../data"

export namespace Team {
  /** チームを取得する */
  export const findById = (id: number): TeamResource | undefined => {
    return TEAMS.find((team) => team.id === id)
  }
}
