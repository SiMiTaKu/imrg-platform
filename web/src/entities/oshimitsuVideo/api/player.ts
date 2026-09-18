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
    name: { japanese: '清水琢巳', english: 'Takumi Shimizu' },
    nameKana: 'しみずたくみ',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAZUMA_YOSHIDA: {
    name: { japanese: '吉田和真', english: 'Kazuma Yoshida' },
    nameKana: 'よしだかずま',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOUJI_HAMAYA: {
    name: { japanese: '濱谷航至', english: 'Koji Hamaya' },
    nameKana: 'はまやこうじ',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  YUTA_ODAGIRI: {
    name: { japanese: '小田切優太', english: 'Yuta Odagiri' },
    nameKana: 'おだぎりゆうた',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  RYO_AKIYAMA: {
    name: { japanese: '秋山亮', english: 'Ryo Akiyama' },
    nameKana: 'あきやまりょう',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  SHINYA_MANJU: {
    name: { japanese: '満仲進哉', english: 'Shinya Manju' },
    nameKana: 'まんじゅうしんや',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAI_TAGUCHI: {
    name: { japanese: '田口海', english: 'Kai Taguchi' },
    nameKana: 'たぐちかい',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  TOMOYA_ISHIBASHI: {
    name: { japanese: '石橋知也', english: 'Tomoya Ishibashi' },
    nameKana: 'いしばしともや',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  SOICHIRO_NAKAYAMA: {
    name: { japanese: '中山蒼一朗', english: 'Soichiro Nakayama' },
    nameKana: 'なかやまそういちろう',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TAISEI_URAYAMA: {
    name: { japanese: '裏山大生', english: 'Taisei Urayama' },
    nameKana: 'うらやまたいせい',
    belongedTeams: [Team.SEIFU, Team.AOMORI_UNIVERSITY],
  },
  TAKUMI_ASADA: {
    name: { japanese: '浅田匠', english: 'Takumi Asada' },
    nameKana: 'あさだたくみ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  ASAHI_IWASAKI: {
    name: { japanese: '岩﨑あさひ', english: 'Asahi Iwasaki' },
    nameKana: 'いわさきあさひ',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  AOTO_KUWABARA: {
    name: { japanese: '桒原碧都', english: 'Aoto Kuwabara' },
    nameKana: 'くわばらあおと',
    belongedTeams: [Team.SEIBI, Team.AOMORI_UNIVERSITY],
  },
  RENON_KASAI: {
    name: { japanese: '葛西麗音', english: 'Renon Kasai' },
    nameKana: 'かさいれのん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  JOSHIN_KIKUCHI: {
    name: { japanese: '釋氏乗真', english: 'Joshin Kikuchi' },
    nameKana: 'きくちじょうしん',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  TAIYO_FUJIMOTO: {
    name: { japanese: '藤本太陽', english: 'Taiyo Fujimoto' },
    nameKana: 'ふじもとたいよう',
    belongedTeams: [Team.MURASAKINO, Team.AOMORI_UNIVERSITY],
  },
  HINATA_YOSHIDA: {
    name: { japanese: '譽士太陽向', english: 'Hinata Yoshida' },
    nameKana: 'よしだひなた',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOKI_MORIZONO: {
    name: { japanese: '森園滉貴', english: 'Koki Morizono' },
    nameKana: 'もりぞのこうき',
    belongedTeams: [Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KOICHI_MURASATO: {
    name: { japanese: '村里剛一', english: 'Koichi Murasato' },
    nameKana: 'むらさとこういち',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  YUSUKE_OTA: {
    name: { japanese: '太田悠介', english: 'Yusuke Ota' },
    nameKana: 'おおたゆうすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  MASASHI_TAGUCHI: {
    name: { japanese: '田口将', english: 'Masashi Taguchi' },
    nameKana: 'たぐちまさし',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  HAYATO_NOGUCHI: {
    name: { japanese: '野口勇人', english: 'Hayato Noguchi' },
    nameKana: 'のぐちはやと',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  KENTA_MATSUMOTO: {
    name: { japanese: '松本健太', english: 'Kenta Matsumoto' },
    nameKana: 'まつもとけんた',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TSUBASA_MUTO: {
    name: { japanese: '武藤翼', english: 'Tsubasa Muto' },
    nameKana: 'むとうつばさ',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  RYUMA_MURAKAMI: {
    name: { japanese: '村上隆真', english: 'Ryuma Murakami' },
    nameKana: 'むらかみりゅうま',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  HAYATE_TAMAKI: {
    name: { japanese: '玉置颯', english: 'Hayate Tamaki' },
    nameKana: 'たまきはやて',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  RYOSUKE_IGARASHI: {
    name: { japanese: '五十嵐涼介', english: 'Ryosuke Igarashi' },
    nameKana: 'いがらしりょうすけ',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  SHUNSUKE_EGAMI: {
    name: { japanese: '江上駿祐', english: 'Shunsuke Egami' },
    nameKana: 'えがみしゅんすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  WATARU_ITO: {
    name: { japanese: '井藤亘', english: 'Wataru Ito' },
    nameKana: 'いとうわたる',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  KEISUKE_MURAMATSU: {
    name: { japanese: '村松景介', english: 'Keisuke Muramatsu' },
    nameKana: 'むらまつけいすけ',
    belongedTeams: [Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  SHIRO_UCHIMURA: {
    name: { japanese: '内村志朗', english: 'Shiro Uchimura' },
    nameKana: 'うちむらしろう',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY],
  },
  MAKOTO_KIMURE: {
    name: { japanese: '木牟禮詢', english: 'Makoto Kimure' },
    nameKana: 'きむれまこと',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  SHUN_UENO: {
    name: { japanese: '植野洵', english: 'Shun Ueno' },
    nameKana: 'うえのしゅん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KENSHIRO_WATANABE: {
    name: { japanese: '渡辺剣史郎', english: 'Kenshiro Watanabe' },
    nameKana: 'わたなべけんしろう',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  YUTAKA_MAEDA: {
    name: { japanese: '前田豊', english: 'Yutaka Maeda' },
    nameKana: 'まえだゆたか',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  HARUKI_MAEDA: {
    name: { japanese: '前田春希', english: 'Haruki Maeda' },
    nameKana: 'まえだはるき',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  RIKU_NAKAZAWA: {
    name: { japanese: '中澤陸', english: 'Riku Nakazawa' },
    nameKana: 'なかざわりく',
    belongedTeams: [Team.SINBAD_RG],
  },
  GINJI_SEKIDO: {
    name: { japanese: '関戸銀児', english: 'Ginji Sekido' },
    nameKana: 'せきどぎんじ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KYOSHIRO_YAMAMOTO: {
    name: { japanese: '山本響士朗', english: 'Kyoshiro Yamamoto' },
    nameKana: 'やまもときょうしろう',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KOSUKE_HORI: {
    name: { japanese: '堀孝輔', english: 'Kosuke Hori' },
    nameKana: 'ほりこうすけ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY],
  },
  TOMOKI_HARADA: {
    name: { japanese: '原田知輝', english: 'Tomoki Harada' },
    nameKana: 'はらだともき',
    belongedTeams: [Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  NAOTO_ENDO: {
    name: { japanese: '遠藤那央斗', english: 'Naoto Endo' },
    nameKana: 'えんどうなおと',
    belongedTeams: [Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KUGA_HIGASHI: {
    name: { japanese: '東凰雅', english: 'Kuga Higashi' },
    nameKana: 'ひがしくうが',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  SHOTA_YONEZAWA: {
    name: { japanese: '米澤翔太', english: 'Shota Yonezawa' },
    nameKana: 'よねざわしょうた',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  ICHIGO_KAJIKI: {
    name: { japanese: '加治木壱悟', english: 'Ichigo Kajiki' },
    nameKana: 'かじきいちご',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  AYUMU_HONDA: {
    name: { japanese: '本田歩夢', english: 'Ayumu Honda' },
    nameKana: 'ほんだあゆむ',
    belongedTeams: [Team.MORIOKA_SHIRITSU, Team.AOMORI_UNIVERSITY],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
