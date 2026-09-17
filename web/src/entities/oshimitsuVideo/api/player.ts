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
    nameEn: 'Takumi Shimizu',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAZUMA_YOSHIDA: {
    name: '吉田和真',
    nameKana: 'よしだかずま',
    nameEn: 'Kazuma Yoshida',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOUJI_HAMAYA: {
    name: '濱谷航至',
    nameKana: 'はまやこうじ',
    nameEn: 'Koji Hamaya',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  YUTA_ODAGIRI: {
    name: '小田切優太',
    nameKana: 'おだぎりゆうた',
    nameEn: 'Yuta Odagiri',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  RYO_AKIYAMA: {
    name: '秋山亮',
    nameKana: 'あきやまりょう',
    nameEn: 'Ryo Akiyama',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  SHINYA_MANJU: {
    name: '満仲進哉',
    nameKana: 'まんじゅうしんや',
    nameEn: 'Shinya Manju',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAI_TAGUCHI: {
    name: '田口海',
    nameKana: 'たぐちかい',
    nameEn: 'Kai Taguchi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  TOMOYA_ISHIBASHI: {
    name: '石橋知也',
    nameKana: 'いしばしともや',
    nameEn: 'Tomoya Ishibashi',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  SOICHIRO_NAKAYAMA: {
    name: '中山蒼一朗',
    nameKana: 'なかやまそういちろう',
    nameEn: 'Soichiro Nakayama',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TAISEI_URAYAMA: {
    name: '裏山大生',
    nameKana: 'うらやまたいせい',
    nameEn: 'Taisei Urayama',
    belongedTeams: [Team.SEIFU, Team.AOMORI_UNIVERSITY],
  },
  TAKUMI_ASADA: {
    name: '浅田匠',
    nameKana: 'あさだたくみ',
    nameEn: 'Takumi Asada',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  ASAHI_IWASAKI: {
    name: '岩﨑あさひ',
    nameKana: 'いわさきあさひ',
    nameEn: 'Asahi Iwasaki',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  AOTO_KUWABARA: {
    name: '桒原碧都',
    nameKana: 'くわばらあおと',
    nameEn: 'Aoto Kuwabara',
    belongedTeams: [Team.SEIBI, Team.AOMORI_UNIVERSITY],
  },
  RENON_KASAI: {
    name: '葛西麗音',
    nameKana: 'かさいれのん',
    nameEn: 'Renon Kasai',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  JOSHIN_KIKUCHI: {
    name: '釋氏乗真',
    nameKana: 'きくちじょうしん',
    nameEn: 'Joshin Kikuchi',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  TAIYO_FUJIMOTO: {
    name: '藤本太陽',
    nameKana: 'ふじもとたいよう',
    nameEn: 'Taiyo Fujimoto',
    belongedTeams: [Team.MURASAKINO, Team.AOMORI_UNIVERSITY],
  },
  HINATA_YOSHIDA: {
    name: '譽士太陽向',
    nameKana: 'よしだひなた',
    nameEn: 'Hinata Yoshida',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOKI_MORIZONO: {
    name: '森園滉貴',
    nameKana: 'もりぞのこうき',
    nameEn: 'Koki Morizono',
    belongedTeams: [Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KOICHI_MURASATO: {
    name: '村里剛一',
    nameKana: 'むらさとこういち',
    nameEn: 'Koichi Murasato',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  YUSUKE_OTA: {
    name: '太田悠介',
    nameKana: 'おおたゆうすけ',
    nameEn: 'Yusuke Ota',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  MASASHI_TAGUCHI: {
    name: '田口将',
    nameKana: 'たぐちまさし',
    nameEn: 'Masashi Taguchi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  HAYATO_NOGUCHI: {
    name: '野口勇人',
    nameKana: 'のぐちはやと',
    nameEn: 'Hayato Noguchi',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  KENTA_MATSUMOTO: {
    name: '松本健太',
    nameKana: 'まつもとけんた',
    nameEn: 'Kenta Matsumoto',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TSUBASA_MUTO: {
    name: '武藤翼',
    nameKana: 'むとうつばさ',
    nameEn: 'Tsubasa Muto',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  RYUMA_MURAKAMI: {
    name: '村上隆真',
    nameKana: 'むらかみりゅうま',
    nameEn: 'Ryuma Murakami',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  HAYATE_TAMAKI: {
    name: '玉置颯',
    nameKana: 'たまきはやて',
    nameEn: 'Hayate Tamaki',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  RYOSUKE_IGARASHI: {
    name: '五十嵐涼介',
    nameKana: 'いがらしりょうすけ',
    nameEn: 'Ryosuke Igarashi',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  SHUNSUKE_EGAMI: {
    name: '江上駿祐',
    nameKana: 'えがみしゅんすけ',
    nameEn: 'Shunsuke Egami',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  WATARU_ITO: {
    name: '井藤亘',
    nameKana: 'いとうわたる',
    nameEn: 'Wataru Ito',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  KEISUKE_MURAMATSU: {
    name: '村松景介',
    nameKana: 'むらまつけいすけ',
    nameEn: 'Keisuke Muramatsu',
    belongedTeams: [Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  SHIRO_UCHIMURA: {
    name: '内村志朗',
    nameKana: 'うちむらしろう',
    nameEn: 'Shiro Uchimura',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY],
  },
  MAKOTO_KIMURE: {
    name: '木牟禮詢',
    nameKana: 'きむれまこと',
    nameEn: 'Makoto Kimure',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  SHUN_UENO: {
    name: '植野洵',
    nameKana: 'うえのしゅん',
    nameEn: 'Shun Ueno',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KENSHIRO_WATANABE: {
    name: '渡辺剣史郎',
    nameKana: 'わたなべけんしろう',
    nameEn: 'Kenshiro Watanabe',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  YUTAKA_MAEDA: {
    name: '前田豊',
    nameKana: 'まえだゆたか',
    nameEn: 'Yutaka Maeda',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  HARUKI_MAEDA: {
    name: '前田春希',
    nameKana: 'まえだはるき',
    nameEn: 'Haruki Maeda',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  RIKU_NAKAZAWA: {
    name: '中澤陸',
    nameKana: 'なかざわりく',
    nameEn: 'Riku Nakazawa',
    belongedTeams: [Team.SINBAD_RG],
  },
  GINJI_SEKIDO: {
    name: '関戸銀児',
    nameKana: 'せきどぎんじ',
    nameEn: 'Ginji Sekido',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KYOSHIRO_YAMAMOTO: {
    name: '山本響士朗',
    nameKana: 'やまもときょうしろう',
    nameEn: 'Kyoshiro Yamamoto',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KOSUKE_HORI: {
    name: '堀孝輔',
    nameKana: 'ほりこうすけ',
    nameEn: 'Kosuke Hori',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY],
  },
  TOMOKI_HARADA: {
    name: '原田知輝',
    nameKana: 'はらだともき',
    nameEn: 'Tomoki Harada',
    belongedTeams: [Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  NAOTO_ENDO: {
    name: '遠藤那央斗',
    nameKana: 'えんどうなおと',
    nameEn: 'Naoto Endo',
    belongedTeams: [Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KUGA_HIGASHI: {
    name: '東凰雅',
    nameKana: 'ひがしくうが',
    nameEn: 'Kuga Higashi',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  SHOTA_YONEZAWA: {
    name: '米澤翔太',
    nameKana: 'よねざわしょうた',
    nameEn: 'Shota Yonezawa',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  ICHIGO_KAJIKI: {
    name: '加治木壱悟',
    nameKana: 'かじきいちご',
    nameEn: 'Ichigo Kajiki',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  AYUMU_HONDA: {
    name: '本田歩夢',
    nameKana: 'ほんだあゆむ',
    nameEn: 'Ayumu Honda',
    belongedTeams: [Team.MORIOKA_SHIRITSU, Team.AOMORI_UNIVERSITY],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
