import type { RuleEntry, RuleItem } from '../model/ruleSource'

/** 見出し・導入・項目の区切りに使う、本文には出てこない印 */
const FIELD_SEPARATOR = ''
/** 項目どうしの区切り */
const ITEM_SEPARATOR = ''
/** 番号と本文の区切り */
const PART_SEPARATOR = ''

/**
 * 項目を、番号と本文をつないだ1本の文字列にする
 * @param items - 項目
 * @returns つないだ文字列
 */
const flattenItems = (items: readonly RuleItem[] = []): string =>
  items
    .map(
      (item) =>
        `${item.label ?? ''}${PART_SEPARATOR}${item.text}${PART_SEPARATOR}${flattenItems(item.items)}`,
    )
    .join(ITEM_SEPARATOR)

/**
 * 条文の中身を、指紋を取るための1本の文字列にする
 * @param entry - 条文
 * @returns 見出し・導入・項目を順につないだ文字列
 */
const flatten = (entry: RuleEntry): string =>
  [entry.title, entry.lead ?? '', flattenItems(entry.items)].join(FIELD_SEPARATOR)

/**
 * 日本語の条文から指紋を取る。
 *
 * @remarks
 * 訳が日本語に追いついているかを見分けるためだけに使う。
 * 中身が1文字でも変われば別の指紋になればよく、暗号としての強さは要らないので
 * FNV-1a（32ビット）を使う。外から何も取り込まずに済む
 *
 * @param entry - 日本語の条文
 * @returns 8文字の指紋
 */
export const fingerprint = (entry: RuleEntry): string => {
  const text = flatten(entry)
  let hash = 0x811c9dc5
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index)
    // FNV の素数 16777619 を掛ける。32ビットに収めるため、シフトの足し算で書く
    hash = (hash + ((hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24))) >>> 0
  }
  return hash.toString(16).padStart(8, '0')
}

/**
 * 訳が日本語に追いついているかを見る
 * @param japanese - 日本語の条文
 * @param translated - 訳した条文。まだ無ければ undefined
 * @returns 追いついていれば true。訳が無い、または日本語が後から変わったときは false
 */
export const isFresh = (japanese: RuleEntry, translated?: RuleEntry): boolean =>
  translated !== undefined && translated.from === fingerprint(japanese)
