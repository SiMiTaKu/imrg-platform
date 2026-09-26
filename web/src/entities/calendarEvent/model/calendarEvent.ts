import type { LocalizedText, TranslatedText } from '@shared/model'
import type { EventCategory as EVENT_CATEGORY } from '../config/category'
import type { EventSchedule as EVENT_SCHEDULE } from '../config/schedule'

/** イベントの種類のどれか1つ */
export type EventCategory = (typeof EVENT_CATEGORY)[keyof typeof EVENT_CATEGORY]

/** イベントの種類の slug（`national` / `regional` など） */
export type EventCategorySlug = EventCategory['slug']

/** 日程の決まり方のどれか1つ */
export type EventSchedule = (typeof EVENT_SCHEDULE)[keyof typeof EVENT_SCHEDULE]

/**
 * 結果のページ。
 *
 * @remarks
 * 主催者は**団体・個人・予選・決勝を別のファイルで出すことが多い**ので、1つに絞らず並べる。
 * PDF のことも、画像のことも、一覧ページのこともある。
 * `label` は「男子 個人」のような中身の名前。1つしか無いときは付けない
 */
export interface EventResult {
  /** 何の結果か。無ければただ「結果」と出す */
  label?: LocalizedText
  /** 結果のページ */
  url: string
}

/**
 * 会場。
 *
 * @remarks
 * 住所は、地図を並べて出すために持てるようにしている（今の元データには入っていない）
 */
export interface Venue {
  /** 会場名 */
  name: LocalizedText
  /** 住所 */
  address?: string
}

/**
 * カレンダーに載せるイベントに共通の値
 *
 * @remarks
 * `~/imrg/calendar-data/build_events_ts.py` が書き出す `api/events.ts` の型
 */
interface BaseCalendarEvent {
  /** 詳細ページのURLに使う。開始日と名前から作り、一度決めたら変えない */
  id: string
  /** 大会名 */
  title: TranslatedText
  /** 種類 */
  category: EventCategorySlug
  /** 会場。主催者がまだ発表していないイベントは持たない */
  venue?: Venue
  /** 配信 */
  streaming?: LocalizedText
  /** 補足 */
  note?: LocalizedText
  /** 公式サイト */
  officialUrl?: string
  /** 日程を確認できたページ。出典のないイベントは載せない */
  sourceUrl: string
  /** 結果のページ。1つの大会でも、団体と個人で分かれていることが多いので配列で持つ */
  results?: readonly EventResult[]
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
