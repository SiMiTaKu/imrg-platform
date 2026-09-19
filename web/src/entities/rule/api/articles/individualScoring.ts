import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、個人競技。
 * 英語（`title.en` など）は日本語の本文を訳したもの
 */
export const INDIVIDUAL_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: {
      ja: '個人競技',
      en: 'Individual Competition',
      zh: '个人比赛',
    },
    section: [
      {
        title: {
          ja: '配点と採点項目',
          en: 'Points and Scoring Criteria',
          zh: '分值与评分项目',
        },
        block: [
          {
            title: {
              ja: '個人競技の採点項目と配点',
              en: 'Scoring Criteria and Points for the Individual Competition',
              zh: '个人比赛的评分项目与分值',
            },
            element: {
              ja: '個人競技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the individual competition are as follows.',
              zh: '个人比赛的分值与评分项目如下。',
            },
            image: [
              {
                src: '/images/rules/SK(D)single.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  zh: '评分项目（D）',
                },
              },
              {
                src: '/images/rules/SK(E)single.png',
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
              ja: '演技の構成',
              en: 'Composition of the Routine',
              zh: '成套动作的编排',
            },
            element: {
              ja: '演技は手具操作を伴った徒手系と転回系を持って構成され、高い技術的価値と各要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性をもった組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand and tumbling elements with apparatus handling, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              zh: '成套动作由伴随器械操作的徒手动作与翻腾动作构成，要求具有较高的技术价值、各要素的多样性、音乐与动作的关系以及独创性。此外，所有动作都必须以合理且稳定的组合进行编排，并具有丰富的运动量。',
            },
          },
          {
            title: {
              ja: '難度の要求要素',
              en: 'Difficulty Requirements',
              zh: '难度的要求要素',
            },
            element: {
              ja: `個人競技の難度要素としては以下の難度を入れなければならない。
                  
違反した場合　　減点　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点

※要求された数以上の難度は、ランク下の難度として数えることができる。
                  `,
              en: `An individual routine must include the following difficulties.

Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
              zh: `个人比赛的难度要素必须编入以下难度。
                  
违反时　　扣分　
B难度不足　每缺1个……0.10分
C难度不足　每缺1个……0.30分
D难度不足　每缺1个……0.50分

※超过要求数量的难度，可以作为低一级的难度计算。
                  `,
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
              zh: '徒手动作的要求要素',
            },
            element: {
              ja: '演技には徒手系基礎要素群（第29条）の１群（各種徒手）を入れなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include group 1 (various free-hand movements) of the basic free-hand element groups (Article 29). [Violation: deduction 0.30 points]',
              zh: '成套动作中必须编入徒手基础要素组（第29条）的第1组（各种徒手动作）。【违反时　扣分……0.30分】',
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              zh: '翻腾动作的要求要素',
            },
            element: {
              ja: '演技には前方・後方・側方の転回運動をすべてて入れなければならない。【違反した場合　減点：一つにつき・・・0.30点】',
              en: 'A routine must include forward, backward and sideways tumbling. [Violation: deduction 0.30 points for each missing direction]',
              zh: '成套动作中必须编入向前、向后、向侧的全部翻腾动作。【违反时　扣分：每缺1项……0.30分】',
            },
          },
          {
            title: {
              ja: '手具操作の要求要素',
              en: 'Apparatus Handling Requirements',
              zh: '器械操作的要求要素',
            },
            element: {
              ja: `演技には各種目ごとに、次の基礎要素をすべて入れなければならない。

【スティック】

1. 左投げ左受け１回
2. 右投げ右受け１回
3. 1. 2. を含む３回以上の投げ上げ
4. １m以上のころがし
5. プロペラ回旋２回

【要素が不足した場合　減点：１つにつき・・・0.30点】


【リング】

1. ２つ同時なげ
2. 1. を含む３回以上の投げ上げ
3. １m以上のころがし
4. まわし２回

【要素が不足した場合　減点：１つにつき・・・0.30点】


【ロープ】

1. ３回以上の投げ上げ
2. ３重跳び
3. ６m以上の移動を伴う連続跳び
4. ２回以上の連続前まわし跳び
5. ２回以上の連続後ろまわし跳び

【要素が不足した場合　減点：１つにつき・・・0.30点】


【クラブ】

1. ２つ同時なげ
2. 1. を含む３回以上の投げ上げ
3. 50cm以上のころがし
4. プロペラ回旋２回

【要素が不足した場合　減点：１つにつき・・・0.30点】`,
              en: `A routine must include all of the following basic elements for each apparatus.

[Stick]

1. One throw with the left hand caught with the left hand
2. One throw with the right hand caught with the right hand
3. At least three throws, including 1 and 2
4. A roll of at least 1 m
5. Two propeller rotations

[Missing elements: deduction 0.30 points each]


[Ring]

1. A simultaneous throw of both rings
2. At least three throws, including 1
3. A roll of at least 1 m
4. Two spins

[Missing elements: deduction 0.30 points each]


[Rope]

1. At least three throws
2. A triple under
3. Consecutive jumps traveling at least 6 m
4. At least two consecutive forward jumps
5. At least two consecutive backward jumps

[Missing elements: deduction 0.30 points each]


[Club]

1. A simultaneous throw of both clubs
2. At least three throws, including 1
3. A roll of at least 50 cm
4. Two propeller rotations

[Missing elements: deduction 0.30 points each]`,
              zh: `成套动作中，每个项目都必须编入以下全部基础要素。

【短棒】

1. 左手抛左手接1次
2. 右手抛右手接1次
3. 包含1、2在内的3次以上抛起
4. 1m以上的滚动
5. 螺旋桨式旋转2次

【要素不足时　扣分：每缺1个……0.30分】


【环】

1. 2个同时抛
2. 包含1在内的3次以上抛起
3. 1m以上的滚动
4. 绕环2次

【要素不足时　扣分：每缺1个……0.30分】


【绳】

1. 3次以上抛起
2. 三重跳
3. 伴随6m以上移动的连续跳
4. 2次以上的连续向前绕跳
5. 2次以上的连续向后绕跳

【要素不足时　扣分：每缺1个……0.30分】


【棍棒】

1. 2个同时抛
2. 包含1在内的3次以上抛起
3. 50cm以上的滚动
4. 螺旋桨式旋转2次

【要素不足时　扣分：每缺1个……0.30分】`,
            },
          },
          {
            title: {
              ja: '手具の要素と難度',
              en: 'Apparatus Elements and Difficulty',
              zh: '器械的要素与难度',
            },
            element: {
              ja: `【投げ上げ】

1. 手具の投げ上げの高さは、競技者が投げたところから最低２m以上とする。低い場合は投げ上げとして扱わない。
2. スティックの投げ受けの要素は、受け損じた場合には要素として扱わない。
3. 手具を投げている間に、徒手系や転回系を行い受け損じた場合、投げ上げの要素として数えるが、投げ受けの難度としては扱わない。ただし、リングやクラブの２つの同時投げで片方の手具のみ受け損じた場合は、投げ上げの難度として数える。
4. ２つ同時投げは、片手、両手または足で投げるものとし、受けは自由とする。ただし、２つのリングを結合して投げた場合や、片方の手具が投げたところから２mに満たない場合は要素として認めない。

【ころがし】

ころがしが短かった場合は、要素としては扱わない。

【ロープの様々な跳び】
前回し跳び、後ろ回し跳びが２回連続でなかった場合、移動をともなう跳びの距離が短かった場合は要素としては扱わない。
                  `,
              en: `[Throws]

1. A throw must rise at least 2 m from the point of release. Lower throws are not treated as throws.
2. A stick throw-and-catch element that is not caught is not counted as an element.
3. If the gymnast performs free-hand or tumbling elements during a throw and fails to catch the apparatus, it counts as a throw element but not as a throw-and-catch difficulty. However, in a simultaneous throw of two rings or two clubs, if only one apparatus is not caught, it counts as a throw difficulty.
4. A simultaneous throw of two apparatus may be made with one hand, both hands or the feet, and the catch is free. However, it is not accepted as an element if the two rings are joined together when thrown, or if one of the apparatus rises less than 2 m from the point of release.

[Rolls]

A roll that is too short is not counted as an element.

[Rope jumps]
Forward and backward jumps that are not performed twice in a row, and traveling jumps that cover too short a distance, are not counted as elements.`,
              zh: `【抛起】

1. 器械抛起的高度，从参赛者抛出的位置算起最低为2m以上。低于此高度时不作为抛起处理。
2. 短棒的抛接要素，未能接住时不作为要素处理。
3. 在抛出器械期间完成徒手动作或翻腾动作而未能接住时，计为抛起的要素，但不作为抛接的难度处理。但是，环或棍棒的2个同时抛中只有一个器械未能接住时，计为抛起的难度。
4. 2个同时抛可以用单手、双手或脚抛出，接的方式不限。但是，将2个环连接在一起抛出时，或其中一个器械从抛出的位置算起未达到2m时，不认可为要素。

【滚动】

滚动的距离过短时，不作为要素处理。

【绳的各种跳】
向前绕跳、向后绕跳未连续2次时，以及伴随移动的跳距离过短时，不作为要素处理。
                  `,
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              zh: '成套动作的开始',
            },
            element: {
              ja: '演技の開始は、演技面のどの位置からでもよいが、手具に触れた状態で配置について開始のポーズをとり、動きを止めてから始めなければならない。【違反した場合　減点・・・0.30点】',
              en: 'The routine may start anywhere on the floor area, but the gymnast must take position touching the apparatus, hold a starting pose and be still before starting. [Violation: deduction 0.30 points]',
              zh: '成套动作可以从场地的任何位置开始，但必须在接触器械的状态下就位、摆出开始姿势，静止后才能开始。【违反时　扣分……0.30分】',
            },
          },
          {
            title: {
              ja: '演技の終了',
              en: 'End of the Routine',
              zh: '成套动作的结束',
            },
            element: {
              ja: `演技の終了は、演技面のどの位置でもよいが、手具に触れた状態で終了のポーズをとり、完全に動きを止めて終了しなければならない。
【違反した場合　減点・・・0.30点】

手具を場外へ取りに行き、そのままラストポーズを行わなかった場合
終了なし　　構成審判からの減点・・・0.30点
演技中断　　実施審判からの減点・・・0.50点
場外　　　実施主任審判から減点・・・0.20点
計 1.00点
                  `,
              en: `The routine may end anywhere on the floor area, but the gymnast must hold a final pose touching the apparatus and stop moving completely.
[Violation: deduction 0.30 points]

If the gymnast leaves the floor area to retrieve the apparatus and does not hold a final pose:
No ending: deduction by the composition judges, 0.30 points
Interruption of the routine: deduction by the execution judges, 0.50 points
Out of bounds: deduction by the execution chief judge, 0.20 points
Total: 1.00 point`,
              zh: `成套动作可以在场地的任何位置结束，但必须在接触器械的状态下摆出结束姿势，完全静止后结束。
【违反时　扣分……0.30分】

到场外去捡器械、就此没有做最后姿势时
无结束　　编排裁判员的扣分……0.30分
中断成套　　完成裁判员的扣分……0.50分
出界　　　完成主裁判员的扣分……0.20分
合计 1.00分
                  `,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              zh: '技术价值的评分',
            },
            element: {
              ja: `＜難度の数とレベル＞ 第49条による

【難度要素】
1. 徒手系要素をともなって実施される難度  第71条による。
2. 転回系要素をともなって実施される難度  第69条による。
3. 投げ受けをともなって実施される難度  第70条による。
                    
【各種要素の組み合わせ】
1. 各運動の組み合わせによる技術的価値
演技は各運動の組み合わせ価値によっても技術的価値を異にする。

2. 難度要素の配分
難度要素は演技全体に均一に配分されることが求められる。

3. 難度要素の安定
難度要素は競技者の能力に応じて構成されなければらない。


＜手具操作の技術的価値＞

【手具操作における左手と右手の均衡】
手具の操作は、１つの調和のとれた構成として、片寄ることなく、左手と右手で操作されなければならない。

【投げ受けの技術的価値】
手具の投げ受けは、手具操作の流れを止めることなく行われなければならない。また、手だけでなく、その他の部位を使った投げ受けやし野外での投げ受けも高い技術的価値として認めることができる。`,
              en: `<Number and level of difficulties> See Article 49.

[Difficulty elements]
1. Difficulties performed with free-hand elements: see Article 71.
2. Difficulties performed with tumbling elements: see Article 69.
3. Difficulties performed with throws and catches: see Article 70.

[Combination of elements]
1. Technical value from combining movements
The technical value of a routine also depends on the value of how the movements are combined.

2. Distribution of difficulty elements
Difficulty elements should be distributed evenly throughout the routine.

3. Stability of difficulty elements
Difficulty elements must be chosen according to the gymnast's ability.


<Technical value of apparatus handling>

[Balance between the left and right hands]
As a harmonious whole, the apparatus must be handled with both the left and right hands, without favoring one.

[Technical value of throws and catches]
Throws and catches must be performed without stopping the flow of apparatus handling. Throws and catches with parts of the body other than the hands, and throws and catches outside the field of vision, can also be recognized as having high technical value.`,
              zh: `＜难度的数量与等级＞ 依据第49条

【难度要素】
1. 伴随徒手要素完成的难度  依据第71条。
2. 伴随翻腾要素完成的难度  依据第69条。
3. 伴随抛接完成的难度  依据第70条。
                    
【各种要素的组合】
1. 各动作组合产生的技术价值
成套动作的技术价值也因各动作的组合价值而有所不同。

2. 难度要素的分配
要求难度要素在整套动作中均匀分配。

3. 难度要素的稳定
难度要素必须根据参赛者的能力进行编排。


＜器械操作的技术价值＞

【器械操作中左手与右手的均衡】
器械的操作必须作为一个协调的整体，不偏向一侧，用左手和右手进行操作。

【抛接的技术价值】
器械的抛接必须在不中断器械操作流畅性的情况下进行。此外，不仅用手，使用其他部位的抛接以及视野外的抛接，也可以认定为具有较高的技术价值。`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              zh: '多样性的评分',
            },
            element: {
              ja: `1. 徒手系要素の多様性
様々な徒手系の運動要素と組み合わせにおいて、多様性に富むものでなければならない。

2. 転回系要素の多様性
様々な転回系の要素や種類、その組み合わせにおいて、多様性の富むものでなければならない。

3. 手具操作の多様性
様々な手具の操作やその組み合わせにおいて、多様性に富むものでなければならない。（付録：各手具の演技参照）

4. 空間仕様の多様性
様々な移動を含め、その方向、大きさ、軌道、高さにおいて、演技面全体を使うものでなければならない。

5. リズム変化の多様性
音楽の性格、そのリズムと完全に一致した運動で、そのリズムの変化が多様性に富むものでなければならない。

6. ダイナミズム（力動感）の変化の多様性
ダイナミズムとはスピードと力強さの変化によって表現される力動感のことで、その緩急の変化において、多様性に富むものでなければならない。`,
              en: `1. Variety of free-hand elements
The routine must be rich in variety of free-hand movements and their combinations.

2. Variety of tumbling elements
The routine must be rich in variety of tumbling elements, their types and their combinations.

3. Variety of apparatus handling
The routine must be rich in variety of apparatus handling and its combinations. (See the Appendix: routines with each apparatus.)

4. Variety in the use of space
The routine must use the whole floor area, with a variety of movements across the floor, in their directions, sizes, paths and levels.

5. Variety of rhythm
The movements must match the character and rhythm of the music exactly, and the changes of rhythm must be rich in variety.

6. Variety of dynamics
Dynamics means the sense of power expressed by changes in speed and strength. The changes between fast and slow must be rich in variety.`,
              zh: `1. 徒手要素的多样性
在各种徒手动作要素及其组合上，必须富于多样性。

2. 翻腾要素的多样性
在各种翻腾要素的种类及其组合上，必须富于多样性。

3. 器械操作的多样性
在各种器械操作及其组合上，必须富于多样性。（附录：参见各器械的成套动作）

4. 空间使用的多样性
包括各种移动在内，在其方向、幅度、路线、高度上，必须使用整个场地。

5. 节奏变化的多样性
动作必须与音乐的性格及其节奏完全一致，其节奏的变化必须富于多样性。

6. 动感（力动感）变化的多样性
动感是指通过速度与力度的变化所表现出的力动感，在其快慢变化上，必须富于多样性。`,
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
              zh: '艺术体操的伴奏音乐必须以优美的音色和旋律为特征。成套动作必须与音乐的性格和节奏相吻合。',
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              zh: '奖励加分',
            },
            element: {
              ja: `【独創性】
構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。その独創性が認められる構成にはボーナス加点が与えられる。

独創的な構成とは、以下の事柄などが求められる。
1. 新しい要素（身体の動きの要素、手具操作の要素、転回系またはそれらの連携の要素）
2. 競技者と手具の関係における新しさ
3. すでにある要素の新しい実施方法
4. すでにある要素の新しい組み合わせ
【加点・・・0.20点】

【追加の難度】
演技の技術的な価値は主として難度のレベルと数、その組み合わせ価値によって考慮される。以下の（１）〜（４）の場合に、その「技術の価値」に対しボーナス加点が与えられる。

1. 構成中に４つ以上のＤ難度が入っている場合
2. 手具を投げ上げている間に、４つ以上の徒手系や転回系を組み合わせて実施するもの、またはＤ難度の投げ受けを２本投げで行なった場合。
3. 手具を保持して行うＤ難度の転回系に、投げまたは２回以上の操作を実施するものが入っていた場合
4. 視野外の投げ上げや受け取り、手以外での投げ上げや受け取りが入っていた場合。
【加点：項目一つにつき・・・0.10点】`,
              en: `[Originality]
The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations. A bonus is given to a composition recognized as original.

An original composition includes, for example:
1. New elements (body movement elements, apparatus handling elements, tumbling elements or links between them)
2. Novelty in the relationship between the gymnast and the apparatus
3. New ways of performing existing elements
4. New combinations of existing elements
[Bonus: 0.20 points]

[Additional difficulty]
The technical value of a routine is mainly determined by the level and number of difficulties and the value of their combinations. A bonus for this technical value is given in the following cases (1) to (4).

1. The composition includes four or more D difficulties.
2. Four or more free-hand or tumbling elements are combined during a throw, or a D difficulty throw and catch is performed with two apparatus thrown.
3. A D difficulty tumbling element performed while holding the apparatus includes a throw or two or more handlings.
4. The routine includes a throw or catch outside the field of vision, or a throw or catch with a part of the body other than the hands.
[Bonus: 0.10 points per item]`,
              zh: `【独创性】
编排要求具有独创性，即以新技术、新组合等对新颖性的追求和技术上的创造性为特征。对被认定具有独创性的编排给予奖励加分。

独创的编排要求具备以下内容等。
1. 新的要素（身体动作的要素、器械操作的要素、翻腾动作或它们衔接的要素）
2. 参赛者与器械关系上的新颖性
3. 已有要素的新的完成方法
4. 已有要素的新的组合
【加分……0.20分】

【追加的难度】
成套动作的技术价值主要根据难度的等级与数量及其组合价值来考量。在以下（1）—（4）的情况下，对该“技术价值”给予奖励加分。

1. 编排中编入4个以上D难度时
2. 在抛起器械期间组合完成4个以上徒手动作或翻腾动作，或以抛出2个器械完成D难度的抛接时。
3. 持器械完成的D难度翻腾动作中，含有抛出或2次以上操作时
4. 含有视野外的抛起或接、用手以外部位的抛起或接时。
【加分：每项……0.10分】`,
            },
          },
          {
            title: {
              ja: '構成の欠点',
              en: 'Composition Faults',
              zh: '编排的缺点',
            },
            element: {
              ja: `上記に欠点を示していない構成の原点は次の表による。
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
              zh: `上述未列出缺点的编排，其扣分依据下表。
编排缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　　扣分……0.05分】

编排缺点表`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou(S).png',
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
              ja: '演技は手具操作をともなった徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象でのびのびと行われなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique with apparatus handling, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              zh: '成套动作必须在伴随器械操作的徒手技术、翻腾技术以及与伴奏音乐的协调等方面具有整体的协调性与稳定性，并自始至终以不间断的印象舒展地完成。要求配合伴奏音乐，做出轻快、优美且具有优雅表现力的完成。',
            },
          },
          {
            title: {
              ja: '手具操作の技術の採点',
              en: 'Scoring of Apparatus Handling Technique',
              zh: '器械操作技术的评分',
            },
            element: {
              ja: `【一般的な技術】
演技中の手具は、常に自然性を持ち、その手具自体の重さからくる惰力を利用して、動かなければならない。また演技上必要とされる静止を除いて、手具を止めてはならない。

【振り回しの技術】
手具を手に持って、振ったり回したりする場合は、原則として腕の延長のように扱わなければならない。

【投げ受けの技術】
1. 手で手具を投げる技術
特殊な投げを除き、原則として振りや回しの技術を利用して投げなければならない。

2. 手具を受ける技術
手具の受け取りは、手具の落下に合わせ、その次の操作に必要とされる部分を、自然性を持って受け取り、止めることなく次の操作に移らなければならない。`,
              en: `[General technique]
During the routine, the apparatus must always move naturally, using the momentum that comes from its own weight. The apparatus must not be stopped, except for static positions required by the routine.

[Swinging technique]
When the apparatus is swung or circled in the hand, as a rule it must be handled like an extension of the arm.

[Throwing and catching technique]
1. Throwing the apparatus with the hand
Except for special throws, as a rule the apparatus must be thrown using the swinging or circling technique.

2. Catching the apparatus
The apparatus must be caught naturally, in time with its fall, at the part needed for the next handling, and the gymnast must move on to the next handling without stopping.`,
              zh: `【一般的技术】
成套动作中的器械必须始终保持自然性，利用器械自身重量产生的惯性运动。此外，除成套动作所需要的静止外，不得使器械停止。

【挥摆的技术】
手持器械进行挥摆或绕环时，原则上必须像手臂的延长一样进行操作。

【抛接的技术】
1. 用手抛出器械的技术
除特殊的抛出外，原则上必须利用挥摆或绕环的技术抛出。

2. 接器械的技术
接器械时，必须配合器械的下落，自然地用下一个操作所需要的部位接住，并不停顿地转入下一个操作。`,
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
演技は軽快に伸びやかに行わなければならない。`,
              en: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.`,
              zh: `身体动作的技术按以下项目评分。
                  
1. 徒手的技术
徒手动作必须以优美的姿势与柔韧性完成，从心窝开始的动作要有自然性、深度与幅度，动作的间歇与重音、跳跃的高度以及速度要有变化，并且必须是控制到身体四肢末端的动作。

2.翻腾的技术
翻腾必须是具有速度与高度、转体轴准确、落地稳定的富有动感的动作。

3. 有节奏的完成
成套动作必须轻快而舒展地完成。`,
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              zh: '奖励加分',
            },
            element: {
              ja: `【熟練度と芸術性】
熟練度とは、手具を扱う技術と身体の動きの技術とが、完璧にかつ同時にコントロールされていることをいう。また芸術性とは、それらの技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し伝え感動させることを言う。以下を満たした場合、これに対してボーナス加点が与えられる。

1. 演技全体が欠点なく演じられた場合
2. 演技全体を通じて、完璧な技術、ゆとり、卓抜な大きさを持って行われた場合
3. 音楽のテーマと構成のメッセージを完璧に表現し演じられた場合
【加点・・・各0.10点】

※ここでの欠点は第65条実施の欠点表に記載されている「徒手の動きの技術」以外の欠点がない場合をいう。`,
              en: `[Mastery and artistry]
Mastery means that apparatus handling technique and body movement technique are controlled perfectly and simultaneously. Artistry means using these techniques to express the theme of the music and the message of the composition to the audience, conveying it and moving them. A bonus is given when the following are met.

1. The whole routine is performed without faults.
2. The whole routine is performed with perfect technique, ease and outstanding amplitude.
3. The theme of the music and the message of the composition are expressed perfectly.
[Bonus: 0.10 points each]

* "Without faults" here means that there are no faults in the table of execution faults in Article 65 other than those under "free-hand movement technique".`,
              zh: `【熟练度与艺术性】
熟练度是指操作器械的技术与身体动作的技术被完美且同时地控制。艺术性是指运用这些技术，向观众表现并传达音乐的主题与编排的信息，使其受到感动。满足以下各项时，对此给予奖励加分。

1. 整套动作完成得没有缺点时
2. 整套动作自始至终以完美的技术、从容和卓越的幅度完成时
3. 完美地表现并演绎音乐的主题与编排的信息时
【加分……各0.10分】

※这里所说的没有缺点，是指没有第65条完成缺点表中记载的“徒手动作技术”以外的缺点。`,
            },
          },
          {
            title: {
              ja: '実施の欠点',
              en: 'Execution Faults',
              zh: '完成的缺点',
            },
            element: {
              ja: `上記に欠点を示していない実施の減点は次の表による。
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表`,
              en: `Execution deductions not listed above follow the table below.
Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults`,
              zh: `上述未列出缺点的完成，其扣分依据下表。
完成缺点标准
【大缺点　　明显欠缺时　　　　扣分……0.30分】
【中缺点　　欠缺时　　　　　　扣分……0.20分】
【小缺点　　略有欠缺时　　　　扣分……0.10分】
【微小缺点　稍有欠缺时　　　　扣分……0.05分】

完成缺点表`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou(S).png',
                alt: {
                  ja: '実施欠点表',
                  en: 'Table of execution faults',
                  zh: '完成缺点表',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
