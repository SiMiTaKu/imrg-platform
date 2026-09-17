import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、個人競技。
 * 英語（`titleEnglish` など）は日本語の本文を訳したもの
 */
export const INDIVIDUAL_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: '個人競技',
    titleEnglish: 'Individual Competition',
    section: [
      {
        title: '配点と採点項目',
        titleEnglish: 'Points and Scoring Criteria',
        block: [
          {
            title: '個人競技の採点項目と配点',
            titleEnglish: 'Scoring Criteria and Points for the Individual Competition',
            element: '個人競技の配点と採点項目は以下の通りとする。',
            elementEnglish:
              'The points and scoring criteria for the individual competition are as follows.',
            image: [
              {
                src: '/images/rules/SK(D)single.png',
                alt: '採点項目（Ｄ）',
                altEnglish: 'Scoring criteria (D)',
              },
              {
                src: '/images/rules/SK(E)single.png',
                alt: '採点項目（Ｅ）',
                altEnglish: 'Scoring criteria (E)',
              },
            ],
          },
        ],
      },
      {
        title: '構成（Ｄ・Ａ）',
        titleEnglish: 'Composition (D/A)',
        block: [
          {
            title: '演技の構成',
            titleEnglish: 'Composition of the Routine',
            element:
              '演技は手具操作を伴った徒手系と転回系を持って構成され、高い技術的価値と各要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性をもった組み合わせで、豊富な運動量を持って構成されなければならない。',
            elementEnglish:
              'A routine is composed of free-hand and tumbling elements with apparatus handling, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
          },
          {
            title: '難度の要求要素',
            titleEnglish: 'Difficulty Requirements',
            element: `個人競技の難度要素としては以下の難度を入れなければならない。
                  
違反した場合　　減点　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点

※要求された数以上の難度は、ランク下の難度として数えることができる。
                  `,
            elementEnglish: `An individual routine must include the following difficulties.

Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: '難度の要求要素表',
                altEnglish: 'Table of difficulty requirements',
              },
            ],
          },
          {
            title: '徒手系の要求要素',
            titleEnglish: 'Free-Hand Requirements',
            element:
              '演技には徒手系基礎要素群（第29条）の１群（各種徒手）を入れなければならない。【違反した場合　減点・・・0.30点】',
            elementEnglish:
              'A routine must include group 1 (various free-hand movements) of the basic free-hand element groups (Article 29). [Violation: deduction 0.30 points]',
          },
          {
            title: '転回系の要求要素',
            titleEnglish: 'Tumbling Requirements',
            element:
              '演技には前方・後方・側方の転回運動をすべてて入れなければならない。【違反した場合　減点：一つにつき・・・0.30点】',
            elementEnglish:
              'A routine must include forward, backward and sideways tumbling. [Violation: deduction 0.30 points for each missing direction]',
          },
          {
            title: '手具操作の要求要素',
            titleEnglish: 'Apparatus Handling Requirements',
            element: `演技には各種目ごとに、次の基礎要素をすべて入れなければならない。

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
            elementEnglish: `A routine must include all of the following basic elements for each apparatus.

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
          },
          {
            title: '手具の要素と難度',
            titleEnglish: 'Apparatus Elements and Difficulty',
            element: `【投げ上げ】

1. 手具の投げ上げの高さは、競技者が投げたところから最低２m以上とする。低い場合は投げ上げとして扱わない。
2. スティックの投げ受けの要素は、受け損じた場合には要素として扱わない。
3. 手具を投げている間に、徒手系や転回系を行い受け損じた場合、投げ上げの要素として数えるが、投げ受けの難度としては扱わない。ただし、リングやクラブの２つの同時投げで片方の手具のみ受け損じた場合は、投げ上げの難度として数える。
4. ２つ同時投げは、片手、両手または足で投げるものとし、受けは自由とする。ただし、２つのリングを結合して投げた場合や、片方の手具が投げたところから２mに満たない場合は要素として認めない。

【ころがし】

ころがしが短かった場合は、要素としては扱わない。

【ロープの様々な跳び】
前回し跳び、後ろ回し跳びが２回連続でなかった場合、移動をともなう跳びの距離が短かった場合は要素としては扱わない。
                  `,
            elementEnglish: `[Throws]

1. A throw must rise at least 2 m from the point of release. Lower throws are not treated as throws.
2. A stick throw-and-catch element that is not caught is not counted as an element.
3. If the gymnast performs free-hand or tumbling elements during a throw and fails to catch the apparatus, it counts as a throw element but not as a throw-and-catch difficulty. However, in a simultaneous throw of two rings or two clubs, if only one apparatus is not caught, it counts as a throw difficulty.
4. A simultaneous throw of two apparatus may be made with one hand, both hands or the feet, and the catch is free. However, it is not accepted as an element if the two rings are joined together when thrown, or if one of the apparatus rises less than 2 m from the point of release.

[Rolls]

A roll that is too short is not counted as an element.

[Rope jumps]
Forward and backward jumps that are not performed twice in a row, and traveling jumps that cover too short a distance, are not counted as elements.`,
          },
          {
            title: '演技の開始',
            titleEnglish: 'Start of the Routine',
            element:
              '演技の開始は、演技面のどの位置からでもよいが、手具に触れた状態で配置について開始のポーズをとり、動きを止めてから始めなければならない。【違反した場合　減点・・・0.30点】',
            elementEnglish:
              'The routine may start anywhere on the floor area, but the gymnast must take position touching the apparatus, hold a starting pose and be still before starting. [Violation: deduction 0.30 points]',
          },
          {
            title: '演技の終了',
            titleEnglish: 'End of the Routine',
            element: `演技の終了は、演技面のどの位置でもよいが、手具に触れた状態で終了のポーズをとり、完全に動きを止めて終了しなければならない。
【違反した場合　減点・・・0.30点】

手具を場外へ取りに行き、そのままラストポーズを行わなかった場合
終了なし　　構成審判からの減点・・・0.30点
演技中断　　実施審判からの減点・・・0.50点
場外　　　実施主任審判から減点・・・0.20点
計 1.00点
                  `,
            elementEnglish: `The routine may end anywhere on the floor area, but the gymnast must hold a final pose touching the apparatus and stop moving completely.
[Violation: deduction 0.30 points]

If the gymnast leaves the floor area to retrieve the apparatus and does not hold a final pose:
No ending: deduction by the composition judges, 0.30 points
Interruption of the routine: deduction by the execution judges, 0.50 points
Out of bounds: deduction by the execution chief judge, 0.20 points
Total: 1.00 point`,
          },
          {
            title: '技術的価値の採点',
            titleEnglish: 'Scoring of Technical Value',
            element: `＜難度の数とレベル＞ 第49条による

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
            elementEnglish: `<Number and level of difficulties> See Article 49.

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
          },
          {
            title: '多様性の採点',
            titleEnglish: 'Scoring of Variety',
            element: `1. 徒手系要素の多様性
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
            elementEnglish: `1. Variety of free-hand elements
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
          },
          {
            title: '音楽と動きの関係の採点',
            titleEnglish: 'Scoring of the Relationship Between Music and Movement',
            element:
              '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
            elementEnglish:
              'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
          },
          {
            title: 'ボーナス加点',
            titleEnglish: 'Bonus',
            element: `【独創性】
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
            elementEnglish: `[Originality]
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
          },
          {
            title: '構成の欠点',
            titleEnglish: 'Composition Faults',
            element: `上記に欠点を示していない構成の原点は次の表による。
構成欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

構成欠点表`,
            elementEnglish: `Composition deductions not listed above follow the table below.
Composition fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of composition faults`,
            image: [
              {
                src: '/images/rules/(D)kettenhyou(S).png',
                alt: '構成欠点表',
                altEnglish: 'Table of composition faults',
              },
            ],
          },
        ],
      },
      {
        title: '実施（Ｅ）',
        titleEnglish: 'Execution (E)',
        block: [
          {
            title: '演技のできばえ',
            titleEnglish: 'Quality of the Routine',
            element:
              '演技は手具操作をともなった徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象でのびのびと行われなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
            elementEnglish:
              'A routine must show overall harmony and stability in free-hand technique with apparatus handling, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
          },
          {
            title: '手具操作の技術の採点',
            titleEnglish: 'Scoring of Apparatus Handling Technique',
            element: `【一般的な技術】
演技中の手具は、常に自然性を持ち、その手具自体の重さからくる惰力を利用して、動かなければならない。また演技上必要とされる静止を除いて、手具を止めてはならない。

【振り回しの技術】
手具を手に持って、振ったり回したりする場合は、原則として腕の延長のように扱わなければならない。

【投げ受けの技術】
1. 手で手具を投げる技術
特殊な投げを除き、原則として振りや回しの技術を利用して投げなければならない。

2. 手具を受ける技術
手具の受け取りは、手具の落下に合わせ、その次の操作に必要とされる部分を、自然性を持って受け取り、止めることなく次の操作に移らなければならない。`,
            elementEnglish: `[General technique]
During the routine, the apparatus must always move naturally, using the momentum that comes from its own weight. The apparatus must not be stopped, except for static positions required by the routine.

[Swinging technique]
When the apparatus is swung or circled in the hand, as a rule it must be handled like an extension of the arm.

[Throwing and catching technique]
1. Throwing the apparatus with the hand
Except for special throws, as a rule the apparatus must be thrown using the swinging or circling technique.

2. Catching the apparatus
The apparatus must be caught naturally, in time with its fall, at the part needed for the next handling, and the gymnast must move on to the next handling without stopping.`,
          },
          {
            title: '体の動きの技術の採点',
            titleEnglish: 'Scoring of Body Movement Technique',
            element: `身体の動きの技術は、次の項目で採点される。
                  
1. 徒手系の技術
徒手系は、美しい姿勢と柔軟性をもって行われ、みぞおちから始まる動きの自然性や深さ、大きさ、動きの間やアクセント、跳躍の高さ、そしてスピードに変化があり、身体の四肢の部分まで制御された動きでなければならない。

2.転回系の技術
転回系は、スピードと高さ、回転軸の正確性と着地の安定性を持ったダイナミックな動きでなければならない。

3. リズミカルな実施
演技は軽快に伸びやかに行わなければならない。`,
            elementEnglish: `Body movement technique is scored on the following points.

1. Free-hand technique
Free-hand movements must be performed with beautiful posture and flexibility. Movements starting from the solar plexus must be natural, deep and large, with pauses and accents, height in jumps and changes of speed, and must be controlled to the tips of the limbs.

2. Tumbling technique
Tumbling must be dynamic, with speed and height, an accurate axis of rotation and stable landings.

3. Rhythmic execution
The routine must be performed lightly and expansively.`,
          },
          {
            title: 'ボーナス加点',
            titleEnglish: 'Bonus',
            element: `【熟練度と芸術性】
熟練度とは、手具を扱う技術と身体の動きの技術とが、完璧にかつ同時にコントロールされていることをいう。また芸術性とは、それらの技術を用いて、音楽のテーマと構成のメッセージを観衆に表現し伝え感動させることを言う。以下を満たした場合、これに対してボーナス加点が与えられる。

1. 演技全体が欠点なく演じられた場合
2. 演技全体を通じて、完璧な技術、ゆとり、卓抜な大きさを持って行われた場合
3. 音楽のテーマと構成のメッセージを完璧に表現し演じられた場合
【加点・・・各0.10点】

※ここでの欠点は第65条実施の欠点表に記載されている「徒手の動きの技術」以外の欠点がない場合をいう。`,
            elementEnglish: `[Mastery and artistry]
Mastery means that apparatus handling technique and body movement technique are controlled perfectly and simultaneously. Artistry means using these techniques to express the theme of the music and the message of the composition to the audience, conveying it and moving them. A bonus is given when the following are met.

1. The whole routine is performed without faults.
2. The whole routine is performed with perfect technique, ease and outstanding amplitude.
3. The theme of the music and the message of the composition are expressed perfectly.
[Bonus: 0.10 points each]

* "Without faults" here means that there are no faults in the table of execution faults in Article 65 other than those under "free-hand movement technique".`,
          },
          {
            title: '実施の欠点',
            titleEnglish: 'Execution Faults',
            element: `上記に欠点を示していない実施の減点は次の表による。
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表`,
            elementEnglish: `Execution deductions not listed above follow the table below.
Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults`,
            image: [
              {
                src: '/images/rules/(E)kettenhyou(S).png',
                alt: '実施欠点表',
                altEnglish: 'Table of execution faults',
              },
            ],
          },
        ],
      },
    ],
  },
]
