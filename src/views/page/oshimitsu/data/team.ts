import type { TeamResource } from "../models"

export const AOMORI_UNIVERSITY: TeamResource = {
  name: "青森大学",
  nameKana: "あおもりだいがく",
}

export const AOMORI_YAMADA: TeamResource = {
  name: "青森山田高等学校",
  nameKana: "あおもりやまだこうとうがっこう",
}

export const ENIWA_MINAMI_HIGH: TeamResource = {
  name: "北海道恵庭南高等学校",
  nameKana: "ほっかいどうえにわみなみこうとうがっこう",
}

export const KANZAKI_SEIMEI: TeamResource = {
  name: "神埼清明高等学校",
  nameKana: "かんざきせいめいこうとうがっこう",
}

export const SEIFU: TeamResource = {
  name: "清風高等学校",
  nameKana: "せいふうこうとうがっこう",
}

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = [
  AOMORI_UNIVERSITY,
  AOMORI_YAMADA,
  ENIWA_MINAMI_HIGH,
  KANZAKI_SEIMEI,
  SEIFU,
]
