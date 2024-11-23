import { TeamResource } from "../models"

export const AOMORI_UNIVERSITY: TeamResource = {
  id: 1,
  name: "青森大学",
  nameKana: "あおもりだいがく",
}

export const AOMORI_YAMADA: TeamResource = {
  id: 2,
  name: "青森山田高等学校",
  nameKana: "あおもりやまだこうとうがっこう",
}

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = [ AOMORI_UNIVERSITY, AOMORI_YAMADA ]
