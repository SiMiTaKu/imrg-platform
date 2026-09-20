import { ContentType, VIDEOS, isIndividualVideo } from '@entities/oshimitsuVideo'
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
  /** 何が見られるかのひと言（日本語の直書き。採用が決まってから多言語化する） */
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

/** 手具ごとの見どころ（日本語の直書き。採用が決まってから多言語化する） */
const APPARATUS_DESCRIPTIONS: Record<string, string> = {
  stick: '細い棒をあやつる。手先の速さが見どころ',
  ring: '輪をくぐり、回す。体の柔らかさが出る',
  rope: '縄を跳び、回す。テンポの良さが気持ちいい',
  club: 'こん棒をあやつる。投げと受けの正確さ',
}

/**
 * 種類（個人・団体）の入口を返す
 * @returns 個人・団体の入口2つ（表示中の言語の表記）
 */
export const contentTypeEntries = (): SearchEntry[] => [
  {
    id: ContentType.INDIVIDUAL.slug,
    label: ContentType.INDIVIDUAL.label(),
    badge: '選手',
    description: 'ひとりの選手が、手具を持って演じる。選手ごとの個性が出る',
    href: ROUTES.oshimitsu.contentType(ContentType.INDIVIDUAL.slug),
    count: VIDEO_COUNTS.individual,
  },
  {
    id: ContentType.GROUP.slug,
    label: ContentType.GROUP.label(),
    badge: 'チーム',
    description: '5人が手具を持たずに、そろえて跳ぶ。男子新体操の花形',
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
    description: APPARATUS_DESCRIPTIONS[apparatus.slug] ?? '',
    href: ROUTES.oshimitsu.apparatus(apparatus.slug),
    count: countByApparatus(apparatus.slug),
  }))
