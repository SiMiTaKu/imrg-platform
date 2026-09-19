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
      ko: '개인 경기',
    },
    section: [
      {
        title: {
          ja: '配点と採点項目',
          en: 'Points and Scoring Criteria',
          ko: '배점과 채점 항목',
        },
        block: [
          {
            title: {
              ja: '個人競技の採点項目と配点',
              en: 'Scoring Criteria and Points for the Individual Competition',
              ko: '개인 경기의 채점 항목과 배점',
            },
            element: {
              ja: '個人競技の配点と採点項目は以下の通りとする。',
              en: 'The points and scoring criteria for the individual competition are as follows.',
              ko: '개인 경기의 배점과 채점 항목은 다음과 같이 한다.',
            },
            image: [
              {
                src: '/images/rules/SK(D)single.png',
                alt: {
                  ja: '採点項目（Ｄ）',
                  en: 'Scoring criteria (D)',
                  ko: '채점 항목(D)',
                },
              },
              {
                src: '/images/rules/SK(E)single.png',
                alt: {
                  ja: '採点項目（Ｅ）',
                  en: 'Scoring criteria (E)',
                  ko: '채점 항목(E)',
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
          ko: '구성(D/A)',
        },
        block: [
          {
            title: {
              ja: '演技の構成',
              en: 'Composition of the Routine',
              ko: '연기의 구성',
            },
            element: {
              ja: '演技は手具操作を伴った徒手系と転回系を持って構成され、高い技術的価値と各要素の多様性、音楽と動きの関係や独創性が求められる。また、すべての運動が合理性と安定性をもった組み合わせで、豊富な運動量を持って構成されなければならない。',
              en: 'A routine is composed of free-hand and tumbling elements with apparatus handling, and must have high technical value, a variety of elements, a good relationship between music and movement, and originality. All movements must be combined rationally and with stability, and the routine must contain a large amount of movement.',
              ko: '연기는 수구 조작을 동반한 신체 계열과 공중돌기 계열로 구성되며, 높은 기술적 가치와 각 요소의 다양성, 음악과 움직임의 관계 및 독창성이 요구된다. 또한 모든 운동이 합리성과 안정성을 갖춘 조합으로, 풍부한 운동량을 가지고 구성되어야 한다.',
            },
          },
          {
            title: {
              ja: '難度の要求要素',
              en: 'Difficulty Requirements',
              ko: '난도의 요구 요소',
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
              ko: `개인 경기의 난도 요소로는 다음 난도를 넣어야 한다.
                  
위반한 경우  감점
B난도 부족 1개당...0.10점
C난도 부족 1개당...0.30점
D난도 부족 1개당...0.50점

※요구된 수보다 많은 난도는 한 단계 아래 등급의 난도로 셀 수 있다.
                  `,
            },
            image: [
              {
                src: '/images/rules/(D)requirement.png',
                alt: {
                  ja: '難度の要求要素表',
                  en: 'Table of difficulty requirements',
                  ko: '난도의 요구 요소 표',
                },
              },
            ],
          },
          {
            title: {
              ja: '徒手系の要求要素',
              en: 'Free-Hand Requirements',
              ko: '신체 계열의 요구 요소',
            },
            element: {
              ja: '演技には徒手系基礎要素群（第29条）の１群（各種徒手）を入れなければならない。【違反した場合　減点・・・0.30点】',
              en: 'A routine must include group 1 (various free-hand movements) of the basic free-hand element groups (Article 29). [Violation: deduction 0.30 points]',
              ko: '연기에는 신체 계열 기초 요소군(제29조)의 1군(각종 신체 운동)을 넣어야 한다. 【위반한 경우 감점...0.30점】',
            },
          },
          {
            title: {
              ja: '転回系の要求要素',
              en: 'Tumbling Requirements',
              ko: '공중돌기 계열의 요구 요소',
            },
            element: {
              ja: '演技には前方・後方・側方の転回運動をすべてて入れなければならない。【違反した場合　減点：一つにつき・・・0.30点】',
              en: 'A routine must include forward, backward and sideways tumbling. [Violation: deduction 0.30 points for each missing direction]',
              ko: '연기에는 전방, 후방, 측방의 공중돌기 운동을 모두 넣어야 한다. 【위반한 경우 감점: 1개당...0.30점】',
            },
          },
          {
            title: {
              ja: '手具操作の要求要素',
              en: 'Apparatus Handling Requirements',
              ko: '수구 조작의 요구 요소',
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
              ko: `연기에는 각 종목마다 다음 기초 요소를 모두 넣어야 한다.

【스틱】

1. 왼손 던지기 왼손 받기 1회
2. 오른손 던지기 오른손 받기 1회
3. 1. 2.를 포함한 3회 이상의 던져 올리기
4. 1m 이상의 굴리기
5. 프로펠러 회전 2회

【요소가 부족한 경우 감점: 1개당...0.30점】


【링】

1. 2개 동시 던지기
2. 1.을 포함한 3회 이상의 던져 올리기
3. 1m 이상의 굴리기
4. 돌리기 2회

【요소가 부족한 경우 감점: 1개당...0.30점】


【줄】

1. 3회 이상의 던져 올리기
2. 3중 뛰기
3. 6m 이상의 이동을 동반한 연속 뛰기
4. 2회 이상의 연속 앞돌리기 뛰기
5. 2회 이상의 연속 뒤돌리기 뛰기

【요소가 부족한 경우 감점: 1개당...0.30점】


【곤봉】

1. 2개 동시 던지기
2. 1.을 포함한 3회 이상의 던져 올리기
3. 50cm 이상의 굴리기
4. 프로펠러 회전 2회

【요소가 부족한 경우 감점: 1개당...0.30점】`,
            },
          },
          {
            title: {
              ja: '手具の要素と難度',
              en: 'Apparatus Elements and Difficulty',
              ko: '수구의 요소와 난도',
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
              ko: `【던져 올리기】

1. 수구를 던져 올리는 높이는 경기자가 던진 지점에서 최저 2m 이상으로 한다. 낮은 경우에는 던져 올리기로 인정하지 않는다.
2. 스틱의 던져 받기 요소는 받기에 실패한 경우에는 요소로 인정하지 않는다.
3. 수구를 던지고 있는 동안에 신체 계열이나 공중돌기 계열을 실시하고 받기에 실패한 경우, 던져 올리기 요소로는 세지만 던져 받기 난도로는 인정하지 않는다. 다만 링이나 곤봉의 2개 동시 던지기에서 한쪽 수구만 받기에 실패한 경우에는 던져 올리기 난도로 센다.
4. 2개 동시 던지기는 한 손, 양손 또는 발로 던지는 것으로 하며, 받기는 자유로 한다. 다만 2개의 링을 결합하여 던진 경우나, 한쪽 수구가 던진 지점에서 2m에 미치지 못하는 경우에는 요소로 인정하지 않는다.

【굴리기】

굴리기가 짧은 경우에는 요소로 인정하지 않는다.

【줄의 다양한 뛰기】
앞돌리기 뛰기, 뒤돌리기 뛰기가 2회 연속이 아닌 경우, 이동을 동반한 뛰기의 거리가 짧은 경우에는 요소로 인정하지 않는다.
                  `,
            },
          },
          {
            title: {
              ja: '演技の開始',
              en: 'Start of the Routine',
              ko: '연기의 시작',
            },
            element: {
              ja: '演技の開始は、演技面のどの位置からでもよいが、手具に触れた状態で配置について開始のポーズをとり、動きを止めてから始めなければならない。【違反した場合　減点・・・0.30点】',
              en: 'The routine may start anywhere on the floor area, but the gymnast must take position touching the apparatus, hold a starting pose and be still before starting. [Violation: deduction 0.30 points]',
              ko: '연기의 시작은 연기 면의 어느 위치에서 하여도 좋으나, 수구에 닿은 상태로 자리를 잡고 시작 포즈를 취하여 움직임을 멈춘 뒤에 시작하여야 한다. 【위반한 경우 감점...0.30점】',
            },
          },
          {
            title: {
              ja: '演技の終了',
              en: 'End of the Routine',
              ko: '연기의 종료',
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
              ko: `연기의 종료는 연기 면의 어느 위치에서 하여도 좋으나, 수구에 닿은 상태로 종료 포즈를 취하고 완전히 움직임을 멈추고 끝내야 한다.
【위반한 경우 감점...0.30점】

수구를 장외로 가지러 가서 그대로 마지막 포즈를 취하지 않은 경우
종료 없음  구성 심판의 감점...0.30점
연기 중단  실시 심판의 감점...0.50점
장외  실시 주임 심판의 감점...0.20점
계 1.00점
                  `,
            },
          },
          {
            title: {
              ja: '技術的価値の採点',
              en: 'Scoring of Technical Value',
              ko: '기술적 가치의 채점',
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
              ko: `<난도의 수와 레벨> 제49조에 따른다

【난도 요소】
1. 신체 계열 요소를 동반하여 실시되는 난도  제71조에 따른다.
2. 공중돌기 계열 요소를 동반하여 실시되는 난도  제69조에 따른다.
3. 던져 받기를 동반하여 실시되는 난도  제70조에 따른다.
                    
【각종 요소의 조합】
1. 각 운동의 조합에 따른 기술적 가치
연기는 각 운동의 조합 가치에 따라서도 기술적 가치가 달라진다.

2. 난도 요소의 배분
난도 요소는 연기 전체에 균일하게 배분될 것이 요구된다.

3. 난도 요소의 안정
난도 요소는 경기자의 능력에 맞추어 구성되어야 한다.


<수구 조작의 기술적 가치>

【수구 조작에서의 왼손과 오른손의 균형】
수구의 조작은 하나의 조화로운 구성으로서, 한쪽으로 치우치지 않고 왼손과 오른손으로 이루어져야 한다.

【던져 받기의 기술적 가치】
수구의 던져 받기는 수구 조작의 흐름을 멈추지 않고 이루어져야 한다. 또한 손뿐만 아니라 그 밖의 부위를 사용한 던져 받기나 시야 밖에서의 던져 받기도 높은 기술적 가치로 인정할 수 있다.`,
            },
          },
          {
            title: {
              ja: '多様性の採点',
              en: 'Scoring of Variety',
              ko: '다양성의 채점',
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
              ko: `1. 신체 계열 요소의 다양성
다양한 신체 계열의 운동 요소와 그 조합에서 다양성이 풍부하여야 한다.

2. 공중돌기 계열 요소의 다양성
다양한 공중돌기 계열의 요소와 종류, 그 조합에서 다양성이 풍부하여야 한다.

3. 수구 조작의 다양성
다양한 수구의 조작과 그 조합에서 다양성이 풍부하여야 한다. (부록: 각 수구의 연기 참조)

4. 공간 사용의 다양성
다양한 이동을 포함하여 그 방향, 크기, 궤도, 높이에서 연기 면 전체를 사용하여야 한다.

5. 리듬 변화의 다양성
음악의 성격, 그 리듬과 완전히 일치한 운동으로, 그 리듬의 변화가 다양성이 풍부하여야 한다.

6. 다이내미즘(역동감) 변화의 다양성
다이내미즘이란 스피드와 힘의 변화에 의해 표현되는 역동감을 말하며, 그 완급의 변화에서 다양성이 풍부하여야 한다.`,
            },
          },
          {
            title: {
              ja: '音楽と動きの関係の採点',
              en: 'Scoring of the Relationship Between Music and Movement',
              ko: '음악과 움직임의 관계의 채점',
            },
            element: {
              ja: '新体操の伴奏音楽は、よい音色とメロディーによって特徴付けられるものでなければならない。演技は音楽の性格やリズムに合致しなければならない。',
              en: 'The accompanying music for rhythmic gymnastics must be characterized by good tone and melody. The routine must match the character and rhythm of the music.',
              ko: '리듬체조의 반주 음악은 좋은 음색과 멜로디로 특징지어지는 것이어야 한다. 연기는 음악의 성격과 리듬에 합치하여야 한다.',
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              ko: '보너스 가점',
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
              ko: `【독창성】
구성에는 새로운 기술이나 새로운 조합 등, 새로움의 탐구와 기술적인 창조성으로 특징지어지는 독창성이 요구된다. 그 독창성이 인정되는 구성에는 보너스 가점이 주어진다.

독창적인 구성이란 다음과 같은 사항이 요구되는 것을 말한다.
1. 새로운 요소(신체 움직임의 요소, 수구 조작의 요소, 공중돌기 계열 또는 그것들의 연계 요소)
2. 경기자와 수구의 관계에서의 새로움
3. 이미 있는 요소의 새로운 실시 방법
4. 이미 있는 요소의 새로운 조합
【가점...0.20점】

【추가 난도】
연기의 기술적인 가치는 주로 난도의 레벨과 수, 그 조합 가치에 의해 고려된다. 다음 (1)~(4)의 경우에 그 "기술의 가치"에 대하여 보너스 가점이 주어진다.

1. 구성 중에 4개 이상의 D난도가 들어 있는 경우
2. 수구를 던져 올리고 있는 동안에 4개 이상의 신체 계열이나 공중돌기 계열을 조합하여 실시하는 것, 또는 D난도의 던져 받기를 2개 던지기로 실시한 경우.
3. 수구를 잡고 실시하는 D난도의 공중돌기 계열에 던지기 또는 2회 이상의 조작을 실시하는 것이 들어 있는 경우
4. 시야 밖에서의 던져 올리기나 받기, 손 이외의 부위에 의한 던져 올리기나 받기가 들어 있는 경우.
【가점: 항목 1개당...0.10점】`,
            },
          },
          {
            title: {
              ja: '構成の欠点',
              en: 'Composition Faults',
              ko: '구성의 결점',
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
              ko: `위에 결점을 제시하지 않은 구성의 감점은 다음 표에 따른다.
구성 결점 기준
【대결점  현저하게 부족한 경우  감점...0.30점】
【중결점  부족한 경우  감점...0.20점】
【소결점  조금 부족한 경우  감점...0.10점】
【미소결점  약간 부족한 경우  감점...0.05점】

구성 결점 표`,
            },
            image: [
              {
                src: '/images/rules/(D)kettenhyou(S).png',
                alt: {
                  ja: '構成欠点表',
                  en: 'Table of composition faults',
                  ko: '구성 결점 표',
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
          ko: '실시(E)',
        },
        block: [
          {
            title: {
              ja: '演技のできばえ',
              en: 'Quality of the Routine',
              ko: '연기의 완성도',
            },
            element: {
              ja: '演技は手具操作をともなった徒手系の技術、転回系の技術、伴奏音楽との調和など全体の調和と安定性があり、全体を通じて途切れない印象でのびのびと行われなければならない。伴奏音楽に合わせ、軽快で美しく、かつ優美な表現を持った実施が求められる。',
              en: 'A routine must show overall harmony and stability in free-hand technique with apparatus handling, tumbling technique and harmony with the accompanying music, and must be performed freely, giving an impression of continuity throughout. Execution that is light, beautiful and graceful, in time with the music, is required.',
              ko: '연기는 수구 조작을 동반한 신체 계열의 기술, 공중돌기 계열의 기술, 반주 음악과의 조화 등 전체의 조화와 안정성을 갖추고, 전체를 통하여 끊김 없는 인상으로 시원스럽게 이루어져야 한다. 반주 음악에 맞추어 경쾌하고 아름다우며 우아한 표현을 지닌 실시가 요구된다.',
            },
          },
          {
            title: {
              ja: '手具操作の技術の採点',
              en: 'Scoring of Apparatus Handling Technique',
              ko: '수구 조작 기술의 채점',
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
              ko: `【일반적인 기술】
연기 중의 수구는 항상 자연성을 지니고, 그 수구 자체의 무게에서 오는 타력을 이용하여 움직여야 한다. 또한 연기상 필요로 하는 정지를 제외하고는 수구를 멈추어서는 안 된다.

【휘두르기의 기술】
수구를 손에 들고 흔들거나 돌리는 경우에는 원칙적으로 팔의 연장처럼 다루어야 한다.

【던져 받기의 기술】
1. 손으로 수구를 던지는 기술
특수한 던지기를 제외하고는 원칙적으로 흔들기나 돌리기의 기술을 이용하여 던져야 한다.

2. 수구를 받는 기술
수구의 받기는 수구의 낙하에 맞추어, 다음 조작에 필요로 하는 부분을 자연성을 지니고 받아, 멈추지 않고 다음 조작으로 옮겨가야 한다.`,
            },
          },
          {
            title: {
              ja: '体の動きの技術の採点',
              en: 'Scoring of Body Movement Technique',
              ko: '신체 움직임 기술의 채점',
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
              ko: `신체 움직임의 기술은 다음 항목으로 채점된다.
                  
1. 신체 계열의 기술
신체 계열은 아름다운 자세와 유연성을 가지고 이루어지며, 명치에서 시작되는 움직임의 자연성과 깊이, 크기, 움직임의 간격과 악센트, 도약의 높이, 그리고 스피드에 변화가 있고, 신체의 사지 끝부분까지 제어된 움직임이어야 한다.

2.공중돌기 계열의 기술
공중돌기 계열은 스피드와 높이, 회전축의 정확성과 착지의 안정성을 지닌 다이내믹한 움직임이어야 한다.

3. 리드미컬한 실시
연기는 경쾌하고 시원스럽게 이루어져야 한다.`,
            },
          },
          {
            title: {
              ja: 'ボーナス加点',
              en: 'Bonus',
              ko: '보너스 가점',
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
              ko: `【숙련도와 예술성】
숙련도란 수구를 다루는 기술과 신체 움직임의 기술이 완벽하게 그리고 동시에 제어되고 있는 것을 말한다. 또한 예술성이란 그러한 기술을 사용하여 음악의 주제와 구성의 메시지를 관중에게 표현하고 전달하여 감동시키는 것을 말한다. 다음을 충족한 경우에 이에 대하여 보너스 가점이 주어진다.

1. 연기 전체가 결점 없이 연기된 경우
2. 연기 전체를 통하여 완벽한 기술, 여유, 탁월한 크기를 가지고 이루어진 경우
3. 음악의 주제와 구성의 메시지를 완벽하게 표현하여 연기된 경우
【가점...각 0.10점】

※여기에서의 결점이란 제65조 실시의 결점 표에 기재되어 있는 "신체 움직임의 기술" 이외의 결점이 없는 경우를 말한다.`,
            },
          },
          {
            title: {
              ja: '実施の欠点',
              en: 'Execution Faults',
              ko: '실시의 결점',
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
              ko: `위에 결점을 제시하지 않은 실시의 감점은 다음 표에 따른다.
실시 결점 기준
【대결점  현저하게 부족한 경우  감점...0.30점】
【중결점  부족한 경우  감점...0.20점】
【소결점  조금 부족한 경우  감점...0.10점】
【미소결점  약간 부족한 경우  감점...0.05점】

실시 결점 표`,
            },
            image: [
              {
                src: '/images/rules/(E)kettenhyou(S).png',
                alt: {
                  ja: '実施欠点表',
                  en: 'Table of execution faults',
                  ko: '실시 결점 표',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
