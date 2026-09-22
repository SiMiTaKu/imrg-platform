import type { RuleTree } from '../../model/ruleTable'

/**
 * 配点と採点項目の分類図。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』
 * 3 採点規則 3.4.3 配点と採点項目（27ページ・団体競技）と
 * 3.5.4 配点と採点項目（39ページ・個人競技）。
 *
 * 箱と線だけでできた図なので、画像をやめて入れ子の箇条書きで持ち直した。
 *
 * 画像で載せていたもの（`SK(D)single.png` など）は版が古く、
 * 「構成（D）10.00点」と「実施（E）10.00点」の2本立てだった。
 * 2025年版は「難度（D）（加点法）」「芸術と多様性（A）10点満点（減点法）」
 * 「実施（E）10点満点（減点法）」の3本立てで、枝の中身も違う。
 *
 * 冊子は 難度（D）・芸術と多様性（A）・実施（E）を1枚の図にまとめているので、こちらも1つで持つ。
 * 画像の差し替え先は `SK(D)*.png` を使う（`SK(E)*.png` は使わない）
 */
export const SCORING_TREES: readonly RuleTree[] = [
  {
    // 出典: 新体操男子規則 2025年版 3 採点規則 3.5.4 配点と採点項目（39ページ・個人競技）
    imageSource: '/images/rules/SK(D)single.png',
    caption: '個人競技の配点と採点項目',
    roots: [
      {
        label: '難度（D）',
        note: '加点法',
        children: [{ label: '徒手系難度' }, { label: '転回系難度' }, { label: '加点' }],
      },
      {
        label: '芸術と多様性（A）',
        note: '10点満点（減点法）',
        children: [
          {
            label: '多様性と技術価値',
            children: [
              { label: '徒手系の多様性と価値' },
              { label: '転回系の多様性と価値' },
              { label: '手具操作化の多様性と価値' },
            ],
          },
          {
            label: '芸術性と技術価値',
            children: [
              { label: 'リズム変化・ダイナミズム' },
              { label: '空間による表現' },
              { label: '独創性' },
            ],
          },
          {
            label: 'その他の技術的価値',
            children: [{ label: '運動量' }, { label: '徒手の割合' }, { label: '要求要素の有無' }],
          },
        ],
      },

      {
        label: '実施（E）',
        note: '10点満点（減点法）',
        children: [
          {
            label: '身体の動きの技術',
            children: [
              { label: '徒手の動きの技術' },
              { label: '転回の動きの技術' },
              { label: '手具と動きの技術' },
            ],
          },
          {
            label: '全体の調和',
            children: [{ label: '表現力' }, { label: '音楽との調和' }],
          },
        ],
      },
    ],
    source: '新体操男子規則 2025年版 3 採点規則 3.5.4 配点と採点項目（39ページ）',
  },
  {
    // 出典: 新体操男子規則 2025年版 3 採点規則 3.4.3 配点と採点項目（27ページ・団体競技）
    imageSource: '/images/rules/SK(D)group.png',
    caption: '団体競技の配点と採点項目',
    roots: [
      {
        label: '難度（D）',
        note: '加点法',
        children: [{ label: '徒手系難度' }, { label: '転回系難度' }, { label: '加点' }],
      },
      {
        label: '芸術と多様性（A）',
        note: '10点満点（減点法）',
        children: [
          {
            label: '多様性と技術価値',
            children: [
              { label: '徒手系の多様性と価値' },
              { label: '転回系の多様性と価値' },
              { label: '隊形変化の多様性と価値' },
              { label: '組運動の多様性と価値' },
            ],
          },
          {
            label: '芸術性と技術価値',
            children: [
              { label: 'リズム変化・ダイナミズム' },
              { label: '徒手同時的内容' },
              { label: '転回同時的内容' },
              { label: '独創性' },
            ],
          },
          {
            label: 'その他の技術的価値',
            children: [
              { label: '運動量' },
              { label: '難度の配分・競技者に応じた構成' },
              { label: '要求要素の有無' },
            ],
          },
        ],
      },

      {
        label: '実施（E）',
        note: '10点満点（減点法）',
        children: [
          {
            label: '身体の動きの技術',
            children: [{ label: '徒手の動きの技術' }, { label: '転回の動きの技術' }],
          },
          {
            label: '全体の調和',
            children: [
              { label: 'リズミカルな実施' },
              { label: '団体的同時性' },
              { label: 'スケール・スピード・ダイナミズムの一致' },
              { label: '隊形及び動きの正確さ' },
              { label: '表現力' },
              { label: 'その他の調和' },
              { label: '音楽との調和' },
            ],
          },
        ],
      },
    ],
    source: '新体操男子規則 2025年版 3 採点規則 3.4.3 配点と採点項目（27ページ）',
  },
  {
    // 出典: 新体操男子規則 2025年版 3 採点規則 3.8.2 配点および採点項目（63ページ・個人徒手）
    //
    // 紙面は「難度（D）」「芸術と多様性（A）3.00」「実施（E）10.00」の3本を
    // 1枚に並べた箱と線の図。団体・個人と同じく、入れ子の箇条書きとして持ち直した。
    // 「難度（D）」だけは配点が書かれていない（加点法のため）
    imageSource: '/images/rules/trees/free-hand-allocation.png',
    caption: '個人徒手の配点と採点項目',
    roots: [
      {
        label: '難度（D）',
        children: [{ label: '難度点' }, { label: 'ボーナス加点' }],
      },
      {
        label: '芸術と多様性（A）',
        note: '3.00',
        children: [
          {
            label: '芸術性と多様性',
            note: '2.50',
            children: [
              { label: '運動の多様性', note: '1.00' },
              { label: 'リズム変化の多様性', note: '1.00' },
              { label: '独創性と工夫', note: '0.50' },
            ],
          },
          {
            label: 'その他の技術的価値',
            children: [{ label: '運動量', note: '0.50' }, { label: '要求要素の存在' }],
          },
        ],
      },
      {
        label: '実施（E）',
        note: '10.00',
        children: [
          {
            label: '身体の動きの技術',
            children: [{ label: '徒手の技術' }, { label: '転回系の技術' }],
          },
          { label: '音楽との調和' },
          { label: '表現' },
        ],
      },
    ],
    source: '新体操男子規則 2025年版 3 採点規則 3.8.2 配点および採点項目（63ページ）',
  },
]
