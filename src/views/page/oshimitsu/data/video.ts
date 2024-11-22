import {
  GroupVideoResource,
  IndividualVideoResource,
  type VideoResource,
} from "$views/page/oshimitsu/models"
import { Apparatus } from "$views/page/oshimitsu/lib"

/** 選手の動画を表すオブジェクト */
export const VIDEOS: VideoResource[] = [
  /** 清水琢巳 クラブ */
  new IndividualVideoResource(
    1,
    1,
    "https://www.youtube.com/embed/4r6JlP3m2Uc",
    Apparatus.CLUB,
    new Date("2021-08-01T00:00:00+09:00")
  ),
  /** 清水琢巳 ロープ */
  new IndividualVideoResource(
    2,
    1,
    "https://www.youtube.com/embed/WcCA_SDdi_o",
    Apparatus.ROPE,
    new Date("2021-08-01T00:00:00+09:00")
  ),
  /** 清水琢巳 リング */
  new IndividualVideoResource(
    3,
    1,
    "https://www.youtube.com/embed/X9_KpzsYl7k",
    Apparatus.RING,
    new Date("2021-08-01T00:00:00+09:00")
  ),
  /** 清水琢巳 スティック */
  new IndividualVideoResource(
    4,
    1,
    "https://www.youtube.com/embed/tssu0o5sG10",
    Apparatus.STICK,
    new Date("2021-08-01T00:00:00+09:00")
  ),
  /** 青森山田 2015年 高校総体 */
  new GroupVideoResource(
    5,
    1,
    [ 1 ],
    "https://www.youtube.com/embed/ZsqQKFm6CSc",
    new Date("2021-08-01T00:00:00+09:00")
  ),
]
