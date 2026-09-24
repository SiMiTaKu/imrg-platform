import type { RuleNode } from '../../model/ruleSource'

/**
 * 2 新体操の特性とその基本（冊子 15〜16ページ）の骨格。
 *
 * @remarks
 * 出典は公益財団法人日本体操協会『新体操男子規則 2025年版』。
 * この章には図・表・写真が1つも無いため、`figures` を持つ節点は無い
 */
export const BASICS_STRUCTURE: RuleNode<'basics'> = {
  key: 'basics',
  number: '2',
  page: 15,
  endPage: 16,
  children: [
    {
      key: 'basics.characteristics',
      number: '2.1',
      page: 15,
    },
    {
      key: 'basics.techniques',
      number: '2.2',
      page: 15,
      children: [
        {
          key: 'basics.techniques.flexibility',
          number: '2.2.1',
          page: 15,
        },
        {
          key: 'basics.techniques.speed',
          number: '2.2.2',
          page: 15,
        },
        {
          key: 'basics.techniques.interval',
          number: '2.2.3',
          page: 15,
        },
        {
          key: 'basics.techniques.jumpingPower',
          number: '2.2.4',
          page: 15,
        },
        {
          key: 'basics.techniques.weightShift',
          number: '2.2.5',
          page: 16,
        },
        {
          key: 'basics.techniques.tensionAndRelease',
          number: '2.2.6',
          page: 16,
        },
        {
          key: 'basics.techniques.breathing',
          number: '2.2.7',
          page: 16,
        },
        {
          key: 'basics.techniques.powerfulMovement',
          number: '2.2.8',
          page: 16,
        },
        {
          key: 'basics.techniques.originality',
          number: '2.2.9',
          page: 16,
        },
      ],
    },
  ],
}
