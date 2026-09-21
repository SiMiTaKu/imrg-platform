import { m } from '$lib/paraglide/messages'
import { Character } from '@entities/character'
import { getLocale } from '@shared/lib/i18n'
import { formatYen } from '@shared/lib/number'
import { ROUTES } from '@shared/routes'

/**
 * 表示するときに文言を取りに行く関数。
 *
 * @remarks
 * 設定は import した時点で評価される。`m.xxx()` と書いて値を持たせると、言語が決まる前の
 * 日本語で固まってしまうため、呼ばれたときの言語で返る関数にしておく
 */
type Text = () => string

/** 料金の目安（円）。表示するときに `formatYen` で言語ごとの書き方にする */
const PRICE_YEN = {
  /** オンラインの添削（個人） */
  onlineReviewIndividual: 2000,
  /** オンラインの添削（団体） */
  onlineReviewGroup: 4000,
  /** オンラインの構成作成（個人） */
  onlineCreateIndividual: 10000,
  /** 会場へ出向く指導（1日） */
  onsiteFullDay: 30000,
  /** 会場へ出向く指導（半日） */
  onsiteHalfDay: 15000,
} as const

/**
 * 金額を「◯◯円〜」の形にする
 * @param yen - 金額（円）
 * @returns 表示中の言語での言い方（日本語なら「30,000円〜」、英語なら "From ¥30,000"）
 */
const fromPrice = (yen: number): string =>
  m.coaching_price_from({ price: formatYen(yen, getLocale()) })

/** 指導の受け方。オンラインと会場へ出向く場合で、できることが変わる */
export const COACHING_WAYS = [
  {
    key: 'online',
    label: m.coaching_way_online_label,
    summary: m.coaching_way_online_summary,
    character: Character.OSAMU,
    points: [
      m.coaching_way_online_point_review,
      m.coaching_way_online_point_composition,
      m.coaching_way_online_point_advice,
    ],
    note: m.coaching_way_online_note,
  },
  {
    key: 'offline',
    label: m.coaching_way_offline_label,
    summary: m.coaching_way_offline_summary,
    character: Character.SORA,
    points: [
      m.coaching_way_offline_point_group,
      m.coaching_way_offline_point_individual,
      m.coaching_way_offline_point_basics,
    ],
    note: m.coaching_way_offline_note,
  },
] as const

/** 料金の目安 */
export const PRICES = [
  {
    key: 'online',
    way: m.coaching_way_online_label,
    items: [
      {
        key: 'review-individual',
        name: m.coaching_price_online_review_individual_name,
        /** 個人の添削の「◯◯円〜」。表示中の言語の書き方で返す */
        price: () => fromPrice(PRICE_YEN.onlineReviewIndividual),
        note: m.coaching_price_online_review_individual_note,
      },
      {
        key: 'review-group',
        name: m.coaching_price_online_review_group_name,
        /** 団体の添削の「◯◯円〜」 */
        price: () => fromPrice(PRICE_YEN.onlineReviewGroup),
        note: m.coaching_price_online_review_group_note,
      },
      {
        key: 'create-individual',
        name: m.coaching_price_online_create_individual_name,
        /** 個人の構成作成の「◯◯円〜」 */
        price: () => fromPrice(PRICE_YEN.onlineCreateIndividual),
        note: m.coaching_price_online_create_individual_note,
      },
      {
        key: 'create-group',
        name: m.coaching_price_online_create_group_name,
        /** 会場へ出向く形でのみ受けているので、金額の代わりに出す横棒 */
        price: () => '—',
        note: m.coaching_price_online_create_group_note,
      },
    ],
  },
  {
    key: 'offline',
    way: m.coaching_way_offline_label,
    items: [
      {
        key: 'full-day',
        name: m.coaching_price_onsite_full_day_name,
        /** 会場へ出向く1日の「◯◯円〜」 */
        price: () => fromPrice(PRICE_YEN.onsiteFullDay),
        note: m.coaching_price_onsite_full_day_note,
      },
      {
        key: 'half-day',
        name: m.coaching_price_onsite_half_day_name,
        /** 会場へ出向く半日の「◯◯円〜」 */
        price: () => fromPrice(PRICE_YEN.onsiteHalfDay),
        note: m.coaching_price_onsite_half_day_note,
      },
      {
        key: 'travel',
        name: m.coaching_price_travel_name,
        price: m.coaching_price_actual_cost,
        note: m.coaching_price_travel_note,
      },
      {
        key: 'lodging',
        name: m.coaching_price_lodging_name,
        price: m.coaching_price_actual_cost,
        note: m.coaching_price_lodging_note,
      },
    ],
  },
] as const

