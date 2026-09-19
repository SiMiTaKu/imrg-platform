import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 言語ごとの文字列。
 *
 * @remarks
 * キーは言語コード（`ja`・`en`・`zh` など）。日本語は必ず持つ。
 * 訳が無い言語は、英語 → 日本語の順で補って出す（`localizedText`）
 */
export type LocalizedText = { ja: string } & Partial<Record<SiteLocale, string>>

/**
 * 日本語と英語を必ず持つ文字列。
 *
 * @remarks
 * 大会名のように、英語を必ず用意する項目に使う
 */
export type TranslatedText = LocalizedText & { en: string }
