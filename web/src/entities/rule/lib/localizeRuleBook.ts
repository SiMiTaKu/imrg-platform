import type { Image } from '@shared/model'
import { BASE_LOCALE, type SiteLocale } from '@shared/lib/i18n'
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
  const isBase = locale === BASE_LOCALE

  /**
   * 言語に合う方の文字列を選ぶ
   * @param ja - 日本語
   * @param en - 英語
   * @returns 表示する言語の文字列
   */
  const pick = (ja: string, en: string): string => (isBase ? ja : en)

  /**
   * 図の代替テキストを言語に合わせる
   * @param images - 図
   * @returns 表示する言語の代替テキストを持つ図
   */
  const localizeImages = (images: RuleImage[] = []): Image[] =>
    images.map((image) => ({ src: image.src, alt: pick(image.alt, image.altEnglish) }))

  /**
   * 条項を言語に合わせる
   * @param section - 条項
   * @returns 表示する言語に絞った条項
   */
  const localizeSection = (section: RuleSection): LocalizedRuleSection => ({
    title: pick(section.title, section.titleEnglish),
    content: pick(section.content ?? '', section.contentEnglish ?? ''),
    image: localizeImages(section.image),
    block: (section.block ?? []).map((block) => ({
      title: pick(block.title, block.titleEnglish),
      element: pick(block.element, block.elementEnglish),
      image: localizeImages(block.image),
    })),
  })

  return {
    title: pick(ruleBook.title, ruleBook.titleEnglish),
    chapter: ruleBook.chapter.map((chapter) => ({
      title: pick(chapter.title, chapter.titleEnglish),
      article: chapter.article.map((article) => ({
        title: pick(article.title, article.titleEnglish),
        section: article.section.map(localizeSection),
      })),
    })),
  }
}
