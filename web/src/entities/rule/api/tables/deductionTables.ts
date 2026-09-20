import type { RuleTable } from '../../model/ruleTable'

/**
 * 画像で載せていた表を、文字で持ち直したもの。
 *
 * @remarks
 * 試作として徒手の欠点表から始めた。同じ形で足していけば、画像の表を順に置き換えられる
 */
export const RULE_TABLES: readonly RuleTable[] = [
  {
    imageSource: '/images/rules/tosyukettenhyou.png',
    caption: '徒手 欠点表',
    cornerLabel: '要素の用い方',
    columns: ['小欠点（0.10点）', '中欠点（0.20点）', '大欠点（0.30点以上）'],
    rows: [
      {
        cells: [
          '演技面の移動が不十分',
          '歩行ステップ、かけ足ステップ、リズムステップ、スキップなどの異なるステップの使い方に多様性がない',
          '',
        ],
      },
      {
        cells: ['同一要素を3回以上行う', '基礎要素群の1つが不十分', '基礎要素群が一つ欠けている'],
      },
      {
        cells: [
          '要素が単調で価値のない運動',
          '異なる諸要素群の使用が平均していない',
          '変化に乏しく演技に盛り上がりがない',
        ],
      },
      {
        cells: [
          '価値のない部分や組合せ',
          '各要素群の選択の仕方がやや多様性を欠く',
          '独創性及び組合せの技術が乏しい',
        ],
      },
      { cells: ['腕の動きに多様性がない', '連携が多様でない', ''] },
      { cells: ['', '', '音楽の性格が演技の適応性に明らかに欠けている'] },
    ],
  },
]

/**
 * 画像に対応する表を引く
 * @param imageSource - 画像のパス
 * @returns 文字で持ち直した表。まだ無ければ undefined
 */
export const findRuleTable = (imageSource: string): RuleTable | undefined =>
  RULE_TABLES.find((table) => table.imageSource === imageSource)
