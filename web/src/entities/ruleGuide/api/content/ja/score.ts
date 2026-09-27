import type { GuidePage } from '../../../model'

/**
 * 点はどう決まるか（`/rules/score/`）。
 *
 * @remarks
 * 観戦する人の本命のページ。
 * 中身の出どころは `~/imrg/imrg-hub/knowledge/competition/scoring-structure.md`。
 * 点数の相場は2026年インターハイ男子個人を実際に見て確かめたもの
 */
export const SCORE_JA: GuidePage = {
  key: 'score',
  title: '得点はどう決まるか',
  lead: '演技の得点は、3つを足して、ミスの分を引いて決まります。何をやったか（難度・D）、どう見せたか（構成・A）、どれだけ正確か（実施・E）。この3つです。',
  disclaimer: 'individual-work',
  blocks: [
    {
      kind: 'note',
      text: '得点 ＝ 難度（D） ＋ 構成（A） ＋ 実施（E） － 減点',
    },
    { kind: 'heading', text: '3つの柱' },
    {
      kind: 'table',
      caption: '何を見ている得点なのか',
      columns: ['記号', '呼び方', '英語', 'ざっくり言うと'],
      rows: [
        ['D', '難度', 'Difficulty（ディフィカルティ）', '何をやったか。積み上げていく'],
        ['A', '構成・芸術', 'Artistry（アーティストリー）', 'どう見せたか'],
        ['E', '実施', 'Execution（エグゼキューション）', 'どれだけ正確か。ミスで引かれる'],
        ['減点', 'ペナルティ', 'Penalty', '線から出た、時間が合わない、など'],
      ],
    },
    {
      kind: 'note',
      text: 'D・A・Eは、それぞれの英語の頭文字です。会場の得点表示や採点の話ではこの記号で呼ばれるので、覚えておくと話についていけます。',
    },
    { kind: 'heading', text: '難しい技だけでは勝てない' },
    {
      kind: 'paragraph',
      text: 'ここがいちばん誤解されるところです。高校生の上位の演技は、1種目で23点から24点くらいになります。その内訳を見てください。',
    },
    {
      kind: 'table',
      caption: '上位の演技の内訳（2026年インターハイ 男子個人）',
      columns: ['', '得点', '全体に占める割合'],
      rows: [
        ['難度（D）', '4点台', '約2割'],
        ['構成（A）', '9点台', '約4割'],
        ['実施（E）', '9点台', '約4割'],
      ],
    },
    {
      kind: 'paragraph',
      text: '難しい技は、得点の2割ほどしかありません。残りの8割は、どう見せたかと、どれだけ正確かで決まります。技を増やすより、いまできる技を美しくやるほうが得点は伸びます。',
    },
    { kind: 'heading', text: 'それぞれ詳しく' },
    {
      kind: 'link',
      to: 'score.difficulty',
      label: '難度（D）とは',
    },
    {
      kind: 'link',
      to: 'score.artistry',
      label: '構成・芸術（A）とは',
    },
    {
      kind: 'link',
      to: 'score.execution',
      label: '実施（E）とは',
    },
    { kind: 'heading', text: '時間と線を守る' },
    {
      kind: 'paragraph',
      text: '決められた時間より長くても短くても、1秒につき0.05点引かれます。演技面の線から出ても引かれます。せっかくの演技が、こういうところで削られることがあります。',
    },
  ],
}
