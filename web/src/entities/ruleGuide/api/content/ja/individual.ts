import type { GuidePage } from '../../../model'

/**
 * 個人のルール（`/rules/individual/`）。
 *
 * @remarks
 * 手具4種の説明を含む。手具ごとのページ（`individual.apparatus`）はこれから
 */
export const INDIVIDUAL_JA: GuidePage = {
  key: 'individual',
  title: '個人のルール',
  lead: '個人は1人で演技します。手具を1つ持ち、1分15秒から1分30秒の間に、投げて、回して、受け取ります。手具は4種類あり、種類ごとに見どころが変わります。',
  disclaimer: 'individual-work',
  blocks: [
    { kind: 'heading', text: '4つの手具' },
    {
      kind: 'table',
      caption: '手具の種類と見どころ',
      columns: ['手具', '形', '見どころ'],
      rows: [
        ['スティック', '棒を2本', '2本を別々に動かす。片方が止まらない'],
        ['リング', '輪を2本', '大きく回す。体に沿わせる'],
        ['ロープ', '縄を1本', '跳ぶ。形を変えられるのが強み'],
        ['クラブ', 'こん棒を2本', '細かく回す。落としやすい'],
      ],
    },
    {
      kind: 'note',
      text: '2本持つ種目では、片方が止まっている時間をできるだけ作らないのがうまい演技です。',
    },
    { kind: 'heading', text: '手具を投げると点が伸びる' },
    {
      kind: 'paragraph',
      text: '高く投げて、その間に宙返りをして、受け取る。これが個人の見せ場です。投げは回転の数で難しさが決まります。',
    },
    {
      kind: 'paragraph',
      text: 'さらに、手を使わずに投げたり受けたりすると加点になります。背中の後ろ、足、膝。見ないで受けるのも加点です。',
    },
    {
      kind: 'link',
      to: 'score.difficulty',
      label: '難度の数え方を見る',
    },
    { kind: 'heading', text: '始め方と終わり方も決まっている' },
    {
      kind: 'paragraph',
      text: '演技面のどこから始めてもかまいません。ただし手具に触れた状態で、いったん動きを止めてから始めます。終わるときも同じで、完全に止まってから終了です。',
    },
    {
      kind: 'link',
      to: 'basics',
      label: '男子新体操とは',
    },
  ],
}
