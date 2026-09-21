import type { RuleShapeFigure } from '../../model/ruleTable'

/**
 * 所属マークの形と大きさの図。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』
 * 1 競技規則 1.6.7 所属マーク「3 形状と大きさは次のいずれかを上回るものとする」（8ページ）。
 *
 * 紙面は正方形・正三角形・菱形・長方形・円の5つを、寸法と角度の引き出し線つきで並べた図。
 * 直線と数字だけなので、絵ではなく図形の種類と書き込みとして持ち、画面側で描き直す。
 * 冊子の並びは上段が 正方形／正三角形／菱形、下段が 長方形／円。
 * 本文の（1）〜（5）の順とは違うので、ここは本文の順に並べた
 */
export const SHAPE_FIGURES: readonly RuleShapeFigure[] = [
  {
    // 出典: 新体操男子規則 2025年版 1 競技規則 1.6.7 所属マーク「3」（8ページ）
    imageSource: '/images/rules/shapes/club-mark.png',
    caption: '所属マークの形と大きさ',
    shapes: [
      {
        kind: 'square',
        label: '4.5cm×4.5cm の正方形',
        bottomLabel: '4.5cm',
        sideLabel: '4.5cm',
      },
      {
        kind: 'rectangle',
        label: '4.0cm×5.0cm の長方形',
        bottomLabel: '5.0cm',
        sideLabel: '4.0cm',
      },
      {
        kind: 'triangle',
        label: '一辺が 5.0cm の正三角形',
        bottomLabel: '5.0cm',
        angleLabels: ['∠60°'],
      },
      {
        kind: 'circle',
        label: '直径が 4.5cm の円',
        bottomLabel: '4.5cm',
      },
      {
        kind: 'rhombus',
        label: '一辺が 4.5cm で辺の交わる角度が 60°と 120°の菱形',
        bottomLabel: '4.5cm',
        sideLabel: '4.5cm',
        angleLabels: ['∠60°', '∠120°'],
      },
    ],
    note: '所属マークの形と大きさは、この5つのいずれかを上回るものとする。図は形と縦横の比を表したもので、実物大ではない。色や材質は自由だが、試合着のデザインや色と区分できるものとし、上半身の前面または上腕部で審判が確認できるところにつけなければならない。',
    source: '新体操男子規則 2025年版 1 競技規則 1.6.7 所属マーク「3」（8ページ）',
  },
]
