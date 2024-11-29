import type { PlayerResource } from "../models"
import { Team } from "./team"

export const Player: { [key: string]: PlayerResource } = {
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
    name: "中山蒼一郎",
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
    name: "岩崎あさひ",
    nameKana: "いわさきあさひ",
    belongedTeams: [ Team.AMAGASAKI_NISHI, Team.AOMORI_UNIVERSITY ],
  },
} as const

export const PLAYERS: PlayerResource[] = Object.values(Player)
