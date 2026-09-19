/**
 * 曜日。日曜始まり。
 *
 * @remarks
 * `index` は JavaScript の `Date#getDay()` と同じ 0（日曜）〜6（土曜）。
 * 表記は言語ごとに持つ（`weekdayName` で表示中の言語のものを取る）
 */
export const Weekday = {
  SUNDAY: { index: 0, ja: '日', en: 'Sun' },
  MONDAY: { index: 1, ja: '月', en: 'Mon' },
  TUESDAY: { index: 2, ja: '火', en: 'Tue' },
  WEDNESDAY: { index: 3, ja: '水', en: 'Wed' },
  THURSDAY: { index: 4, ja: '木', en: 'Thu' },
  FRIDAY: { index: 5, ja: '金', en: 'Fri' },
  SATURDAY: { index: 6, ja: '土', en: 'Sat' },
} as const

/**
 * 月。
 *
 * @remarks
 * `number` は 1〜12。英語の短い表記（"Oct" など）は `english` の先頭3文字を使う
 */
export const Month = {
  JANUARY: { number: 1, en: 'January' },
  FEBRUARY: { number: 2, en: 'February' },
  MARCH: { number: 3, en: 'March' },
  APRIL: { number: 4, en: 'April' },
  MAY: { number: 5, en: 'May' },
  JUNE: { number: 6, en: 'June' },
  JULY: { number: 7, en: 'July' },
  AUGUST: { number: 8, en: 'August' },
  SEPTEMBER: { number: 9, en: 'September' },
  OCTOBER: { number: 10, en: 'October' },
  NOVEMBER: { number: 11, en: 'November' },
  DECEMBER: { number: 12, en: 'December' },
} as const

/** 曜日を日曜始まりの順に並べたもの（index で引ける） */
export const WEEKDAYS = Object.values(Weekday)

/** 月を1月から順に並べたもの（`月 - 1` で引ける） */
export const MONTHS = Object.values(Month)
