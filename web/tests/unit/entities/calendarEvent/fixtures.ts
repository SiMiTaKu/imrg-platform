import type { CalendarEvent } from '@entities/calendarEvent'

/**
 * テスト用のイベントを作る。指定しない項目は適当な値で埋める
 * @param overrides - 上書きする項目
 * @returns イベント
 */
export const makeEvent = (overrides: Partial<CalendarEvent>): CalendarEvent => ({
  id: 'test',
  titleJapanese: 'テスト大会',
  titleEnglish: 'Test Championships',
  category: 'national',
  startDate: '2026-10-30',
  status: 'confirmed',
  sourceUrl: 'https://example.com',
  ...overrides,
})

/**
 * イベントの日本語の大会名を並べる
 * @param events - イベント
 * @returns 大会名の一覧
 */
export const titles = (events: CalendarEvent[]): string[] =>
  events.map((event) => event.titleJapanese)
