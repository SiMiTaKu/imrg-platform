/**
 * 日本語と英語の両方がある文字列
 */
export interface TranslatedText {
  /** 日本語 */
  japanese: string
  /** 英語 */
  english: string
}

/**
 * 日本語があり、英語は無いこともある文字列。
 *
 * @remarks
 * 英語が無いときは、英語ページでも日本語を出す（会場名など、空欄にするより読めたほうがよいもの）
 */
export interface LocalizedText {
  /** 日本語 */
  japanese: string
  /** 英語。訳が無ければ省略する */
  english?: string
}
