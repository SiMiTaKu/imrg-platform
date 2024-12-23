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
  //#region 葛西麗音
  /** 葛西麗音 スティック 2024年 */
  {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/fwhDMPr8Sp0",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 葛西麗音 リング 2024年 */
  {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/c1xU6FQvGyo",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 葛西麗音 ロープ 2024年 */
  {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/NIPLdOyi65w",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 葛西麗音 クラブ 2024年 */
  {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/W9_2WTQgqRU",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 釋氏乗真
  /** 釋氏乗真 スティック 2024年 */
  {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/mjuuYQvIUec",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 釋氏乗真 リング 2024年 */
  {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/zqtrPxqm7Fo",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 釋氏乗真 ロープ 2024年 */
  {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/Ad8apf0VWpE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 釋氏乗真 クラブ 2024年 */
  {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/82LKwlLhP5E",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 藤本太陽
  /** 藤本太陽 スティック 2024年 */
  {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/D2MaWwhPoLI",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 藤本太陽 リング 2024年 */
  {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/CSayfq90zxk",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 藤本太陽 ロープ 2024年 */
  {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/OveljCpDDjY",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 藤本太陽 クラブ 2024年 */
  {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/qcU2ly2IRV8",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 譽士太陽向
  /** 譽士太陽向 スティック 2024年 */
  {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/r6YebPPdOMU",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 譽士太陽向 リング 2024年 */
  {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/PqxQ_cg8u2Y",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 譽士太陽向 ロープ 2024年 */
  {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/AfRpp0-QkI8",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 譽士太陽向 クラブ 2024年 */
  {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/6fOVmqW26HU",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 森園滉貴
  /** 森園滉貴 スティック 2024年 */
  {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/w6aT7s_7QNc",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 森園滉貴 リング 2024年 */
  {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/zv8GJ7jheWQ",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 森園滉貴 ロープ 2024年 */
  {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/CwMombwkCUM",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 森園滉貴 クラブ 2024年 */
  {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/X3AfeqlQDdc",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
]

const GROUP_VIDEOS: GroupVideoResource[] = [
  /** 青森山田高等学校 2015年 高校総体 */
  {
    team: Team.AOMORI_YAMADA,
    players: [
      Player.YUTA_ODAGIRI,
      Player.RYO_AKIYAMA,
      Player.KOUJI_HAMAYA,
      Player.TAKUMI_SHIMIZU,
      Player.SHINYA_MANJU,
      Player.KAZUMA_YOSHIDA,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/ZsqQKFm6CSc",
    filmedAt: new Date("2015-08-01T00:00:00+09:00"),
  },
  //#region 青森大学
  /** 青森大学 2022年 */
  {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.MASASHI_TAGUCHI,
      Player.KENTA_MATSUMOTO,
      Player.HAYATO_NOGUCHI,
      Player.YUSUKE_OTA,
      Player.TOMOYA_ISHIBASHI,
      Player.SOICHIRO_NAKAYAMA,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/rIftdeMi3os",
    filmedAt: new Date("2022-08-28T00:00:00+09:00"),
  },
  /** 青森大学 2023年 */
  {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.YUSUKE_OTA,
      Player.KAI_TAGUCHI,
      Player.TOMOYA_ISHIBASHI,
      Player.SOICHIRO_NAKAYAMA,
      Player.TAISEI_URAYAMA,
      Player.KOICHI_MURASATO,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/48Esk9QxCy0",
    filmedAt: new Date("2023-10-29T00:00:00+09:00"),
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
  //#endregion
]

/** 選手の動画を表すオブジェクト */
export const VIDEOS: VideoResource[] = [ ...INDIVIDUAL_VIDEOS, ...GROUP_VIDEOS ]
