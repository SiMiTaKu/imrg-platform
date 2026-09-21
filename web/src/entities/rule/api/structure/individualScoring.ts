import type { RuleNode } from '../../model/ruleSource'

/**
 * 3 採点規則 3.5 個人競技／3.6 難度表／3.7 採点票等 の骨格。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』の 37〜62ページ。
 * `figures` の鍵は `entities/rule/api/tables` の `imageSource` から
 * `/images/rules/` と `.png` を取り除いたもの。
 *
 * 3.6.3 図解（52〜60ページ）は人の動きの絵が並ぶだけで本文が無い。
 * その絵はまだ画像として取り込んでいないため、節だけを置いて `figures` は付けていない
 */
export const INDIVIDUAL_SCORING_STRUCTURE: RuleNode[] = [
  {
    key: 'scoring.individual',
    number: '3.5',
    page: 37,
    children: [
      { key: 'scoring.individual.composition', number: '3.5.1', page: 37 },
      { key: 'scoring.individual.requirements', number: '3.5.2', page: 37 },
      { key: 'scoring.individual.apparatusHandling', number: '3.5.3', page: 38 },
      {
        key: 'scoring.individual.scoreAllocation',
        number: '3.5.4',
        page: 39,
        figures: ['SK(D)single', 'SK(E)single'],
      },
      {
        key: 'scoring.individual.difficulty',
        number: '3.5.5',
        page: 40,
        figures: ['tossdifficulties'],
      },
      {
        key: 'scoring.individual.artistry',
        number: '3.5.6',
        page: 42,
        figures: ['(D)kettenhyou(S)'],
      },
      {
        key: 'scoring.individual.execution',
        number: '3.5.7',
        page: 45,
        figures: ['(E)kettenhyou(S)'],
      },
    ],
  },
  {
    key: 'scoring.difficultyTable',
    number: '3.6',
    page: 48,
    children: [
      {
        key: 'scoring.difficultyTable.freeHand',
        number: '3.6.1',
        page: 48,
        children: [
          {
            key: 'scoring.difficultyTable.freeHand.jump',
            number: '3.6.1.1',
            page: 48,
            figures: ['jumpdifficulties'],
          },
          {
            key: 'scoring.difficultyTable.freeHand.balance',
            number: '3.6.1.2',
            page: 48,
            figures: ['balansedifficulties'],
          },
          {
            key: 'scoring.difficultyTable.freeHand.handstand',
            number: '3.6.1.3',
            page: 48,
            figures: ['handstanddifficulties'],
          },
          {
            key: 'scoring.difficultyTable.freeHand.flexibility',
            number: '3.6.1.4',
            page: 49,
            figures: ['stretchdifficulties'],
          },
        ],
      },
      {
        key: 'scoring.difficultyTable.acrobatic',
        number: '3.6.2',
        page: 49,
        children: [
          {
            key: 'scoring.difficultyTable.acrobatic.forward',
            number: '3.6.2.1',
            page: 49,
            figures: ['forwardjumpdifficulties'],
          },
          {
            key: 'scoring.difficultyTable.acrobatic.backward',
            number: '3.6.2.2',
            page: 49,
            figures: ['jumpturndifficulties', 'backwardjumpdifficulties'],
          },
          {
            key: 'scoring.difficultyTable.acrobatic.sideward',
            number: '3.6.2.3',
            page: 50,
            figures: ['sidewardjumpdifficulties'],
          },
          {
            key: 'scoring.difficultyTable.acrobatic.saltoSeries',
            number: '3.6.2.4',
            page: 50,
            figures: ['combinationdifficulties'],
          },
          {
            key: 'scoring.difficultyTable.acrobatic.connectedSeries',
            number: '3.6.2.5',
            page: 51,
            figures: ['combinationdifficulties2'],
          },
        ],
      },
      {
        key: 'scoring.difficultyTable.illustrations',
        number: '3.6.3',
        page: 52,
        children: [
          {
            key: 'scoring.difficultyTable.illustrations.freeHand',
            number: '3.6.3.1',
            page: 52,
            children: [
              {
                key: 'scoring.difficultyTable.illustrations.freeHand.jump',
                number: '3.6.3.1.1',
                page: 52,
              },
              {
                key: 'scoring.difficultyTable.illustrations.freeHand.balance',
                number: '3.6.3.1.2',
                page: 53,
              },
              {
                key: 'scoring.difficultyTable.illustrations.freeHand.handstand',
                number: '3.6.3.1.3',
                page: 53,
              },
              {
                key: 'scoring.difficultyTable.illustrations.freeHand.flexibility',
                number: '3.6.3.1.4',
                page: 54,
              },
            ],
          },
          {
            key: 'scoring.difficultyTable.illustrations.acrobatic',
            number: '3.6.3.2',
            page: 55,
            children: [
              {
                key: 'scoring.difficultyTable.illustrations.acrobatic.forward',
                number: '3.6.3.2.1',
                page: 55,
              },
              {
                key: 'scoring.difficultyTable.illustrations.acrobatic.backward',
                number: '3.6.3.2.2',
                page: 56,
              },
              {
                key: 'scoring.difficultyTable.illustrations.acrobatic.sideward',
                number: '3.6.3.2.3',
                page: 58,
              },
              {
                key: 'scoring.difficultyTable.illustrations.acrobatic.saltoSeries',
                number: '3.6.3.2.4',
                page: 58,
              },
              {
                key: 'scoring.difficultyTable.illustrations.acrobatic.connectedSeries',
                number: '3.6.3.2.5',
                page: 59,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'scoring.forms',
    number: '3.7',
    page: 61,
    figures: [
      'forms/score-d',
      'forms/score-a',
      'forms/score-e',
      'forms/score-line-time',
      'forms/chief-judge-deduction',
    ],
  },
]
