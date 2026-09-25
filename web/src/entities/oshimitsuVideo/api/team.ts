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
    name: {
      ja: '青森大学',
      en: 'Aomori University',
      zh: '青森大学',
      ko: '아오모리대학',
      es: 'Universidad de Aomori',
      ru: 'Университет Аомори',
      hi: 'आओमोरी विश्वविद्यालय',
    },
    nameKana: 'あおもりだいがく',
  },
  DOSHISHA_UNIVERSITY: {
    name: {
      ja: '同志社大学',
      en: 'Doshisha University',
      zh: '同志社大学',
      ko: '도시샤대학',
      es: 'Universidad de Doshisha',
      ru: 'Университет Досися',
      hi: 'दोशिशा विश्वविद्यालय',
    },
    nameKana: 'どうししゃだいがく',
  },
}

const HIGH_SCHOOL: { [key in HighSchoolKey]: TeamResource } = {
  AOMORI_YAMADA: {
    name: {
      ja: '青森山田高等学校',
      en: 'Aomori Yamada High School',
      zh: '青森山田高等学校',
      ko: '아오모리야마다고등학교',
      es: 'Instituto Aomori Yamada',
      ru: 'Старшая школа Аомори Ямада',
      hi: 'आओमोरी यामादा हाई स्कूल',
    },
    nameKana: 'あおもりやまだこうとうがっこう',
  },
  ENIWA_MINAMI_HIGH: {
    name: {
      ja: '北海道恵庭南高等学校',
      en: 'Hokkaido Eniwa Minami High School',
      zh: '北海道惠庭南高等学校',
      ko: '홋카이도에니와미나미고등학교',
      es: 'Instituto Eniwa Minami de Hokkaido',
      ru: 'Старшая школа Энива-Минами (Хоккайдо)',
      hi: 'होक्काइदो एनिवा मिनामी हाई स्कूल',
    },
    nameKana: 'ほっかいどうえにわみなみこうとうがっこう',
  },
  KANZAKI_SEIMEI: {
    name: {
      ja: '神埼清明高等学校',
      en: 'Kanzaki Seimei High School',
      zh: '神埼清明高等学校',
      ko: '간자키세이메이고등학교',
      es: 'Instituto Kanzaki Seimei',
      ru: 'Старшая школа Кандзаки Сэймэй',
      hi: 'कान्ज़ाकी सेइमेई हाई स्कूल',
    },
    nameKana: 'かんざきせいめいこうとうがっこう',
  },
  SEIFU: {
    name: {
      ja: '清風高等学校',
      en: 'Seifu High School',
      zh: '清风高等学校',
      ko: '세이후고등학교',
      es: 'Instituto Seifu',
      ru: 'Старшая школа Сэйфу',
      hi: 'सेइफ़ू हाई स्कूल',
    },
    nameKana: 'せいふうこうとうがっこう',
  },
  AMAGASAKI_NISHI: {
    name: {
      ja: '尼崎西高校',
      en: 'Amagasaki Nishi High School',
      zh: '尼崎西高等学校',
      ko: '아마가사키니시고교',
      es: 'Instituto Amagasaki Nishi',
      ru: 'Старшая школа Амагасаки-Ниси',
      hi: 'अमागासाकी निशि हाई स्कूल',
    },
    nameKana: 'あまがさきにしこうこう',
  },
  SEIBI: {
    name: {
      ja: '済美高等学校',
      en: 'Seibi High School',
      zh: '济美高等学校',
      ko: '세이비고등학교',
      es: 'Instituto Seibi',
      ru: 'Старшая школа Сэйби',
      hi: 'सेइबी हाई स्कूल',
    },
    nameKana: 'せいびこうとうがっこう',
  },
  MURASAKINO: {
    name: {
      ja: '紫野高等学校',
      en: 'Murasakino High School',
      zh: '紫野高等学校',
      ko: '무라사키노고등학교',
      es: 'Instituto Murasakino',
      ru: 'Старшая школа Мурасакино',
      hi: 'मुरासाकिनो हाई स्कूल',
    },
    nameKana: 'むらさきのこうとうがっこう',
  },
  ASHIKITA_HIGH: {
    name: {
      ja: '芦北高等学校',
      en: 'Ashikita High School',
      zh: '芦北高等学校',
      ko: '아시키타고등학교',
      es: 'Instituto Ashikita',
      ru: 'Старшая школа Асикита',
      hi: 'आशिकिता हाई स्कूल',
    },
    nameKana: 'あしきたこうとうがっこう',
  },
  MAEBASHI_KOGYO: {
    name: {
      ja: '前橋工業高等学校',
      en: 'Maebashi Technical High School',
      zh: '前桥工业高等学校',
      ko: '마에바시공업고등학교',
      es: 'Instituto Técnico de Maebashi',
      ru: 'Старшая техническая школа Маэбаси',
      hi: 'माएबाशी तकनीकी हाई स्कूल',
    },
    nameKana: 'まえばしこうぎょうこうとうがっこう',
  },
  SAITAMA_SAKAE: {
    name: {
      ja: '埼玉栄高等学校',
      en: 'Saitama Sakae High School',
      zh: '埼玉荣高等学校',
      ko: '사이타마사카에고등학교',
      es: 'Instituto Saitama Sakae',
      ru: 'Старшая школа Сайтама Сакаэ',
      hi: 'साइतामा साकाए हाई स्कूल',
    },
    nameKana: 'さいたまさかえこうとうがっこう',
  },
  SHIMADA_KOGYO: {
    name: {
      ja: '島田工業高等学校',
      en: 'Shimada Technical High School',
      zh: '岛田工业高等学校',
      ko: '시마다공업고등학교',
      es: 'Instituto Técnico de Shimada',
      ru: 'Старшая техническая школа Симада',
      hi: 'शिमादा तकनीकी हाई स्कूल',
    },
    nameKana: 'しまだこうぎょうこうとうがっこう',
  },
  KAGOSHIMA_JITSUGYO: {
    name: {
      ja: '鹿児島実業高等学校',
      en: 'Kagoshima Jitsugyo High School',
      zh: '鹿儿岛实业高等学校',
      ko: '가고시마실업고등학교',
      es: 'Instituto Kagoshima Jitsugyo',
      ru: 'Старшая школа Кагосима Дзицугё',
      hi: 'कагोशिमा जित्सुग्यो हाई स्कूल',
    },
    nameKana: 'かごしまじつぎょうこうとうがっこう',
  },
  KOBAYASHI_SHUHO: {
    name: {
      ja: '小林秀峰高等学校',
      en: 'Kobayashi Shuho High School',
      zh: '小林秀峰高等学校',
      ko: '고바야시슈호고등학교',
      es: 'Instituto Kobayashi Shuho',
      ru: 'Старшая школа Кобаяси Сюхо',
      hi: 'कोबायाशी शूहो हाई स्कूल',
    },
    nameKana: 'こばやししゅうほうこうとうがっこう',
  },
  TAKADA_HIGH: {
    name: {
      ja: '高田高等学校',
      en: 'Takada High School',
      zh: '高田高等学校',
      ko: '다카다고등학교',
      es: 'Instituto Takada',
      ru: 'Старшая школа Такада',
      hi: 'ताकादा हाई स्कूल',
    },
    nameKana: 'たかだこうとうがっこう',
  },
  IBARA_HIGH: {
    name: {
      ja: '井原高等学校',
      en: 'Ibara High School',
      zh: '井原高等学校',
      ko: '이바라고등학교',
      es: 'Instituto Ibara',
      ru: 'Старшая школа Ибара',
      hi: 'इबारा हाई स्कूल',
    },
    nameKana: 'いばらこうとうがっこう',
  },
  NATORI_HIGH: {
    name: {
      ja: '名取高等学校',
      en: 'Natori High School',
      zh: '名取高等学校',
      ko: '나토리고등학교',
      es: 'Instituto Natori',
      ru: 'Старшая школа Натори',
      hi: 'नातोरी हाई स्कूल',
    },
    nameKana: 'なとりこうとうがっこう',
  },
  MORIOKA_SHIRITSU: {
    name: {
      ja: '盛岡市立高等学校',
      en: 'Morioka Municipal High School',
      zh: '盛冈市立高等学校',
      ko: '모리오카시립고등학교',
      es: 'Instituto Municipal de Morioka',
      ru: 'Городская старшая школа Мориока',
      hi: 'मोरिओका नगर हाई स्कूल',
    },
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
      ko: '신드바드 신체조 클럽',
      es: 'Club de Gimnasia Rítmica Sinbad',
      ru: 'Клуб художественной гимнастики «Синдбад»',
      hi: 'सिनबाद रिदमिक जिम्नास्टिक्स क्लब',
    },
    nameKana: 'しんばっどしんたいそうくらぶ',
  },
  LEO_RG: {
    name: {
      ja: 'Leo RG',
      en: 'Leo RG',
      zh: 'Leo RG',
      ko: 'Leo RG',
      es: 'Leo RG',
      ru: 'Лео RG',
      hi: 'लियो आरजी',
    },
    nameKana: 'れおあーるじー',
  },
  IBARA_JUNIOR: {
    name: {
      ja: '井原ジュニア',
      en: 'Ibara Junior',
      zh: '井原少年队',
      ko: '이바라 주니어',
      es: 'Ibara Junior',
      ru: 'Ибара Дзюниор',
      hi: 'इबारा जूनियर',
    },
    nameKana: 'いばらじゅにあ',
  },
  CUBE_RG: {
    name: {
      ja: 'キューブRG',
      en: 'Cube RG',
      zh: 'Cube RG',
      ko: '큐브 RG',
      es: 'Cube RG',
      ru: 'Куб RG',
      hi: 'क्यूब आरजी',
    },
    nameKana: 'きゅーぶあーるじー',
  },
} as const

/** チームを表すオブジェクト */
export const TEAMS: TeamResource[] = Object.values(Team)
