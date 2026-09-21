import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'
import type { ImageSourceMeta } from '@shared/ui'
import MainVisual1 from '../images/main-visual-1.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual2 from '../images/main-visual-2.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual3 from '../images/main-visual-3.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual4 from '../images/main-visual-4.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual5 from '../images/main-visual-5.jpg?w=1024;2048&format=webp&as=meta'

/** メインビジュアルの1枚（背景画像とキャッチコピー） */
type MainVisualSlide = {
  /** 背景画像 */
  image: ImageSourceMeta[]
  /** キャッチコピー。表示中の言語で取り出せるように、文言の関数のまま持つ */
  description: typeof m.decorating_apparatus_main_visual_description_1
}

/**
 * メインビジュアルで切り替えて見せる背景画像とキャッチコピー。
 *
 * @remarks
 * 画像の並び（1・3・5・2・4）は、移す前のページと同じ
 */
export const MAIN_VISUAL_SLIDES: readonly MainVisualSlide[] = [
  { image: MainVisual1, description: m.decorating_apparatus_main_visual_description_1 },
  { image: MainVisual3, description: m.decorating_apparatus_main_visual_description_2 },
  { image: MainVisual5, description: m.decorating_apparatus_main_visual_description_3 },
  { image: MainVisual2, description: m.decorating_apparatus_main_visual_description_4 },
  { image: MainVisual4, description: m.decorating_apparatus_main_visual_description_5 },
]

/** 「装飾の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.decorating_apparatus_message_line1,
  m.decorating_apparatus_message_line2,
] as const

/** 装飾の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.decorating_apparatus_flow_inquiry_title,
    description: m.decorating_apparatus_flow_inquiry_description,
  },
  {
    title: m.decorating_apparatus_flow_meeting_title,
    description: m.decorating_apparatus_flow_meeting_description,
  },
  {
    title: m.decorating_apparatus_flow_design_title,
    description: m.decorating_apparatus_flow_design_description,
  },
  {
    title: m.decorating_apparatus_flow_decorating_title,
    description: m.decorating_apparatus_flow_decorating_description,
  },
  {
    title: m.decorating_apparatus_flow_delivery_title,
    description: m.decorating_apparatus_flow_delivery_description,
  },
] as const

/** 手具装飾の料金（作業1時間あたり、円） */
export const PRICE_PER_HOUR = 1500

/** ページの上のほうに出す案内の文言 */
export const HERO = {
  /** 見出しの上の小さなラベル */
  eyebrow: m.decorating_apparatus_hero_eyebrow,
  /** 何を頼めるのかの説明 */
  summary: m.decorating_apparatus_hero_summary,
  /** 頼めることの短い言い切り */
  points: [
    m.decorating_apparatus_hero_point_1,
    m.decorating_apparatus_hero_point_2,
    m.decorating_apparatus_hero_point_3,
  ],
  /** 料金のラベル（金額の前に出す） */
  priceUnit: m.decorating_apparatus_hero_price_unit,
  /** ボタンの下に小さく出す補足 */
  note: m.decorating_apparatus_hero_note,
} as const

/** 「手具装飾で頼めること」の見出しまわり */
export const POINTS_HEADING = {
  eyebrow: m.decorating_apparatus_points_eyebrow,
  title: m.decorating_apparatus_points_title,
  lead: m.decorating_apparatus_points_lead,
} as const

/** 手具装飾で頼めること */
export const ORDER_POINTS = [
  {
    title: m.decorating_apparatus_point_1_title,
    body: m.decorating_apparatus_point_1_body,
  },
  {
    title: m.decorating_apparatus_point_2_title,
    body: m.decorating_apparatus_point_2_body,
  },
  {
    title: m.decorating_apparatus_point_3_title,
    body: m.decorating_apparatus_point_3_body,
  },
  {
    title: m.decorating_apparatus_point_4_title,
    body: m.decorating_apparatus_point_4_body,
  },
] as const

/** 「過去の作品」の見出しまわり */
export const WORKS_HEADING = {
  eyebrow: m.decorating_apparatus_works_eyebrow,
  lead: m.decorating_apparatus_works_lead,
} as const

/** 「料金」の見出しまわり */
export const PRICE_HEADING = {
  eyebrow: m.decorating_apparatus_price_eyebrow,
  lead: m.decorating_apparatus_price_lead,
} as const

/** 「装飾の流れ」の見出しまわり */
export const FLOW_HEADING = {
  eyebrow: m.decorating_apparatus_flow_eyebrow,
  lead: m.decorating_apparatus_flow_lead,
} as const

/** 「相談する」の見出しまわり */
export const CONTACT = {
  eyebrow: m.decorating_apparatus_contact_eyebrow,
  lead: m.decorating_apparatus_contact_lead,
  /** ボタンの下に小さく出す補足 */
  note: m.decorating_apparatus_contact_note,
} as const

/**
 * 曲編集の料金（1曲あたり、円）。
 *
 * @remarks
 * もう一方の依頼への案内に金額を出すためだけに持つ。
 * ページ同士は参照し合わないので、曲編集のページと同じ値をここにも置く
 */
export const CROSS_LINK_PRICE_PER_MUSIC = 5000

/** もう一方の依頼（曲編集）への案内 */
export const CROSS_LINK = {
  label: m.decorating_apparatus_cross_link_label,
  href: ROUTES.backgroundMusic,
  body: m.decorating_apparatus_cross_link_body,
} as const
