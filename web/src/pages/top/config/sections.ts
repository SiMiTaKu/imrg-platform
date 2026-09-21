import { m } from '$lib/paraglide/messages'
import { Character } from '@entities/character'
import { LINKS } from '@shared/config/links'
import { getLocale } from '@shared/lib/i18n'
import { formatYen } from '@shared/lib/number'
import { ROUTES } from '@shared/routes'

/**
 * いちばん安く頼める値段（円）。
 *
 * @remarks
 * 表示では `formatYen` で言語ごとの書き方に直す。構造化データでは数字のまま使う
 */
const PRICES = {
  /** 指導：オンラインの添削から／会場へ出向く1日 */
  coaching: { online: 2000, daily: 30000 },
  /** 曲編集：個人の1曲／団体の1曲 */
  backgroundMusic: { individual: 5000, group: 10000 },
  /** 手具装飾：作業1時間 */
  decoratingApparatus: { hourly: 1500 },
} as const

/** 掲載している大会の数。できることの印に出す */
const LISTED_EVENT_COUNT = 312

/** トップに出す直近の大会の数。多いと選べなくなるので3件まで */
export const UPCOMING_EVENT_COUNT = 3

/**
 * 競技の見どころ。3つに絞る。
 *
 * @remarks
 * 文言は関数で持つ。読み込んだ瞬間に評価すると、言語が決まる前の文言で固まってしまう
 */
export const HIGHLIGHTS = [
  {
    id: 'tumbling',
    character: Character.SORA,
    title: m.top_highlight_tumbling_title,
    summary: m.top_highlight_tumbling_summary,
    body: m.top_highlight_tumbling_body,
    /** 絵に手具（スティック）を持たせるか */
    showApparatus: false,
  },
  {
    id: 'apparatus',
    character: Character.AYATO,
    title: m.top_highlight_apparatus_title,
    summary: m.top_highlight_apparatus_summary,
    body: m.top_highlight_apparatus_body,
    showApparatus: true,
  },
  {
    id: 'group',
    character: Character.KAZUTO,
    title: m.top_highlight_group_title,
    summary: m.top_highlight_group_summary,
    body: m.top_highlight_group_body,
    showApparatus: false,
  },
] as const

/**
 * 頼めること。料金の入口を分かりやすくする。
 *
 * @remarks
 * `price` と `body` は、意味のまとまりごとに分けて並びで持つ。
 * 日本語は単語の切れ目が無いため、1つの文にしてしまうとスマホで
 * 「2,000円〜」の途中や文の意味の途中で折り返してしまう。
 * 画面ではまとまりごとに `<span>` で包み、まとまりの中では折り返さないようにする
 */
export const SERVICES = [
  {
    id: 'coaching',
    character: Character.KAZUTO,
    title: m.top_service_coaching_title,
    price: [
      /**
       * オンラインで受けるときの値段
       * @returns 「オンライン 2,000円〜」
       */
      () =>
        m.top_service_coaching_price_online({
          online: formatYen(PRICES.coaching.online, getLocale()),
        }),
      /**
       * 会場へ出向くときの1日の値段
       * @returns 「1日 30,000円〜」
       */
      () =>
        m.top_service_coaching_price_daily({
          daily: formatYen(PRICES.coaching.daily, getLocale()),
        }),
    ],
    body: [
      m.top_service_coaching_body_1,
      m.top_service_coaching_body_2,
      m.top_service_coaching_body_3,
      m.top_service_coaching_body_4,
      m.top_service_coaching_body_5,
    ],
    href: ROUTES.coaching,
    action: m.top_service_coaching_action,
    /** いちばん安く頼める値段（円）。構造化データの Offer に出す */
    lowestPrice: PRICES.coaching.online,
  },
  {
    id: 'background_music',
    character: Character.AYATO,
    title: m.top_service_background_music_title,
    price: [
      /**
       * 個人の1曲の値段
       * @returns 「個人 5,000円〜」
       */
      () =>
        m.top_service_background_music_price_individual({
          individual: formatYen(PRICES.backgroundMusic.individual, getLocale()),
        }),
      /**
       * 団体の1曲の値段
       * @returns 「団体 10,000円〜」
       */
      () =>
        m.top_service_background_music_price_group({
          group: formatYen(PRICES.backgroundMusic.group, getLocale()),
        }),
    ],
    body: [
      m.top_service_background_music_body_1,
      m.top_service_background_music_body_2,
      m.top_service_background_music_body_3,
      m.top_service_background_music_body_4,
    ],
    href: ROUTES.backgroundMusic,
    action: m.top_service_background_music_action,
    lowestPrice: PRICES.backgroundMusic.individual,
  },
  {
    id: 'decorating_apparatus',
    character: Character.YAWANA,
    title: m.top_service_decorating_apparatus_title,
    price: [
      /**
       * 作業1時間あたりの値段
       * @returns 「作業1時間 1,500円〜」
       */
      () =>
        m.top_service_decorating_apparatus_price_hourly({
          hourly: formatYen(PRICES.decoratingApparatus.hourly, getLocale()),
        }),
    ],
    body: [
      m.top_service_decorating_apparatus_body_1,
      m.top_service_decorating_apparatus_body_2,
      m.top_service_decorating_apparatus_body_3,
    ],
    href: ROUTES.decoratingApparatus,
    action: m.top_service_decorating_apparatus_action,
    lowestPrice: PRICES.decoratingApparatus.hourly,
  },
] as const

/** サイトの中でできること */
export const FEATURES = [
  {
    id: 'calendar',
    title: m.top_feature_calendar_title,
    body: m.top_feature_calendar_body,
    href: ROUTES.calendar.index,
    /**
     *
     */
    badge: () => m.top_feature_calendar_badge({ count: LISTED_EVENT_COUNT }),
  },
  {
    id: 'rules',
    title: m.top_feature_rules_title,
    body: m.top_feature_rules_body,
    href: ROUTES.rules,
    badge: m.top_feature_rules_badge,
  },
  {
    id: 'judge',
    title: m.top_feature_judge_title,
    body: m.top_feature_judge_body,
    href: ROUTES.judge,
    badge: m.top_feature_judge_badge,
  },
  {
    id: 'oshimitsu',
    title: m.top_feature_oshimitsu_title,
    body: m.top_feature_oshimitsu_body,
    href: ROUTES.oshimitsu.index,
    badge: m.top_feature_oshimitsu_badge,
  },
] as const

/**
 * 信頼の裏づけになる数字。
 *
 * @remarks
 * 数字そのものは言語で変えない。単位と説明だけ訳す
 */
export const NUMBERS = [
  {
    id: 'competitions',
    value: '312',
    unit: m.top_number_competitions_unit,
    label: m.top_number_competitions_label,
  },
  { id: 'locales', value: '8', unit: m.top_number_locales_unit, label: m.top_number_locales_label },
  { id: 'pages', value: '2,568', unit: m.top_number_pages_unit, label: m.top_number_pages_label },
  { id: 'since', value: '2022', unit: m.top_number_since_unit, label: m.top_number_since_label },
] as const

/** 連絡の取り方。サービス名はどの言語でもそのまま出す */
export const CONTACTS = [
  {
    label: 'Instagram',
    description: m.top_contact_instagram_description,
    href: LINKS.instagram,
  },
  { label: 'YouTube', description: m.top_contact_youtube_description, href: LINKS.youtube },
  { label: 'X', description: m.top_contact_x_description, href: LINKS.x },
  { label: 'TikTok', description: m.top_contact_tiktok_description, href: LINKS.tiktok },
] as const
