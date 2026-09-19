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
    name: { ja: '青森大学', en: 'Aomori University' },
    nameKana: 'あおもりだいがく',
  },
  DOSHISHA_UNIVERSITY: {
    name: { ja: '同志社大学', en: 'Doshisha University' },
    nameKana: 'どうししゃだいがく',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: { ja: '青森山田高等学校', en: 'Aomori Yamada High School' },
    nameKana: 'あおもりやまだこうとうがっこう',
  },
  ENIWA_MINAMI_HIGH: {
    name: { ja: '北海道恵庭南高等学校', en: 'Hokkaido Eniwa Minami High School' },
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
  },
  KANZAKI_SEIMEI: {
    name: { ja: '神埼清明高等学校', en: 'Kanzaki Seimei High School' },
    nameKana: 'かんざきせいめいこうとうがっこう',
  },
  SEIFU: {
    name: { ja: '清風高等学校', en: 'Seifu High School' },
    nameKana: 'せいふうこうとうがっこう',
  },
  AMAGASAKI_NISHI: {
    name: { ja: '尼崎西高校', en: 'Amagasaki Nishi High School' },
    nameKana: 'あまがさきにしこうこう',
  },
  SEIBI: {
    name: { ja: '済美高等学校', en: 'Seibi High School' },
    nameKana: 'せいびこうとうがっこう',
  },
  MURASAKINO: {
    name: { ja: '紫野高等学校', en: 'Murasakino High School' },
    nameKana: 'むらさきのこうとうがっこう',
  },
  ASHIKITA_HIGH: {
    name: { ja: '芦北高等学校', en: 'Ashikita High School' },
    nameKana: 'あしきたこうとうがっこう',
  },
  MAEBASHI_KOGYO: {
    name: { ja: '前橋工業高等学校', en: 'Maebashi Technical High School' },
    nameKana: 'まえばしこうぎょうこうとうがっこう',
  },
  SAITAMA_SAKAE: {
    name: { ja: '埼玉栄高等学校', en: 'Saitama Sakae High School' },
    nameKana: 'さいたまさかえこうとうがっこう',
  },
  SHIMADA_KOGYO: {
    name: { ja: '島田工業高等学校', en: 'Shimada Technical High School' },
    nameKana: 'しまだこうぎょうこうとうがっこう',
  },
  KAGOSHIMA_JITSUGYO: {
    name: { ja: '鹿児島実業高等学校', en: 'Kagoshima Jitsugyo High School' },
    nameKana: 'かごしまじつぎょうこうとうがっこう',
  },
  KOBAYASHI_SHUHO: {
    name: { ja: '小林秀峰高等学校', en: 'Kobayashi Shuho High School' },
    nameKana: 'こばやししゅうほうこうとうがっこう',
  },
  TAKADA_HIGH: {
    name: { ja: '高田高等学校', en: 'Takada High School' },
    nameKana: 'たかだこうとうがっこう',
  },
  IBARA_HIGH: {
    name: { ja: '井原高等学校', en: 'Ibara High School' },
    nameKana: 'いばらこうとうがっこう',
  },
  NATORI_HIGH: {
    name: { ja: '名取高等学校', en: 'Natori High School' },
    nameKana: 'なとりこうとうがっこう',
  },
  MORIOKA_SHIRITSU: {
    name: { ja: '盛岡市立高等学校', en: 'Morioka Municipal High School' },
    nameKana: 'もりおかしりつこうとうがっこう',
  },
}

export const Team: { [key in TeamKey]: TeamResource } = {
  ...UNIVERSITY,
  ...HIGH_SCHOOL,
  SINBAD_RG: {
    name: { ja: 'シンドバッド新体操クラブ', en: 'Sinbad Rhythmic Gymnastics Club' },
    nameKana: 'しんばっどしんたいそうくらぶ',
  },
  LEO_RG: {
    name: { ja: 'Leo RG', en: 'Leo RG' },
    nameKana: 'れおあーるじー',
  },
  IBARA_JUNIOR: {
    name: { ja: '井原ジュニア', en: 'Ibara Junior' },
    nameKana: 'いばらじゅにあ',
  },
  CUBE_RG: {
    name: { ja: 'キューブRG', en: 'Cube RG' },
    nameKana: 'きゅーぶあーるじー',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
