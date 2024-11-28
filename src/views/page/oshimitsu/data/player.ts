import type { PlayerResource } from "../models"
import {
  AOMORI_UNIVERSITY,
  AOMORI_YAMADA,
  ENIWA_MINAMI_HIGH,
  KANZAKI_SEIMEI,
  SEIFU,
} from "$views/page/oshimitsu/data/team"

export const TAKUMI_SHIMIZU: PlayerResource = {
  name: "清水琢巳",
  nameKana: "しみずたくみ",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const KAZUMA_YOSHIDA: PlayerResource = {
  name: "吉田和真",
  nameKana: "よしだかずま",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const KOUJI_HAMAYA: PlayerResource = {
  name: "濱谷航至",
  nameKana: "はまやこうじ",
  belongedTeams: [ AOMORI_YAMADA ],
}

export const YUTA_ODAGIRI: PlayerResource = {
  name: "小田切優太",
  nameKana: "おだぎりゆうた",
  belongedTeams: [ AOMORI_YAMADA ],
}

export const RYO_AKIYAMA: PlayerResource = {
  name: "秋山亮",
  nameKana: "あきやまりょう",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const SHINYA_MANJU: PlayerResource = {
  name: "満仲進哉",
  nameKana: "まんじゅうしんや",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const KAI_TAGUCHI: PlayerResource = {
  name: "田口海",
  nameKana: "たぐちかい",
  belongedTeams: [ ENIWA_MINAMI_HIGH, AOMORI_UNIVERSITY ],
}

export const TOMOYA_ISHIBASHI: PlayerResource = {
  name: "石橋知也",
  nameKana: "いしばしともや",
  belongedTeams: [ KANZAKI_SEIMEI, AOMORI_UNIVERSITY ],
}

export const SOICHIRO_NAKAYAMA: PlayerResource = {
  name: "中山蒼一郎",
  nameKana: "なかやまそういちろう",
  belongedTeams: [ KANZAKI_SEIMEI, AOMORI_UNIVERSITY ],
}

export const TAISEI_URAYAMA: PlayerResource = {
  name: "裏山大生",
  nameKana: "うらやまたいせい",
  belongedTeams: [ SEIFU, AOMORI_UNIVERSITY ],
}

export const TAKUMI_ASADA: PlayerResource = {
  name: "浅田匠",
  nameKana: "あさだたくみ",
  belongedTeams: [ KANZAKI_SEIMEI, AOMORI_UNIVERSITY ],
}

export const PLAYERS: PlayerResource[] = [
  TAKUMI_SHIMIZU,
  KAZUMA_YOSHIDA,
  KOUJI_HAMAYA,
  YUTA_ODAGIRI,
  RYO_AKIYAMA,
  SHINYA_MANJU,
  KAI_TAGUCHI,
  TOMOYA_ISHIBASHI,
  SOICHIRO_NAKAYAMA,
  TAISEI_URAYAMA,
  TAKUMI_ASADA,
]
