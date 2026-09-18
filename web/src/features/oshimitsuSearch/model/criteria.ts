import type { ContentTypeResource, ContentTypeSlug, VideoResource } from '@entities/oshimitsuVideo'
import type { Apparatus as ApparatusResource, ApparatusSlug } from '@shared/model'

/**
 * 検索の条件（slug で持つ形）。
 *
 * @remarks
 * URL のクエリや、`+page.server.ts` からページへ渡す値はこの形にする。
 * 種類・手具の表記（label）は言語ごとの関数なので、サーバーからブラウザーへ渡せないため
 */
export interface SearchQuery {
  /** 種類（個人・団体）。未指定なら絞り込まない */
  contentType?: ContentTypeSlug
  /** 手具。個人を指定したときだけ使う。空なら絞り込まない */
  apparatuses: readonly ApparatusSlug[]
}

/** 動画の絞り込み条件 */
export interface Criteria {
  /** 種類（個人・団体）。未指定なら絞り込まない */
  contentType?: ContentTypeResource
  /** 結果から除く動画（表示済みの動画など） */
  exceptVideos: readonly VideoResource[]
  /** 手具。個人を指定したときだけ使う。空なら絞り込まない */
  apparatuses: ApparatusResource[]
}

/** 絞り込んだ結果 */
export interface FilteredVideos {
  /** 条件に合う動画の数（除く動画を除いた数） */
  total: number
  /** 条件に合う動画から、並べ替えて先頭から取り出した動画 */
  items: VideoResource[]
}
