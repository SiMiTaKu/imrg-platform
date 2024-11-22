import type { PlayerResource } from "../models"
import {
  AOMORI_UNIVERSITY,
  AOMORI_YAMADA,
} from "$views/page/oshimitsu/data/team"

export const TAKUMI_SHIMIZU: PlayerResource = {
  id: 1,
  name: "清水琢巳",
  nameKana: "しみずたくみ",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const PLAYERS: PlayerResource[] = [ TAKUMI_SHIMIZU ]
