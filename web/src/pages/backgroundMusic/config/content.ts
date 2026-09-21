import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/**
 * メインビジュアルで切り替えて見せるキャッチコピー。
 *
 * @remarks
 * 表示中の言語で取り出せるように、文言の関数のまま持つ
 */
export const MAIN_VISUAL_DESCRIPTIONS = [
  m.background_music_main_visual_description_1,
  m.background_music_main_visual_description_2,
  m.background_music_main_visual_description_3,
  m.background_music_main_visual_description_4,
  m.background_music_main_visual_description_5,
] as const

/** 「編曲の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.background_music_message_line1,
  m.background_music_message_line2,
] as const

/** 編曲の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.background_music_flow_inquiry_title,
    description: m.background_music_flow_inquiry_description,
  },
  {
    title: m.background_music_flow_meeting_title,
    description: m.background_music_flow_meeting_description,
  },
  {
    title: m.background_music_flow_editing_title,
    description: m.background_music_flow_editing_description,
  },
  {
    title: m.background_music_flow_delivery_title,
    description: m.background_music_flow_delivery_description,
  },
] as const

/** 曲編集の料金（1曲あたり、円）。団体は個人より長く、組み立てる手数も多い */
export const PRICE_PER_MUSIC = {
  /** 個人 */
  individual: 5000,
  /** 団体 */
  group: 10000,
} as const

/** ページの上のほうに出す案内の文言 */
export const HERO = {
  /** 見出しの上の小さなラベル */
  eyebrow: m.background_music_hero_eyebrow,
  /** 何を頼めるのかの説明 */
  summary: m.background_music_hero_summary,
  /** 頼めることの短い言い切り */
  points: [
    m.background_music_hero_point_1,
    m.background_music_hero_point_2,
    m.background_music_hero_point_3,
  ],
  /** 料金のラベル（金額の前に出す） */
  priceUnit: m.background_music_hero_price_unit,
  /** ボタンの下に小さく出す補足 */
  note: m.background_music_hero_note,
} as const

/** 「曲編集で頼めること」の見出しまわり */
export const POINTS_HEADING = {
  eyebrow: m.background_music_points_eyebrow,
  title: m.background_music_points_title,
  lead: m.background_music_points_lead,
} as const

/** 曲編集で頼めること */
export const ORDER_POINTS = [
  {
    title: m.background_music_point_1_title,
    body: m.background_music_point_1_body,
  },
  {
    title: m.background_music_point_2_title,
    body: m.background_music_point_2_body,
  },
  {
    title: m.background_music_point_3_title,
    body: m.background_music_point_3_body,
  },
  {
    title: m.background_music_point_4_title,
    body: m.background_music_point_4_body,
  },
] as const

/** 「過去の実績」の見出しまわり */
export const WORKS_HEADING = {
  eyebrow: m.background_music_works_eyebrow,
  lead: m.background_music_works_lead,
} as const

/** 「料金」の見出しまわり */
export const PRICE_HEADING = {
  eyebrow: m.background_music_price_eyebrow,
  lead: m.background_music_price_lead,
} as const

/** 「編曲の流れ」の見出しまわり */
export const FLOW_HEADING = {
  eyebrow: m.background_music_flow_eyebrow,
  lead: m.background_music_flow_lead,
} as const

/** 「相談する」の見出しまわり */
export const CONTACT = {
  eyebrow: m.background_music_contact_eyebrow,
  lead: m.background_music_contact_lead,
  /** ボタンの下に小さく出す補足 */
  note: m.background_music_contact_note,
} as const

/**
 * 手具装飾の料金（作業1時間あたり、円）。
 *
 * @remarks
 * もう一方の依頼への案内に金額を出すためだけに持つ。
 * ページ同士は参照し合わないので、手具装飾のページと同じ値をここにも置く
 */
export const CROSS_LINK_PRICE_PER_HOUR = 1500

/** もう一方の依頼（手具装飾）への案内 */
export const CROSS_LINK = {
  label: m.background_music_cross_link_label,
  href: ROUTES.decoratingApparatus,
  body: m.background_music_cross_link_body,
} as const
