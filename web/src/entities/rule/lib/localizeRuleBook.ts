import type { Image, TranslatedText } from '@shared/model'
import { type SiteLocale, localizedText } from '@shared/lib/i18n'
import type {
  LocalizedRuleBook,
  LocalizedRuleSection,
  RuleBook,
  RuleImage,
  RuleSection,
} from '../model/ruleBook'

/**
 * 規則集を、表示する言語の文字列だけにする
 * @param ruleBook - 日本語と英語を持つ規則集
 * @param locale - 表示する言語
 * @returns 表示する言語に絞った規則集
 */
export const localizeRuleBook = (ruleBook: RuleBook, locale: SiteLocale): LocalizedRuleBook => {
  /**
   * 言語に合う文字列を選ぶ
   * @param text - 言語ごとの文字列
   * @returns 表示する言語の文字列。訳が無ければ英語、それも無ければ日本語
   */
  const pick = (text?: TranslatedText): string => (text ? localizedText(text, locale) : '')

  /**
   * 図の代替テキストを言語に合わせる
   * @param images - 図
   * @returns 表示する言語の代替テキストを持つ図
   */
  const localizeImages = (images: RuleImage[] = []): Image[] =>
    images.map((image) => ({ src: image.src, alt: pick(image.alt) }))

  /**
   * 条項を言語に合わせる
   * @param section - 条項
   * @returns 表示する言語に絞った条項
   */
  const localizeSection = (section: RuleSection): LocalizedRuleSection => ({
    title: pick(section.title),
    content: pick(section.content),
    image: localizeImages(section.image),
    block: (section.block ?? []).map((block) => ({
      title: pick(block.title),
      element: pick(block.element),
      image: localizeImages(block.image),
    })),
  })

  return {
    title: pick(ruleBook.title),
    chapter: ruleBook.chapter.map((chapter) => ({
      title: pick(chapter.title),
      article: chapter.article.map((article) => ({
        title: pick(article.title),
        section: article.section.map(localizeSection),
      })),
    })),
  }
}
