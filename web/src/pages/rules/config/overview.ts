import { m } from '$lib/paraglide/messages'
import { ApparatusKind } from '@entities/rule'
import { ROUTES } from '@shared/routes'

/**
 * 表示するときに文言を取りに行く関数。
 *
 * @remarks
 * 設定は import した時点で評価される。`m.xxx()` と書いて値を持たせると、言語が決まる前の
 * 日本語で固まってしまうため、呼ばれたときの言語で返る関数にしておく
 */
type Text = () => string

/** 種目1つ分（団体・個人） */
interface EventKind {
  /** 見分けるための名前。each の目印に使う */
  key: string
  /** 種目の名前 */
  label: Text
  /** 演技時間 */
  time: Text
  /** 何人で演技し、手具を使うか */
  summary: Text
  /** どこを見るか */
  body: Text
}

/** 種目は団体と個人の2つ。規則集の並びに合わせて団体を先に出す */
export const EVENT_KINDS: readonly EventKind[] = [
  {
    key: 'group',
    label: m.rules_overview_group_label,
    time: m.rules_overview_group_time,
    summary: m.rules_overview_group_summary,
    body: m.rules_overview_group_body,
  },
  {
    key: 'individual',
    label: m.rules_overview_individual_label,
    time: m.rules_overview_individual_time,
    summary: m.rules_overview_individual_summary,
    body: m.rules_overview_individual_body,
  },
]

/** 個人の手具1つ分 */
interface Apparatus {
  /** 手具の種類。絵（`ApparatusMark`）を引くのに使う */
  kind: ApparatusKind
  /** 手具の名前 */
  label: Text
  /** どんな手具で、どこを見るか */
  body: Text
}

/** 個人の手具は4種類。規則集の種目の並び（スティック・リング・ロープ・クラブ）に合わせる */
export const APPARATUS_LIST: readonly Apparatus[] = [
  {
    kind: ApparatusKind.STICK,
    label: m.rules_apparatus_stick,
    body: m.rules_overview_apparatus_stick_body,
  },
  {
    kind: ApparatusKind.RING,
    label: m.rules_apparatus_ring,
    body: m.rules_overview_apparatus_ring_body,
  },
  {
    kind: ApparatusKind.ROPE,
    label: m.rules_apparatus_rope,
    body: m.rules_overview_apparatus_rope_body,
  },
  {
    kind: ApparatusKind.CLUBS,
    label: m.rules_apparatus_clubs,
    body: m.rules_overview_apparatus_clubs_body,
  },
]

/** 得点を付ける目1つ分 */
interface ScorePart {
  /** 見分けるための名前 */
  key: string
  /** D・A・E の呼び名 */
  label: Text
  /** 何を見て、何人で付けるか */
  body: Text
}

/** 得点は D・A・E の3つ。価値を決める D から出す */
export const SCORE_PARTS: readonly ScorePart[] = [
  { key: 'difficulty', label: m.rules_overview_score_d_label, body: m.rules_overview_score_d_body },
  { key: 'artistry', label: m.rules_overview_score_a_label, body: m.rules_overview_score_a_body },
  { key: 'execution', label: m.rules_overview_score_e_label, body: m.rules_overview_score_e_body },
]

/** ページの下に置く、ほかのページへの案内1つ分 */
export interface RelatedPage {
  /** リンク先（末尾スラッシュ付き） */
  href: string
  /** ページの名前。メタ情報の文言を使い回して、表記を1か所に保つ */
  label: Text
  /** ひと言の説明 */
  body: Text
}

/**
 * ルールを読んだあと、続けて見ると分かることの順に並べる。
 * 採点アプリ（自分で点を付ける）→ 曲 → 大会（見に行く）
 */
export const RELATED_PAGES: readonly [RelatedPage, RelatedPage, RelatedPage] = [
  {
    href: ROUTES.judge,
    label: m.meta_judge_page,
    body: m.rules_overview_link_judge_body,
  },
  {
    href: ROUTES.backgroundMusic,
    label: m.meta_background_music_page,
    body: m.rules_overview_link_music_body,
  },
  {
    href: ROUTES.calendar.index,
    label: m.meta_calendar_page,
    body: m.rules_overview_link_calendar_body,
  },
]
