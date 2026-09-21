import type { RuleContent } from '../../../model/ruleSource'

/**
 * 3.8 個人徒手の日本語の本文（63〜79ページ）。
 *
 * @remarks
 * 出典は 公益財団法人日本体操協会『新体操男子規則 2025年版』。
 *
 * 個人徒手の採点区分は 難度（D）・芸術と多様性（A）・実施（E）の3つ。
 * 実施の欠点基準は 大欠点 0.50点／中欠点 0.30点／小欠点 0.10点／微小欠点 0.05点 の4段階で、
 * 手具を持つ個人競技（3.5）の5段階とは別物なので混同しないこと。
 *
 * 冊子の表と図は `api/tables` に組み直し、骨格の `figures` でつないである。
 * 63ページの配点図、64ページの審判編成と審判席配置例、
 * 65ページの要求要素と数・複合的な徒手体操の組み合わせ、68ページの（A）採点基準表、
 * 69ページの実施欠点基準は、いっとき `items` に文字で起こしてあったが、
 * 表・図として持ち直したので本文からは外した。見出しの行だけを残してある
 */
export const FREE_HAND_JA: RuleContent = {
  'scoring.freeHand': {
    title: '個人徒手',
  },

  'scoring.freeHand.rules': {
    title: '競技規則',
    items: [
      {
        label: '1',
        text: '原則として、本会新体操男子競技規則（2025年度版）を採用する',
        items: [{ text: 'ただし、以下の項目は徒手ルールとして定める' }],
      },
      { label: '2', text: '競技は手具を持たない個人演技とする' },
    ],
  },

  'scoring.freeHand.allocation': {
    title: '配点および採点項目',
    lead: '個人徒手演技の配点と採点項目は以下のとおりとする',
  },

  'scoring.freeHand.judges': {
    title: '審判員',
    items: [{ label: '1', text: '審判編成及び数' }],
  },

  'scoring.freeHand.judgeRoles': {
    title: '審判員の役割',
    items: [
      {
        label: '1',
        text: '（D）審判員',
        items: [
          {
            text: '（D）審判員は2名で技術的価値の採点にあたり、それぞれの審判員が難度の価値点とボーナス加点の合計で算出し、共同で得点を決定する',
          },
        ],
      },
      {
        label: '2',
        text: '（A）審判員',
        items: [
          {
            text: '（A）審判員は2名で多様性・独創性・運動量の採点にあたり、2名の審判がそれぞれ採点をし、その平均（小数第4位以下を切り捨て）を得点とする',
          },
        ],
      },
      {
        label: '3',
        text: '（E）審判員',
        items: [
          {
            text: '（E）審判員は4名で運動のできばえの採点にあたり、4名の審判員の最高点および最低点を除外し、有効点の平均（小数第4位以下を切り捨て）を得点とする',
          },
        ],
      },
      {
        label: '4',
        text: 'CJ（コントロールジャッジ）',
        items: [
          {
            text: 'CJは（D）、（A）、（E）審判の得点合計をするとともに、競技規則および一般的な採点規則に関する減点をし、最終得点を導き出す',
          },
        ],
      },
      { text: '審判席配置例' },
    ],
  },

  'scoring.freeHand.composition': {
    title: '個人徒手の構成',
  },

  'scoring.freeHand.composition.routine': {
    title: '演技の構成',
    items: [
      {
        text: '演技は徒手体操を基とした徒手系要素および転回系要素で組立てられ、そのすべての運動が合理性と安定性をもって構成されなければならない',
      },
      {
        text: 'また以下に記載された要素を含み、3秒以上の静止をしない流れるような動きの組み合わせで、豊富な運動量をもって動きの変化、跳躍力、柔軟性、巧緻性などを十分に発揮されることが求められる',
      },
    ],
  },

  'scoring.freeHand.composition.requirements': {
    title: '要求要素と数',
    items: [
      {
        label: '（1）',
        text: '転回系を除く各要素は要求数を超えて実施してもよい',
        items: [{ text: '上記要素の不足　1つにつき0.50点の減点' }],
      },
      {
        label: '（2）',
        text: '複合的な徒手体操の組み合わせ',
        items: [{ text: '以下のものを複合的な徒手体操として扱うが、若干の変形は許容する' }],
      },
    ],
  },

  'scoring.freeHand.composition.acrobatic': {
    title: '転回系の条件',
    items: [
      {
        label: '（1）',
        text: '1つの演技に入れられる転回系の数は最大2つまでとする',
        items: [{ text: '上記要素の超過　1つにつき0.50点の減点' }],
      },
      {
        label: '（2）',
        text: '演技には前方・後方・側方の転回運動をすべて入れなければならない',
        items: [{ text: '上記要素の不足　1つにつき0.20点の減点' }],
      },
      {
        label: '（3）',
        text: '転回系の技の難度はB難度までとし、ひねりを伴う宙返りやB難度の転回の連続、伏臥よび座での着地は禁止技とする',
        items: [{ text: '上記要素の違反　(D)得点(A)得点を0点' }],
      },
    ],
  },

  'scoring.freeHand.difficulty': {
    title: '難度（D）の採点',
    lead: '難度の得点は各要素の価値点およびボーナス加点の合計で算出する。',
    items: [
      {
        label: '1',
        text: '難度の価値点',
        items: [{ text: '各要素の難度点は難度表のとおりとする' }],
      },
      {
        label: '2',
        text: '難度の数え方',
        items: [
          { label: '（1）', text: '難度の数が要求数を超えた場合は、その中の高い難度から数える' },
          { label: '（2）', text: '同じ技は重複して数えない' },
          { label: '（3）', text: '連続した跳躍や転回は価値の高いものを数える' },
        ],
      },
      {
        label: '3',
        text: 'ボーナス加点',
        items: [
          { text: '高い技術を必要とする連続技にボーナス加点を与える' },
          { label: '（1）', text: '異なるB難度の跳躍の連続　0.10加点' },
          { label: '（2）', text: '(1)の中にC難度以上の跳躍が含まれていた場合　0.20加点' },
          { text: '※(1)と(2)は重複して数えない' },
          { label: '（3）', text: 'A難度とB難度の連続した転回　0.10加点' },
          { label: '（4）', text: 'B難度を含む4回以上の異なる転回技の連続　0.20加点' },
        ],
      },
    ],
  },

  'scoring.freeHand.difficulty.table': {
    title: '難度表',
  },

  'scoring.freeHand.artistry': {
    title: '芸術と多様性（A）の採点',
    lead: '芸術と多様性は、以下の項目で採点する。',
    items: [
      {
        label: '1',
        text: '多様性',
        items: [
          {
            label: '（1）',
            text: '運動の多様性（0.20〜1.00）',
            items: [
              { text: '演技は様々な運動要素が多様性をもって組み合わされなければならない' },
              { text: 'その採点は採点基準に基づき各審判がレベル1〜レベル5で評価する' },
            ],
          },
          {
            label: '（2）',
            text: 'リズム変化の多様性（0.20〜1.00）',
            items: [
              { text: '演技はリズムやスピードの変化が多様性に富むものでなければならない' },
              { text: 'その採点は採点基準に基づき各審判がレベル1〜レベル5で評価する' },
            ],
          },
        ],
      },
      {
        label: '2',
        text: '独創性',
        items: [
          {
            label: '（1）',
            text: '独創性と工夫（0.10〜0.50）',
            items: [
              {
                text: '演技の振り付けは音楽に合わせた内容で、合理性および安定性をもった運動を、独創性および工夫をもって構成されなければならない',
              },
              { text: 'その採点は採点基準に基づき各審判がレベル1〜レベル5で評価する' },
            ],
          },
        ],
      },
      {
        label: '3',
        text: '運動量',
        items: [
          {
            label: '（1）',
            text: '運動量(0.10〜0.50)',
            items: [
              {
                text: '演技は豊富な運動量をもって構成されなければならない。その採点は採点基準に基づき各審判がレベル1〜レベル5で評価する',
              },
            ],
          },
        ],
      },
      { label: '4', text: '（A）採点基準表' },
    ],
  },

  'scoring.freeHand.execution': {
    title: '実施（E）',
    items: [
      {
        label: '1',
        text: '演技のできばえ',
        items: [
          {
            text: '徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定があり、全体を通じて途切れない印象で伸び伸びと行われなければならない',
          },
          { text: '伴奏音楽に合わせ、軽快で美しく、かつ優美な芸術的表現をもった実施が求められる' },
        ],
      },
      {
        label: '2',
        text: '身体の動きの技術の採点',
        items: [
          { text: '身体の動きの技術は以下の項目で採点する' },
          {
            label: '（1）',
            text: '徒手系の技術',
            items: [
              {
                text: '徒手系は、美しい姿勢と柔軟性をもって行われ、みぞおちから始まる動きの自然性や深さ、大きさ、幅、動きの間やアクセント、跳躍の高さ、そしてスピードに変化があり、身体の四肢の部分まで制御された動きでなければならない',
              },
            ],
          },
          {
            label: '（2）',
            text: '転回系の技術',
            items: [
              {
                text: '転回系は美しい姿勢とスピード、高さ、回転軸の正確性と着地の安定性をもったダイナミックな動きでなければならない',
              },
            ],
          },
          {
            label: '（3）',
            text: 'リズミカルな実施',
            items: [{ text: '伴奏音楽に合わせ、軽快に伸びやかに行わなければならない' }],
          },
          {
            label: '（4）',
            text: '表現力',
            items: [
              {
                text: '演技の実施は、音楽のテーマとメッセージを各種の運動を通じて表現しなければならない',
              },
            ],
          },
        ],
      },
      { label: '3', text: '実施欠点基準' },
    ],
  },

  'scoring.freeHand.execution.deductionTable': {
    title: '実施欠点表',
  },

  'scoring.freeHand.difficultyFigures': {
    title: '難度表（図解）',
  },

  'scoring.freeHand.difficultyFigures.jump': {
    title: '跳躍系',
  },

  'scoring.freeHand.difficultyFigures.flexibility': {
    title: '柔軟系',
  },

  'scoring.freeHand.difficultyFigures.balance': {
    title: 'バランス系',
  },

  'scoring.freeHand.difficultyFigures.handstand': {
    title: '倒立系',
  },

  'scoring.freeHand.difficultyFigures.turn': {
    title: '回転・転向系',
  },

  'scoring.freeHand.difficultyFigures.acrobatic': {
    title: '転回系',
  },

  'scoring.freeHand.scoreForms': {
    title: '個人徒手採点表',
    items: [{ text: 'D・A共通採点表' }, { text: 'D採点表' }, { text: 'E採点票' }],
  },
}
