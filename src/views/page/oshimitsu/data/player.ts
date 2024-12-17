import type { PlayerResource } from "../models"
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
  | "YUSUKE_OTA";

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
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
