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
    name: '青森大学',
    nameKana: 'あおもりだいがく',
    nameEnglish: 'Aomori University',
  },
  DOSHISHA_UNIVERSITY: {
    name: '同志社大学',
    nameKana: 'どうししゃだいがく',
    nameEnglish: 'Doshisha University',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: '青森山田高等学校',
    nameKana: 'あおもりやまだこうとうがっこう',
    nameEnglish: 'Aomori Yamada High School',
  },
  ENIWA_MINAMI_HIGH: {
    name: '北海道恵庭南高等学校',
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
    nameEnglish: 'Hokkaido Eniwa Minami High School',
  },
  KANZAKI_SEIMEI: {
    name: '神埼清明高等学校',
    nameKana: 'かんざきせいめいこうとうがっこう',
    nameEnglish: 'Kanzaki Seimei High School',
  },
  SEIFU: {
    name: '清風高等学校',
    nameKana: 'せいふうこうとうがっこう',
    nameEnglish: 'Seifu High School',
  },
  AMAGASAKI_NISHI: {
    name: '尼崎西高校',
    nameKana: 'あまがさきにしこうこう',
    nameEnglish: 'Amagasaki Nishi High School',
  },
  SEIBI: {
    name: '済美高等学校',
    nameKana: 'せいびこうとうがっこう',
    nameEnglish: 'Seibi High School',
  },
  MURASAKINO: {
    name: '紫野高等学校',
    nameKana: 'むらさきのこうとうがっこう',
    nameEnglish: 'Murasakino High School',
  },
  ASHIKITA_HIGH: {
    name: '芦北高等学校',
    nameKana: 'あしきたこうとうがっこう',
    nameEnglish: 'Ashikita High School',
  },
  MAEBASHI_KOGYO: {
    name: '前橋工業高等学校',
    nameKana: 'まえばしこうぎょうこうとうがっこう',
    nameEnglish: 'Maebashi Technical High School',
  },
  SAITAMA_SAKAE: {
    name: '埼玉栄高等学校',
    nameKana: 'さいたまさかえこうとうがっこう',
    nameEnglish: 'Saitama Sakae High School',
  },
  SHIMADA_KOGYO: {
    name: '島田工業高等学校',
    nameKana: 'しまだこうぎょうこうとうがっこう',
    nameEnglish: 'Shimada Technical High School',
  },
  KAGOSHIMA_JITSUGYO: {
    name: '鹿児島実業高等学校',
    nameKana: 'かごしまじつぎょうこうとうがっこう',
    nameEnglish: 'Kagoshima Jitsugyo High School',
  },
  KOBAYASHI_SHUHO: {
    name: '小林秀峰高等学校',
    nameKana: 'こばやししゅうほうこうとうがっこう',
    nameEnglish: 'Kobayashi Shuho High School',
  },
  TAKADA_HIGH: {
    name: '高田高等学校',
    nameKana: 'たかだこうとうがっこう',
    nameEnglish: 'Takada High School',
  },
  IBARA_HIGH: {
    name: '井原高等学校',
    nameKana: 'いばらこうとうがっこう',
    nameEnglish: 'Ibara High School',
  },
  NATORI_HIGH: {
    name: '名取高等学校',
    nameKana: 'なとりこうとうがっこう',
    nameEnglish: 'Natori High School',
  },
  MORIOKA_SHIRITSU: {
    name: '盛岡市立高等学校',
    nameKana: 'もりおかしりつこうとうがっこう',
    nameEnglish: 'Morioka Municipal High School',
  },
}

export const Team: { [key in TeamKey]: TeamResource } = {
  ...UNIVERSITY,
  ...HIGH_SCHOOL,
  SINBAD_RG: {
    name: 'シンドバッド新体操クラブ',
    nameKana: 'しんばっどしんたいそうくらぶ',
    nameEnglish: 'Sinbad Rhythmic Gymnastics Club',
  },
  LEO_RG: {
    name: 'Leo RG',
    nameKana: 'れおあーるじー',
    nameEnglish: 'Leo RG',
  },
  IBARA_JUNIOR: {
    name: '井原ジュニア',
    nameKana: 'いばらじゅにあ',
    nameEnglish: 'Ibara Junior',
  },
  CUBE_RG: {
    name: 'キューブRG',
    nameKana: 'きゅーぶあーるじー',
    nameEnglish: 'Cube RG',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
