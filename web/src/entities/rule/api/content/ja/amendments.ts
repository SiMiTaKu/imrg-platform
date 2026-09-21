import type { RuleContent } from '../../../model/ruleSource'

/**
 * 4 変更規則の日本語の本文。
 *
 * @remarks
 * 出典: 公益財団法人日本体操協会『新体操男子規則 2025年版』81〜83ページ
 */
export const AMENDMENTS_JA: RuleContent = {
  amendments: {
    title: '変更規則',
  },

  'amendments.junior': {
    title: '新体操男子ジュニア適用規則',
    lead: '次に示すものを除き、本会新体操男子採点規則（2025年版）による。',
  },
  'amendments.junior.prohibited': {
    title: '禁止技',
    lead: '団体競技、個人競技ともに以下の技を禁止する。なお、禁止技を行った場合は構成・実施ともに0点とする。',
    items: [
      { label: '（1）', text: '前方宙返り転（1と1/2回転）以上' },
      { label: '（2）', text: '後方2回宙返り以上' },
      { label: '（3）', text: '前方宙返り直接正面支持臥' },
      { label: '（4）', text: '1回以上の後方宙返りをともなった直接正面支持臥' },
      { label: '（5）', text: '組運動の飛ばし技での直接正面支持臥' },
      { text: '※（1）（3）は後ろとびひねりからを含む' },
    ],
  },
  'amendments.junior.requirement': {
    title: '難度の要求要素',
    items: [
      { label: '（1）', text: '個人競技の投げ上げ回数は2回以上とする' },
      {
        label: '（2）',
        text: '個人競技の転回系は最大3回までとする',
        items: [
          { text: '4回目以降は難度および要素の認定はしない' },
          { text: '違反した場合：超過1つにつき0.30の減点' },
        ],
      },
    ],
  },
  'amendments.junior.specialDifficulty': {
    title: '特別難度',
    lead: '団体競技で以下の転回系を実施した場合は、特別難度として採用する。',
    items: [{ label: '（1）', text: '後転とびからの伸身宙返りの基礎難度をC難度とする' }],
  },
  'amendments.junior.relaxation': {
    title: '緩和規則',
    items: [
      {
        label: '（1）',
        text: '難度変更',
        items: [
          {
            text: '後ろとびひねり前方宙返りおよび後方宙返り1/2ひねりの基礎難度をC難度とする',
          },
        ],
      },
      {
        label: '（2）',
        text: '減点緩和',
        items: [{ text: '団体競技において、転回系での減点は1つのシリーズにつき最大1.00点とする' }],
      },
    ],
  },
  'amendments.junior.apparatus': {
    title: '手具の規格',
    lead: '体格差が大きいため、本会指定業者が販売する手具が使用できない場合は、規格通りであれば自作でも可とする。',
    items: [
      { text: '2016年　2月一部改訂' },
      { text: '2019年　2月一部改訂' },
      { text: '2020年　2月一部改訂' },
    ],
  },

  'amendments.elementary': {
    title: '新体操小学校適用規則',
    lead: '次に示すものを除き、本会新体操男子採点規則（2025年版）による。',
  },
  'amendments.elementary.groupFree': {
    title: '団体競技　自由演技',
    items: [
      { label: '（1）', text: '自由演技はラジオ体操第1を基本とし、徒手体操で構成する' },
      { label: '（2）', text: '演技時間はラジオ体操第1の演技時間とする' },
      { label: '（3）', text: '団体競技は、4名以上で演技を行う' },
      {
        label: '（4）',
        text: '自由演技の配点',
        items: [
          { text: '次の5項目を基準とする' },
          { text: '各項目は10点満点で採点し、その平均点を各審判の得点とする' },
          { text: '各チームの得点は、全審判員の平均点とする' },
          {
            text: '採点基準',
            items: [
              { label: '①', text: '運動の大きさ・深さ・アクセントなど体操が正確にできたか' },
              { label: '②', text: '音楽と体操の調和がとれていたか' },
              { label: '③', text: '隊形の変化や移動が工夫されていたか' },
              { label: '④', text: '演技全体を通じてリズミカルにできたか' },
              { label: '⑤', text: 'チーム全体が元気よく楽しく演技できたか' },
            ],
          },
        ],
      },
      { label: '（5）', text: '伴奏音楽はつけることが望ましいが、号令で実施してもよい' },
      { label: '（6）', text: '転回系は宙返りを除いた程度のものを入れてもよい' },
      { label: '（7）', text: '隊形の変化および隊形の移動を工夫する' },
      { label: '（8）', text: '服装は自由とする' },
      { label: '（9）', text: '審判構成は10名を基準とする' },
      { label: '（10）', text: '表彰は大会要項による' },
    ],
  },
  'amendments.elementary.scoreSheet': {
    title: '採点用紙',
    lead: '次の観点から、演技の採点を行う',
  },
}
