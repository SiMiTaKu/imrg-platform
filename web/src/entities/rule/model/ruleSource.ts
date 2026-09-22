import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 規則の条文を指す鍵。
 *
 * @remarks
 * `競技規則.総則.本規則の指針` のような、点でつないだ英字の名前にする。
 * 骨格（どこに何があるか）と本文（何が書いてあるか）を、この鍵でつなぐ
 */
export type RuleKey = string

/**
 * 番号の付いた項目。冊子の「1」「（1）」にあたる。
 *
 * @remarks
 * 入れ子にできる。冊子では「1 国民スポーツ大会」の下に、番号の無い説明が続く形がある
 */
export interface RuleItem {
  /** 冊子に印刷されている番号。「1」「（1）」など。番号が無い段落では省く */
  label?: string
  /** 本文 */
  text: string
  /** さらに中に入る項目 */
  items?: RuleItem[]
}

/**
 * 1つの条文の中身。
 *
 * @remarks
 * 日本語を正とする。ほかの言語は `from` に「訳したときの日本語の指紋」を持ち、
 * 日本語が後から変わったかどうかを機械で見分けられるようにする
 */
export interface RuleEntry {
  /** 見出し */
  title: string
  /** 番号の付いた項目の前に置く、導入の文。無い条文も多い */
  lead?: string
  /** 番号の付いた項目 */
  items?: RuleItem[]
  /**
   * 訳したときの日本語の指紋。日本語以外の言語だけが持つ。
   *
   * @remarks
   * いまの日本語の指紋と食い違えば「日本語が後から変わったのに訳が追いついていない」と分かる。
   * その訳は画面に出さず、英語（無ければ日本語）に落とす
   */
  from?: string
}

/** 言語ごとの本文。鍵から条文の中身を引く */
export type RuleContent = Readonly<Record<RuleKey, RuleEntry>>

/**
 * 図や表の置き場所。
 *
 * @remarks
 * 文字列だけを書くと、その節点の本文をすべて出したあとに続けて出す。
 * 冊子では本文の途中に表が挟まっていることがあるので、そのときは
 * `after` に手前の行の書き出しを入れて、その行の直後に差し込む。
 * 本文のいちばん上に置きたいときは `before` に、すぐ下に来る行の書き出しを入れる
 */
export type RuleFigureRef =
  | string
  | { readonly figure: string; readonly after: string }
  | { readonly figure: string; readonly before: string }

/**
 * 骨格の節点。章・節・項のどれにもなる。
 *
 * @remarks
 * 見出しも本文も持たない。「どこに何があるか」と「冊子の何ページか」だけを持つ
 */
export interface RuleNode {
  /** 本文を引くための鍵 */
  key: RuleKey
  /** 冊子に印刷されている番号。「1」「1.1」「1.1.1」など */
  number: string
  /** 冊子のページ。出典をたどれるようにする */
  page: number
  /**
   * 冊子で、この節点の中身が終わるページ。
   *
   * @remarks
   * 章の出典を出すときに使う。`page` は始まりのページなので、下にぶら下がる節点の
   * 最大値を取っても、最後の節点が続いているぶんだけ短く出てしまう
   */
  endPage?: number
  /**
   * この節点に載せる図や表。
   *
   * @remarks
   * 鍵は `entities/rule/api/tables` の `imageSource` から `/images/rules/` と
   * `.png` を取り除いたもの。文字列で書くと本文のいちばん後ろに出る。
   * 冊子のように本文の途中へ差し込みたいときは `{ figure, after }` の形で書き、
   * `after` にその図の手前に来る行の書き出しを入れる
   */
  figures?: readonly RuleFigureRef[]
  /** 中に入る節点 */
  children?: readonly RuleNode[]
}

/** 規則集の骨格。章の一覧 */
export type RuleStructure = readonly RuleNode[]

/** 訳がどこまで追いついているかの見立て */
export interface TranslationStatus {
  /** 言語 */
  locale: SiteLocale
  /** 日本語と同じ指紋を持つ、追いついている条文の鍵 */
  fresh: readonly RuleKey[]
  /** 日本語が後から変わった条文の鍵 */
  stale: readonly RuleKey[]
  /** まだ訳していない条文の鍵 */
  missing: readonly RuleKey[]
}
