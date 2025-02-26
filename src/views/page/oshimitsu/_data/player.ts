import type { PlayerResource } from "../_models"
import { Team } from "./team"

type PlayerKey =
  | "TAKUMI_SHIMIZU"
  | "KAZUMA_YOSHIDA"
  | "KOUJI_HAMAYA"
  | "YUTA_ODAGIRI"
  | "RYO_AKIYAMA"
  | "SHINYA_MANJU"
  | "KAI_TAGUCHI"
  | "TOMOYA_ISHIBASHI"
  | "SOICHIRO_NAKAYAMA"
  | "TAISEI_URAYAMA"
  | "TAKUMI_ASADA"
  | "ASAHI_IWASAKI"
  | "AOTO_KUWABARA"
  | "RENON_KASAI"
  | "JOSHIN_KIKUCHI"
  | "TAIYO_FUJIMOTO"
  | "HINATA_YOSHIDA"
  | "KOKI_MORIZONO"
  | "KOICHI_MURASATO"
  | "YUSUKE_OTA"
  | "MASASHI_TAGUCHI"
  | "HAYATO_NOGUCHI"
  | "KENTA_MATSUMOTO"
  | "TSUBASA_MUTO"
  | "RYUMA_MURAKAMI"
  | "HAYATE_TAMAKI"
  | "RYOSUKE_IGARASHI"
  | "SHUNSUKE_EGAMI"
  | "WATARU_ITO"
  | "KEISUKE_MURAMATSU"
  | "SHIRO_UCHIMURA"
  | "MAKOTO_KIMURE"
  | "SHUN_UENO"
  | "KENSHIRO_WATANABE"
  | "YUTAKA_MAEDA"
  | "HARUKI_MAEDA"
  | "RIKU_NAKAZAWA"
  | "GINJI_SEKIDO"
  | "KYOSHIRO_YAMAMOTO"
  | "KOSUKE_HORI"
  | "TOMOKI_HARADA"
  | "NAOTO_ENDO";

