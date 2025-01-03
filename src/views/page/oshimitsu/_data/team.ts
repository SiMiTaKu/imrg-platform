import type { TeamResource } from "../_models"

type TeamKey =
  | "AOMORI_UNIVERSITY"
  | "AOMORI_YAMADA"
  | "ENIWA_MINAMI_HIGH"
  | "KANZAKI_SEIMEI"
  | "SEIFU"
  | "AMAGASAKI_NISHI"
  | "SEIBI"
  | "MURASAKINO"
  | "ASHIKITA_HIGH"
  | "MAEBASHI_KOGYO"
  | "SAITAMA_SAKAE"
  | "SHIMADA_KOGYO"
  | "KAGOSHIMA_JITSUGYO"
  | "KOBAYASHI_SHUHO";

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
  MURASAKINO: {
    name: "紫野高等学校",
    nameKana: "むらさきのこうとうがっこう",
  },
  ASHIKITA_HIGH: {
    name: "芦北高等学校",
    nameKana: "あしきたこうとうがっこう",
  },
  MAEBASHI_KOGYO: {
    name: "前橋工業高等学校",
    nameKana: "まえばしこうぎょうこうとうがっこう",
  },
  SAITAMA_SAKAE: {
    name: "埼玉栄高等学校",
    nameKana: "さいたまさかえこうとうがっこう",
  },
  SHIMADA_KOGYO: {
    name: "島田工業高等学校",
    nameKana: "しまだこうぎょうこうとうがっこう",
  },
  KAGOSHIMA_JITSUGYO: {
    name: "鹿児島実業高等学校",
    nameKana: "かごしまじつぎょうこうとうがっこう",
  },
  KOBAYASHI_SHUHO: {
    name: "小林秀峰高等学校",
    nameKana: "こばやししゅうほうこうとうがっこう",
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
