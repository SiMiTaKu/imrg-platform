import type { TeamResource } from '../model/video'

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
    name: { japanese: '青森大学', english: 'Aomori University' },
    nameKana: 'あおもりだいがく',
  },
  DOSHISHA_UNIVERSITY: {
    name: { japanese: '同志社大学', english: 'Doshisha University' },
    nameKana: 'どうししゃだいがく',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: { japanese: '青森山田高等学校', english: 'Aomori Yamada High School' },
    nameKana: 'あおもりやまだこうとうがっこう',
  },
  ENIWA_MINAMI_HIGH: {
    name: { japanese: '北海道恵庭南高等学校', english: 'Hokkaido Eniwa Minami High School' },
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
  },
  KANZAKI_SEIMEI: {
    name: { japanese: '神埼清明高等学校', english: 'Kanzaki Seimei High School' },
    nameKana: 'かんざきせいめいこうとうがっこう',
  },
  SEIFU: {
    name: { japanese: '清風高等学校', english: 'Seifu High School' },
    nameKana: 'せいふうこうとうがっこう',
  },
  AMAGASAKI_NISHI: {
    name: { japanese: '尼崎西高校', english: 'Amagasaki Nishi High School' },
    nameKana: 'あまがさきにしこうこう',
  },
  SEIBI: {
    name: { japanese: '済美高等学校', english: 'Seibi High School' },
    nameKana: 'せいびこうとうがっこう',
  },
  MURASAKINO: {
    name: { japanese: '紫野高等学校', english: 'Murasakino High School' },
    nameKana: 'むらさきのこうとうがっこう',
  },
  ASHIKITA_HIGH: {
    name: { japanese: '芦北高等学校', english: 'Ashikita High School' },
    nameKana: 'あしきたこうとうがっこう',
  },
  MAEBASHI_KOGYO: {
    name: { japanese: '前橋工業高等学校', english: 'Maebashi Technical High School' },
    nameKana: 'まえばしこうぎょうこうとうがっこう',
  },
  SAITAMA_SAKAE: {
    name: { japanese: '埼玉栄高等学校', english: 'Saitama Sakae High School' },
    nameKana: 'さいたまさかえこうとうがっこう',
  },
  SHIMADA_KOGYO: {
    name: { japanese: '島田工業高等学校', english: 'Shimada Technical High School' },
    nameKana: 'しまだこうぎょうこうとうがっこう',
  },
  KAGOSHIMA_JITSUGYO: {
    name: { japanese: '鹿児島実業高等学校', english: 'Kagoshima Jitsugyo High School' },
    nameKana: 'かごしまじつぎょうこうとうがっこう',
  },
  KOBAYASHI_SHUHO: {
    name: { japanese: '小林秀峰高等学校', english: 'Kobayashi Shuho High School' },
    nameKana: 'こばやししゅうほうこうとうがっこう',
  },
  TAKADA_HIGH: {
    name: { japanese: '高田高等学校', english: 'Takada High School' },
    nameKana: 'たかだこうとうがっこう',
  },
  IBARA_HIGH: {
    name: { japanese: '井原高等学校', english: 'Ibara High School' },
    nameKana: 'いばらこうとうがっこう',
  },
  NATORI_HIGH: {
    name: { japanese: '名取高等学校', english: 'Natori High School' },
    nameKana: 'なとりこうとうがっこう',
  },
  MORIOKA_SHIRITSU: {
    name: { japanese: '盛岡市立高等学校', english: 'Morioka Municipal High School' },
    nameKana: 'もりおかしりつこうとうがっこう',
  },
}

export const Team: { [key in TeamKey]: TeamResource } = {
  ...UNIVERSITY,
  ...HIGH_SCHOOL,
  SINBAD_RG: {
    name: { japanese: 'シンドバッド新体操クラブ', english: 'Sinbad Rhythmic Gymnastics Club' },
    nameKana: 'しんばっどしんたいそうくらぶ',
  },
  LEO_RG: {
    name: { japanese: 'Leo RG', english: 'Leo RG' },
    nameKana: 'れおあーるじー',
  },
  IBARA_JUNIOR: {
    name: { japanese: '井原ジュニア', english: 'Ibara Junior' },
    nameKana: 'いばらじゅにあ',
  },
  CUBE_RG: {
    name: { japanese: 'キューブRG', english: 'Cube RG' },
    nameKana: 'きゅーぶあーるじー',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
