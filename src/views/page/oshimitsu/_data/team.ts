import type { TeamResource } from '../_models'

type UniversityKey = 'AOMORI_UNIVERSITY' | 'DOSHISHA_UNIVERSITY'

type HighSchoolKey =
  | 'AOMORI_YAMADA'
  | 'ENIWA_MINAMI_HIGH'
  | 'KANZAKI_SEIMEI'
  | 'SEIFU'
  | 'AMAGASAKI_NISHI'
  | 'SEIBI'
  | 'MURASAKINO'
  | 'ASHIKITA_HIGH'
  | 'MAEBASHI_KOGYO'
  | 'SAITAMA_SAKAE'
  | 'SHIMADA_KOGYO'
  | 'KAGOSHIMA_JITSUGYO'
  | 'KOBAYASHI_SHUHO'
  | 'TAKADA_HIGH'
  | 'IBARA_HIGH'
  | 'NATORI_HIGH'
  | 'MORIOKA_SHIRITSU'

type TeamKey = UniversityKey | HighSchoolKey | 'SINBAD_RG' | 'LEO_RG' | 'IBARA_JUNIOR' | 'CUBE_RG'

const UNIVERSITY: { [key in UniversityKey]: TeamResource } = {
  AOMORI_UNIVERSITY: {
    name: '青森大学',
    nameKana: 'あおもりだいがく',
  },
  DOSHISHA_UNIVERSITY: {
    name: '同志社大学',
    nameKana: 'どうししゃだいがく',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: '青森山田高等学校',
    nameKana: 'あおもりやまだこうとうがっこう',
  },
  ENIWA_MINAMI_HIGH: {
    name: '北海道恵庭南高等学校',
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
  },
  KANZAKI_SEIMEI: {
    name: '神埼清明高等学校',
    nameKana: 'かんざきせいめいこうとうがっこう',
  },
  SEIFU: {
    name: '清風高等学校',
    nameKana: 'せいふうこうとうがっこう',
  },
  AMAGASAKI_NISHI: {
    name: '尼崎西高校',
    nameKana: 'あまがさきにしこうこう',
  },
  SEIBI: {
    name: '済美高等学校',
    nameKana: 'せいびこうとうがっこう',
  },
  MURASAKINO: {
    name: '紫野高等学校',
    nameKana: 'むらさきのこうとうがっこう',
  },
  ASHIKITA_HIGH: {
    name: '芦北高等学校',
    nameKana: 'あしきたこうとうがっこう',
  },
  MAEBASHI_KOGYO: {
    name: '前橋工業高等学校',
    nameKana: 'まえばしこうぎょうこうとうがっこう',
  },
  SAITAMA_SAKAE: {
    name: '埼玉栄高等学校',
    nameKana: 'さいたまさかえこうとうがっこう',
  },
  SHIMADA_KOGYO: {
    name: '島田工業高等学校',
    nameKana: 'しまだこうぎょうこうとうがっこう',
  },
  KAGOSHIMA_JITSUGYO: {
    name: '鹿児島実業高等学校',
    nameKana: 'かごしまじつぎょうこうとうがっこう',
  },
  KOBAYASHI_SHUHO: {
    name: '小林秀峰高等学校',
    nameKana: 'こばやししゅうほうこうとうがっこう',
  },
  TAKADA_HIGH: {
    name: '高田高等学校',
    nameKana: 'たかだこうとうがっこう',
  },
  IBARA_HIGH: {
    name: '井原高等学校',
    nameKana: 'いばらこうとうがっこう',
  },
  NATORI_HIGH: {
    name: '名取高等学校',
    nameKana: 'なとりこうとうがっこう',
  },
  MORIOKA_SHIRITSU: {
    name: '盛岡市立高等学校',
    nameKana: 'もりおかしりつこうとうがっこう',
  },
}

export const Team: { [key in TeamKey]: TeamResource } = {
  ...UNIVERSITY,
  ...HIGH_SCHOOL,
  SINBAD_RG: {
    name: 'シンドバッド新体操クラブ',
    nameKana: 'しんばっどしんたいそうくらぶ',
  },
  LEO_RG: {
    name: 'Leo RG',
    nameKana: 'れおあーるじー',
  },
  IBARA_JUNIOR: {
    name: '井原ジュニア',
    nameKana: 'いばらじゅにあ',
  },
  CUBE_RG: {
    name: 'キューブRG',
    nameKana: 'きゅーぶあーるじー',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
