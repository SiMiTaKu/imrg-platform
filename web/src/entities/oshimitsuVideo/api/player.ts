import type { PlayerResource } from '../model/video'
import { Team } from './team'

type PlayerKey =
  | 'TAKUMI_SHIMIZU'
  | 'KAZUMA_YOSHIDA'
  | 'KOUJI_HAMAYA'
  | 'YUTA_ODAGIRI'
  | 'RYO_AKIYAMA'
  | 'SHINYA_MANJU'
  | 'KAI_TAGUCHI'
  | 'TOMOYA_ISHIBASHI'
  | 'SOICHIRO_NAKAYAMA'
  | 'TAISEI_URAYAMA'
  | 'TAKUMI_ASADA'
  | 'ASAHI_IWASAKI'
  | 'AOTO_KUWABARA'
  | 'RENON_KASAI'
  | 'JOSHIN_KIKUCHI'
  | 'TAIYO_FUJIMOTO'
  | 'HINATA_YOSHIDA'
  | 'KOKI_MORIZONO'
  | 'KOICHI_MURASATO'
  | 'YUSUKE_OTA'
  | 'MASASHI_TAGUCHI'
  | 'HAYATO_NOGUCHI'
  | 'KENTA_MATSUMOTO'
  | 'TSUBASA_MUTO'
  | 'RYUMA_MURAKAMI'
  | 'HAYATE_TAMAKI'
  | 'RYOSUKE_IGARASHI'
  | 'SHUNSUKE_EGAMI'
  | 'WATARU_ITO'
  | 'KEISUKE_MURAMATSU'
  | 'SHIRO_UCHIMURA'
  | 'MAKOTO_KIMURE'
  | 'SHUN_UENO'
  | 'KENSHIRO_WATANABE'
  | 'YUTAKA_MAEDA'
  | 'HARUKI_MAEDA'
  | 'RIKU_NAKAZAWA'
  | 'GINJI_SEKIDO'
  | 'KYOSHIRO_YAMAMOTO'
  | 'KOSUKE_HORI'
  | 'TOMOKI_HARADA'
  | 'NAOTO_ENDO'
  | 'KUGA_HIGASHI'
  | 'SHOTA_YONEZAWA'
  | 'ICHIGO_KAJIKI'
  | 'AYUMU_HONDA'

