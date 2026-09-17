import type { RuleArticle } from '../../model/ruleBook'

/**
 * 第2章 採点規則のうち、団体競技。
 * 英語（`titleEn` など）は日本語の本文を訳したもの
 */
export const GROUP_SCORING_ARTICLES: RuleArticle[] = [
  {
    title: '団体競技',
    titleEn: 'Group Competition',
    section: [
      {
        title: '団体競技（自由演技）の採点',
        titleEn: 'Scoring of the Group Competition (Free Routine)',
        block: [
          {
            title: '団体（自由演技）の採点項目と配点',
            titleEn: 'Scoring Criteria and Points for the Group (Free Routine)',
            element: '自由演技の配点と採点項目は以下の通りとする。',
            elementEn: 'The points and scoring criteria for the free routine are as follows.',
            image: [
              {
                src: '/images/rules/SK(D)group.png',
                alt: '採点項目（Ｄ）',
                altEn: 'Scoring criteria (D)',
              },
              {
                src: '/images/rules/SK(E)group.png',
                alt: '採点項目（Ｅ）',
                altEn: 'Scoring criteria (E)',
              },
            ],
          },
        ],
      },
      {
        title: '構成（Ｄ・Ａ）',
        titleEn: 'Composition (D/A)',
        block: [
          {
            title: '演技人数不足',
            titleEn: 'Too Few Gymnasts',
            element: `演技人数が以下に満たない場合は、以下の通りとする。

1. ４名未満の場合は出場できない
1. ４〜５名の場合　【構成主任審判より減点：１名につき・・・1.50点】`,
            elementEn: `If the number of gymnasts is below six, the following applies.

1. A group with fewer than four gymnasts may not compete.
1. A group with four or five gymnasts  [Deduction by the composition chief judge: 1.50 points per missing gymnast]`,
          },
          {
            title: '構成に求められるもの',
            titleEn: 'Requirements for the Composition',
            element:
              '演技は徒手系要素と回転系要素を持って構成され、高い技術的価値と各種要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性を持った組み合わせで、豊富な運動量を持って構成されなければならない。',
            elementEn:
              'A routine is composed of free-hand elements and tumbling elements, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
          },
          {
            title: '難度の要求要素',
            titleEn: 'Difficulty Requirements',
            element: `1. 難度要素の価値
競技では、事故の体を完全に支配すべきものであるから、演技は競技者の能力に応じた力強さと美しさと安定が必要である。

2. 難度要素の価値とレベル
団体競技の難度要素としては以下の難度を入れなければならない。

【違反した場合　　減点：　
Ｂ難度不足　１つにつき・・・0.10点
Ｃ難度不足　１つにつき・・・0.30点
Ｄ難度不足　１つにつき・・・0.50点】

※要求された数以上の難度は、ランク下の難度として数えることができる。`,
            elementEn: `1. Value of difficulty elements
Gymnasts must have complete control of their bodies in competition, so a routine requires power, beauty and stability suited to the gymnasts' ability.

2. Value and level of difficulty elements
A group routine must include the following difficulties.

[Violation: deductions
Each missing B difficulty: 0.10 points
Each missing C difficulty: 0.30 points
Each missing D difficulty: 0.50 points]

* Difficulties beyond the required number can be counted as difficulties of a lower rank.`,
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: '難度の要求要素表',
                altEn: 'Table of difficulty requirements',
              },
            ],
          },
          {
            title: '徒手系の要求要素',
            titleEn: 'Free-Hand Requirements',
            element: `演技には徒手系基礎要素群１〜５全て入れなければならない。
２〜５は難度要素として数えることができるが、全員が同時または時間差で行われるものでなければならない。
また、静止は全員が同時に行うものでなければならない。

1. 徒手系基礎要素群の１つが全くない場合　　　【減点：１つにつき・・・1.00点】
2. 徒手系基礎要素群の１つが不十分な場合　　　【減点：１名につき・・・0.20点】
※不十分とは実施しない競技者がいた場合を示し、静止時間不足や柔軟性不足は実施減点とする。`,
            elementEn: `A routine must include all the basic free-hand element groups 1 to 5.
Groups 2 to 5 can be counted as difficulty elements, but they must be performed by all gymnasts, either at the same time or one after another.
Static positions must be held by all gymnasts at the same time.

1. A basic free-hand element group is missing entirely.  [Deduction: 1.00 point per group]
2. A basic free-hand element group is incomplete.  [Deduction: 0.20 points per gymnast]
* Incomplete means that some gymnasts did not perform it. Holding a static position too briefly or insufficient flexibility is penalized in execution.`,
            image: [
              {
                src: '/images/rules/(BM)requirement.png',
                alt: '徒手系の要求要素表',
                altEn: 'Table of free-hand requirements',
              },
            ],
          },
          {
            title: '転回系の種類',
            titleEn: 'Types of Tumbling',
            element: `回転系には、助走を含めた転回運動と組および組立運動が含まれ、次の種類に分類される。

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
            elementEn: `Tumbling includes tumbling movements with their run-up, and partner and pyramid elements, and is classified into the following types.

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
          },
          {
            title: '回転系の条件',
            titleEn: 'Conditions for Tumbling',
            element: `演技で実施された以下のものは転回系として数える。

1. １名以上が転回運動を単一（１回）または連続して実施した場合。
2. 組または組立運動を実施した場合。
3. 全員がいくつかのグループに分かれて次々と途切れずに（１）や（２）の転回運動を実施した場合。
4. 転回運動を行う際の助走は、転回系の一部として認める。
5. 側転を除く接転運動（前転・後転・横転・倒立回転）は転回系として数えないが、宙返りの後に補助的運動として行う前転および後転は回転系の一部として認める。
6. ３歩以上の助走つきのとびこみ前転（両足踏切）、２歩以内の助走つきのとびこみ前転（含片足踏切）でもひねりを加えた場合。`,
            elementEn: `The following count as tumbling when performed in a routine.

1. One or more gymnasts perform a tumbling movement, once or in a series.
2. A partner or pyramid element is performed.
3. All gymnasts, divided into groups, perform the tumbling in (1) or (2) one after another without a break.
4. The run-up to a tumbling movement is accepted as part of the tumbling.
5. Rolling movements other than cartwheels (forward roll, backward roll, sideways roll, walkover) do not count as tumbling, but a forward or backward roll performed after a salto as a supporting movement is accepted as part of the tumbling.
6. A dive roll with a run-up of three or more steps (two-foot take-off), or a dive roll with a run-up of two steps or fewer (including a one-foot take-off) with an added twist.`,
          },
          {
            title: '転回系の要求要素',
            titleEn: 'Tumbling Requirements',
            element: `1. 回転系は４回入れなければならない。
【違反した場合　減点・・・0.30点】

2. 演技には次の転回系基礎要素群１・２を入れなければならない。
また転回系基礎要素群３は２回まで入れることができる。
【違反した場合：減点・・・0.30点】
※組・組立運動または接触でのスタートは３群扱いとする。`,
            elementEn: `1. A routine must include four tumbling passes.
[Violation: deduction 0.30 points]

2. A routine must include the basic tumbling element groups 1 and 2 below.
Basic tumbling element group 3 may be included up to two times.
[Violation: deduction 0.30 points]
* A start from a partner or pyramid element or from contact is treated as group 3.`,
            image: [
              {
                src: '/images/rules/(AM)requirement.png',
                alt: '転回系の要求要素表',
                altEn: 'Table of tumbling requirements',
              },
            ],
          },
          {
            title: '制限技',
            titleEn: 'Restricted Elements',
            element: '',
            elementEn: '',
          },
          {
            title: '隊形の要求要素',
            titleEn: 'Formation Requirements',
            element:
              '隊形は最低５つ異なったものを含まなければならない。【違反した場合　減点・・・0.30点】',
            elementEn:
              'A routine must include at least five different formations. [Violation: deduction 0.30 points]',
          },
          {
            title: '演技の開始',
            titleEn: 'Start of the Routine',
            element: `1. 演技の開始は、演技面のどこ位置からでも良いが、全員が配置について開始のポーズをとり、動きを止めてから始めなければならない。
2. 演技開始時における接触および組・組立運動は転回系としては扱わないものとする。ただし解除までは３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
            elementEn: `1. The routine may start anywhere on the floor area, but all gymnasts must take their positions, hold a starting pose and be still before starting.
2. Contact and partner or pyramid elements at the start of the routine are not treated as tumbling. They must be released within 3 seconds; if they last longer or include a salto, they count as tumbling.`,
          },
          {
            title: '演技の終了',
            titleEn: 'End of the Routine',
            element: `1. 演技終了は演技面内であればどの位置でもよいが、全員が終了のポーズをとり完全に動きを止めなければならない。
2. 演技終了時の接触および組・組立運動は転回系としては扱わない。ただし、終了ポーズに入る前の動作から３秒以内とし、それを超えた場合や宙返りを入れた場合は転回系として数える。`,
            elementEn: `1. The routine may end anywhere on the floor area, but all gymnasts must hold a final pose and stop moving completely.
2. Contact and partner or pyramid elements at the end of the routine are not treated as tumbling. They must be completed within 3 seconds of the movement leading into the final pose; if they last longer or include a salto, they count as tumbling.`,
          },
          {
            title: '技術的価値の採点',
            titleEn: 'Scoring of Technical Value',
            element: `演技の技術の価値は次の項目によって採点する。

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
            elementEn: `The technical value of a routine is scored on the following points.

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
          },
          {
            title: '多様性の採点',
            titleEn: 'Scoring of Variety',
            element: `構成は、以下の項目において多様性に富むという印象を与えなければならない。

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
            elementEn: `The composition must give an impression of great variety in the following respects.

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
          },
          {
            title: '音楽と動きの関係の採点',
            titleEn: 'Scoring of the Relationship Between Music and Movement',
            element:
              '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
            elementEn:
              'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
          },
          {
            title: '独創性の採点',
            titleEn: 'Scoring of Originality',
            element:
              '構成は、新しい技術や新しい組み合わせなど、新しさの探求と技術的な創造性によって特徴付けられる独創性が求められる。',
            elementEn:
              'The composition must show originality, characterized by the pursuit of novelty and technical creativity, such as new techniques and new combinations.',
          },
          {
            title: '構成の欠点',
            titleEn: 'Composition Faults',
            element: `上記に欠点を示していない構成の減点は次の表による。
                  
構成欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

構成欠点表`,
            elementEn: `Composition deductions not listed above follow the table below.

Composition fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of composition faults`,
            image: [
              {
                src: '/images/rules/(D)kettenhyou.png',
                alt: '構成欠点表',
                altEn: 'Table of composition faults',
              },
            ],
          },
        ],
      },
      {
        title: '実施（Ｅ）',
        titleEn: 'Execution (E)',
        block: [
          {
            title: '演技のできばえ',
            titleEn: 'Quality of the Routine',
            element:
              '演技は徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象で伸び伸びと行わなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
            elementEn:
              'A routine must show overall harmony and stability in free-hand technique, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
          },
          {
            title: '体の動きの技術の採点',
            titleEn: 'Scoring of Body Movement Technique',
            element: `身体の動きの技術は、次の項目で採点される。

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
            elementEn: `Body movement technique is scored on the following points.

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
          },
          {
            title: '全体的な調和の採点',
            titleEn: 'Scoring of Overall Harmony',
            element: `全体的な調和は次の項目で採点される。

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
            elementEn: `Overall harmony is scored on the following points.

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
          },
          {
            title: '禁止事項',
            titleEn: 'Prohibited Actions',
            element: '演技中に漕いでない体の接触はしてはいけない。',
            elementEn: 'Unnecessary body contact must not be made during the routine.',
          },
          {
            title: '実施の欠点',
            titleEn: 'Execution Faults',
            element: `上記に示していない実施の減点は次の表による。実施欠点基準
                  
実施欠点基準
【大欠点　　著しく欠けた場合　　　　減点・・・0.30点】
【中欠点　　欠けた場合　　　　　　　減点・・・0.20点】
【小欠点　　少し欠けた場合　　　　　減点・・・0.10点】
【微小欠点　わずかに欠けた場合　　　減点・・・0.05点】

実施欠点表

倒立、バランス、柔軟の実施減点`,
            elementEn: `Execution deductions not listed above follow the table below.

Execution fault standards
[Large fault: severely lacking  Deduction 0.30 points]
[Medium fault: lacking  Deduction 0.20 points]
[Small fault: slightly lacking  Deduction 0.10 points]
[Very small fault: very slightly lacking  Deduction 0.05 points]

Table of execution faults

Execution deductions for handstands, balances and flexibility`,
            image: [
              {
                src: '/images/rules/(E)kettenhyou1.png',
                alt: '実施欠点表（D）１',
                altEn: 'Table of execution faults, part 1',
              },
              {
                src: '/images/rules/(E)kettenhyou2.png',
                alt: '実施欠点表（D）２',
                altEn: 'Table of execution faults, part 2',
              },
              {
                src: '/images/rules/(E)kettenhyou3.png',
                alt: '実施欠点表（D）３',
                altEn: 'Table of execution faults, part 3',
              },
            ],
          },
        ],
      },
    ],
  },
]
