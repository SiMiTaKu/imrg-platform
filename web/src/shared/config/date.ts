/**
 * 曜日。日曜始まり。
 *
 * @remarks
 * `index` は JavaScript の `Date#getDay()` と同じ 0（日曜）〜6（土曜）。
 * 表記は言語ごとに持つ（`weekdayName` で表示中の言語のものを取る）
 */
export const Weekday = {
  SUNDAY: { index: 0, japanese: '日', english: 'Sun' },
  MONDAY: { index: 1, japanese: '月', english: 'Mon' },
  TUESDAY: { index: 2, japanese: '火', english: 'Tue' },
  WEDNESDAY: { index: 3, japanese: '水', english: 'Wed' },
  THURSDAY: { index: 4, japanese: '木', english: 'Thu' },
  FRIDAY: { index: 5, japanese: '金', english: 'Fri' },
  SATURDAY: { index: 6, japanese: '土', english: 'Sat' },
} as const

/**
 * 月。
 *
 * @remarks
 * `number` は 1〜12。英語の短い表記（"Oct" など）は `english` の先頭3文字を使う
 */
export const Month = {
  JANUARY: { number: 1, english: 'January' },
  FEBRUARY: { number: 2, english: 'February' },
  MARCH: { number: 3, english: 'March' },
  APRIL: { number: 4, english: 'April' },
  MAY: { number: 5, english: 'May' },
  JUNE: { number: 6, english: 'June' },
  JULY: { number: 7, english: 'July' },
  AUGUST: { number: 8, english: 'August' },
  SEPTEMBER: { number: 9, english: 'September' },
  OCTOBER: { number: 10, english: 'October' },
  NOVEMBER: { number: 11, english: 'November' },
  DECEMBER: { number: 12, english: 'December' },
} as const

/** 曜日を日曜始まりの順に並べたもの（index で引ける） */
export const WEEKDAYS = Object.values(Weekday)

/** 月を1月から順に並べたもの（`月 - 1` で引ける） */
export const MONTHS = Object.values(Month)
