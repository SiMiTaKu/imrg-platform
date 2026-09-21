import type { RuleNode } from '../../model/ruleSource'

/**
 * 3 採点規則 のうち 3.1 総則・3.2 審判・3.3 一般的な採点規則 の骨格。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』19〜24ページ。
 * 3.4 以降は別に持ち、章としては上でひとつにまとめる。
 *
 * 目次に載っていない節が1つある（3.2.14 審判の配置・21ページ）。本文から起こした
 */
export const SCORING_GENERAL_STRUCTURE: readonly RuleNode[] = [
  {
    key: 'scoring.general',
    number: '3.1',
    page: 19,
    children: [{ key: 'scoring.general.role', number: '3.1.1', page: 19 }],
  },
  {
    key: 'scoring.judges',
    number: '3.2',
    page: 19,
    children: [
      { key: 'scoring.judges.competition', number: '3.2.1', page: 19 },
      { key: 'scoring.judges.regulations', number: '3.2.2', page: 19 },
      { key: 'scoring.judges.meeting', number: '3.2.3', page: 20 },
      { key: 'scoring.judges.oath', number: '3.2.4', page: 20 },
      // 冊子には審判団の構成表がある（api/tables には無いため figures でつないでいない）。
      // 難度（D）審判 2名／芸術と多様性（A）審判 4名／実施（E）審判 4名／
      // 線審 2名／計時審 1名／補審 1名
      { key: 'scoring.judges.panel', number: '3.2.5', page: 20 },
      { key: 'scoring.judges.superior', number: '3.2.6', page: 20 },
      { key: 'scoring.judges.president', number: '3.2.7', page: 20 },
      { key: 'scoring.judges.difficulty', number: '3.2.8', page: 21 },
      { key: 'scoring.judges.artistry', number: '3.2.9', page: 21 },
      { key: 'scoring.judges.execution', number: '3.2.10', page: 21 },
      { key: 'scoring.judges.line', number: '3.2.11', page: 21 },
      { key: 'scoring.judges.time', number: '3.2.12', page: 21 },
      { key: 'scoring.judges.reserve', number: '3.2.13', page: 21 },
      // 目次に載っていない節。冊子には座席の表がある（api/tables には無い）。
      // 前列 E4／A3／E2／A1／セクレタリー／E1／A2／E3／A4、
      // 後列 D1／D2／審判長／補審（←1段高くする）
      { key: 'scoring.judges.seating', number: '3.2.14', page: 21 },
    ],
  },
  {
    key: 'scoring.common',
    number: '3.3',
    page: 22,
    children: [
      {
        key: 'scoring.common.method',
        number: '3.3.1',
        page: 22,
        figures: ['yuukouten', 'tennsuu'],
      },
      { key: 'scoring.common.baseScore', number: '3.3.2', page: 22 },
      { key: 'scoring.common.time', number: '3.3.3', page: 22 },
      { key: 'scoring.common.startTime', number: '3.3.4', page: 22 },
      { key: 'scoring.common.entrance', number: '3.3.5', page: 22 },
      { key: 'scoring.common.outOfBounds', number: '3.3.6', page: 22 },
      { key: 'scoring.common.uniform', number: '3.3.7', page: 23 },
      { key: 'scoring.common.music', number: '3.3.8', page: 23 },
      { key: 'scoring.common.apparatus', number: '3.3.9', page: 23 },
      { key: 'scoring.common.teamSize', number: '3.3.10', page: 24 },
      { key: 'scoring.common.forbidden', number: '3.3.11', page: 24 },
      { key: 'scoring.common.discipline', number: '3.3.12', page: 24 },
    ],
  },
]
