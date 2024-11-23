import type { PlayerResource } from "../models"
import {
  AOMORI_UNIVERSITY,
  AOMORI_YAMADA,
} from "$views/page/oshimitsu/data/team"

export const TAKUMI_SHIMIZU: PlayerResource = {
  id: 1,
  name: "清水琢巳",
  nameKana: "しみずたくみ",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const KAZUMA_YOSHIDA: PlayerResource = {
  id: 2,
  name: "吉田和真",
  nameKana: "よしだかずま",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const KOUJI_HAMAYA: PlayerResource = {
  id: 3,
  name: "濱谷航至",
  nameKana: "はまやこうじ",
  belongedTeams: [ AOMORI_YAMADA ],
}

export const YUTA_ODAGIRI: PlayerResource = {
  id: 4,
  name: "小田切優太",
  nameKana: "おだぎりゆうた",
  belongedTeams: [ AOMORI_YAMADA ],
}

export const RYO_AKIYAMA: PlayerResource = {
  id: 5,
  name: "秋山亮",
  nameKana: "あきやまりょう",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const SHINYA_MANJU: PlayerResource = {
  id: 6,
  name: "満仲進哉",
  nameKana: "まんじゅうしんや",
  belongedTeams: [ AOMORI_YAMADA, AOMORI_UNIVERSITY ],
}

export const PLAYERS: PlayerResource[] = [
  TAKUMI_SHIMIZU,
  KAZUMA_YOSHIDA,
  KOUJI_HAMAYA,
  YUTA_ODAGIRI,
  RYO_AKIYAMA,
  SHINYA_MANJU,
]
