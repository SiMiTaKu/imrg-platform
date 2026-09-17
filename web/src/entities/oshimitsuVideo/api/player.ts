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
    name: '清水琢巳',
    nameKana: 'しみずたくみ',
    nameEnglish: 'Takumi Shimizu',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAZUMA_YOSHIDA: {
    name: '吉田和真',
    nameKana: 'よしだかずま',
    nameEnglish: 'Kazuma Yoshida',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOUJI_HAMAYA: {
    name: '濱谷航至',
    nameKana: 'はまやこうじ',
    nameEnglish: 'Koji Hamaya',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  YUTA_ODAGIRI: {
    name: '小田切優太',
    nameKana: 'おだぎりゆうた',
    nameEnglish: 'Yuta Odagiri',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  RYO_AKIYAMA: {
    name: '秋山亮',
    nameKana: 'あきやまりょう',
    nameEnglish: 'Ryo Akiyama',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  SHINYA_MANJU: {
    name: '満仲進哉',
    nameKana: 'まんじゅうしんや',
    nameEnglish: 'Shinya Manju',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAI_TAGUCHI: {
    name: '田口海',
    nameKana: 'たぐちかい',
    nameEnglish: 'Kai Taguchi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  TOMOYA_ISHIBASHI: {
    name: '石橋知也',
    nameKana: 'いしばしともや',
    nameEnglish: 'Tomoya Ishibashi',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  SOICHIRO_NAKAYAMA: {
    name: '中山蒼一朗',
    nameKana: 'なかやまそういちろう',
    nameEnglish: 'Soichiro Nakayama',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TAISEI_URAYAMA: {
    name: '裏山大生',
    nameKana: 'うらやまたいせい',
    nameEnglish: 'Taisei Urayama',
    belongedTeams: [Team.SEIFU, Team.AOMORI_UNIVERSITY],
  },
  TAKUMI_ASADA: {
    name: '浅田匠',
    nameKana: 'あさだたくみ',
    nameEnglish: 'Takumi Asada',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  ASAHI_IWASAKI: {
    name: '岩﨑あさひ',
    nameKana: 'いわさきあさひ',
    nameEnglish: 'Asahi Iwasaki',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  AOTO_KUWABARA: {
    name: '桒原碧都',
    nameKana: 'くわばらあおと',
    nameEnglish: 'Aoto Kuwabara',
    belongedTeams: [Team.SEIBI, Team.AOMORI_UNIVERSITY],
  },
  RENON_KASAI: {
    name: '葛西麗音',
    nameKana: 'かさいれのん',
    nameEnglish: 'Renon Kasai',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  JOSHIN_KIKUCHI: {
    name: '釋氏乗真',
    nameKana: 'きくちじょうしん',
    nameEnglish: 'Joshin Kikuchi',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  TAIYO_FUJIMOTO: {
    name: '藤本太陽',
    nameKana: 'ふじもとたいよう',
    nameEnglish: 'Taiyo Fujimoto',
    belongedTeams: [Team.MURASAKINO, Team.AOMORI_UNIVERSITY],
  },
  HINATA_YOSHIDA: {
    name: '譽士太陽向',
    nameKana: 'よしだひなた',
    nameEnglish: 'Hinata Yoshida',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOKI_MORIZONO: {
    name: '森園滉貴',
    nameKana: 'もりぞのこうき',
    nameEnglish: 'Koki Morizono',
    belongedTeams: [Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KOICHI_MURASATO: {
    name: '村里剛一',
    nameKana: 'むらさとこういち',
    nameEnglish: 'Koichi Murasato',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  YUSUKE_OTA: {
    name: '太田悠介',
    nameKana: 'おおたゆうすけ',
    nameEnglish: 'Yusuke Ota',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  MASASHI_TAGUCHI: {
    name: '田口将',
    nameKana: 'たぐちまさし',
    nameEnglish: 'Masashi Taguchi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  HAYATO_NOGUCHI: {
    name: '野口勇人',
    nameKana: 'のぐちはやと',
    nameEnglish: 'Hayato Noguchi',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  KENTA_MATSUMOTO: {
    name: '松本健太',
    nameKana: 'まつもとけんた',
    nameEnglish: 'Kenta Matsumoto',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TSUBASA_MUTO: {
    name: '武藤翼',
    nameKana: 'むとうつばさ',
    nameEnglish: 'Tsubasa Muto',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  RYUMA_MURAKAMI: {
    name: '村上隆真',
    nameKana: 'むらかみりゅうま',
    nameEnglish: 'Ryuma Murakami',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  HAYATE_TAMAKI: {
    name: '玉置颯',
    nameKana: 'たまきはやて',
    nameEnglish: 'Hayate Tamaki',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  RYOSUKE_IGARASHI: {
    name: '五十嵐涼介',
    nameKana: 'いがらしりょうすけ',
    nameEnglish: 'Ryosuke Igarashi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  SHUNSUKE_EGAMI: {
    name: '江上駿祐',
    nameKana: 'えがみしゅんすけ',
    nameEnglish: 'Shunsuke Egami',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  WATARU_ITO: {
    name: '井藤亘',
    nameKana: 'いとうわたる',
    nameEnglish: 'Wataru Ito',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  KEISUKE_MURAMATSU: {
    name: '村松景介',
    nameKana: 'むらまつけいすけ',
    nameEnglish: 'Keisuke Muramatsu',
    belongedTeams: [Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  SHIRO_UCHIMURA: {
    name: '内村志朗',
    nameKana: 'うちむらしろう',
    nameEnglish: 'Shiro Uchimura',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY],
  },
  MAKOTO_KIMURE: {
    name: '木牟禮詢',
    nameKana: 'きむれまこと',
    nameEnglish: 'Makoto Kimure',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  SHUN_UENO: {
    name: '植野洵',
    nameKana: 'うえのしゅん',
    nameEnglish: 'Shun Ueno',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KENSHIRO_WATANABE: {
    name: '渡辺剣史郎',
    nameKana: 'わたなべけんしろう',
    nameEnglish: 'Kenshiro Watanabe',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  YUTAKA_MAEDA: {
    name: '前田豊',
    nameKana: 'まえだゆたか',
    nameEnglish: 'Yutaka Maeda',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  HARUKI_MAEDA: {
    name: '前田春希',
    nameKana: 'まえだはるき',
    nameEnglish: 'Haruki Maeda',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  RIKU_NAKAZAWA: {
    name: '中澤陸',
    nameKana: 'なかざわりく',
    nameEnglish: 'Riku Nakazawa',
    belongedTeams: [Team.SINBAD_RG],
  },
  GINJI_SEKIDO: {
    name: '関戸銀児',
    nameKana: 'せきどぎんじ',
    nameEnglish: 'Ginji Sekido',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KYOSHIRO_YAMAMOTO: {
    name: '山本響士朗',
    nameKana: 'やまもときょうしろう',
    nameEnglish: 'Kyoshiro Yamamoto',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KOSUKE_HORI: {
    name: '堀孝輔',
    nameKana: 'ほりこうすけ',
    nameEnglish: 'Kosuke Hori',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY],
  },
  TOMOKI_HARADA: {
    name: '原田知輝',
    nameKana: 'はらだともき',
    nameEnglish: 'Tomoki Harada',
    belongedTeams: [Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  NAOTO_ENDO: {
    name: '遠藤那央斗',
    nameKana: 'えんどうなおと',
    nameEnglish: 'Naoto Endo',
    belongedTeams: [Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KUGA_HIGASHI: {
    name: '東凰雅',
    nameKana: 'ひがしくうが',
    nameEnglish: 'Kuga Higashi',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  SHOTA_YONEZAWA: {
    name: '米澤翔太',
    nameKana: 'よねざわしょうた',
    nameEnglish: 'Shota Yonezawa',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  ICHIGO_KAJIKI: {
    name: '加治木壱悟',
    nameKana: 'かじきいちご',
    nameEnglish: 'Ichigo Kajiki',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  AYUMU_HONDA: {
    name: '本田歩夢',
    nameKana: 'ほんだあゆむ',
    nameEnglish: 'Ayumu Honda',
    belongedTeams: [Team.MORIOKA_SHIRITSU, Team.AOMORI_UNIVERSITY],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