export const Player: { [key in PlayerKey]: PlayerResource } = {
  TAKUMI_SHIMIZU: {
    name: {
      ja: '清水琢巳',
      en: 'Takumi Shimizu',
      zh: '清水琢巳',
      ko: '시미즈 타쿠미',
      ru: 'Симидзу Такуми',
      hi: 'शिमिज़ु ताकुमी',
    },
    nameKana: 'しみずたくみ',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAZUMA_YOSHIDA: {
    name: {
      ja: '吉田和真',
      en: 'Kazuma Yoshida',
      zh: '吉田和真',
      ko: '요시다 카즈마',
      ru: 'Ёсида Кадзума',
      hi: 'योशिदा काज़ुमा',
    },
    nameKana: 'よしだかずま',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOUJI_HAMAYA: {
    name: {
      ja: '濱谷航至',
      en: 'Koji Hamaya',
      zh: '滨谷航至',
      ko: '하마야 코지',
      ru: 'Хамая Кодзи',
      hi: 'हामाया कोजी',
    },
    nameKana: 'はまやこうじ',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  YUTA_ODAGIRI: {
    name: {
      ja: '小田切優太',
      en: 'Yuta Odagiri',
      zh: '小田切优太',
      ko: '오다기리 유타',
      ru: 'Одагири Юта',
      hi: 'ओदागिरि यूता',
    },
    nameKana: 'おだぎりゆうた',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  RYO_AKIYAMA: {
    name: {
      ja: '秋山亮',
      en: 'Ryo Akiyama',
      zh: '秋山亮',
      ko: '아키야마 료',
      ru: 'Акияма Рё',
      hi: 'अकियामा र्यो',
    },
    nameKana: 'あきやまりょう',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  SHINYA_MANJU: {
    name: {
      ja: '満仲進哉',
      en: 'Shinya Manju',
      zh: '满仲进哉',
      ko: '만주 신야',
      ru: 'Мандзю Синъя',
      hi: 'मंजू शिन्या',
    },
    nameKana: 'まんじゅうしんや',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAI_TAGUCHI: {
    name: {
      ja: '田口海',
      en: 'Kai Taguchi',
      zh: '田口海',
      ko: '다구치 카이',
      ru: 'Тагути Кай',
      hi: 'तागुची काई',
    },
    nameKana: 'たぐちかい',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  TOMOYA_ISHIBASHI: {
    name: {
      ja: '石橋知也',
      en: 'Tomoya Ishibashi',
      zh: '石桥知也',
      ko: '이시바시 토모야',
      ru: 'Исибаси Томоя',
      hi: 'इशिबाशी तोमोया',
    },
    nameKana: 'いしばしともや',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  SOICHIRO_NAKAYAMA: {
    name: {
      ja: '中山蒼一朗',
      en: 'Soichiro Nakayama',
      zh: '中山苍一朗',
      ko: '나카야마 소이치로',
      ru: 'Накаяма Соитиро',
      hi: 'नाकायामा सोइचिरो',
    },
    nameKana: 'なかやまそういちろう',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TAISEI_URAYAMA: {
    name: {
      ja: '裏山大生',
      en: 'Taisei Urayama',
      zh: '里山大生',
      ko: '우라야마 타이세이',
      ru: 'Ураяма Тайсэй',
      hi: 'उरायामा ताइसेइ',
    },
    nameKana: 'うらやまたいせい',
    belongedTeams: [Team.SEIFU, Team.AOMORI_UNIVERSITY],
  },
  TAKUMI_ASADA: {
    name: {
      ja: '浅田匠',
      en: 'Takumi Asada',
      zh: '浅田匠',
      ko: '아사다 타쿠미',
      ru: 'Асада Такуми',
      hi: 'असादा ताकुमी',
    },
    nameKana: 'あさだたくみ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  ASAHI_IWASAKI: {
    name: {
      ja: '岩﨑あさひ',
      en: 'Asahi Iwasaki',
      zh: '岩崎朝日',
      ko: '이와사키 아사히',
      ru: 'Ивасаки Асахи',
      hi: 'इवासाकी असाही',
    },
    nameKana: 'いわさきあさひ',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  AOTO_KUWABARA: {
    name: {
      ja: '桒原碧都',
      en: 'Aoto Kuwabara',
      zh: '桑原碧都',
      ko: '구와바라 아오토',
      ru: 'Кувабара Аото',
      hi: 'कुवाबारा आओतो',
    },
    nameKana: 'くわばらあおと',
    belongedTeams: [Team.SEIBI, Team.AOMORI_UNIVERSITY],
  },
  RENON_KASAI: {
    name: {
      ja: '葛西麗音',
      en: 'Renon Kasai',
      zh: '葛西丽音',
      ko: '가사이 레논',
      ru: 'Касай Рэнон',
      hi: 'कासाई रेनोन',
    },
    nameKana: 'かさいれのん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  JOSHIN_KIKUCHI: {
    name: {
      ja: '釋氏乗真',
      en: 'Joshin Kikuchi',
      zh: '释氏乘真',
      ko: '기쿠치 조신',
      ru: 'Кикути Дзёсин',
      hi: 'किकुची जोशिन',
    },
    nameKana: 'きくちじょうしん',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  TAIYO_FUJIMOTO: {
    name: {
      ja: '藤本太陽',
      en: 'Taiyo Fujimoto',
      zh: '藤本太阳',
      ko: '후지모토 타이요',
      ru: 'Фудзимото Тайё',
      hi: 'फुजिमोतो ताइयो',
    },
    nameKana: 'ふじもとたいよう',
    belongedTeams: [Team.MURASAKINO, Team.AOMORI_UNIVERSITY],
  },
  HINATA_YOSHIDA: {
    name: {
      ja: '譽士太陽向',
      en: 'Hinata Yoshida',
      zh: '誉士太阳向',
      ko: '요시다 히나타',
      ru: 'Ёсида Хината',
      hi: 'योशिदा हिनाता',
    },
    nameKana: 'よしだひなた',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOKI_MORIZONO: {
    name: {
      ja: '森園滉貴',
      en: 'Koki Morizono',
      zh: '森园滉贵',
      ko: '모리조노 코키',
      ru: 'Моридзоно Коки',
      hi: 'मोरिज़ोनो कोकी',
    },
    nameKana: 'もりぞのこうき',
    belongedTeams: [Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KOICHI_MURASATO: {
    name: {
      ja: '村里剛一',
      en: 'Koichi Murasato',
      zh: '村里刚一',
      ko: '무라사토 코이치',
      ru: 'Мурасато Коити',
      hi: 'मुरासातो कोइची',
    },
    nameKana: 'むらさとこういち',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  YUSUKE_OTA: {
    name: {
      ja: '太田悠介',
      en: 'Yusuke Ota',
      zh: '太田悠介',
      ko: '오타 유스케',
      ru: 'Ота Юсукэ',
      hi: 'ओता यूसुके',
    },
    nameKana: 'おおたゆうすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  MASASHI_TAGUCHI: {
    name: {
      ja: '田口将',
      en: 'Masashi Taguchi',
      zh: '田口将',
      ko: '다구치 마사시',
      ru: 'Тагути Масаси',
      hi: 'तागुची मासाशी',
    },
    nameKana: 'たぐちまさし',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  HAYATO_NOGUCHI: {
    name: {
      ja: '野口勇人',
      en: 'Hayato Noguchi',
      zh: '野口勇人',
      ko: '노구치 하야토',
      ru: 'Ногути Хаято',
      hi: 'नोगुची हायातो',
    },
    nameKana: 'のぐちはやと',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  KENTA_MATSUMOTO: {
    name: {
      ja: '松本健太',
      en: 'Kenta Matsumoto',
      zh: '松本健太',
      ko: '마쓰모토 켄타',
      ru: 'Мацумото Кэнта',
      hi: 'मात्सुमोतो केंता',
    },
    nameKana: 'まつもとけんた',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TSUBASA_MUTO: {
    name: {
      ja: '武藤翼',
      en: 'Tsubasa Muto',
      zh: '武藤翼',
      ko: '무토 쓰바사',
      ru: 'Муто Цубаса',
      hi: 'मुतो त्सुबासा',
    },
    nameKana: 'むとうつばさ',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  RYUMA_MURAKAMI: {
    name: {
      ja: '村上隆真',
      en: 'Ryuma Murakami',
      zh: '村上隆真',
      ko: '무라카미 류마',
      ru: 'Мураками Рюма',
      hi: 'मुराकामी र्यूमा',
    },
    nameKana: 'むらかみりゅうま',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  HAYATE_TAMAKI: {
    name: {
      ja: '玉置颯',
      en: 'Hayate Tamaki',
      zh: '玉置飒',
      ko: '다마키 하야테',
      ru: 'Тамаки Хаятэ',
      hi: 'तामाकी हायाते',
    },
    nameKana: 'たまきはやて',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  RYOSUKE_IGARASHI: {
    name: {
      ja: '五十嵐涼介',
      en: 'Ryosuke Igarashi',
      zh: '五十岚凉介',
      ko: '이가라시 료스케',
      ru: 'Игараси Рёсукэ',
      hi: 'इगाराशी र्योसुके',
    },
    nameKana: 'いがらしりょうすけ',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  SHUNSUKE_EGAMI: {
    name: {
      ja: '江上駿祐',
      en: 'Shunsuke Egami',
      zh: '江上骏祐',
      ko: '에가미 슌스케',
      ru: 'Эгами Сюнсукэ',
      hi: 'एगामी शुनसुके',
    },
    nameKana: 'えがみしゅんすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  WATARU_ITO: {
    name: {
      ja: '井藤亘',
      en: 'Wataru Ito',
      zh: '井藤亘',
      ko: '이토 와타루',
      ru: 'Ито Ватару',
      hi: 'इतो वातारु',
    },
    nameKana: 'いとうわたる',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  KEISUKE_MURAMATSU: {
    name: {
      ja: '村松景介',
      en: 'Keisuke Muramatsu',
      zh: '村松景介',
      ko: '무라마쓰 케이스케',
      ru: 'Мурамацу Кэйсукэ',
      hi: 'मुरामात्सु केइसुके',
    },
    nameKana: 'むらまつけいすけ',
    belongedTeams: [Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  SHIRO_UCHIMURA: {
    name: {
      ja: '内村志朗',
      en: 'Shiro Uchimura',
      zh: '内村志朗',
      ko: '우치무라 시로',
      ru: 'Утимура Сиро',
      hi: 'उचिमुरा शिरो',
    },
    nameKana: 'うちむらしろう',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY],
  },
  MAKOTO_KIMURE: {
    name: {
      ja: '木牟禮詢',
      en: 'Makoto Kimure',
      zh: '木牟礼询',
      ko: '기무레 마코토',
      ru: 'Кимурэ Макото',
      hi: 'किमुरे माकोतो',
    },
    nameKana: 'きむれまこと',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  SHUN_UENO: {
    name: {
      ja: '植野洵',
      en: 'Shun Ueno',
      zh: '植野洵',
      ko: '우에노 슌',
      ru: 'Уэно Сюн',
      hi: 'उएनो शुन',
    },
    nameKana: 'うえのしゅん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KENSHIRO_WATANABE: {
    name: {
      ja: '渡辺剣史郎',
      en: 'Kenshiro Watanabe',
      zh: '渡边剑史郎',
      ko: '와타나베 켄시로',
      ru: 'Ватанабэ Кэнсиро',
      hi: 'वातानाबे केंशिरो',
    },
    nameKana: 'わたなべけんしろう',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  YUTAKA_MAEDA: {
    name: {
      ja: '前田豊',
      en: 'Yutaka Maeda',
      zh: '前田丰',
      ko: '마에다 유타카',
      ru: 'Маэда Ютака',
      hi: 'माएदा युताका',
    },
    nameKana: 'まえだゆたか',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  HARUKI_MAEDA: {
    name: {
      ja: '前田春希',
      en: 'Haruki Maeda',
      zh: '前田春希',
      ko: '마에다 하루키',
      ru: 'Маэда Харуки',
      hi: 'माएदा हारुकी',
    },
    nameKana: 'まえだはるき',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  RIKU_NAKAZAWA: {
    name: {
      ja: '中澤陸',
      en: 'Riku Nakazawa',
      zh: '中泽陆',
      ko: '나카자와 리쿠',
      ru: 'Накадзава Рику',
      hi: 'नाकाज़ावा रिकु',
    },
    nameKana: 'なかざわりく',
    belongedTeams: [Team.SINBAD_RG],
  },
  GINJI_SEKIDO: {
    name: {
      ja: '関戸銀児',
      en: 'Ginji Sekido',
      zh: '关户银儿',
      ko: '세키도 긴지',
      ru: 'Сэкидо Гиндзи',
      hi: 'सेकिदो गिनजी',
    },
    nameKana: 'せきどぎんじ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KYOSHIRO_YAMAMOTO: {
    name: {
      ja: '山本響士朗',
      en: 'Kyoshiro Yamamoto',
      zh: '山本响士朗',
      ko: '야마모토 쿄시로',
      ru: 'Ямамото Кёсиро',
      hi: 'यामामोतो क्योशिरो',
    },
    nameKana: 'やまもときょうしろう',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KOSUKE_HORI: {
    name: {
      ja: '堀孝輔',
      en: 'Kosuke Hori',
      zh: '堀孝辅',
      ko: '호리 코스케',
      ru: 'Хори Косукэ',
      hi: 'होरी कोसुके',
    },
    nameKana: 'ほりこうすけ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY],
  },
  TOMOKI_HARADA: {
    name: {
      ja: '原田知輝',
      en: 'Tomoki Harada',
      zh: '原田知辉',
      ko: '하라다 토모키',
      ru: 'Харада Томоки',
      hi: 'हारादा तोमोकी',
    },
    nameKana: 'はらだともき',
    belongedTeams: [Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  NAOTO_ENDO: {
    name: {
      ja: '遠藤那央斗',
      en: 'Naoto Endo',
      zh: '远藤那央斗',
      ko: '엔도 나오토',
      ru: 'Эндо Наото',
      hi: 'एंदो नाओतो',
    },
    nameKana: 'えんどうなおと',
    belongedTeams: [Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KUGA_HIGASHI: {
    name: {
      ja: '東凰雅',
      en: 'Kuga Higashi',
      zh: '东凰雅',
      ko: '히가시 쿠가',
      ru: 'Хигаси Куга',
      hi: 'हिगाशी कूगा',
    },
    nameKana: 'ひがしくうが',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  SHOTA_YONEZAWA: {
    name: {
      ja: '米澤翔太',
      en: 'Shota Yonezawa',
      zh: '米泽翔太',
      ko: '요네자와 쇼타',
      ru: 'Ёнэдзава Сёта',
      hi: 'योनेज़ावा शोता',
    },
    nameKana: 'よねざわしょうた',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  ICHIGO_KAJIKI: {
    name: {
      ja: '加治木壱悟',
      en: 'Ichigo Kajiki',
      zh: '加治木壹悟',
      ko: '가지키 이치고',
      ru: 'Кадзики Итиго',
      hi: 'काजिकी इचिगो',
    },
    nameKana: 'かじきいちご',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  AYUMU_HONDA: {
    name: {
      ja: '本田歩夢',
      en: 'Ayumu Honda',
      zh: '本田步梦',
      ko: '혼다 아유무',
      ru: 'Хонда Аюму',
      hi: 'होंदा अयुमु',
    },
    nameKana: 'ほんだあゆむ',
    belongedTeams: [Team.MORIOKA_SHIRITSU, Team.AOMORI_UNIVERSITY],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
