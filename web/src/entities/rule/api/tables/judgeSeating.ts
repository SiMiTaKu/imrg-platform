import type { RuleSeating } from '../../model/ruleTable'

/**
 * 審判席の並び。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』
 * 3 採点規則 3.2.14 審判の配置（21ページ）と 3.8.4 審判員の役割「審判席配置例」（64ページ）。
 *
 * どちらも前列と後列で席の数が違い（21ページは前列9席・後列4席、64ページは前列8席・後列3席）、
 * 列の見出しに当たるものも無い。表に当てはめると空の見出しが並ぶので、
 * 箱を横に並べた図（`RuleSeating`）として持つ。
 *
 * 「前列」「後列」の呼び名は冊子には無く、読む人に向けて付けた。
 * 冊子は後列に「←1段高くする」と矢印で書き添えてあるので、それを列の但し書きにした
 */
export const JUDGE_SEATINGS: readonly RuleSeating[] = [
  {
    // 出典: 新体操男子規則 2025年版 3 採点規則 3.2.14 審判の配置（21ページ）
    // 目次には載っていない節。本文から起こした
    imageSource: '/images/rules/seats/judge-seats.png',
    caption: '審判の配置',
    rows: [
      {
        label: '前列',
        seats: [
          { label: 'E4' },
          { label: 'A3' },
          { label: 'E2' },
          { label: 'A1' },
          { label: 'セクレタリー' },
          { label: 'E1' },
          { label: 'A2' },
          { label: 'E3' },
          { label: 'A4' },
        ],
      },
      {
        label: '後列',
        note: '1段高くする',
        seats: [{ label: 'D1' }, { label: 'D2' }, { label: '審判長' }, { label: '補審' }],
      },
    ],
    note: '2列目を高くできない場合は難度（D）審判を前列に配置する。',
    source: '新体操男子規則 2025年版 3 採点規則 3.2.14 審判の配置（21ページ）',
  },
  {
    // 出典: 新体操男子規則 2025年版 3 採点規則 3.8.4 審判員の役割「審判席配置例」（64ページ・個人徒手）
    // 紙面は「E」と「4審」が上下2段の箱になっているので、2行目を note に持たせた
    imageSource: '/images/rules/seats/free-hand-judge-seats.png',
    caption: '個人徒手の審判席配置例',
    rows: [
      {
        label: '前列',
        seats: [
          { label: 'E', note: '4審' },
          { label: 'E', note: '2審' },
          { label: 'A', note: '1審' },
          { label: 'D', note: '1審' },
          { label: 'D', note: '2審' },
          { label: 'A', note: '2審' },
          { label: 'E', note: '1審' },
          { label: 'E', note: '3審' },
        ],
      },
      {
        label: '後列',
        seats: [{ label: 'CJ' }, { label: '審判長' }, { label: '競技部長' }],
      },
    ],
    note: 'CJ はコントロールジャッジ。冊子には高さの指定は書かれていない。',
    source: '新体操男子規則 2025年版 3 採点規則 3.8.4 審判員の役割（64ページ）',
  },
]
