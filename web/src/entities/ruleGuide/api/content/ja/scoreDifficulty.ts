import type { GuidePage } from '../../../model'

/**
 * 難度（D）とは（`/rules/score/difficulty/`）。
 *
 * @remarks
 * 選手・指導者向けのいちばん深い層。
 * 価値点は `~/imrg/imrg-hub/vendor/rulebook/2025/` で確かめた。
 * 数え方の考え方は `~/imrg/imrg-hub/knowledge/competition/scoring-structure.md`
 */
export const SCORE_DIFFICULTY_JA: GuidePage = {
  key: 'score.difficulty',
  title: '難度（D）とは',
  lead: '難度は「何をやったか」の点です。技それぞれに点が決まっていて、足し算で増えていきます。ただし数えられる技の数には上限があります。',
  disclaimer: 'individual-work',
  blocks: [
    { kind: 'heading', text: '技には5段階の値がある' },
    {
      kind: 'table',
      caption: '難度と価値点',
      columns: ['難度', '価値点'],
      rows: [
        ['A', '0.1'],
        ['B', '0.2'],
        ['C', '0.3'],
        ['D', '0.5'],
        ['E', '0.7'],
      ],
    },
    {
      kind: 'note',
      text: 'Eより上はありません。どれだけ難しいことをしても、1つの技はE止まりです。',
    },
    { kind: 'heading', text: '数えられる技の数は決まっている' },
    {
      kind: 'paragraph',
      text: 'いくら技を入れても、全部が点になるわけではありません。枠があります。',
    },
    {
      kind: 'table',
      caption: '難度の枠',
      columns: ['枠', '数', '何が入るか'],
      rows: [
        ['タンブリング', '3つ', '宙返りなど。投げながらのタンブリングもここ'],
        ['徒手', '3つ', '手具を持たない技。投げはここに入る'],
      ],
    },
    {
      kind: 'paragraph',
      text: '枠には、点の高いものから順に入ります。4つ目のタンブリングは、それ自体では点になりません。同じ技を2回やっても、数えられるのは1回目だけです。形を変えれば別の技として数えられます。',
    },
    { kind: 'heading', text: '投げは回った数で決まる' },
    {
      kind: 'paragraph',
      text: '手具を投げたとき、手具が1回転すると1動作と数えます。縦でも横でもかまいません。',
    },
    {
      kind: 'table',
      caption: '投げの動作数と難度',
      columns: ['回った数', '1', '2', '3', '4'],
      rows: [['難度', 'B', 'C', 'D', 'E']],
    },
    {
      kind: 'note',
      text: '縦に3回まわす投げだけは特別で、3動作でもE難度になります。',
    },
    { kind: 'heading', text: '本当に効くのは加点' },
    {
      kind: 'paragraph',
      text: '枠が埋まったあと、点を伸ばす方法が加点です。加点は「もっと難しい技」ではなく、「同じ技を条件に当てはめる」ことで取ります。',
    },
    {
      kind: 'list',
      items: [
        '手ではないところで投げる、受ける（背中、足、膝など）',
        '見ないで投げる、受ける',
        '続けて投げて、その前後どちらかがD難度',
      ],
    },
    {
      kind: 'paragraph',
      text: 'だから、技の数を増やすより、1つの技に加点をいくつ重ねられるかで差がつきます。1つの流れの中で加点を4つ取る選手もいます。',
    },
    {
      kind: 'link',
      to: 'score',
      label: '点の決まり方に戻る',
    },
  ],
}
