import {
  type GroupVideoResource,
  type IndividualVideoResource,
  type VideoResource,
  Apparatus,
  ContentType,
} from "../_models"
import { Player, Team } from "./"

//#region 個人動画のキー
type IndividualVideoKey =
  | "TAKUMI_SHIMIZU_STICK_2021"
  | "TAKUMI_SHIMIZU_RING_2021"
  | "TAKUMI_SHIMIZU_ROPE_2021"
  | "TAKUMI_SHIMIZU_CLUB_2021"
  | "ASAHI_IWASAKI_STICK_2024"
  | "ASAHI_IWASAKI_RING_2024"
  | "ASAHI_IWASAKI_ROPE_2024"
  | "ASAHI_IWASAKI_CLUB_2024"
  | "AOTO_KUWABARA_STICK_2024"
  | "AOTO_KUWABARA_RING_2024"
  | "AOTO_KUWABARA_ROPE_2024"
  | "AOTO_KUWABARA_CLUB_2024"
  | "RENON_KASAI_STICK_2024"
  | "RENON_KASAI_RING_2024"
  | "RENON_KASAI_ROPE_2024"
  | "RENON_KASAI_CLUB_2024"
  | "JOSHIN_KIKUCHI_STICK_2024"
  | "JOSHIN_KIKUCHI_RING_2024"
  | "JOSHIN_KIKUCHI_ROPE_2024"
  | "JOSHIN_KIKUCHI_CLUB_2024"
  | "TAIYO_FUJIMOTO_STICK_2024"
  | "TAIYO_FUJIMOTO_RING_2024"
  | "TAIYO_FUJIMOTO_ROPE_2024"
  | "TAIYO_FUJIMOTO_CLUB_2024"
  | "HINATA_YOSHIDA_STICK_2024"
  | "HINATA_YOSHIDA_RING_2024"
  | "HINATA_YOSHIDA_ROPE_2024"
  | "HINATA_YOSHIDA_CLUB_2024"
  | "KOKI_MORIZONO_STICK_2024"
  | "KOKI_MORIZONO_RING_2024"
  | "KOKI_MORIZONO_ROPE_2024"
  | "KOKI_MORIZONO_CLUB_2024"
  | "RIKU_NAKAZAWA_STICK_2024"
  | "RIKU_NAKAZAWA_RING_2024"
  | "RIKU_NAKAZAWA_ROPE_2024"
  | "RIKU_NAKAZAWA_CLUB_2024"
  | "GINJI_SEKIDO_STICK_2024"
  // | "GINJI_SEKIDO_RING_2024"
  // | "GINJI_SEKIDO_ROPE_2024"
  // | "GINJI_SEKIDO_CLUB_2024"
  // | "KYOSHIRO_YAMAMOTO_STICK_2024"
  | "KYOSHIRO_YAMAMOTO_RING_2024"
  // | "KYOSHIRO_YAMAMOTO_ROPE_2024"
  // | "KYOSHIRO_YAMAMOTO_CLUB_2024"
  // | "KOUSUKE_HORI_STICK_2024"
  // | "KOUSUKE_HORI_RING_2024"
  // | "KOUSUKE_HORI_ROPE_2024"
  | "KOUSUKE_HORI_CLUB_2024";
//#endregion

