import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、団体競技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const GROUP_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '団体競技',
      en: 'Group Competition',
      zh: '团体比赛',
    },
    section: [
      {
        title: {
          ja: '団体競技（自由演技）の採点',
          en: 'Scoring of the Group Competition (Free Routine)',
          zh: '团体比赛（自选成套动作）的评分',
        },
        block: [
          {
            title: {
              ja: '団体（自由演技）の採点項目と配点',
              en: 'Scoring Criteria and Points for the Group (Free Routine)',
              zh: '团体（自选成套动作）的评分项目与分值',
            },
            element: {
              ja: '自由演技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the free routine are as follows.',
              zh: '自选成套动作的分值与评分项目如下。',
            },
            image: [
              {
                src: '/images/rules/SK(D)group.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  zh: '评分项目（D）',
                },
              },
              {
                src: '/images/rules/SK(E)group.png',
                alt: {
                  ja: '採点項目（Ｅ）',
                  en: 'Scoring criteria (E)',
                  zh: '评分项目（E）',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '構成（Ｄ・Ａ）',
          en: 'Composition (D/A)',
          zh: '编排（D、A）',
        },
        block: [
          {
            title: {
              ja: '演技人数不足',
              en: 'Too Few Gymnasts',
              zh: '参演人数不足',
            },
            element: {
              ja: `演技人数が以下に満たない場合は、以下の通りとする。

1. ４名未満の場合は出場できない
1. ４〜５名の場合　【構成主任審判より減点：１名につき・・・1.50点】`,
              en: `If the number of gymnasts is below six, the following applies.

1. A group with fewer than four gymnasts may not compete.
1. A group with four or five gymnasts  [Deduction by the composition chief judge: 1.50 points per missing gymnast]`,
              zh: `参演人数不足以下规定时，按以下处理。

1. 不足4名时不得参赛
1. 4至5名时　【由编排主裁判员扣分：每1名……1.50分】`,
            },
          },
          {
            title: {
              ja: '構成に求められるもの',
              en: 'Requirements for the Composition',
              zh: '对编排的要求',
            },
            element: {
              ja: '演技は徒手系要素と回転系要素を持って構成され、高い技術的価値と各種要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性を持った組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand elements and tumbling elements, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              zh: '成套动作由徒手类要素与翻腾类要素构成，要求具有高度的技术价值、各类要素的多样性、音乐与动作的关系以及独创性。此外，所有动作必须以合理而稳定的组合进行编排，并具有丰富的运动量。',
            },
          },
          {
            title: {
              ja: '難度の要求要素',
              en: 'Difficulty Requirements',
              zh: '难度的要求要素',
            },
            element: {
              ja: `1. 難度要素の価値
競技では、事故の体を完全に支配すべきものであるから、演技は競技者の能力に応じた力強さと美しさと安定が必要である。

2. 難度要素の価値とレベル
団体競技の難度要素としては以下の難度を入れなければならない。

【違反した場合　　減点：　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点】

※要求された数以上の難度は、ランク下の難度として数えることができる。`,
              en: `1. Value of difficulty elements
Gymnasts must have complete control of their bodies in competition, so a routine requires power, beauty and stability suited to the gymnasts' ability.

2. Value and level of difficulty elements
A group routine must include the following difficulties.

[Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points]

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
              zh: `1. 难度要素的价值
比赛中必须完全支配自己的身体，因此成套动作需要与参赛者能力相适应的力度、美感与稳定性。

2. 难度要素的价值与等级
团体比赛的难度要素必须编入以下难度。

【违反时　　扣分：　
B难度不足　每1个……0.10分
C难度不足　每1个……0.30分
D难度不足　每1个……0.50分】

※超出要求数量的难度，可作为低一等级的难度计算。`,
            },
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: {
                  ja: '難度の要求要素表',
                  en: 'Table of difficulty requirements',
                  zh: '难度要求要素表',
                },
              },
            ],
          },
          {
            title: {
              ja: '徒手系の要求要素',
              en: 'Free-Hand Requirements',
              zh: '徒手类的要求要素',
            },
            element: {
              ja: `演技には徒手系基礎要素群１〜５全て入れなければならない。
２〜５は難度要素として数えることができるが、全員が同時または時間差で行われるものでなければならない。
また、静止は全員が同時に行うものでなければならない。

1. 徒手系基礎要素群の１つが全くない場合　　　【減点：１つにつき・・・1.00点】
2. 徒手系基礎要素群の１つが不十分な場合　　　【減点：１名につき・・・0.20点】
※不十分とは実施しない競技者がいた場合を示し、静止時間不足や柔軟性不足は実施減点とする。`,
              en: `A routine must include all the basic free-hand element groups 1 to 5.
Groups 2 to 5 can be counted as difficulty elements, but they must be performed by all gymnasts, either at the same time or one after another.
Static positions must be held by all gymnasts at the same time.

1. A basic free-hand element group is missing entirely.  [Deduction: 1.00 point per group]
2. A basic free-hand element group is incomplete.  [Deduction: 0.20 points per gymnast]
* Incomplete means that some gymnasts did not perform it. Holding a static position too briefly or insufficient flexibility is penalized in execution.`,
              zh: `成套动作必须编入徒手类基础要素组1至5的全部内容。
2至5可作为难度要素计算，但必须由全体队员同时或错时完成。
此外，静止必须由全体队员同时完成。

1. 完全没有徒手类基础要素组中的某一组时　　　【扣分：每1组……1.00分】
2. 徒手类基础要素组中的某一组不充分时　　　【扣分：每1名……0.20分】
※不充分是指有参赛者未做该动作，静止时间不足或柔韧性不足按完成扣分处理。`,
            },
            image: [
              {
                src: '/images/rules/(BM)requirement.png',
                alt: {
                  ja: '徒手系の要求要素表',
                  en: 'Table of free-hand requirements',
                  zh: '徒手类要求要素表',
                },
              },
            ],
          },
          {
            title: {
              ja: '転回系の種類',
              en: 'Types of Tumbling',
              zh: '翻腾类的种类',
            },
            element: {
              ja: `回転系には、助走を含めた転回運動と組および組立運動が含まれ、次の種類に分類される。

1. 同時技
全員が同時にスタートし、同時に技を終えるもの。
ただし同時技が終了後、直ちに数名が続けて転回系を行った場合も同時技として扱う。

2. シリーズ
競技者が一人ずつ、またはグループに分かれて、次々と途切れずに転回系を行ったもの。

3. 交差技
他の競技者の上を転回系で飛び越えるもの。

4. 組・組立運動
２人以上の競技者が組んで行う体操で、交互に体や力を利用しあうものをいう。
１名以上の競技者が接触したところから回転系として扱う。`,
              en: `Tumbling includes tumbling movements with their run-up, and partner and pyramid elements, and is classified into the following types.

1. Simultaneous elements
All gymnasts start and finish the element at the same time.
If several gymnasts continue with tumbling immediately after a simultaneous element, it is still treated as a simultaneous element.

2. Series
Gymnasts perform tumbling one after another without a break, individually or in groups.

3. Crossing elements
A gymnast tumbles over other gymnasts.

4. Partner and pyramid elements
Gymnastics performed by two or more gymnasts together, using each other's bodies and strength.
They count as tumbling from the moment one or more gymnasts make contact.`,
              zh: `翻腾类包括含助跑在内的翻腾动作以及双人、叠罗汉动作，分为以下种类。

1. 同时动作
全体队员同时开始、同时结束动作。
但同时动作结束后，若有数名队员立即接着完成翻腾类动作，也按同时动作处理。

2. 系列动作
参赛者逐个或分成小组，接连不断地完成翻腾类动作。

3. 交叉动作
以翻腾类动作从其他参赛者上方越过。

4. 双人、叠罗汉动作
指两名以上参赛者结伴进行的体操，相互利用身体和力量。
从1名以上参赛者接触之时起按翻腾类处理。`,
            },
          },
          {
            title: {
              ja: '回転系の条件',
              en: 'Conditions for Tumbling',
              zh: '翻腾类的条件',
            },
            element: {
              ja: `演技で実施された以下のものは転回系として数える。

1. １名以上が転回運動を単一（１回）または連続して実施した場合。
2. 組または組立運動を実施した場合。
3. 全員がいくつかのグループに分かれて次々と途切れずに（１）や（２）の転回運動を実施した場合。
4. 転回運動を行う際の助走は、転回系の一部として認める。
5. 側転を除く接転運動（前転・後転・横転・倒立回転）は転回系として数えないが、宙返りの後に補助的運動として行う前転および後転は回転系の一部として認める。
6. ３歩以上の助走つきのとびこみ前転（両足踏切）、２歩以内の助走つきのとびこみ前転（含片足踏切）でもひねりを加えた場合。`,
              en: `The following count as tumbling when performed in a routine.

1. One or more gymnasts perform a tumbling movement, once or in a series.
2. A partner or pyramid element is performed.
3. All gymnasts, divided into groups, perform the tumbling in (1) or (2) one after another without a break.
4. The run-up to a tumbling movement is accepted as part of the tumbling.
5. Rolling movements other than cartwheels (forward roll, backward roll, sideways roll, walkover) do not count as tumbling, but a forward or backward roll performed after a salto as a supporting movement is accepted as part of the tumbling.
6. A dive roll with a run-up of three or more steps (two-foot take-off), or a dive roll with a run-up of two steps or fewer (including a one-foot take-off) with an added twist.`,
              zh: `成套动作中完成的以下内容按翻腾类计算。

1. 1名以上队员单个（1次）或连续完成翻腾动作时。
2. 完成双人或叠罗汉动作时。
3. 全体队员分成若干小组，接连不断地完成（1）或（2）的翻腾动作时。
4. 完成翻腾动作时的助跑，认定为翻腾类的一部分。
5. 除侧手翻以外的滚翻动作（前滚翻、后滚翻、侧滚翻、手翻）不按翻腾类计算，但在空翻之后作为辅助动作完成的前滚翻和后滚翻，认定为翻腾类的一部分。
6. 带3步以上助跑的鱼跃前滚翻（双脚起跳），或带2步以内助跑的鱼跃前滚翻（含单脚起跳）但加入转体时。`,
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              zh: '翻腾类的要求要素',
            },
            element: {
              ja: `1. 回転系は４回入れなければならない。
【違反した場合　減点・・・0.30点】

2. 演技には次の転回系基礎要素群１・２を入れなければならない。
また転回系基礎要素群３は２回まで入れることができる。
【違反した場合：減点・・・0.30点】
※組・組立運動または接触でのスタートは３群扱いとする。`,
              en: `1. A routine must include four tumbling passes.
[Violation: deduction 0.30 points]

2. A routine must include the basic tumbling element groups 1 and 2 below.
Basic tumbling element group 3 may be included up to two times.
[Violation: deduction 0.30 points]
* A start from a partner or pyramid element or from contact is treated as group 3.`,
              zh: `1. 翻腾类必须编入4次。
【违反时　扣分……0.30分】

2. 成套动作必须编入下列翻腾类基础要素组1、2。
另外，翻腾类基础要素组3最多可编入2次。
【违反时：扣分……0.30分】
※以双人、叠罗汉动作或接触开始的，按第3组处理。`,
            },
            image: [
              {
                src: '/images/rules/(AM)requirement.png',
                alt: {
                  ja: '転回系の要求要素表',
                  en: 'Table of tumbling requirements',
                  zh: '翻腾类要求要素表',
                },
              },
            ],
          },
          {
            title: {
              ja: '制限技',
              en: 'Restricted Elements',
              zh: '限制动作',
            },
            element: {
              ja: '',
              en: '',
              zh: '',
            },
          },
          {
            title: {
              ja: '隊形の要求要素',
              en: 'Formation Requirements',
              zh: '队形的要求要素',
            },
            element: {
              ja: '隊形は最低５つ異なったものを含まなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include at least five different formations. [Violation: deduction 0.30 points]',
              zh: '队形必须包含至少5种不同的形式。【违反时　扣分……0.30分】',
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              zh: '成套动作的开始',
            },
            element: {
              ja: `1. 演技の開始は、演技面のどこ位置からでも良いが、全員が配置について開始のポーズをとり、動きを止めてから始めなければならない。
2. 演技開始時における接触および組・組立運動は転回系としては扱わないものとする。ただし解除までは３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may start anywhere on the floor area, but all gymnasts must take their positions, hold a starting pose and be still before starting.
2. Contact and partner or pyramid elements at the start of the routine are not treated as tumbling. They must be released within 3 seconds; if they last longer or include a salto, they count as tumbling.`,
              zh: `1. 成套动作可从场地的任何位置开始，但全体队员必须就位、摆出开始造型并静止后才能开始。
2. 成套动作开始时的接触以及双人、叠罗汉动作不按翻腾类处理。但解除接触须在3秒以内，超过该时间或加入空翻时，按翻腾类计算。`,
            },
          },
          {
            title: {
              ja: '演技の終了',
              en: 'End of the Routine',
              zh: '成套动作的结束',
            },
            element: {
              ja: `1. 演技終了は演技面内であればどの位置でもよいが、全員が終了のポーズをとり完全に動きを止めなければならない。
2. 演技終了時の接触および組・組立運動は転回系としては扱わない。ただし、終了ポーズに入る前の動作から３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
              en: `1. The routine may end anywhere on the floor area, but all gymnasts must hold a final pose and stop moving completely.
2. Contact and partner or pyramid elements at the end of the routine are not treated as tumbling. They must be completed within 3 seconds of the movement leading into the final pose; if they last longer or include a salto, they count as tumbling.`,
              zh: `1. 成套动作可在场地内的任何位置结束，但全体队员必须摆出结束造型并完全静止。
2. 成套动作结束时的接触以及双人、叠罗汉动作不按翻腾类处理。但须在进入结束造型之前的动作起3秒以内完成，超过该时间或加入空翻时，按翻腾类计算。`,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              zh: '技术价值的评分',
            },
            element: {
              ja: `演技の技術の価値は次の項目によって採点する。

【難度の数とレベル】
第28条による。
                      
【難度要素】
1. 徒手系要素をともなって実施される難度
第66条による。

2. 転回系要素をともなって実施される難度
第67条による。

【各種要素の組み合わせ】
1. 各運動の組み合わせによる技術的価値　
演技は各運動の組み合わせによっても技術価値を異にする。

2. 難度要素の同一性
演技は競技者全員が同じ技術、または同価値の難度で構成されることが求められる。

3. 難度要素の配分
難度要素は演技全体に均一に配分されることが求められる。

4. 難度要素の安定
難度要素は競技者ののy力に応じて構成されなければならない。`,
              en: `The technical value of a routine is scored on the following points.

[Number and level of difficulties]
See Article 28.

[Difficulty elements]
1. Difficulties performed with free-hand elements
See Article 66.

2. Difficulties performed with tumbling elements
See Article 67.

[Combination of elements]
1. Technical value from combining movements
The technical value of a routine also depends on how the movements are combined.

2. Uniformity of difficulty elements
All gymnasts are required to perform the same technique or difficulties of the same value.

3. Distribution of difficulty elements
Difficulty elements should be distributed evenly throughout the routine.

4. Stability of difficulty elements
Difficulty elements must be chosen according to the gymnasts' ability.`,
              zh: `成套动作的技术价值按以下项目评分。

【难度的数量与等级】
依据第28条。
                      
【难度要素】
1. 伴随徒手类要素完成的难度
依据第66条。

2. 伴随翻腾类要素完成的难度
依据第67条。

【各类要素的组合】
1. 各动作组合所产生的技术价值　
成套动作的技术价值也因各动作的组合方式而不同。

2. 难度要素的同一性
要求成套动作由全体参赛者以相同技术或同等价值的难度构成。

3. 难度要素的分配
要求难度要素在整套动作中均匀分配。

4. 难度要素的稳定
难度要素必须根据参赛者的能力进行编排。`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              zh: '多样性的评分',
            },
            element: {
              ja: `構成は、以下の項目において多様性に富むという印象を与えなければならない。

1. 徒手系要素の多様性
様々な徒手系の運動要素と組み合わせにおいて、多様性に富むものでなければならない。

2. 転回系要素の多様性
様々な転回系の要素や種類、その組み合わせにおいて、多様性の富むものでなければならない。

3. 空間仕様の多様性
様々な隊形や移動を含め、その方向、大きさ、軌道、高さにおいて、演技面全体を使うものでなければならない。

4. リズム変化の多様性
音楽の性格、そのリズムと完全に一致した運動で、そのリズムの変化が多様性に富むものでなければならない。

5.ダイナミズム（力動感）の変化の多様性
ダイナミズムとはスピードと力強さの変化によって表現される力動感のことで、その緩急の変化において、多様性に富むものでなければならない。`,
              en: `The composition must give an impression of great variety in the following respects.

1. Variety of free-hand elements
The routine must be rich in variety of free-hand movements and their combinations.

2. Variety of tumbling elements
The routine must be rich in variety of tumbling elements, their types and their combinations.

3. Variety in the use of space
The routine must use the whole floor area, with a variety of formations and movements across the floor, in their directions, sizes, paths and levels.

4. Variety of rhythm
The movements must match the character and rhythm of the music exactly, and the changes of rhythm must be rich in variety.

5. Variety of dynamics
Dynamics means the sense of power expressed by changes in speed and strength. The changes between fast and slow must be rich in variety.`,
              zh: `编排必须在以下项目上给人以富于多样性的印象。

1. 徒手类要素的多样性
在各种徒手类动作要素及其组合上，必须富于多样性。

2. 翻腾类要素的多样性
在各种翻腾类要素、种类及其组合上，必须富于多样性。

3. 空间使用的多样性
包括各种队形与移动在内，在其方向、幅度、路线、高度上，必须使用整个场地。

4. 节奏变化的多样性
动作必须与音乐的性格及其节奏完全一致，并且其节奏变化必须富于多样性。

5.动感（力度感）变化的多样性
动感是指通过速度与力量的变化所表现出的力度感，在其快慢变化上必须富于多样性。`,
            },
          },
          {
            title: {
              ja: '音楽と動きの関係の採点',
              en: 'Scoring of the Relationship Between Music and Movement',
              zh: '音乐与动作关系的评分',
            },
            element: {
              ja: '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
              en: 'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
              zh: '艺术体操的伴奏音乐必须以优美的音色与旋律为特征。成套动作必须与音乐的性格和节奏相吻合。',
            },
          },
          {
            title: {
              ja: '独創性の採点',
              en: 'Scoring of Originality',
              zh: '独创性的评分',
            },
            element: {
              ja: '構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。',
              en: 'The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations.',
              zh: '编排要求具有独创性，即以新技术、新组合等对新颖性的追求和技术上的创造性为特征。',
            },
          },
          {
            title: {
              ja: '構成の欠点',
              en: 'Composition Faults',
              zh: '编排的缺点',
            },
            element: {
              ja: `上記に欠点を示していない構成の減点は次の表による。
                  
構成欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

構成欠点表`,
              en: `Composition deductions not listed above follow the table below.

Composition fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of composition faults`,
              zh: `以上未列出缺点的编排扣分依下表。
                  
编排缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　扣分……0.05分】

编排缺点表`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou.png',
                alt: {
                  ja: '構成欠点表',
                  en: 'Table of composition faults',
                  zh: '编排缺点表',
                },
              },
            ],
          },
        ],
      },
      {
        title: {
          ja: '実施（Ｅ）',
          en: 'Execution (E)',
          zh: '完成（E）',
        },
        block: [
          {
            title: {
              ja: '演技のできばえ',
              en: 'Quality of the Routine',
              zh: '成套动作的完成质量',
            },
            element: {
              ja: '演技は徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象で伸び伸びと行わなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              zh: '成套动作在徒手类技术、翻腾类技术以及与伴奏音乐的协调等方面必须具有整体的协调与稳定，并且自始至终给人以连贯不断的印象，舒展大方地完成。要求配合伴奏音乐，做出轻快、优美且富有优雅表现力的完成。',
            },
          },
          {
            title: {
              ja: '体の動きの技術の採点',
              en: 'Scoring of Body Movement Technique',
              zh: '身体动作技术的评分',
            },
            element: {
              ja: `身体の動きの技術は、次の項目で採点される。

1. 徒手系の技術
徒手系は、美しい姿勢と柔軟性をもって行われ、みぞおちから始まる動きの自然性や深さ、大きさ、動きの間やアクセント、跳躍の高さ、そしてスピードに変化があり、身体の四肢の部分まで制御された動きでなければならない。

2.転回系の技術
転回系は、スピードと高さ、回転軸の正確性と着地の安定性を持ったダイナミックな動きでなければならない。

3. リズミカルな実施
演技は軽快に伸びやかに行わなければならない。

4.個人および全体の欠点
次の個人および全体の欠点があった場合は実施欠点表に応じて減点される。

5. 個人の姿勢やうお機に不正確鯖あった場合
6. 動きや隊形に乱れがあった場合`,
              en: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.

4. Individual and collective faults
Individual and collective faults such as the following are penalized according to the table of execution faults.

5. Inaccurate posture or movement of an individual gymnast
6. Disorder in movements or formations`,
              zh: `身体动作的技术按以下项目评分。

1. 徒手类的技术
徒手类动作必须以优美的姿势和柔韧性完成，由心窝处发起的动作要具有自然性、深度和幅度，动作的停顿与重音、跳跃的高度以及速度要有变化，并且必须控制到四肢末端。

2.翻腾类的技术
翻腾类必须是具有速度与高度、转体轴准确、落地稳定的富有动感的动作。

3. 富有节奏的完成
成套动作必须轻快舒展地完成。

4.个人及全体的缺点
出现以下个人及全体的缺点时，依据完成缺点表扣分。

5. 个人姿势或动作不准确时
6. 动作或队形出现混乱时`,
            },
          },
          {
            title: {
              ja: '全体的な調和の採点',
              en: 'Scoring of Overall Harmony',
              zh: '整体协调性的评分',
            },
            element: {
              ja: `全体的な調和は次の項目で採点される。

1. 団体的同時性
演技は、最初から終了まで同じ動きや異なる動きが一体感を持って組み合わされ、そのスケールの大きさとスピード、リズム、ダイナミズムにおいて調和と一致のある実施が求められる。" +

2. 音楽との調和

3. 音楽が演技を妨害している場合
【減点：0.20点】

4. 音量が著しく大きい場合
【減点：0.20点】

5. 終末動作が音楽と一致しなかった場合
【減点：0.20点】

6. 芸術性と表現
演技には芸術性を持った表現が求められる。芸術性とは、身体の技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し、伝え感動させることをいう。" +

7. 競技者の躊躇や演技の中断
【減点：１秒につき0.10点】`,
              en: `Overall harmony is scored on the following points.

1. Group synchronization
From start to finish, identical and different movements must be combined with a sense of unity, and the execution must be harmonious and unified in amplitude, speed, rhythm and dynamics.

2. Harmony with the music

3. The music disturbs the routine
[Deduction: 0.20 points]

4. The volume is excessively loud
[Deduction: 0.20 points]

5. The final movement does not match the music
[Deduction: 0.20 points]

6. Artistry and expression
A routine requires artistic expression. Artistry means using body technique to express the theme of the music and the message of the composition to the audience, conveying it and moving them.

7. Hesitation by a gymnast or interruption of the routine
[Deduction: 0.10 points per second]`,
              zh: `整体协调性按以下项目评分。

1. 团体的同时性
成套动作从开始到结束，相同动作与不同动作必须富有整体感地组合在一起，要求在幅度、速度、节奏和动感上做到协调一致。

2. 与音乐的协调

3. 音乐妨碍成套动作时
【扣分：0.20分】

4. 音量明显过大时
【扣分：0.20分】

5. 结束动作与音乐不一致时
【扣分：0.20分】

6. 艺术性与表现
成套动作要求具有艺术性的表现。艺术性是指运用身体技术，向观众表现并传达音乐的主题与编排所要传递的信息，使观众受到感染。

7. 参赛者犹豫或成套动作中断
【扣分：每1秒0.10分】`,
            },
          },
          {
            title: {
              ja: '禁止事項',
              en: 'Prohibited Actions',
              zh: '禁止事项',
            },
            element: {
              ja: '演技中に漕いでない体の接触はしてはいけない。',
              en: 'Unnecessary body contact must not be made during the routine.',
              zh: '成套动作中不得有不必要的身体接触。',
            },
          },
          {
            title: {
              ja: '実施の欠点',
              en: 'Execution Faults',
              zh: '完成的缺点',
            },
            element: {
              ja: `上記に示していない実施の減点は次の表による。実施欠点基準
                  
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表

倒立、バランス、柔軟の実施減点`,
              en: `Execution deductions not listed above follow the table below.

Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults

Execution deductions for handstands, balances and flexibility`,
              zh: `以上未列出的完成扣分依下表。完成缺点标准
                  
完成缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　扣分……0.05分】

完成缺点表

倒立、平衡、柔韧的完成扣分`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou1.png',
                alt: {
                  ja: '実施欠点表（D）１',
                  en: 'Table of execution faults, part 1',
                  zh: '完成缺点表（D）1',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou2.png',
                alt: {
                  ja: '実施欠点表（D）２',
                  en: 'Table of execution faults, part 2',
                  zh: '完成缺点表（D）2',
                },
              },
              {
                src: '/images/rules/(E)kettenhyou3.png',
                alt: {
                  ja: '実施欠点表（D）３',
                  en: 'Table of execution faults, part 3',
                  zh: '完成缺点表（D）3',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
