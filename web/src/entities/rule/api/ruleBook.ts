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
    japanese: '新体操男子規則',
    english: "Men's Rhythmic Gymnastics Rules",
  },
  chapter: [
    {
      title: {
        japanese: '競技規則',
        english: 'Competition Rules',
      },
      article: [...COMPETITION_ORGANIZATION_ARTICLES, ...COMPETITION_CONDUCT_ARTICLES],
    },
    {
      title: {
        japanese: '採点規則',
        english: 'Code of Points',
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
        japanese: '付録',
        english: 'Appendix',
      },
      article: [
        ...APPENDIX_SPECIAL_RULES_ARTICLES,
        ...APPARATUS_ROUTINES_ARTICLES,
        ...JUDGE_REGULATIONS_ARTICLES,
      ],
    },
    {
      title: { japanese: '主任審判員減点表', english: "Chief Judges' Deduction Tables" },
      article: [],
    },
    { title: { japanese: '審判メモ', english: "Judges' Notes" }, article: [] },
    { title: { japanese: '得点票', english: 'Score Sheets' }, article: [] },
    { title: { japanese: '採点票・減点票', english: 'Scoring and Deduction Sheets' }, article: [] },
  ],
}
