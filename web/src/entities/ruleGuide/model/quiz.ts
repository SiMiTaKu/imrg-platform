import type { GuideKey } from './guideKey'

/**
 * 理解度チェックの1問。選択式。
 *
 * @remarks
 * 問題は、その章のページに書いてあることからだけ出す。
 * ページに無いことを問うと、読んでも解けない問題になる
 */
export interface GuideQuizQuestion {
  /** 問い */
  question: string
  /** 選択肢。2つ以上 */
  choices: readonly string[]
  /** 正解の選択肢の番号。0から数える */
  answer: number
  /** 答えたあとに出す解説 */
  explanation: string
  /** 解説のくわしいページ。答えを確かめに戻れるようにする */
  from: GuideKey
}

/**
 * 言語ごとの理解度チェック。章のいちばん上の鍵から引く。
 *
 * @remarks
 * 訳の途中の言語があるので、そろっていなくてもよい形にしてある
 */
export type GuideQuiz = Readonly<Partial<Record<GuideKey, readonly GuideQuizQuestion[]>>>
