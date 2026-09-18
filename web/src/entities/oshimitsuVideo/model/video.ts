import type { Apparatus, TranslatedText } from '@shared/model'
import type { ContentType as CONTENT_TYPE } from '../config/category'

/** チーム */
export interface TeamResource {
  /** 名前（英語はローマ字） */
  name: TranslatedText
  /** 名前（かな） */
  nameKana: string
}

/** 選手 */
export interface PlayerResource {
  /** 名前（英語はローマ字で「名 姓」の順） */
  name: TranslatedText
  /** 名前（かな） */
  nameKana: string
  /** 所属したチーム */
  belongedTeams: TeamResource[]
}

/** 動画の種類（個人・団体）のどれか1つ */
export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE]

/** 動画の種類の slug（`individual` / `group`） */
export type ContentTypeSlug = ContentType['slug']

/** 動画に共通の項目 */
interface BaseVideo {
  /** 埋め込み用の YouTube の URL */
  embedUrl: string
  /** 撮影日 */
  filmedAt: Date
}

/** 個人の動画。選手と手具を持つ */
export interface IndividualVideoResource extends BaseVideo {
  /** 選手 */
  player: PlayerResource
  /** 種類 */
  contentType: typeof CONTENT_TYPE.INDIVIDUAL
  /** 手具 */
  apparatus: Apparatus
}

/** 団体の動画。チームと出場選手を持つ */
export interface GroupVideoResource extends BaseVideo {
  /** チーム */
  team: TeamResource
  /** 出場選手 */
  players: PlayerResource[]
  /** 種類 */
  contentType: typeof CONTENT_TYPE.GROUP
}

/** 動画 */
export type VideoResource = IndividualVideoResource | GroupVideoResource
