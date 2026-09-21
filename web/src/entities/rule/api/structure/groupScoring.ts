import type { RuleNode } from '../../model/ruleSource'

/**
 * 3 採点規則 3.4 団体競技（自由演技）の骨格。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』25〜36ページ。
 * 冊子は「採点規則 3.4.2.3 転回系の数え方」のように4けたで各項を指し、
 * 改ページ後の見出しも「3.4.4.5」「3.4.6.4」と印刷されているので、`number` もそれに合わせた
 */
export const GROUP_SCORING_STRUCTURE: RuleNode[] = [
  {
    key: 'scoring.group',
    number: '3.4',
    page: 25,
    children: [
      {
        key: 'scoring.group.composition',
        number: '3.4.1',
        page: 25,
      },
      {
        key: 'scoring.group.requirements',
        number: '3.4.2',
        page: 25,
        children: [
          {
            key: 'scoring.group.requirements.freeHand',
            number: '3.4.2.1',
            page: 25,
            figures: ['(BM)requirement'],
          },
          {
            key: 'scoring.group.requirements.acrobatic',
            number: '3.4.2.2',
            page: 25,
            figures: ['(AM)requirement'],
          },
          {
            key: 'scoring.group.requirements.acrobaticCount',
            number: '3.4.2.3',
            page: 25,
          },
          {
            key: 'scoring.group.requirements.acrobaticTypes',
            number: '3.4.2.4',
            page: 26,
          },
          {
            key: 'scoring.group.requirements.formation',
            number: '3.4.2.5',
            page: 26,
          },
          {
            key: 'scoring.group.requirements.start',
            number: '3.4.2.6',
            page: 26,
          },
          {
            key: 'scoring.group.requirements.finish',
            number: '3.4.2.7',
            page: 26,
          },
          {
            key: 'scoring.group.requirements.music',
            number: '3.4.2.8',
            page: 26,
          },
        ],
      },
      {
        key: 'scoring.group.scoreAllocation',
        number: '3.4.3',
        page: 27,
        figures: ['SK(D)group', 'SK(E)group'],
      },
      {
        key: 'scoring.group.difficulty',
        number: '3.4.4',
        page: 28,
        children: [
          {
            key: 'scoring.group.difficulty.value',
            number: '3.4.4.2',
            page: 28,
          },
          {
            key: 'scoring.group.difficulty.freeHand',
            number: '3.4.4.3',
            page: 28,
          },
          {
            key: 'scoring.group.difficulty.acrobatic',
            number: '3.4.4.4',
            page: 28,
          },
          {
            key: 'scoring.group.difficulty.bonus',
            number: '3.4.4.5',
            page: 30,
          },
        ],
      },
      {
        key: 'scoring.group.artistry',
        number: '3.4.5',
        page: 31,
        children: [
          {
            key: 'scoring.group.artistry.variety',
            number: '3.4.5.1',
            page: 31,
          },
          {
            key: 'scoring.group.artistry.expression',
            number: '3.4.5.2',
            page: 31,
          },
          {
            key: 'scoring.group.artistry.other',
            number: '3.4.5.3',
            page: 31,
          },
          {
            key: 'scoring.group.artistry.deductions',
            number: '3.4.5.4',
            page: 33,
            figures: ['(D)kettenhyou'],
          },
        ],
      },
      {
        key: 'scoring.group.execution',
        number: '3.4.6',
        page: 34,
        children: [
          {
            key: 'scoring.group.execution.impression',
            number: '3.4.6.1',
            page: 34,
          },
          {
            key: 'scoring.group.execution.bodyTechnique',
            number: '3.4.6.2',
            page: 34,
          },
          {
            key: 'scoring.group.execution.harmony',
            number: '3.4.6.3',
            page: 34,
          },
          {
            key: 'scoring.group.execution.interruption',
            number: '3.4.6.4',
            page: 35,
          },
          {
            key: 'scoring.group.execution.prohibition',
            number: '3.4.6.5',
            page: 35,
          },
          {
            key: 'scoring.group.execution.deductions',
            number: '3.4.6.6',
            page: 35,
            figures: ['(E)kettenhyou1', '(E)kettenhyou2', '(E)kettenhyou3'],
          },
        ],
      },
    ],
  },
]