const INDIVIDUAL_VIDEOS: {
  [key in IndividualVideoKey]: IndividualVideoResource;
} = {
  //#region 清水琢巳
  /** 清水琢巳 スティック */
  TAKUMI_SHIMIZU_STICK_2021: {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/tssu0o5sG10",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 リング */
  TAKUMI_SHIMIZU_RING_2021: {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/X9_KpzsYl7k",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 ロープ */
  TAKUMI_SHIMIZU_ROPE_2021: {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/WcCA_SDdi_o",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 クラブ */
  TAKUMI_SHIMIZU_CLUB_2021: {
    player: Player.TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/4r6JlP3m2Uc",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  //#endregion
  //#region 岩崎あさひ
  /** 岩崎あさひ スティック 2024年 */
  ASAHI_IWASAKI_STICK_2024: {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/AwarNsKJLnM",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 岩崎あさひ リング 2024年 */
  ASAHI_IWASAKI_RING_2024: {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/GwQJbeSIILw",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 岩崎あさひ ロープ 2024年 */
  ASAHI_IWASAKI_ROPE_2024: {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/8PR08XHqUqE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 岩崎あさひ クラブ 2024年 */
  ASAHI_IWASAKI_CLUB_2024: {
    player: Player.ASAHI_IWASAKI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/HDCK2oFZyvs",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 桒原碧都
  /** 桒原碧都 スティック 2024年 */
  AOTO_KUWABARA_STICK_2024: {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/KKjHVrr2gxI",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 桒原碧都 リング 2024年 */
  AOTO_KUWABARA_RING_2024: {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/j7pLUz17zrw",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 桒原碧都 ロープ 2024年 */
  AOTO_KUWABARA_ROPE_2024: {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/C7bOe9H3-fE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 桒原碧都 クラブ 2024年 */
  AOTO_KUWABARA_CLUB_2024: {
    player: Player.AOTO_KUWABARA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/nAlJ6pMTS5E",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 葛西麗音
  /** 葛西麗音 スティック 2024年 */
  RENON_KASAI_STICK_2024: {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/fwhDMPr8Sp0",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 葛西麗音 リング 2024年 */
  RENON_KASAI_RING_2024: {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/c1xU6FQvGyo",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 葛西麗音 ロープ 2024年 */
  RENON_KASAI_ROPE_2024: {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/NIPLdOyi65w",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 葛西麗音 クラブ 2024年 */
  RENON_KASAI_CLUB_2024: {
    player: Player.RENON_KASAI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/W9_2WTQgqRU",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 釋氏乗真
  /** 釋氏乗真 スティック 2024年 */
  JOSHIN_KIKUCHI_STICK_2024: {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/mjuuYQvIUec",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 釋氏乗真 リング 2024年 */
  JOSHIN_KIKUCHI_RING_2024: {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/zqtrPxqm7Fo",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 釋氏乗真 ロープ 2024年 */
  JOSHIN_KIKUCHI_ROPE_2024: {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/Ad8apf0VWpE",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 釋氏乗真 クラブ 2024年 */
  JOSHIN_KIKUCHI_CLUB_2024: {
    player: Player.JOSHIN_KIKUCHI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/82LKwlLhP5E",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 藤本太陽
  /** 藤本太陽 スティック 2024年 */
  TAIYO_FUJIMOTO_STICK_2024: {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/D2MaWwhPoLI",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 藤本太陽 リング 2024年 */
  TAIYO_FUJIMOTO_RING_2024: {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/CSayfq90zxk",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 藤本太陽 ロープ 2024年 */
  TAIYO_FUJIMOTO_ROPE_2024: {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/OveljCpDDjY",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 藤本太陽 クラブ 2024年 */
  TAIYO_FUJIMOTO_CLUB_2024: {
    player: Player.TAIYO_FUJIMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/qcU2ly2IRV8",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 譽士太陽向
  /** 譽士太陽向 スティック 2024年 */
  HINATA_YOSHIDA_STICK_2024: {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/r6YebPPdOMU",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 譽士太陽向 リング 2024年 */
  HINATA_YOSHIDA_RING_2024: {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/PqxQ_cg8u2Y",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 譽士太陽向 ロープ 2024年 */
  HINATA_YOSHIDA_ROPE_2024: {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/AfRpp0-QkI8",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 譽士太陽向 クラブ 2024年 */
  HINATA_YOSHIDA_CLUB_2024: {
    player: Player.HINATA_YOSHIDA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/6fOVmqW26HU",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 森園滉貴
  /** 森園滉貴 スティック 2024年 */
  KOKI_MORIZONO_STICK_2024: {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/w6aT7s_7QNc",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 森園滉貴 リング 2024年 */
  KOKI_MORIZONO_RING_2024: {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/zv8GJ7jheWQ",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 森園滉貴 ロープ 2024年 */
  KOKI_MORIZONO_ROPE_2024: {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/CwMombwkCUM",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 森園滉貴 クラブ 2024年 */
  KOKI_MORIZONO_CLUB_2024: {
    player: Player.KOKI_MORIZONO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/X3AfeqlQDdc",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 中澤陸
  /** 中澤陸 スティック 2024年 */
  RIKU_NAKAZAWA_STICK_2024: {
    player: Player.RIKU_NAKAZAWA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/p6DMok6loRM",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 中澤陸 リング 2024年 */
  RIKU_NAKAZAWA_RING_2024: {
    player: Player.RIKU_NAKAZAWA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/nX3WtHelA1c",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  /** 中澤陸 ロープ 2024年 */
  RIKU_NAKAZAWA_ROPE_2024: {
    player: Player.RIKU_NAKAZAWA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/d-btTNyKYUA",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  /** 中澤陸 クラブ 2024年 */
  RIKU_NAKAZAWA_CLUB_2024: {
    player: Player.RIKU_NAKAZAWA,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/pY76pLZ5tcs",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
  //#region 関戸銀児
  /** 関戸銀児 スティック 2024年 */
  GINJI_SEKIDO_STICK_2024: {
    player: Player.GINJI_SEKIDO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/t-tg5eKWDCc",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  // /** 関戸銀児 リング 2024年 */
  // GINJI_SEKIDO_RING_2024: {
  //   player: Player.GINJI_SEKIDO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.RING,
  //   src: "https://www.youtube.com/embed/nX3WtHelA1c",
  //   filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  // },
  // /** 関戸銀児 ロープ 2024年 */
  // GINJI_SEKIDO_ROPE_2024: {
  //   player: Player.GINJI_SEKIDO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.ROPE,
  //   src: "https://www.youtube.com/embed/d-btTNyKYUA",
  //   filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  // },
  // /** 関戸銀児 クラブ 2024年 */
  // GINJI_SEKIDO_CLUB_2024: {
  //   player: Player.GINJI_SEKIDO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.CLUB,
  //   src: "https://www.youtube.com/embed/pY76pLZ5tcs",
  //   filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  // },
  //#endregion
  //#region 山本響士朗
  // /** 山本響士朗 スティック 2024年 */
  // KYOSHIRO_YAMAMOTO_STICK_2024: {
  //   player: Player.KYOSHIRO_YAMAMOTO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.STICK,
  //   src: "https://www.youtube.com/embed/p6DMok6loRM",
  //   filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  // },
  /** 山本響士朗 リング 2024年 */
  KYOSHIRO_YAMAMOTO_RING_2024: {
    player: Player.KYOSHIRO_YAMAMOTO,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/WBaBl0bayMc",
    filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  },
  // /** 山本響士朗 ロープ 2024年 */
  // KYOSHIRO_YAMAMOTO_ROPE_2024: {
  //   player: Player.KYOSHIRO_YAMAMOTO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.ROPE,
  //   src: "https://www.youtube.com/embed/d-btTNyKYUA",
  //   filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  // },
  // /** 山本響士朗 クラブ 2024年 */
  // KYOSHIRO_YAMAMOTO_CLUB_2024: {
  //   player: Player.KYOSHIRO_YAMAMOTO,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.CLUB,
  //   src: "https://www.youtube.com/embed/pY76pLZ5tcs",
  //   filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  // },
  //#endregion
  //#region 堀孝輔
  // /** 堀孝輔 スティック 2024年 */
  // KOUSUKE_HORI_STICK_2024: {
  //   player: Player.KOSUKE_HORI,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.STICK,
  //   src: "https://www.youtube.com/embed/p6DMok6loRM",
  //   filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  // },
  // /** 堀孝輔 リング 2024年 */
  // KOUSUKE_HORI_RING_2024: {
  //   player: Player.KOSUKE_HORI,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.RING,
  //   src: "https://www.youtube.com/embed/nX3WtHelA1c",
  //   filmedAt: new Date("2024-11-08T00:00:00+09:00"),
  // },
  // /** 堀孝輔 ロープ 2024年 */
  // KOUSUKE_HORI_ROPE_2024: {
  //   player: Player.KOSUKE_HORI,
  //   contentType: ContentType.INDIVIDUAL,
  //   apparatus: Apparatus.ROPE,
  //   src: "https://www.youtube.com/embed/d-btTNyKYUA",
  //   filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  // },
  /** 堀孝輔 クラブ 2024年 */
  KOUSUKE_HORI_CLUB_2024: {
    player: Player.KOSUKE_HORI,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/4HL3p2fSGL4",
    filmedAt: new Date("2024-11-09T00:00:00+09:00"),
  },
  //#endregion
}

type GroupVideoKey =
  | "AOMORI_YAMADA_2015"
  | "AOMORI_UNIVERSITY_2017_INTER_COLLEGE"
  | "AOMORI_UNIVERSITY_2017_JAPAN"
  | "AOMORI_UNIVERSITY_2018_INTER_COLLEGE"
  | "AOMORI_UNIVERSITY_2018_JAPAN"
  | "AOMORI_UNIVERSITY_2019_INTER_COLLEGE"
  | "AOMORI_UNIVERSITY_2019_JAPAN"
  | "AOMORI_UNIVERSITY_2020"
  | "AOMORI_UNIVERSITY_2021"
  | "AOMORI_UNIVERSITY_2022"
  | "AOMORI_UNIVERSITY_2023"
  | "AOMORI_UNIVERSITY_2024";

const GROUP_VIDEOS: { [key in GroupVideoKey]: GroupVideoResource } = {
  /** 青森山田高等学校 2015年 高校総体 */
  AOMORI_YAMADA_2015: {
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
  /** 青森大学 2017年 全日本インカレ */
  AOMORI_UNIVERSITY_2017_INTER_COLLEGE: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.SHUN_UENO,
      Player.KENSHIRO_WATANABE,
      Player.YUTAKA_MAEDA,
      Player.HARUKI_MAEDA,
      Player.WATARU_ITO,
      Player.RYOSUKE_IGARASHI,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/uCKLgRFv19c",
    filmedAt: new Date("2017-09-10T00:00:00+09:00"),
  },
  /** 青森大学 2017年 JAPAN */
  AOMORI_UNIVERSITY_2017_JAPAN: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.SHUN_UENO,
      Player.KENSHIRO_WATANABE,
      Player.YUTAKA_MAEDA,
      Player.HARUKI_MAEDA,
      Player.WATARU_ITO,
      Player.RYOSUKE_IGARASHI,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/cuq-1dEpXy0",
    filmedAt: new Date("2017-10-29T00:00:00+09:00"),
  },
  /** 青森大学 2018年 全日本インカレ */
  AOMORI_UNIVERSITY_2018_INTER_COLLEGE: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.WATARU_ITO,
      Player.KEISUKE_MURAMATSU,
      Player.MAKOTO_KIMURE,
      Player.SHUNSUKE_EGAMI,
      Player.TSUBASA_MUTO,
      Player.HAYATE_TAMAKI,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/zMvX6Tlzql0",
    filmedAt: new Date("2018-09-09T00:00:00+09:00"),
  },
  /** 青森大学 2018年 JAPAN */
  AOMORI_UNIVERSITY_2018_JAPAN: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.WATARU_ITO,
      Player.KEISUKE_MURAMATSU,
      Player.SHIRO_UCHIMURA,
      Player.RYOSUKE_IGARASHI,
      Player.SHUNSUKE_EGAMI,
      Player.TSUBASA_MUTO,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/Hl62RcWc6n0",
    filmedAt: new Date("2018-10-20T00:00:00+09:00"),
  },
  /** 青森大学 2019年 全日本インカレ */
  AOMORI_UNIVERSITY_2019_INTER_COLLEGE: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.RYOSUKE_IGARASHI,
      Player.SHUNSUKE_EGAMI,
      Player.TSUBASA_MUTO,
      Player.RYUMA_MURAKAMI,
      Player.HAYATE_TAMAKI,
      Player.KENTA_MATSUMOTO,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/BfnRFZG2r5w",
    filmedAt: new Date("2019-08-27T00:00:00+09:00"),
  },
  /** 青森大学 2019年 全日本新体操選手権 */
  AOMORI_UNIVERSITY_2019_JAPAN: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.RYOSUKE_IGARASHI,
      Player.SHUNSUKE_EGAMI,
      Player.TSUBASA_MUTO,
      Player.RYUMA_MURAKAMI,
      Player.HAYATE_TAMAKI,
      Player.KENTA_MATSUMOTO,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/N654qFg2HSg",
    filmedAt: new Date("2019-10-20T00:00:00+09:00"),
  },
  /** 青森大学 2020年 */
  AOMORI_UNIVERSITY_2020: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.RYOSUKE_IGARASHI,
      Player.SHUNSUKE_EGAMI,
      Player.TSUBASA_MUTO,
      Player.RYUMA_MURAKAMI,
      Player.HAYATE_TAMAKI,
      Player.KENTA_MATSUMOTO,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/AFkudLu7ogg",
    filmedAt: new Date("2020-11-22T00:00:00+09:00"),
  },
  /** 青森大学 2021年 */
  AOMORI_UNIVERSITY_2021: {
    team: Team.AOMORI_UNIVERSITY,
    players: [
      Player.TSUBASA_MUTO,
      Player.RYUMA_MURAKAMI,
      Player.HAYATE_TAMAKI,
      Player.MASASHI_TAGUCHI,
      Player.KENTA_MATSUMOTO,
      Player.HAYATO_NOGUCHI,
    ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/RpHN_kcQTvs",
    filmedAt: new Date("2021-09-16T00:00:00+09:00"),
  },
  /** 青森大学 2022年 */
  AOMORI_UNIVERSITY_2022: {
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
  AOMORI_UNIVERSITY_2023: {
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
  AOMORI_UNIVERSITY_2024: {
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
}

/** 選手の動画を表すオブジェクト */
export const VIDEOS: VideoResource[] = [
  ...Object.values(INDIVIDUAL_VIDEOS), ...Object.values(GROUP_VIDEOS),
]

/** おすすめ動画 */
export const RECOMMENDED_VIDEOS = [
  GROUP_VIDEOS.AOMORI_UNIVERSITY_2024,
  GROUP_VIDEOS.AOMORI_YAMADA_2015,
  INDIVIDUAL_VIDEOS.RENON_KASAI_STICK_2024,
  INDIVIDUAL_VIDEOS.TAKUMI_SHIMIZU_ROPE_2021,
]
