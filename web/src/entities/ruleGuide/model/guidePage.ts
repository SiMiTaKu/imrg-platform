import type { GuideBlock } from './guideBlock'
import type { GuideKey } from './guideKey'

/**
 * ページの断り書き。
 *
 * @remarks
 * 「個人が作ったものである」「正式な判断は公式の規則集による」の2つを出す。
 * いまは1種類しかないが、**省略できないことが大事**なので型にしてある。
 * 委員会へ伝えた約束（`docs/rules-guide.md` の3）を、書き忘れで破らないため
 */
export type GuideDisclaimer = 'individual-work'

/**
 * 解説のページ1枚。
 *
 * @remarks
 * `lead` は**最初の3行で言い切る答え**。検索から来た人は答えだけを欲しいので、
 * 前置きを書かずにここで結論を出す。
 *
 * `disclaimer` は省略できない。書き忘れると型で落ちる
 */
export interface GuidePage {
  /** このページの鍵 */
  key: GuideKey
  /** 見出し。「隊形移動とは」のように、探されている言葉に寄せる */
  title: string
  /** 最初の3行の答え。ここだけ読んで帰る人のために書く */
  lead: string
  /** 本文 */
  blocks: readonly GuideBlock[]
  /** 断り書き。省略できない */
  disclaimer: GuideDisclaimer
  /**
   * 訳したときの日本語の指紋。日本語以外の言語だけが持つ。
   *
   * @remarks
   * いまの日本語の指紋と食い違えば、日本語が後から変わったのに訳が追いついていないと分かる。
   * 使うのは多言語へ広げるとき（TODO 7-8）
   */
  from?: string
}

/**
 * 言語ごとの本文。鍵からページを引く。
 *
 * @remarks
 * 訳の途中の言語があるので、そろっていなくてもよい形にしてある
 */
export type GuideContent = Readonly<Partial<Record<GuideKey, GuidePage>>>
