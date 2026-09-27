import type { GuidePage } from '../../../model'

/**
 * 実施（E）とは（`/rules/score/execution/`）。
 *
 * @remarks
 * 中身の出どころは `~/imrg/imrg-hub/knowledge/competition/routine-quality.md`
 */
export const SCORE_EXECUTION_JA: GuidePage = {
  key: 'score.execution',
  title: '実施（E）とは',
  lead: '実施の点は「どれだけ正確にできたか」です。ミスをすると引かれていきます。上位の演技は、そもそも審判が引く場所を見つけられません。',
  disclaimer: 'individual-work',
  blocks: [
    { kind: 'heading', text: '引かれないための3原則' },
    {
      kind: 'paragraph',
      text: '新体操には昔から言われている3つの言葉があります。実施の点を上げるうえで、これを外すことはできません。',
    },
    {
      kind: 'table',
      caption: '自然に・大きく・美しく',
      columns: ['言葉', '意味'],
      rows: [
        ['自然に', '動きが必然に見える。継ぎ目に違和感がない'],
        ['大きく', '膝と肘が伸びている。反りと沈み込みが深い'],
        ['美しく', 'どこで止めても形になっている'],
      ],
    },
    {
      kind: 'note',
      text: '「自然に」は上級者ほど差が出ます。上位の演技は「そうなるしかなかった」と思わせる流れを持っています。',
    },
    { kind: 'heading', text: '受ける姿勢を見せる' },
    {
      kind: 'paragraph',
      text: '上位の選手は、手具を投げてから受けるまでに、いったん回転を止めます。受ける姿勢を作ってから受け取る。慌てて受けません。受ける姿勢を見せること自体が、減点を消しています。',
    },
    { kind: 'heading', text: '踵をつかない' },
    {
      kind: 'paragraph',
      text: '一流の演技では、演技中に踵が床につく瞬間がほとんどありません。回っている間も踵は上がったままです。足の裏で床をつかみながら、踵は高く保ちます。',
    },
    { kind: 'heading', text: '伸び悩んだら、まず膝と肘' },
    {
      kind: 'paragraph',
      text: 'つま先や踵を伸ばすのは難しいことです。しかしその前に、膝と肘を伸ばすだけで演技は大きく見えます。ここは才能でも体格でもありません。意識だけで今日から変えられます。',
    },
    {
      kind: 'note',
      text: '上半身の反りと下半身の沈み込みが深ければ、身長が10センチ低くても演技は大きく見えます。',
    },
    {
      kind: 'link',
      to: 'toshu',
      label: '徒手体操とは',
    },
  ],
}
