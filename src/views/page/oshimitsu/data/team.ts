import type { TeamResource } from "../models"

type TeamKey =
  | "AOMORI_UNIVERSITY"
  | "AOMORI_YAMADA"
  | "ENIWA_MINAMI_HIGH"
  | "KANZAKI_SEIMEI"
  | "SEIFU"
  | "AMAGASAKI_NISHI"
  | "SEIBI";

export const Team: { [key in TeamKey]: TeamResource } = {
  AOMORI_UNIVERSITY: {
    name: "青森大学",
    nameKana: "あおもりだいがく",
  },
  AOMORI_YAMADA: {
    name: "青森山田高等学校",
    nameKana: "あおもりやまだこうとうがっこう",
  },
  ENIWA_MINAMI_HIGH: {
    name: "北海道恵庭南高等学校",
    nameKana: "ほっかいどうえにわみなみこうとうがっこう",
  },
  KANZAKI_SEIMEI: {
    name: "神埼清明高等学校",
    nameKana: "かんざきせいめいこうとうがっこう",
  },
  SEIFU: {
    name: "清風高等学校",
    nameKana: "せいふうこうとうがっこう",
  },
  AMAGASAKI_NISHI: {
    name: "尼崎西高校",
    nameKana: "あまがさきにしこうこう",
  },
  SEIBI: {
    name: "済美高等学校",
    nameKana: "せいびこうとうがっこう",
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
