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
    name: { ja: '清水琢巳', en: 'Takumi Shimizu' },
    nameKana: 'しみずたくみ',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAZUMA_YOSHIDA: {
    name: { ja: '吉田和真', en: 'Kazuma Yoshida' },
    nameKana: 'よしだかずま',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOUJI_HAMAYA: {
    name: { ja: '濱谷航至', en: 'Koji Hamaya' },
    nameKana: 'はまやこうじ',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  YUTA_ODAGIRI: {
    name: { ja: '小田切優太', en: 'Yuta Odagiri' },
    nameKana: 'おだぎりゆうた',
    belongedTeams: [Team.AOMORI_YAMADA],
  },
  RYO_AKIYAMA: {
    name: { ja: '秋山亮', en: 'Ryo Akiyama' },
    nameKana: 'あきやまりょう',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  SHINYA_MANJU: {
    name: { ja: '満仲進哉', en: 'Shinya Manju' },
    nameKana: 'まんじゅうしんや',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KAI_TAGUCHI: {
    name: { ja: '田口海', en: 'Kai Taguchi' },
    nameKana: 'たぐちかい',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  TOMOYA_ISHIBASHI: {
    name: { ja: '石橋知也', en: 'Tomoya Ishibashi' },
    nameKana: 'いしばしともや',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  SOICHIRO_NAKAYAMA: {
    name: { ja: '中山蒼一朗', en: 'Soichiro Nakayama' },
    nameKana: 'なかやまそういちろう',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TAISEI_URAYAMA: {
    name: { ja: '裏山大生', en: 'Taisei Urayama' },
    nameKana: 'うらやまたいせい',
    belongedTeams: [Team.SEIFU, Team.AOMORI_UNIVERSITY],
  },
  TAKUMI_ASADA: {
    name: { ja: '浅田匠', en: 'Takumi Asada' },
    nameKana: 'あさだたくみ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  ASAHI_IWASAKI: {
    name: { ja: '岩﨑あさひ', en: 'Asahi Iwasaki' },
    nameKana: 'いわさきあさひ',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  AOTO_KUWABARA: {
    name: { ja: '桒原碧都', en: 'Aoto Kuwabara' },
    nameKana: 'くわばらあおと',
    belongedTeams: [Team.SEIBI, Team.AOMORI_UNIVERSITY],
  },
  RENON_KASAI: {
    name: { ja: '葛西麗音', en: 'Renon Kasai' },
    nameKana: 'かさいれのん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  JOSHIN_KIKUCHI: {
    name: { ja: '釋氏乗真', en: 'Joshin Kikuchi' },
    nameKana: 'きくちじょうしん',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  TAIYO_FUJIMOTO: {
    name: { ja: '藤本太陽', en: 'Taiyo Fujimoto' },
    nameKana: 'ふじもとたいよう',
    belongedTeams: [Team.MURASAKINO, Team.AOMORI_UNIVERSITY],
  },
  HINATA_YOSHIDA: {
    name: { ja: '譽士太陽向', en: 'Hinata Yoshida' },
    nameKana: 'よしだひなた',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KOKI_MORIZONO: {
    name: { ja: '森園滉貴', en: 'Koki Morizono' },
    nameKana: 'もりぞのこうき',
    belongedTeams: [Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KOICHI_MURASATO: {
    name: { ja: '村里剛一', en: 'Koichi Murasato' },
    nameKana: 'むらさとこういち',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  YUSUKE_OTA: {
    name: { ja: '太田悠介', en: 'Yusuke Ota' },
    nameKana: 'おおたゆうすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  MASASHI_TAGUCHI: {
    name: { ja: '田口将', en: 'Masashi Taguchi' },
    nameKana: 'たぐちまさし',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  HAYATO_NOGUCHI: {
    name: { ja: '野口勇人', en: 'Hayato Noguchi' },
    nameKana: 'のぐちはやと',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  KENTA_MATSUMOTO: {
    name: { ja: '松本健太', en: 'Kenta Matsumoto' },
    nameKana: 'まつもとけんた',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  TSUBASA_MUTO: {
    name: { ja: '武藤翼', en: 'Tsubasa Muto' },
    nameKana: 'むとうつばさ',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  RYUMA_MURAKAMI: {
    name: { ja: '村上隆真', en: 'Ryuma Murakami' },
    nameKana: 'むらかみりゅうま',
    belongedTeams: [Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  HAYATE_TAMAKI: {
    name: { ja: '玉置颯', en: 'Hayate Tamaki' },
    nameKana: 'たまきはやて',
    belongedTeams: [Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY],
  },
  RYOSUKE_IGARASHI: {
    name: { ja: '五十嵐涼介', en: 'Ryosuke Igarashi' },
    nameKana: 'いがらしりょうすけ',
    belongedTeams: [Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  SHUNSUKE_EGAMI: {
    name: { ja: '江上駿祐', en: 'Shunsuke Egami' },
    nameKana: 'えがみしゅんすけ',
    belongedTeams: [Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY],
  },
  WATARU_ITO: {
    name: { ja: '井藤亘', en: 'Wataru Ito' },
    nameKana: 'いとうわたる',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  KEISUKE_MURAMATSU: {
    name: { ja: '村松景介', en: 'Keisuke Muramatsu' },
    nameKana: 'むらまつけいすけ',
    belongedTeams: [Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY],
  },
  SHIRO_UCHIMURA: {
    name: { ja: '内村志朗', en: 'Shiro Uchimura' },
    nameKana: 'うちむらしろう',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY],
  },
  MAKOTO_KIMURE: {
    name: { ja: '木牟禮詢', en: 'Makoto Kimure' },
    nameKana: 'きむれまこと',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  SHUN_UENO: {
    name: { ja: '植野洵', en: 'Shun Ueno' },
    nameKana: 'うえのしゅん',
    belongedTeams: [Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY],
  },
  KENSHIRO_WATANABE: {
    name: { ja: '渡辺剣史郎', en: 'Kenshiro Watanabe' },
    nameKana: 'わたなべけんしろう',
    belongedTeams: [Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY],
  },
  YUTAKA_MAEDA: {
    name: { ja: '前田豊', en: 'Yutaka Maeda' },
    nameKana: 'まえだゆたか',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  HARUKI_MAEDA: {
    name: { ja: '前田春希', en: 'Haruki Maeda' },
    nameKana: 'まえだはるき',
    belongedTeams: [Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY],
  },
  RIKU_NAKAZAWA: {
    name: { ja: '中澤陸', en: 'Riku Nakazawa' },
    nameKana: 'なかざわりく',
    belongedTeams: [Team.SINBAD_RG],
  },
  GINJI_SEKIDO: {
    name: { ja: '関戸銀児', en: 'Ginji Sekido' },
    nameKana: 'せきどぎんじ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KYOSHIRO_YAMAMOTO: {
    name: { ja: '山本響士朗', en: 'Kyoshiro Yamamoto' },
    nameKana: 'やまもときょうしろう',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH],
  },
  KOSUKE_HORI: {
    name: { ja: '堀孝輔', en: 'Kosuke Hori' },
    nameKana: 'ほりこうすけ',
    belongedTeams: [Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY],
  },
  TOMOKI_HARADA: {
    name: { ja: '原田知輝', en: 'Tomoki Harada' },
    nameKana: 'はらだともき',
    belongedTeams: [Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY],
  },
  NAOTO_ENDO: {
    name: { ja: '遠藤那央斗', en: 'Naoto Endo' },
    nameKana: 'えんどうなおと',
    belongedTeams: [Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY],
  },
  KUGA_HIGASHI: {
    name: { ja: '東凰雅', en: 'Kuga Higashi' },
    nameKana: 'ひがしくうが',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  SHOTA_YONEZAWA: {
    name: { ja: '米澤翔太', en: 'Shota Yonezawa' },
    nameKana: 'よねざわしょうた',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  ICHIGO_KAJIKI: {
    name: { ja: '加治木壱悟', en: 'Ichigo Kajiki' },
    nameKana: 'かじきいちご',
    belongedTeams: [Team.KAGOSHIMA_JITSUGYO],
  },
  AYUMU_HONDA: {
    name: { ja: '本田歩夢', en: 'Ayumu Honda' },
    nameKana: 'ほんだあゆむ',
    belongedTeams: [Team.MORIOKA_SHIRITSU, Team.AOMORI_UNIVERSITY],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
