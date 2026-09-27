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
    { kind: 'heading', text: '入れなければならないものがある' },
    {
      kind: 'paragraph',
      text: '団体の構成は、自由に作れるわけではありません。必ず入れる決まりの動きがあります。',
    },
    {
      kind: 'table',
      caption: '必ず入れるもの',
      columns: ['何を', 'いくつ'],
      rows: [
        ['徒手系の群', '5種類すべて'],
        ['転回系', '3回'],
        ['転回系の始め方', '2種類（同時・2段）は必ず。3段以上は1回まで'],
        ['違う隊形', '5つ以上'],
      ],
    },
    {
      kind: 'link',
      to: 'group.requirements',
      label: '入れなければならないものを詳しく見る',
    },
    { kind: 'heading', text: 'そろえると点が上がる' },
    {
      kind: 'paragraph',
      text: '団体でいちばん効くのは、そろえることです。5人が同時に同じ転回技を行うと、その難度が1ランク上がります。そろえること自体が点になります。',
    },
    {
      kind: 'table',
      caption: '難度が認められる人数の条件',
      columns: ['種類', '条件'],
      rows: [
        ['徒手系', '5人全員が、同時または次々に行う'],
        ['転回系', '3人以上が行う'],
        ['静止する技', '2秒の静止を全員が同時に行う'],
      ],
    },
    {
      kind: 'paragraph',
      text: 'さらに、そろえ方によって加点が付きます。連続した同じ転回を全員でそろえる、終わりの着地を全員で止める、3段以上の交差をする。それぞれ0.10点から0.30点です。',
    },
    {
      kind: 'link',
      to: 'score.bonus',
      label: '加点の取り方を見る',
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
    { kind: 'heading', text: '人数が足りないとき' },
    {
      kind: 'paragraph',
      text: '4人でも出場できますが減点されます。演技の途中で1人が抜けたときは、そこで演技を終わらせます。',
    },
    {
      kind: 'link',
      to: 'score',
      label: '点の決まり方を見る',
    },
  ],
}
