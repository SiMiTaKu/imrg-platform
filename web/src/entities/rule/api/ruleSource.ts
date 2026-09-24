import type { SiteLocale } from '@shared/lib/i18n'
import type { LocalizedRuleBook } from '../model/ruleBook'
import type { RuleContent } from '../model/ruleSource'
import { buildRuleBook } from '../lib/buildRuleBook'
import { RULE_JA } from './content/ja'
import { RULE_STRUCTURE } from './structure'

/**
 * 規則集の題名。冊子の表紙のとおり。
 *
 * @remarks
 * 表紙（`A-01`）で確かめた正式名は『新体操男子規則 2025年版』、
 * 発行は公益財団法人日本体操協会
 */
const TITLE: Readonly<Record<SiteLocale, string>> = {
  ja: '新体操男子規則',
  en: "Men's Rhythmic Gymnastics Rules",
  zh: '男子艺术体操规则',
  ko: '남자 리듬체조 규칙',
  es: 'Reglamento de Gimnasia Rítmica Masculina',
  fr: 'Règlement de gymnastique rythmique masculine',
  ru: 'Правила мужской художественной гимнастики',
  hi: 'पुरुष लयबद्ध जिम्नास्टिक नियम',
}

/**
 * 言語ごとの本文。
 *
 * @remarks
 * いまは日本語だけ。ほかの言語は、日本語が固まってから足す。
 * 訳が無い言語は日本語がそのまま出る（`buildRuleBook` が落とす）
 */
const CONTENT = {
  ja: RULE_JA,
  en: {},
  zh: {},
  ko: {},
  es: {},
  fr: {},
  ru: {},
  hi: {},
} as const satisfies Readonly<Record<SiteLocale, RuleContent>>

/**
 * 表示する言語の規則集を組み立てる
 * @param locale - 表示する言語
 * @returns 表示する言語に絞った規則集
 */
export const loadRuleBook = (locale: SiteLocale): LocalizedRuleBook =>
  buildRuleBook(RULE_STRUCTURE, CONTENT, locale, TITLE[locale])
