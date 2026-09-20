import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 規約のページの枠で使う文言。
 *
 * @remarks
 * 本文（法的な文面）ではなく、目次など「枠」の案内だけを持つ。
 * 本文は各言語の Body コンポーネントが持っているので、ここには入れない
 */
export interface PolicyLabels {
  /** 目次の見出し */
  tableOfContents: string
}

/** 言語ごとの、枠の文言 */
const LABELS: Readonly<Record<SiteLocale, PolicyLabels>> = {
  ja: { tableOfContents: '目次' },
  en: { tableOfContents: 'Contents' },
  zh: { tableOfContents: '目录' },
  ko: { tableOfContents: '목차' },
  es: { tableOfContents: 'Índice' },
  fr: { tableOfContents: 'Sommaire' },
  ru: { tableOfContents: 'Содержание' },
  hi: { tableOfContents: 'विषय-सूची' },
}

/**
 * 表示する言語の、枠の文言を取る
 * @param locale - 表示する言語
 * @returns その言語の文言。未対応の言語は英語のもの
 */
export const policyLabels = (locale: SiteLocale): PolicyLabels => LABELS[locale] ?? LABELS.en
