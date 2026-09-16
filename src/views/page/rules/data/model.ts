import type { Image } from '$lib/common/image'

/**
 * 規則集全体。章（chapter）の一覧を持つ
 */
export interface RuleBook {
  title: string
  chapter: Chapter[]
}

/**
 * 規則集の章。大項（article）の一覧を持つ
 */
export interface Chapter {
  title: string
  article: Article[]
}

/**
 * 章の中の大項。条項（section）の一覧を持つ
 */
export interface Article {
  title: string
  section: Section[]
}

/**
 * 大項の中の条項。本文・小項（block）・画像を持てる
 */
export interface Section {
  title: string
  content?: string
  block?: Block[]
  image?: Image[]
}

/**
 * 条項の中の小項
 */
export interface Block {
  title: string
  element: string
  image?: Image[]
}
