import type { RuleBook } from '../model/ruleBook'
import { APPARATUS_ROUTINES_ARTICLES } from './articles/apparatusRoutines'
import {
  CHIEF_JUDGE_DEDUCTION_ARTICLES,
  JUDGE_NOTE_ARTICLES,
  SCORE_SHEET_ARTICLES,
  SCORING_SHEET_ARTICLES,
} from './articles/forms'
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
 * 様式の章（採点票・減点票・審判メモ）は、文字で持ち直した表を出す。
 */
export const RULE_BOOK: RuleBook = {
  title: {
    ja: '新体操男子規則',
    en: "Men's Rhythmic Gymnastics Rules",
    zh: '艺术体操男子规则',
    ko: '리듬체조 남자 규칙',
    es: 'Reglamento de gimnasia rítmica masculina',
    fr: 'Règlement de gymnastique rythmique masculine',
    ru: 'Правила по мужской художественной гимнастике',
    hi: 'पुरुष लयबद्ध जिम्नास्टिक के नियम',
  },
  chapter: [
    {
      title: {
        ja: '競技規則',
        en: 'Competition Rules',
        zh: '比赛规则',
        ko: '경기 규칙',
        es: 'Reglamento de competición',
        fr: 'Règlement des compétitions',
        ru: 'Правила соревнований',
        hi: 'प्रतियोगिता के नियम',
      },
      article: [...COMPETITION_ORGANIZATION_ARTICLES, ...COMPETITION_CONDUCT_ARTICLES],
    },
    {
      title: {
        ja: '採点規則',
        en: 'Code of Points',
        zh: '评分规则',
        ko: '채점 규칙',
        es: 'Código de puntuación',
        fr: 'Code de pointage',
        ru: 'Правила судейства',
        hi: 'अंक निर्धारण के नियम',
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
        zh: '附录',
        ko: '부록',
        es: 'Apéndice',
        fr: 'Annexes',
        ru: 'Приложение',
        hi: 'परिशिष्ट',
      },
      article: [
        ...APPENDIX_SPECIAL_RULES_ARTICLES,
        ...APPARATUS_ROUTINES_ARTICLES,
        ...JUDGE_REGULATIONS_ARTICLES,
      ],
    },
    {
      title: {
        ja: '主任審判員減点表',
        en: "Chief Judges' Deduction Tables",
        zh: '主裁判员扣分表',
        ko: '주임 심판원 감점표',
        es: 'Tablas de penalización del juez principal',
        fr: 'Tableaux de pénalités des juges-arbitres',
        ru: 'Таблицы сбавок старших судей',
        hi: 'मुख्य निर्णायक की कटौती तालिका',
      },
      article: [...CHIEF_JUDGE_DEDUCTION_ARTICLES],
    },
    {
      title: {
        ja: '審判メモ',
        en: "Judges' Notes",
        zh: '裁判笔记',
        ko: '심판 메모',
        es: 'Notas de los jueces',
        fr: 'Notes des juges',
        ru: 'Заметки судьи',
        hi: 'निर्णायक की टिप्पणी',
      },
      article: [...JUDGE_NOTE_ARTICLES],
    },
    {
      title: {
        ja: '得点票',
        en: 'Score Sheets',
        zh: '得分表',
        ko: '득점표',
        es: 'Hojas de puntuación',
        fr: 'Feuilles de notes',
        ru: 'Оценочные листы',
        hi: 'अंक पत्रक',
      },
      article: [...SCORE_SHEET_ARTICLES],
    },
    {
      title: {
        ja: '採点票・減点票',
        en: 'Scoring and Deduction Sheets',
        zh: '评分表、扣分表',
        ko: '채점표·감점표',
        es: 'Hojas de puntuación y de penalización',
        fr: 'Feuilles de notation et de pénalités',
        ru: 'Листы оценок и сбавок',
        hi: 'अंक निर्धारण और कटौती पत्रक',
      },
      article: [...SCORING_SHEET_ARTICLES],
    },
  ],
}
