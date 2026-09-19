import type { RuleBook } from '../model/ruleBook'
import { APPARATUS_ROUTINES_ARTICLES } from './articles/apparatusRoutines'
import { APPENDIX_SPECIAL_RULES_ARTICLES } from './articles/appendixSpecialRules'
import { COMPETITION_CONDUCT_ARTICLES } from './articles/competitionConduct'
import { COMPETITION_ORGANIZATION_ARTICLES } from './articles/competitionOrganization'
import { DIFFICULTY_ARTICLES } from './articles/difficulty'
import { GROUP_SCORING_ARTICLES } from './articles/groupScoring'
import { INDIVIDUAL_SCORING_ARTICLES } from './articles/individualScoring'
import { JUDGE_REGULATIONS_ARTICLES } from './articles/judgeRegulations'
import { SCORING_GENERAL_ARTICLES } from './articles/scoringGeneral'

/**
 * 男子新体操の規則集。
 *
 * @remarks
 * 本文は量が多いので、文言ファイル（messages）には置かず、項目ごとに日本語と英語を持たせている。
 * 大項は、章ごと・分量ごとに `articles/` のファイルへ分けている。
 * 中身がまだ無い章（主任審判員減点表など）も、見出しだけ載せている。
 */
export const RULE_BOOK: RuleBook = {
  title: {
    ja: '新体操男子規則',
    en: "Men's Rhythmic Gymnastics Rules",
  },
  chapter: [
    {
      title: {
        ja: '競技規則',
        en: 'Competition Rules',
      },
      article: [...COMPETITION_ORGANIZATION_ARTICLES, ...COMPETITION_CONDUCT_ARTICLES],
    },
    {
      title: {
        ja: '採点規則',
        en: 'Code of Points',
      },
      article: [
        ...SCORING_GENERAL_ARTICLES,
        ...GROUP_SCORING_ARTICLES,
        ...INDIVIDUAL_SCORING_ARTICLES,
        ...DIFFICULTY_ARTICLES,
      ],
    },
    {
      title: {
        ja: '付録',
        en: 'Appendix',
      },
      article: [
        ...APPENDIX_SPECIAL_RULES_ARTICLES,
        ...APPARATUS_ROUTINES_ARTICLES,
        ...JUDGE_REGULATIONS_ARTICLES,
      ],
    },
    {
      title: { ja: '主任審判員減点表', en: "Chief Judges' Deduction Tables" },
      article: [],
    },
    { title: { ja: '審判メモ', en: "Judges' Notes" }, article: [] },
    { title: { ja: '得点票', en: 'Score Sheets' }, article: [] },
    { title: { ja: '採点票・減点票', en: 'Scoring and Deduction Sheets' }, article: [] },
  ],
}
