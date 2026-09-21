import type { RuleNode } from '../../model/ruleSource'

/**
 * 4 変更規則の骨格。
 *
 * @remarks
 * 出典: 公益財団法人日本体操協会『新体操男子規則 2025年版』81〜83ページ
 */
export const AMENDMENTS_STRUCTURE: RuleNode = {
  key: 'amendments',
  number: '4',
  page: 81,
  children: [
    {
      key: 'amendments.junior',
      number: '1',
      page: 81,
      children: [
        { key: 'amendments.junior.prohibited', number: '1', page: 81 },
        { key: 'amendments.junior.requirement', number: '2', page: 81 },
        { key: 'amendments.junior.specialDifficulty', number: '3', page: 81 },
        { key: 'amendments.junior.relaxation', number: '4', page: 81 },
        {
          key: 'amendments.junior.apparatus',
          number: '5',
          page: 82,
          figures: ['syugukikaku(J)'],
        },
      ],
    },
    {
      key: 'amendments.elementary',
      number: '2',
      page: 83,
      children: [
        { key: 'amendments.elementary.groupFree', number: '', page: 83 },
        {
          key: 'amendments.elementary.scoreSheet',
          number: '',
          page: 83,
          figures: ['junior(PCS)'],
        },
      ],
    },
  ],
}
