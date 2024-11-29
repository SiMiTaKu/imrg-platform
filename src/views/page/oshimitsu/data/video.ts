import type {
  GroupVideoResource,
  IndividualVideoResource,
  VideoResource,
} from "../models"
import { Apparatus, ContentType } from "../lib"
import { Player, Team } from "../data"

const INDIVIDUAL_VIDEOS: IndividualVideoResource[] = [
  //#region 清水琢巳
  /** 清水琢巳 スティック */
  {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/tssu0o5sG10",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 リング */
  {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/X9_KpzsYl7k",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 ロープ */
  {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/WcCA_SDdi_o",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 クラブ */
  {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/4r6JlP3m2Uc",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  //#endregion
  //#region 岩崎あさひ
  /** 岩崎あさひ スティック 2024年 */
  {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/AwarNsKJLnM",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 岩崎あさひ リング 2024年 */
  {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/GwQJbeSIILw",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 岩崎あさひ ロープ 2024年 */
  {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/8PR08XHqUqE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 岩崎あさひ クラブ 2024年 */
  {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/HDCK2oFZyvs",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 桒原碧都
  /** 桒原碧都 スティック 2024年 */
  {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/KKjHVrr2gxI",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 桒原碧都 リング 2024年 */
  {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/j7pLUz17zrw",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 桒原碧都 ロープ 2024年 */
  {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/C7bOe9H3-fE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 桒原碧都 クラブ 2024年 */
  {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/nAlJ6pMTS5E",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
]

const GROUP_VIDEOS: GroupVideoResource[] = [
  /** 青森山田高等学校 2015年 高校総体 */
  {
    team: Team.AOMORI_YAMADA,
    players: [
      Player.TAKUMI_SHIMIZU,
      Player.KAZUMA_YOSHIDA,
      Player.KOUJI_HAMAYA,
      Player.YUTA_ODAGIRI,
      Player.RYO_AKIYAMA,
      Player.SHINYA_MANJU,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/ZsqQKFm6CSc",
    filmedAt: new Date("2015-08-01T00:00:00+09:00"),
  },
  /** 青森大学 2024年 */
  {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.KAI_TAGUCHI,
      Player.TOMOYA_ISHIBASHI,
      Player.SOICHIRO_NAKAYAMA,
      Player.TAISEI_URAYAMA,
      Player.TAKUMI_ASADA,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/cT-BIAKWf48",
    filmedAt: new Date("2024-11-10T00:00:00+09:00"),
  },
]

/** 選手の動画を表すオブジェクト */
export const VIDEOS: VideoResource[] = [ ...INDIVIDUAL_VIDEOS, ...GROUP_VIDEOS ]