/** 相場の説明。太字にする言葉と、それに続く文をひと組で持つ */
export const MARKET_POINTS = [
  {
    key: 'onsite',
    term: m.coaching_market_onsite_term,
    body: m.coaching_market_onsite_body,
  },
  {
    key: 'create',
    term: m.coaching_market_create_term,
    body: m.coaching_market_create_body,
  },
  {
    key: 'review',
    term: m.coaching_market_review_term,
    body: m.coaching_market_review_body,
  },
] as const

/** 実績の1件（年は訳さずそのまま、チーム名と補足は言語ごとに変わる） */
type Result = {
  /** 演技を作った年 */
  year: string
  /** チーム名・選手名 */
  name: Text
  /** 補足。無いときは `null` */
  detail: Text | null
  /** 演技の動画。無いときは空 */
  videos: readonly { readonly label: Text; readonly href: string }[]
}

/** 過去に作った演技・みてきたチーム */
export const RESULTS: readonly Result[] = [
  {
    year: '2016',
    name: m.coaching_result_aomori_yamada_group,
    detail: m.coaching_result_detail_half_composition,
    videos: [],
  },
  {
    year: '2019',
    name: m.coaching_result_aomori_university_first,
    detail: null,
    // 推しミツ！に載せている動画から、同じ演技のものをつないでいる
    videos: [
      {
        label: m.coaching_result_video_label,
        href: 'https://youtu.be/N654qFg2HSg',
      },
    ],
  },
  {
    year: '2020',
    name: m.coaching_result_aomori_yamada_group,
    detail: null,
    videos: [],
  },
  {
    year: '2021',
    name: m.coaching_result_aomori_university_first,
    detail: null,
    videos: [
      {
        label: m.coaching_result_video_label,
        href: 'https://youtu.be/RpHN_kcQTvs',
      },
    ],
  },
  {
    year: '2021',
    name: m.coaching_result_aomori_yamada_group,
    detail: null,
    videos: [],
  },
  {
    year: '2021',
    name: m.coaching_result_takumi_shimizu_individual,
    detail: m.coaching_result_detail_all_apparatus,
    videos: [
      {
        label: m.apparatus_stick,
        href: 'https://youtu.be/tssu0o5sG10',
      },
      {
        label: m.apparatus_ring,
        href: 'https://youtu.be/X9_KpzsYl7k',
      },
      {
        label: m.apparatus_rope,
        href: 'https://youtu.be/WcCA_SDdi_o',
      },
      {
        label: m.apparatus_club,
        href: 'https://youtu.be/4r6JlP3m2Uc',
      },
    ],
  },
  {
    year: '2024',
    name: m.coaching_result_aomori_yamada_group,
    detail: null,
    videos: [],
  },
  {
    year: '2025',
    name: m.coaching_result_kanzaki_junior_group,
    detail: null,
    videos: [],
  },
  {
    year: '2026',
    name: m.coaching_result_kabusho_group,
    detail: null,
    videos: [],
  },
]

/** 年ではくくれない実績 */
export const CONTINUOUS_RESULTS = [
  {
    key: 'kabusho',
    text: m.coaching_continuous_kabusho,
  },
  {
    key: 'others',
    text: m.coaching_continuous_others,
  },
] as const

/** 依頼の流れ */
export const FLOW = [
  {
    key: 'consult',
    title: m.coaching_flow_consult_title,
    description: m.coaching_flow_consult_description,
  },
  {
    key: 'decide',
    title: m.coaching_flow_decide_title,
    description: m.coaching_flow_decide_description,
  },
  {
    key: 'work',
    title: m.coaching_flow_work_title,
    description: m.coaching_flow_work_description,
  },
  {
    key: 'deliver',
    title: m.coaching_flow_deliver_title,
    description: m.coaching_flow_deliver_description,
  },
] as const

/** ページの上のほうに出す案内 */
export const HERO = {
  eyebrow: m.coaching_hero_eyebrow,
  summary: m.coaching_hero_summary,
  points: [
    {
      key: 'group',
      text: m.coaching_hero_point_group,
    },
    {
      key: 'individual',
      text: m.coaching_hero_point_individual,
    },
    {
      key: 'review',
      text: m.coaching_hero_point_review,
    },
  ],
  priceUnit: m.coaching_hero_price_unit,
  /** 見出しに出す「オンライン ◯◯円〜／1日 ◯◯円〜」 */
  priceAmount: () =>
    m.coaching_hero_price_amount({
      online: formatYen(PRICE_YEN.onlineReviewIndividual, getLocale()),
      onsite: formatYen(PRICE_YEN.onsiteFullDay, getLocale()),
    }),
} as const

/** ほかの依頼ページへの案内 */
export const OTHER_SERVICES = [
  {
    key: 'background-music',
    title: m.coaching_other_background_music_title,
    body: m.coaching_other_background_music_body,
    href: ROUTES.backgroundMusic,
  },
  {
    key: 'decorating-apparatus',
    title: m.coaching_other_decorating_apparatus_title,
    body: m.coaching_other_decorating_apparatus_body,
    href: ROUTES.decoratingApparatus,
  },
] as const
