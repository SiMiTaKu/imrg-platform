import { m } from '$lib/paraglide/messages'
import { getLocale } from '@shared/lib/i18n'

/** 単語を空白で区切らない言語。まとまりをつなぐときに空白を挟まない */
const NO_SPACE_LOCALES: readonly string[] = ['ja', 'zh']

/**
 * 意味のまとまりに分けた文言を、1つの文に戻す
 * @param phrases - まとまりごとの文言
 * @returns つないだ文。単語を空白で区切る言語では、まとまりのあいだに空白を1つ入れる
 *
 * @remarks
 * 画面では、まとまりの途中で折り返さないよう分けて出す。
 * 構造化データのように文のまま渡したいところでは、ここでつなぎ直す
 */
export const joinPhrases = (phrases: readonly (() => string)[]): string =>
  phrases.map((phrase) => phrase()).join(NO_SPACE_LOCALES.includes(getLocale()) ? '' : ' ')

/**
 * 分けて持っている値段を、1つの行に戻す
 * @param prices - まとまりごとの値段
 * @returns 「オンライン 2,000円〜／1日 30,000円〜」のようにつないだ文字列
 */
export const joinPrices = (prices: readonly (() => string)[]): string =>
  prices.map((price) => price()).join(m.top_service_price_separator())
