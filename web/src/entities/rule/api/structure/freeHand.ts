import type { RuleNode } from '../../model/ruleSource'

/**
 * 3.8 個人徒手の骨格（63〜79ページ）。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』。
 *
 * 冊子の番号の振り方は節によって揺れている。
 * 3.8.5 と 3.8.6 の中は「1」「3」「4」のような単独の番号だが、
 * 3.8.5.2（要求要素と数）と 3.8.8.4（実施欠点表）だけは節番号で印刷されている。
 * `number` は冊子に印刷されているとおりに持たせたので、兄弟どうしで桁が揃わない。
 *
 * 3.8.9 難度表（図解）は人の動きの線画が並ぶだけの6ページで、本文は無い。
 * 線画は文字にできないので、枠に印刷されている通し番号・技名・難度だけを
 * `api/tables/freeHandFigures.ts` に写し、節ごとの `figures` からつないである
 */
export const FREE_HAND_STRUCTURE: RuleNode[] = [
  {
    key: 'scoring.freeHand',
    number: '3.8',
    page: 63,
    children: [
      { key: 'scoring.freeHand.rules', number: '3.8.1', page: 63 },
      {
        key: 'scoring.freeHand.allocation',
        number: '3.8.2',
        page: 63,
        figures: ['trees/free-hand-allocation'],
      },
      {
        key: 'scoring.freeHand.judges',
        number: '3.8.3',
        page: 64,
        figures: ['tables/free-hand-judges'],
      },
      {
        key: 'scoring.freeHand.judgeRoles',
        number: '3.8.4',
        page: 64,
        figures: ['seats/free-hand-judge-seats'],
      },
      {
        key: 'scoring.freeHand.composition',
        number: '3.8.5',
        page: 64,
        children: [
          { key: 'scoring.freeHand.composition.routine', number: '1', page: 64 },
          {
            key: 'scoring.freeHand.composition.requirements',
            number: '3.8.5.2',
            page: 65,
            figures: ['tables/free-hand-requirements', 'tables/free-hand-combined'],
          },
          { key: 'scoring.freeHand.composition.acrobatic', number: '3', page: 66 },
        ],
      },
      {
        key: 'scoring.freeHand.difficulty',
        number: '3.8.6',
        page: 66,
        children: [
          {
            // 67ページの「4 難度表」は、78ページの「D採点表」と同じ中身の表
            key: 'scoring.freeHand.difficulty.table',
            number: '4',
            page: 67,
            figures: ['tables/free-hand-difficulty'],
          },
        ],
      },
      {
        key: 'scoring.freeHand.artistry',
        number: '3.8.7',
        page: 68,
        figures: ['tables/free-hand-artistry-levels'],
      },
      {
        key: 'scoring.freeHand.execution',
        number: '3.8.8',
        page: 69,
        children: [
          {
            // 69ページの実施欠点基準は、70ページの実施欠点表で「欠点基準に準じる」と
            // 書かれているときに引く4段階の表。画面では欠点表と並べたほうが読みやすいので、
            // 3.8.8.4 にまとめてつないである
            key: 'scoring.freeHand.execution.deductionTable',
            number: '3.8.8.4',
            page: 70,
            figures: ['tables/free-hand-execution-levels', 'tosyukettenhyou'],
          },
        ],
      },
      {
        key: 'scoring.freeHand.difficultyFigures',
        number: '3.8.9',
        page: 71,
        children: [
          {
            key: 'scoring.freeHand.difficultyFigures.jump',
            number: '1',
            page: 71,
            figures: ['figures/free-hand-figure-jump'],
          },
          {
            key: 'scoring.freeHand.difficultyFigures.flexibility',
            number: '2',
            page: 72,
            figures: ['figures/free-hand-figure-flexibility'],
          },
          {
            key: 'scoring.freeHand.difficultyFigures.balance',
            number: '3',
            page: 72,
            figures: ['figures/free-hand-figure-balance'],
          },
          {
            key: 'scoring.freeHand.difficultyFigures.handstand',
            number: '4',
            page: 73,
            figures: ['figures/free-hand-figure-handstand'],
          },
          {
            key: 'scoring.freeHand.difficultyFigures.turn',
            number: '5',
            page: 74,
            figures: ['figures/free-hand-figure-turn'],
          },
          {
            key: 'scoring.freeHand.difficultyFigures.acrobatic',
            number: '6',
            page: 76,
            figures: ['figures/free-hand-figure-acrobatic'],
          },
        ],
      },
      {
        key: 'scoring.freeHand.scoreForms',
        number: '3.8.10',
        page: 77,
        figures: ['forms/free-hand-da', 'forms/free-hand-d-grid', 'forms/free-hand-e'],
      },
    ],
  },
]
