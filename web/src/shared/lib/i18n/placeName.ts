import { COUNTRY_NAMES_ENGLISH, PREFECTURE_NAMES_ENGLISH } from '@shared/config/place'

/** 日本語の地名で引ける英語表記（都道府県と国をまとめたもの） */
const PLACE_NAMES_ENGLISH: Readonly<Record<string, string>> = {
  ...PREFECTURE_NAMES_ENGLISH,
  ...COUNTRY_NAMES_ENGLISH,
}

/**
 * 日本語の地名を英語表記にする
 * @param japanese - 日本語の地名（都道府県名か国名）
 * @returns 英語表記。分からない地名はそのまま返す
 */
export const toEnglishPlaceName = (japanese: string): string =>
  PLACE_NAMES_ENGLISH[japanese] ?? japanese
