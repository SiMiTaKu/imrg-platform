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

/**
 * 日程が確定しているか
 * - confirmed: 主催者が日程を発表している
 * - tentative: 例年の時期しか分からない、または仮の日程
 */
export type EventStatus = 'confirmed' | 'tentative'

/**
 * CalendarEvent
 *
 * カレンダーに載せるイベント1件。日本語と英語の値を持つ
 *
 * @remarks
 * `~/imrg/calendar-data/build_events_ts.py` が書き出す `api/events.ts` の型。
 * 英語の値（`venueEnglish` など）が無いときは、英語ページでも日本語の値を出す
 */
export interface CalendarEvent {
  /** 詳細ページのURLに使う。開始日と名前から作り、一度決めたら変えない */
  id: string
  /** 大会名（日本語） */
  titleJapanese: string
  /** 大会名（英語） */
  titleEnglish: string
  /** 種類 */
  category: EventCategory
  /** "2026-10-30"。年月しか分からないときは "2027-03" */
  startDate: string
  /** 1日だけのイベントは省略する */
  endDate?: string
  /** 日程が確定しているか */
  status: EventStatus
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