export const Player: { [key in PlayerKey]: PlayerResource } = {
  TAKUMI_SHIMIZU: {
    name: "清水琢巳",
    nameKana: "しみずたくみ",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  KAZUMA_YOSHIDA: {
    name: "吉田和真",
    nameKana: "よしだかずま",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  KOUJI_HAMAYA: {
    name: "濱谷航至",
    nameKana: "はまやこうじ",
    belongedTeams: [ Team.AOMORI_YAMADA ],
  },
  YUTA_ODAGIRI: {
    name: "小田切優太",
    nameKana: "おだぎりゆうた",
    belongedTeams: [ Team.AOMORI_YAMADA ],
  },
  RYO_AKIYAMA: {
    name: "秋山亮",
    nameKana: "あきやまりょう",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  SHINYA_MANJU: {
    name: "満仲進哉",
    nameKana: "まんじゅうしんや",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  KAI_TAGUCHI: {
    name: "田口海",
    nameKana: "たぐちかい",
    belongedTeams: [ Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY ],
  },
  TOMOYA_ISHIBASHI: {
    name: "石橋知也",
    nameKana: "いしばしともや",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  SOICHIRO_NAKAYAMA: {
    name: "中山蒼一朗",
    nameKana: "なかやまそういちろう",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  TAISEI_URAYAMA: {
    name: "裏山大生",
    nameKana: "うらやまたいせい",
    belongedTeams: [ Team.SEIFU, Team.AOMORI_UNIVERSITY ],
  },
  TAKUMI_ASADA: {
    name: "浅田匠",
    nameKana: "あさだたくみ",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  ASAHI_IWASAKI: {
    name: "岩﨑あさひ",
    nameKana: "いわさきあさひ",
    belongedTeams: [ Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY ],
  },
  AOTO_KUWABARA: {
    name: "桒原碧都",
    nameKana: "くわばらあおと",
    belongedTeams: [ Team.SEIBI, Team.AOMORI_UNIVERSITY ],
  },
  RENON_KASAI: {
    name: "葛西麗音",
    nameKana: "かさいれのん",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  JOSHIN_KIKUCHI: {
    name: "釋氏乗真",
    nameKana: "きくちじょうしん",
    belongedTeams: [ Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY ],
  },
  TAIYO_FUJIMOTO: {
    name: "藤本太陽",
    nameKana: "ふじもとたいよう",
    belongedTeams: [ Team.MURASAKINO, Team.AOMORI_UNIVERSITY ],
  },
  HINATA_YOSHIDA: {
    name: "譽士太陽向",
    nameKana: "よしだひなた",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  KOKI_MORIZONO: {
    name: "森園滉貴",
    nameKana: "もりぞのこうき",
    belongedTeams: [ Team.ASHIKITA_HIGH, Team.AOMORI_UNIVERSITY ],
  },
  KOICHI_MURASATO: {
    name: "村里剛一",
    nameKana: "むらさとこういち",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  YUSUKE_OTA: {
    name: "太田悠介",
    nameKana: "おおたゆうすけ",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  MASASHI_TAGUCHI: {
    name: "田口将",
    nameKana: "たぐちまさし",
    belongedTeams: [ Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY ],
  },
  HAYATO_NOGUCHI: {
    name: "野口勇人",
    nameKana: "のぐちはやと",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  KENTA_MATSUMOTO: {
    name: "松本健太",
    nameKana: "まつもとけんた",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  TSUBASA_MUTO: {
    name: "武藤翼",
    nameKana: "むとうつばさ",
    belongedTeams: [ Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY ],
  },
  RYUMA_MURAKAMI: {
    name: "村上隆真",
    nameKana: "むらかみりゅうま",
    belongedTeams: [ Team.MAEBASHI_KOGYO, Team.AOMORI_UNIVERSITY ],
  },
  HAYATE_TAMAKI: {
    name: "玉置颯",
    nameKana: "たまきはやて",
    belongedTeams: [ Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY ],
  },
  RYOSUKE_IGARASHI: {
    name: "五十嵐涼介",
    nameKana: "いがらしりょうすけ",
    belongedTeams: [ Team.ENIWA_MINAMI_HIGH, Team.AOMORI_UNIVERSITY ],
  },
  SHUNSUKE_EGAMI: {
    name: "江上駿祐",
    nameKana: "えがみしゅんすけ",
    belongedTeams: [ Team.KANZAKI_SEIMEI, Team.AOMORI_UNIVERSITY ],
  },
  WATARU_ITO: {
    name: "井藤亘",
    nameKana: "いとうわたる",
    belongedTeams: [ Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY ],
  },
  KEISUKE_MURAMATSU: {
    name: "村松景介",
    nameKana: "むらまつけいすけ",
    belongedTeams: [ Team.SHIMADA_KOGYO, Team.AOMORI_UNIVERSITY ],
  },
  SHIRO_UCHIMURA: {
    name: "内村志朗",
    nameKana: "うちむらしろう",
    belongedTeams: [ Team.KAGOSHIMA_JITSUGYO, Team.AOMORI_UNIVERSITY ],
  },
  MAKOTO_KIMURE: {
    name: "木牟禮詢",
    nameKana: "きむれまこと",
    belongedTeams: [ Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY ],
  },
  SHUN_UENO: {
    name: "植野洵",
    nameKana: "うえのしゅん",
    belongedTeams: [ Team.AOMORI_YAMADA, Team.AOMORI_UNIVERSITY ],
  },
  KENSHIRO_WATANABE: {
    name: "渡辺剣史郎",
    nameKana: "わたなべけんしろう",
    belongedTeams: [ Team.SAITAMA_SAKAE, Team.AOMORI_UNIVERSITY ],
  },
  YUTAKA_MAEDA: {
    name: "前田豊",
    nameKana: "まえだゆたか",
    belongedTeams: [ Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY ],
  },
  HARUKI_MAEDA: {
    name: "前田春希",
    nameKana: "まえだはるき",
    belongedTeams: [ Team.KOBAYASHI_SHUHO, Team.AOMORI_UNIVERSITY ],
  },
  RIKU_NAKAZAWA: {
    name: "中澤陸",
    nameKana: "なかざわりく",
    belongedTeams: [ Team.SINBAD_RG ],
  },
  GINJI_SEKIDO: {
    name: "関戸銀児",
    nameKana: "せきどぎんじ",
    belongedTeams: [ Team.LEO_RG, Team.TAKADA_HIGH ],
  },
  KYOSHIRO_YAMAMOTO: {
    name: "山本響士朗",
    nameKana: "やまもときょうしろう",
    belongedTeams: [ Team.LEO_RG, Team.TAKADA_HIGH ],
  },
  KOSUKE_HORI: {
    name: "堀孝輔",
    nameKana: "ほりこうすけ",
    belongedTeams: [ Team.LEO_RG, Team.TAKADA_HIGH, Team.DOSHISHA_UNIVERSITY ],
  },
  TOMOKI_HARADA: {
    name: "原田知輝",
    nameKana: "はらだともき",
    belongedTeams: [ Team.IBARA_JUNIOR, Team.IBARA_HIGH, Team.AOMORI_UNIVERSITY ],
  },
  NAOTO_ENDO: {
    name: "遠藤直人",
    nameKana: "えんどうなおと",
    belongedTeams: [ Team.CUBE_RG, Team.NATORI_HIGH, Team.AOMORI_UNIVERSITY ],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
