import type {
  GroupVideoResource,
  IndividualVideoResource,
  VideoResource,
} from "../models"
import { Apparatus, ContentType } from "../lib"
import { AOMORI_YAMADA, TAKUMI_SHIMIZU } from "../data"

const INDIVIDUAL_VIDEOS: IndividualVideoResource[] = [
  /** 清水琢巳 スティック */
  {
    id: 1,
    player: TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.STICK,
    src: "https://www.youtube.com/embed/tssu0o5sG10",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 リング */
  {
    id: 2,
    player: TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.RING,
    src: "https://www.youtube.com/embed/X9_KpzsYl7k",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 ロープ */
  {
    id: 3,
    player: TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.ROPE,
    src: "https://www.youtube.com/embed/WcCA_SDdi_o",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
  /** 清水琢巳 クラブ */
  {
    id: 4,
    player: TAKUMI_SHIMIZU,
    contentType: ContentType.INDIVIDUAL,
    apparatus: Apparatus.CLUB,
    src: "https://www.youtube.com/embed/4r6JlP3m2Uc",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
]

const GROUP_VIDEOS: GroupVideoResource[] = [
  /** 青森山田高等学校 2015年 高校総体 */
  {
    id: 5,
    team: AOMORI_YAMADA,
    players: [ TAKUMI_SHIMIZU ],
    contentType: ContentType.GROUP,
    src: "https://www.youtube.com/embed/ZsqQKFm6CSc",
    filmedAt: new Date("2021-08-01T00:00:00+09:00"),
  },
]

/** 選手の動画を表すオブジェクト */
export const VIDEOS: VideoResource[] = [ ...INDIVIDUAL_VIDEOS, ...GROUP_VIDEOS ]
