import type { Image } from '@shared/model'

/**
 * 規則集の図（画像）。代替テキストを日本語と英語で持つ
 */
export type RuleImage = Image & {
  /** 英語の代替テキスト */
  altEnglish: string
}

/**
 * 条項の中の小項。表示するときは 1 つの条として番号を振る
 */
export interface RuleBlock {
  /** 見出し */
  title: string
  /** 英語の見出し */
  titleEnglish: string
  /** 本文 */
  element: string
  /** 英語の本文 */
  elementEnglish: string
  /** 図 */
  image?: RuleImage[]
}

/**
 * 大項の中の条項。小項を持たないときは、条項そのものが 1 つの条になる
 */
export interface RuleSection {
  /** 見出し */
  title: string
  /** 英語の見出し */
  titleEnglish: string
  /** 本文（小項を持たないときだけ使う） */
  content?: string
  /** 英語の本文 */
  contentEnglish?: string
  /** 小項 */
  block?: RuleBlock[]
  /** 図 */
  image?: RuleImage[]
}

/**
 * 章の中の大項。条項の一覧を持つ
 */
export interface RuleArticle {
  /** 見出し */
  title: string
  /** 英語の見出し */
  titleEnglish: string
  /** 条項 */
  section: RuleSection[]
}

/**
 * 規則集の章。大項の一覧を持つ
 */
export interface RuleChapter {
  /** 見出し */
  title: string
  /** 英語の見出し */
  titleEnglish: string
  /** 大項 */
  article: RuleArticle[]
}

/**
 * 規則集全体。章の一覧を持つ
 */
export interface RuleBook {
  /** 題名 */
  title: string
  /** 英語の題名 */
  titleEnglish: string
  /** 章 */
  chapter: RuleChapter[]
}

/**
 * 表示する言語に絞った小項
 */
export interface LocalizedRuleBlock {
  /** 見出し */
  title: string
  /** 本文 */
  element: string
  /** 図 */
  image: Image[]
}

/**
 * 表示する言語に絞った条項
 */
export interface LocalizedRuleSection {
  /** 見出し */
  title: string
  /** 本文（小項を持たないときだけ使う） */
  content: string
  /** 小項 */
  block: LocalizedRuleBlock[]
  /** 図 */
  image: Image[]
}

/**
 * 表示する言語に絞った大項
 */
export interface LocalizedRuleArticle {
  /** 見出し */
  title: string
  /** 条項 */
  section: LocalizedRuleSection[]
}

/**
 * 表示する言語に絞った章
 */
export interface LocalizedRuleChapter {
  /** 見出し */
  title: string
  /** 大項 */
  article: LocalizedRuleArticle[]
}

/**
 * 表示する言語に絞った規則集
 */
export interface LocalizedRuleBook {
  /** 題名 */
  title: string
  /** 章 */
  chapter: LocalizedRuleChapter[]
}
