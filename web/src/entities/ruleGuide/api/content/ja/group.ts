import type { GuidePage } from '../../../model'

/**
 * 団体のルール（`/rules/group/`）。
 *
 * @remarks
 * 隊形移動（`group.formation`）の親。子の一覧を持たせて、行き止まりを作らない。
 *
 * 中身の出どころは `~/imrg/imrg-hub/knowledge/competition/group-composition.md`
 */
export const GROUP_JA: GuidePage = {
  key: 'group',
  title: '団体のルール',
  lead: '団体は5人で演技します。手具は持ちません。2分15秒から2分30秒の間に、そろえる場面と、崩して見せる場面を組み立てます。5人が1つに見えるほど強い競技です。',
  disclaimer: 'individual-work',
  blocks: [
    { kind: 'heading', text: '人数は5人' },
    {
      kind: 'paragraph',
      text: '4人でも出場できますが、その場合は減点されます。演技の途中で1人が抜けたときは、そこで演技を終わらせます。',
    },
    { kind: 'heading', text: 'そろえると加点になる' },
    {
      kind: 'paragraph',
      text: '団体でいちばん効くのは、そろえることです。同じ技を5人が同時に、同じ形でやる。これが決まると、見ている人にも審判にも伝わります。',
    },
    {
      kind: 'paragraph',
      text: 'ただし、そろえるだけでは足りません。ずらす、追いかける、1人だけ違うことをする。変化がないと単調に見えます。',
    },
    { kind: 'heading', text: '並び方を変えながら見せる' },
    {
      kind: 'paragraph',
      text: '5人の立ち位置は、演技の間ずっと変わり続けます。これを隊形移動といいます。団体を見るとき、いちばん分かりやすい見どころです。',
    },
    {
      kind: 'link',
      to: 'group.formation',
      label: '隊形移動とは',
    },
    { kind: 'heading', text: '構成でよく言われること' },
    {
      kind: 'table',
      caption: '団体の構成でつまずきやすいところ',
      columns: ['よくある形', 'なぜもったいないか'],
      rows: [
        ['手を下げたまま長く走る', 'どこを見ればいいか分からなくなる'],
        ['同じ隊形移動を2回やる', '2回目には新しさがない'],
        ['ずっと同じ速さで動く', 'ただ動いているだけに見える'],
        ['他校の演技をそのまま真似る', '独創性が評価されない'],
      ],
    },
    {
      kind: 'note',
      text: '走るのは4歩までが目安です。移動が必要なら、移動しながら何かをします。',
    },
    {
      kind: 'link',
      to: 'score',
      label: '点の決まり方を見る',
    },
  ],
}
