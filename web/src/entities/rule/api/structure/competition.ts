import type { RuleNode } from '../../model/ruleSource'

/**
 * 1 競技規則の骨格。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』1〜12ページ。
 * 見出しと本文は `content/ja/competition.ts` に置き、ここは「どこに何があるか」だけを持つ
 */
export const COMPETITION_STRUCTURE: RuleNode<'competition'> = {
  key: 'competition',
  number: '1',
  page: 1,
  endPage: 12,
  children: [
    {
      key: 'competition.general',
      number: '1.1',
      page: 1,
      children: [
        { key: 'competition.general.purpose', number: '1.1.1', page: 1 },
        { key: 'competition.general.amendment', number: '1.1.2', page: 1 },
      ],
    },
    {
      key: 'competition.organization',
      number: '1.2',
      page: 1,
      children: [{ key: 'competition.organization.competitions', number: '1.2.1', page: 1 }],
    },
    {
      key: 'competition.conduct',
      number: '1.3',
      page: 1,
      children: [
        { key: 'competition.conduct.operation', number: '1.3.1', page: 1 },
        { key: 'competition.conduct.entry', number: '1.3.2', page: 1 },
        { key: 'competition.conduct.compulsoryRoutine', number: '1.3.3', page: 2 },
        { key: 'competition.conduct.unwrittenMatters', number: '1.3.4', page: 2 },
        { key: 'competition.conduct.flags', number: '1.3.5', page: 2 },
        { key: 'competition.conduct.judgeSelection', number: '1.3.6', page: 2 },
        { key: 'competition.conduct.competitionDirector', number: '1.3.7', page: 2 },
        { key: 'competition.conduct.officialDuties', number: '1.3.8', page: 2 },
        { key: 'competition.conduct.appealJury', number: '1.3.9', page: 2 },
        { key: 'competition.conduct.rulings', number: '1.3.10', page: 2 },
        { key: 'competition.conduct.scorePublication', number: '1.3.11', page: 2 },
        { key: 'competition.conduct.audioEquipment', number: '1.3.12', page: 2 },
        { key: 'competition.conduct.meetings', number: '1.3.13', page: 3 },
        { key: 'competition.conduct.venue', number: '1.3.14', page: 3 },
        { key: 'competition.conduct.equipment', number: '1.3.15', page: 3 },
      ],
    },
    {
      key: 'competition.event',
      number: '1.4',
      page: 3,
      children: [
        { key: 'competition.event.guidelines', number: '1.4.1', page: 3 },
        { key: 'competition.event.schedule', number: '1.4.2', page: 3 },
        { key: 'competition.event.format', number: '1.4.3', page: 3 },
        { key: 'competition.event.entryRules', number: '1.4.4', page: 5 },
        { key: 'competition.event.musicEquipment', number: '1.4.5', page: 5 },
        { key: 'competition.event.accident', number: '1.4.6', page: 5 },
        { key: 'competition.event.areaAccess', number: '1.4.7', page: 5 },
        { key: 'competition.event.ranking', number: '1.4.8', page: 5 },
        { key: 'competition.event.tiebreak', number: '1.4.9', page: 6 },
      ],
    },
    {
      key: 'competition.awards',
      number: '1.5',
      page: 6,
      children: [
        { key: 'competition.awards.ceremony', number: '1.5.1', page: 6 },
        { key: 'competition.awards.medals', number: '1.5.2', page: 6 },
      ],
    },
    {
      key: 'competition.gymnast',
      number: '1.6',
      page: 7,
      children: [
        { key: 'competition.gymnast.regulations', number: '1.6.1', page: 7 },
        { key: 'competition.gymnast.registration', number: '1.6.2', page: 7 },
        { key: 'competition.gymnast.eligibility', number: '1.6.3', page: 7 },
        { key: 'competition.gymnast.duties', number: '1.6.4', page: 7 },
        { key: 'competition.gymnast.events', number: '1.6.5', page: 7 },
        { key: 'competition.gymnast.attire', number: '1.6.6', page: 7 },
        {
          key: 'competition.gymnast.clubMark',
          number: '1.6.7',
          page: 8,
          figures: ['shapes/club-mark'],
        },
        { key: 'competition.gymnast.discipline', number: '1.6.8', page: 9 },
      ],
    },
    {
      key: 'competition.coach',
      number: '1.7',
      page: 9,
      children: [
        { key: 'competition.coach.manager', number: '1.7.1', page: 9 },
        { key: 'competition.coach.discipline', number: '1.7.2', page: 9 },
        { key: 'competition.coach.violation', number: '1.7.3', page: 9 },
      ],
    },
    {
      key: 'competition.apparatus',
      number: '1.8',
      page: 10,
      children: [
        { key: 'competition.apparatus.equipmentStandards', number: '1.8.1', page: 10 },
        {
          key: 'competition.apparatus.specifications',
          number: '1.8.2',
          page: 10,
          figures: ['syugukikakuhyou'],
        },
        { key: 'competition.apparatus.inspection', number: '1.8.3', page: 10 },
        { key: 'competition.apparatus.spare', number: '1.8.4', page: 10 },
      ],
    },
    {
      key: 'competition.other',
      number: '1.9',
      page: 11,
      children: [
        { key: 'competition.other.routine', number: '1.9.1', page: 11 },
        { key: 'competition.other.bodyElement', number: '1.9.2', page: 11 },
        { key: 'competition.other.tumblingElement', number: '1.9.3', page: 11 },
        { key: 'competition.other.music', number: '1.9.4', page: 11 },
        { key: 'competition.other.score', number: '1.9.5', page: 11 },
        { key: 'competition.other.duration', number: '1.9.6', page: 12 },
        { key: 'competition.other.gymnastCount', number: '1.9.7', page: 12 },
      ],
    },
    {
      key: 'competition.misc',
      number: '1.10',
      page: 12,
      children: [{ key: 'competition.misc.otherIssues', number: '1.10.1', page: 12 }],
    },
  ],
}
