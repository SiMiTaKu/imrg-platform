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
    name: { ja: '青森大学', en: 'Aomori University', zh: '青森大学' },
    nameKana: 'あおもりだいがく',
  },
  DOSHISHA_UNIVERSITY: {
    name: { ja: '同志社大学', en: 'Doshisha University', zh: '同志社大学' },
    nameKana: 'どうししゃだいがく',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: { ja: '青森山田高等学校', en: 'Aomori Yamada High School', zh: '青森山田高等学校' },
    nameKana: 'あおもりやまだこうとうがっこう',
  },
  ENIWA_MINAMI_HIGH: {
    name: {
      ja: '北海道恵庭南高等学校',
      en: 'Hokkaido Eniwa Minami High School',
      zh: '北海道惠庭南高等学校',
    },
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
  },
  KANZAKI_SEIMEI: {
    name: { ja: '神埼清明高等学校', en: 'Kanzaki Seimei High School', zh: '神埼清明高等学校' },
    nameKana: 'かんざきせいめいこうとうがっこう',
  },
  SEIFU: {
    name: { ja: '清風高等学校', en: 'Seifu High School', zh: '清风高等学校' },
    nameKana: 'せいふうこうとうがっこう',
  },
  AMAGASAKI_NISHI: {
    name: { ja: '尼崎西高校', en: 'Amagasaki Nishi High School', zh: '尼崎西高等学校' },
    nameKana: 'あまがさきにしこうこう',
  },
  SEIBI: {
    name: { ja: '済美高等学校', en: 'Seibi High School', zh: '济美高等学校' },
    nameKana: 'せいびこうとうがっこう',
  },
  MURASAKINO: {
    name: { ja: '紫野高等学校', en: 'Murasakino High School', zh: '紫野高等学校' },
    nameKana: 'むらさきのこうとうがっこう',
  },
  ASHIKITA_HIGH: {
    name: { ja: '芦北高等学校', en: 'Ashikita High School', zh: '芦北高等学校' },
    nameKana: 'あしきたこうとうがっこう',
  },
  MAEBASHI_KOGYO: {
    name: { ja: '前橋工業高等学校', en: 'Maebashi Technical High School', zh: '前桥工业高等学校' },
    nameKana: 'まえばしこうぎょうこうとうがっこう',
  },
  SAITAMA_SAKAE: {
    name: { ja: '埼玉栄高等学校', en: 'Saitama Sakae High School', zh: '埼玉荣高等学校' },
    nameKana: 'さいたまさかえこうとうがっこう',
  },
  SHIMADA_KOGYO: {
    name: { ja: '島田工業高等学校', en: 'Shimada Technical High School', zh: '岛田工业高等学校' },
    nameKana: 'しまだこうぎょうこうとうがっこう',
  },
  KAGOSHIMA_JITSUGYO: {
    name: {
      ja: '鹿児島実業高等学校',
      en: 'Kagoshima Jitsugyo High School',
      zh: '鹿儿岛实业高等学校',
    },
    nameKana: 'かごしまじつぎょうこうとうがっこう',
  },
  KOBAYASHI_SHUHO: {
    name: { ja: '小林秀峰高等学校', en: 'Kobayashi Shuho High School', zh: '小林秀峰高等学校' },
    nameKana: 'こばやししゅうほうこうとうがっこう',
  },
  TAKADA_HIGH: {
    name: { ja: '高田高等学校', en: 'Takada High School', zh: '高田高等学校' },
    nameKana: 'たかだこうとうがっこう',
  },
  IBARA_HIGH: {
    name: { ja: '井原高等学校', en: 'Ibara High School', zh: '井原高等学校' },
    nameKana: 'いばらこうとうがっこう',
  },
  NATORI_HIGH: {
    name: { ja: '名取高等学校', en: 'Natori High School', zh: '名取高等学校' },
    nameKana: 'なとりこうとうがっこう',
  },
  MORIOKA_SHIRITSU: {
    name: { ja: '盛岡市立高等学校', en: 'Morioka Municipal High School', zh: '盛冈市立高等学校' },
    nameKana: 'もりおかしりつこうとうがっこう',
  },
}

export const Team: { [key in TeamKey]: TeamResource } = {
  ...UNIVERSITY,
  ...HIGH_SCHOOL,
  SINBAD_RG: {
    name: {
      ja: 'シンドバッド新体操クラブ',
      en: 'Sinbad Rhythmic Gymnastics Club',
      zh: '辛巴达艺术体操俱乐部',
    },
    nameKana: 'しんばっどしんたいそうくらぶ',
  },
  LEO_RG: {
    name: { ja: 'Leo RG', en: 'Leo RG', zh: 'Leo RG' },
    nameKana: 'れおあーるじー',
  },
  IBARA_JUNIOR: {
    name: { ja: '井原ジュニア', en: 'Ibara Junior', zh: '井原少年队' },
    nameKana: 'いばらじゅにあ',
  },
  CUBE_RG: {
    name: { ja: 'キューブRG', en: 'Cube RG', zh: 'Cube RG' },
    nameKana: 'きゅーぶあーるじー',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
