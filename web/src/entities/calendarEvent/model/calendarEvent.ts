import type { EventSchedule as EVENT_SCHEDULE } from '../config/schedule'

/**
 * イベントの種類
 * - national: 全国大会
 * - regional: 地区・ブロック大会
 * - prefectural: 都道府県大会・新人戦
 * - performance: 発表会・演技会・公演
 * - workshop: 講習会・体験会・合宿
 * - international: 海外・国際的な催し
 */
export type EventCategory =
  'national' | 'regional' | 'prefectural' | 'performance' | 'workshop' | 'international'

/** 日程の決まり方のどれか1つ */
export type EventSchedule = (typeof EVENT_SCHEDULE)[keyof typeof EVENT_SCHEDULE]

/**
 * カレンダーに載せるイベントに共通の値。日本語と英語の値を持つ
 *
 * @remarks
 * `~/imrg/calendar-data/build_events_ts.py` が書き出す `api/events.ts` の型。
 * 英語の値（`venueEnglish` など）が無いときは、英語ページでも日本語の値を出す
 */
interface BaseCalendarEvent {
  /** 詳細ページのURLに使う。開始日と名前から作り、一度決めたら変えない */
  id: string
  /** 大会名（日本語） */
  titleJapanese: string
  /** 大会名（英語） */
  titleEnglish: string
  /** 種類 */
  category: EventCategory
  /** 会場（日本語） */
  venueJapanese?: string
  /** 会場（英語） */
  venueEnglish?: string
  /** 配信（日本語） */
  streamingJapanese?: string
  /** 配信（英語） */
  streamingEnglish?: string
  /** 補足（日本語） */
  noteJapanese?: string
  /** 補足（英語） */
  noteEnglish?: string
  /** 公式サイト */
  officialUrl?: string
  /** 日程を確認できたページ。出典のないイベントは載せない */
  sourceUrl: string
  /** 結果のページ */
  resultUrl?: string
}

/** 日付まで決まっているイベント */
interface DatedCalendarEvent extends BaseCalendarEvent {
  /** 日程の決まり方。日付が決まっているので `FIXED` か `TENTATIVE` */
  schedule: typeof EVENT_SCHEDULE.FIXED | typeof EVENT_SCHEDULE.TENTATIVE
  /** 開始日 "2026-10-30" */
  startDate: string
  /** 終了日。1日だけのイベントは省略する */
  endDate?: string
}

/** 年月だけ決まっていて、日付が未定のイベント */
interface MonthOnlyCalendarEvent extends BaseCalendarEvent {
  /** 日程の決まり方。日付が未定なので `MONTH_ONLY` */
  schedule: typeof EVENT_SCHEDULE.MONTH_ONLY
  /** 開催する月 "2027-03" */
  month: string
}

/**
 * カレンダーに載せるイベント1件。
 *
 * @remarks
 * 日程の決まり方（`schedule`）で形が変わる。日付が未定のイベントは `startDate` を持たないので、
 * 日付を使う処理では `schedule` で分ける（`eventStartDate` などの関数を使う）
 */
export type CalendarEvent = DatedCalendarEvent | MonthOnlyCalendarEvent
