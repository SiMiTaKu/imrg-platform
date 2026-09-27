import type { GuidePage } from '../../../model'

/**
 * 構成・芸術（A）とは（`/rules/score/artistry/`）。
 *
 * @remarks
 * 中身の出どころは `~/imrg/imrg-hub/knowledge/competition/routine-quality.md` と
 * `movement-volume.md`。2026年インターハイを実際に見て書かれたもの
 */
export const SCORE_ARTISTRY_JA: GuidePage = {
  key: 'score.artistry',
  title: '構成・芸術（A）とは',
  lead: '構成の点は「どう見せたか」で決まります。同じ技を並べても、順番と見せ方で点が変わります。難度と同じくらい大きい点で、上位の演技では9点台になります。',
  disclaimer: 'individual-work',
  blocks: [
    { kind: 'heading', text: '見られている5つのこと' },
    {
      kind: 'table',
      caption: '構成の点で評価される5つ',
      columns: ['項目', '何を見ているか'],
      rows: [
        ['多様性', '似た技ばかりになっていないか'],
        ['運動量', '動きに幅と質があるか'],
        ['技術力', '手具と体を同時に操れているか'],
        ['独創性', '見たことのない構成か'],
        ['表現力', '音楽と動きが合っているか'],
      ],
    },
    {
      kind: 'note',
      text: '運動量は「動きの数」ではありません。動きの幅と質のことです。ここを取り違えると、動きを増やすほど評価が下がります。',
    },
    { kind: 'heading', text: '手具を止めない' },
    {
      kind: 'paragraph',
      text: '上位の演技に共通しているのは、手具が止まる瞬間が一度もないことです。2本持つ種目なら、必ずどちらかが動き続けています。',
    },
    {
      kind: 'paragraph',
      text: '体が止まって見える瞬間は、たいてい手具が止まった瞬間です。「体を動かそう」と考えるより先に、「手具を止めない」と考えるほうがうまくいきます。',
    },
    { kind: 'heading', text: '同じ形を繰り返さない' },
    {
      kind: 'paragraph',
      text: '同じタンブリング、同じ投げ、同じ隊形移動。2回目には新しさがありません。数えられる技としても1回目しか認められないので、二重に損をします。',
    },
    { kind: 'heading', text: '人と同じことをしない' },
    {
      kind: 'paragraph',
      text: '他校や大学の演技をそのまま持ってくると、どれだけ上手にできても独創性の点は来ません。参考にするなら、何が良いのかを言葉にしてから、自分たちの形に置き換えます。',
    },
    { kind: 'heading', text: '床に近い動きを入れる' },
    {
      kind: 'paragraph',
      text: '投げが多くて床に近い動きが少ない構成は、技としては派手でも物足りなく見えます。座ったり寝たりする動きが1つ入るだけで、演技に奥行きが出ます。',
    },
    {
      kind: 'link',
      to: 'score.execution',
      label: '実施（E）とは',
    },
  ],
}
