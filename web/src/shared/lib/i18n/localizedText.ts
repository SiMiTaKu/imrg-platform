import type { LocalizedText } from '@shared/model'
import type { SiteLocale } from './translation'

/**
 * 言語ごとの文字列から、表示する言語のものを取る
 * @param text - 言語ごとの文字列
 * @param locale - 表示する言語
 * @returns その言語の文字列。無ければ英語、それも無ければ日本語
 *
 * @remarks
 * 訳が追い付いていない言語でも、空欄にせず読める文字を出す
 */
export const localizedText = (text: LocalizedText, locale: SiteLocale): string =>
  text[locale] ?? text.en ?? text.ja
