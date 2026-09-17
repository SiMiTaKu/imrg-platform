import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/**
 * ページのメタ情報（title・description・canonical・OGP）
 */
export interface PageMeta {
  /** ページタイトル。OGP のタイトルにも使う */
  title: string
  /** ページの説明。OGP の説明にも使う */
  description: string
  /** ページのパス（言語の接頭辞なし、末尾スラッシュ付き） */
  path: string
  /** OGP の種類。記事にあたるページ（大会の詳細など）は `article` */
  ogType: 'website' | 'article'
}

/** 大会の詳細ページのメタ情報を作るための値。表示中の言語の値を渡す */
export interface CalendarDetailMetaInput {
  /** 大会の ID */
  id: string
  /** 大会名 */
  title: string
  /** もう一方の言語の大会名（日本語ページでは英語名） */
  alternateTitle: string
  /** 日程の表記 */
  dateRange: string
  /** 会場。無ければ省く */
  venue?: string
}

/**
 * ページタイトルを「ページ名 | サイト名」の形にする
 * @param page - ページ名
 * @returns ページタイトル
 */
const pageTitle = (page: string) => m.meta_page_title({ page })

/**
 * ページごとのメタ情報。
 *
 * @remarks
 * 文言は多言語化の文言（`messages/meta/<言語>.json`）から取るので、
 * リクエストの言語が決まっている場所（`+page.server.ts` の load など）で呼ぶ。
 */
export const META_DATA = {
  /**
   * トップページ
   * @returns メタ情報
   */
  top: (): PageMeta => ({
    title: m.meta_site_title(),
    description: m.meta_top_description(),
    path: ROUTES.top,
    ogType: 'website',
  }),
  /**
   * 大会・イベントカレンダー
   * @returns メタ情報
   */
  calendar: (): PageMeta => ({
    title: pageTitle(m.meta_calendar_page()),
    description: m.meta_calendar_description(),
    path: ROUTES.calendar.index,
    ogType: 'website',
  }),
  /**
   * 大会の詳細ページ
   * @param input - 表示中の言語の大会の情報
   * @returns メタ情報
   */
  calendarDetail: (input: CalendarDetailMetaInput): PageMeta => ({
    title: m.meta_calendar_detail_title({ event: input.title }),
    description: m.meta_calendar_detail_description({
      event: input.title,
      eventAlt: input.alternateTitle,
      dateRange: input.dateRange,
      venue: input.venue ? m.meta_calendar_detail_venue({ venue: input.venue }) : '',
    }),
    path: ROUTES.calendar.detail(input.id),
    ogType: 'article',
  }),
  /**
   * 推しミツ！のトップ
   * @returns メタ情報
   */
  oshimitsu: (): PageMeta => ({
    title: pageTitle(m.meta_oshimitsu_page()),
    description: m.meta_oshimitsu_description(),
    path: ROUTES.oshimitsu.index,
    ogType: 'website',
  }),
  /**
   * 推しミツ！の検索結果
   * @returns メタ情報
   */
  oshimitsuSearchResult: (): PageMeta => ({
    title: pageTitle(m.meta_oshimitsu_page()),
    description: m.meta_oshimitsu_description(),
    path: ROUTES.oshimitsu.searchResult,
    ogType: 'website',
  }),
  /**
   * 推しミツ！の絞り込みページ（種類・手具）
   * @param filter - 絞り込みの表記（例: 「個人 × クラブ」）。表示中の言語で渡す
   * @param path - ページのパス
   * @returns メタ情報
   */
  oshimitsuFiltered: (filter: string, path: string): PageMeta => ({
    title: pageTitle(m.meta_oshimitsu_filtered_page({ filter })),
    description: m.meta_oshimitsu_filtered_description(),
    path,
    ogType: 'website',
  }),
  /**
   * 曲編集
   * @returns メタ情報
   */
  backgroundMusic: (): PageMeta => ({
    title: pageTitle(m.meta_background_music_page()),
    description: m.meta_background_music_description(),
    path: ROUTES.backgroundMusic,
    ogType: 'website',
  }),
  /**
   * 手具装飾
   * @returns メタ情報
   */
  decoratingApparatus: (): PageMeta => ({
    title: pageTitle(m.meta_decorating_apparatus_page()),
    description: m.meta_decorating_apparatus_description(),
    path: ROUTES.decoratingApparatus,
    ogType: 'website',
  }),
  /**
   * 採点アプリ
   * @returns メタ情報
   */
  judge: (): PageMeta => ({
    title: pageTitle(m.meta_judge_page()),
    description: m.meta_judge_description(),
    path: ROUTES.judge,
    ogType: 'website',
  }),
  /**
   * ルールブック
   * @returns メタ情報
   */
  rules: (): PageMeta => ({
    title: pageTitle(m.meta_rules_page()),
    description: m.meta_rules_description(),
    path: ROUTES.rules,
    ogType: 'website',
  }),
  /**
   * プライバシーポリシー
   * @returns メタ情報
   */
  privacy: (): PageMeta => ({
    title: pageTitle(m.meta_privacy_page()),
    description: m.meta_privacy_description(),
    path: ROUTES.privacy,
    ogType: 'website',
  }),
  /**
   * 利用規約
   * @returns メタ情報
   */
  terms: (): PageMeta => ({
    title: pageTitle(m.meta_terms_page()),
    description: m.meta_terms_description(),
    path: ROUTES.terms,
    ogType: 'website',
  }),
}
