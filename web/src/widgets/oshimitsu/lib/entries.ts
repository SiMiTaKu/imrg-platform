import { ContentType, VIDEOS, isIndividualVideo } from '@entities/oshimitsuVideo'
import { m } from '$lib/paraglide/messages'
import { APPARATUSES } from '@shared/config/apparatus'
import { ROUTES } from '@shared/routes'

/**
 * 動画を探す入口1つ分。
 *
 * @remarks
 * 「個人（選手）」「団体（チーム）」「手具」を、押せば一覧に進むリンクとして並べるために使う。
 * `label` は表示中の言語の表記なので、値を作る関数はブラウザー・サーバーのどちらでも描くときに呼ぶ
 */
export interface SearchEntry {
  /** 一意の識別子（`{#each}` のキーに使う） */
  id: string
  /** 表示する名前（表示中の言語） */
  label: string
  /** 名前の前に出す小さな印。無ければ出さない */
  badge?: string
  /** 何が見られるかのひと言（表示中の言語） */
  description: string
  /** 行き先のパス（言語の接頭辞なし。`localizeHref` に通して使う） */
  href: string
  /** その入口で見られる動画の本数 */
  count: number
}

/** 個人の動画の本数 */
const INDIVIDUAL_VIDEO_COUNT = VIDEOS.filter(isIndividualVideo).length

/**
 * 動画の本数をまとめたもの。
 *
 * @remarks
 * 「ここに何本あるか」を先に見せると、探す前に規模が伝わる。
 * 乱数を使わないのでサーバーで書き出す HTML とブラウザーで同じ値になる
 */
export const VIDEO_COUNTS = {
  /** 全部の本数 */
  total: VIDEOS.length,
  /** 個人の本数 */
  individual: INDIVIDUAL_VIDEO_COUNT,
  /** 団体の本数 */
  group: VIDEOS.length - INDIVIDUAL_VIDEO_COUNT,
} as const

/**
 * 手具ごとの動画の本数を数える
 * @param slug - 手具の slug（`stick` / `ring` / `rope` / `club`）
 * @returns その手具の個人の動画の本数
 */
const countByApparatus = (slug: string): number =>
  VIDEOS.filter((video) => isIndividualVideo(video) && video.apparatus.slug === slug).length

/**
 * 手具ごとの見どころ。
 *
 * @remarks
 * 表示中の言語の表記を返す関数を持つ。読み込んだ時点で文字列にすると、
 * 言語が決まる前の表記で固まってしまうため
 */
const APPARATUS_DESCRIPTIONS: Record<string, () => string> = {
  stick: m.oshimitsu_way_stick_description,
  ring: m.oshimitsu_way_ring_description,
  rope: m.oshimitsu_way_rope_description,
  club: m.oshimitsu_way_club_description,
}

/**
 * 種類（個人・団体）の入口を返す
 * @returns 個人・団体の入口2つ（表示中の言語の表記）
 */
export const contentTypeEntries = (): SearchEntry[] => [
  {
    id: ContentType.INDIVIDUAL.slug,
    label: ContentType.INDIVIDUAL.label(),
    badge: m.oshimitsu_word_player(),
    description: m.oshimitsu_way_individual_description(),
    href: ROUTES.oshimitsu.contentType(ContentType.INDIVIDUAL.slug),
    count: VIDEO_COUNTS.individual,
  },
  {
    id: ContentType.GROUP.slug,
    label: ContentType.GROUP.label(),
    badge: m.oshimitsu_word_team(),
    description: m.oshimitsu_way_group_description(),
    href: ROUTES.oshimitsu.contentType(ContentType.GROUP.slug),
    count: VIDEO_COUNTS.group,
  },
]

/**
 * 手具の入口を返す
 * @returns 手具4つの入口（競技で使う順。表示中の言語の表記）
 */
export const apparatusEntries = (): SearchEntry[] =>
  APPARATUSES.map((apparatus) => ({
    id: apparatus.slug,
    label: apparatus.label(),
    description: APPARATUS_DESCRIPTIONS[apparatus.slug]?.() ?? '',
    href: ROUTES.oshimitsu.apparatus(apparatus.slug),
    count: countByApparatus(apparatus.slug),
  }))
